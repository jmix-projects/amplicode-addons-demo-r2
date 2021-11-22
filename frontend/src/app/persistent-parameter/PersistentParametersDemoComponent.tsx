import {observer} from "mobx-react";
import {gql, useQuery} from "@apollo/client";
import {Button, Row, Table, Typography} from "antd";
import Title from "antd/es/typography/Title";
import {useState} from "react";

const {Text} = Typography;

const GET_STRING_PARAMETER = gql`
    query getStringParameter {
        getStringParameter
    }
`;

const GET_NUMBER_PARAMETER = gql`
    query getNumberParameter {
        getNumberParameter
    }
`;

const GET_DATE_TIME_PARAMETER = gql`
    query getDateTimeParameter {
        getDateTimeParameter
    }
`;

const GET_ENUM_PARAMETER = gql`
    query getEnumParameter {
        getEnumParameter
    }
`;

const GET_ENTITY_PARAMETER = gql`
    query getEntityParameter {
        getEntityParameter
    }
`;
const PersistentParametersDemoComponent = observer(() => {
    const {data: stringParameterData, loading: stringLoading, refetch: refetchStringParameter} = useQuery(GET_STRING_PARAMETER);
    const {data: numberParameterData, loading: numberLoading, refetch: refetchNumberParameter} = useQuery(GET_NUMBER_PARAMETER);
    const {data: dateTimeParameterData, loading: dateTimeLoading, refetch: refetchDateTimeParameter} = useQuery(GET_DATE_TIME_PARAMETER);
    const {data: enumParameterData, loading: enumLoading, refetch: refetchEnumParameter} = useQuery(GET_ENUM_PARAMETER);
    const {data: entityParameterData, loading: entityLoading, refetch: refetchEntityParameter} = useQuery(GET_ENTITY_PARAMETER);

    const tableColumns: any = [
        {
            title:
                <Title level={4}>Action</Title>,
            dataIndex: "action",
            align: "center"
        },
        {
            title:
                <Title level={4}>Parameter Value</Title>,
            dataIndex: "value",
            align: "center"
        }
    ];

    const items = [
        {
            action:
                <Button style={{width: "50%"}} size={"large"} loading={stringLoading}
                        onClick={() => refetchStringParameter()}>
                    Get String Parameter
                </Button>,
            value: <Text strong={true}>{stringParameterData?.["getStringParameter"]}</Text>
        },
        {
            action:
                <Button style={{width: "50%"}} size={"large"} loading={numberLoading}
                        onClick={() => refetchNumberParameter()}>
                    Get Number Parameter
                </Button>,
            value: <Text strong={true}>{numberParameterData?.["getNumberParameter"]}</Text>
        },
        {
            action:
                <Button style={{width: "50%"}} size={"large"} loading={dateTimeLoading}
                        onClick={() => refetchDateTimeParameter()}>
                    Get DateTime Parameter
                </Button>,
            value: <Text strong={true}>{dateTimeParameterData?.["getDateTimeParameter"]}</Text>
        },
        {
            action:
                <Button style={{width: "50%"}} size={"large"} loading={enumLoading}
                        onClick={() => refetchEnumParameter()}>
                    Get Enum Parameter
                </Button>,
            value: <Text strong={true}>{enumParameterData?.["getEnumParameter"]}</Text>
        },
        {
            action:
                <Button style={{width: "50%"}} size={"large"} loading={entityLoading}
                        onClick={() => refetchEntityParameter()}>
                    Get Entity Parameter
                </Button>,
            value: <Text strong={true}>{entityParameterData?.["getEntityParameter"]}</Text>
        }
    ]

    return <div className="narrow-layout">
        <Table
            pagination={false}
            size={"middle"}
            columns={tableColumns}
            dataSource={items}/>

    </div>;
});

export default PersistentParametersDemoComponent;
