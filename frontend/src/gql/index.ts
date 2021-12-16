/* eslint-disable */
import * as graphql from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

const documents = {
  "\n    mutation sendEmailAsync($input: SendEmailDtoInput) {\n        sendEmailAsync(input: $input)\n    }\n":
    graphql.SendEmailAsyncDocument,
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
};

export function gql(
  source: "\n    mutation sendEmailAsync($input: SendEmailDtoInput) {\n        sendEmailAsync(input: $input)\n    }\n"
): typeof documents["\n    mutation sendEmailAsync($input: SendEmailDtoInput) {\n        sendEmailAsync(input: $input)\n    }\n"];
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

export function gql(source: string): unknown;
export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
