/* eslint-disable */
import * as graphql from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

const documents = {
  "\r\n    mutation sendEmailAsync($input: SendEmailDtoInput) {\r\n        sendEmailAsync(input: $input)\r\n    }\r\n":
    graphql.SendEmailAsyncDocument,
  "\r\n  query findOrder($id: Long!) {\r\n    findOrder(id: $id) {\r\n      amount\r\n      id\r\n      location\r\n      salesperson {\r\n        id\r\n        location\r\n      }\r\n    }\r\n  }\r\n":
    graphql.FindOrderDocument,
  "\r\n  mutation updateOrder($input: CustomerOrderDtoInput) {\r\n    updateOrder(input: $input) {\r\n      amount\r\n      id\r\n      location\r\n      salesperson {\r\n        id\r\n      }\r\n    }\r\n  }\r\n":
    graphql.UpdateOrderDocument,
  "\r\n              fragment New_CustomerOrderDto on CustomerOrderDto {\r\n                id\r\n              }\r\n            ":
    graphql.New_CustomerOrderDtoFragmentDoc,
  "\r\n  query listOrders {\r\n    listOrders {\r\n      amount\r\n      id\r\n      location\r\n    }\r\n  }\r\n":
    graphql.ListOrdersDocument,
  "\r\n  mutation deleteOrder($id: Long!) {\r\n    deleteOrder(id: $id)\r\n  }\r\n":
    graphql.DeleteOrderDocument,
  "\r\n    query getStringParameter {\r\n        getStringParameter\r\n    }\r\n":
    graphql.GetStringParameterDocument,
  "\r\n    query getNumberParameter {\r\n        getNumberParameter\r\n    }\r\n":
    graphql.GetNumberParameterDocument,
  "\r\n    query getDateTimeParameter {\r\n        getDateTimeParameter\r\n    }\r\n":
    graphql.GetDateTimeParameterDocument,
  "\r\n    query getEnumParameter {\r\n        getEnumParameter\r\n    }\r\n":
    graphql.GetEnumParameterDocument,
  "\r\n    query getEntityParameter {\r\n        getEntityParameter\r\n    }\r\n":
    graphql.GetEntityParameterDocument,
  "\r\n    query findSalesperson($id: Long!) {\r\n        findSalesperson(id: $id) {\r\n            id\r\n            location\r\n            name\r\n            phone\r\n            territory {\r\n                id\r\n                name\r\n                polygon\r\n            }\r\n        }\r\n    }\r\n":
    graphql.FindSalespersonDocument,
  "\r\n    mutation updateSalesperson($input: SalespersonDtoInput) {\r\n        updateSalesperson(input: $input) {\r\n            id\r\n            location\r\n            name\r\n            phone\r\n            territory {\r\n                id\r\n                name\r\n                polygon\r\n            }\r\n        }\r\n    }\r\n":
    graphql.UpdateSalespersonDocument,
  "\r\n              fragment New_SalespersonDto on SalespersonDto {\r\n                id\r\n              }\r\n            ":
    graphql.New_SalespersonDtoFragmentDoc,
  "\r\n    query listSalespeople {\r\n        listSalespeople {\r\n            id\r\n            location\r\n            name\r\n            phone\r\n        }\r\n    }\r\n":
    graphql.ListSalespeopleDocument,
  "\r\n    mutation deleteSalesperson($id: Long!) {\r\n        deleteSalesperson(id: $id)\r\n    }\r\n":
    graphql.DeleteSalespersonDocument,
  "\r\n  query findTerritory($id: Long!) {\r\n    findTerritory(id: $id) {\r\n      id\r\n      name\r\n      polygon\r\n    }\r\n  }\r\n":
    graphql.FindTerritoryDocument,
  "\r\n  mutation updateTerritory($input: TerritoryDtoInput) {\r\n    updateTerritory(input: $input) {\r\n      id\r\n      name\r\n      polygon\r\n    }\r\n  }\r\n":
    graphql.UpdateTerritoryDocument,
  "\r\n              fragment New_TerritoryDto on TerritoryDto {\r\n                id\r\n              }\r\n            ":
    graphql.New_TerritoryDtoFragmentDoc,
  "\r\n  query listTerritories {\r\n    listTerritories {\r\n      id\r\n      name\r\n      polygon\r\n    }\r\n  }\r\n":
    graphql.ListTerritoriesDocument,
  "\r\n  mutation deleteTerritory($id: Long!) {\r\n    deleteTerritory(id: $id)\r\n  }\r\n":
    graphql.DeleteTerritoryDocument,
};

export function gql(
  source: "\r\n    mutation sendEmailAsync($input: SendEmailDtoInput) {\r\n        sendEmailAsync(input: $input)\r\n    }\r\n"
): typeof documents["\r\n    mutation sendEmailAsync($input: SendEmailDtoInput) {\r\n        sendEmailAsync(input: $input)\r\n    }\r\n"];
export function gql(
  source: "\r\n  query findOrder($id: Long!) {\r\n    findOrder(id: $id) {\r\n      amount\r\n      id\r\n      location\r\n      salesperson {\r\n        id\r\n        location\r\n      }\r\n    }\r\n  }\r\n"
): typeof documents["\r\n  query findOrder($id: Long!) {\r\n    findOrder(id: $id) {\r\n      amount\r\n      id\r\n      location\r\n      salesperson {\r\n        id\r\n        location\r\n      }\r\n    }\r\n  }\r\n"];
export function gql(
  source: "\r\n  mutation updateOrder($input: CustomerOrderDtoInput) {\r\n    updateOrder(input: $input) {\r\n      amount\r\n      id\r\n      location\r\n      salesperson {\r\n        id\r\n      }\r\n    }\r\n  }\r\n"
): typeof documents["\r\n  mutation updateOrder($input: CustomerOrderDtoInput) {\r\n    updateOrder(input: $input) {\r\n      amount\r\n      id\r\n      location\r\n      salesperson {\r\n        id\r\n      }\r\n    }\r\n  }\r\n"];
export function gql(
  source: "\r\n              fragment New_CustomerOrderDto on CustomerOrderDto {\r\n                id\r\n              }\r\n            "
): typeof documents["\r\n              fragment New_CustomerOrderDto on CustomerOrderDto {\r\n                id\r\n              }\r\n            "];
export function gql(
  source: "\r\n  query listOrders {\r\n    listOrders {\r\n      amount\r\n      id\r\n      location\r\n    }\r\n  }\r\n"
): typeof documents["\r\n  query listOrders {\r\n    listOrders {\r\n      amount\r\n      id\r\n      location\r\n    }\r\n  }\r\n"];
export function gql(
  source: "\r\n  mutation deleteOrder($id: Long!) {\r\n    deleteOrder(id: $id)\r\n  }\r\n"
): typeof documents["\r\n  mutation deleteOrder($id: Long!) {\r\n    deleteOrder(id: $id)\r\n  }\r\n"];
export function gql(
  source: "\r\n    query getStringParameter {\r\n        getStringParameter\r\n    }\r\n"
): typeof documents["\r\n    query getStringParameter {\r\n        getStringParameter\r\n    }\r\n"];
export function gql(
  source: "\r\n    query getNumberParameter {\r\n        getNumberParameter\r\n    }\r\n"
): typeof documents["\r\n    query getNumberParameter {\r\n        getNumberParameter\r\n    }\r\n"];
export function gql(
  source: "\r\n    query getDateTimeParameter {\r\n        getDateTimeParameter\r\n    }\r\n"
): typeof documents["\r\n    query getDateTimeParameter {\r\n        getDateTimeParameter\r\n    }\r\n"];
export function gql(
  source: "\r\n    query getEnumParameter {\r\n        getEnumParameter\r\n    }\r\n"
): typeof documents["\r\n    query getEnumParameter {\r\n        getEnumParameter\r\n    }\r\n"];
export function gql(
  source: "\r\n    query getEntityParameter {\r\n        getEntityParameter\r\n    }\r\n"
): typeof documents["\r\n    query getEntityParameter {\r\n        getEntityParameter\r\n    }\r\n"];
export function gql(
  source: "\r\n    query findSalesperson($id: Long!) {\r\n        findSalesperson(id: $id) {\r\n            id\r\n            location\r\n            name\r\n            phone\r\n            territory {\r\n                id\r\n                name\r\n                polygon\r\n            }\r\n        }\r\n    }\r\n"
): typeof documents["\r\n    query findSalesperson($id: Long!) {\r\n        findSalesperson(id: $id) {\r\n            id\r\n            location\r\n            name\r\n            phone\r\n            territory {\r\n                id\r\n                name\r\n                polygon\r\n            }\r\n        }\r\n    }\r\n"];
export function gql(
  source: "\r\n    mutation updateSalesperson($input: SalespersonDtoInput) {\r\n        updateSalesperson(input: $input) {\r\n            id\r\n            location\r\n            name\r\n            phone\r\n            territory {\r\n                id\r\n                name\r\n                polygon\r\n            }\r\n        }\r\n    }\r\n"
): typeof documents["\r\n    mutation updateSalesperson($input: SalespersonDtoInput) {\r\n        updateSalesperson(input: $input) {\r\n            id\r\n            location\r\n            name\r\n            phone\r\n            territory {\r\n                id\r\n                name\r\n                polygon\r\n            }\r\n        }\r\n    }\r\n"];
export function gql(
  source: "\r\n              fragment New_SalespersonDto on SalespersonDto {\r\n                id\r\n              }\r\n            "
): typeof documents["\r\n              fragment New_SalespersonDto on SalespersonDto {\r\n                id\r\n              }\r\n            "];
export function gql(
  source: "\r\n    query listSalespeople {\r\n        listSalespeople {\r\n            id\r\n            location\r\n            name\r\n            phone\r\n        }\r\n    }\r\n"
): typeof documents["\r\n    query listSalespeople {\r\n        listSalespeople {\r\n            id\r\n            location\r\n            name\r\n            phone\r\n        }\r\n    }\r\n"];
export function gql(
  source: "\r\n    mutation deleteSalesperson($id: Long!) {\r\n        deleteSalesperson(id: $id)\r\n    }\r\n"
): typeof documents["\r\n    mutation deleteSalesperson($id: Long!) {\r\n        deleteSalesperson(id: $id)\r\n    }\r\n"];
export function gql(
  source: "\r\n  query findTerritory($id: Long!) {\r\n    findTerritory(id: $id) {\r\n      id\r\n      name\r\n      polygon\r\n    }\r\n  }\r\n"
): typeof documents["\r\n  query findTerritory($id: Long!) {\r\n    findTerritory(id: $id) {\r\n      id\r\n      name\r\n      polygon\r\n    }\r\n  }\r\n"];
export function gql(
  source: "\r\n  mutation updateTerritory($input: TerritoryDtoInput) {\r\n    updateTerritory(input: $input) {\r\n      id\r\n      name\r\n      polygon\r\n    }\r\n  }\r\n"
): typeof documents["\r\n  mutation updateTerritory($input: TerritoryDtoInput) {\r\n    updateTerritory(input: $input) {\r\n      id\r\n      name\r\n      polygon\r\n    }\r\n  }\r\n"];
export function gql(
  source: "\r\n              fragment New_TerritoryDto on TerritoryDto {\r\n                id\r\n              }\r\n            "
): typeof documents["\r\n              fragment New_TerritoryDto on TerritoryDto {\r\n                id\r\n              }\r\n            "];
export function gql(
  source: "\r\n  query listTerritories {\r\n    listTerritories {\r\n      id\r\n      name\r\n      polygon\r\n    }\r\n  }\r\n"
): typeof documents["\r\n  query listTerritories {\r\n    listTerritories {\r\n      id\r\n      name\r\n      polygon\r\n    }\r\n  }\r\n"];
export function gql(
  source: "\r\n  mutation deleteTerritory($id: Long!) {\r\n    deleteTerritory(id: $id)\r\n  }\r\n"
): typeof documents["\r\n  mutation deleteTerritory($id: Long!) {\r\n    deleteTerritory(id: $id)\r\n  }\r\n"];

export function gql(source: string): unknown;
export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
