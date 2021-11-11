import {useCallback, useEffect, useState} from "react";
import {ApolloCache, ApolloError, FetchResult, gql, useLazyQuery, useMutation} from "@apollo/client";
import {Alert, Button, Card, Form, Input, message, Result, Spin} from "antd";
import {useForm} from "antd/es/form/Form";
import {observer} from "mobx-react";
import {FormattedMessage, useIntl} from "react-intl";
import {useHistory} from "react-router-dom";
import {EntityDetailsScreenProps, useScreens} from "@amplicode/react-core";
import {GeoMap, VectorLayer, GeoType} from "amplicode-maps";
import {TileLayer} from "react-leaflet";

const FIND_TERRITORY = gql`
  query findTerritory($id: Long!) {
    findTerritory(id: $id) {
      id
      name
      polygon
    }
  }
`;

const UPDATE_TERRITORY = gql`
  mutation updateTerritory($input: TerritoryDtoInput) {
    updateTerritory(input: $input) {
      id
      name
      polygon
    }
  }
`;

const TerritoryDetails = observer(({ id }: EntityDetailsScreenProps) => {
  const [form] = useForm();
  const intl = useIntl();
  const screens = useScreens();
  const history = useHistory();

  const [
    loadItem,
    { loading: queryLoading, error: queryError, data }
  ] = useLazyQuery(FIND_TERRITORY, {
    variables: {
      id
    }
  });

  const [executeUpsertMutation, { loading: upsertInProcess }] = useMutation(
    UPDATE_TERRITORY
  );

  const [formError, setFormError] = useState<string | undefined>();

  const goToParentScreen = useCallback(() => {
    history.push("."); // Remove entity id part from url
    screens.closeActiveBreadcrumb();
  }, [screens, history]);

  const handleSubmit = useCallback(
    values => {
      executeUpsertMutation({
        variables: {
          input: formValuesToData(values, id)
        },
        update: getUpdateFn(values)
      })
        .then(({ errors }: FetchResult) => {
          if (errors == null || errors.length === 0) {
            goToParentScreen();
            message.success(
              intl.formatMessage({
                id: "EntityDetailsScreen.savedSuccessfully"
              })
            );
            return;
          }
          setFormError(errors.join("\n"));
          console.error(errors);
          message.error(intl.formatMessage({ id: "common.requestFailed" }));
        })
        .catch((e: Error | ApolloError) => {
          setFormError(e.message);
          console.error(e);
          message.error(intl.formatMessage({ id: "common.requestFailed" }));
        });
    },
    [executeUpsertMutation, id, intl, goToParentScreen]
  );

  const handleSubmitFailed = useCallback(() => {
    message.error(
      intl.formatMessage({ id: "EntityDetailsScreen.validationError" })
    );
  }, [intl]);

  useEffect(() => {
    if (id != null) {
      loadItem();
    }
  }, [loadItem, id]);

  const item = data?.["findTerritory"];
  console.log("ITEM: ")
  console.log(item)

  useEffect(() => {
    if (item != null) {
      form.setFieldsValue(dataToFormValues(item));
    }
  }, [item, form]);

  if (queryLoading) {
    return <Spin />;
  }

  if (queryError) {
    return (
      <Result
        status="error"
        title={<FormattedMessage id="common.requestFailed" />}
      />
    );
  }

  return (
    <Card className="narrow-layout">
      <Form
        onFinish={handleSubmit}
        onFinishFailed={handleSubmitFailed}
        layout="vertical"
        form={form}
      >
        <Form.Item name="name" label="Name" style={{ marginBottom: "12px" }}>
          <Input />
        </Form.Item>

        <Form.Item
          name="polygon"
          label="Polygon"
          style={{ marginBottom: "12px" }}
        >
          <GeoMap centerX={-100.909} centerY={37.2625} zoom={4}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
            <VectorLayer id='territoryLayer' editable={true} geometryType={GeoType.Polygon}/>
          </GeoMap>
        </Form.Item>

        {formError && (
          <Alert
            message={formError}
            type="error"
            style={{ marginBottom: "18px" }}
          />
        )}

        <Form.Item style={{ textAlign: "center" }}>
          <Button htmlType="button" onClick={goToParentScreen}>
            <FormattedMessage id="common.cancel" />
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            loading={upsertInProcess}
            style={{ marginLeft: "8px" }}
          >
            <FormattedMessage id={"common.submit"} />
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
});

function formValuesToData(values: any, id?: string): any {
  return {
    ...values,
    id
  };
}

function dataToFormValues(data: any): any {
  return data;
}

function getUpdateFn(values: any) {
  return (cache: ApolloCache<any>, result: FetchResult) => {
    const updateResult = result.data?.["updateTerritory"];
    // Reflect the update in Apollo cache
    cache.modify({
      fields: {
        listTerritories(existingRefs = []) {
          const updatedItemRef = cache.writeFragment({
            id: `TerritoryDto:${updateResult.id}`,
            data: values,
            fragment: gql(`
              fragment New_TerritoryDto on TerritoryDto {
                id
              }
            `)
          });
          return [...existingRefs, updatedItemRef];
        }
      }
    });
  };
}

export default TerritoryDetails;
