/* eslint-disable */
import * as graphql from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

const documents = {
  "\n    mutation sendEmailAsync($input: SendEmailDtoInput) {\n        sendEmailAsync(input: $input)\n    }\n":
    graphql.SendEmailAsyncDocument,
  "\n  query findOrder($id: Long!) {\n    findOrder(id: $id) {\n      amount\n      id\n      location\n      salesperson {\n        id\n        location\n      }\n    }\n  }\n":
    graphql.FindOrderDocument,
  "\n  mutation updateOrder($input: CustomerOrderDtoInput) {\n    updateOrder(input: $input) {\n      amount\n      id\n      location\n      salesperson {\n        id\n      }\n    }\n  }\n":
    graphql.UpdateOrderDocument,
  "\n              fragment New_CustomerOrderDto on CustomerOrderDto {\n                id\n              }\n            ":
    graphql.New_CustomerOrderDtoFragmentDoc,
  "\n  query listOrders {\n    listOrders {\n      amount\n      id\n      location\n    }\n  }\n":
    graphql.ListOrdersDocument,
  "\n  mutation deleteOrder($id: Long!) {\n    deleteOrder(id: $id)\n  }\n":
    graphql.DeleteOrderDocument,
  "\n    query getStringParameter {\n        getStringParameter\n    }\n":
    graphql.GetStringParameterDocument,
  "\n    query getNumberParameter {\n        getNumberParameter\n    }\n":
    graphql.GetNumberParameterDocument,
  "\n    query getDateTimeParameter {\n        getDateTimeParameter\n    }\n":
    graphql.GetDateTimeParameterDocument,
  "\n    query getEnumParameter {\n        getEnumParameter\n    }\n":
    graphql.GetEnumParameterDocument,
  "\n    query getEntityParameter {\n        getEntityParameter\n    }\n":
    graphql.GetEntityParameterDocument,
  "\n    query findSalesperson($id: Long!) {\n        findSalesperson(id: $id) {\n            id\n            location\n            name\n            phone\n            territory {\n                id\n                name\n                polygon\n            }\n        }\n    }\n":
    graphql.FindSalespersonDocument,
  "\n    mutation updateSalesperson($input: SalespersonDtoInput) {\n        updateSalesperson(input: $input) {\n            id\n            location\n            name\n            phone\n            territory {\n                id\n                name\n                polygon\n            }\n        }\n    }\n":
    graphql.UpdateSalespersonDocument,
  "\n              fragment New_SalespersonDto on SalespersonDto {\n                id\n              }\n            ":
    graphql.New_SalespersonDtoFragmentDoc,
  "\n    query listSalespeople {\n        listSalespeople {\n            id\n            location\n            name\n            phone\n        }\n    }\n":
    graphql.ListSalespeopleDocument,
  "\n    mutation deleteSalesperson($id: Long!) {\n        deleteSalesperson(id: $id)\n    }\n":
    graphql.DeleteSalespersonDocument,
  "\n  query findTerritory($id: Long!) {\n    findTerritory(id: $id) {\n      id\n      name\n      polygon\n    }\n  }\n":
    graphql.FindTerritoryDocument,
  "\n  mutation updateTerritory($input: TerritoryDtoInput) {\n    updateTerritory(input: $input) {\n      id\n      name\n      polygon\n    }\n  }\n":
    graphql.UpdateTerritoryDocument,
  "\n              fragment New_TerritoryDto on TerritoryDto {\n                id\n              }\n            ":
    graphql.New_TerritoryDtoFragmentDoc,
  "\n  query listTerritories {\n    listTerritories {\n      id\n      name\n      polygon\n    }\n  }\n":
    graphql.ListTerritoriesDocument,
  "\n  mutation deleteTerritory($id: Long!) {\n    deleteTerritory(id: $id)\n  }\n":
    graphql.DeleteTerritoryDocument,
};

export function gql(
  source: "\n    mutation sendEmailAsync($input: SendEmailDtoInput) {\n        sendEmailAsync(input: $input)\n    }\n"
): typeof documents["\n    mutation sendEmailAsync($input: SendEmailDtoInput) {\n        sendEmailAsync(input: $input)\n    }\n"];
export function gql(
  source: "\n  query findOrder($id: Long!) {\n    findOrder(id: $id) {\n      amount\n      id\n      location\n      salesperson {\n        id\n        location\n      }\n    }\n  }\n"
): typeof documents["\n  query findOrder($id: Long!) {\n    findOrder(id: $id) {\n      amount\n      id\n      location\n      salesperson {\n        id\n        location\n      }\n    }\n  }\n"];
export function gql(
  source: "\n  mutation updateOrder($input: CustomerOrderDtoInput) {\n    updateOrder(input: $input) {\n      amount\n      id\n      location\n      salesperson {\n        id\n      }\n    }\n  }\n"
): typeof documents["\n  mutation updateOrder($input: CustomerOrderDtoInput) {\n    updateOrder(input: $input) {\n      amount\n      id\n      location\n      salesperson {\n        id\n      }\n    }\n  }\n"];
export function gql(
  source: "\n              fragment New_CustomerOrderDto on CustomerOrderDto {\n                id\n              }\n            "
): typeof documents["\n              fragment New_CustomerOrderDto on CustomerOrderDto {\n                id\n              }\n            "];
export function gql(
  source: "\n  query listOrders {\n    listOrders {\n      amount\n      id\n      location\n    }\n  }\n"
): typeof documents["\n  query listOrders {\n    listOrders {\n      amount\n      id\n      location\n    }\n  }\n"];
export function gql(
  source: "\n  mutation deleteOrder($id: Long!) {\n    deleteOrder(id: $id)\n  }\n"
): typeof documents["\n  mutation deleteOrder($id: Long!) {\n    deleteOrder(id: $id)\n  }\n"];
export function gql(
  source: "\n    query getStringParameter {\n        getStringParameter\n    }\n"
): typeof documents["\n    query getStringParameter {\n        getStringParameter\n    }\n"];
export function gql(
  source: "\n    query getNumberParameter {\n        getNumberParameter\n    }\n"
): typeof documents["\n    query getNumberParameter {\n        getNumberParameter\n    }\n"];
export function gql(
  source: "\n    query getDateTimeParameter {\n        getDateTimeParameter\n    }\n"
): typeof documents["\n    query getDateTimeParameter {\n        getDateTimeParameter\n    }\n"];
export function gql(
  source: "\n    query getEnumParameter {\n        getEnumParameter\n    }\n"
): typeof documents["\n    query getEnumParameter {\n        getEnumParameter\n    }\n"];
export function gql(
  source: "\n    query getEntityParameter {\n        getEntityParameter\n    }\n"
): typeof documents["\n    query getEntityParameter {\n        getEntityParameter\n    }\n"];
export function gql(
  source: "\n    query findSalesperson($id: Long!) {\n        findSalesperson(id: $id) {\n            id\n            location\n            name\n            phone\n            territory {\n                id\n                name\n                polygon\n            }\n        }\n    }\n"
): typeof documents["\n    query findSalesperson($id: Long!) {\n        findSalesperson(id: $id) {\n            id\n            location\n            name\n            phone\n            territory {\n                id\n                name\n                polygon\n            }\n        }\n    }\n"];
export function gql(
  source: "\n    mutation updateSalesperson($input: SalespersonDtoInput) {\n        updateSalesperson(input: $input) {\n            id\n            location\n            name\n            phone\n            territory {\n                id\n                name\n                polygon\n            }\n        }\n    }\n"
): typeof documents["\n    mutation updateSalesperson($input: SalespersonDtoInput) {\n        updateSalesperson(input: $input) {\n            id\n            location\n            name\n            phone\n            territory {\n                id\n                name\n                polygon\n            }\n        }\n    }\n"];
export function gql(
  source: "\n              fragment New_SalespersonDto on SalespersonDto {\n                id\n              }\n            "
): typeof documents["\n              fragment New_SalespersonDto on SalespersonDto {\n                id\n              }\n            "];
export function gql(
  source: "\n    query listSalespeople {\n        listSalespeople {\n            id\n            location\n            name\n            phone\n        }\n    }\n"
): typeof documents["\n    query listSalespeople {\n        listSalespeople {\n            id\n            location\n            name\n            phone\n        }\n    }\n"];
export function gql(
  source: "\n    mutation deleteSalesperson($id: Long!) {\n        deleteSalesperson(id: $id)\n    }\n"
): typeof documents["\n    mutation deleteSalesperson($id: Long!) {\n        deleteSalesperson(id: $id)\n    }\n"];
export function gql(
  source: "\n  query findTerritory($id: Long!) {\n    findTerritory(id: $id) {\n      id\n      name\n      polygon\n    }\n  }\n"
): typeof documents["\n  query findTerritory($id: Long!) {\n    findTerritory(id: $id) {\n      id\n      name\n      polygon\n    }\n  }\n"];
export function gql(
  source: "\n  mutation updateTerritory($input: TerritoryDtoInput) {\n    updateTerritory(input: $input) {\n      id\n      name\n      polygon\n    }\n  }\n"
): typeof documents["\n  mutation updateTerritory($input: TerritoryDtoInput) {\n    updateTerritory(input: $input) {\n      id\n      name\n      polygon\n    }\n  }\n"];
export function gql(
  source: "\n              fragment New_TerritoryDto on TerritoryDto {\n                id\n              }\n            "
): typeof documents["\n              fragment New_TerritoryDto on TerritoryDto {\n                id\n              }\n            "];
export function gql(
  source: "\n  query listTerritories {\n    listTerritories {\n      id\n      name\n      polygon\n    }\n  }\n"
): typeof documents["\n  query listTerritories {\n    listTerritories {\n      id\n      name\n      polygon\n    }\n  }\n"];
export function gql(
  source: "\n  mutation deleteTerritory($id: Long!) {\n    deleteTerritory(id: $id)\n  }\n"
): typeof documents["\n  mutation deleteTerritory($id: Long!) {\n    deleteTerritory(id: $id)\n  }\n"];

export function gql(source: string): unknown;
export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
