import {useCallback, useEffect, useState} from "react";
import {ApolloCache, ApolloError, FetchResult, gql, useLazyQuery, useMutation} from "@apollo/client";
import {Alert, Button, Card, Form, InputNumber, message, Result, Spin} from "antd";
import {useForm} from "antd/es/form/Form";
import {observer} from "mobx-react";
import {FormattedMessage, useIntl} from "react-intl";
import {useHistory} from "react-router-dom";
import {EntityDetailsScreenProps, guessDisplayName, useScreens} from "@amplicode/react-core";
import {EntityLookupField} from "@amplicode/react-antd";
import {GeoMap, VectorLayer, GeoType} from "amplicode-maps";
import {TileLayer} from "react-leaflet";
import SalespersonList from "../salesperson/SalespersonList";

const FIND_ORDER = gql`
  query findOrder($id: Long!) {
    findOrder(id: $id) {
      amount
      id
      location
      salesperson {
        id
        location
      }
    }
  }
`;

const UPDATE_ORDER = gql`
  mutation updateOrder($input: CustomerOrderDtoInput) {
    updateOrder(input: $input) {
      amount
      id
      location
      salesperson {
        id
      }
    }
  }
`;

const OrderDetails = observer(({ id }: EntityDetailsScreenProps) => {
  const [form] = useForm();
  const intl = useIntl();
  const screens = useScreens();
  const history = useHistory();

  const [
    loadItem,
    { loading: queryLoading, error: queryError, data }
  ] = useLazyQuery(FIND_ORDER, {
    variables: {
      id
    }
  });

  const [executeUpsertMutation, { loading: upsertInProcess }] = useMutation(
    UPDATE_ORDER
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

  const item = data?.["findOrder"];
  const [salespersonItem, setSalespersonItem] = useState<any>(null)

  useEffect(() => {
    if (item != null) {
      form.setFieldsValue(dataToFormValues(item));
    }
    setSalespersonItem(item?.salesperson)
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
        <Form.Item
          name="amount"
          label="Amount"
          style={{ marginBottom: "12px" }}
        >
          <InputNumber precision={0} />
        </Form.Item>

        <Form.Item
          name="location"
          label="Location"
          style={{ marginBottom: "12px" }}
        >
          <GeoMap centerX={50.2004} centerY={53.2261} zoom={11}>
            <TileLayer id='tileLayer' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
            <VectorLayer id='salespersonLayer' items={Array.of(salespersonItem)} propertyName={'location'}/>
            <VectorLayer id='orderLayer' editable={true} geometryType={GeoType.Point}/>
          </GeoMap>

        </Form.Item>

        <Form.Item
          name="salesperson"
          label="Salesperson"
          style={{ marginBottom: "12px" }}
        >
          <EntityLookupField
            getDisplayName={(value: Record<string, unknown>) =>
              guessDisplayName(value)
            }
            label="Salesperson"
            listComponent={SalespersonList}
            onChange={value => {
              setSalespersonItem(value)
            }}
          />
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
    const updateResult = result.data?.["updateOrder"];
    // Reflect the update in Apollo cache
    cache.modify({
      fields: {
        listOrders(existingRefs = []) {
          const updatedItemRef = cache.writeFragment({
            id: `CustomerOrderDto:${updateResult.id}`,
            data: values,
            fragment: gql(`
              fragment New_CustomerOrderDto on CustomerOrderDto {
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

export default OrderDetails;
