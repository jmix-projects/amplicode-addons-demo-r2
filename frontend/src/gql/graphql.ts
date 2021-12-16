/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** BigDecimal */
  BigDecimal: any;
  /** BigInteger */
  BigInteger: any;
  /** Byte */
  Byte: any;
  /** Char */
  Char: any;
  /** Date */
  Date: any;
  /** DateTime */
  DateTime: any;
  /** LocalDate */
  LocalDate: any;
  /** LocalDateTime */
  LocalDateTime: any;
  /** LocalTime */
  LocalTime: any;
  /** Long */
  Long: any;
  /** OffsetDateTime */
  OffsetDateTime: any;
  /** OffsetTime */
  OffsetTime: any;
  Point: any;
  Polygon: any;
  /** Short */
  Short: any;
  /** Time */
  Time: any;
  /** UUID */
  UUID: any;
  /** Void */
  Void: any;
};

export enum AggregationMode {
  Average = "AVERAGE",
  Count = "COUNT",
  CountAsFractionOfColumns = "COUNT_AS_FRACTION_OF_COLUMNS",
  CountAsFractionOfRows = "COUNT_AS_FRACTION_OF_ROWS",
  CountAsFractionOfTotal = "COUNT_AS_FRACTION_OF_TOTAL",
  CountUniqueValues = "COUNT_UNIQUE_VALUES",
  IntegerSum = "INTEGER_SUM",
  ListUniqueValues = "LIST_UNIQUE_VALUES",
  Maximum = "MAXIMUM",
  Minimum = "MINIMUM",
  Sum = "SUM",
  SumAsFractionOfColumns = "SUM_AS_FRACTION_OF_COLUMNS",
  SumAsFractionOfRows = "SUM_AS_FRACTION_OF_ROWS",
  SumAsFractionOfTotal = "SUM_AS_FRACTION_OF_TOTAL",
  SumOverSum = "SUM_OVER_SUM",
}

export type AllowedRevisionFiltersDto = {
  __typename?: "AllowedRevisionFiltersDto";
  entitiesFullNames: Array<Maybe<Scalars["String"]>>;
  revisionTypes: Array<Maybe<RevisionTypeDto>>;
  usernames: Array<Maybe<Scalars["String"]>>;
};

export type AuditPolicyDto = {
  __typename?: "AuditPolicyDto";
  audited: Scalars["Boolean"];
  entityFullName: Scalars["String"];
};

export type AuditPolicyDtoInput = {
  audited: Scalars["Boolean"];
  entityFullName: Scalars["String"];
};

export type BandDto = {
  __typename?: "BandDto";
  dataSetType?: Maybe<DataSetType>;
  id?: Maybe<Scalars["UUID"]>;
  name?: Maybe<Scalars["String"]>;
  position: Scalars["Int"];
  query?: Maybe<Scalars["String"]>;
};

export type BandInputDtoInput = {
  dataSetType?: InputMaybe<DataSetType>;
  id?: InputMaybe<Scalars["UUID"]>;
  name?: InputMaybe<Scalars["String"]>;
  position: Scalars["Int"];
  query?: InputMaybe<Scalars["String"]>;
};

export type ConfigInputDtoInput = {
  name?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["String"]>;
};

export type ConfigNodeDto = {
  __typename?: "ConfigNodeDto";
  children?: Maybe<Array<Maybe<ConfigNodeDto>>>;
  groupRemainder?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name?: Maybe<Scalars["String"]>;
  parent?: Maybe<ConfigNodeDto>;
  value?: Maybe<Scalars["String"]>;
};

export type ConfigOutputDto = {
  __typename?: "ConfigOutputDto";
  defaultValue?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  options?: Maybe<Array<Maybe<Scalars["String"]>>>;
  type?: Maybe<Scalars["String"]>;
  updateTs?: Maybe<Scalars["String"]>;
  updatedBy?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type CustomerOrderDto = {
  __typename?: "CustomerOrderDto";
  amount?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Long"]>;
  location?: Maybe<Scalars["Point"]>;
  salesperson?: Maybe<SalespersonDto>;
};

export type CustomerOrderDtoInput = {
  amount?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["Long"]>;
  location?: InputMaybe<Scalars["Point"]>;
  salesperson?: InputMaybe<SalespersonDtoInput>;
};

export enum DataSetType {
  EntityList = "ENTITY_LIST",
  Groovy = "GROOVY",
  Jpql = "JPQL",
  Json = "JSON",
  SingleEntity = "SINGLE_ENTITY",
  Sql = "SQL",
}

export type EntityChangesDto = {
  __typename?: "EntityChangesDto";
  earlierRevisionValues?: Maybe<Map>;
  entityFullName: Scalars["String"];
  entityId: Scalars["String"];
  revisionId: Scalars["Int"];
  targetRevisionType: RevisionTypeDto;
  targetRevisionValues?: Maybe<Map>;
};

export type EntityClassDto = {
  __typename?: "EntityClassDto";
  fullClassName?: Maybe<Scalars["String"]>;
  packageName?: Maybe<Scalars["String"]>;
  simpleClassName?: Maybe<Scalars["String"]>;
  simpleProperties?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type EntityRevisionDto = {
  __typename?: "EntityRevisionDto";
  entityFullName: Scalars["String"];
  entityId: Scalars["String"];
  revisionId: Scalars["Int"];
  revisionType: RevisionTypeDto;
  username: Scalars["String"];
  when: Scalars["String"];
};

export type EntityRevisionFilterDtoInput = {
  entityFullName: Scalars["String"];
  entityId: Scalars["String"];
  revisionId: Scalars["Int"];
};

export type InputParameterDto = {
  __typename?: "InputParameterDto";
  alias?: Maybe<Scalars["String"]>;
  entityClassName?: Maybe<Scalars["String"]>;
  graphQLIdProperty?: Maybe<Scalars["String"]>;
  graphQLQuery?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["UUID"]>;
  name?: Maybe<Scalars["String"]>;
  position: Scalars["Int"];
  required: Scalars["Boolean"];
  type?: Maybe<ParameterType>;
};

export type InputParameterInputDtoInput = {
  alias?: InputMaybe<Scalars["String"]>;
  entityClassName?: InputMaybe<Scalars["String"]>;
  graphQLIdProperty?: InputMaybe<Scalars["String"]>;
  graphQLQuery?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  name?: InputMaybe<Scalars["String"]>;
  position: Scalars["Int"];
  required: Scalars["Boolean"];
  type?: InputMaybe<ParameterType>;
};

export type LoadAvailableReportRequestDtoInput = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type Map = {
  __typename?: "Map";
};

export type MapInput = {};

export type MessageModel = {
  __typename?: "MessageModel";
  code?: Maybe<Scalars["String"]>;
  values?: Maybe<Map>;
};

export type MessageModelInput = {
  code?: InputMaybe<Scalars["String"]>;
  values?: InputMaybe<MapInput>;
};

/** Mutation root */
export type Mutation = {
  __typename?: "Mutation";
  create_ReportFromWizard?: Maybe<ReportDto>;
  deleteOrder: Scalars["Boolean"];
  deletePersistentMessage: Scalars["Boolean"];
  deleteSalesperson: Scalars["Boolean"];
  deleteTerritory: Scalars["Boolean"];
  delete_Report: Scalars["Boolean"];
  modifyAuditPolicies?: Maybe<Array<Maybe<Scalars["String"]>>>;
  registerUserAction?: Maybe<Scalars["String"]>;
  resendMessage: Scalars["Boolean"];
  sendEmailAsync: Scalars["Boolean"];
  updateOrder?: Maybe<CustomerOrderDto>;
  updatePersistentMessage?: Maybe<MessageModel>;
  updateSalesperson?: Maybe<SalespersonDto>;
  updateTerritory?: Maybe<TerritoryDto>;
  update_Config?: Maybe<ConfigOutputDto>;
  update_Report?: Maybe<ReportDto>;
};

/** Mutation root */
export type MutationCreate_ReportFromWizardArgs = {
  input?: InputMaybe<ReportWizardDataDtoInput>;
};

/** Mutation root */
export type MutationDeleteOrderArgs = {
  id: Scalars["Long"];
};

/** Mutation root */
export type MutationDeletePersistentMessageArgs = {
  code?: InputMaybe<Scalars["String"]>;
};

/** Mutation root */
export type MutationDeleteSalespersonArgs = {
  id: Scalars["Long"];
};

/** Mutation root */
export type MutationDeleteTerritoryArgs = {
  id: Scalars["Long"];
};

/** Mutation root */
export type MutationDelete_ReportArgs = {
  id?: InputMaybe<Scalars["UUID"]>;
};

/** Mutation root */
export type MutationModifyAuditPoliciesArgs = {
  policiesNewStates?: InputMaybe<AuditPolicyDtoInput>;
};

/** Mutation root */
export type MutationRegisterUserActionArgs = {
  input?: InputMaybe<UserActionInputDtoInput>;
};

/** Mutation root */
export type MutationResendMessageArgs = {
  input?: InputMaybe<ResendMessageDtoInput>;
};

/** Mutation root */
export type MutationSendEmailAsyncArgs = {
  input?: InputMaybe<SendEmailDtoInput>;
};

/** Mutation root */
export type MutationUpdateOrderArgs = {
  input?: InputMaybe<CustomerOrderDtoInput>;
};

/** Mutation root */
export type MutationUpdatePersistentMessageArgs = {
  input?: InputMaybe<MessageModelInput>;
};

/** Mutation root */
export type MutationUpdateSalespersonArgs = {
  input?: InputMaybe<SalespersonDtoInput>;
};

/** Mutation root */
export type MutationUpdateTerritoryArgs = {
  input?: InputMaybe<TerritoryDtoInput>;
};

/** Mutation root */
export type MutationUpdate_ConfigArgs = {
  dto?: InputMaybe<ConfigInputDtoInput>;
};

/** Mutation root */
export type MutationUpdate_ReportArgs = {
  input?: InputMaybe<ReportInputDtoInput>;
};

export enum ParameterType {
  Boolean = "BOOLEAN",
  Date = "DATE",
  Datetime = "DATETIME",
  Double = "DOUBLE",
  Entity = "ENTITY",
  EntityList = "ENTITY_LIST",
  Enumeration = "ENUMERATION",
  Integer = "INTEGER",
  Long = "LONG",
  Numeric = "NUMERIC",
  Text = "TEXT",
  Time = "TIME",
}

export type PersistentMessageFilterDtoInput = {
  code?: InputMaybe<Scalars["String"]>;
  message?: InputMaybe<Scalars["String"]>;
};

export type PieChartDescriptionDto = {
  __typename?: "PieChartDescriptionDto";
  bandName?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["UUID"]>;
  titleField?: Maybe<Scalars["String"]>;
  valueField?: Maybe<Scalars["String"]>;
};

export type PieChartDescriptionInputDtoInput = {
  bandName?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  titleField?: InputMaybe<Scalars["String"]>;
  valueField?: InputMaybe<Scalars["String"]>;
};

export type PivotTableDescriptionDto = {
  __typename?: "PivotTableDescriptionDto";
  aggregationMode?: Maybe<AggregationMode>;
  aggregationProperties?: Maybe<Scalars["String"]>;
  bandName?: Maybe<Scalars["String"]>;
  columnsProperties?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["UUID"]>;
  rowsProperties?: Maybe<Scalars["String"]>;
};

export type PivotTableDescriptionInputDtoInput = {
  aggregationMode?: InputMaybe<AggregationMode>;
  aggregationProperties?: InputMaybe<Scalars["String"]>;
  bandName?: InputMaybe<Scalars["String"]>;
  columnsProperties?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  rowsProperties?: InputMaybe<Scalars["String"]>;
};

/** Query root */
export type Query = {
  __typename?: "Query";
  allowedRevisionFilters?: Maybe<AllowedRevisionFiltersDto>;
  auditPolicyList?: Maybe<Array<Maybe<AuditPolicyDto>>>;
  availableLocales?: Maybe<Array<Maybe<Scalars["String"]>>>;
  countOrders: Scalars["Long"];
  countSalespeople: Scalars["Long"];
  countTerritories: Scalars["Long"];
  entityRevisionChanges?: Maybe<EntityChangesDto>;
  entityRevisionInfoList?: Maybe<Array<Maybe<EntityRevisionDto>>>;
  entitySnapshot?: Maybe<Scalars["String"]>;
  findOrder?: Maybe<CustomerOrderDto>;
  findSalesperson?: Maybe<SalespersonDto>;
  findTerritory?: Maybe<TerritoryDto>;
  getDateTimeParameter?: Maybe<Scalars["String"]>;
  getEntityParameter: Scalars["Long"];
  getEnumParameter?: Maybe<Scalars["String"]>;
  getNumberParameter: Scalars["Int"];
  getStringParameter?: Maybe<Scalars["String"]>;
  listOrders?: Maybe<Array<Maybe<CustomerOrderDto>>>;
  listSalespeople?: Maybe<Array<Maybe<SalespersonDto>>>;
  listTerritories?: Maybe<Array<Maybe<TerritoryDto>>>;
  list_AvailableReports?: Maybe<Array<Maybe<ReportDto>>>;
  list_Config?: Maybe<Array<Maybe<ConfigNodeDto>>>;
  list_EntityClass?: Maybe<Array<Maybe<EntityClassDto>>>;
  list_Report?: Maybe<Array<Maybe<ReportDto>>>;
  list_ReportExecution?: Maybe<Array<Maybe<ReportExecutionDto>>>;
  loadById_Report?: Maybe<ReportDto>;
  loadByName_Config?: Maybe<ConfigOutputDto>;
  persistentMessage?: Maybe<MessageModel>;
  persistentMessages?: Maybe<Array<Maybe<MessageModel>>>;
  persistentMessagesByLocales?: Maybe<Scalars["String"]>;
  sendingMessages?: Maybe<Array<Maybe<SendingMessageDto>>>;
  snapshotsToCompare?: Maybe<Array<Maybe<EntityRevisionDto>>>;
  userActions?: Maybe<Array<Maybe<UserActionOutputDto>>>;
  userActionsCount: Scalars["Long"];
};

/** Query root */
export type QueryEntityRevisionChangesArgs = {
  changesFilter?: InputMaybe<EntityRevisionFilterDtoInput>;
};

/** Query root */
export type QueryEntityRevisionInfoListArgs = {
  revisionFilter?: InputMaybe<RevisionFilterDtoInput>;
};

/** Query root */
export type QueryEntitySnapshotArgs = {
  snapshotFilter?: InputMaybe<EntityRevisionFilterDtoInput>;
};

/** Query root */
export type QueryFindOrderArgs = {
  id: Scalars["Long"];
};

/** Query root */
export type QueryFindSalespersonArgs = {
  id: Scalars["Long"];
};

/** Query root */
export type QueryFindTerritoryArgs = {
  id: Scalars["Long"];
};

/** Query root */
export type QueryList_AvailableReportsArgs = {
  input?: InputMaybe<LoadAvailableReportRequestDtoInput>;
};

/** Query root */
export type QueryList_ReportExecutionArgs = {
  reportId?: InputMaybe<Scalars["UUID"]>;
};

/** Query root */
export type QueryLoadById_ReportArgs = {
  id?: InputMaybe<Scalars["UUID"]>;
};

/** Query root */
export type QueryLoadByName_ConfigArgs = {
  configName?: InputMaybe<Scalars["String"]>;
};

/** Query root */
export type QueryPersistentMessageArgs = {
  code?: InputMaybe<Scalars["String"]>;
};

/** Query root */
export type QueryPersistentMessagesArgs = {
  input?: InputMaybe<PersistentMessageFilterDtoInput>;
};

/** Query root */
export type QuerySnapshotsToCompareArgs = {
  targetSnapshotParams?: InputMaybe<EntityRevisionFilterDtoInput>;
};

/** Query root */
export type QueryUserActionsArgs = {
  filter?: InputMaybe<UserActionsFilterInput>;
};

/** Query root */
export type QueryUserActionsCountArgs = {
  filter?: InputMaybe<UserActionsFilterInput>;
};

export type ReportDto = {
  __typename?: "ReportDto";
  bands?: Maybe<Array<Maybe<BandDto>>>;
  code?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["UUID"]>;
  inputParameters?: Maybe<Array<Maybe<InputParameterDto>>>;
  localeNames?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  roles?: Maybe<Array<Maybe<Scalars["String"]>>>;
  screens?: Maybe<Array<Maybe<Scalars["String"]>>>;
  template?: Maybe<ReportTemplateDto>;
  valueFormats?: Maybe<Array<Maybe<ValueFormatDto>>>;
  version?: Maybe<Scalars["Int"]>;
};

export type ReportExecutionDto = {
  __typename?: "ReportExecutionDto";
  errorMessage?: Maybe<Scalars["String"]>;
  executionTime?: Maybe<Scalars["String"]>;
  finishTime?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["UUID"]>;
  params?: Maybe<Scalars["String"]>;
  reportName?: Maybe<Scalars["String"]>;
  startTime?: Maybe<Scalars["DateTime"]>;
  success: Scalars["Boolean"];
  username?: Maybe<Scalars["String"]>;
};

export type ReportInputDtoInput = {
  bands?: InputMaybe<Array<InputMaybe<BandInputDtoInput>>>;
  code?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  inputParameters?: InputMaybe<Array<InputMaybe<InputParameterInputDtoInput>>>;
  localeNames?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  roles?: InputMaybe<Array<InputMaybe<StringInput>>>;
  screens?: InputMaybe<Array<InputMaybe<StringInput>>>;
  template?: InputMaybe<ReportTemplateInputDtoInput>;
  valueFormats?: InputMaybe<Array<InputMaybe<ValueFormatInputDtoInput>>>;
  version?: InputMaybe<Scalars["Int"]>;
};

export enum ReportOutputType {
  Chart = "CHART",
  Csv = "CSV",
  Custom = "CUSTOM",
  Doc = "DOC",
  Docx = "DOCX",
  Html = "HTML",
  Pdf = "PDF",
  PivotTable = "PIVOT_TABLE",
  Table = "TABLE",
  Xls = "XLS",
  Xlsx = "XLSX",
}

export type ReportTemplateDto = {
  __typename?: "ReportTemplateDto";
  id?: Maybe<Scalars["UUID"]>;
  name?: Maybe<Scalars["String"]>;
  outputType?: Maybe<ReportOutputType>;
  pieChartDescription?: Maybe<PieChartDescriptionDto>;
  pivotTableDescription?: Maybe<PivotTableDescriptionDto>;
  tableDescription?: Maybe<TableDescriptionDto>;
  version?: Maybe<Scalars["Int"]>;
};

export type ReportTemplateInputDtoInput = {
  id?: InputMaybe<Scalars["UUID"]>;
  name?: InputMaybe<Scalars["String"]>;
  outputType?: InputMaybe<ReportOutputType>;
  pieChartDescription?: InputMaybe<PieChartDescriptionInputDtoInput>;
  pivotTableDescription?: InputMaybe<PivotTableDescriptionInputDtoInput>;
  tableDescription?: InputMaybe<TableDescriptionInputDtoInput>;
  version?: InputMaybe<Scalars["Int"]>;
};

export enum ReportType {
  Custom = "CUSTOM",
  Entity = "ENTITY",
  EntityList = "ENTITY_LIST",
}

export type ReportWizardDataDtoInput = {
  entityClassName?: InputMaybe<Scalars["String"]>;
  graphQLIdProperty?: InputMaybe<Scalars["String"]>;
  graphQLQueryName?: InputMaybe<Scalars["String"]>;
  graphQLQueryProperties?: InputMaybe<Array<InputMaybe<StringInput>>>;
  reportName?: InputMaybe<Scalars["String"]>;
  reportRegionProperties?: InputMaybe<Array<InputMaybe<StringInput>>>;
  reportType?: InputMaybe<ReportType>;
  templateFileType?: InputMaybe<TemplateFileType>;
};

export type ResendMessageDtoInput = {
  address?: InputMaybe<Scalars["String"]>;
  bcc?: InputMaybe<Scalars["String"]>;
  cc?: InputMaybe<Scalars["String"]>;
  sourceMessageId?: InputMaybe<Scalars["UUID"]>;
};

export type RevisionFilterDtoInput = {
  entityFullName?: InputMaybe<Scalars["String"]>;
  entityId?: InputMaybe<Scalars["String"]>;
  from?: InputMaybe<Scalars["String"]>;
  revisionType?: InputMaybe<RevisionTypeDto>;
  to?: InputMaybe<Scalars["String"]>;
  username?: InputMaybe<Scalars["String"]>;
};

export enum RevisionTypeDto {
  Delete = "DELETE",
  Insert = "INSERT",
  Update = "UPDATE",
}

export type SalespersonDto = {
  __typename?: "SalespersonDto";
  id?: Maybe<Scalars["Long"]>;
  location?: Maybe<Scalars["Point"]>;
  name?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  territory?: Maybe<TerritoryDto>;
};

export type SalespersonDtoInput = {
  id?: InputMaybe<Scalars["Long"]>;
  location?: InputMaybe<Scalars["Point"]>;
  name?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  territory?: InputMaybe<TerritoryDtoInput>;
};

export type SendEmailDtoInput = {
  address?: InputMaybe<Scalars["String"]>;
};

export type SendingAttachmentDto = {
  __typename?: "SendingAttachmentDto";
  id?: Maybe<Scalars["UUID"]>;
  name?: Maybe<Scalars["String"]>;
};

export type SendingMessageDto = {
  __typename?: "SendingMessageDto";
  address?: Maybe<Scalars["String"]>;
  attachments?: Maybe<Array<Maybe<SendingAttachmentDto>>>;
  attachmentsName?: Maybe<Scalars["String"]>;
  attemptsLimit?: Maybe<Scalars["Int"]>;
  attemptsMade?: Maybe<Scalars["Int"]>;
  bcc?: Maybe<Scalars["String"]>;
  bodyContentType?: Maybe<Scalars["String"]>;
  cc?: Maybe<Scalars["String"]>;
  contentText?: Maybe<Scalars["String"]>;
  createTs?: Maybe<Scalars["DateTime"]>;
  dateSent?: Maybe<Scalars["DateTime"]>;
  deadline?: Maybe<Scalars["DateTime"]>;
  from?: Maybe<Scalars["String"]>;
  headers?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["UUID"]>;
  important?: Maybe<Scalars["Boolean"]>;
  status?: Maybe<SendingStatus>;
  subject?: Maybe<Scalars["String"]>;
  updateTs?: Maybe<Scalars["DateTime"]>;
};

export enum SendingStatus {
  NotSent = "NOT_SENT",
  Queue = "QUEUE",
  Sending = "SENDING",
  Sent = "SENT",
}

export type StringInput = {
  hash: Scalars["Int"];
};

export type TableDescriptionDto = {
  __typename?: "TableDescriptionDto";
  bandName?: Maybe<Scalars["String"]>;
  columnsProperties?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["UUID"]>;
};

export type TableDescriptionInputDtoInput = {
  bandName?: InputMaybe<Scalars["String"]>;
  columnsProperties?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["UUID"]>;
};

export enum TemplateFileType {
  Chart = "CHART",
  Csv = "CSV",
  Docx = "DOCX",
  Html = "HTML",
  Table = "TABLE",
  Xlsx = "XLSX",
}

export type TerritoryDto = {
  __typename?: "TerritoryDto";
  id?: Maybe<Scalars["Long"]>;
  name?: Maybe<Scalars["String"]>;
  polygon?: Maybe<Scalars["Polygon"]>;
};

export type TerritoryDtoInput = {
  id?: InputMaybe<Scalars["Long"]>;
  name?: InputMaybe<Scalars["String"]>;
  polygon?: InputMaybe<Scalars["Polygon"]>;
};

export type UserActionInputDtoInput = {
  actionDateTime?: InputMaybe<Scalars["String"]>;
  clientIp?: InputMaybe<Scalars["String"]>;
  componentId?: InputMaybe<Scalars["String"]>;
  componentType?: InputMaybe<Scalars["String"]>;
};

export type UserActionOutputDto = {
  __typename?: "UserActionOutputDto";
  actionDateTime?: Maybe<Scalars["String"]>;
  clientIp?: Maybe<Scalars["String"]>;
  componentId?: Maybe<Scalars["String"]>;
  componentType?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
};

export type UserActionsFilterInput = {
  componentId?: InputMaybe<Scalars["String"]>;
  componentType?: InputMaybe<Scalars["String"]>;
  endTime?: InputMaybe<Scalars["String"]>;
  startTime?: InputMaybe<Scalars["String"]>;
  username?: InputMaybe<Scalars["String"]>;
};

export type ValueFormatDto = {
  __typename?: "ValueFormatDto";
  formatString?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["UUID"]>;
  name?: Maybe<Scalars["String"]>;
};

export type ValueFormatInputDtoInput = {
  formatString?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type SendEmailAsyncMutationVariables = Exact<{
  input?: InputMaybe<SendEmailDtoInput>;
}>;

export type SendEmailAsyncMutation = {
  __typename?: "Mutation";
  sendEmailAsync: boolean;
};

export type FindOrderQueryVariables = Exact<{
  id: Scalars["Long"];
}>;

export type FindOrderQuery = {
  __typename?: "Query";
  findOrder?:
    | {
        __typename?: "CustomerOrderDto";
        amount?: number | null | undefined;
        id?: any | null | undefined;
        location?: any | null | undefined;
        salesperson?:
          | {
              __typename?: "SalespersonDto";
              id?: any | null | undefined;
              location?: any | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type UpdateOrderMutationVariables = Exact<{
  input?: InputMaybe<CustomerOrderDtoInput>;
}>;

export type UpdateOrderMutation = {
  __typename?: "Mutation";
  updateOrder?:
    | {
        __typename?: "CustomerOrderDto";
        amount?: number | null | undefined;
        id?: any | null | undefined;
        location?: any | null | undefined;
        salesperson?:
          | { __typename?: "SalespersonDto"; id?: any | null | undefined }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type New_CustomerOrderDtoFragment = {
  __typename?: "CustomerOrderDto";
  id?: any | null | undefined;
};

export type ListOrdersQueryVariables = Exact<{ [key: string]: never }>;

export type ListOrdersQuery = {
  __typename?: "Query";
  listOrders?:
    | Array<
        | {
            __typename?: "CustomerOrderDto";
            amount?: number | null | undefined;
            id?: any | null | undefined;
            location?: any | null | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type DeleteOrderMutationVariables = Exact<{
  id: Scalars["Long"];
}>;

export type DeleteOrderMutation = {
  __typename?: "Mutation";
  deleteOrder: boolean;
};

export type GetStringParameterQueryVariables = Exact<{ [key: string]: never }>;

export type GetStringParameterQuery = {
  __typename?: "Query";
  getStringParameter?: string | null | undefined;
};

export type GetNumberParameterQueryVariables = Exact<{ [key: string]: never }>;

export type GetNumberParameterQuery = {
  __typename?: "Query";
  getNumberParameter: number;
};

export type GetDateTimeParameterQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetDateTimeParameterQuery = {
  __typename?: "Query";
  getDateTimeParameter?: string | null | undefined;
};

export type GetEnumParameterQueryVariables = Exact<{ [key: string]: never }>;

export type GetEnumParameterQuery = {
  __typename?: "Query";
  getEnumParameter?: string | null | undefined;
};

export type GetEntityParameterQueryVariables = Exact<{ [key: string]: never }>;

export type GetEntityParameterQuery = {
  __typename?: "Query";
  getEntityParameter: any;
};

export type FindSalespersonQueryVariables = Exact<{
  id: Scalars["Long"];
}>;

export type FindSalespersonQuery = {
  __typename?: "Query";
  findSalesperson?:
    | {
        __typename?: "SalespersonDto";
        id?: any | null | undefined;
        location?: any | null | undefined;
        name?: string | null | undefined;
        phone?: string | null | undefined;
        territory?:
          | {
              __typename?: "TerritoryDto";
              id?: any | null | undefined;
              name?: string | null | undefined;
              polygon?: any | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type UpdateSalespersonMutationVariables = Exact<{
  input?: InputMaybe<SalespersonDtoInput>;
}>;

export type UpdateSalespersonMutation = {
  __typename?: "Mutation";
  updateSalesperson?:
    | {
        __typename?: "SalespersonDto";
        id?: any | null | undefined;
        location?: any | null | undefined;
        name?: string | null | undefined;
        phone?: string | null | undefined;
        territory?:
          | {
              __typename?: "TerritoryDto";
              id?: any | null | undefined;
              name?: string | null | undefined;
              polygon?: any | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type New_SalespersonDtoFragment = {
  __typename?: "SalespersonDto";
  id?: any | null | undefined;
};

export type ListSalespeopleQueryVariables = Exact<{ [key: string]: never }>;

export type ListSalespeopleQuery = {
  __typename?: "Query";
  listSalespeople?:
    | Array<
        | {
            __typename?: "SalespersonDto";
            id?: any | null | undefined;
            location?: any | null | undefined;
            name?: string | null | undefined;
            phone?: string | null | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type DeleteSalespersonMutationVariables = Exact<{
  id: Scalars["Long"];
}>;

export type DeleteSalespersonMutation = {
  __typename?: "Mutation";
  deleteSalesperson: boolean;
};

export type FindTerritoryQueryVariables = Exact<{
  id: Scalars["Long"];
}>;

export type FindTerritoryQuery = {
  __typename?: "Query";
  findTerritory?:
    | {
        __typename?: "TerritoryDto";
        id?: any | null | undefined;
        name?: string | null | undefined;
        polygon?: any | null | undefined;
      }
    | null
    | undefined;
};

export type UpdateTerritoryMutationVariables = Exact<{
  input?: InputMaybe<TerritoryDtoInput>;
}>;

export type UpdateTerritoryMutation = {
  __typename?: "Mutation";
  updateTerritory?:
    | {
        __typename?: "TerritoryDto";
        id?: any | null | undefined;
        name?: string | null | undefined;
        polygon?: any | null | undefined;
      }
    | null
    | undefined;
};

export type New_TerritoryDtoFragment = {
  __typename?: "TerritoryDto";
  id?: any | null | undefined;
};

export type ListTerritoriesQueryVariables = Exact<{ [key: string]: never }>;

export type ListTerritoriesQuery = {
  __typename?: "Query";
  listTerritories?:
    | Array<
        | {
            __typename?: "TerritoryDto";
            id?: any | null | undefined;
            name?: string | null | undefined;
            polygon?: any | null | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type DeleteTerritoryMutationVariables = Exact<{
  id: Scalars["Long"];
}>;

export type DeleteTerritoryMutation = {
  __typename?: "Mutation";
  deleteTerritory: boolean;
};

export const New_CustomerOrderDtoFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "New_CustomerOrderDto" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CustomerOrderDto" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
      },
    },
  ],
} as unknown as DocumentNode<New_CustomerOrderDtoFragment, unknown>;
export const New_SalespersonDtoFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "New_SalespersonDto" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SalespersonDto" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
      },
    },
  ],
} as unknown as DocumentNode<New_SalespersonDtoFragment, unknown>;
export const New_TerritoryDtoFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "New_TerritoryDto" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TerritoryDto" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
      },
    },
  ],
} as unknown as DocumentNode<New_TerritoryDtoFragment, unknown>;
export const SendEmailAsyncDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "sendEmailAsync" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "SendEmailDtoInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "sendEmailAsync" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SendEmailAsyncMutation,
  SendEmailAsyncMutationVariables
>;
export const FindOrderDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "findOrder" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Long" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "findOrder" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "amount" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "location" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "salesperson" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "location" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindOrderQuery, FindOrderQueryVariables>;
export const UpdateOrderDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateOrder" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "CustomerOrderDtoInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateOrder" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "amount" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "location" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "salesperson" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateOrderMutation, UpdateOrderMutationVariables>;
export const ListOrdersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "listOrders" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "listOrders" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "amount" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "location" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ListOrdersQuery, ListOrdersQueryVariables>;
export const DeleteOrderDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deleteOrder" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Long" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteOrder" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteOrderMutation, DeleteOrderMutationVariables>;
export const GetStringParameterDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getStringParameter" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getStringParameter" },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetStringParameterQuery,
  GetStringParameterQueryVariables
>;
export const GetNumberParameterDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getNumberParameter" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getNumberParameter" },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetNumberParameterQuery,
  GetNumberParameterQueryVariables
>;
export const GetDateTimeParameterDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getDateTimeParameter" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getDateTimeParameter" },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetDateTimeParameterQuery,
  GetDateTimeParameterQueryVariables
>;
export const GetEnumParameterDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getEnumParameter" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "getEnumParameter" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetEnumParameterQuery,
  GetEnumParameterQueryVariables
>;
export const GetEntityParameterDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getEntityParameter" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getEntityParameter" },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetEntityParameterQuery,
  GetEntityParameterQueryVariables
>;
export const FindSalespersonDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "findSalesperson" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Long" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "findSalesperson" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "location" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "phone" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "territory" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "polygon" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FindSalespersonQuery,
  FindSalespersonQueryVariables
>;
export const UpdateSalespersonDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateSalesperson" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "SalespersonDtoInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateSalesperson" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "location" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "phone" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "territory" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "polygon" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateSalespersonMutation,
  UpdateSalespersonMutationVariables
>;
export const ListSalespeopleDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "listSalespeople" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "listSalespeople" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "location" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "phone" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListSalespeopleQuery,
  ListSalespeopleQueryVariables
>;
export const DeleteSalespersonDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deleteSalesperson" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Long" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteSalesperson" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteSalespersonMutation,
  DeleteSalespersonMutationVariables
>;
export const FindTerritoryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "findTerritory" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Long" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "findTerritory" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "polygon" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindTerritoryQuery, FindTerritoryQueryVariables>;
export const UpdateTerritoryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateTerritory" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "TerritoryDtoInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateTerritory" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "polygon" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateTerritoryMutation,
  UpdateTerritoryMutationVariables
>;
export const ListTerritoriesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "listTerritories" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "listTerritories" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "polygon" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListTerritoriesQuery,
  ListTerritoriesQueryVariables
>;
export const DeleteTerritoryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deleteTerritory" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Long" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteTerritory" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteTerritoryMutation,
  DeleteTerritoryMutationVariables
>;
