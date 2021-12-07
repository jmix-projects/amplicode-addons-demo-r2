/* eslint-disable */
import * as graphql from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

const documents = {
  "\n    mutation sendEmailAsync($input: SendEmailDtoInput) {\n        sendEmailAsync(input: $input)\n    }\n":
    graphql.SendEmailAsyncDocument,
};

export function gql(
  source: "\n    mutation sendEmailAsync($input: SendEmailDtoInput) {\n        sendEmailAsync(input: $input)\n    }\n"
): typeof documents["\n    mutation sendEmailAsync($input: SendEmailDtoInput) {\n        sendEmailAsync(input: $input)\n    }\n"];

export function gql(source: string): unknown;
export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
