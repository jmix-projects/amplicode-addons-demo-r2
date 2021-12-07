/* eslint-disable */
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
  /** Point */
  Point: any;
  /** Polygon */
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

/** Mutation root */
export type Mutation = {
  __typename?: "Mutation";
  deleteOrder: Scalars["Boolean"];
  deleteSalesperson: Scalars["Boolean"];
  deleteTerritory: Scalars["Boolean"];
  sendEmailAsync: Scalars["Boolean"];
  updateOrder?: Maybe<CustomerOrderDto>;
  updateSalesperson?: Maybe<SalespersonDto>;
  updateTerritory?: Maybe<TerritoryDto>;
};

/** Mutation root */
export type MutationDeleteOrderArgs = {
  id: Scalars["Long"];
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
export type MutationSendEmailAsyncArgs = {
  input?: InputMaybe<SendEmailDtoInput>;
};

/** Mutation root */
export type MutationUpdateOrderArgs = {
  input?: InputMaybe<CustomerOrderDtoInput>;
};

/** Mutation root */
export type MutationUpdateSalespersonArgs = {
  input?: InputMaybe<SalespersonDtoInput>;
};

/** Mutation root */
export type MutationUpdateTerritoryArgs = {
  input?: InputMaybe<TerritoryDtoInput>;
};

/** Query root */
export type Query = {
  __typename?: "Query";
  countOrders: Scalars["Long"];
  countSalespeople: Scalars["Long"];
  countTerritories: Scalars["Long"];
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
