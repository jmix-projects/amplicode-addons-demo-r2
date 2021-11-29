import {Alert, Button, Form, Input, message, notification} from "antd";
import {useForm} from "antd/es/form/Form";
import {useCallback, useState} from "react";
import {ApolloError, FetchResult, gql, useMutation} from "@apollo/client";
import {FormattedMessage, useIntl} from "react-intl";
import {useScreens} from "@amplicode/react-core";
import {useHistory} from "react-router-dom";

const SEND__EMAIL_ASYNC = gql`
    mutation sendEmailAsync($input: SendEmailDtoInput) {
        sendEmailAsync(input: $input)
    }
`;

const SendEmailPage = () => {
    const [form] = useForm();
    const intl = useIntl();
    const screens = useScreens();
    const history = useHistory();
    const [executeUpsertMutation, {loading: upsertInProcess}] = useMutation(
        SEND__EMAIL_ASYNC
    );

    const [formError, setFormError] = useState<string | undefined>();

    const goToParentScreen = useCallback(() => {
        history.push(".");
        screens.closeActiveBreadcrumb();
    }, [screens, history]);

    const handleSubmit = useCallback(values => {
        executeUpsertMutation({
            variables: {
                input: formValuesToData(values)
            }
        })
            .then(({errors, data}: FetchResult) => {
                if (errors == null || errors.length === 0) {
                    notification.success({message: "Email is added to the queue for sending"});
                    goToParentScreen();
                    return;
                }
                setFormError(errors.join("\n"));
                console.error(errors);
                message.error(intl.formatMessage({id: "common.requestFailed"}));
            })
            .catch((e: Error | ApolloError) => {
                setFormError(e.message);
                console.error(e);
                message.error(intl.formatMessage({id: "common.requestFailed"}));
            });
    }, [executeUpsertMutation, intl, goToParentScreen]);

    return (

        <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}>

            <Form.Item
                label="Address"
                name="address">
                <Input/>
            </Form.Item>
            {formError && (
                <Alert
                    message={formError}
                    type="error"
                    style={{marginBottom: "18px"}}/>
            )}
            <Form.Item style={{textAlign: "center"}}>
                <Button htmlType="button" onClick={goToParentScreen}>
                    <FormattedMessage id="common.cancel"/>
                </Button>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={upsertInProcess}
                    style={{marginLeft: "8px"}}>
                    Send
                </Button>
            </Form.Item>
        </Form>

    )
}

function formValuesToData(values: any): any {
    return {
        ...values
    };
}


export default SendEmailPage;