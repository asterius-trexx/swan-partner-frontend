import {
  CacheExchangeOpts,
  OptimisticMutationResolver as GraphCacheOptimisticMutationResolver,
  Resolver as GraphCacheResolver,
  StorageAdapter as GraphCacheStorageAdapter,
  UpdateResolver as GraphCacheUpdateResolver,
} from "@urql/exchange-graphcache";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** Swan account number */
  AccountNumber: { input: string; output: string };
  /**
   * The amount given with fractional digits, where fractions must be compliant to the currency definition. Up to 14 significant figures. Negative amounts are signed by minus. The decimal separator is a dot.
   *
   * Example: Valid representations for EUR with up to two decimals are:
   *
   * 1056
   * 5768.2
   * -1.50
   * 5877.78
   */
  AmountValue: { input: string; output: string };
  /** Bank Identifier Code */
  BIC: { input: string; output: string };
  /** Country code alpha 2 (ISO 3166) */
  CCA2: { input: string; output: string };
  /** Country code alpha 3 (ISO 3166) */
  CCA3: { input: string; output: string };
  /** currency code alpha 3 (ISO 4217) */
  Currency: { input: string; output: string };
  /** Date with YYYY-MM-DD format */
  Date: { input: string; output: string };
  /**
   * Date time (ISO 8601 with time information)
   * ex: 2021-04-12T16:28:22.867Z
   */
  DateTime: { input: string; output: string };
  EmailAddress: { input: string; output: string };
  HexColorCode: { input: string; output: string };
  /** International Bank Account Number */
  IBAN: { input: string; output: string };
  /** 6 digits numeric passcode */
  PIN: { input: string; output: string };
  /**
   * E.164 standard format phone number
   *
   * Examples
   * +551155256325
   * +44207183875
   */
  PhoneNumber: { input: string; output: string };
  /**
   * SEPA Creditor Identifier
   * format :
   *     1 – 2: ISO Country Code
   *     3 – 4: Check Digit
   *     5 – 7: Creditor Business Code – you (Creditor) choose this. The default is ZZZ
   *     8 - 35: Creditor National Identifier – a consecutive number that will be assigned by country
   * example:
   *     FR11ABC123456
   */
  SepaCreditorIdentifier: { input: string; output: string };
  /**
   * SEPA Identifier
   * max 35 Latin characters as follow :
   *     a b c d e f g h i j k l m n o p q r s t u v w x y z
   *     A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
   *     0 1 2 3 4 5 6 7 8 9
   *     / - ? : ( ) . , '  +
   * with some follow extra rules :
   *     Content must not start or end with a ‘/’
   *     Content must not contain ‘//’s
   */
  SepaReference: { input: string; output: string };
  /**
   * URL that follows the WHATWG URL Standard.
   *
   * [Examples of parsed URLs](https://url.spec.whatwg.org/#example-url-parsing) may be found in the Standard itself.
   */
  URL: { input: string; output: string };
  Upload: { input: unknown; output: unknown };
  WalletToken: { input: string; output: string };
};

/** Whether you call it a wallet, monetary account, payment account or bank account, the notion of account is fundamental at Swan. All payment flows necessarily go through an account. */
export type Account = {
  __typename: "Account";
  /**
   * Bank Identifier Code
   * Only if the account membership has `canViewAccount=true` & this account has `paymentLevel=Unlimited`
   */
  BIC: Scalars["BIC"]["output"];
  /**
   * International Bank Account Number
   * Only if the account membership has `canViewAccount=true` & this account has `paymentLevel=Unlimited`
   */
  IBAN?: Maybe<Scalars["IBAN"]["output"]>;
  /** Link to the account's bank details */
  bankDetails?: Maybe<Scalars["String"]["output"]>;
  /** `true` if the main IBAN refuses all Sepa Direct Debit received */
  blockSDD?: Maybe<Scalars["Boolean"]["output"]>;
  /** Cash account type */
  cashAccountType: CashAccountType;
  /** Country of the account */
  country: AccountCountry;
  /** Created date */
  createdAt: Scalars["DateTime"]["output"];
  /** Currency */
  currency: Scalars["Currency"]["output"];
  /** Account holder */
  holder: AccountHolder;
  /** Unique identifier of an account */
  id: Scalars["ID"]["output"];
  /** Language used for account statements */
  language: AccountLanguage;
  /** Legal representative account membership */
  legalRepresentativeMembership: AccountMembership;
  /** List of account membership for this account */
  memberships: AccountMembershipConnection;
  /** Account name */
  name: Scalars["String"]["output"];
  /** Unique account number */
  number: Scalars["AccountNumber"]["output"];
  /** Partnership status */
  partnershipStatusInfo?: Maybe<PartnershipStatusInfo>;
  /** Type of the account : EMoney if account holder has not finished the KYC requirements, PaymentService otherwise */
  paymentAccountType: PaymentAccountType;
  /** Payment level */
  paymentLevel: PaymentLevel;
  /** `true`if a consent is required to fetch new transactions */
  requiredConsentToFetchNewTransactions: Scalars["Boolean"]["output"];
  /** Status of the account */
  statusInfo: AccountStatusInfo;
  /** Updated date */
  updatedAt: Scalars["DateTime"]["output"];
  /** Date of the account going from eMoney to PaymentService */
  upgradedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** List of Virtual IBAN */
  virtualIbanEntries: VirtualIbanEntryConnection;
};

/** Whether you call it a wallet, monetary account, payment account or bank account, the notion of account is fundamental at Swan. All payment flows necessarily go through an account. */
export type AccountMembershipsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filters?: InputMaybe<MembershipsFilterInput>;
  first?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<AccountMembershipOrderByInput>;
};

/** Whether you call it a wallet, monetary account, payment account or bank account, the notion of account is fundamental at Swan. All payment flows necessarily go through an account. */
export type AccountVirtualIbanEntriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: Scalars["Int"]["input"];
};

/** Account Closed status information */
export type AccountClosedStatus = AccountStatusInfo & {
  __typename: "AccountClosedStatus";
  /**
   * Reason why the account is suspended
   * @Deprecated
   */
  reason: Scalars["String"]["output"];
  /** Reason why the account is currently closed */
  reasonInfo: CloseAccountStatusReason;
  /** Account status (always Closed for type AccountClosedStatus) */
  status: AccountStatus;
};

/** Account Closing status information */
export type AccountClosingStatus = AccountStatusInfo & {
  __typename: "AccountClosingStatus";
  /**
   * Reason why the account is suspended
   * @Deprecated
   */
  reason: Scalars["String"]["output"];
  /** Reason why the account is currently in closing */
  reasonInfo: CloseAccountStatusReason;
  /** Account status (always Closing for type AccountClosingStatus) */
  status: AccountStatus;
};

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type AccountConnection = Connection & {
  __typename: "AccountConnection";
  /** AccountEdge list */
  edges: Array<AccountEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars["Int"]["output"];
};

/**
 * Refers to the country of the account. It will determine the country code of the local IBAN of the account.
 *
 * Available Account Country: CCA3
 */
export type AccountCountry =
  /** German account with a German IBAN, starting with DE. */
  | "DEU"
  /** Spanish account with a Spanish IBAN, starting with ES. */
  | "ESP"
  /** French account with a French IBAN, starting with FR. */
  | "FRA"
  /** Dutch account with a Dutch IBAN, starting with DU. */
  | "NLD";

/** Implements the Relay Edge interface */
export type AccountEdge = Edge & {
  __typename: "AccountEdge";
  /** Opaque identifier pointing to this node in the pagination mechanism */
  cursor: Scalars["String"]["output"];
  /** The account */
  node: Account;
};

/** The account holder is the person who owns the money stored in the account. The account holder can be one of your customers, whether it is a natural person or a legal person, or quite simply you. */
export type AccountHolder = {
  __typename: "AccountHolder";
  /** List of accounts owned by the account holder. */
  accounts: AccountConnection;
  /** Created date. */
  createdDate: Scalars["DateTime"]["output"];
  /** List of funding limit settings change request for an account holder */
  fundingLimitSettingsChangeRequests: FundingLimitSettingsChangeRequestConnection;
  /** Unique identifier of the account holder. */
  id: Scalars["ID"]["output"];
  /** Account holder type information. */
  info: AccountHolderInfo;
  /** Account holder onboarding */
  onboarding?: Maybe<Onboarding>;
  /** Residency address. */
  residencyAddress: AddressInfo;
  /** Account holder status information. */
  statusInfo?: Maybe<AccountHolderStatusInfo>;
  /** List of supporting document collection for an account holder */
  supportingDocumentCollections: SupportingDocumentCollectionConnection;
  /** Updated date. */
  updatedDate: Scalars["DateTime"]["output"];
  /**
   * Verification status.
   * *Banking regulations require financial institutions such as Swan to know and verify their customers in order to comply with their anti-money laundering and terrorist financing obligations. In banking jargon, we talk about KYC (Know Your Customers) procedure*
   */
  verificationStatus: VerificationStatus;
};

/** The account holder is the person who owns the money stored in the account. The account holder can be one of your customers, whether it is a natural person or a legal person, or quite simply you. */
export type AccountHolderAccountsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<AccountOrderByInput>;
};

/** The account holder is the person who owns the money stored in the account. The account holder can be one of your customers, whether it is a natural person or a legal person, or quite simply you. */
export type AccountHolderFundingLimitSettingsChangeRequestsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: Scalars["Int"]["input"];
};

/** The account holder is the person who owns the money stored in the account. The account holder can be one of your customers, whether it is a natural person or a legal person, or quite simply you. */
export type AccountHolderSupportingDocumentCollectionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: Scalars["Int"]["input"];
};

/** Account Holder Canceled Status Information */
export type AccountHolderCanceledStatusInfo = AccountHolderStatusInfo & {
  __typename: "AccountHolderCanceledStatusInfo";
  /** Reason why the account holder is suspended. */
  reason: Scalars["String"]["output"];
  /** Status of the account holder. */
  status: AccountHolderStatus;
};

export type AccountHolderCompanyInfo = AccountHolderInfo & {
  __typename: "AccountHolderCompanyInfo";
  /** Business activity. */
  businessActivity: BusinessActivity;
  /**
   * Business activity description.
   * This must be 1024 characters long maximum.
   */
  businessActivityDescription: Scalars["String"]["output"];
  /** Registration date of the company. */
  companyRegistrationDate?: Maybe<Scalars["Date"]["output"]>;
  /** Legal form of the company (SAS, SCI, SASU, ...). */
  companyType?: Maybe<CompanyType>;
  /**
   * The ultimate beneficiary is defined as the natural person (s) who own or control, directly or indirectly, the reporting company.
   *
   * The ultimate beneficiary is :
   * - either the natural person (s) who hold, directly or indirectly, more than 25% of the capital or the rights of vote of the reporting company;
   * - either the natural person (s) who exercise, by other means, a power of control of the company;
   */
  individualUltimateBeneficialOwners: Array<IndividualUltimateBeneficialOwner>;
  /** Legal representative personal address */
  legalRepresentativePersonalAddress?: Maybe<AddressInformation>;
  /** Estimated monthly payment volume (euro). */
  monthlyPaymentVolume: MonthlyPaymentVolume;
  /** Name of the company. */
  name: Scalars["String"]["output"];
  /** Registration number of the company (SIRET, ...). */
  registrationNumber?: Maybe<Scalars["String"]["output"]>;
  /** Tax Identification Number */
  taxIdentificationNumber?: Maybe<Scalars["String"]["output"]>;
  /** Account holder type (always Company for type AccountHolderCompanyInfo) */
  type: AccountHolderType;
  /** Unique number that identifies a taxable person (business) or non-taxable legal entity that is registered for VAT */
  vatNumber?: Maybe<Scalars["String"]["output"]>;
};

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)). */
export type AccountHolderConnection = Connection & {
  __typename: "AccountHolderConnection";
  /** AccountHolderEdge list. */
  edges: Array<AccountHolderEdge>;
  /** Information about the current, the previous and the next page. */
  pageInfo: PageInfo;
  /** Total number of element in the list. */
  totalCount: Scalars["Int"]["output"];
};

/** Implements the Relay Edge interface. */
export type AccountHolderEdge = Edge & {
  __typename: "AccountHolderEdge";
  /** Opaque identifier pointing to this node in the pagination mechanism. */
  cursor: Scalars["String"]["output"];
  /** The account holder. */
  node: AccountHolder;
};

/** Account Holder Enabled Status Information */
export type AccountHolderEnabledStatusInfo = AccountHolderStatusInfo & {
  __typename: "AccountHolderEnabledStatusInfo";
  /** Status of the account holder. */
  status: AccountHolderStatus;
};

export type AccountHolderFilterInput = {
  birthDate?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  registrationNumber?: InputMaybe<Scalars["String"]["input"]>;
  /** Searches company name, first name, last name */
  search?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Array<AccountHolderStatus>>;
  types?: InputMaybe<Array<AccountHolderType>>;
  verificationStatus?: InputMaybe<Array<VerificationStatus>>;
};

/** Individual account holder. */
export type AccountHolderIndividualInfo = AccountHolderInfo & {
  __typename: "AccountHolderIndividualInfo";
  /** Employment status of the account holder (regulatory questions). */
  employmentStatus: EmploymentStatus;
  /** Monthly income of the account holder (regulatory questions). */
  monthlyIncome: MonthlyIncome;
  /** Account Holder's first name and last name. */
  name: Scalars["String"]["output"];
  /** Tax Identification Number */
  taxIdentificationNumber?: Maybe<Scalars["String"]["output"]>;
  /** Account holder type (always Individual for type AccountHolderIndividualInfo). */
  type: AccountHolderType;
  /** User of the individual account holder. */
  user: User;
};

/** Account holder types. */
export type AccountHolderInfo = {
  /** Account holder name */
  name: Scalars["String"]["output"];
  /** Account holder type */
  type: AccountHolderType;
};

/** Rejection returned when the Account Holder was not found */
export type AccountHolderNotFoundRejection = Rejection & {
  __typename: "AccountHolderNotFoundRejection";
  message: Scalars["String"]["output"];
};

/** Field we can use when ordering that can be applied when listing account holders */
export type AccountHolderOrderByFieldInput = "createdAt" | "updatedAt";

/** Order that can be applied when listing account holders */
export type AccountHolderOrderByInput = {
  direction?: InputMaybe<OrderByDirection>;
  field?: InputMaybe<AccountHolderOrderByFieldInput>;
};

/** Account holder status. */
export type AccountHolderStatus =
  /** When the account holder is canceled. */
  | "Canceled"
  /** When the account holder is enabled. */
  | "Enabled"
  /** When the account holder is suspended. */
  | "Suspended";

/** Account Holder Status Information */
export type AccountHolderStatusInfo = {
  /** Status of the account holder. */
  status: AccountHolderStatus;
};

/** Account Holder Suspended Status Information */
export type AccountHolderSuspendedStatusInfo = AccountHolderStatusInfo & {
  __typename: "AccountHolderSuspendedStatusInfo";
  /** Reason why the account holder is suspended. */
  reason: Scalars["String"]["output"];
  /** Status of the account holder. */
  status: AccountHolderStatus;
};

/** Account holder type */
export type AccountHolderType =
  /** Company (Legal person) */
  | "Company"
  /** Individual (Natural person) */
  | "Individual";

/** Language: ISO 639-1 language code */
export type AccountLanguage = "de" | "en" | "es" | "fr" | "it" | "nl" | "pt";

/**
 * An account membership represents the rights of a user for a given account.
 *
 * *Each account is administered by an account membership having the capacity of legal representative. He has the possibility of delegating rights on this account to other users.*
 */
export type AccountMembership = {
  __typename: "AccountMembership";
  /** List of accepted identification level */
  acceptedIdentificationLevels: Array<Maybe<IdentificationLevel>>;
  /** account of the account membership */
  account?: Maybe<Account>;
  /** `true` if this account membership can initiate payments */
  canInitiatePayments: Scalars["Boolean"]["output"];
  /** `true` if this account membership can invite, update, suspend or resume memberships */
  canManageAccountMembership: Scalars["Boolean"]["output"];
  /** `true` if this account membership can add or canceled beneficiaries */
  canManageBeneficiaries: Scalars["Boolean"]["output"];
  /** `true` if this account membership can manage cards for himself or to the memberships he manages */
  canManageCards: Scalars["Boolean"]["output"];
  /** `true` if this account membership can view account balances and transactions history */
  canViewAccount: Scalars["Boolean"]["output"];
  /** account membership's cards */
  cards: CardConnection;
  /** Created date */
  createdAt: Scalars["DateTime"]["output"];
  /** Disabled date */
  disabledAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** email */
  email: Scalars["String"]["output"];
  /** Indicate if the identity bound to the account membership has required identification level */
  hasRequiredIdentificationLevel?: Maybe<Scalars["Boolean"]["output"]>;
  /** Unique identifier of an account membership */
  id: Scalars["ID"]["output"];
  /** `true` if this account membership having the capacity of the legal representative of the account holder. */
  legalRepresentative: Scalars["Boolean"]["output"];
  /** Recommended identification level */
  recommendedIdentificationLevel: IdentificationLevel;
  /** Residency address of the member */
  residencyAddress?: Maybe<AddressInfo>;
  /** Periodic Spending limit list */
  spendingLimits?: Maybe<Array<SpendingLimit>>;
  /** status of the account membership */
  statusInfo: AccountMembershipStatusInfo;
  /** Tax Identification Number of the member */
  taxIdentificationNumber?: Maybe<Scalars["String"]["output"]>;
  /** Updated date */
  updatedAt: Scalars["DateTime"]["output"];
  /** user of this account membership */
  user?: Maybe<User>;
  /** version of the account membership started from '1' and incremented at every updates */
  version: Scalars["String"]["output"];
};

/**
 * An account membership represents the rights of a user for a given account.
 *
 * *Each account is administered by an account membership having the capacity of legal representative. He has the possibility of delegating rights on this account to other users.*
 */
export type AccountMembershipCardsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filters?: InputMaybe<CardFiltersInput>;
  first?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<CardOrderByInput>;
};

/** when a user is binded with the error to the account membership */
export type AccountMembershipBindingUserErrorStatusInfo = AccountMembershipStatusInfo & {
  __typename: "AccountMembershipBindingUserErrorStatusInfo";
  /** `true` if the birth date of the user binded doesn't match with the invitation */
  birthDateMatchError: Scalars["Boolean"]["output"];
  /** `true` if the first name of the user binded doesn't match with the invitation */
  firstNameMatchError: Scalars["Boolean"]["output"];
  /** `true` if Swan hasn't verified the user's identity */
  idVerifiedMatchError: Scalars["Boolean"]["output"];
  /** `true` if the last name of the user binded doesn't match with the invitation */
  lastNameMatchError: Scalars["Boolean"]["output"];
  /** `true` if the phone number of the user binded doesn't match with the invitation */
  phoneNumberMatchError: Scalars["Boolean"]["output"];
  /** restricted to a user */
  restrictedTo: RestrictedTo;
  /** AccountMembership status (always BindingUserError for type AccountMembershipBindingUserErrorStatusInfo) */
  status: AccountMembershipStatus;
};

export type AccountMembershipCannotBeDisabledRejection = Rejection & {
  __typename: "AccountMembershipCannotBeDisabledRejection";
  accountMembershipId: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

export type AccountMembershipCannotBeUpdatedRejection = Rejection & {
  __typename: "AccountMembershipCannotBeUpdatedRejection";
  id: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type AccountMembershipConnection = Connection & {
  __typename: "AccountMembershipConnection";
  /** AccountMembershipEdge list */
  edges: Array<AccountMembershipEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars["Int"]["output"];
};

/** when the user has to consent to invite a new account membership */
export type AccountMembershipConsentPendingStatusInfo = AccountMembershipStatusInfo & {
  __typename: "AccountMembershipConsentPendingStatusInfo";
  /** The consent required to invite this account membership */
  consent: Consent;
  /** restricted to a user */
  restrictedTo: RestrictedTo;
  /** AccountMembership status (always ConsentPending for type AccountMembershipConsentPendingStatusInfo) */
  status: AccountMembershipStatus;
};

/** when the account membership is disabled */
export type AccountMembershipDisabledStatusInfo = AccountMembershipStatusInfo & {
  __typename: "AccountMembershipDisabledStatusInfo";
  /** reason why the account membership is disabled */
  reason: Scalars["String"]["output"];
  /** AccountMembership status (always Disabled for type AccountMembershipDisabledStatusInfo) */
  status: AccountMembershipStatus;
};

/** Implements the Relay Edge interface */
export type AccountMembershipEdge = Edge & {
  __typename: "AccountMembershipEdge";
  /** Opaque identifier pointing to this node in the pagination mechanism */
  cursor: Scalars["String"]["output"];
  /** The account membership */
  node: AccountMembership;
};

/** when the account membership is enabled */
export type AccountMembershipEnabledStatusInfo = AccountMembershipStatusInfo & {
  __typename: "AccountMembershipEnabledStatusInfo";
  /** AccountMembership status (always Enabled for type AccountMembershipEnabledStatusInfo) */
  status: AccountMembershipStatus;
};

/** when a new account membership is invited and there is no user binded yet */
export type AccountMembershipInvitationSentStatusInfo = AccountMembershipStatusInfo & {
  __typename: "AccountMembershipInvitationSentStatusInfo";
  /** restricted to a user */
  restrictedTo: RestrictedTo;
  /** AccountMembership status (always InvitationSent for type AccountMembershipInvitationSentStatusInfo) */
  status: AccountMembershipStatus;
};

/** Rejection returned when the Account Membership is not allowed to use an operation. */
export type AccountMembershipNotAllowedRejection = Rejection & {
  __typename: "AccountMembershipNotAllowedRejection";
  message: Scalars["String"]["output"];
};

export type AccountMembershipNotFoundRejection = Rejection & {
  __typename: "AccountMembershipNotFoundRejection";
  id: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

/** Rejection returned if invitation has not been sent to user yet */
export type AccountMembershipNotReadyToBeBoundRejection = Rejection & {
  __typename: "AccountMembershipNotReadyToBeBoundRejection";
  id: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

/** Field we can use when ordering that can be applied when listing account memberships */
export type AccountMembershipOrderByFieldInput = "createdAt" | "updatedAt";

/** Order that can be applied when listing account memberships */
export type AccountMembershipOrderByInput = {
  direction?: InputMaybe<OrderByDirection>;
  field?: InputMaybe<AccountMembershipOrderByFieldInput>;
};

/** AccountMembership enabled */
export type AccountMembershipStatus =
  /** when the user binded with errors to the account membership */
  | "BindingUserError"
  /** when the consent to invite the account membership is pending */
  | "ConsentPending"
  /** when the account membership is disabled */
  | "Disabled"
  /** when the account membership is enabled */
  | "Enabled"
  /** when the account membership is invited */
  | "InvitationSent"
  /** when the account membership is suspended */
  | "Suspended";

/** here are the different account membership status: */
export type AccountMembershipStatusInfo = {
  /** AccountMembership status */
  status: AccountMembershipStatus;
};

/** when the account membership is suspended */
export type AccountMembershipSuspendedStatusInfo = AccountMembershipStatusInfo & {
  __typename: "AccountMembershipSuspendedStatusInfo";
  /** reason why the account membership is suspended */
  reason: Scalars["String"]["output"];
  /** AccountMembership status (always Suspended for type AccountMembershipSuspendedStatusInfo) */
  status: AccountMembershipStatus;
};

/** Filters that can be applied when listing accounts (Only applied in user context) */
export type AccountMembershipsFilterInput = {
  /** Can the user initiate payments on this account */
  canInitiatePayments?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Can the user manage account membership */
  canManageAccountMembership?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Can the user manage beneficiaries */
  canManageBeneficiaries?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** `true` if this account membership can manage cards for himself or to the memberships he manages */
  canManageCards?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Can the user view account */
  canViewAccount?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Filtered by email */
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** Filtered by first name */
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  /** Filtered by last name */
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  /** Searches email, first name, last name, and id */
  search?: InputMaybe<Scalars["String"]["input"]>;
  /** Account memberships status/statuses we're looking for */
  status?: InputMaybe<Array<AccountMembershipStatus>>;
};

/** List of account memberships permission */
export type AccountMembershipsPermission =
  | "canInitiatePayments"
  | "canManageAccountMembership"
  | "canManageBeneficiaries"
  | "canManageCards"
  | "canViewAccount";

/** Rejection returned if the account was not found or if the user does not have the rights to know that the card exists */
export type AccountNotFoundRejection = Rejection & {
  __typename: "AccountNotFoundRejection";
  id: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

/** Account Opened status information */
export type AccountOpenedStatus = AccountStatusInfo & {
  __typename: "AccountOpenedStatus";
  /** Account status (always Opened for type AccountOpenedStatus) */
  status: AccountStatus;
};

/** Fields that can be used when ordering accounts */
export type AccountOrderByFieldInput = "createdAt" | "updatedAt";

/** Order that can be applied when listing accounts */
export type AccountOrderByInput = {
  direction?: InputMaybe<OrderByDirection>;
  field?: InputMaybe<AccountOrderByFieldInput>;
};

export type AccountStatus =
  /** When the account is closed */
  | "Closed"
  /** When the account is currently closing */
  | "Closing"
  /** When the account is opened */
  | "Opened"
  /** When the account is suspended */
  | "Suspended";

export type AccountStatusInfo = {
  /** Account status */
  status: AccountStatus;
};

/** Account Suspended status information */
export type AccountSuspendedStatus = AccountStatusInfo & {
  __typename: "AccountSuspendedStatus";
  /**
   * Reason why the account is suspended
   * @Deprecated
   */
  reason: Scalars["String"]["output"];
  /** Reason why the account is currently suspend */
  reasonInfo: SuspendAccountStatusReason;
  /** Account status (always Suspended for type AccountSuspendedStatus) */
  status: AccountStatus;
};

export type ActiveMerchantPaymentLinkStatusInfo = MerchantPaymentLinkStatusInfo & {
  __typename: "ActiveMerchantPaymentLinkStatusInfo";
  /**
   * The date when the payment link expires.
   * The payment link expires 24 hours after it was created.
   */
  expiresAt: Scalars["DateTime"]["output"];
  status: MerchantPaymentLinkStatus;
};

/** Rejection returned if the attempting to add cards to different accounts. */
export type AddingCardsToDifferentAccountsRejection = Rejection & {
  __typename: "AddingCardsToDifferentAccountsRejection";
  message: Scalars["String"]["output"];
};

/** Address Information */
export type Address = {
  __typename: "Address";
  /** address line 1 */
  addressLine1?: Maybe<Scalars["String"]["output"]>;
  /** addressLine2 */
  addressLine2?: Maybe<Scalars["String"]["output"]>;
  /** city */
  city?: Maybe<Scalars["String"]["output"]>;
  /** country */
  country?: Maybe<Scalars["CCA3"]["output"]>;
  /** postal code (max 10 characters) */
  postalCode?: Maybe<Scalars["String"]["output"]>;
  /** state */
  state?: Maybe<Scalars["String"]["output"]>;
};

/** Address information. */
export type AddressInfo = {
  __typename: "AddressInfo";
  /** Address line 1. */
  addressLine1?: Maybe<Scalars["String"]["output"]>;
  /** Address line 2. */
  addressLine2?: Maybe<Scalars["String"]["output"]>;
  /** City. */
  city?: Maybe<Scalars["String"]["output"]>;
  /** Country. */
  country?: Maybe<Scalars["CCA3"]["output"]>;
  /** Postal code. */
  postalCode?: Maybe<Scalars["String"]["output"]>;
  /** State. */
  state?: Maybe<Scalars["String"]["output"]>;
};

/** Address */
export type AddressInformation = {
  __typename: "AddressInformation";
  /** Address */
  addressLine1: Scalars["String"]["output"];
  /** Address */
  addressLine2?: Maybe<Scalars["String"]["output"]>;
  /** City */
  city: Scalars["String"]["output"];
  /** Country */
  country: Scalars["CCA3"]["output"];
  /** Postal code */
  postalCode: Scalars["String"]["output"];
  /** State */
  state?: Maybe<Scalars["String"]["output"]>;
};

/** Address */
export type AddressInformationInput = {
  /** Address */
  addressLine1: Scalars["String"]["input"];
  /** Address */
  addressLine2?: InputMaybe<Scalars["String"]["input"]>;
  /** City */
  city: Scalars["String"]["input"];
  /** Country */
  country: Scalars["CCA3"]["input"];
  /** Postal code */
  postalCode: Scalars["String"]["input"];
  /** State */
  state?: InputMaybe<Scalars["String"]["input"]>;
};

/** Address Information */
export type AddressInput = {
  /** address line 1 (max 100 characters) */
  addressLine1?: InputMaybe<Scalars["String"]["input"]>;
  /** address line 2 (max 100 characters) */
  addressLine2?: InputMaybe<Scalars["String"]["input"]>;
  /** city (max 100 characters) */
  city?: InputMaybe<Scalars["String"]["input"]>;
  /** country code */
  country: Scalars["CCA3"]["input"];
  /** postal code (max 10 characters) */
  postalCode?: InputMaybe<Scalars["String"]["input"]>;
  /** state (max 100 characters) */
  state?: InputMaybe<Scalars["String"]["input"]>;
};

/** Rejection returned if card already has a valid Physical Card */
export type AlreadyValidPhysicalCardRejection = Rejection & {
  __typename: "AlreadyValidPhysicalCardRejection";
  message: Scalars["String"]["output"];
};

/** Amount with its currency */
export type Amount = {
  __typename: "Amount";
  /** currency */
  currency: Scalars["Currency"]["output"];
  /** value of the amount */
  value: Scalars["AmountValue"]["output"];
};

/** Amount with its currency */
export type AmountInput = {
  /** currency */
  currency: Scalars["Currency"]["input"];
  /** value of the amount */
  value: Scalars["AmountValue"]["input"];
};

/** Rejection return if the project is not configured to allow Apple Pay */
export type ApplePayNotAllowedForProjectRejection = Rejection & {
  __typename: "ApplePayNotAllowedForProjectRejection";
  id: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

/** Approved Funding Limit */
export type ApprovedFundingLimit = {
  __typename: "ApprovedFundingLimit";
  /** Requested amount settings for the funding limit */
  fundingLimit: FundingLimitAmount;
  /** Requested amount settings for the instant funding limit */
  instantFundingLimit: FundingLimitAmount;
};

/** A method used to authenticate a user */
export type Authenticator = {
  __typename: "Authenticator";
  /** Accept-Language header used during registration, if it's a web authenticator */
  acceptLanguage?: Maybe<Scalars["String"]["output"]>;
  /** Device Brand (Apple, Samsung, ...) */
  brand?: Maybe<Scalars["String"]["output"]>;
  /** Device Model (iPhone XS, Samsung S3, ...) */
  model?: Maybe<Scalars["String"]["output"]>;
  /** Operating System (Apple, Android, ...) */
  os?: Maybe<Scalars["String"]["output"]>;
  /** Type of authenticator */
  type: AuthenticatorType;
  /** User agent, if it's a web authenticator */
  userAgent?: Maybe<Scalars["String"]["output"]>;
};

export type AuthenticatorType =
  /** The Swan app */
  | "Swan"
  /** A Swan web authenticator */
  | "SwanWeb";

/** Rejection returned if the status account is not valid */
export type BadAccountStatusRejection = Rejection & {
  __typename: "BadAccountStatusRejection";
  id: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

export type BadRequestRejection = Rejection & {
  __typename: "BadRequestRejection";
  message: Scalars["String"]["output"];
};

/** Business activity. */
export type BusinessActivity =
  | "AdministrativeServices"
  | "Agriculture"
  | "Arts"
  | "BusinessAndRetail"
  | "Construction"
  | "Education"
  | "ElectricalDistributionAndWaterSupply"
  | "FinancialAndInsuranceOperations"
  | "Health"
  | "Housekeeping"
  | "InformationAndCommunication"
  | "LodgingAndFoodServices"
  | "ManufacturingAndMining"
  | "Other"
  | "PublicAdministration"
  | "RealEstate"
  | "ScientificActivities"
  | "Transportation";

export type CanceledMerchantPaymentLinkStatusInfo = MerchantPaymentLinkStatusInfo & {
  __typename: "CanceledMerchantPaymentLinkStatusInfo";
  /** The date at which the customer canceled the payment. */
  canceledAt: Scalars["DateTime"]["output"];
  status: MerchantPaymentLinkStatus;
};

/** CanceledMerchantPaymentMethodStatusInfo */
export type CanceledMerchantPaymentMethodStatusInfo = MerchantPaymentMethodStatusInfo & {
  __typename: "CanceledMerchantPaymentMethodStatusInfo";
  /** Merchant Payment Method canceled date */
  canceledAt: Scalars["Date"]["output"];
  status: MerchantPaymentMethodStatus;
};

/** CanceledMerchantProfileStatusInfo */
export type CanceledMerchantProfileStatusInfo = MerchantProfileStatusInfo & {
  __typename: "CanceledMerchantProfileStatusInfo";
  canceledAt: Scalars["Date"]["output"];
  enabledAt?: Maybe<Scalars["Date"]["output"]>;
  status: MerchantProfileStatus;
};

/** Rejection returned when the Physical Card cannot be activated */
export type CannotActivatePhysicalCardRejection = Rejection & {
  __typename: "CannotActivatePhysicalCardRejection";
  identifier: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

/** Card */
export type Card = {
  __typename: "Card";
  /** Account membership to define the card holder and the account linked to the card. */
  accountMembership: AccountMembership;
  /** Card expiration date  if `null` it does not have an expiration date */
  cardContractExpiryDate?: Maybe<Scalars["DateTime"]["output"]>;
  /** URL of the card design */
  cardDesignUrl: Scalars["String"]["output"];
  /** Masked Card Number */
  cardMaskedNumber: Scalars["String"]["output"];
  /** Card product */
  cardProduct: CardProduct;
  /** URL of the card with masked card information (like its number) and with full card information if connected user consented beforehand */
  cardUrl: Scalars["String"]["output"];
  /** Created date */
  createdAt: Scalars["DateTime"]["output"];
  /** Digital Cards linked to this card */
  digitalCards: DigitalCardConnection;
  /** `true` if this card allows transactions at eCommerce sites */
  eCommerce: Scalars["Boolean"]["output"];
  /** Card expiry date with MM/YY format */
  expiryDate?: Maybe<Scalars["String"]["output"]>;
  /** Unique identifier of a card */
  id: Scalars["ID"]["output"];
  /** `true` if this card allows payments outside of the country */
  international: Scalars["Boolean"]["output"];
  /** Issuing Country */
  issuingCountry: Scalars["CCA3"]["output"];
  /** Main Currency */
  mainCurrency: Scalars["Currency"]["output"];
  /** Card name */
  name?: Maybe<Scalars["String"]["output"]>;
  /** `true` if this card allows transactions outside of the card's main currency */
  nonMainCurrencyTransactions: Scalars["Boolean"]["output"];
  /** Physical card if the card holder has ordered one */
  physicalCard?: Maybe<PhysicalCard>;
  /** Periodic Spending limit list */
  spendingLimits?: Maybe<Array<SpendingLimit>>;
  /** Card status information */
  statusInfo: CardStatusInfo;
  /** Type of a card */
  type: CardType;
  /** Updated date */
  updatedAt: Scalars["DateTime"]["output"];
  /** `true` if this card allows cash withdrawals */
  withdrawal: Scalars["Boolean"]["output"];
};

/** Card */
export type CardDigitalCardsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  filters?: InputMaybe<DigitalCardFiltersInput>;
  first?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<DigitalCardOrderByInput>;
};

/** Rejection returned if the card could not be digitalized */
export type CardCanNotBeDigitalizedRejection = Rejection & {
  __typename: "CardCanNotBeDigitalizedRejection";
  id: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

/** Card Canceled Status Information */
export type CardCanceledStatusInfo = CardStatusInfo & {
  __typename: "CardCanceledStatusInfo";
  /** Reason why the card is canceled */
  reason: Scalars["String"]["output"];
  /** Card status (always Canceled for type CardCanceledStatusInfo). */
  status: CardStatus;
};

/** Card Canceling Status Information */
export type CardCancelingStatusInfo = CardStatusInfo & {
  __typename: "CardCancelingStatusInfo";
  /** Reason why the card is about to be canceled. */
  reason: Scalars["String"]["output"];
  /** Card status (always Canceling for type CardCancelingStatusInfo). */
  status: CardStatus;
};

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type CardConnection = Connection & {
  __typename: "CardConnection";
  /** CardEdge list */
  edges: Array<CardEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars["Int"]["output"];
};

/** when the user has to consent to add this card */
export type CardConsentPendingStatusInfo = CardStatusInfo & {
  __typename: "CardConsentPendingStatusInfo";
  /** The consent required to add this card */
  consent: Consent;
  /** Card status (always ConsentPending for type CardConsentPendingStatusInfo) */
  status: CardStatus;
};

export type CardDesignBackground = {
  __typename: "CardDesignBackground";
  /** Card design background url */
  cardBackgroundUrl: Scalars["String"]["output"];
  /** Card design background text color */
  cardTextColor: Scalars["String"]["output"];
  /** Created date */
  createdAt: Scalars["DateTime"]["output"];
  /** Unique identifier of a project card design background */
  id: Scalars["ID"]["output"];
  /** Card design background name */
  name: Scalars["String"]["output"];
  /** Card design background type */
  type: Scalars["String"]["output"];
  /** Updated date */
  updatedAt: Scalars["DateTime"]["output"];
};

/** Project Card Design Background Type */
export type CardDesignBackgroundType =
  /** when Card design background is black */
  | "Black"
  /** when Card design background is customized */
  | "Custom"
  /** when Card design background is light */
  | "Silver";

/** Card designs Status */
export type CardDesignStatus =
  /** when card design are Disabled */
  | "Disabled"
  /** when card design are in Draft */
  | "Draft"
  /** when card design are Enabled */
  | "Enabled"
  /** when card design are ToReview */
  | "ToReview";

/** Implements the Relay Edge interface */
export type CardEdge = Edge & {
  __typename: "CardEdge";
  /** Opaque identifier pointing to this node in the pagination mechanism */
  cursor: Scalars["String"]["output"];
  /** The Card entry */
  node: Card;
};

/** Card Enabled Status Information */
export type CardEnabledStatusInfo = CardStatusInfo & {
  __typename: "CardEnabledStatusInfo";
  /** Card status (always Enabled for type CardEnabledStatusInfo). */
  status: CardStatus;
};

/** Filters that can be applied when listing cards */
export type CardFiltersInput = {
  /**
   * Account identifier
   *
   * This filter is only available for User Access Token, for the moment
   */
  accountId?: InputMaybe<Scalars["String"]["input"]>;
  /** String searched */
  search?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * The status of the card.
   *
   * @deprecated(reason: "use `statuses` instead")
   */
  status?: InputMaybe<CardStatus>;
  /** Statuses of the card. */
  statuses?: InputMaybe<Array<CardStatus>>;
  /**
   * Type of card
   *
   * @deprecated(reason: "use `types` instead")
   */
  type?: InputMaybe<CardType>;
  /** Types of card */
  types?: InputMaybe<Array<CardType>>;
};

export type CardInfo = {
  __typename: "CardInfo";
  cardHolderName: Scalars["String"]["output"];
  cvvIframeUrl: Scalars["String"]["output"];
  expiryDateIframeUrl: Scalars["String"]["output"];
  panIframeUrl: Scalars["String"]["output"];
};

export type CardInfoPayload = CardInfo | MaskedCardInfo;

export type CardInfos = {
  __typename: "CardInfos";
  /** Card Background Type */
  cardBackgroundType: CardSettingsBackgroundType;
  /** Card Design Url */
  cardDesignUrl: Scalars["String"]["output"];
  /** Card Information to display either masked or not. */
  cardInfos?: Maybe<CardInfoPayload>;
  /** Card Text Color in hexadecimal */
  cardTextColor: Scalars["String"]["output"];
};

export type CardInfosInput = {
  requestId?: InputMaybe<Scalars["String"]["input"]>;
  token: Scalars["String"]["input"];
};

/** Rejection returned if the card was not found or if the user does not have the rights to know that the account exists */
export type CardNotFoundRejection = Rejection & {
  __typename: "CardNotFoundRejection";
  id: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

/** Field we can use when ordering that can be applied when listing cards */
export type CardOrderByFieldInput = "createdAt" | "id" | "updatedAt";

/** Order that can be applied when listing cards */
export type CardOrderByInput = {
  direction?: InputMaybe<OrderByDirection>;
  field?: InputMaybe<CardOrderByFieldInput>;
};

export type CardPinInfos = {
  __typename: "CardPINInfos";
  consumerId: Scalars["String"]["output"];
  controlValue: Scalars["String"]["output"];
  costumerRef: Scalars["String"]["output"];
  mac: Scalars["String"]["output"];
  requestRef: Scalars["String"]["output"];
  time: Scalars["Int"]["output"];
  urlToCall: Scalars["String"]["output"];
};

export type CardPinInfosInput = {
  cardId: Scalars["String"]["input"];
  requestId: Scalars["String"]["input"];
};

/** when the card is in the process of being ready to use */
export type CardProcessingStatusInfo = CardStatusInfo & {
  __typename: "CardProcessingStatusInfo";
  /** Card status (always Processing for type CardProcessingStatusInfo) */
  status: CardStatus;
};

/** Card Product */
export type CardProduct = {
  __typename: "CardProduct";
  applicableToPhysicalCards: Scalars["Boolean"]["output"];
  cardDesigns: Array<CardProductDesign>;
  companySpendingLimit: SpendingLimit;
  createdAt: Scalars["DateTime"]["output"];
  defaultCardProduct: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  individualSpendingLimit: SpendingLimit;
  name?: Maybe<Scalars["String"]["output"]>;
  projectId: Scalars["ID"]["output"];
  status: CardProductStatus;
  updatedAt: Scalars["DateTime"]["output"];
};

/** Card design of a Card Product */
export type CardProductDesign = {
  __typename: "CardProductDesign";
  /** Accent color */
  accentColor: Scalars["String"]["output"];
  /** Card Background of the Card design */
  cardBackground: CardDesignBackground;
  /** Card Design URL */
  cardDesignUrl?: Maybe<Scalars["String"]["output"]>;
  /** Logo url 300 dpi */
  cardProjectLogo300dpiUrl?: Maybe<Scalars["String"]["output"]>;
  /** Logo url 300 dpi */
  cardProjectLogo600dpiUrl?: Maybe<Scalars["String"]["output"]>;
  /** Logo url svg */
  cardProjectLogoSvgUrl?: Maybe<Scalars["String"]["output"]>;
  /** Created date */
  createdAt: Scalars["DateTime"]["output"];
  /** Unique identifier of a card design */
  id: Scalars["ID"]["output"];
  /** Status of the card design */
  status: CardDesignStatus;
  /** Updated date */
  updatedAt: Scalars["DateTime"]["output"];
  /** Design version */
  version: Scalars["Int"]["output"];
  /** Zoom level */
  zoomRatioProjectLogo?: Maybe<Scalars["Int"]["output"]>;
};

/** Rejection returned if the card product is disabled. */
export type CardProductDisabledRejection = Rejection & {
  __typename: "CardProductDisabledRejection";
  message: Scalars["String"]["output"];
};

/** Rejection returned if the card product is not applicable to physical card. */
export type CardProductNotApplicableToPhysicalCardsRejection = Rejection & {
  __typename: "CardProductNotApplicableToPhysicalCardsRejection";
  message: Scalars["String"]["output"];
};

export type CardProductNotFoundRejection = Rejection & {
  __typename: "CardProductNotFoundRejection";
  message: Scalars["String"]["output"];
};

/** Card Product Status */
export type CardProductStatus =
  /** When card product is suspended */
  | "Disabled"
  /** When card product is Enabled */
  | "Enabled"
  /** When card product is waiting for review */
  | "PendingReview"
  /** When card product is suspended */
  | "Suspended";

/** Rejection returned if the card product is suspended. */
export type CardProductSuspendedRejection = Rejection & {
  __typename: "CardProductSuspendedRejection";
  message: Scalars["String"]["output"];
};

export type CardProductUsedRejection = Rejection & {
  __typename: "CardProductUsedRejection";
  message: Scalars["String"]["output"];
};

/** Card settings for a Project */
export type CardSettings = {
  __typename: "CardSettings";
  /** Accent color */
  accentColor: Scalars["String"]["output"];
  /**
   * Flag used to indicate if ApplePay is activated for the project
   * @deprecated Field no longer supported
   */
  allowsApplePay: Scalars["Boolean"]["output"];
  /** Card Background of the Card Settings */
  cardBackground: CardSettingsBackground;
  /** Card Design URL */
  cardDesignUrl?: Maybe<Scalars["String"]["output"]>;
  /** Logo url 300 dpi */
  cardProjectLogo300dpiUrl?: Maybe<Scalars["String"]["output"]>;
  /** Logo url 300 dpi */
  cardProjectLogo600dpiUrl?: Maybe<Scalars["String"]["output"]>;
  /** Logo url svg */
  cardProjectLogoSvgUrl?: Maybe<Scalars["String"]["output"]>;
  /** Created date */
  createdAt: Scalars["DateTime"]["output"];
  /** Unique identifier of a project card settings */
  id: Scalars["ID"]["output"];
  /** Status of the card settings */
  status: ProjectCardStatus;
  /** Updated date */
  updatedAt: Scalars["DateTime"]["output"];
  /** Settings version */
  version: Scalars["Int"]["output"];
  /** Zoom level */
  zoomRatioProjectLogo?: Maybe<Scalars["Int"]["output"]>;
};

export type CardSettingsBackground = {
  __typename: "CardSettingsBackground";
  /** Card settings background url */
  cardBackgroundUrl: Scalars["String"]["output"];
  /** Card settings background text color */
  cardTextColor: Scalars["String"]["output"];
  /** Created date */
  createdAt: Scalars["DateTime"]["output"];
  /** Unique identifier of a project card settings */
  id: Scalars["ID"]["output"];
  /** Card settings background name */
  name: Scalars["String"]["output"];
  /** Card settings background type */
  type: Scalars["String"]["output"];
  /** Updated date */
  updatedAt: Scalars["DateTime"]["output"];
};

/** Card Settings Background Type */
export type CardSettingsBackgroundType =
  /** when Card background is black */
  | "Black"
  /** when Card background is customized */
  | "Custom"
  /** when Card background is light */
  | "Silver";

/** Card Status */
export type CardStatus =
  /** when the card is canceled */
  | "Canceled"
  /** when the card is about to be canceled */
  | "Canceling"
  /** when the consent to add this card is pending */
  | "ConsentPending"
  /** when the card is enabled */
  | "Enabled"
  /** when the card is in the process of being ready to use */
  | "Processing";

/** Card Status Information */
export type CardStatusInfo = {
  /** Status of the card. */
  status: CardStatus;
};

/** Card Type */
export type CardType =
  /** When card is Single Use Virtual */
  | "SingleUseVirtual"
  /** When card is Virtual */
  | "Virtual"
  /** When card is Virtual and Physical */
  | "VirtualAndPhysical";

/** Rejection returned when the Card is not the expected status */
export type CardWrongStatusRejection = Rejection & {
  __typename: "CardWrongStatusRejection";
  currentStatus: CardStatus;
  expectedStatus: CardStatus;
  identifier: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

/** Cash account type (Always Current) */
export type CashAccountType =
  | "CashIncome"
  | "CashPayment"
  | "CashTrading"
  | "Charges"
  | "ClearingParticipantSettlementAccount"
  | "Commission"
  /** When the account is a current account. */
  | "Current"
  | "LimitedLiquiditySavingsAccount"
  | "Loan"
  | "MarginalLending"
  | "MoneyMarket"
  | "NonResidentExternal"
  | "OtherAccount"
  | "OverNightDeposit"
  | "Overdraft"
  | "Salary"
  | "Savings"
  | "Settlement"
  | "Tax"
  | "TransactingAccount";

/** Certificate */
export type Certificate = {
  /**
   * CertificateType
   *
   * Can be either LEAF or INTERMEDIATE
   */
  key: Scalars["String"]["input"];
  /** Base64 value of the certificate */
  value: Scalars["String"]["input"];
};

/** CheckMerchantPaymentMethod */
export type CheckMerchantPaymentMethod = MerchantPaymentMethod & {
  __typename: "CheckMerchantPaymentMethod";
  /** Unique identifier tied to every version of a given Merchant Payment Method */
  id: Scalars["ID"]["output"];
  /** Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type */
  methodId: Scalars["ID"]["output"];
  /**
   * Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type
   * DEPRECATED use the methodId field instead.
   * @deprecated Use methodId instead
   */
  productId: Scalars["ID"]["output"];
  /** Rolling Reserve applied to the Merchant Payment Method */
  rollingReserve?: Maybe<RollingReserve>;
  /** Status of the Merchant Payment Method */
  statusInfo: MerchantPaymentMethodStatusInfo;
  /** The Merchant Payment Method Type */
  type: MerchantPaymentMethodType;
  /** Date at which the Merchant Payment Method was last updated */
  updatedAt: Scalars["Date"]["output"];
  /** Version of the Merchant Payment Method */
  version: Scalars["Int"]["output"];
};

/** Define a reason with a message and a specific type for closing account action */
export type CloseAccountReason = Reason & {
  __typename: "CloseAccountReason";
  message?: Maybe<Scalars["String"]["output"]>;
  type: CloseAccountReasonType;
};

/** Specific type for closing account action */
export type CloseAccountReasonType =
  /** Compliance Reason */
  | "ComplianceReason"
  /** Inactivity */
  | "Inactivity"
  /** Partner Reason */
  | "PartnerReason";

/** Union between PartnerCloseAccountReasonType and InternalCloseAccountReason */
export type CloseAccountStatusReason = CloseAccountReason;

/** Data provided following the search for company information by siren number */
export type CompanyInfo = {
  __typename: "CompanyInfo";
  companyName: Scalars["String"]["output"];
  headquarters: Headquarters;
  legalRepresentativePersonalAddress?: Maybe<AddressInformation>;
  siren: Scalars["String"]["output"];
  taxIdentificationNumber?: Maybe<Scalars["String"]["output"]>;
  vatNumber?: Maybe<Scalars["String"]["output"]>;
};

/** Inputs to fetch company info by siren number */
export type CompanyInfoBySirenInput = {
  /** headquarter country ex FR | DE */
  headquarterCountry: Scalars["String"]["input"];
  /** registration number of the company (SIREN) */
  siren: Scalars["String"]["input"];
};

export type CompanyInfoBySirenPayload =
  | CompanyInfoBySirenSuccessPayload
  | InternalErrorRejection
  | InvalidSirenNumberRejection
  | NotSupportedCountryRejection;

export type CompanyInfoBySirenSuccessPayload = {
  __typename: "CompanyInfoBySirenSuccessPayload";
  companyInfo: CompanyInfo;
};

/** Type of company. */
export type CompanyType =
  | "Association"
  | "Company"
  | "HomeOwnerAssociation"
  | "Other"
  | "SelfEmployed";

/** Inputs to fetch company info by Company Ref and Headquarter Country */
export type CompanyUboByCompanyRefAndHeadquarterCountryInput = {
  /** registration number of the company (ex: SIREN) */
  companyRef: Scalars["String"]["input"];
  /** headquarter country ex FRA */
  headquarterCountry: Scalars["CCA3"]["input"];
};

export type CompanyUboByCompanyRefAndHeadquarterCountryPayload = {
  __typename: "CompanyUboByCompanyRefAndHeadquarterCountryPayload";
  individualUltimateBeneficialOwners: Array<IndividualUltimateBeneficialOwner>;
};

/** Complete Address Information */
export type CompleteAddressInput = {
  /** address line 1 (max 38 characters) */
  addressLine1: Scalars["String"]["input"];
  /** address line 2 (max 38 characters) */
  addressLine2?: InputMaybe<Scalars["String"]["input"]>;
  /** city (max 30 characters) */
  city: Scalars["String"]["input"];
  /** country code */
  country: Scalars["CCA3"]["input"];
  /** postal code (max 10 characters) */
  postalCode: Scalars["String"]["input"];
  /** state (max 30 characters) */
  state?: InputMaybe<Scalars["String"]["input"]>;
};

/** Complete Address Information with a contact */
export type CompleteAddressWithContactInput = {
  /** address line 1 (max 38 characters) */
  addressLine1: Scalars["String"]["input"];
  /** address line 2 (max 38 characters) */
  addressLine2?: InputMaybe<Scalars["String"]["input"]>;
  /** city (max 30 characters) */
  city: Scalars["String"]["input"];
  /** contact company name (max 38 characters) */
  companyName?: InputMaybe<Scalars["String"]["input"]>;
  /** country code */
  country: Scalars["CCA3"]["input"];
  /** contact first name */
  firstName: Scalars["String"]["input"];
  /** contact last name */
  lastName: Scalars["String"]["input"];
  /** contact phone number */
  phoneNumber: Scalars["PhoneNumber"]["input"];
  /** postal code (max 10 characters) */
  postalCode: Scalars["String"]["input"];
  /** state (max 30 characters) */
  state?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Complete Digital Card used for ApplePay or GooglePay
 *
 * Once the pending phase is over, more data will be available in the response
 */
export type CompleteDigitalCard = DigitalCard & {
  __typename: "CompleteDigitalCard";
  /**
   * Masked DPAN with the last four digits visible
   *
   * This value is present in the user wallet application
   */
  cardMaskedNumber: Scalars["String"]["output"];
  /** Created date */
  createdAt: Scalars["DateTime"]["output"];
  /**
   * Device
   * In case of a wallet application, some information about the device will be provided
   */
  device: Device;
  /** Unique identifier of a digital card */
  id: Scalars["ID"]["output"];
  /**
   * Digital Card status information
   *
   * In this type the status will be either ConsentPending or Pending
   */
  statusInfo: CompleteDigitalCardStatusInfo;
  /** The type of digitalization that created this digital card. */
  type: DigitalizationType;
  /** Updated date */
  updatedAt: Scalars["DateTime"]["output"];
  /**
   * Id of the wallet application.
   * Will not be present for Merchant
   */
  walletId?: Maybe<Scalars["String"]["output"]>;
  /** Wallet Provider (ApplePay, GooglePay ...) */
  walletProvider: WalletProvider;
};

/** Complete Digital Card Status */
export type CompleteDigitalCardStatus =
  /**
   * when the digital card is canceled
   *
   * this is a final state
   */
  | "Canceled"
  /** when the digital card is enabled */
  | "Enabled"
  /**
   * when the digital card is suspended
   *
   * the transactions will be blocked
   */
  | "Suspended";

/** Complete Digital Card Status Information */
export type CompleteDigitalCardStatusInfo = {
  /** Status of the digital card. */
  status: CompleteDigitalCardStatus;
};

export type CompletedMerchantPaymentLinkStatusInfo = MerchantPaymentLinkStatusInfo & {
  __typename: "CompletedMerchantPaymentLinkStatusInfo";
  /** The time when the customer completed the payment. */
  completedAt: Scalars["DateTime"]["output"];
  status: MerchantPaymentLinkStatus;
};

/** Relay Connection type, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type Connection = {
  /** Edge list */
  edges: Array<Edge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars["Int"]["output"];
};

/** Some sensitive operation at Swan, such as initiating a payment, require consent */
export type Consent = {
  __typename: "Consent";
  /** unique hash of the consent */
  challenge?: Maybe<Scalars["String"]["output"]>;
  /** Redirect the user to this URL to start the consent flow */
  consentUrl: Scalars["String"]["output"];
  /** created date */
  createdAt: Scalars["DateTime"]["output"];
  /** date when the consent expire */
  expiredAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** unique identifier of the consent */
  id: Scalars["ID"]["output"];
  /** purpose of the consent */
  purpose: ConsentPurpose;
  /** When the consent flow is finished the user is redirected to this URL */
  redirectUrl: Scalars["String"]["output"];
  /** `true` if the consent requires a Strong Customer Authentication */
  requireSCA: Scalars["Boolean"]["output"];
  /** date when the `consentUrl` was request the first time */
  startedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** status of the consent */
  status: ConsentStatus;
  /** updated date */
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** user who initiated the consent */
  user?: Maybe<User>;
  /** userId who initiated the consent */
  userId: Scalars["String"]["output"];
};

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type ConsentConnection = Connection & {
  __typename: "ConsentConnection";
  /** ConsentEdge list */
  edges: Array<ConsentEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars["Int"]["output"];
};

/** Implements the Relay Edge interface */
export type ConsentEdge = Edge & {
  __typename: "ConsentEdge";
  /** Opaque identifier pointing to this consent node in the pagination mechanism */
  cursor: Scalars["String"]["output"];
  /** The consent */
  node: Consent;
};

/** Purpose of a consent */
export type ConsentPurpose =
  /** when accepting the partnership conditions */
  | "AcceptPartnershipConditions"
  /** when activating a physical card */
  | "ActivatePhysicalCard"
  /** when inviting a new account membership */
  | "AddAccountMembership"
  /** when adding several account memberships */
  | "AddAccountMemberships"
  /** when adding a beneficiary */
  | "AddBeneficiary"
  /** when adding a virtual card */
  | "AddCard"
  /** when adding multiple cards */
  | "AddCards"
  /** when adding a digital card */
  | "AddDigitalCard"
  /** when adding a payment direct debit mandate */
  | "AddDirectDebitPaymentMandate"
  /** when closing an account */
  | "CloseAccount"
  /** when the consent is a multiple consent */
  | "ConsentToMultipleConsents"
  /** when enabling a mandate */
  | "EnableMandate"
  /** when initiating a credit transfer */
  | "InitPayment"
  /** when initiating a funding request */
  | "InitiateFundingRequest"
  /** when initiating an instant funding request */
  | "InitiateInstantFundingRequest"
  /** when initiating an international credit transfer */
  | "InitiateInternationalCreditTransfer"
  /** when requesting to print physical card */
  | "PrintPhysicalCard"
  /** when resuming an account membership */
  | "ResumeAccountMembership"
  /** when resuming a physical card */
  | "ResumePhysicalCard"
  /** when scheduling a standing order */
  | "ScheduleStandingOrder"
  /** when updating an account membership */
  | "UpdateAccountMembership"
  /** when updating a card */
  | "UpdateCard"
  /** when updating a server consent project settings */
  | "UpdateServerConsentProjectSettings"
  /** when viewing card confidential of a virtual card */
  | "ViewCardNumbers"
  /** when requesting to view physical card PIN */
  | "ViewPhysicalCardPin";

/** Status of a consent */
export type ConsentStatus =
  /** when the user accepted */
  | "Accepted"
  /** when the user or the project decided to cancel the consent */
  | "Canceled"
  /** when the consent is created */
  | "Created"
  /** when the user credentials were refused */
  | "CredentialRefused"
  /** when the user refused */
  | "CustomerRefused"
  /** when the consent is expired */
  | "Expired"
  /** when something went wrong */
  | "Failed"
  /** when the operation is committing */
  | "OperationCommitting"
  /** when the consentUrl has been requested */
  | "Started";

export type Customer = {
  __typename: "Customer";
  /**
   * A customer id present in a third-party system.
   * Alows to link a customer to a payment link and by extension, to a Merchant Payment.
   */
  externalCustomerId?: Maybe<Scalars["String"]["output"]>;
  iban?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** Rejection returned when the Debtor is closed */
export type DebtorAccountClosedRejection = Rejection & {
  __typename: "DebtorAccountClosedRejection";
  message: Scalars["String"]["output"];
};

/** Rejection returned when the Debtor does not belong to the same project as the creditor */
export type DebtorAccountNotAllowedRejection = Rejection & {
  __typename: "DebtorAccountNotAllowedRejection";
  message: Scalars["String"]["output"];
};

/** Device */
export type Device = {
  __typename: "Device";
  /** Secure Element ID */
  SEID?: Maybe<Scalars["String"]["output"]>;
  /**
   * Device name
   * End user defined name of the device on which the card id provided
   */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The type of device. It can be a Phone, Tablet, Watch */
  type?: Maybe<Scalars["String"]["output"]>;
};

/** Digital Card used for ApplePay or GooglePay */
export type DigitalCard = {
  /** Created date */
  createdAt: Scalars["DateTime"]["output"];
  /** Unique identifier of a digital card */
  id: Scalars["ID"]["output"];
  /** The type of digitalization that created this digital card. */
  type: DigitalizationType;
  /** Updated date */
  updatedAt: Scalars["DateTime"]["output"];
  /** Wallet Provider (ApplePay, GooglePay ...) */
  walletProvider: WalletProvider;
};

/** Digital Card Canceled Status Information */
export type DigitalCardCanceledStatusInfo = CompleteDigitalCardStatusInfo & {
  __typename: "DigitalCardCanceledStatusInfo";
  /** Cancel Date */
  canceledAt: Scalars["DateTime"]["output"];
  /** Enable Date */
  enabledAt: Scalars["DateTime"]["output"];
  /** Card status (always Canceled for type DigitalCardCanceledStatusInfo). */
  status: CompleteDigitalCardStatus;
};

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type DigitalCardConnection = Connection & {
  __typename: "DigitalCardConnection";
  /** CardEdge list */
  edges: Array<DigitalCardEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars["Int"]["output"];
};

/** Digital Card ConsentPending Status Information */
export type DigitalCardConsentPendingStatusInfo = PendingDigitalCardStatusInfo & {
  __typename: "DigitalCardConsentPendingStatusInfo";
  /** A reference to the consent to validate */
  consent: Consent;
  /** Digital Card status (always ConsentPending for type DigitalCardConsentPendingStatusInfo). */
  status: PendingDigitalCardStatus;
};

/** Digital Card Declined Status Information */
export type DigitalCardDeclinedStatusInfo = PendingDigitalCardStatusInfo & {
  __typename: "DigitalCardDeclinedStatusInfo";
  /** Digital Card status (always Declined for type DigitalCardDeclinedStatusInfo). */
  status: PendingDigitalCardStatus;
};

/** Implements the Relay Edge interface */
export type DigitalCardEdge = Edge & {
  __typename: "DigitalCardEdge";
  /** Opaque identifier pointing to this node in the pagination mechanism */
  cursor: Scalars["String"]["output"];
  /** The Card entry */
  node: DigitalCard;
};

/** Digital Card Enabled Status Information */
export type DigitalCardEnabledStatusInfo = CompleteDigitalCardStatusInfo & {
  __typename: "DigitalCardEnabledStatusInfo";
  /** Enable Date */
  enabledAt: Scalars["DateTime"]["output"];
  /** Digital Card status (always Enabled for type DigitalCardEnabledStatusInfo). */
  status: CompleteDigitalCardStatus;
};

/** Filters that can be applied when listing digitalCards */
export type DigitalCardFiltersInput = {
  /**
   * The Secure Element ID
   * Mostly present on APple Devices
   */
  SEID?: InputMaybe<Scalars["String"]["input"]>;
  /** The digital card masker number */
  cardMaskedNumber?: InputMaybe<Scalars["String"]["input"]>;
  /** The id of the digitalCard */
  id?: InputMaybe<Scalars["String"]["input"]>;
  /** The status of the digital card. It can be a CompleteDigitalCardStatus or a PendingDigitalCardStatus */
  status?: InputMaybe<Scalars["String"]["input"]>;
  /** The wallet application ID in the user phone */
  walletId?: InputMaybe<Scalars["String"]["input"]>;
  /** The ID of the wallet provider in the scheme system */
  walletProviderId?: InputMaybe<Scalars["String"]["input"]>;
  /** Either ApplePay, GooglePay or Merchant */
  walletProviderName?: InputMaybe<Scalars["String"]["input"]>;
};

/** Rejection returned when the Digital Card does not exist */
export type DigitalCardNotFoundRejection = Rejection & {
  __typename: "DigitalCardNotFoundRejection";
  identifier: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

/** Field we can use when ordering that can be applied when listing digital cards */
export type DigitalCardOrderByFieldInput = "createdAt" | "id" | "updatedAt";

/** Order that can be applied when listing digital cards */
export type DigitalCardOrderByInput = {
  direction?: InputMaybe<OrderByDirection>;
  field?: InputMaybe<DigitalCardOrderByFieldInput>;
};

/** Digital Card Pending Status Information */
export type DigitalCardPendingStatusInfo = PendingDigitalCardStatusInfo & {
  __typename: "DigitalCardPendingStatusInfo";
  /** Digital Card status (always Pending for type DigitalCardPendingStatusInfo). */
  status: PendingDigitalCardStatus;
};

/** Digital Card Suspended Status Information */
export type DigitalCardSuspendedStatusInfo = CompleteDigitalCardStatusInfo & {
  __typename: "DigitalCardSuspendedStatusInfo";
  /** Enable Date */
  enabledAt: Scalars["DateTime"]["output"];
  /** Digital Card status (always Suspended for type DigitalCardSuspendedStatusInfo). */
  status: CompleteDigitalCardStatus;
  /** Suspend Date */
  suspendedAt: Scalars["DateTime"]["output"];
};

/** Digitalization Type */
export type DigitalizationType =
  /** This digital card was created based on a PAN stored into a merchant application (ex: iTunes) */
  | "CardOnFile"
  /** This digital card was created by an in app provisioning */
  | "InApp"
  /**
   * This digital card was created by direct input of the PAN into a wallet application
   *
   * This direct input can also be done using the device camera
   */
  | "Manual"
  /** We could not get the source of the digitalization */
  | "Unknown";

/** EnabledMerchantPaymentMethodStatusInfo */
export type DisabledMerchantPaymentMethodStatusInfo = MerchantPaymentMethodStatusInfo & {
  __typename: "DisabledMerchantPaymentMethodStatusInfo";
  /** Merchant Payment Method disabled date */
  disabledAt: Scalars["Date"]["output"];
  status: MerchantPaymentMethodStatus;
};

/**
 * Edge type containing the node and cursor. The node is not defined in the interface because generic is not supported by GraphQL
 * but all implementation contains its own node property according to the paginated type.
 */
export type Edge = {
  /** Opaque identifier pointing to this node in the pagination mechanism */
  cursor: Scalars["String"]["output"];
};

/** Employment status. */
export type EmploymentStatus =
  | "Craftsman"
  | "Employee"
  | "Entrepreneur"
  | "Farmer"
  | "Manager"
  | "Practitioner"
  | "Retiree"
  | "ShopOwner"
  | "Student"
  | "Unemployed";

/** Rejection returned if the card product don't have a card design enabled */
export type EnabledCardDesignNotFoundRejection = Rejection & {
  __typename: "EnabledCardDesignNotFoundRejection";
  message: Scalars["String"]["output"];
};

/** EnabledMerchantPaymentMethodStatusInfo */
export type EnabledMerchantPaymentMethodStatusInfo = MerchantPaymentMethodStatusInfo & {
  __typename: "EnabledMerchantPaymentMethodStatusInfo";
  /** Merchant Payment Method enabled date */
  enabledAt: Scalars["Date"]["output"];
  status: MerchantPaymentMethodStatus;
};

/** EnabledMerchantProfileStatusInfo */
export type EnabledMerchantProfileStatusInfo = MerchantProfileStatusInfo & {
  __typename: "EnabledMerchantProfileStatusInfo";
  enabledAt: Scalars["Date"]["output"];
  status: MerchantProfileStatus;
};

export type EnvType = "Live" | "Sandbox";

export type ExpiredMerchantPaymentLinkStatusInfo = MerchantPaymentLinkStatusInfo & {
  __typename: "ExpiredMerchantPaymentLinkStatusInfo";
  /**
   * The date when the payment link expired.
   * The payment link expires 24 hours after it was created.
   */
  expiredAt: Scalars["DateTime"]["output"];
  status: MerchantPaymentLinkStatus;
};

export type ExternalAccountAlreadyExistsRejection = Rejection & {
  __typename: "ExternalAccountAlreadyExistsRejection";
  accountHolderId: Scalars["String"]["output"];
  iban: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

export type FieldValidationError = "Missing";

export type ForbiddenRejection = Rejection & {
  __typename: "ForbiddenRejection";
  message: Scalars["String"]["output"];
};

/** Funding Limit Amount */
export type FundingLimitAmount = {
  __typename: "FundingLimitAmount";
  /** The amount settings */
  amount: Amount;
};

/** Funding Limit Amount Input */
export type FundingLimitAmountInput = {
  /** The amount settings */
  amount: AmountInput;
};

/** Funding Limit Settings Change Request */
export type FundingLimitSettingsChangeRequest = {
  __typename: "FundingLimitSettingsChangeRequest";
  /** Approved amount settings for the the instant funding limit and the funding limit */
  approved?: Maybe<ApprovedFundingLimit>;
  /** Date of creation */
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  /** Requested amount settings for the funding limit */
  fundingLimit: FundingLimitAmount;
  /** Unique identifier of a funding limit settings change request */
  id: Scalars["ID"]["output"];
  /** Requested amount settings for the instant funding limit */
  instantFundingLimit: FundingLimitAmount;
  /** Status of the request */
  statusInfo: FundingLimitSettingsChangeRequestStatusInfo;
  /** Date of last update */
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

/** StatusInfo when funding limit settings change request has been approved */
export type FundingLimitSettingsChangeRequestApprovedStatusInfo =
  FundingLimitSettingsChangeRequestStatusInfo & {
    __typename: "FundingLimitSettingsChangeRequestApprovedStatusInfo";
    reason: Scalars["String"]["output"];
    status: FundingLimitSettingsChangeRequestStatus;
  };

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type FundingLimitSettingsChangeRequestConnection = Connection & {
  __typename: "FundingLimitSettingsChangeRequestConnection";
  /** FundingLimitSettingsChangeRequestEdge list */
  edges: Array<FundingLimitSettingsChangeRequestEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars["Int"]["output"];
};

/** Implements the Relay Edge interface */
export type FundingLimitSettingsChangeRequestEdge = Edge & {
  __typename: "FundingLimitSettingsChangeRequestEdge";
  /** Opaque identifier pointing to this onboarding node in the pagination mechanism */
  cursor: Scalars["String"]["output"];
  /** The FundingLimitSettingsChangeRequest */
  node: FundingLimitSettingsChangeRequest;
};

/** Filters that can be applied when listing funding limit settings change requests */
export type FundingLimitSettingsChangeRequestFiltersInput = {
  /** The ids of the funding limit settings change requests */
  id?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Status we want to filter on */
  status?: InputMaybe<Array<FundingLimitSettingsChangeRequestStatus>>;
};

/** Field we can use when ordering that can be applied when listing funding limit settings change requests */
export type FundingLimitSettingsChangeRequestOrderByFieldInput = "createdAt" | "id" | "updatedAt";

/** Order that can be applied when listing funding limit settings change requests */
export type FundingLimitSettingsChangeRequestOrderByInput = {
  direction?: InputMaybe<OrderByDirection>;
  field?: InputMaybe<FundingLimitSettingsChangeRequestOrderByFieldInput>;
};

/** StatusInfo when funding limit settings change request is pending */
export type FundingLimitSettingsChangeRequestPendingStatusInfo =
  FundingLimitSettingsChangeRequestStatusInfo & {
    __typename: "FundingLimitSettingsChangeRequestPendingStatusInfo";
    status: FundingLimitSettingsChangeRequestStatus;
  };

/** StatusInfo when funding limit settings change request has been rejected */
export type FundingLimitSettingsChangeRequestRefusedStatusInfo =
  FundingLimitSettingsChangeRequestStatusInfo & {
    __typename: "FundingLimitSettingsChangeRequestRefusedStatusInfo";
    reason: Scalars["String"]["output"];
    status: FundingLimitSettingsChangeRequestStatus;
  };

/** Funding Limit Settings Change Request Status */
export type FundingLimitSettingsChangeRequestStatus =
  /** When the request is approved */
  | "Approved"
  /** When the request is in pending */
  | "Pending"
  /** When the request is refused */
  | "Refused"
  /** When the request is in waiting for information */
  | "WaitingForInformation";

/** Object containing details about funding limit settings change request status */
export type FundingLimitSettingsChangeRequestStatusInfo = {
  /** Current limit settings change request status. */
  status: FundingLimitSettingsChangeRequestStatus;
};

/** StatusInfo when funding limit settings change request is waiting for more information */
export type FundingLimitSettingsChangeRequestWaitingForInformationStatusInfo =
  FundingLimitSettingsChangeRequestStatusInfo & {
    __typename: "FundingLimitSettingsChangeRequestWaitingForInformationStatusInfo";
    status: FundingLimitSettingsChangeRequestStatus;
  };

export type GenerateSupportingDocumentUploadUrlInput = {
  /** Name of the document which will be sent */
  filename: Scalars["String"]["input"];
  /** Unique identifier of a supporting document collection */
  supportingDocumentCollectionId: Scalars["ID"]["input"];
  /** Purpose of document */
  supportingDocumentPurpose?: InputMaybe<SupportingDocumentPurposeEnum>;
  /** Type of document */
  supportingDocumentType?: InputMaybe<SupportingDocumentType>;
};

export type GenerateSupportingDocumentUploadUrlPayload =
  | ForbiddenRejection
  | GenerateSupportingDocumentUploadUrlSuccessPayload
  | InternalErrorRejection
  | SupportingDocumentCollectionNotFoundRejection
  | SupportingDocumentUploadNotAllowedRejection
  | ValidationRejection;

export type GenerateSupportingDocumentUploadUrlSuccessPayload = {
  __typename: "GenerateSupportingDocumentUploadUrlSuccessPayload";
  /** Id of the supporting document created for this uploadUrl */
  supportingDocumentId: Scalars["String"]["output"];
  /** Info to upload the document : url and fields to add along file in form (POST) */
  upload: SupportingDocumentUploadInfo;
};

export type Headquarters = {
  __typename: "Headquarters";
  address: Scalars["String"]["output"];
  town: Scalars["String"]["output"];
  zipCode: Scalars["String"]["output"];
};

/** Rejection returned when the IBAN is not reachable */
export type IbanNotReachableRejection = Rejection & {
  __typename: "IBANNotReachableRejection";
  message: Scalars["String"]["output"];
};

/** Rejection returned when the IBAN is not valid */
export type IbanNotValidRejection = Rejection & {
  __typename: "IBANNotValidRejection";
  message: Scalars["String"]["output"];
};

/** Virtual IBAN Status */
export type IbanStatus =
  /** When the virtual IBAN refuse definitely to receive Sepa payments */
  | "Canceled"
  /** When the virtual IBAN accept to receive Sepa payments */
  | "Enabled"
  /** When the virtual IBAN refuse temporarily to receive Sepa payments */
  | "Suspended";

export type IbanValidationRejection = Rejection & {
  __typename: "IbanValidationRejection";
  message: Scalars["String"]["output"];
};

/** Possible value for the field IdentificationLevel */
export type IdentificationLevel =
  /** Human identity verification */
  | "Expert"
  /** Identity verification with PVID */
  | "PVID"
  /** Identity verification with Qualified Electronic Signature */
  | "QES";

/** Identification levels */
export type IdentificationLevels = {
  __typename: "IdentificationLevels";
  PVID: Scalars["Boolean"]["output"];
  QES: Scalars["Boolean"]["output"];
  expert: Scalars["Boolean"]["output"];
};

/** Identification status */
export type IdentificationStatus =
  /**
   * The user has gone through the identity verification process, but we were unable to determine if their
   * identity is valid because the quality of the provided documents was insufficient.
   * The user will have to start a new identification, which will update this status to `Processing`.
   */
  | "InsufficientDocumentQuality"
  /**
   * The user has gone through the identity verification process, but we have determined that their identity is invalid.
   * The user will have to start a new identification, which will update this status to `Processing`.
   */
  | "InvalidIdentity"
  /** The user has gone through the identity verification process, but we are still processing their information. */
  | "Processing"
  /**
   * The user has gone through the identity verification process, and we have determined that their identity is valid.
   * The user now needs to go through the QES process to complete their identification.
   */
  | "ReadyToSign"
  /** The user hasn't started the identity verification process yet. */
  | "Uninitiated"
  /** The user has gone through the identity verification process, and we have determined that their identity is valid. */
  | "ValidIdentity";

/** Rejection returned if identity and the account memberships are already bind */
export type IdentityAlreadyBindToAccountMembershipRejection = Rejection & {
  __typename: "IdentityAlreadyBindToAccountMembershipRejection";
  accountId: Scalars["String"]["output"];
  identityId: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

/** Data used for in app provisioning */
export type InAppProvisioningData = {
  __typename: "InAppProvisioningData";
  /** Cryptographic OTP used to pre-validate digitalization */
  activationData: Scalars["String"]["output"];
  /** Encrypted card data */
  encryptedData: Scalars["String"]["output"];
  /** Base64 public key used with the wallet provider public key to encrypt the card data */
  ephemeralPublicKey: Scalars["String"]["output"];
  /** IV used to encrypt the card Data (Useful for Google Pay) */
  iv?: Maybe<Scalars["String"]["output"]>;
  /** hash algorithm used during encryption of the card data (Useful for Google Pay) */
  oaepHashingAlgorithm?: Maybe<Scalars["String"]["output"]>;
  /** public key fingerprint of the key used to encrypt card data (Useful for Google Pay) */
  publicKeyFingerprint?: Maybe<Scalars["String"]["output"]>;
};

/**
 * Individual Ultimate Beneficial Owner
 * You need to describe the natural person (s) who hold, directly or indirectly, more than 25% of the capital or the rights of vote of the reporting company.
 * Please describe the company (s) that owns the company that wishes to open an account, when an individual holds in fine more than 25%
 */
export type IndividualUltimateBeneficialOwner = {
  __typename: "IndividualUltimateBeneficialOwner";
  /** individual birth city */
  birthCity?: Maybe<Scalars["String"]["output"]>;
  /** individual birth city postal code */
  birthCityPostalCode?: Maybe<Scalars["String"]["output"]>;
  /** individual birth country code */
  birthCountryCode?: Maybe<Scalars["CCA3"]["output"]>;
  /** individual birth date */
  birthDate?: Maybe<Scalars["DateTime"]["output"]>;
  /** individual first name */
  firstName?: Maybe<Scalars["String"]["output"]>;
  /** Information relating to the type of the UBO */
  info: IndividualUltimateBeneficialOwnerInfo;
  /** individual last name */
  lastName?: Maybe<Scalars["String"]["output"]>;
  /** Individual beneficial owner residency Address */
  residencyAddress?: Maybe<AddressInformation>;
  /** Individual beneficial owner Tax or Identification Number */
  taxIdentificationNumber?: Maybe<Scalars["String"]["output"]>;
  /** Individual beneficial owner title (Mr/Ms) */
  title?: Maybe<TitleEnum>;
};

/** Define the type of the UBO */
export type IndividualUltimateBeneficialOwnerInfo = {
  /** Individual type */
  type: IndividualUltimateBeneficialOwnerTypeEnum;
};

export type IndividualUltimateBeneficialOwnerInput = {
  /** Individual birth city. Length must be from 0 to 100 characters */
  birthCity?: InputMaybe<Scalars["String"]["input"]>;
  /** Individual birth city postal code. Length must be from 0 to 50 characters */
  birthCityPostalCode?: InputMaybe<Scalars["String"]["input"]>;
  /** Individual birth country code */
  birthCountryCode?: InputMaybe<Scalars["CCA3"]["input"]>;
  /** Individual birth date. Must be a valid date */
  birthDate?: InputMaybe<Scalars["String"]["input"]>;
  /** Define UBO is an Direct Owner */
  direct?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Individual beneficial owner first name. Length must be from 0 to 100 characters */
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  /** Define UBO is an Indirect Owner */
  indirect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Individual beneficial owner  last name. Length must be from 0 to 100 characters */
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  /** Individual beneficial owner residency Address */
  residencyAddress?: InputMaybe<AddressInformationInput>;
  /** Individual beneficial owner Tax or Identification Number */
  taxIdentificationNumber?: InputMaybe<Scalars["String"]["input"]>;
  /** Individual ultimate beneficial owner title (Mr/Ms) */
  title?: InputMaybe<TitleEnum>;
  /** Total of capital (in percentage, ex: 50 = 50%). Must be between 1 and 100. */
  totalCapitalPercentage?: InputMaybe<Scalars["Float"]["input"]>;
  /** Define UBO is a Legal Representative */
  type: IndividualUltimateBeneficialOwnerTypeEnum;
};

/** Individual Ultimate beneficial owner nature */
export type IndividualUltimateBeneficialOwnerTypeEnum =
  /** The Beneficial Owner have shares */
  | "HasCapital"
  /** The Beneficial Owner is the representant legal */
  | "LegalRepresentative"
  /** Other */
  | "Other";

/** Individual Ultimate Beneficial Owner Type Has Capital */
export type IndividualUltimateBeneficialOwnerTypeHasCapital =
  IndividualUltimateBeneficialOwnerInfo & {
    __typename: "IndividualUltimateBeneficialOwnerTypeHasCapital";
    /** Define UBO is an Direct Owner */
    direct?: Maybe<Scalars["Boolean"]["output"]>;
    /** Define UBO is an Indirect Owner */
    indirect?: Maybe<Scalars["Boolean"]["output"]>;
    /** Total of capital (in percentage, ex: 50 = 50%) */
    totalCapitalPercentage?: Maybe<Scalars["Float"]["output"]>;
    /** Individual type */
    type: IndividualUltimateBeneficialOwnerTypeEnum;
  };

/** Individual Ultimate Beneficial Owner Type Legal Representative */
export type IndividualUltimateBeneficialOwnerTypeLegalRepresentative =
  IndividualUltimateBeneficialOwnerInfo & {
    __typename: "IndividualUltimateBeneficialOwnerTypeLegalRepresentative";
    /** Individual type */
    type: IndividualUltimateBeneficialOwnerTypeEnum;
  };

/** Individual Ultimate Beneficial Owner Type Other */
export type IndividualUltimateBeneficialOwnerTypeOther = IndividualUltimateBeneficialOwnerInfo & {
  __typename: "IndividualUltimateBeneficialOwnerTypeOther";
  /** Individual type */
  type: IndividualUltimateBeneficialOwnerTypeEnum;
};

/** InternalDirectDebitB2BMerchantPaymentMethod */
export type InternalDirectDebitB2BMerchantPaymentMethod = MerchantPaymentMethod & {
  __typename: "InternalDirectDebitB2BMerchantPaymentMethod";
  /** Unique identifier tied to every version of a given Merchant Payment Method */
  id: Scalars["ID"]["output"];
  /** Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type */
  methodId: Scalars["ID"]["output"];
  /**
   * Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type
   * DEPRECATED use the methodId field instead.
   * @deprecated Use methodId instead
   */
  productId: Scalars["ID"]["output"];
  /** Rolling Reserve applied to the Merchant Payment Method */
  rollingReserve?: Maybe<RollingReserve>;
  /** Status of the Merchant Payment Method */
  statusInfo: MerchantPaymentMethodStatusInfo;
  /** The Merchant Payment Method Type */
  type: MerchantPaymentMethodType;
  /** Date at which the Merchant Payment Method was last updated */
  updatedAt: Scalars["Date"]["output"];
  /** Version of the Merchant Payment Method */
  version: Scalars["Int"]["output"];
};

/** InternalDirectDebitStandardMerchantPaymentMethod */
export type InternalDirectDebitStandardMerchantPaymentMethod = MerchantPaymentMethod & {
  __typename: "InternalDirectDebitStandardMerchantPaymentMethod";
  /** Unique identifier tied to every version of a given Merchant Payment Method */
  id: Scalars["ID"]["output"];
  /** Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type */
  methodId: Scalars["ID"]["output"];
  /**
   * Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type
   * DEPRECATED use the methodId field instead.
   * @deprecated Use methodId instead
   */
  productId: Scalars["ID"]["output"];
  /** Rolling Reserve applied to the Merchant Payment Method */
  rollingReserve?: Maybe<RollingReserve>;
  /** Status of the Merchant Payment Method */
  statusInfo: MerchantPaymentMethodStatusInfo;
  /** The Merchant Payment Method Type */
  type: MerchantPaymentMethodType;
  /** Date at which the Merchant Payment Method was last updated */
  updatedAt: Scalars["Date"]["output"];
  /** Version of the Merchant Payment Method */
  version: Scalars["Int"]["output"];
};

/** Rejection returned on unexpected server error */
export type InternalErrorRejection = Rejection & {
  __typename: "InternalErrorRejection";
  message: Scalars["String"]["output"];
};

/** Rejection returned on invalid argument error */
export type InvalidArgumentRejection = Rejection & {
  __typename: "InvalidArgumentRejection";
  code: InvalidArgumentRejectionCode;
  fields: Array<InvalidArgumentRejectionField>;
  message: Scalars["String"]["output"];
};

export type InvalidArgumentRejectionCode = "INVALID_INPUT";

export type InvalidArgumentRejectionField = {
  __typename: "InvalidArgumentRejectionField";
  errors: Array<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
};

/** Rejection returned if phone number is not well formatted */
export type InvalidPhoneNumberRejection = Rejection & {
  __typename: "InvalidPhoneNumberRejection";
  message: Scalars["String"]["output"];
};

/** Rejection returned if siren number is not well formatted */
export type InvalidSirenNumberRejection = Rejection & {
  __typename: "InvalidSirenNumberRejection";
  message: Scalars["String"]["output"];
};

export type LegalRepresentativeAccountMembershipCannotBeDisabledRejection = Rejection & {
  __typename: "LegalRepresentativeAccountMembershipCannotBeDisabledRejection";
  accountMembershipId: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

export type LegalRepresentativeAccountMembershipCannotBeSuspendedRejection = Rejection & {
  __typename: "LegalRepresentativeAccountMembershipCannotBeSuspendedRejection";
  id: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

export type MaskedCardInfo = {
  __typename: "MaskedCardInfo";
  cardHolderName: Scalars["String"]["output"];
  maskedCvv: Scalars["String"]["output"];
  maskedExpiryDate: Scalars["String"]["output"];
  maskedPan: Scalars["String"]["output"];
};

/** Filters that can be applied when listing accounts (Only applied in user context) */
export type MembershipsFilterInput = {
  /** Can the user initiate payments on this account */
  canInitiatePayments?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Can the user manage account membership */
  canManageAccountMembership?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Can the user manage beneficiaries */
  canManageBeneficiaries?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** `true` if this account membership can manage cards for himself or to the memberships he manages */
  canManageCards?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Can the user view account */
  canViewAccount?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Filtered by email */
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** Filtered by first name */
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  /** Filtered by last name */
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  /** Searches email, first name, last name, and id */
  search?: InputMaybe<Scalars["String"]["input"]>;
  /** Account memberships status/statuses we're looking for */
  status?: InputMaybe<Array<AccountMembershipStatus>>;
};

export type MerchantPaymentLink = {
  __typename: "MerchantPaymentLink";
  /** Amount to be paid to sucessfully complete the payment. */
  amount: Amount;
  /** billing address informations */
  billingAddress: Address;
  /** URL to redirect the user to if they cancel their payment */
  cancelRedirectUrl: Scalars["String"]["output"];
  /**
   *  We will use the information specified here to prefill the payment link fields
   * depending on the payment method the end user chooses.
   * Keep in mind that your end customer will be able to edit these fields.
   */
  customer?: Maybe<Customer>;
  /**
   * Any string that you want to be attached to this payment link.
   * Usually something to help you reference the link in an external system.
   */
  externalReference?: Maybe<Scalars["String"]["output"]>;
  /** Merchant payment link's unique ID. */
  id: Scalars["String"]["output"];
  /** Label of the concerned payment collection, which will be displayed on Swan bank statement	and on the Swan merchant payment page. */
  label?: Maybe<Scalars["String"]["output"]>;
  /**
   * The language used for the payment page.
   * Default is the browser's language, or English if not available.
   */
  language?: Maybe<Scalars["String"]["output"]>;
  /** The Merchant Profile to link this Payment Link to */
  merchantProfile: MerchantProfile;
  /**
   * List of payment methods IDs enabled for this payment link.
   * If the array is empty Swan will allow all the payment methods that are enabled for the merchant profile (except for Check and Internal Direct Debit)
   */
  paymentMethods: Array<MerchantPaymentMethod>;
  /** ID of the related project */
  projectId: Scalars["ID"]["output"];
  /** Merchant Website URL to redirect the user to when the payment is completed. */
  redirectUrl: Scalars["String"]["output"];
  /**
   * Optional field intended to provide a way for you to include a reference number or code.
   * The customer will most likely see this value on their bank statement, though we can't know as every banking platform is different.
   */
  reference?: Maybe<Scalars["String"]["output"]>;
  /**
   *   A date that reflects the time at which the user asked the transaction to be executed.
   * For card transactions, request execution must occur within 7 days after authorization or the authorization may expire.
   * For SEPA Direct Debit transactions, request execution must occur up to 1 year in the future.
   *
   * Default value means that the execution will be as soon as possible
   */
  requestedExecutionAt?: Maybe<Scalars["DateTime"]["output"]>;
  /**
   * Controls if the payment mandate created from this payment link is for one-time use or can be reused
   * This is applicable for card and SEPA Direct Debit payment methods only.
   */
  sequence: PaymentLinkSequenceType;
  /** The merchant payment link status. */
  statusInfo: MerchantPaymentLinkStatusInfo;
  /** The URL at which the customer can complete the payment. */
  url: Scalars["String"]["output"];
};

export type MerchantPaymentLinkStatus =
  /** Customers can still use the merchant payment link to pay. */
  | "Active"
  /** The customer cancel the payment. */
  | "Canceled"
  /** The customer completed the payment. */
  | "Completed"
  /** The merchant payment link is expired. */
  | "Expired";

export type MerchantPaymentLinkStatusInfo = {
  status: MerchantPaymentLinkStatus;
};

/** Base object for the different Payment Methods available */
export type MerchantPaymentMethod = {
  /** Unique identifier tied to every version of a given Merchant Payment Method */
  id: Scalars["ID"]["output"];
  /** Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type */
  methodId: Scalars["ID"]["output"];
  /** Rolling Reserve applied to the Merchant Payment Method */
  rollingReserve?: Maybe<RollingReserve>;
  /** Status of the Merchant Payment Method */
  statusInfo: MerchantPaymentMethodStatusInfo;
  /** The Merchant Payment Method Type */
  type: MerchantPaymentMethodType;
  /** Date at which the Merchant Payment Method was last updated */
  updatedAt: Scalars["Date"]["output"];
  /** Version of the Merchant Payment Method */
  version: Scalars["Int"]["output"];
};

/** Rejection returned when the Merchant Payment Method is not active */
export type MerchantPaymentMethodNotActiveRejection = Rejection & {
  __typename: "MerchantPaymentMethodNotActiveRejection";
  message: Scalars["String"]["output"];
  paymentMethodIds?: Maybe<Array<Scalars["String"]["output"]>>;
};

/** The different statuses a MerchantPaymentMethod can have */
export type MerchantPaymentMethodStatus =
  | "Canceled"
  | "Disabled"
  | "Enabled"
  | "PendingReview"
  | "Rejected"
  | "Suspended";

/** The payment method status information */
export type MerchantPaymentMethodStatusInfo = {
  /** Merchant Payment Method Status */
  status: MerchantPaymentMethodStatus;
};

/** The different statuses a MerchantPaymentMethod can have */
export type MerchantPaymentMethodType =
  | "Check"
  | "InternalDirectDebitB2b"
  | "InternalDirectDebitStandard"
  | "SepaDirectDebitB2b"
  | "SepaDirectDebitCore";

/** Merchant Profile */
export type MerchantProfile = {
  __typename: "MerchantProfile";
  /** The Account ID this Merchant Profile is linked to */
  accountId: Scalars["ID"]["output"];
  /** created date */
  createdAt: Scalars["DateTime"]["output"];
  /** expected average basket value. */
  expectedAverageBasket: Amount;
  /** Expected annual activity volumes for all payment method */
  expectedMonthlyPaymentVolume: Amount;
  /** The Merchant Profile ID */
  id: Scalars["ID"]["output"];
  /** Url of the merchant's logo */
  merchantLogoUrl?: Maybe<Scalars["String"]["output"]>;
  /** Business name of the merchant, i.e. name that will be displayed on debtors' bank statements */
  merchantName: Scalars["String"]["output"];
  /** Payment Methods associated */
  merchantPaymentMethods?: Maybe<Array<MerchantPaymentMethod>>;
  /** Url of the merchant's website */
  merchantWebsite?: Maybe<Scalars["String"]["output"]>;
  /** Type of product sold. List of value: Goods, Services, VirtualGoods, GiftsAndDonations. Gifts and donations can be club subscription or collection of donations (for associations), tips collection, contributions for local authorities */
  productType: ProductType;
  /** Updates Requested associated */
  requestedMerchantProfileUpdates?: Maybe<Array<RequestMerchantProfileUpdate>>;
  /** The status of the merchant profile */
  statusInfo: MerchantProfileStatusInfo;
  /** updated date */
  updatedAt: Scalars["DateTime"]["output"];
};

/** Merchant Profile Statuses */
export type MerchantProfileStatus =
  /** Canceled */
  | "Canceled"
  /** Enabled */
  | "Enabled"
  /** A Merchant Profile is created in the PendingReview status */
  | "PendingReview"
  /** Rejected */
  | "Rejected"
  /** Suspended */
  | "Suspended";

/** Merchant Profile Status Information */
export type MerchantProfileStatusInfo = {
  status: MerchantProfileStatus;
};

/** Rejection returned when the Merchant Profile is not in the expected status */
export type MerchantProfileWrongStatusRejection = Rejection & {
  __typename: "MerchantProfileWrongStatusRejection";
  currentStatus: MerchantProfileStatus;
  expectedStatus: MerchantProfileStatus;
  message: Scalars["String"]["output"];
};

/** Rejection returned when mandatory fields are missing from the call. */
export type MissingMandatoryFieldRejection = Rejection & {
  __typename: "MissingMandatoryFieldRejection";
  message: Scalars["String"]["output"];
};

/** Monthly income. */
export type MonthlyIncome =
  /** between 500 and 1500 */
  | "Between500And1500"
  /** between 1500 and 3000 */
  | "Between1500And3000"
  /** between 3000 and 4500 */
  | "Between3000And4500"
  /** less than 500 */
  | "LessThan500"
  /** more than 4500 */
  | "MoreThan4500";

/** Monthly payment volume. */
export type MonthlyPaymentVolume =
  | "Between10000And50000"
  | "Between50000And100000"
  | "LessThan10000"
  | "MoreThan100000";

export type Mutation = {
  __typename: "Mutation";
  /**
   * Generate and return a presigned URL to upload a unique file for the supporting document collection
   *
   * *This mutation is restricted to a Project access token ([Learn More](https://docs.swan.io/api/authentication))*
   */
  generateSupportingDocumentUploadUrl: GenerateSupportingDocumentUploadUrlPayload;
  unauthenticatedOnboardPublicCompanyAccountHolder: UnauthenticatedOnboardPublicCompanyAccountHolderPayload;
  unauthenticatedOnboardPublicIndividualAccountHolder: UnauthenticatedOnboardPublicIndividualAccountHolderPayload;
  unauthenticatedUpdateCompanyOnboarding: UnauthenticatedUpdateCompanyOnboardingPayload;
  unauthenticatedUpdateIndividualOnboarding: UnauthenticatedUpdateIndividualOnboardingPayload;
};

export type MutationGenerateSupportingDocumentUploadUrlArgs = {
  input: GenerateSupportingDocumentUploadUrlInput;
};

export type MutationUnauthenticatedOnboardPublicCompanyAccountHolderArgs = {
  input?: InputMaybe<UnauthenticatedOnboardPublicCompanyAccountHolderInput>;
};

export type MutationUnauthenticatedOnboardPublicIndividualAccountHolderArgs = {
  input?: InputMaybe<UnauthenticatedOnboardPublicIndividualAccountHolderInput>;
};

export type MutationUnauthenticatedUpdateCompanyOnboardingArgs = {
  input?: InputMaybe<UnauthenticatedUpdateCompanyOnboardingInput>;
};

export type MutationUnauthenticatedUpdateIndividualOnboardingArgs = {
  input: UnauthenticatedUpdateIndividualOnboardingInput;
};

/** Rejection returned if the entity was not found or if the user does not have the rights to know that the account exists */
export type NotFoundRejection = Rejection & {
  __typename: "NotFoundRejection";
  id: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

/** Rejection returned when consent status couldn't change */
export type NotReachableConsentStatusRejection = Rejection & {
  __typename: "NotReachableConsentStatusRejection";
  currentStatus?: Maybe<ConsentStatus>;
  message: Scalars["String"]["output"];
  unreachableStatus?: Maybe<ConsentStatus>;
};

/** Rejection returned if the queried service doesn't support the country code */
export type NotSupportedCountryRejection = Rejection & {
  __typename: "NotSupportedCountryRejection";
  message: Scalars["String"]["output"];
};

/** Extra parameters provided by partner */
export type OAuthRedirectParameters = {
  __typename: "OAuthRedirectParameters";
  /** URL used to redirect the user at the end of the onboarding process. If `null` the user is redirected to the white label web banking. */
  redirectUrl?: Maybe<Scalars["String"]["output"]>;
  /** Custom state provided by partner to prevent XSRF attack, will be filled by onBoardingId in case of nullity. */
  state?: Maybe<Scalars["String"]["output"]>;
};

export type OAuthRedirectParametersInput = {
  /** URL used to redirect the user at the end of the onboarding process. If `null` the user is redirected to the white label web banking. Length must be from 0 to 255 characters */
  redirectUrl?: InputMaybe<Scalars["String"]["input"]>;
  /** Custom state provided by partner to prevent XSRF attack, will be filled by onBoardingId in case of nullity. Length must be from 0 to 255 characters */
  state?: InputMaybe<Scalars["String"]["input"]>;
};

/** Information provided during the onboarding process of an individual or a company */
export type Onboarding = {
  __typename: "Onboarding";
  /** Account opened after the onboarding finalization */
  account?: Maybe<Account>;
  /** Account Country */
  accountCountry: AccountCountry;
  /** Account holder created at the end of the onboarding process */
  accountHolder?: Maybe<AccountHolder>;
  /** Account name */
  accountName?: Maybe<Scalars["String"]["output"]>;
  /** Creation date */
  createdAt: Scalars["DateTime"]["output"];
  /** Email */
  email?: Maybe<Scalars["String"]["output"]>;
  /** Finalization date */
  finalizedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Unique identifier of an onboarding */
  id: Scalars["String"]["output"];
  /** Information regarding the Individual or the company to onboard */
  info: OnboardingAccountHolderInfo;
  /** Language of the onboarding process. This consists of a 2-3 letter base language tag representing the language, optionally followed by additional subtags separated by '-'. The most common extra information is the country or region variant (like 'en-US' or 'fr-CA') or the type of alphabet to use (like 'sr-Latn'). Other variants like the type of orthography ('de-DE-1996') are usually not used in the context of this header. [Learn More](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language) */
  language?: Maybe<Scalars["String"]["output"]>;
  /** List of accepted identification level for the legal representative */
  legalRepresentativeAcceptedIdentificationLevels: Array<Maybe<IdentificationLevel>>;
  /** Recommended identification level for the legal representative */
  legalRepresentativeRecommendedIdentificationLevel: IdentificationLevel;
  /** Extra parameters provided by partner */
  oAuthRedirectParameters?: Maybe<OAuthRedirectParameters>;
  /** Current computed state of onboarding */
  onboardingState: OnboardingState;
  /** Redirect the legal representative of a new account holder to this URL to start the onboarding process */
  onboardingUrl: Scalars["String"]["output"];
  /**
   * URL used to redirect the user at the end of the onboarding process. If `null` the user is redirected to the white label web banking.
   * @deprecated Use `redirectUrl` field on oauthRedirectParameters parameters instead.
   */
  redirectUrl: Scalars["String"]["output"];
  /** Status (valid/invalid/finalized) and details of errors on fields */
  statusInfo: OnboardingStatusInfo;
  /** List of supporting document collection owned by the account holder. */
  supportingDocumentCollection: SupportingDocumentCollection;
  /** Swan TCU URL */
  tcuUrl: Scalars["String"]["output"];
  /** Creation date */
  updatedAt: Scalars["DateTime"]["output"];
};

/** The onboarding could be for an Individual or a company */
export type OnboardingAccountHolderInfo = {
  /** Account holder type */
  type: AccountHolderType;
};

/** Company Account Holder Information */
export type OnboardingCompanyAccountHolderInfo = OnboardingAccountHolderInfo & {
  __typename: "OnboardingCompanyAccountHolderInfo";
  /** business activity */
  businessActivity?: Maybe<BusinessActivity>;
  /**
   * business activity description
   * This must be 1024 characters long maximum.
   */
  businessActivityDescription?: Maybe<Scalars["String"]["output"]>;
  /** legal form of the company (SAS, SCI, SASU, ...) */
  companyType?: Maybe<CompanyType>;
  /**
   * The ultimate beneficiary is defined as the natural person (s) who own or control, directly or indirectly, the reporting company.
   *
   * The ultimate beneficiary is :
   * - either the natural person (s) who hold, directly or indirectly, more than 25% of the capital or the rights of vote of the reporting company;
   * - either the natural person (s) who exercise, by other means, a power of control of the company;
   */
  individualUltimateBeneficialOwners?: Maybe<Array<IndividualUltimateBeneficialOwner>>;
  /** Is company registered at RCS in its country */
  isRegistered?: Maybe<Scalars["Boolean"]["output"]>;
  /** Legal representative personal address */
  legalRepresentativePersonalAddress?: Maybe<AddressInformation>;
  /** estimated monthly payment volume (euro) */
  monthlyPaymentVolume?: Maybe<MonthlyPaymentVolume>;
  /** name of the company */
  name?: Maybe<Scalars["String"]["output"]>;
  /** registration number of the company (SIRET, ...) */
  registrationNumber?: Maybe<Scalars["String"]["output"]>;
  /** residency address of the head office (Must be in a European country) */
  residencyAddress?: Maybe<AddressInfo>;
  /** Tax Identification Number */
  taxIdentificationNumber?: Maybe<Scalars["String"]["output"]>;
  /** Account holder type (always Company for type OnboardingCompanyAccountHolderInfo) */
  type: AccountHolderType;
  /** Type of representation (legal representative or power of attorney) */
  typeOfRepresentation?: Maybe<TypeOfRepresentation>;
  /** Unique number that identifies a taxable person (business) or non-taxable legal entity that is registered for VAT */
  vatNumber?: Maybe<Scalars["String"]["output"]>;
};

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type OnboardingConnection = Connection & {
  __typename: "OnboardingConnection";
  /** OnboardingEdge list */
  edges: Array<OnboardingEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars["Int"]["output"];
};

/** Implements the Relay Edge interface */
export type OnboardingEdge = Edge & {
  __typename: "OnboardingEdge";
  /** Opaque identifier pointing to this onboarding node in the pagination mechanism */
  cursor: Scalars["String"]["output"];
  /** The Onboarding */
  node: Onboarding;
};

/** Filters that can be applied when listing onboardings */
export type OnboardingFiltersInput = {
  /** Email we want to filter on */
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** Searches company name, first name, last name */
  search?: InputMaybe<Scalars["String"]["input"]>;
  /** Status we want to filter on */
  status?: InputMaybe<Array<OnboardingStatus>>;
  /** Type/Types we want to filter on */
  types?: InputMaybe<Array<AccountHolderType>>;
};

/** StatusInfo when onboarding has been finalized */
export type OnboardingFinalizedStatusInfo = OnboardingStatusInfo & {
  __typename: "OnboardingFinalizedStatusInfo";
  status: OnboardingStatus;
};

/** Individual Account Holder Information */
export type OnboardingIndividualAccountHolderInfo = OnboardingAccountHolderInfo & {
  __typename: "OnboardingIndividualAccountHolderInfo";
  /** employment status of the individual account holder */
  employmentStatus?: Maybe<EmploymentStatus>;
  /** monthly income of the individual account holder */
  monthlyIncome?: Maybe<MonthlyIncome>;
  /** residency address of the individual account holder (must be in a European country) */
  residencyAddress?: Maybe<AddressInfo>;
  /** Tax Identification Number */
  taxIdentificationNumber?: Maybe<Scalars["String"]["output"]>;
  /** Account holder type (always Individual for type OnboardingIndividualAccountHolderInfo) */
  type: AccountHolderType;
};

export type OnboardingInfo = {
  __typename: "OnboardingInfo";
  /** Country of the account that will be created at the end of the onboarding process */
  accountCountry?: Maybe<AccountCountry>;
  /** Account name */
  accountName?: Maybe<Scalars["String"]["output"]>;
  /** email */
  email?: Maybe<Scalars["String"]["output"]>;
  /** Unique identifier of an onboarding */
  id: Scalars["String"]["output"];
  /** Information regarding the Individual or the company to onboard */
  info: OnboardingAccountHolderInfo;
  /** language of the onboarding process. This consists of a 2-3 letter base language tag representing the language, optionally followed by additional subtags separated by '-'. The most common extra information is the country or region variant (like 'en-US' or 'fr-CA') or the type of alphabet to use (like 'sr-Latn'). Other variants like the type of orthography ('de-DE-1996') are usually not used in the context of this header. [Learn More](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language) */
  language?: Maybe<Scalars["String"]["output"]>;
  /** List of accepted identification level for the legal representative */
  legalRepresentativeAcceptedIdentificationLevels: Array<Maybe<IdentificationLevel>>;
  /** Recommended identification level for the legal representative */
  legalRepresentativeRecommendedIdentificationLevel: IdentificationLevel;
  /** Extra parameters provided by partner */
  oAuthRedirectParameters?: Maybe<OAuthRedirectParameters>;
  /** Current computed state of onboarding */
  onboardingState?: Maybe<OnboardingState>;
  /** Redirect the legal representative of a new account holder to this URL to start the onboarding process */
  onboardingUrl: Scalars["String"]["output"];
  /** Project infos you set in the dashboard */
  projectInfo?: Maybe<ProjectInfo>;
  /** URL used to redirect the user at the end of the onboarding process. If `null` the user is redirected to the white label web banking. */
  redirectUrl: Scalars["String"]["output"];
  /** Status (valid/invalid/finalized) and details of errors on fields */
  statusInfo: OnboardingStatusInfo;
  /** Supporting document collection related to onboarding. */
  supportingDocumentCollection: SupportingDocumentCollection;
  /** Swan TCU URL */
  tcuUrl: Scalars["String"]["output"];
  /** Verification Flow */
  verificationFlow: VerificationFlow;
};

/** StatusInfo when onboarding has still at least one incorrect field */
export type OnboardingInvalidStatusInfo = OnboardingStatusInfo & {
  __typename: "OnboardingInvalidStatusInfo";
  errors: Array<ValidationError>;
  status: OnboardingStatus;
};

/** Rejection returned if an onboarding is not completed */
export type OnboardingNotCompletedRejection = Rejection & {
  __typename: "OnboardingNotCompletedRejection";
  message: Scalars["String"]["output"];
  onboarding: Onboarding;
  /** @deprecated(reason: "use `onboarding.id` instead") */
  onboardingId: Scalars["String"]["output"];
};

/** Field we can use when ordering that can be applied when listing onboardings */
export type OnboardingOrderByFieldInput = "createdAt" | "finalizedAt" | "updatedAt";

/** Order that can be applied when listing onboardings */
export type OnboardingOrderByInput = {
  direction?: InputMaybe<OrderByDirection>;
  field?: InputMaybe<OnboardingOrderByFieldInput>;
};

/** Onboarding process state */
export type OnboardingState =
  /** When the onboarding is finalized and the account holder is created */
  | "Completed"
  /** When the onboarding is in progress */
  | "Ongoing";

/** Possible values for onboarding status */
export type OnboardingStatus =
  /** When the onboarding is finalized */
  | "Finalized"
  /** when the onboarding is invalid. Final status */
  | "Invalid"
  /** When the onboarding is valid. Final status */
  | "Valid";

/** Object containing details about onboarding status (valid/invalid and why it is invalid/already finalized) */
export type OnboardingStatusInfo = {
  /** Current onboarding status. Onboarding can only be finalized if status is "valid" */
  status: OnboardingStatus;
};

/** StatusInfo when onboarding has all onboarding fields are correctly filled */
export type OnboardingValidStatusInfo = OnboardingStatusInfo & {
  __typename: "OnboardingValidStatusInfo";
  status: OnboardingStatus;
};

export type OrderByDirection = "Asc" | "Desc";

/** Implements PageInfo from the Relay Connections Specification - information about a page in the pagination mechanism */
export type PageInfo = {
  __typename: "PageInfo";
  /** Opaque identifier pointing to the last node of the page */
  endCursor?: Maybe<Scalars["String"]["output"]>;
  /** Indicates whether more edges exist following this page */
  hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
  /** Indicates whether more edges exist preceding this page */
  hasPreviousPage?: Maybe<Scalars["Boolean"]["output"]>;
  /** Opaque identifier pointing to the first node of the page */
  startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** Input version */
export type PartnerCloseAccountReasonInput = {
  message?: InputMaybe<Scalars["String"]["input"]>;
  type: PartnerCloseAccountReasonType;
};

/** Specific type for closing account action */
export type PartnerCloseAccountReasonType =
  /** Simple closing request */
  "ClosingRequested";

/** Partnership Status Accepted */
export type PartnershipAcceptedStatusInfo = PartnershipStatusInfo & {
  __typename: "PartnershipAcceptedStatusInfo";
  /** Accepted date of the partnership for this account */
  acceptedDate: Scalars["DateTime"]["output"];
  /** Partnership status (always Accepted for type PartnershipAcceptedStatusInfo) */
  status: PartnershipStatus;
};

/** Partnership Status canceled */
export type PartnershipCanceledStatusInfo = PartnershipStatusInfo & {
  __typename: "PartnershipCanceledStatusInfo";
  /** Accepted date of the partnership for this account */
  acceptedDate: Scalars["DateTime"]["output"];
  /** Canceled date of the partnership for this account */
  canceledDate: Scalars["DateTime"]["output"];
  /** Reason of the cancelation */
  reason: Scalars["String"]["output"];
  /** Partnership status (always Canceled for type PartnershipCanceledStatusInfo) */
  status: PartnershipStatus;
};

/** Partnership Status currently cancelling */
export type PartnershipCancelingStatusInfo = PartnershipStatusInfo & {
  __typename: "PartnershipCancelingStatusInfo";
  /** Accepted date of the partnership for this account */
  acceptedDate: Scalars["DateTime"]["output"];
  /** Canceled date of the partnership for this account */
  canceledAfter: Scalars["DateTime"]["output"];
  /** Partnership status (always Canceling for type PartnershipCancelingStatusInfo) */
  status: PartnershipStatus;
};

export type PartnershipStatus =
  /** When the partnership is accepted by the account holder for this account */
  | "Accepted"
  /** When the partnership was canceled by you or the account holder */
  | "Canceled"
  /** When you decide to stop the partnership, you have 2 months notice */
  | "Canceling";

/** Partnership Status information */
export type PartnershipStatusInfo = {
  /** Status of the partnership for this account */
  status: PartnershipStatus;
};

export type PaymentAccountType =
  /** When the account holder if the account hasn't met KYC requirements */
  | "EMoney"
  /** When all KYC requirements are met */
  | "PaymentService";

/** Payment Level of the account */
export type PaymentLevel =
  /** When the account is limited to 150€ within 30 days and with no IBAN */
  | "Limited"
  /** When the account holder is fully verified and then the account is unlimited with an IBAN */
  | "Unlimited";

export type PaymentLinkSequenceType = "OneOff" | "Recurring";

/** Rejection returned when a payment mandate reference is already for a creditor */
export type PaymentMandateReferenceAlreadyUsedRejection = Rejection & {
  __typename: "PaymentMandateReferenceAlreadyUsedRejection";
  message: Scalars["String"]["output"];
};

/** Rejection returned when a payment method is not compatible for the requested mutation */
export type PaymentMethodNotCompatibleRejection = Rejection & {
  __typename: "PaymentMethodNotCompatibleRejection";
  message: Scalars["String"]["output"];
};

/** Pending Digital Card used for ApplePay or GooglePay */
export type PendingDigitalCard = DigitalCard & {
  __typename: "PendingDigitalCard";
  /** Created date */
  createdAt: Scalars["DateTime"]["output"];
  /** Unique identifier of a digital card */
  id: Scalars["ID"]["output"];
  /**
   * Data to provide to the wallet during InApp Provisioning
   *
   * Signature Data is mandatory for ApplePay
   *
   * This data is only available for a digital card in
   * - status: Pending
   * - type: InApp
   */
  inAppProvisioningData?: Maybe<InAppProvisioningData>;
  /**
   * Digital Card status information
   *
   * In this type the status will be either ConsentPending or Pending
   */
  statusInfo: PendingDigitalCardStatusInfo;
  /** The type of digitalization that created this digital card. */
  type: DigitalizationType;
  /** Updated date */
  updatedAt: Scalars["DateTime"]["output"];
  /** Wallet Provider (ApplePay, GooglePay ...) */
  walletProvider: WalletProvider;
};

/** Pending Digital Card used for ApplePay or GooglePay */
export type PendingDigitalCardInAppProvisioningDataArgs = {
  signatureData?: InputMaybe<SignatureData>;
};

/** Pending Digital Card Status */
export type PendingDigitalCardStatus =
  /** when the digital card is waiting for the user to finish his consent */
  | "ConsentPending"
  /**
   * when the creation of a digital card is declined
   *
   * this is a final state
   */
  | "Declined"
  /** when the digital card is pending the end of the digitalization process */
  | "Pending";

/** Pending Digital Card Status Information */
export type PendingDigitalCardStatusInfo = {
  /** Status of the digital card. */
  status: PendingDigitalCardStatus;
};

/** PendingMerchantPaymentMethodStatusInfo */
export type PendingMerchantPaymentMethodStatusInfo = MerchantPaymentMethodStatusInfo & {
  __typename: "PendingMerchantPaymentMethodStatusInfo";
  status: MerchantPaymentMethodStatus;
};

/** PendingReviewMerchantProfileStatusInfo */
export type PendingReviewMerchantProfileStatusInfo = MerchantProfileStatusInfo & {
  __typename: "PendingReviewMerchantProfileStatusInfo";
  status: MerchantProfileStatus;
};

export type PermissionCannotBeGrantedRejection = Rejection & {
  __typename: "PermissionCannotBeGrantedRejection";
  message: Scalars["String"]["output"];
};

/** Physical Card */
export type PhysicalCard = {
  __typename: "PhysicalCard";
  /** Masked Card Number */
  cardMaskedNumber: Scalars["String"]["output"];
  /** Custom Options */
  customOptions: PhysicalCardCustomOptions;
  /** Physical Card expiration date  with MM/YY string format */
  expiryDate?: Maybe<Scalars["String"]["output"]>;
  /** Unique identifier present on physical card, such identifier is null if the status is ToActivate or Canceled. This identifier is updated when a renewed card is activated */
  identifier?: Maybe<Scalars["String"]["output"]>;
  /** Offline Spending limit defined by Swan */
  offlineSpendingLimit: Amount;
  /** Physical Card status information */
  statusInfo: PhysicalCardStatusInfo;
};

/** Physical Card Activated Status Information */
export type PhysicalCardActivatedStatusInfo = PhysicalCardStatusInfo & {
  __typename: "PhysicalCardActivatedStatusInfo";
  /** Physical Card status (always Activated for type PhysicalCardEnabledStatusInfo). */
  status: PhysicalCardStatus;
};

/** Physical Card Canceled Status Information */
export type PhysicalCardCanceledStatusInfo = PhysicalCardStatusInfo & {
  __typename: "PhysicalCardCanceledStatusInfo";
  /** Reason why the card is canceled. */
  reason: Scalars["String"]["output"];
  /** Physical Card status (always Canceled for type PhysicalCardCanceledStatusInfo). */
  status: PhysicalCardStatus;
};

/** Physical Card Canceling Status Information */
export type PhysicalCardCancelingStatusInfo = PhysicalCardStatusInfo & {
  __typename: "PhysicalCardCancelingStatusInfo";
  /** Reason why the card is canceled. */
  reason: Scalars["String"]["output"];
  /** Physical Card status (always Canceling for type PhysicalCardCancelingStatusInfo). */
  status: PhysicalCardStatus;
};

/** when the user has to authorize production of the physical card */
export type PhysicalCardConsentPendingStatusInfo = PhysicalCardStatusInfo & {
  __typename: "PhysicalCardConsentPendingStatusInfo";
  /** The consent required to authorize production of the physical card */
  consent: Consent;
  /** Physical Card status (always ConsentPending for type PhysicalCardConsentPendingStatusInfo) */
  status: PhysicalCardStatus;
};

/** Custom options for physical card. */
export type PhysicalCardCustomOptions = {
  __typename: "PhysicalCardCustomOptions";
  /** Additional line embossed on the card. */
  additionalPrintedLine?: Maybe<Scalars["String"]["output"]>;
};

/** Rejection returned when the Physical Card does not exist */
export type PhysicalCardNotFoundRejection = Rejection & {
  __typename: "PhysicalCardNotFoundRejection";
  identifier: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

/** when the physical card is in the process of being ready to use */
export type PhysicalCardProcessingStatusInfo = PhysicalCardStatusInfo & {
  __typename: "PhysicalCardProcessingStatusInfo";
  /** Physical card status (always Processing for type PhysicalCardProcessingStatusInfo) */
  status: PhysicalCardStatus;
};

/** Physical Card Renewed Status Information */
export type PhysicalCardRenewedStatusInfo = PhysicalCardStatusInfo & {
  __typename: "PhysicalCardRenewedStatusInfo";
  /** address to deliver the physical card */
  address: Address;
  /** Estimated delivery date */
  estimatedDeliveryDate?: Maybe<Scalars["DateTime"]["output"]>;
  /** `true` if PIN Code is available. */
  isPINReady: Scalars["Boolean"]["output"];
  /** Name of the shipping provider (Ex: LaPoste, DHL ...) */
  shippingProvider?: Maybe<Scalars["String"]["output"]>;
  /** Physical Card status (always Renewed for type PhysicalCardRenewedStatusInfo). */
  status: PhysicalCardStatus;
  /** Shipping tracking number */
  trackingNumber?: Maybe<Scalars["String"]["output"]>;
};

/** Physical Card Status */
export type PhysicalCardStatus =
  /** when the physical card is activated */
  | "Activated"
  /** when the physical card is canceled */
  | "Canceled"
  /** when the physical card is about to be canceled */
  | "Canceling"
  /** when the consent to authorize physical card production is pending */
  | "ConsentPending"
  /** when the physical card is in the process of being ready to use */
  | "Processing"
  /** when the physical card is renewed */
  | "Renewed"
  /** when the physical card is suspended */
  | "Suspended"
  /** when the physical card is not yet activated */
  | "ToActivate";

/** Physical Card Status Information */
export type PhysicalCardStatusInfo = {
  /** Status of the physical card. */
  status: PhysicalCardStatus;
};

/** Physical Card Suspended Status Information */
export type PhysicalCardSuspendedStatusInfo = PhysicalCardStatusInfo & {
  __typename: "PhysicalCardSuspendedStatusInfo";
  /** Reason why the card is suspended. */
  reason: Scalars["String"]["output"];
  /** Physical Card status (always Suspended for type PhysicalCardSuspendedStatusInfo). */
  status: PhysicalCardStatus;
};

/** Physical Card To Activate Status Information */
export type PhysicalCardToActivateStatusInfo = PhysicalCardStatusInfo & {
  __typename: "PhysicalCardToActivateStatusInfo";
  /** address to deliver the physical card */
  address: Address;
  /** Estimated delivery date */
  estimatedDeliveryDate?: Maybe<Scalars["DateTime"]["output"]>;
  /** `true` if PIN Code is available. */
  isPINReady: Scalars["Boolean"]["output"];
  /** Name of the shipping provider (Ex: LaPoste, DHL ...) */
  shippingProvider?: Maybe<Scalars["String"]["output"]>;
  /** Physical Card status (always ToActivate for type PhysicalCardToActivateStatusInfo). */
  status: PhysicalCardStatus;
  /** Shipping tracking number */
  trackingNumber?: Maybe<Scalars["String"]["output"]>;
};

/** Rejection returned when the Physical Card is not the expected status */
export type PhysicalCardWrongStatusRejection = Rejection & {
  __typename: "PhysicalCardWrongStatusRejection";
  currentStatus: PhysicalCardStatus;
  expectedStatus: PhysicalCardStatus;
  identifier: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

export type PreProvisioningSuvCardSettings = {
  __typename: "PreProvisioningSUVCardSettings";
  ownerProvisioningSUVCards?: Maybe<Scalars["ID"]["output"]>;
  preProvisioningSUVCards: Scalars["Boolean"]["output"];
  preProvisioningSUVCardsAvailablePercentage: Scalars["Float"]["output"];
  preProvisioningSUVNumberOfCards: Scalars["Int"]["output"];
};

export type PreferredNotificationChannel =
  /** Use In-App notification */
  | "App"
  /** Use Swan SMS */
  | "Sms";

/** Type of product sold. Gifts and donations can be club subscription or collection of donations (for associations), tips collection, contributions for local authorities */
export type ProductType = "GiftsAndDonations" | "Goods" | "Services" | "VirtualGoods";

export type ProjectCardDesigns = {
  __typename: "ProjectCardDesigns";
  /** Project card product designs */
  cardDesigns: Array<CardProductDesign>;
  /** Unique identifier of a project */
  id: Scalars["ID"]["output"];
  /** Visual Id from the issuing card processor (Monext) */
  issuingProcessorVisualId?: Maybe<Scalars["String"]["output"]>;
  /** Project name */
  name?: Maybe<Scalars["String"]["output"]>;
  /** Project's pre provisioning suv card settings */
  preProvisioningSUVCardSettings?: Maybe<PreProvisioningSuvCardSettings>;
  /** Specific card product for companies */
  specificCardProductCodeForCompanies?: Maybe<Scalars["String"]["output"]>;
};

export type ProjectCardSettings = {
  __typename: "ProjectCardSettings";
  /** Project's card settings */
  cardSettings: Array<CardSettings>;
  /** Unique identifier of a project */
  id: Scalars["ID"]["output"];
  /** Visual Id from the issuing card processor (Monext) */
  issuingProcessorVisualId?: Maybe<Scalars["String"]["output"]>;
  /** Project name */
  name?: Maybe<Scalars["String"]["output"]>;
  /** Project's pre provisioning suv card settings */
  preProvisioningSUVCardSettings?: Maybe<PreProvisioningSuvCardSettings>;
  /** Specific card product for companies */
  specificCardProductCodeForCompanies?: Maybe<Scalars["String"]["output"]>;
};

/** Project Card Settings Background Type */
export type ProjectCardSettingsBackgroundType =
  /** when Card setting background is black */
  | "Black"
  /** when Card setting background is customized */
  | "Custom"
  /** when Card setting background is light */
  | "Silver";

/** Card Status */
export type ProjectCardStatus =
  /** when project's card settings are Disabled */
  | "Disabled"
  /** when project's card settings are Enabled */
  | "Enabled"
  /** when project's card settings are Initiated */
  | "Initiated"
  /** when project's card settings are Rejected */
  | "Rejected"
  /** when project's card settings are Suspended */
  | "Suspended"
  /** when project's card settings are ToReview */
  | "ToReview";

export type ProjectForbiddenRejection = Rejection & {
  __typename: "ProjectForbiddenRejection";
  message: Scalars["String"]["output"];
};

/** Public information of a `Project` */
export type ProjectInfo = {
  __typename: "ProjectInfo";
  B2BMembershipIDVerification?: Maybe<Scalars["Boolean"]["output"]>;
  /** Your accent color, used in white label interfaces. Most of the time for call to actions */
  accentColor?: Maybe<Scalars["String"]["output"]>;
  /**
   * the currently active card settings
   * @deprecated Use cardProduct.cardDesigns instead
   */
  activeCardSettings?: Maybe<CardSettings>;
  /** Flag that determines if desktop authentication is enabled for this project */
  allowsDesktopAuthentication: Scalars["Boolean"]["output"];
  /** The card products associated with this project. */
  cardProducts?: Maybe<Array<CardProduct>>;
  /** Your custom subdomain used in consents */
  customConsentSubdomain?: Maybe<Scalars["String"]["output"]>;
  /** Unique identifier of the project */
  id: Scalars["ID"]["output"];
  /** URL of your logo */
  logoUri?: Maybe<Scalars["String"]["output"]>;
  /** Your project name displayed in white label interfaces and in the terms and conditions */
  name: Scalars["String"]["output"];
  /** Your OAuth client id */
  oAuthClientId?: Maybe<Scalars["String"]["output"]>;
  /** Project status */
  status: ProjectStatus;
  /**
   * Unique id of your current Terms and Conditions of Use
   * @deprecated use tcuDocumentUrl from the onboarding query
   */
  tcuDocumentId: Scalars["String"]["output"];
  /**
   * URL to your Terms and Conditions of Use document depending on the provided language
   * @deprecated use tcuDocumentUrl from the onboarding query
   */
  tcuDocumentUri: Scalars["String"]["output"];
  /** The type of your project */
  type: ProjectType;
  /** Web banking settings */
  webBankingSettings?: Maybe<WebBankingSettings>;
};

/** Public information of a `Project` */
export type ProjectInfoTcuDocumentUriArgs = {
  language: Scalars["String"]["input"];
};

export type ProjectInvalidStatusRejection = Rejection & {
  __typename: "ProjectInvalidStatusRejection";
  message: Scalars["String"]["output"];
};

export type ProjectNotFound = Rejection & {
  __typename: "ProjectNotFound";
  message: Scalars["String"]["output"];
};

/** Rejection returned when the project is not found */
export type ProjectNotFoundRejection = Rejection & {
  __typename: "ProjectNotFoundRejection";
  message: Scalars["String"]["output"];
};

export type ProjectSettingsForbiddenError = Rejection & {
  __typename: "ProjectSettingsForbiddenError";
  message: Scalars["String"]["output"];
};

export type ProjectSettingsNotFound = Rejection & {
  __typename: "ProjectSettingsNotFound";
  message: Scalars["String"]["output"];
};

export type ProjectSettingsStatusNotReachable = Rejection & {
  __typename: "ProjectSettingsStatusNotReachable";
  message: Scalars["String"]["output"];
};

export type ProjectStatus =
  | "BetaLiveAccess"
  | "Disabled"
  | "Enabled"
  | "FullLiveAccess"
  | "Initiated"
  | "LimitedLiveAccess"
  | "MeetingScheduled"
  | "PendingCompliance"
  | "PendingLiveReview"
  | "Rejected"
  | "Suspended"
  | "ToReview";

export type ProjectType =
  | "COMPANY"
  | "COMPANY_AND_CUSTOMERS"
  | "Company"
  | "CompanyAndCustomers"
  | "INDIVIDUAL"
  | "Individual";

/** Rejection returned when the public onboarding is disabled */
export type PublicOnboardingDisabledRejection = Rejection & {
  __typename: "PublicOnboardingDisabledRejection";
  message: Scalars["String"]["output"];
};

export type Query = {
  __typename: "Query";
  cardInfos?: Maybe<CardInfos>;
  cardPINInfos?: Maybe<CardPinInfos>;
  /** Fetch company info (name, beneficiaries...) by Siren number */
  companyInfoBySiren: CompanyInfoBySirenPayload;
  /** Fetch company info (name, beneficiaries...) by Company Ref and Headquarter Country */
  companyUboByCompanyRefAndHeadquarterCountry: CompanyUboByCompanyRefAndHeadquarterCountryPayload;
  /** Return a merchant payment link by id */
  merchantPaymentLink?: Maybe<MerchantPaymentLink>;
  onboardingInfo?: Maybe<OnboardingInfo>;
  projectInfoById: ProjectInfo;
};

export type QueryCardInfosArgs = {
  input: CardInfosInput;
};

export type QueryCardPinInfosArgs = {
  input: CardPinInfosInput;
};

export type QueryCompanyInfoBySirenArgs = {
  input: CompanyInfoBySirenInput;
};

export type QueryCompanyUboByCompanyRefAndHeadquarterCountryArgs = {
  input: CompanyUboByCompanyRefAndHeadquarterCountryInput;
};

export type QueryMerchantPaymentLinkArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryOnboardingInfoArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryProjectInfoByIdArgs = {
  id: Scalars["ID"]["input"];
};

/** Define a reason with a message */
export type Reason = {
  message?: Maybe<Scalars["String"]["output"]>;
};

/** Input version */
export type ReasonInput = {
  message?: InputMaybe<Scalars["String"]["input"]>;
};

/** RejectedMerchantPaymentMethodStatusInfo */
export type RejectedMerchantPaymentMethodStatusInfo = MerchantPaymentMethodStatusInfo & {
  __typename: "RejectedMerchantPaymentMethodStatusInfo";
  /** Merchant Payment Method rejected date */
  rejectedAt: Scalars["Date"]["output"];
  status: MerchantPaymentMethodStatus;
};

/** RejectedMerchantProfileStatusInfo */
export type RejectedMerchantProfileStatusInfo = MerchantProfileStatusInfo & {
  __typename: "RejectedMerchantProfileStatusInfo";
  rejectedAt: Scalars["Date"]["output"];
  status: MerchantProfileStatus;
};

export type Rejection = {
  message: Scalars["String"]["output"];
};

/** Request Update Merchant Profile */
export type RequestMerchantProfileUpdate = {
  __typename: "RequestMerchantProfileUpdate";
  /** created date */
  createdAt: Scalars["DateTime"]["output"];
  /** expected average basket value. */
  expectedAverageBasket: Amount;
  /** Expected annual activity volumes for all payment method */
  expectedMonthlyPaymentVolume: Amount;
  /** The Request ID */
  id: Scalars["ID"]["output"];
  /** Url of the merchant's logo */
  merchantLogoUrl?: Maybe<Scalars["String"]["output"]>;
  /** Business name of the merchant, i.e. name that will be displayed on debtors' bank statements */
  merchantName: Scalars["String"]["output"];
  /** The Merchant Profile ID to update */
  merchantProfileId: Scalars["ID"]["output"];
  /** Url of the merchant's website */
  merchantWebsite?: Maybe<Scalars["String"]["output"]>;
  /** Type of product sold. List of value: Goods, Services, VirtualGoods, GiftsAndDonations. Gifts and donations can be club subscription or collection of donations (for associations), tips collection, contributions for local authorities */
  productType: ProductType;
  /** The status of the request */
  status: RequestMerchantProfileUpdateStatus;
  /** updated date */
  updatedAt: Scalars["DateTime"]["output"];
};

/** Request Merchant Profile Update Statuses */
export type RequestMerchantProfileUpdateStatus =
  /** A Request that has already been approved */
  | "Enabled"
  /** A Request is created in the PendingReview status */
  | "PendingReview"
  /** A Request that has already been rejected */
  | "Rejected";

export type ResidencyAddressInput = {
  /** Address line 1. Length must be from 0 to 255 characters */
  addressLine1?: InputMaybe<Scalars["String"]["input"]>;
  /** AddressLine2. Length must be from 0 to 255 characters */
  addressLine2?: InputMaybe<Scalars["String"]["input"]>;
  /** City. Length must be from 0 to 100 characters */
  city?: InputMaybe<Scalars["String"]["input"]>;
  /** Country */
  country?: InputMaybe<Scalars["CCA3"]["input"]>;
  /** Postal code. Length must be from 0 to 50 characters */
  postalCode?: InputMaybe<Scalars["String"]["input"]>;
  /** State of residency. Length must be from 0 to 100 characters */
  state?: InputMaybe<Scalars["String"]["input"]>;
};

/** Account membership restricted to */
export type RestrictedTo = {
  __typename: "RestrictedTo";
  /** birth date */
  birthDate?: Maybe<Scalars["Date"]["output"]>;
  /** first name */
  firstName: Scalars["String"]["output"];
  /** last name */
  lastName: Scalars["String"]["output"];
  /** phone number */
  phoneNumber: Scalars["String"]["output"];
};

/** Rejection returned if the mutation cannot be executed in another context than user */
export type RestrictedToUserRejection = Rejection & {
  __typename: "RestrictedToUserRejection";
  message: Scalars["String"]["output"];
};

/**
 * Percentage over a number of business days, that is applied to all funds collected to compute a Reserved amount
 * This amount cannot be used over the corresponding business days
 */
export type RollingReserve = {
  __typename: "RollingReserve";
  /** Percentage of the funding amount to be reserved */
  percentage: Scalars["Int"]["output"];
  /** Number of business days the computed amount is reserved */
  rollingDays: Scalars["Int"]["output"];
};

/** Rejection returned when adding a B2B mandate with an Individual debtor */
export type SchemeWrongRejection = Rejection & {
  __typename: "SchemeWrongRejection";
  message: Scalars["String"]["output"];
};

/** SepaDirectDebitB2BMerchantPaymentMethod */
export type SepaDirectDebitB2BMerchantPaymentMethod = MerchantPaymentMethod & {
  __typename: "SepaDirectDebitB2BMerchantPaymentMethod";
  /** Unique identifier tied to every version of a given Merchant Payment Method */
  id: Scalars["ID"]["output"];
  /** Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type */
  methodId: Scalars["ID"]["output"];
  /**
   * Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type
   * DEPRECATED use the methodId field instead.
   * @deprecated Use methodId instead
   */
  productId: Scalars["ID"]["output"];
  /** Rolling Reserve applied to the Merchant Payment Method */
  rollingReserve?: Maybe<RollingReserve>;
  /** When the above is false, the value of the Sepa Creditor Identifier used */
  sepaCreditorIdentifier?: Maybe<Scalars["String"]["output"]>;
  /** Status of the Merchant Payment Method */
  statusInfo: MerchantPaymentMethodStatusInfo;
  /** The Merchant Payment Method Type */
  type: MerchantPaymentMethodType;
  /** Date at which the Merchant Payment Method was last updated */
  updatedAt: Scalars["Date"]["output"];
  /** Whether this payment method uses the Swan Sepa Creditor Identifier */
  useSwanSepaCreditorIdentifier: Scalars["Boolean"]["output"];
  /** Version of the Merchant Payment Method */
  version: Scalars["Int"]["output"];
};

/** SepaDirectDebitCoreMerchantPaymentMethod */
export type SepaDirectDebitCoreMerchantPaymentMethod = MerchantPaymentMethod & {
  __typename: "SepaDirectDebitCoreMerchantPaymentMethod";
  /** Unique identifier tied to every version of a given Merchant Payment Method */
  id: Scalars["ID"]["output"];
  /** Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type */
  methodId: Scalars["ID"]["output"];
  /**
   * Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type
   * DEPRECATED use the methodId field instead.
   * @deprecated Use methodId instead
   */
  productId: Scalars["ID"]["output"];
  /** Rolling Reserve applied to the Merchant Payment Method */
  rollingReserve?: Maybe<RollingReserve>;
  /** When the above is false, the value of the Sepa Creditor Identifier used */
  sepaCreditorIdentifier?: Maybe<Scalars["String"]["output"]>;
  /** Status of the Merchant Payment Method */
  statusInfo: MerchantPaymentMethodStatusInfo;
  /** The Merchant Payment Method Type */
  type: MerchantPaymentMethodType;
  /** Date at which the Merchant Payment Method was last updated */
  updatedAt: Scalars["Date"]["output"];
  /** Whether this payment method uses the Swan Sepa Creditor Identifier */
  useSwanSepaCreditorIdentifier: Scalars["Boolean"]["output"];
  /** Version of the Merchant Payment Method */
  version: Scalars["Int"]["output"];
};

/** Signature data used during apple pay inApp provisioning */
export type SignatureData = {
  /** list of apple generated certificates */
  certificates: Array<Certificate>;
  /** nonce */
  nonce: Scalars["String"]["input"];
  /** nonce signed by the secure element */
  nonceSignature: Scalars["String"]["input"];
};

/** Spending limits */
export type SpendingLimit = {
  __typename: "SpendingLimit";
  /** sum of amount of spending authorized during the period */
  amount: Amount;
  /** period concerned */
  period: SpendingLimitPeriod;
  /** type of limit (defined by the Partner, defined by Swan, etc.) */
  type: SpendingLimitType;
};

/** Inputs when editing spending limit configuration */
export type SpendingLimitInput = {
  /** sum of amount of spending authorized during the period */
  amount: AmountInput;
  /** period concerned */
  period: SpendingLimitPeriodInput;
};

/** Available period to compute spending limits */
export type SpendingLimitPeriod = "Always" | "Daily" | "Monthly" | "Weekly";

/** Available period to compute spending limits */
export type SpendingLimitPeriodInput = "Always" | "Daily" | "Monthly" | "Weekly";

/** Available type of spending limits */
export type SpendingLimitType =
  /** for the account holder - defined by the partner */
  | "AccountHolder"
  /** for the partner - defined by Swan */
  | "Partner";

/** Supporting document used for compliance */
export type SupportingDocument = {
  __typename: "SupportingDocument";
  /** Created date */
  createdAt: Scalars["DateTime"]["output"];
  /** Unique identifier of the document */
  id: Scalars["String"]["output"];
  /** Supporting document status information */
  statusInfo: SupportingDocumentStatusInfo;
  /** Purpose of supporting document */
  supportingDocumentPurpose: SupportingDocumentPurposeEnum;
  /** Type of supporting Document */
  supportingDocumentType?: Maybe<SupportingDocumentType>;
  /** Updated date */
  updatedAt: Scalars["DateTime"]["output"];
};

export type SupportingDocumentCollectMode = "API" | "EndCustomer" | "Partner";

/**
 * Collection of supporting documents used for compliance
 *
 * Fetching SupportingDocument is restricted to Project access token
 */
export type SupportingDocumentCollection = {
  __typename: "SupportingDocumentCollection";
  /** Created date */
  createdAt: Scalars["DateTime"]["output"];
  /** Unique identifier of the supporting document collection */
  id: Scalars["String"]["output"];
  /** List of required supporting document purposes for this supporting document collection */
  requiredSupportingDocumentPurposes: Array<SupportingDocumentPurpose>;
  /** Status of the supporting document collection */
  statusInfo: SupportingDocumentCollectionStatusInfo;
  /** List of supported documents contained in the supporting document collection */
  supportingDocuments: Array<Maybe<SupportingDocument>>;
  /** Updated date */
  updatedAt: Scalars["DateTime"]["output"];
};

/** Supporting document collection with Approved status */
export type SupportingDocumentCollectionApprovedStatusInfo =
  SupportingDocumentCollectionStatusInfo & {
    __typename: "SupportingDocumentCollectionApprovedStatusInfo";
    /** Date on which the supporting document collection has been approved */
    approvedAt: Scalars["DateTime"]["output"];
    /** When the supporting document collection is approved */
    status: SupportingDocumentCollectionStatus;
  };

/** Supporting document collection with Canceled status */
export type SupportingDocumentCollectionCanceledStatusInfo =
  SupportingDocumentCollectionStatusInfo & {
    __typename: "SupportingDocumentCollectionCanceledStatusInfo";
    /** Date on which the supporting document collection has been canceled */
    canceledAt: Scalars["DateTime"]["output"];
    /** When the supporting document collection is canceled */
    status: SupportingDocumentCollectionStatus;
  };

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type SupportingDocumentCollectionConnection = Connection & {
  __typename: "SupportingDocumentCollectionConnection";
  /** SupportingDocumentCollectionEdge list */
  edges: Array<SupportingDocumentCollectionEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars["Int"]["output"];
};

/** Implements the Relay Edge interface */
export type SupportingDocumentCollectionEdge = Edge & {
  __typename: "SupportingDocumentCollectionEdge";
  /** Opaque identifier pointing to this node in the pagination mechanism */
  cursor: Scalars["String"]["output"];
  /** The supporting document collection */
  node: SupportingDocumentCollection;
};

/** Rejection returned if the supporting document collection was not found */
export type SupportingDocumentCollectionNotFoundRejection = Rejection & {
  __typename: "SupportingDocumentCollectionNotFoundRejection";
  id: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

/** Supporting document collection with PendingReview status */
export type SupportingDocumentCollectionPendingReviewStatusInfo =
  SupportingDocumentCollectionStatusInfo & {
    __typename: "SupportingDocumentCollectionPendingReviewStatusInfo";
    /** When the supporting document collection is completed and in compliance review */
    status: SupportingDocumentCollectionStatus;
  };

/** Supporting document collection with Rejected status */
export type SupportingDocumentCollectionRejectedStatusInfo =
  SupportingDocumentCollectionStatusInfo & {
    __typename: "SupportingDocumentCollectionRejectedStatusInfo";
    /** Date on which the supporting document collection has been rejected */
    rejectedAt: Scalars["DateTime"]["output"];
    /** When the supporting document collection is rejected */
    status: SupportingDocumentCollectionStatus;
  };

/** Verification status of a supporting document collection */
export type SupportingDocumentCollectionStatus =
  /** When the supporting document collection is approved. Final status */
  | "Approved"
  /** When the supporting document collection is canceled. Final status */
  | "Canceled"
  /** When the supporting document collection is completed and in compliance review */
  | "PendingReview"
  /** When the supporting document collection is rejected. Final status */
  | "Rejected"
  /** When the supporting document collection is created and on going */
  | "WaitingForDocument";

/** Rejection returned if supporting document cannot be deleted because its supporting document collection status is not WaitingForDocument */
export type SupportingDocumentCollectionStatusDoesNotAllowDeletionRejection = Rejection & {
  __typename: "SupportingDocumentCollectionStatusDoesNotAllowDeletionRejection";
  message: Scalars["String"]["output"];
  supportingDocumentCollection: SupportingDocumentCollection;
  supportingDocumentCollectionStatus: SupportingDocumentCollectionStatus;
};

/** Rejection returned if supporting document cannot be updated because its supporting document collection status is not WaitingForDocument */
export type SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection = Rejection & {
  __typename: "SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection";
  message: Scalars["String"]["output"];
  supportingDocumentCollection: SupportingDocumentCollection;
  supportingDocumentCollectionStatus: SupportingDocumentCollectionStatus;
};

export type SupportingDocumentCollectionStatusInfo = {
  /** Status of the supporting document collection */
  status: SupportingDocumentCollectionStatus;
};

/** Rejection returned if the status transition is not allowed */
export type SupportingDocumentCollectionStatusNotAllowedRejection = Rejection & {
  __typename: "SupportingDocumentCollectionStatusNotAllowedRejection";
  message: Scalars["String"]["output"];
  newStatus: SupportingDocumentCollectionStatus;
  oldStatus: SupportingDocumentCollectionStatus;
};

/** Supporting document collection with WaitingForUpload status */
export type SupportingDocumentCollectionWaitingForDocumentStatusInfo =
  SupportingDocumentCollectionStatusInfo & {
    __typename: "SupportingDocumentCollectionWaitingForDocumentStatusInfo";
    /** When the Supporting Document Collection is created */
    status: SupportingDocumentCollectionStatus;
  };

export type SupportingDocumentCommunicationLanguageSettings = "en" | "fr";

/** Rejection returned if the supporting document was not found */
export type SupportingDocumentNotFoundRejection = Rejection & {
  __typename: "SupportingDocumentNotFoundRejection";
  id: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

/** Supporting document with NotUploaded status. */
export type SupportingDocumentNotUploadedStatusInfo = SupportingDocumentStatusInfo & {
  __typename: "SupportingDocumentNotUploadedStatusInfo";
  /** When the document has not been updated on time. */
  status: SupportingDocumentStatus;
};

export type SupportingDocumentPostField = {
  __typename: "SupportingDocumentPostField";
  key: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

/** Details of a supporting document purpose */
export type SupportingDocumentPurpose = {
  __typename: "SupportingDocumentPurpose";
  /** Corresponding supporting document types accepted for this supporting document purpose */
  acceptableSupportingDocumentTypes: Array<SupportingDocumentType>;
  /** Technical name of the purpose */
  name: SupportingDocumentPurposeEnum;
};

/** Supporting document purpose */
export type SupportingDocumentPurposeEnum =
  /** Proof of association registration */
  | "AssociationRegistration"
  /** Banking */
  | "Banking"
  /** Proof of company registration */
  | "CompanyRegistration"
  /** Minutes Of The General Assembly */
  | "GeneralAssemblyMinutes"
  /** Other */
  | "Other"
  /** Signed power of attorney document to give the power to act on behalf. */
  | "PowerOfAttorney"
  /** Proof of company address */
  | "ProofOfCompanyAddress"
  /** Proof of company income */
  | "ProofOfCompanyIncome"
  /** Proof of identity */
  | "ProofOfIdentity"
  /** Proof of individual address */
  | "ProofOfIndividualAddress"
  /** Proof of individual income */
  | "ProofOfIndividualIncome"
  /** Proof of origin of funds */
  | "ProofOfOriginOfFunds"
  /** Signed status */
  | "SignedStatus"
  /** Sworn statement */
  | "SwornStatement"
  /** UBO Declaration */
  | "UBODeclaration";

/** Supporting document with Refused status */
export type SupportingDocumentRefusedStatusInfo = SupportingDocumentStatusInfo & {
  __typename: "SupportingDocumentRefusedStatusInfo";
  /** An unique URL and one-time URL to download the Document */
  downloadUrl: Scalars["String"]["output"];
  /** Original file name */
  filename: Scalars["String"]["output"];
  /** Reason why the supporting document has been refused */
  reason: Scalars["String"]["output"];
  /** Date on which the supporting document collection has been refused */
  refusedAt: Scalars["DateTime"]["output"];
  /** When the document has been refused by Swan */
  status: SupportingDocumentStatus;
};

export type SupportingDocumentSettings = {
  __typename: "SupportingDocumentSettings";
  collectMode: SupportingDocumentCollectMode;
  communicationLanguage?: Maybe<SupportingDocumentCommunicationLanguageSettings>;
  emailContact?: Maybe<Scalars["String"]["output"]>;
};

/** Verification status of a document */
export type SupportingDocumentStatus =
  /** Document has not been uploaded on time. */
  | "NotUploaded"
  /** Document has been refused by Swan. */
  | "Refused"
  /** Document has been uploaded but not verified by Swan yet. */
  | "Uploaded"
  /** Document has been uploaded and verified by Swan. */
  | "Validated"
  /** Document is not uploaded yet. */
  | "WaitingForUpload";

/** Rejection returned if supporting document cannot be deleted because of its status */
export type SupportingDocumentStatusDoesNotAllowDeletionRejection = Rejection & {
  __typename: "SupportingDocumentStatusDoesNotAllowDeletionRejection";
  message: Scalars["String"]["output"];
  status: SupportingDocumentStatus;
  supportingDocument: SupportingDocument;
};

/** Rejection returned if supporting document cannot be updated because of its status */
export type SupportingDocumentStatusDoesNotAllowUpdateRejection = Rejection & {
  __typename: "SupportingDocumentStatusDoesNotAllowUpdateRejection";
  message: Scalars["String"]["output"];
  status: SupportingDocumentStatus;
  supportingDocument: SupportingDocument;
};

export type SupportingDocumentStatusInfo = {
  /** Status of the supporting document */
  status: SupportingDocumentStatus;
};

/** Rejection returned if the status transition is not allowed */
export type SupportingDocumentStatusNotAllowedRejection = Rejection & {
  __typename: "SupportingDocumentStatusNotAllowedRejection";
  message: Scalars["String"]["output"];
  newStatus: SupportingDocumentStatus;
  oldStatus: SupportingDocumentStatus;
};

/** Specific type for document */
export type SupportingDocumentType =
  /** Account statement */
  | "AccountStatement"
  /** Legal document required for company’s formation */
  | "ArticlesOfIncorporation"
  /** Document with details such as bank name, address, account number and account holder */
  | "BankAccountDetails"
  /** Bank Statement */
  | "BankStatement"
  /** By Laws */
  | "ByLaws"
  /** Share Deposit Certificate */
  | "CapitalShareDepositCertificate"
  /** Lease agreement in the name of the business or Proof of Individual Address if the company is hosted by one of the legal representative */
  | "CompanyLeaseAgreement"
  /** Document submitted to your tax bureau at the end of the last business period */
  | "CorporateIncomeTaxReturn"
  /** Deed of donation */
  | "DeedOfDonation"
  /** Deed of sale */
  | "DeedOfSale"
  /** Deed of succession */
  | "DeedOfSuccession"
  /** Driving license */
  | "DrivingLicense"
  /** Home Insurance contract */
  | "HomeInsurance"
  /** Income Tax return or tax-exemption certificate dating less than 2 years */
  | "IncomeTaxReturn"
  /** Association registration proof for french association */
  | "JOAFFEExtract"
  /** Loan contract */
  | "LoanContract"
  /** Meeting's minutes */
  | "MeetingMinutes"
  /** NationalIdCard */
  | "NationalIdCard"
  /** Notarial deed */
  | "NotarialDeed"
  /** Other */
  | "Other"
  /** Passport */
  | "Passport"
  /** A pay slip dating less than 3 months */
  | "PaySlip"
  /** Telephone Bill issued within the last 3 months */
  | "PhoneBill"
  /** Signed power of attorney document to give the power to act on behalf */
  | "PowerOfAttorney"
  /** Commercial registry extract issued within the last 3 months */
  | "RegisterExtract"
  /** Rental Receipt issued within the last 3 months */
  | "RentReceipt"
  /** Resident permit */
  | "ResidentPermit"
  /** Selfie */
  | "Selfie"
  /** Sworn statement */
  | "SwornStatement"
  /** Ultimate Beneficial Owner Declaration */
  | "UBODeclaration"
  /** Water, Electricity or Gas Bill issued within the last 3 months */
  | "UtilityBill";

export type SupportingDocumentUploadInfo = {
  __typename: "SupportingDocumentUploadInfo";
  fields: Array<SupportingDocumentPostField>;
  url: Scalars["String"]["output"];
};

/** Rejection returned if the supporting document collection cannot receive supporting documents anymore */
export type SupportingDocumentUploadNotAllowedRejection = Rejection & {
  __typename: "SupportingDocumentUploadNotAllowedRejection";
  message: Scalars["String"]["output"];
  supportingDocumentCollectionStatus: SupportingDocumentCollectionStatus;
};

/** Supporting document with Uploaded status */
export type SupportingDocumentUploadedStatusInfo = SupportingDocumentStatusInfo & {
  __typename: "SupportingDocumentUploadedStatusInfo";
  /** An unique URL and one-time URL to download the Document */
  downloadUrl: Scalars["String"]["output"];
  /** Original file name */
  filename: Scalars["String"]["output"];
  /** When the document has been uploaded but not verified by Swan yet */
  status: SupportingDocumentStatus;
};

/** Supporting document with Validated status */
export type SupportingDocumentValidatedStatusInfo = SupportingDocumentStatusInfo & {
  __typename: "SupportingDocumentValidatedStatusInfo";
  /** An unique URL and one-time URL to download the Document */
  downloadUrl: Scalars["String"]["output"];
  /** Original file name */
  filename: Scalars["String"]["output"];
  /** When the document has been uploaded and verified by Swan */
  status: SupportingDocumentStatus;
  /** Date on which the supporting document has been validated */
  validatedAt: Scalars["DateTime"]["output"];
};

/** Supporting document with WaitingForUpload status */
export type SupportingDocumentWaitingForUploadStatusInfo = SupportingDocumentStatusInfo & {
  __typename: "SupportingDocumentWaitingForUploadStatusInfo";
  /** When the document is not uploaded yet */
  status: SupportingDocumentStatus;
  /** Info to upload the document : url and fields to add along file in form (POST) */
  upload: SupportingDocumentUploadInfo;
};

/** Define a reason with a message and a specific type for suspend account action */
export type SuspendAccountReason = Reason & {
  __typename: "SuspendAccountReason";
  message?: Maybe<Scalars["String"]["output"]>;
  type: SuspendAccountReasonType;
};

/** Input version */
export type SuspendAccountReasonInput = {
  message?: InputMaybe<Scalars["String"]["input"]>;
  type: SuspendAccountReasonType;
};

/** Specific type for suspend account action */
export type SuspendAccountReasonType =
  /** Simple suspend request */
  "SuspendRequested";

/** SuspendAccountStatusReason */
export type SuspendAccountStatusReason = SuspendAccountReason;

/** SuspendedMerchantPaymentMethodStatusInfo */
export type SuspendedMerchantPaymentMethodStatusInfo = MerchantPaymentMethodStatusInfo & {
  __typename: "SuspendedMerchantPaymentMethodStatusInfo";
  status: MerchantPaymentMethodStatus;
  /** Merchant Payment Method suspended date */
  suspendedAt: Scalars["Date"]["output"];
};

/** SuspendedMerchantProfileStatusInfo */
export type SuspendedMerchantProfileStatusInfo = MerchantProfileStatusInfo & {
  __typename: "SuspendedMerchantProfileStatusInfo";
  status: MerchantProfileStatus;
  suspendedAt: Scalars["Date"]["output"];
};

/** Individual ultimate beneficial owner title (Mr/Ms) */
export type TitleEnum =
  /** Identified as a man */
  | "Mr"
  /** Identified as a woman */
  | "Ms";

/** Rejection returned if too many items are given */
export type TooManyItemsRejection = Rejection & {
  __typename: "TooManyItemsRejection";
  message: Scalars["String"]["output"];
};

/** Rejection returned if the transaction was not found */
export type TransactionNotFoundRejection = Rejection & {
  __typename: "TransactionNotFoundRejection";
  message: Scalars["String"]["output"];
  transactionId: Scalars["ID"]["output"];
};

/** Quality of the account holder doing the onboarding */
export type TypeOfRepresentation =
  /** The account holder is the legal representative */
  | "LegalRepresentative"
  /** The account holder has a power of attorney */
  | "PowerOfAttorney";

/** Ultimate beneficial Direct Owner company info. */
export type UltimateBeneficialDirectOwnerCompanyInfo = UltimateBeneficialOwnerInfo & {
  __typename: "UltimateBeneficialDirectOwnerCompanyInfo";
  /** Ultimate Beneficial Owner Unique Identifier . */
  id: Scalars["ID"]["output"];
  /** Name of the company. */
  name: Scalars["String"]["output"];
  /** Shares ratio of the parent company. Example: 50 if the share ratio is 50%. */
  parentCompanyShareRatio: Scalars["Float"]["output"];
  /** Registration number. */
  registrationNumber: Scalars["String"]["output"];
  /** Ultimate beneficial Direct Owner Company type. */
  type: UltimateBeneficialOwnerType;
};

/** Ultimate beneficial Direct Owner individual info. */
export type UltimateBeneficialDirectOwnerIndividualInfo = UltimateBeneficialOwnerInfo & {
  __typename: "UltimateBeneficialDirectOwnerIndividualInfo";
  /** Birth date. */
  birthDate: Scalars["Date"]["output"];
  /** First name. */
  firstName: Scalars["String"]["output"];
  /** Ultimate Beneficial Owner Unique Identifier . */
  id: Scalars["ID"]["output"];
  /** Last name. */
  lastName: Scalars["String"]["output"];
  /** Shares ratio of the parent company. Example: 50 if the share ratio is 50%. */
  parentCompanyShareRatio: Scalars["Float"]["output"];
  /** Ultimate beneficial Direct owner Individual type . */
  type: UltimateBeneficialOwnerType;
};

/** Ultimate beneficial owner company info. */
export type UltimateBeneficialIndirectOwnerCompanyInfo = UltimateBeneficialOwnerInfo & {
  __typename: "UltimateBeneficialIndirectOwnerCompanyInfo";
  /** Ultimate Beneficial Owner Unique Identifier . */
  id: Scalars["ID"]["output"];
  /** Name of the company. */
  name: Scalars["String"]["output"];
  /** Unique Reference of the Parent Company. */
  parentCompanyReference: Scalars["String"]["output"];
  /** Shares ratio of the parent company. Example: 50 if the share ratio is 50%. */
  parentCompanyShareRatio: Scalars["Float"]["output"];
  /** Registration number. */
  registrationNumber: Scalars["String"]["output"];
  /** Ultimate beneficial Indirect Owner Company type. */
  type: UltimateBeneficialOwnerType;
};

/** Ultimate beneficial Indirect Owner individual info. */
export type UltimateBeneficialIndirectOwnerIndividualInfo = UltimateBeneficialOwnerInfo & {
  __typename: "UltimateBeneficialIndirectOwnerIndividualInfo";
  /** Birth date. */
  birthDate: Scalars["Date"]["output"];
  /** First name. */
  firstName: Scalars["String"]["output"];
  /** Ultimate Beneficial Owner Unique Identifier. */
  id: Scalars["ID"]["output"];
  /** Last name. */
  lastName: Scalars["String"]["output"];
  /** Unique Reference of the Parent Company. */
  parentCompanyReference: Scalars["String"]["output"];
  /** Shares ratio of the parent company. Example: 50 if the share ratio is 50%. */
  parentCompanyShareRatio: Scalars["Float"]["output"];
  /** Ultimate beneficial Indirect Owner Individual type . */
  type: UltimateBeneficialOwnerType;
};

/** The Ultimate Beneficial Owner could be for an Individual or a Company and these can Direct or Indirect */
export type UltimateBeneficialOwnerInfo = {
  /** Ultimate Beneficial Owner Unique Identifier . */
  id: Scalars["ID"]["output"];
  /** Shares ratio of the parent company. Example: 50 if the share ratio is 50%. */
  parentCompanyShareRatio: Scalars["Float"]["output"];
  /** Ultimate beneficial owner type. */
  type: UltimateBeneficialOwnerType;
};

/** Ultimate Beneficial Owner type. */
export type UltimateBeneficialOwnerType =
  /** Direct Company Owner (Legal person). */
  | "DirectCompany"
  /** Direct Individual Owner (Natural person) . */
  | "DirectIndividual"
  /** Indirect Company Owner (Legal person). */
  | "IndirectCompany"
  /** Indirect Individual Owner (Natural person). */
  | "IndirectIndividual";

export type UnauthenticatedOnboardPublicCompanyAccountHolderInput = {
  accountCountry?: InputMaybe<AccountCountry>;
  projectId: Scalars["ID"]["input"];
  verificationFlow?: VerificationFlow;
};

export type UnauthenticatedOnboardPublicCompanyAccountHolderPayload =
  | PublicOnboardingDisabledRejection
  | UnauthenticatedOnboardPublicCompanyAccountHolderSuccessPayload
  | ValidationRejection;

export type UnauthenticatedOnboardPublicCompanyAccountHolderSuccessPayload = {
  __typename: "UnauthenticatedOnboardPublicCompanyAccountHolderSuccessPayload";
  onboarding: OnboardingInfo;
};

export type UnauthenticatedOnboardPublicIndividualAccountHolderInput = {
  accountCountry?: InputMaybe<AccountCountry>;
  projectId: Scalars["ID"]["input"];
  verificationFlow?: VerificationFlow;
};

export type UnauthenticatedOnboardPublicIndividualAccountHolderPayload =
  | PublicOnboardingDisabledRejection
  | UnauthenticatedOnboardPublicIndividualAccountHolderSuccessPayload
  | ValidationRejection;

export type UnauthenticatedOnboardPublicIndividualAccountHolderSuccessPayload = {
  __typename: "UnauthenticatedOnboardPublicIndividualAccountHolderSuccessPayload";
  onboarding: OnboardingInfo;
};

export type UnauthenticatedUpdateCompanyOnboardingInput = {
  accountCountry?: InputMaybe<AccountCountry>;
  accountName?: InputMaybe<Scalars["String"]["input"]>;
  businessActivity?: InputMaybe<BusinessActivity>;
  businessActivityDescription?: InputMaybe<Scalars["String"]["input"]>;
  companyType?: InputMaybe<CompanyType>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  individualUltimateBeneficialOwners?: InputMaybe<Array<IndividualUltimateBeneficialOwnerInput>>;
  isRegistered?: InputMaybe<Scalars["Boolean"]["input"]>;
  language?: InputMaybe<Scalars["String"]["input"]>;
  legalRepresentativePersonalAddress?: InputMaybe<AddressInformationInput>;
  monthlyPaymentVolume?: InputMaybe<MonthlyPaymentVolume>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  onboardingId: Scalars["ID"]["input"];
  registrationNumber?: InputMaybe<Scalars["String"]["input"]>;
  residencyAddress?: InputMaybe<ResidencyAddressInput>;
  taxIdentificationNumber?: InputMaybe<Scalars["String"]["input"]>;
  typeOfRepresentation?: InputMaybe<TypeOfRepresentation>;
  vatNumber?: InputMaybe<Scalars["String"]["input"]>;
};

export type UnauthenticatedUpdateCompanyOnboardingPayload =
  | ForbiddenRejection
  | InternalErrorRejection
  | UnauthenticatedUpdateCompanyOnboardingSuccessPayload
  | ValidationRejection;

export type UnauthenticatedUpdateCompanyOnboardingSuccessPayload = {
  __typename: "UnauthenticatedUpdateCompanyOnboardingSuccessPayload";
  onboarding: OnboardingInfo;
};

export type UnauthenticatedUpdateIndividualOnboardingInput = {
  accountCountry?: InputMaybe<AccountCountry>;
  accountName?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  employmentStatus?: InputMaybe<EmploymentStatus>;
  language?: InputMaybe<Scalars["String"]["input"]>;
  monthlyIncome?: InputMaybe<MonthlyIncome>;
  onboardingId: Scalars["ID"]["input"];
  residencyAddress?: InputMaybe<ResidencyAddressInput>;
  taxIdentificationNumber?: InputMaybe<Scalars["String"]["input"]>;
};

export type UnauthenticatedUpdateIndividualOnboardingPayload =
  | ForbiddenRejection
  | InternalErrorRejection
  | UnauthenticatedUpdateIndividualOnboardingSuccessPayload
  | ValidationRejection;

export type UnauthenticatedUpdateIndividualOnboardingSuccessPayload = {
  __typename: "UnauthenticatedUpdateIndividualOnboardingSuccessPayload";
  onboarding: OnboardingInfo;
};

/** The User is the unique user, natural person, of the Swan app. */
export type User = {
  __typename: "User";
  /** The list of account memberships */
  accountMemberships: AccountMembershipConnection;
  /** list of first names */
  allFirstNames?: Maybe<Array<Scalars["String"]["output"]>>;
  /** the methods used to authenticate this user */
  authenticators?: Maybe<Array<Authenticator>>;
  /** birth date */
  birthDate?: Maybe<Scalars["Date"]["output"]>;
  /** Creation date of the user */
  createdAt: Scalars["DateTime"]["output"];
  /** first name */
  firstName?: Maybe<Scalars["String"]["output"]>;
  /** unique identifier of the user */
  id: Scalars["ID"]["output"];
  /** `true` if Swan has verified the user's identity */
  idVerified: Scalars["Boolean"]["output"];
  /**
   * List of identification levels available for the user.
   *
   * Whenever TRUE, it means the identification was successful for the associated level.
   */
  identificationLevels?: Maybe<IdentificationLevels>;
  /**
   * Identification status
   *
   * Each attempt to go through our identity verification process will update this value.
   *
   * This field is only available for the current user.
   */
  identificationStatus?: Maybe<IdentificationStatus>;
  /** last name */
  lastName?: Maybe<Scalars["String"]["output"]>;
  /** mobile phone number with the international format (Example: +33689788967) */
  mobilePhoneNumber?: Maybe<Scalars["PhoneNumber"]["output"]>;
  /** nationality */
  nationalityCCA3?: Maybe<Scalars["CCA3"]["output"]>;
  /**
   * Preferred notification channel
   *
   * When it is "null" it means that the preferences have not been updated. Default SMS in use
   */
  preferredNotificationChannel?: Maybe<PreferredNotificationChannel>;
  /** Last update date of the user */
  updatedAt: Scalars["DateTime"]["output"];
};

/** The User is the unique user, natural person, of the Swan app. */
export type UserAccountMembershipsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filters?: InputMaybe<AccountMembershipsFilterInput>;
  first?: Scalars["Int"]["input"];
};

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type UserConnection = Connection & {
  __typename: "UserConnection";
  /** UserEdge list */
  edges: Array<UserEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars["Int"]["output"];
};

/** Implements the Relay Edge interface */
export type UserEdge = Edge & {
  __typename: "UserEdge";
  /** Opaque identifier pointing to this consent node in the pagination mechanism */
  cursor: Scalars["String"]["output"];
  /** The consent */
  node: User;
};

export type UserNotAllowedToDisableItsOwnAccountMembershipRejection = Rejection & {
  __typename: "UserNotAllowedToDisableItsOwnAccountMembershipRejection";
  accountMembershipId: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

/** Rejection returned if a identity does not have enough permission to manage account membership */
export type UserNotAllowedToManageAccountMembershipRejection = Rejection & {
  __typename: "UserNotAllowedToManageAccountMembershipRejection";
  message: Scalars["String"]["output"];
};

export type UserNotAllowedToSuspendItsOwnAccountMembershipRejection = Rejection & {
  __typename: "UserNotAllowedToSuspendItsOwnAccountMembershipRejection";
  accountMembershipId: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

/** Rejection returned when the User is not the Card Holder */
export type UserNotCardHolderRejection = Rejection & {
  __typename: "UserNotCardHolderRejection";
  message: Scalars["String"]["output"];
};

/** A detail of a validation error : what field is errored and why */
export type ValidationError = {
  __typename: "ValidationError";
  /** Constraints that are not matched on the Onboarding property */
  errors?: Maybe<Array<FieldValidationError>>;
  /** Onboarding property that is not matching requirements to allow a finalization */
  field: Scalars["String"]["output"];
};

export type ValidationFieldError = {
  __typename: "ValidationFieldError";
  code: ValidationFieldErrorCode;
  message: Scalars["String"]["output"];
  path: Array<Scalars["String"]["output"]>;
};

export type ValidationFieldErrorCode =
  | "InvalidString"
  | "InvalidType"
  | "TooLong"
  | "TooShort"
  | "UnrecognizedKeys";

/** Rejection returned if an input contains invalid data */
export type ValidationRejection = Rejection & {
  __typename: "ValidationRejection";
  fields: Array<ValidationFieldError>;
  message: Scalars["String"]["output"];
};

/** Verification Flow. */
export type VerificationFlow =
  /** When you ask the account holder the minimum required to comply the law at the beginning of the relationship. */
  | "Progressive"
  /** When you ask the account holder to start the verification process at the beginning of the relationship to get an unlimited account. */
  | "Upfront";

/** Verification status of an account holder */
export type VerificationStatus =
  /** When the account holder has not started to answer the verification process. */
  | "NotStarted"
  /** When the verification process is pending. */
  | "Pending"
  /** When the account holder is refused. */
  | "Refused"
  /** When the account holder is verified. */
  | "Verified"
  /** When Swan is waiting for information about the account holder to continue the verification process. */
  | "WaitingForInformation";

/** Virtual IBAN can be used by the account holder to receive SCT (Sepa Credit Transfer) or to be debited by SDD (Sepa Direct Debit). */
export type VirtualIbanEntry = {
  __typename: "VirtualIBANEntry";
  /** Bank Identifier Code */
  BIC: Scalars["BIC"]["output"];
  /** International Bank Account Number */
  IBAN: Scalars["IBAN"]["output"];
  /** `true` if the Virtual IBAN refuses all Sepa Direct Debit received */
  blockSDD: Scalars["Boolean"]["output"];
  /** Unique identifier of a Virtual IBAN entry */
  id: Scalars["ID"]["output"];
  /** Label (could be used to identify) */
  label?: Maybe<Scalars["String"]["output"]>;
  /** Status of the Iban */
  status: IbanStatus;
};

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type VirtualIbanEntryConnection = Connection & {
  __typename: "VirtualIBANEntryConnection";
  /** VirtualIBANEntryEdge list */
  edges: Array<VirtualIbanEntryEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars["Int"]["output"];
};

/** Implements the Relay Edge interface */
export type VirtualIbanEntryEdge = Edge & {
  __typename: "VirtualIBANEntryEdge";
  /** Opaque identifier pointing to this node in the pagination mechanism */
  cursor: Scalars["String"]["output"];
  /** The virtual iban entry */
  node: VirtualIbanEntry;
};

/** Wallet Provider (ApplePay, GooglePay ...) */
export type WalletProvider = {
  __typename: "WalletProvider";
  /** id of the Wallet Provider */
  id: Scalars["String"]["output"];
  /** name of the Wallet Provider (Apple / Google / Amazon or Unknown) */
  name: Scalars["String"]["output"];
};

export type WebBankingSettings = {
  __typename: "WebBankingSettings";
  canAddNewMembers?: Maybe<Scalars["Boolean"]["output"]>;
  canInitiatePaymentsToNewBeneficiaries?: Maybe<Scalars["Boolean"]["output"]>;
  canManageVirtualIbans?: Maybe<Scalars["Boolean"]["output"]>;
  canOrderPhysicalCards?: Maybe<Scalars["Boolean"]["output"]>;
  canOrderVirtualCards?: Maybe<Scalars["Boolean"]["output"]>;
  canViewAccountDetails?: Maybe<Scalars["Boolean"]["output"]>;
  canViewAccountStatement?: Maybe<Scalars["Boolean"]["output"]>;
  canViewMembers?: Maybe<Scalars["Boolean"]["output"]>;
  canViewPaymentList?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ProjectLoginPageQueryVariables = Exact<{
  projectId: Scalars["ID"]["input"];
}>;

export type ProjectLoginPageQuery = {
  __typename: "Query";
  projectInfoById: {
    __typename: "ProjectInfo";
    id: string;
    accentColor?: string | null;
    name: string;
    logoUri?: string | null;
  };
};

export const ProjectLoginPageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ProjectLoginPage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "projectId" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "projectInfoById" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "projectId" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "accentColor" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "logoUri" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProjectLoginPageQuery, ProjectLoginPageQueryVariables>;
export type WithTypename<T extends { __typename?: any }> = Partial<T> & {
  __typename: NonNullable<T["__typename"]>;
};

export type GraphCacheKeysConfig = {
  Account?: (data: WithTypename<Account>) => null | string;
  AccountClosedStatus?: (data: WithTypename<AccountClosedStatus>) => null | string;
  AccountClosingStatus?: (data: WithTypename<AccountClosingStatus>) => null | string;
  AccountConnection?: (data: WithTypename<AccountConnection>) => null | string;
  AccountEdge?: (data: WithTypename<AccountEdge>) => null | string;
  AccountHolder?: (data: WithTypename<AccountHolder>) => null | string;
  AccountHolderCanceledStatusInfo?: (
    data: WithTypename<AccountHolderCanceledStatusInfo>,
  ) => null | string;
  AccountHolderCompanyInfo?: (data: WithTypename<AccountHolderCompanyInfo>) => null | string;
  AccountHolderConnection?: (data: WithTypename<AccountHolderConnection>) => null | string;
  AccountHolderEdge?: (data: WithTypename<AccountHolderEdge>) => null | string;
  AccountHolderEnabledStatusInfo?: (
    data: WithTypename<AccountHolderEnabledStatusInfo>,
  ) => null | string;
  AccountHolderIndividualInfo?: (data: WithTypename<AccountHolderIndividualInfo>) => null | string;
  AccountHolderNotFoundRejection?: (
    data: WithTypename<AccountHolderNotFoundRejection>,
  ) => null | string;
  AccountHolderSuspendedStatusInfo?: (
    data: WithTypename<AccountHolderSuspendedStatusInfo>,
  ) => null | string;
  AccountMembership?: (data: WithTypename<AccountMembership>) => null | string;
  AccountMembershipBindingUserErrorStatusInfo?: (
    data: WithTypename<AccountMembershipBindingUserErrorStatusInfo>,
  ) => null | string;
  AccountMembershipCannotBeDisabledRejection?: (
    data: WithTypename<AccountMembershipCannotBeDisabledRejection>,
  ) => null | string;
  AccountMembershipCannotBeUpdatedRejection?: (
    data: WithTypename<AccountMembershipCannotBeUpdatedRejection>,
  ) => null | string;
  AccountMembershipConnection?: (data: WithTypename<AccountMembershipConnection>) => null | string;
  AccountMembershipConsentPendingStatusInfo?: (
    data: WithTypename<AccountMembershipConsentPendingStatusInfo>,
  ) => null | string;
  AccountMembershipDisabledStatusInfo?: (
    data: WithTypename<AccountMembershipDisabledStatusInfo>,
  ) => null | string;
  AccountMembershipEdge?: (data: WithTypename<AccountMembershipEdge>) => null | string;
  AccountMembershipEnabledStatusInfo?: (
    data: WithTypename<AccountMembershipEnabledStatusInfo>,
  ) => null | string;
  AccountMembershipInvitationSentStatusInfo?: (
    data: WithTypename<AccountMembershipInvitationSentStatusInfo>,
  ) => null | string;
  AccountMembershipNotAllowedRejection?: (
    data: WithTypename<AccountMembershipNotAllowedRejection>,
  ) => null | string;
  AccountMembershipNotFoundRejection?: (
    data: WithTypename<AccountMembershipNotFoundRejection>,
  ) => null | string;
  AccountMembershipNotReadyToBeBoundRejection?: (
    data: WithTypename<AccountMembershipNotReadyToBeBoundRejection>,
  ) => null | string;
  AccountMembershipSuspendedStatusInfo?: (
    data: WithTypename<AccountMembershipSuspendedStatusInfo>,
  ) => null | string;
  AccountNotFoundRejection?: (data: WithTypename<AccountNotFoundRejection>) => null | string;
  AccountOpenedStatus?: (data: WithTypename<AccountOpenedStatus>) => null | string;
  AccountSuspendedStatus?: (data: WithTypename<AccountSuspendedStatus>) => null | string;
  ActiveMerchantPaymentLinkStatusInfo?: (
    data: WithTypename<ActiveMerchantPaymentLinkStatusInfo>,
  ) => null | string;
  AddingCardsToDifferentAccountsRejection?: (
    data: WithTypename<AddingCardsToDifferentAccountsRejection>,
  ) => null | string;
  Address?: (data: WithTypename<Address>) => null | string;
  AddressInfo?: (data: WithTypename<AddressInfo>) => null | string;
  AddressInformation?: (data: WithTypename<AddressInformation>) => null | string;
  AlreadyValidPhysicalCardRejection?: (
    data: WithTypename<AlreadyValidPhysicalCardRejection>,
  ) => null | string;
  Amount?: (data: WithTypename<Amount>) => null | string;
  ApplePayNotAllowedForProjectRejection?: (
    data: WithTypename<ApplePayNotAllowedForProjectRejection>,
  ) => null | string;
  ApprovedFundingLimit?: (data: WithTypename<ApprovedFundingLimit>) => null | string;
  Authenticator?: (data: WithTypename<Authenticator>) => null | string;
  BadAccountStatusRejection?: (data: WithTypename<BadAccountStatusRejection>) => null | string;
  BadRequestRejection?: (data: WithTypename<BadRequestRejection>) => null | string;
  CanceledMerchantPaymentLinkStatusInfo?: (
    data: WithTypename<CanceledMerchantPaymentLinkStatusInfo>,
  ) => null | string;
  CanceledMerchantPaymentMethodStatusInfo?: (
    data: WithTypename<CanceledMerchantPaymentMethodStatusInfo>,
  ) => null | string;
  CanceledMerchantProfileStatusInfo?: (
    data: WithTypename<CanceledMerchantProfileStatusInfo>,
  ) => null | string;
  CannotActivatePhysicalCardRejection?: (
    data: WithTypename<CannotActivatePhysicalCardRejection>,
  ) => null | string;
  Card?: (data: WithTypename<Card>) => null | string;
  CardCanNotBeDigitalizedRejection?: (
    data: WithTypename<CardCanNotBeDigitalizedRejection>,
  ) => null | string;
  CardCanceledStatusInfo?: (data: WithTypename<CardCanceledStatusInfo>) => null | string;
  CardCancelingStatusInfo?: (data: WithTypename<CardCancelingStatusInfo>) => null | string;
  CardConnection?: (data: WithTypename<CardConnection>) => null | string;
  CardConsentPendingStatusInfo?: (
    data: WithTypename<CardConsentPendingStatusInfo>,
  ) => null | string;
  CardDesignBackground?: (data: WithTypename<CardDesignBackground>) => null | string;
  CardEdge?: (data: WithTypename<CardEdge>) => null | string;
  CardEnabledStatusInfo?: (data: WithTypename<CardEnabledStatusInfo>) => null | string;
  CardInfo?: (data: WithTypename<CardInfo>) => null | string;
  CardInfos?: (data: WithTypename<CardInfos>) => null | string;
  CardNotFoundRejection?: (data: WithTypename<CardNotFoundRejection>) => null | string;
  CardPINInfos?: (data: WithTypename<CardPinInfos>) => null | string;
  CardProcessingStatusInfo?: (data: WithTypename<CardProcessingStatusInfo>) => null | string;
  CardProduct?: (data: WithTypename<CardProduct>) => null | string;
  CardProductDesign?: (data: WithTypename<CardProductDesign>) => null | string;
  CardProductDisabledRejection?: (
    data: WithTypename<CardProductDisabledRejection>,
  ) => null | string;
  CardProductNotApplicableToPhysicalCardsRejection?: (
    data: WithTypename<CardProductNotApplicableToPhysicalCardsRejection>,
  ) => null | string;
  CardProductNotFoundRejection?: (
    data: WithTypename<CardProductNotFoundRejection>,
  ) => null | string;
  CardProductSuspendedRejection?: (
    data: WithTypename<CardProductSuspendedRejection>,
  ) => null | string;
  CardProductUsedRejection?: (data: WithTypename<CardProductUsedRejection>) => null | string;
  CardSettings?: (data: WithTypename<CardSettings>) => null | string;
  CardSettingsBackground?: (data: WithTypename<CardSettingsBackground>) => null | string;
  CardWrongStatusRejection?: (data: WithTypename<CardWrongStatusRejection>) => null | string;
  CheckMerchantPaymentMethod?: (data: WithTypename<CheckMerchantPaymentMethod>) => null | string;
  CloseAccountReason?: (data: WithTypename<CloseAccountReason>) => null | string;
  CompanyInfo?: (data: WithTypename<CompanyInfo>) => null | string;
  CompanyInfoBySirenSuccessPayload?: (
    data: WithTypename<CompanyInfoBySirenSuccessPayload>,
  ) => null | string;
  CompanyUboByCompanyRefAndHeadquarterCountryPayload?: (
    data: WithTypename<CompanyUboByCompanyRefAndHeadquarterCountryPayload>,
  ) => null | string;
  CompleteDigitalCard?: (data: WithTypename<CompleteDigitalCard>) => null | string;
  CompletedMerchantPaymentLinkStatusInfo?: (
    data: WithTypename<CompletedMerchantPaymentLinkStatusInfo>,
  ) => null | string;
  Consent?: (data: WithTypename<Consent>) => null | string;
  ConsentConnection?: (data: WithTypename<ConsentConnection>) => null | string;
  ConsentEdge?: (data: WithTypename<ConsentEdge>) => null | string;
  Customer?: (data: WithTypename<Customer>) => null | string;
  DebtorAccountClosedRejection?: (
    data: WithTypename<DebtorAccountClosedRejection>,
  ) => null | string;
  DebtorAccountNotAllowedRejection?: (
    data: WithTypename<DebtorAccountNotAllowedRejection>,
  ) => null | string;
  Device?: (data: WithTypename<Device>) => null | string;
  DigitalCardCanceledStatusInfo?: (
    data: WithTypename<DigitalCardCanceledStatusInfo>,
  ) => null | string;
  DigitalCardConnection?: (data: WithTypename<DigitalCardConnection>) => null | string;
  DigitalCardConsentPendingStatusInfo?: (
    data: WithTypename<DigitalCardConsentPendingStatusInfo>,
  ) => null | string;
  DigitalCardDeclinedStatusInfo?: (
    data: WithTypename<DigitalCardDeclinedStatusInfo>,
  ) => null | string;
  DigitalCardEdge?: (data: WithTypename<DigitalCardEdge>) => null | string;
  DigitalCardEnabledStatusInfo?: (
    data: WithTypename<DigitalCardEnabledStatusInfo>,
  ) => null | string;
  DigitalCardNotFoundRejection?: (
    data: WithTypename<DigitalCardNotFoundRejection>,
  ) => null | string;
  DigitalCardPendingStatusInfo?: (
    data: WithTypename<DigitalCardPendingStatusInfo>,
  ) => null | string;
  DigitalCardSuspendedStatusInfo?: (
    data: WithTypename<DigitalCardSuspendedStatusInfo>,
  ) => null | string;
  DisabledMerchantPaymentMethodStatusInfo?: (
    data: WithTypename<DisabledMerchantPaymentMethodStatusInfo>,
  ) => null | string;
  EnabledCardDesignNotFoundRejection?: (
    data: WithTypename<EnabledCardDesignNotFoundRejection>,
  ) => null | string;
  EnabledMerchantPaymentMethodStatusInfo?: (
    data: WithTypename<EnabledMerchantPaymentMethodStatusInfo>,
  ) => null | string;
  EnabledMerchantProfileStatusInfo?: (
    data: WithTypename<EnabledMerchantProfileStatusInfo>,
  ) => null | string;
  ExpiredMerchantPaymentLinkStatusInfo?: (
    data: WithTypename<ExpiredMerchantPaymentLinkStatusInfo>,
  ) => null | string;
  ExternalAccountAlreadyExistsRejection?: (
    data: WithTypename<ExternalAccountAlreadyExistsRejection>,
  ) => null | string;
  ForbiddenRejection?: (data: WithTypename<ForbiddenRejection>) => null | string;
  FundingLimitAmount?: (data: WithTypename<FundingLimitAmount>) => null | string;
  FundingLimitSettingsChangeRequest?: (
    data: WithTypename<FundingLimitSettingsChangeRequest>,
  ) => null | string;
  FundingLimitSettingsChangeRequestApprovedStatusInfo?: (
    data: WithTypename<FundingLimitSettingsChangeRequestApprovedStatusInfo>,
  ) => null | string;
  FundingLimitSettingsChangeRequestConnection?: (
    data: WithTypename<FundingLimitSettingsChangeRequestConnection>,
  ) => null | string;
  FundingLimitSettingsChangeRequestEdge?: (
    data: WithTypename<FundingLimitSettingsChangeRequestEdge>,
  ) => null | string;
  FundingLimitSettingsChangeRequestPendingStatusInfo?: (
    data: WithTypename<FundingLimitSettingsChangeRequestPendingStatusInfo>,
  ) => null | string;
  FundingLimitSettingsChangeRequestRefusedStatusInfo?: (
    data: WithTypename<FundingLimitSettingsChangeRequestRefusedStatusInfo>,
  ) => null | string;
  FundingLimitSettingsChangeRequestWaitingForInformationStatusInfo?: (
    data: WithTypename<FundingLimitSettingsChangeRequestWaitingForInformationStatusInfo>,
  ) => null | string;
  GenerateSupportingDocumentUploadUrlSuccessPayload?: (
    data: WithTypename<GenerateSupportingDocumentUploadUrlSuccessPayload>,
  ) => null | string;
  Headquarters?: (data: WithTypename<Headquarters>) => null | string;
  IBANNotReachableRejection?: (data: WithTypename<IbanNotReachableRejection>) => null | string;
  IBANNotValidRejection?: (data: WithTypename<IbanNotValidRejection>) => null | string;
  IbanValidationRejection?: (data: WithTypename<IbanValidationRejection>) => null | string;
  IdentificationLevels?: (data: WithTypename<IdentificationLevels>) => null | string;
  IdentityAlreadyBindToAccountMembershipRejection?: (
    data: WithTypename<IdentityAlreadyBindToAccountMembershipRejection>,
  ) => null | string;
  InAppProvisioningData?: (data: WithTypename<InAppProvisioningData>) => null | string;
  IndividualUltimateBeneficialOwner?: (
    data: WithTypename<IndividualUltimateBeneficialOwner>,
  ) => null | string;
  IndividualUltimateBeneficialOwnerTypeHasCapital?: (
    data: WithTypename<IndividualUltimateBeneficialOwnerTypeHasCapital>,
  ) => null | string;
  IndividualUltimateBeneficialOwnerTypeLegalRepresentative?: (
    data: WithTypename<IndividualUltimateBeneficialOwnerTypeLegalRepresentative>,
  ) => null | string;
  IndividualUltimateBeneficialOwnerTypeOther?: (
    data: WithTypename<IndividualUltimateBeneficialOwnerTypeOther>,
  ) => null | string;
  InternalDirectDebitB2BMerchantPaymentMethod?: (
    data: WithTypename<InternalDirectDebitB2BMerchantPaymentMethod>,
  ) => null | string;
  InternalDirectDebitStandardMerchantPaymentMethod?: (
    data: WithTypename<InternalDirectDebitStandardMerchantPaymentMethod>,
  ) => null | string;
  InternalErrorRejection?: (data: WithTypename<InternalErrorRejection>) => null | string;
  InvalidArgumentRejection?: (data: WithTypename<InvalidArgumentRejection>) => null | string;
  InvalidArgumentRejectionField?: (
    data: WithTypename<InvalidArgumentRejectionField>,
  ) => null | string;
  InvalidPhoneNumberRejection?: (data: WithTypename<InvalidPhoneNumberRejection>) => null | string;
  InvalidSirenNumberRejection?: (data: WithTypename<InvalidSirenNumberRejection>) => null | string;
  LegalRepresentativeAccountMembershipCannotBeDisabledRejection?: (
    data: WithTypename<LegalRepresentativeAccountMembershipCannotBeDisabledRejection>,
  ) => null | string;
  LegalRepresentativeAccountMembershipCannotBeSuspendedRejection?: (
    data: WithTypename<LegalRepresentativeAccountMembershipCannotBeSuspendedRejection>,
  ) => null | string;
  MaskedCardInfo?: (data: WithTypename<MaskedCardInfo>) => null | string;
  MerchantPaymentLink?: (data: WithTypename<MerchantPaymentLink>) => null | string;
  MerchantPaymentMethodNotActiveRejection?: (
    data: WithTypename<MerchantPaymentMethodNotActiveRejection>,
  ) => null | string;
  MerchantProfile?: (data: WithTypename<MerchantProfile>) => null | string;
  MerchantProfileWrongStatusRejection?: (
    data: WithTypename<MerchantProfileWrongStatusRejection>,
  ) => null | string;
  MissingMandatoryFieldRejection?: (
    data: WithTypename<MissingMandatoryFieldRejection>,
  ) => null | string;
  NotFoundRejection?: (data: WithTypename<NotFoundRejection>) => null | string;
  NotReachableConsentStatusRejection?: (
    data: WithTypename<NotReachableConsentStatusRejection>,
  ) => null | string;
  NotSupportedCountryRejection?: (
    data: WithTypename<NotSupportedCountryRejection>,
  ) => null | string;
  OAuthRedirectParameters?: (data: WithTypename<OAuthRedirectParameters>) => null | string;
  Onboarding?: (data: WithTypename<Onboarding>) => null | string;
  OnboardingCompanyAccountHolderInfo?: (
    data: WithTypename<OnboardingCompanyAccountHolderInfo>,
  ) => null | string;
  OnboardingConnection?: (data: WithTypename<OnboardingConnection>) => null | string;
  OnboardingEdge?: (data: WithTypename<OnboardingEdge>) => null | string;
  OnboardingFinalizedStatusInfo?: (
    data: WithTypename<OnboardingFinalizedStatusInfo>,
  ) => null | string;
  OnboardingIndividualAccountHolderInfo?: (
    data: WithTypename<OnboardingIndividualAccountHolderInfo>,
  ) => null | string;
  OnboardingInfo?: (data: WithTypename<OnboardingInfo>) => null | string;
  OnboardingInvalidStatusInfo?: (data: WithTypename<OnboardingInvalidStatusInfo>) => null | string;
  OnboardingNotCompletedRejection?: (
    data: WithTypename<OnboardingNotCompletedRejection>,
  ) => null | string;
  OnboardingValidStatusInfo?: (data: WithTypename<OnboardingValidStatusInfo>) => null | string;
  PageInfo?: (data: WithTypename<PageInfo>) => null | string;
  PartnershipAcceptedStatusInfo?: (
    data: WithTypename<PartnershipAcceptedStatusInfo>,
  ) => null | string;
  PartnershipCanceledStatusInfo?: (
    data: WithTypename<PartnershipCanceledStatusInfo>,
  ) => null | string;
  PartnershipCancelingStatusInfo?: (
    data: WithTypename<PartnershipCancelingStatusInfo>,
  ) => null | string;
  PaymentMandateReferenceAlreadyUsedRejection?: (
    data: WithTypename<PaymentMandateReferenceAlreadyUsedRejection>,
  ) => null | string;
  PaymentMethodNotCompatibleRejection?: (
    data: WithTypename<PaymentMethodNotCompatibleRejection>,
  ) => null | string;
  PendingDigitalCard?: (data: WithTypename<PendingDigitalCard>) => null | string;
  PendingMerchantPaymentMethodStatusInfo?: (
    data: WithTypename<PendingMerchantPaymentMethodStatusInfo>,
  ) => null | string;
  PendingReviewMerchantProfileStatusInfo?: (
    data: WithTypename<PendingReviewMerchantProfileStatusInfo>,
  ) => null | string;
  PermissionCannotBeGrantedRejection?: (
    data: WithTypename<PermissionCannotBeGrantedRejection>,
  ) => null | string;
  PhysicalCard?: (data: WithTypename<PhysicalCard>) => null | string;
  PhysicalCardActivatedStatusInfo?: (
    data: WithTypename<PhysicalCardActivatedStatusInfo>,
  ) => null | string;
  PhysicalCardCanceledStatusInfo?: (
    data: WithTypename<PhysicalCardCanceledStatusInfo>,
  ) => null | string;
  PhysicalCardCancelingStatusInfo?: (
    data: WithTypename<PhysicalCardCancelingStatusInfo>,
  ) => null | string;
  PhysicalCardConsentPendingStatusInfo?: (
    data: WithTypename<PhysicalCardConsentPendingStatusInfo>,
  ) => null | string;
  PhysicalCardCustomOptions?: (data: WithTypename<PhysicalCardCustomOptions>) => null | string;
  PhysicalCardNotFoundRejection?: (
    data: WithTypename<PhysicalCardNotFoundRejection>,
  ) => null | string;
  PhysicalCardProcessingStatusInfo?: (
    data: WithTypename<PhysicalCardProcessingStatusInfo>,
  ) => null | string;
  PhysicalCardRenewedStatusInfo?: (
    data: WithTypename<PhysicalCardRenewedStatusInfo>,
  ) => null | string;
  PhysicalCardSuspendedStatusInfo?: (
    data: WithTypename<PhysicalCardSuspendedStatusInfo>,
  ) => null | string;
  PhysicalCardToActivateStatusInfo?: (
    data: WithTypename<PhysicalCardToActivateStatusInfo>,
  ) => null | string;
  PhysicalCardWrongStatusRejection?: (
    data: WithTypename<PhysicalCardWrongStatusRejection>,
  ) => null | string;
  PreProvisioningSUVCardSettings?: (
    data: WithTypename<PreProvisioningSuvCardSettings>,
  ) => null | string;
  ProjectCardDesigns?: (data: WithTypename<ProjectCardDesigns>) => null | string;
  ProjectCardSettings?: (data: WithTypename<ProjectCardSettings>) => null | string;
  ProjectForbiddenRejection?: (data: WithTypename<ProjectForbiddenRejection>) => null | string;
  ProjectInfo?: (data: WithTypename<ProjectInfo>) => null | string;
  ProjectInvalidStatusRejection?: (
    data: WithTypename<ProjectInvalidStatusRejection>,
  ) => null | string;
  ProjectNotFound?: (data: WithTypename<ProjectNotFound>) => null | string;
  ProjectNotFoundRejection?: (data: WithTypename<ProjectNotFoundRejection>) => null | string;
  ProjectSettingsForbiddenError?: (
    data: WithTypename<ProjectSettingsForbiddenError>,
  ) => null | string;
  ProjectSettingsNotFound?: (data: WithTypename<ProjectSettingsNotFound>) => null | string;
  ProjectSettingsStatusNotReachable?: (
    data: WithTypename<ProjectSettingsStatusNotReachable>,
  ) => null | string;
  PublicOnboardingDisabledRejection?: (
    data: WithTypename<PublicOnboardingDisabledRejection>,
  ) => null | string;
  RejectedMerchantPaymentMethodStatusInfo?: (
    data: WithTypename<RejectedMerchantPaymentMethodStatusInfo>,
  ) => null | string;
  RejectedMerchantProfileStatusInfo?: (
    data: WithTypename<RejectedMerchantProfileStatusInfo>,
  ) => null | string;
  RequestMerchantProfileUpdate?: (
    data: WithTypename<RequestMerchantProfileUpdate>,
  ) => null | string;
  RestrictedTo?: (data: WithTypename<RestrictedTo>) => null | string;
  RestrictedToUserRejection?: (data: WithTypename<RestrictedToUserRejection>) => null | string;
  RollingReserve?: (data: WithTypename<RollingReserve>) => null | string;
  SchemeWrongRejection?: (data: WithTypename<SchemeWrongRejection>) => null | string;
  SepaDirectDebitB2BMerchantPaymentMethod?: (
    data: WithTypename<SepaDirectDebitB2BMerchantPaymentMethod>,
  ) => null | string;
  SepaDirectDebitCoreMerchantPaymentMethod?: (
    data: WithTypename<SepaDirectDebitCoreMerchantPaymentMethod>,
  ) => null | string;
  SpendingLimit?: (data: WithTypename<SpendingLimit>) => null | string;
  SupportingDocument?: (data: WithTypename<SupportingDocument>) => null | string;
  SupportingDocumentCollection?: (
    data: WithTypename<SupportingDocumentCollection>,
  ) => null | string;
  SupportingDocumentCollectionApprovedStatusInfo?: (
    data: WithTypename<SupportingDocumentCollectionApprovedStatusInfo>,
  ) => null | string;
  SupportingDocumentCollectionCanceledStatusInfo?: (
    data: WithTypename<SupportingDocumentCollectionCanceledStatusInfo>,
  ) => null | string;
  SupportingDocumentCollectionConnection?: (
    data: WithTypename<SupportingDocumentCollectionConnection>,
  ) => null | string;
  SupportingDocumentCollectionEdge?: (
    data: WithTypename<SupportingDocumentCollectionEdge>,
  ) => null | string;
  SupportingDocumentCollectionNotFoundRejection?: (
    data: WithTypename<SupportingDocumentCollectionNotFoundRejection>,
  ) => null | string;
  SupportingDocumentCollectionPendingReviewStatusInfo?: (
    data: WithTypename<SupportingDocumentCollectionPendingReviewStatusInfo>,
  ) => null | string;
  SupportingDocumentCollectionRejectedStatusInfo?: (
    data: WithTypename<SupportingDocumentCollectionRejectedStatusInfo>,
  ) => null | string;
  SupportingDocumentCollectionStatusDoesNotAllowDeletionRejection?: (
    data: WithTypename<SupportingDocumentCollectionStatusDoesNotAllowDeletionRejection>,
  ) => null | string;
  SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection?: (
    data: WithTypename<SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection>,
  ) => null | string;
  SupportingDocumentCollectionStatusNotAllowedRejection?: (
    data: WithTypename<SupportingDocumentCollectionStatusNotAllowedRejection>,
  ) => null | string;
  SupportingDocumentCollectionWaitingForDocumentStatusInfo?: (
    data: WithTypename<SupportingDocumentCollectionWaitingForDocumentStatusInfo>,
  ) => null | string;
  SupportingDocumentNotFoundRejection?: (
    data: WithTypename<SupportingDocumentNotFoundRejection>,
  ) => null | string;
  SupportingDocumentNotUploadedStatusInfo?: (
    data: WithTypename<SupportingDocumentNotUploadedStatusInfo>,
  ) => null | string;
  SupportingDocumentPostField?: (data: WithTypename<SupportingDocumentPostField>) => null | string;
  SupportingDocumentPurpose?: (data: WithTypename<SupportingDocumentPurpose>) => null | string;
  SupportingDocumentRefusedStatusInfo?: (
    data: WithTypename<SupportingDocumentRefusedStatusInfo>,
  ) => null | string;
  SupportingDocumentSettings?: (data: WithTypename<SupportingDocumentSettings>) => null | string;
  SupportingDocumentStatusDoesNotAllowDeletionRejection?: (
    data: WithTypename<SupportingDocumentStatusDoesNotAllowDeletionRejection>,
  ) => null | string;
  SupportingDocumentStatusDoesNotAllowUpdateRejection?: (
    data: WithTypename<SupportingDocumentStatusDoesNotAllowUpdateRejection>,
  ) => null | string;
  SupportingDocumentStatusNotAllowedRejection?: (
    data: WithTypename<SupportingDocumentStatusNotAllowedRejection>,
  ) => null | string;
  SupportingDocumentUploadInfo?: (
    data: WithTypename<SupportingDocumentUploadInfo>,
  ) => null | string;
  SupportingDocumentUploadNotAllowedRejection?: (
    data: WithTypename<SupportingDocumentUploadNotAllowedRejection>,
  ) => null | string;
  SupportingDocumentUploadedStatusInfo?: (
    data: WithTypename<SupportingDocumentUploadedStatusInfo>,
  ) => null | string;
  SupportingDocumentValidatedStatusInfo?: (
    data: WithTypename<SupportingDocumentValidatedStatusInfo>,
  ) => null | string;
  SupportingDocumentWaitingForUploadStatusInfo?: (
    data: WithTypename<SupportingDocumentWaitingForUploadStatusInfo>,
  ) => null | string;
  SuspendAccountReason?: (data: WithTypename<SuspendAccountReason>) => null | string;
  SuspendedMerchantPaymentMethodStatusInfo?: (
    data: WithTypename<SuspendedMerchantPaymentMethodStatusInfo>,
  ) => null | string;
  SuspendedMerchantProfileStatusInfo?: (
    data: WithTypename<SuspendedMerchantProfileStatusInfo>,
  ) => null | string;
  TooManyItemsRejection?: (data: WithTypename<TooManyItemsRejection>) => null | string;
  TransactionNotFoundRejection?: (
    data: WithTypename<TransactionNotFoundRejection>,
  ) => null | string;
  UltimateBeneficialDirectOwnerCompanyInfo?: (
    data: WithTypename<UltimateBeneficialDirectOwnerCompanyInfo>,
  ) => null | string;
  UltimateBeneficialDirectOwnerIndividualInfo?: (
    data: WithTypename<UltimateBeneficialDirectOwnerIndividualInfo>,
  ) => null | string;
  UltimateBeneficialIndirectOwnerCompanyInfo?: (
    data: WithTypename<UltimateBeneficialIndirectOwnerCompanyInfo>,
  ) => null | string;
  UltimateBeneficialIndirectOwnerIndividualInfo?: (
    data: WithTypename<UltimateBeneficialIndirectOwnerIndividualInfo>,
  ) => null | string;
  UnauthenticatedOnboardPublicCompanyAccountHolderSuccessPayload?: (
    data: WithTypename<UnauthenticatedOnboardPublicCompanyAccountHolderSuccessPayload>,
  ) => null | string;
  UnauthenticatedOnboardPublicIndividualAccountHolderSuccessPayload?: (
    data: WithTypename<UnauthenticatedOnboardPublicIndividualAccountHolderSuccessPayload>,
  ) => null | string;
  UnauthenticatedUpdateCompanyOnboardingSuccessPayload?: (
    data: WithTypename<UnauthenticatedUpdateCompanyOnboardingSuccessPayload>,
  ) => null | string;
  UnauthenticatedUpdateIndividualOnboardingSuccessPayload?: (
    data: WithTypename<UnauthenticatedUpdateIndividualOnboardingSuccessPayload>,
  ) => null | string;
  User?: (data: WithTypename<User>) => null | string;
  UserConnection?: (data: WithTypename<UserConnection>) => null | string;
  UserEdge?: (data: WithTypename<UserEdge>) => null | string;
  UserNotAllowedToDisableItsOwnAccountMembershipRejection?: (
    data: WithTypename<UserNotAllowedToDisableItsOwnAccountMembershipRejection>,
  ) => null | string;
  UserNotAllowedToManageAccountMembershipRejection?: (
    data: WithTypename<UserNotAllowedToManageAccountMembershipRejection>,
  ) => null | string;
  UserNotAllowedToSuspendItsOwnAccountMembershipRejection?: (
    data: WithTypename<UserNotAllowedToSuspendItsOwnAccountMembershipRejection>,
  ) => null | string;
  UserNotCardHolderRejection?: (data: WithTypename<UserNotCardHolderRejection>) => null | string;
  ValidationError?: (data: WithTypename<ValidationError>) => null | string;
  ValidationFieldError?: (data: WithTypename<ValidationFieldError>) => null | string;
  ValidationRejection?: (data: WithTypename<ValidationRejection>) => null | string;
  VirtualIBANEntry?: (data: WithTypename<VirtualIbanEntry>) => null | string;
  VirtualIBANEntryConnection?: (data: WithTypename<VirtualIbanEntryConnection>) => null | string;
  VirtualIBANEntryEdge?: (data: WithTypename<VirtualIbanEntryEdge>) => null | string;
  WalletProvider?: (data: WithTypename<WalletProvider>) => null | string;
  WebBankingSettings?: (data: WithTypename<WebBankingSettings>) => null | string;
};

export type GraphCacheResolvers = {
  Query?: {
    cardInfos?: GraphCacheResolver<
      WithTypename<Query>,
      QueryCardInfosArgs,
      WithTypename<CardInfos> | string
    >;
    cardPINInfos?: GraphCacheResolver<
      WithTypename<Query>,
      QueryCardPinInfosArgs,
      WithTypename<CardPinInfos> | string
    >;
    companyInfoBySiren?: GraphCacheResolver<
      WithTypename<Query>,
      QueryCompanyInfoBySirenArgs,
      WithTypename<CompanyInfoBySirenPayload> | string
    >;
    companyUboByCompanyRefAndHeadquarterCountry?: GraphCacheResolver<
      WithTypename<Query>,
      QueryCompanyUboByCompanyRefAndHeadquarterCountryArgs,
      WithTypename<CompanyUboByCompanyRefAndHeadquarterCountryPayload> | string
    >;
    merchantPaymentLink?: GraphCacheResolver<
      WithTypename<Query>,
      QueryMerchantPaymentLinkArgs,
      WithTypename<MerchantPaymentLink> | string
    >;
    onboardingInfo?: GraphCacheResolver<
      WithTypename<Query>,
      QueryOnboardingInfoArgs,
      WithTypename<OnboardingInfo> | string
    >;
    projectInfoById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryProjectInfoByIdArgs,
      WithTypename<ProjectInfo> | string
    >;
  };
  Account?: {
    BIC?: GraphCacheResolver<WithTypename<Account>, Record<string, never>, Scalars["BIC"] | string>;
    IBAN?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars["IBAN"] | string
    >;
    bankDetails?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    blockSDD?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    cashAccountType?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      CashAccountType | string
    >;
    country?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      AccountCountry | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    currency?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars["Currency"] | string
    >;
    holder?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      WithTypename<AccountHolder> | string
    >;
    id?: GraphCacheResolver<WithTypename<Account>, Record<string, never>, Scalars["ID"] | string>;
    language?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      AccountLanguage | string
    >;
    legalRepresentativeMembership?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      WithTypename<AccountMembership> | string
    >;
    memberships?: GraphCacheResolver<
      WithTypename<Account>,
      AccountMembershipsArgs,
      WithTypename<AccountMembershipConnection> | string
    >;
    name?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    number?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars["AccountNumber"] | string
    >;
    partnershipStatusInfo?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      | WithTypename<PartnershipAcceptedStatusInfo>
      | WithTypename<PartnershipCanceledStatusInfo>
      | WithTypename<PartnershipCancelingStatusInfo>
      | string
    >;
    paymentAccountType?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      PaymentAccountType | string
    >;
    paymentLevel?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      PaymentLevel | string
    >;
    requiredConsentToFetchNewTransactions?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    statusInfo?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      | WithTypename<AccountClosedStatus>
      | WithTypename<AccountClosingStatus>
      | WithTypename<AccountOpenedStatus>
      | WithTypename<AccountSuspendedStatus>
      | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    upgradedAt?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    virtualIbanEntries?: GraphCacheResolver<
      WithTypename<Account>,
      AccountVirtualIbanEntriesArgs,
      WithTypename<VirtualIbanEntryConnection> | string
    >;
  };
  AccountClosedStatus?: {
    reason?: GraphCacheResolver<
      WithTypename<AccountClosedStatus>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    reasonInfo?: GraphCacheResolver<
      WithTypename<AccountClosedStatus>,
      Record<string, never>,
      WithTypename<CloseAccountStatusReason> | string
    >;
    status?: GraphCacheResolver<
      WithTypename<AccountClosedStatus>,
      Record<string, never>,
      AccountStatus | string
    >;
  };
  AccountClosingStatus?: {
    reason?: GraphCacheResolver<
      WithTypename<AccountClosingStatus>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    reasonInfo?: GraphCacheResolver<
      WithTypename<AccountClosingStatus>,
      Record<string, never>,
      WithTypename<CloseAccountStatusReason> | string
    >;
    status?: GraphCacheResolver<
      WithTypename<AccountClosingStatus>,
      Record<string, never>,
      AccountStatus | string
    >;
  };
  AccountConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<AccountConnection>,
      Record<string, never>,
      Array<WithTypename<AccountEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<AccountConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
    totalCount?: GraphCacheResolver<
      WithTypename<AccountConnection>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  AccountEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<AccountEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<AccountEdge>,
      Record<string, never>,
      WithTypename<Account> | string
    >;
  };
  AccountHolder?: {
    accounts?: GraphCacheResolver<
      WithTypename<AccountHolder>,
      AccountHolderAccountsArgs,
      WithTypename<AccountConnection> | string
    >;
    createdDate?: GraphCacheResolver<
      WithTypename<AccountHolder>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    fundingLimitSettingsChangeRequests?: GraphCacheResolver<
      WithTypename<AccountHolder>,
      AccountHolderFundingLimitSettingsChangeRequestsArgs,
      WithTypename<FundingLimitSettingsChangeRequestConnection> | string
    >;
    id?: GraphCacheResolver<
      WithTypename<AccountHolder>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    info?: GraphCacheResolver<
      WithTypename<AccountHolder>,
      Record<string, never>,
      WithTypename<AccountHolderCompanyInfo> | WithTypename<AccountHolderIndividualInfo> | string
    >;
    onboarding?: GraphCacheResolver<
      WithTypename<AccountHolder>,
      Record<string, never>,
      WithTypename<Onboarding> | string
    >;
    residencyAddress?: GraphCacheResolver<
      WithTypename<AccountHolder>,
      Record<string, never>,
      WithTypename<AddressInfo> | string
    >;
    statusInfo?: GraphCacheResolver<
      WithTypename<AccountHolder>,
      Record<string, never>,
      | WithTypename<AccountHolderCanceledStatusInfo>
      | WithTypename<AccountHolderEnabledStatusInfo>
      | WithTypename<AccountHolderSuspendedStatusInfo>
      | string
    >;
    supportingDocumentCollections?: GraphCacheResolver<
      WithTypename<AccountHolder>,
      AccountHolderSupportingDocumentCollectionsArgs,
      WithTypename<SupportingDocumentCollectionConnection> | string
    >;
    updatedDate?: GraphCacheResolver<
      WithTypename<AccountHolder>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    verificationStatus?: GraphCacheResolver<
      WithTypename<AccountHolder>,
      Record<string, never>,
      VerificationStatus | string
    >;
  };
  AccountHolderCanceledStatusInfo?: {
    reason?: GraphCacheResolver<
      WithTypename<AccountHolderCanceledStatusInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<AccountHolderCanceledStatusInfo>,
      Record<string, never>,
      AccountHolderStatus | string
    >;
  };
  AccountHolderCompanyInfo?: {
    businessActivity?: GraphCacheResolver<
      WithTypename<AccountHolderCompanyInfo>,
      Record<string, never>,
      BusinessActivity | string
    >;
    businessActivityDescription?: GraphCacheResolver<
      WithTypename<AccountHolderCompanyInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    companyRegistrationDate?: GraphCacheResolver<
      WithTypename<AccountHolderCompanyInfo>,
      Record<string, never>,
      Scalars["Date"] | string
    >;
    companyType?: GraphCacheResolver<
      WithTypename<AccountHolderCompanyInfo>,
      Record<string, never>,
      CompanyType | string
    >;
    individualUltimateBeneficialOwners?: GraphCacheResolver<
      WithTypename<AccountHolderCompanyInfo>,
      Record<string, never>,
      Array<WithTypename<IndividualUltimateBeneficialOwner> | string>
    >;
    legalRepresentativePersonalAddress?: GraphCacheResolver<
      WithTypename<AccountHolderCompanyInfo>,
      Record<string, never>,
      WithTypename<AddressInformation> | string
    >;
    monthlyPaymentVolume?: GraphCacheResolver<
      WithTypename<AccountHolderCompanyInfo>,
      Record<string, never>,
      MonthlyPaymentVolume | string
    >;
    name?: GraphCacheResolver<
      WithTypename<AccountHolderCompanyInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    registrationNumber?: GraphCacheResolver<
      WithTypename<AccountHolderCompanyInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    taxIdentificationNumber?: GraphCacheResolver<
      WithTypename<AccountHolderCompanyInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    type?: GraphCacheResolver<
      WithTypename<AccountHolderCompanyInfo>,
      Record<string, never>,
      AccountHolderType | string
    >;
    vatNumber?: GraphCacheResolver<
      WithTypename<AccountHolderCompanyInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  AccountHolderConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<AccountHolderConnection>,
      Record<string, never>,
      Array<WithTypename<AccountHolderEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<AccountHolderConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
    totalCount?: GraphCacheResolver<
      WithTypename<AccountHolderConnection>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  AccountHolderEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<AccountHolderEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<AccountHolderEdge>,
      Record<string, never>,
      WithTypename<AccountHolder> | string
    >;
  };
  AccountHolderEnabledStatusInfo?: {
    status?: GraphCacheResolver<
      WithTypename<AccountHolderEnabledStatusInfo>,
      Record<string, never>,
      AccountHolderStatus | string
    >;
  };
  AccountHolderIndividualInfo?: {
    employmentStatus?: GraphCacheResolver<
      WithTypename<AccountHolderIndividualInfo>,
      Record<string, never>,
      EmploymentStatus | string
    >;
    monthlyIncome?: GraphCacheResolver<
      WithTypename<AccountHolderIndividualInfo>,
      Record<string, never>,
      MonthlyIncome | string
    >;
    name?: GraphCacheResolver<
      WithTypename<AccountHolderIndividualInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    taxIdentificationNumber?: GraphCacheResolver<
      WithTypename<AccountHolderIndividualInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    type?: GraphCacheResolver<
      WithTypename<AccountHolderIndividualInfo>,
      Record<string, never>,
      AccountHolderType | string
    >;
    user?: GraphCacheResolver<
      WithTypename<AccountHolderIndividualInfo>,
      Record<string, never>,
      WithTypename<User> | string
    >;
  };
  AccountHolderNotFoundRejection?: {
    message?: GraphCacheResolver<
      WithTypename<AccountHolderNotFoundRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  AccountHolderSuspendedStatusInfo?: {
    reason?: GraphCacheResolver<
      WithTypename<AccountHolderSuspendedStatusInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<AccountHolderSuspendedStatusInfo>,
      Record<string, never>,
      AccountHolderStatus | string
    >;
  };
  AccountMembership?: {
    acceptedIdentificationLevels?: GraphCacheResolver<
      WithTypename<AccountMembership>,
      Record<string, never>,
      Array<IdentificationLevel | string>
    >;
    account?: GraphCacheResolver<
      WithTypename<AccountMembership>,
      Record<string, never>,
      WithTypename<Account> | string
    >;
    canInitiatePayments?: GraphCacheResolver<
      WithTypename<AccountMembership>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    canManageAccountMembership?: GraphCacheResolver<
      WithTypename<AccountMembership>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    canManageBeneficiaries?: GraphCacheResolver<
      WithTypename<AccountMembership>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    canManageCards?: GraphCacheResolver<
      WithTypename<AccountMembership>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    canViewAccount?: GraphCacheResolver<
      WithTypename<AccountMembership>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    cards?: GraphCacheResolver<
      WithTypename<AccountMembership>,
      AccountMembershipCardsArgs,
      WithTypename<CardConnection> | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<AccountMembership>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    disabledAt?: GraphCacheResolver<
      WithTypename<AccountMembership>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    email?: GraphCacheResolver<
      WithTypename<AccountMembership>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    hasRequiredIdentificationLevel?: GraphCacheResolver<
      WithTypename<AccountMembership>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<AccountMembership>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    legalRepresentative?: GraphCacheResolver<
      WithTypename<AccountMembership>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    recommendedIdentificationLevel?: GraphCacheResolver<
      WithTypename<AccountMembership>,
      Record<string, never>,
      IdentificationLevel | string
    >;
    residencyAddress?: GraphCacheResolver<
      WithTypename<AccountMembership>,
      Record<string, never>,
      WithTypename<AddressInfo> | string
    >;
    spendingLimits?: GraphCacheResolver<
      WithTypename<AccountMembership>,
      Record<string, never>,
      Array<WithTypename<SpendingLimit> | string>
    >;
    statusInfo?: GraphCacheResolver<
      WithTypename<AccountMembership>,
      Record<string, never>,
      | WithTypename<AccountMembershipBindingUserErrorStatusInfo>
      | WithTypename<AccountMembershipConsentPendingStatusInfo>
      | WithTypename<AccountMembershipDisabledStatusInfo>
      | WithTypename<AccountMembershipEnabledStatusInfo>
      | WithTypename<AccountMembershipInvitationSentStatusInfo>
      | WithTypename<AccountMembershipSuspendedStatusInfo>
      | string
    >;
    taxIdentificationNumber?: GraphCacheResolver<
      WithTypename<AccountMembership>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<AccountMembership>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    user?: GraphCacheResolver<
      WithTypename<AccountMembership>,
      Record<string, never>,
      WithTypename<User> | string
    >;
    version?: GraphCacheResolver<
      WithTypename<AccountMembership>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  AccountMembershipBindingUserErrorStatusInfo?: {
    birthDateMatchError?: GraphCacheResolver<
      WithTypename<AccountMembershipBindingUserErrorStatusInfo>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    firstNameMatchError?: GraphCacheResolver<
      WithTypename<AccountMembershipBindingUserErrorStatusInfo>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    idVerifiedMatchError?: GraphCacheResolver<
      WithTypename<AccountMembershipBindingUserErrorStatusInfo>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    lastNameMatchError?: GraphCacheResolver<
      WithTypename<AccountMembershipBindingUserErrorStatusInfo>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    phoneNumberMatchError?: GraphCacheResolver<
      WithTypename<AccountMembershipBindingUserErrorStatusInfo>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    restrictedTo?: GraphCacheResolver<
      WithTypename<AccountMembershipBindingUserErrorStatusInfo>,
      Record<string, never>,
      WithTypename<RestrictedTo> | string
    >;
    status?: GraphCacheResolver<
      WithTypename<AccountMembershipBindingUserErrorStatusInfo>,
      Record<string, never>,
      AccountMembershipStatus | string
    >;
  };
  AccountMembershipCannotBeDisabledRejection?: {
    accountMembershipId?: GraphCacheResolver<
      WithTypename<AccountMembershipCannotBeDisabledRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    message?: GraphCacheResolver<
      WithTypename<AccountMembershipCannotBeDisabledRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  AccountMembershipCannotBeUpdatedRejection?: {
    id?: GraphCacheResolver<
      WithTypename<AccountMembershipCannotBeUpdatedRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    message?: GraphCacheResolver<
      WithTypename<AccountMembershipCannotBeUpdatedRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  AccountMembershipConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<AccountMembershipConnection>,
      Record<string, never>,
      Array<WithTypename<AccountMembershipEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<AccountMembershipConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
    totalCount?: GraphCacheResolver<
      WithTypename<AccountMembershipConnection>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  AccountMembershipConsentPendingStatusInfo?: {
    consent?: GraphCacheResolver<
      WithTypename<AccountMembershipConsentPendingStatusInfo>,
      Record<string, never>,
      WithTypename<Consent> | string
    >;
    restrictedTo?: GraphCacheResolver<
      WithTypename<AccountMembershipConsentPendingStatusInfo>,
      Record<string, never>,
      WithTypename<RestrictedTo> | string
    >;
    status?: GraphCacheResolver<
      WithTypename<AccountMembershipConsentPendingStatusInfo>,
      Record<string, never>,
      AccountMembershipStatus | string
    >;
  };
  AccountMembershipDisabledStatusInfo?: {
    reason?: GraphCacheResolver<
      WithTypename<AccountMembershipDisabledStatusInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<AccountMembershipDisabledStatusInfo>,
      Record<string, never>,
      AccountMembershipStatus | string
    >;
  };
  AccountMembershipEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<AccountMembershipEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<AccountMembershipEdge>,
      Record<string, never>,
      WithTypename<AccountMembership> | string
    >;
  };
  AccountMembershipEnabledStatusInfo?: {
    status?: GraphCacheResolver<
      WithTypename<AccountMembershipEnabledStatusInfo>,
      Record<string, never>,
      AccountMembershipStatus | string
    >;
  };
  AccountMembershipInvitationSentStatusInfo?: {
    restrictedTo?: GraphCacheResolver<
      WithTypename<AccountMembershipInvitationSentStatusInfo>,
      Record<string, never>,
      WithTypename<RestrictedTo> | string
    >;
    status?: GraphCacheResolver<
      WithTypename<AccountMembershipInvitationSentStatusInfo>,
      Record<string, never>,
      AccountMembershipStatus | string
    >;
  };
  AccountMembershipNotAllowedRejection?: {
    message?: GraphCacheResolver<
      WithTypename<AccountMembershipNotAllowedRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  AccountMembershipNotFoundRejection?: {
    id?: GraphCacheResolver<
      WithTypename<AccountMembershipNotFoundRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    message?: GraphCacheResolver<
      WithTypename<AccountMembershipNotFoundRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  AccountMembershipNotReadyToBeBoundRejection?: {
    id?: GraphCacheResolver<
      WithTypename<AccountMembershipNotReadyToBeBoundRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    message?: GraphCacheResolver<
      WithTypename<AccountMembershipNotReadyToBeBoundRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  AccountMembershipSuspendedStatusInfo?: {
    reason?: GraphCacheResolver<
      WithTypename<AccountMembershipSuspendedStatusInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<AccountMembershipSuspendedStatusInfo>,
      Record<string, never>,
      AccountMembershipStatus | string
    >;
  };
  AccountNotFoundRejection?: {
    id?: GraphCacheResolver<
      WithTypename<AccountNotFoundRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    message?: GraphCacheResolver<
      WithTypename<AccountNotFoundRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  AccountOpenedStatus?: {
    status?: GraphCacheResolver<
      WithTypename<AccountOpenedStatus>,
      Record<string, never>,
      AccountStatus | string
    >;
  };
  AccountSuspendedStatus?: {
    reason?: GraphCacheResolver<
      WithTypename<AccountSuspendedStatus>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    reasonInfo?: GraphCacheResolver<
      WithTypename<AccountSuspendedStatus>,
      Record<string, never>,
      WithTypename<SuspendAccountStatusReason> | string
    >;
    status?: GraphCacheResolver<
      WithTypename<AccountSuspendedStatus>,
      Record<string, never>,
      AccountStatus | string
    >;
  };
  ActiveMerchantPaymentLinkStatusInfo?: {
    expiresAt?: GraphCacheResolver<
      WithTypename<ActiveMerchantPaymentLinkStatusInfo>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<ActiveMerchantPaymentLinkStatusInfo>,
      Record<string, never>,
      MerchantPaymentLinkStatus | string
    >;
  };
  AddingCardsToDifferentAccountsRejection?: {
    message?: GraphCacheResolver<
      WithTypename<AddingCardsToDifferentAccountsRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  Address?: {
    addressLine1?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    addressLine2?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    city?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    country?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars["CCA3"] | string
    >;
    postalCode?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    state?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  AddressInfo?: {
    addressLine1?: GraphCacheResolver<
      WithTypename<AddressInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    addressLine2?: GraphCacheResolver<
      WithTypename<AddressInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    city?: GraphCacheResolver<
      WithTypename<AddressInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    country?: GraphCacheResolver<
      WithTypename<AddressInfo>,
      Record<string, never>,
      Scalars["CCA3"] | string
    >;
    postalCode?: GraphCacheResolver<
      WithTypename<AddressInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    state?: GraphCacheResolver<
      WithTypename<AddressInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  AddressInformation?: {
    addressLine1?: GraphCacheResolver<
      WithTypename<AddressInformation>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    addressLine2?: GraphCacheResolver<
      WithTypename<AddressInformation>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    city?: GraphCacheResolver<
      WithTypename<AddressInformation>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    country?: GraphCacheResolver<
      WithTypename<AddressInformation>,
      Record<string, never>,
      Scalars["CCA3"] | string
    >;
    postalCode?: GraphCacheResolver<
      WithTypename<AddressInformation>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    state?: GraphCacheResolver<
      WithTypename<AddressInformation>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  AlreadyValidPhysicalCardRejection?: {
    message?: GraphCacheResolver<
      WithTypename<AlreadyValidPhysicalCardRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  Amount?: {
    currency?: GraphCacheResolver<
      WithTypename<Amount>,
      Record<string, never>,
      Scalars["Currency"] | string
    >;
    value?: GraphCacheResolver<
      WithTypename<Amount>,
      Record<string, never>,
      Scalars["AmountValue"] | string
    >;
  };
  ApplePayNotAllowedForProjectRejection?: {
    id?: GraphCacheResolver<
      WithTypename<ApplePayNotAllowedForProjectRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    message?: GraphCacheResolver<
      WithTypename<ApplePayNotAllowedForProjectRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  ApprovedFundingLimit?: {
    fundingLimit?: GraphCacheResolver<
      WithTypename<ApprovedFundingLimit>,
      Record<string, never>,
      WithTypename<FundingLimitAmount> | string
    >;
    instantFundingLimit?: GraphCacheResolver<
      WithTypename<ApprovedFundingLimit>,
      Record<string, never>,
      WithTypename<FundingLimitAmount> | string
    >;
  };
  Authenticator?: {
    acceptLanguage?: GraphCacheResolver<
      WithTypename<Authenticator>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    brand?: GraphCacheResolver<
      WithTypename<Authenticator>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    model?: GraphCacheResolver<
      WithTypename<Authenticator>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    os?: GraphCacheResolver<
      WithTypename<Authenticator>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    type?: GraphCacheResolver<
      WithTypename<Authenticator>,
      Record<string, never>,
      AuthenticatorType | string
    >;
    userAgent?: GraphCacheResolver<
      WithTypename<Authenticator>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  BadAccountStatusRejection?: {
    id?: GraphCacheResolver<
      WithTypename<BadAccountStatusRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    message?: GraphCacheResolver<
      WithTypename<BadAccountStatusRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  BadRequestRejection?: {
    message?: GraphCacheResolver<
      WithTypename<BadRequestRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  CanceledMerchantPaymentLinkStatusInfo?: {
    canceledAt?: GraphCacheResolver<
      WithTypename<CanceledMerchantPaymentLinkStatusInfo>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<CanceledMerchantPaymentLinkStatusInfo>,
      Record<string, never>,
      MerchantPaymentLinkStatus | string
    >;
  };
  CanceledMerchantPaymentMethodStatusInfo?: {
    canceledAt?: GraphCacheResolver<
      WithTypename<CanceledMerchantPaymentMethodStatusInfo>,
      Record<string, never>,
      Scalars["Date"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<CanceledMerchantPaymentMethodStatusInfo>,
      Record<string, never>,
      MerchantPaymentMethodStatus | string
    >;
  };
  CanceledMerchantProfileStatusInfo?: {
    canceledAt?: GraphCacheResolver<
      WithTypename<CanceledMerchantProfileStatusInfo>,
      Record<string, never>,
      Scalars["Date"] | string
    >;
    enabledAt?: GraphCacheResolver<
      WithTypename<CanceledMerchantProfileStatusInfo>,
      Record<string, never>,
      Scalars["Date"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<CanceledMerchantProfileStatusInfo>,
      Record<string, never>,
      MerchantProfileStatus | string
    >;
  };
  CannotActivatePhysicalCardRejection?: {
    identifier?: GraphCacheResolver<
      WithTypename<CannotActivatePhysicalCardRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    message?: GraphCacheResolver<
      WithTypename<CannotActivatePhysicalCardRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  Card?: {
    accountMembership?: GraphCacheResolver<
      WithTypename<Card>,
      Record<string, never>,
      WithTypename<AccountMembership> | string
    >;
    cardContractExpiryDate?: GraphCacheResolver<
      WithTypename<Card>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    cardDesignUrl?: GraphCacheResolver<
      WithTypename<Card>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    cardMaskedNumber?: GraphCacheResolver<
      WithTypename<Card>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    cardProduct?: GraphCacheResolver<
      WithTypename<Card>,
      Record<string, never>,
      WithTypename<CardProduct> | string
    >;
    cardUrl?: GraphCacheResolver<
      WithTypename<Card>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<Card>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    digitalCards?: GraphCacheResolver<
      WithTypename<Card>,
      CardDigitalCardsArgs,
      WithTypename<DigitalCardConnection> | string
    >;
    eCommerce?: GraphCacheResolver<
      WithTypename<Card>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    expiryDate?: GraphCacheResolver<
      WithTypename<Card>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    id?: GraphCacheResolver<WithTypename<Card>, Record<string, never>, Scalars["ID"] | string>;
    international?: GraphCacheResolver<
      WithTypename<Card>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    issuingCountry?: GraphCacheResolver<
      WithTypename<Card>,
      Record<string, never>,
      Scalars["CCA3"] | string
    >;
    mainCurrency?: GraphCacheResolver<
      WithTypename<Card>,
      Record<string, never>,
      Scalars["Currency"] | string
    >;
    name?: GraphCacheResolver<
      WithTypename<Card>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    nonMainCurrencyTransactions?: GraphCacheResolver<
      WithTypename<Card>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    physicalCard?: GraphCacheResolver<
      WithTypename<Card>,
      Record<string, never>,
      WithTypename<PhysicalCard> | string
    >;
    spendingLimits?: GraphCacheResolver<
      WithTypename<Card>,
      Record<string, never>,
      Array<WithTypename<SpendingLimit> | string>
    >;
    statusInfo?: GraphCacheResolver<
      WithTypename<Card>,
      Record<string, never>,
      | WithTypename<CardCanceledStatusInfo>
      | WithTypename<CardCancelingStatusInfo>
      | WithTypename<CardConsentPendingStatusInfo>
      | WithTypename<CardEnabledStatusInfo>
      | WithTypename<CardProcessingStatusInfo>
      | string
    >;
    type?: GraphCacheResolver<WithTypename<Card>, Record<string, never>, CardType | string>;
    updatedAt?: GraphCacheResolver<
      WithTypename<Card>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    withdrawal?: GraphCacheResolver<
      WithTypename<Card>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
  };
  CardCanNotBeDigitalizedRejection?: {
    id?: GraphCacheResolver<
      WithTypename<CardCanNotBeDigitalizedRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    message?: GraphCacheResolver<
      WithTypename<CardCanNotBeDigitalizedRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  CardCanceledStatusInfo?: {
    reason?: GraphCacheResolver<
      WithTypename<CardCanceledStatusInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<CardCanceledStatusInfo>,
      Record<string, never>,
      CardStatus | string
    >;
  };
  CardCancelingStatusInfo?: {
    reason?: GraphCacheResolver<
      WithTypename<CardCancelingStatusInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<CardCancelingStatusInfo>,
      Record<string, never>,
      CardStatus | string
    >;
  };
  CardConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<CardConnection>,
      Record<string, never>,
      Array<WithTypename<CardEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<CardConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
    totalCount?: GraphCacheResolver<
      WithTypename<CardConnection>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  CardConsentPendingStatusInfo?: {
    consent?: GraphCacheResolver<
      WithTypename<CardConsentPendingStatusInfo>,
      Record<string, never>,
      WithTypename<Consent> | string
    >;
    status?: GraphCacheResolver<
      WithTypename<CardConsentPendingStatusInfo>,
      Record<string, never>,
      CardStatus | string
    >;
  };
  CardDesignBackground?: {
    cardBackgroundUrl?: GraphCacheResolver<
      WithTypename<CardDesignBackground>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    cardTextColor?: GraphCacheResolver<
      WithTypename<CardDesignBackground>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<CardDesignBackground>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<CardDesignBackground>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    name?: GraphCacheResolver<
      WithTypename<CardDesignBackground>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    type?: GraphCacheResolver<
      WithTypename<CardDesignBackground>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<CardDesignBackground>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
  };
  CardEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<CardEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<CardEdge>,
      Record<string, never>,
      WithTypename<Card> | string
    >;
  };
  CardEnabledStatusInfo?: {
    status?: GraphCacheResolver<
      WithTypename<CardEnabledStatusInfo>,
      Record<string, never>,
      CardStatus | string
    >;
  };
  CardInfo?: {
    cardHolderName?: GraphCacheResolver<
      WithTypename<CardInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    cvvIframeUrl?: GraphCacheResolver<
      WithTypename<CardInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    expiryDateIframeUrl?: GraphCacheResolver<
      WithTypename<CardInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    panIframeUrl?: GraphCacheResolver<
      WithTypename<CardInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  CardInfos?: {
    cardBackgroundType?: GraphCacheResolver<
      WithTypename<CardInfos>,
      Record<string, never>,
      CardSettingsBackgroundType | string
    >;
    cardDesignUrl?: GraphCacheResolver<
      WithTypename<CardInfos>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    cardInfos?: GraphCacheResolver<
      WithTypename<CardInfos>,
      Record<string, never>,
      WithTypename<CardInfoPayload> | string
    >;
    cardTextColor?: GraphCacheResolver<
      WithTypename<CardInfos>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  CardNotFoundRejection?: {
    id?: GraphCacheResolver<
      WithTypename<CardNotFoundRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    message?: GraphCacheResolver<
      WithTypename<CardNotFoundRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  CardPINInfos?: {
    consumerId?: GraphCacheResolver<
      WithTypename<CardPinInfos>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    controlValue?: GraphCacheResolver<
      WithTypename<CardPinInfos>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    costumerRef?: GraphCacheResolver<
      WithTypename<CardPinInfos>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    mac?: GraphCacheResolver<
      WithTypename<CardPinInfos>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    requestRef?: GraphCacheResolver<
      WithTypename<CardPinInfos>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    time?: GraphCacheResolver<
      WithTypename<CardPinInfos>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    urlToCall?: GraphCacheResolver<
      WithTypename<CardPinInfos>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  CardProcessingStatusInfo?: {
    status?: GraphCacheResolver<
      WithTypename<CardProcessingStatusInfo>,
      Record<string, never>,
      CardStatus | string
    >;
  };
  CardProduct?: {
    applicableToPhysicalCards?: GraphCacheResolver<
      WithTypename<CardProduct>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    cardDesigns?: GraphCacheResolver<
      WithTypename<CardProduct>,
      Record<string, never>,
      Array<WithTypename<CardProductDesign> | string>
    >;
    companySpendingLimit?: GraphCacheResolver<
      WithTypename<CardProduct>,
      Record<string, never>,
      WithTypename<SpendingLimit> | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<CardProduct>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    defaultCardProduct?: GraphCacheResolver<
      WithTypename<CardProduct>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<CardProduct>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    individualSpendingLimit?: GraphCacheResolver<
      WithTypename<CardProduct>,
      Record<string, never>,
      WithTypename<SpendingLimit> | string
    >;
    name?: GraphCacheResolver<
      WithTypename<CardProduct>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    projectId?: GraphCacheResolver<
      WithTypename<CardProduct>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<CardProduct>,
      Record<string, never>,
      CardProductStatus | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<CardProduct>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
  };
  CardProductDesign?: {
    accentColor?: GraphCacheResolver<
      WithTypename<CardProductDesign>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    cardBackground?: GraphCacheResolver<
      WithTypename<CardProductDesign>,
      Record<string, never>,
      WithTypename<CardDesignBackground> | string
    >;
    cardDesignUrl?: GraphCacheResolver<
      WithTypename<CardProductDesign>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    cardProjectLogo300dpiUrl?: GraphCacheResolver<
      WithTypename<CardProductDesign>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    cardProjectLogo600dpiUrl?: GraphCacheResolver<
      WithTypename<CardProductDesign>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    cardProjectLogoSvgUrl?: GraphCacheResolver<
      WithTypename<CardProductDesign>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<CardProductDesign>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<CardProductDesign>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<CardProductDesign>,
      Record<string, never>,
      CardDesignStatus | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<CardProductDesign>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    version?: GraphCacheResolver<
      WithTypename<CardProductDesign>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    zoomRatioProjectLogo?: GraphCacheResolver<
      WithTypename<CardProductDesign>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  CardProductDisabledRejection?: {
    message?: GraphCacheResolver<
      WithTypename<CardProductDisabledRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  CardProductNotApplicableToPhysicalCardsRejection?: {
    message?: GraphCacheResolver<
      WithTypename<CardProductNotApplicableToPhysicalCardsRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  CardProductNotFoundRejection?: {
    message?: GraphCacheResolver<
      WithTypename<CardProductNotFoundRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  CardProductSuspendedRejection?: {
    message?: GraphCacheResolver<
      WithTypename<CardProductSuspendedRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  CardProductUsedRejection?: {
    message?: GraphCacheResolver<
      WithTypename<CardProductUsedRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  CardSettings?: {
    accentColor?: GraphCacheResolver<
      WithTypename<CardSettings>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    allowsApplePay?: GraphCacheResolver<
      WithTypename<CardSettings>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    cardBackground?: GraphCacheResolver<
      WithTypename<CardSettings>,
      Record<string, never>,
      WithTypename<CardSettingsBackground> | string
    >;
    cardDesignUrl?: GraphCacheResolver<
      WithTypename<CardSettings>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    cardProjectLogo300dpiUrl?: GraphCacheResolver<
      WithTypename<CardSettings>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    cardProjectLogo600dpiUrl?: GraphCacheResolver<
      WithTypename<CardSettings>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    cardProjectLogoSvgUrl?: GraphCacheResolver<
      WithTypename<CardSettings>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<CardSettings>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<CardSettings>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<CardSettings>,
      Record<string, never>,
      ProjectCardStatus | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<CardSettings>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    version?: GraphCacheResolver<
      WithTypename<CardSettings>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    zoomRatioProjectLogo?: GraphCacheResolver<
      WithTypename<CardSettings>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  CardSettingsBackground?: {
    cardBackgroundUrl?: GraphCacheResolver<
      WithTypename<CardSettingsBackground>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    cardTextColor?: GraphCacheResolver<
      WithTypename<CardSettingsBackground>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<CardSettingsBackground>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<CardSettingsBackground>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    name?: GraphCacheResolver<
      WithTypename<CardSettingsBackground>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    type?: GraphCacheResolver<
      WithTypename<CardSettingsBackground>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<CardSettingsBackground>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
  };
  CardWrongStatusRejection?: {
    currentStatus?: GraphCacheResolver<
      WithTypename<CardWrongStatusRejection>,
      Record<string, never>,
      CardStatus | string
    >;
    expectedStatus?: GraphCacheResolver<
      WithTypename<CardWrongStatusRejection>,
      Record<string, never>,
      CardStatus | string
    >;
    identifier?: GraphCacheResolver<
      WithTypename<CardWrongStatusRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    message?: GraphCacheResolver<
      WithTypename<CardWrongStatusRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  CheckMerchantPaymentMethod?: {
    id?: GraphCacheResolver<
      WithTypename<CheckMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    methodId?: GraphCacheResolver<
      WithTypename<CheckMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    productId?: GraphCacheResolver<
      WithTypename<CheckMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    rollingReserve?: GraphCacheResolver<
      WithTypename<CheckMerchantPaymentMethod>,
      Record<string, never>,
      WithTypename<RollingReserve> | string
    >;
    statusInfo?: GraphCacheResolver<
      WithTypename<CheckMerchantPaymentMethod>,
      Record<string, never>,
      | WithTypename<CanceledMerchantPaymentMethodStatusInfo>
      | WithTypename<DisabledMerchantPaymentMethodStatusInfo>
      | WithTypename<EnabledMerchantPaymentMethodStatusInfo>
      | WithTypename<PendingMerchantPaymentMethodStatusInfo>
      | WithTypename<RejectedMerchantPaymentMethodStatusInfo>
      | WithTypename<SuspendedMerchantPaymentMethodStatusInfo>
      | string
    >;
    type?: GraphCacheResolver<
      WithTypename<CheckMerchantPaymentMethod>,
      Record<string, never>,
      MerchantPaymentMethodType | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<CheckMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["Date"] | string
    >;
    version?: GraphCacheResolver<
      WithTypename<CheckMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  CloseAccountReason?: {
    message?: GraphCacheResolver<
      WithTypename<CloseAccountReason>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    type?: GraphCacheResolver<
      WithTypename<CloseAccountReason>,
      Record<string, never>,
      CloseAccountReasonType | string
    >;
  };
  CompanyInfo?: {
    companyName?: GraphCacheResolver<
      WithTypename<CompanyInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    headquarters?: GraphCacheResolver<
      WithTypename<CompanyInfo>,
      Record<string, never>,
      WithTypename<Headquarters> | string
    >;
    legalRepresentativePersonalAddress?: GraphCacheResolver<
      WithTypename<CompanyInfo>,
      Record<string, never>,
      WithTypename<AddressInformation> | string
    >;
    siren?: GraphCacheResolver<
      WithTypename<CompanyInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    taxIdentificationNumber?: GraphCacheResolver<
      WithTypename<CompanyInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    vatNumber?: GraphCacheResolver<
      WithTypename<CompanyInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  CompanyInfoBySirenSuccessPayload?: {
    companyInfo?: GraphCacheResolver<
      WithTypename<CompanyInfoBySirenSuccessPayload>,
      Record<string, never>,
      WithTypename<CompanyInfo> | string
    >;
  };
  CompanyUboByCompanyRefAndHeadquarterCountryPayload?: {
    individualUltimateBeneficialOwners?: GraphCacheResolver<
      WithTypename<CompanyUboByCompanyRefAndHeadquarterCountryPayload>,
      Record<string, never>,
      Array<WithTypename<IndividualUltimateBeneficialOwner> | string>
    >;
  };
  CompleteDigitalCard?: {
    cardMaskedNumber?: GraphCacheResolver<
      WithTypename<CompleteDigitalCard>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<CompleteDigitalCard>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    device?: GraphCacheResolver<
      WithTypename<CompleteDigitalCard>,
      Record<string, never>,
      WithTypename<Device> | string
    >;
    id?: GraphCacheResolver<
      WithTypename<CompleteDigitalCard>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    statusInfo?: GraphCacheResolver<
      WithTypename<CompleteDigitalCard>,
      Record<string, never>,
      | WithTypename<DigitalCardCanceledStatusInfo>
      | WithTypename<DigitalCardEnabledStatusInfo>
      | WithTypename<DigitalCardSuspendedStatusInfo>
      | string
    >;
    type?: GraphCacheResolver<
      WithTypename<CompleteDigitalCard>,
      Record<string, never>,
      DigitalizationType | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<CompleteDigitalCard>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    walletId?: GraphCacheResolver<
      WithTypename<CompleteDigitalCard>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    walletProvider?: GraphCacheResolver<
      WithTypename<CompleteDigitalCard>,
      Record<string, never>,
      WithTypename<WalletProvider> | string
    >;
  };
  CompletedMerchantPaymentLinkStatusInfo?: {
    completedAt?: GraphCacheResolver<
      WithTypename<CompletedMerchantPaymentLinkStatusInfo>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<CompletedMerchantPaymentLinkStatusInfo>,
      Record<string, never>,
      MerchantPaymentLinkStatus | string
    >;
  };
  Consent?: {
    challenge?: GraphCacheResolver<
      WithTypename<Consent>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    consentUrl?: GraphCacheResolver<
      WithTypename<Consent>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<Consent>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    expiredAt?: GraphCacheResolver<
      WithTypename<Consent>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    id?: GraphCacheResolver<WithTypename<Consent>, Record<string, never>, Scalars["ID"] | string>;
    purpose?: GraphCacheResolver<
      WithTypename<Consent>,
      Record<string, never>,
      ConsentPurpose | string
    >;
    redirectUrl?: GraphCacheResolver<
      WithTypename<Consent>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    requireSCA?: GraphCacheResolver<
      WithTypename<Consent>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    startedAt?: GraphCacheResolver<
      WithTypename<Consent>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<Consent>,
      Record<string, never>,
      ConsentStatus | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<Consent>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    user?: GraphCacheResolver<
      WithTypename<Consent>,
      Record<string, never>,
      WithTypename<User> | string
    >;
    userId?: GraphCacheResolver<
      WithTypename<Consent>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  ConsentConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<ConsentConnection>,
      Record<string, never>,
      Array<WithTypename<ConsentEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<ConsentConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
    totalCount?: GraphCacheResolver<
      WithTypename<ConsentConnection>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  ConsentEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<ConsentEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<ConsentEdge>,
      Record<string, never>,
      WithTypename<Consent> | string
    >;
  };
  Customer?: {
    externalCustomerId?: GraphCacheResolver<
      WithTypename<Customer>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    iban?: GraphCacheResolver<
      WithTypename<Customer>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    name?: GraphCacheResolver<
      WithTypename<Customer>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  DebtorAccountClosedRejection?: {
    message?: GraphCacheResolver<
      WithTypename<DebtorAccountClosedRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  DebtorAccountNotAllowedRejection?: {
    message?: GraphCacheResolver<
      WithTypename<DebtorAccountNotAllowedRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  Device?: {
    SEID?: GraphCacheResolver<
      WithTypename<Device>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    name?: GraphCacheResolver<
      WithTypename<Device>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    type?: GraphCacheResolver<
      WithTypename<Device>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  DigitalCardCanceledStatusInfo?: {
    canceledAt?: GraphCacheResolver<
      WithTypename<DigitalCardCanceledStatusInfo>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    enabledAt?: GraphCacheResolver<
      WithTypename<DigitalCardCanceledStatusInfo>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<DigitalCardCanceledStatusInfo>,
      Record<string, never>,
      CompleteDigitalCardStatus | string
    >;
  };
  DigitalCardConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<DigitalCardConnection>,
      Record<string, never>,
      Array<WithTypename<DigitalCardEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<DigitalCardConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
    totalCount?: GraphCacheResolver<
      WithTypename<DigitalCardConnection>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  DigitalCardConsentPendingStatusInfo?: {
    consent?: GraphCacheResolver<
      WithTypename<DigitalCardConsentPendingStatusInfo>,
      Record<string, never>,
      WithTypename<Consent> | string
    >;
    status?: GraphCacheResolver<
      WithTypename<DigitalCardConsentPendingStatusInfo>,
      Record<string, never>,
      PendingDigitalCardStatus | string
    >;
  };
  DigitalCardDeclinedStatusInfo?: {
    status?: GraphCacheResolver<
      WithTypename<DigitalCardDeclinedStatusInfo>,
      Record<string, never>,
      PendingDigitalCardStatus | string
    >;
  };
  DigitalCardEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<DigitalCardEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<DigitalCardEdge>,
      Record<string, never>,
      WithTypename<CompleteDigitalCard> | WithTypename<PendingDigitalCard> | string
    >;
  };
  DigitalCardEnabledStatusInfo?: {
    enabledAt?: GraphCacheResolver<
      WithTypename<DigitalCardEnabledStatusInfo>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<DigitalCardEnabledStatusInfo>,
      Record<string, never>,
      CompleteDigitalCardStatus | string
    >;
  };
  DigitalCardNotFoundRejection?: {
    identifier?: GraphCacheResolver<
      WithTypename<DigitalCardNotFoundRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    message?: GraphCacheResolver<
      WithTypename<DigitalCardNotFoundRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  DigitalCardPendingStatusInfo?: {
    status?: GraphCacheResolver<
      WithTypename<DigitalCardPendingStatusInfo>,
      Record<string, never>,
      PendingDigitalCardStatus | string
    >;
  };
  DigitalCardSuspendedStatusInfo?: {
    enabledAt?: GraphCacheResolver<
      WithTypename<DigitalCardSuspendedStatusInfo>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<DigitalCardSuspendedStatusInfo>,
      Record<string, never>,
      CompleteDigitalCardStatus | string
    >;
    suspendedAt?: GraphCacheResolver<
      WithTypename<DigitalCardSuspendedStatusInfo>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
  };
  DisabledMerchantPaymentMethodStatusInfo?: {
    disabledAt?: GraphCacheResolver<
      WithTypename<DisabledMerchantPaymentMethodStatusInfo>,
      Record<string, never>,
      Scalars["Date"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<DisabledMerchantPaymentMethodStatusInfo>,
      Record<string, never>,
      MerchantPaymentMethodStatus | string
    >;
  };
  EnabledCardDesignNotFoundRejection?: {
    message?: GraphCacheResolver<
      WithTypename<EnabledCardDesignNotFoundRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  EnabledMerchantPaymentMethodStatusInfo?: {
    enabledAt?: GraphCacheResolver<
      WithTypename<EnabledMerchantPaymentMethodStatusInfo>,
      Record<string, never>,
      Scalars["Date"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<EnabledMerchantPaymentMethodStatusInfo>,
      Record<string, never>,
      MerchantPaymentMethodStatus | string
    >;
  };
  EnabledMerchantProfileStatusInfo?: {
    enabledAt?: GraphCacheResolver<
      WithTypename<EnabledMerchantProfileStatusInfo>,
      Record<string, never>,
      Scalars["Date"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<EnabledMerchantProfileStatusInfo>,
      Record<string, never>,
      MerchantProfileStatus | string
    >;
  };
  ExpiredMerchantPaymentLinkStatusInfo?: {
    expiredAt?: GraphCacheResolver<
      WithTypename<ExpiredMerchantPaymentLinkStatusInfo>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<ExpiredMerchantPaymentLinkStatusInfo>,
      Record<string, never>,
      MerchantPaymentLinkStatus | string
    >;
  };
  ExternalAccountAlreadyExistsRejection?: {
    accountHolderId?: GraphCacheResolver<
      WithTypename<ExternalAccountAlreadyExistsRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    iban?: GraphCacheResolver<
      WithTypename<ExternalAccountAlreadyExistsRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    message?: GraphCacheResolver<
      WithTypename<ExternalAccountAlreadyExistsRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  ForbiddenRejection?: {
    message?: GraphCacheResolver<
      WithTypename<ForbiddenRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  FundingLimitAmount?: {
    amount?: GraphCacheResolver<
      WithTypename<FundingLimitAmount>,
      Record<string, never>,
      WithTypename<Amount> | string
    >;
  };
  FundingLimitSettingsChangeRequest?: {
    approved?: GraphCacheResolver<
      WithTypename<FundingLimitSettingsChangeRequest>,
      Record<string, never>,
      WithTypename<ApprovedFundingLimit> | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<FundingLimitSettingsChangeRequest>,
      Record<string, never>,
      Scalars["Date"] | string
    >;
    fundingLimit?: GraphCacheResolver<
      WithTypename<FundingLimitSettingsChangeRequest>,
      Record<string, never>,
      WithTypename<FundingLimitAmount> | string
    >;
    id?: GraphCacheResolver<
      WithTypename<FundingLimitSettingsChangeRequest>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    instantFundingLimit?: GraphCacheResolver<
      WithTypename<FundingLimitSettingsChangeRequest>,
      Record<string, never>,
      WithTypename<FundingLimitAmount> | string
    >;
    statusInfo?: GraphCacheResolver<
      WithTypename<FundingLimitSettingsChangeRequest>,
      Record<string, never>,
      | WithTypename<FundingLimitSettingsChangeRequestApprovedStatusInfo>
      | WithTypename<FundingLimitSettingsChangeRequestPendingStatusInfo>
      | WithTypename<FundingLimitSettingsChangeRequestRefusedStatusInfo>
      | WithTypename<FundingLimitSettingsChangeRequestWaitingForInformationStatusInfo>
      | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<FundingLimitSettingsChangeRequest>,
      Record<string, never>,
      Scalars["Date"] | string
    >;
  };
  FundingLimitSettingsChangeRequestApprovedStatusInfo?: {
    reason?: GraphCacheResolver<
      WithTypename<FundingLimitSettingsChangeRequestApprovedStatusInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<FundingLimitSettingsChangeRequestApprovedStatusInfo>,
      Record<string, never>,
      FundingLimitSettingsChangeRequestStatus | string
    >;
  };
  FundingLimitSettingsChangeRequestConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<FundingLimitSettingsChangeRequestConnection>,
      Record<string, never>,
      Array<WithTypename<FundingLimitSettingsChangeRequestEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<FundingLimitSettingsChangeRequestConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
    totalCount?: GraphCacheResolver<
      WithTypename<FundingLimitSettingsChangeRequestConnection>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  FundingLimitSettingsChangeRequestEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<FundingLimitSettingsChangeRequestEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<FundingLimitSettingsChangeRequestEdge>,
      Record<string, never>,
      WithTypename<FundingLimitSettingsChangeRequest> | string
    >;
  };
  FundingLimitSettingsChangeRequestPendingStatusInfo?: {
    status?: GraphCacheResolver<
      WithTypename<FundingLimitSettingsChangeRequestPendingStatusInfo>,
      Record<string, never>,
      FundingLimitSettingsChangeRequestStatus | string
    >;
  };
  FundingLimitSettingsChangeRequestRefusedStatusInfo?: {
    reason?: GraphCacheResolver<
      WithTypename<FundingLimitSettingsChangeRequestRefusedStatusInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<FundingLimitSettingsChangeRequestRefusedStatusInfo>,
      Record<string, never>,
      FundingLimitSettingsChangeRequestStatus | string
    >;
  };
  FundingLimitSettingsChangeRequestWaitingForInformationStatusInfo?: {
    status?: GraphCacheResolver<
      WithTypename<FundingLimitSettingsChangeRequestWaitingForInformationStatusInfo>,
      Record<string, never>,
      FundingLimitSettingsChangeRequestStatus | string
    >;
  };
  GenerateSupportingDocumentUploadUrlSuccessPayload?: {
    supportingDocumentId?: GraphCacheResolver<
      WithTypename<GenerateSupportingDocumentUploadUrlSuccessPayload>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    upload?: GraphCacheResolver<
      WithTypename<GenerateSupportingDocumentUploadUrlSuccessPayload>,
      Record<string, never>,
      WithTypename<SupportingDocumentUploadInfo> | string
    >;
  };
  Headquarters?: {
    address?: GraphCacheResolver<
      WithTypename<Headquarters>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    town?: GraphCacheResolver<
      WithTypename<Headquarters>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    zipCode?: GraphCacheResolver<
      WithTypename<Headquarters>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  IBANNotReachableRejection?: {
    message?: GraphCacheResolver<
      WithTypename<IbanNotReachableRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  IBANNotValidRejection?: {
    message?: GraphCacheResolver<
      WithTypename<IbanNotValidRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  IbanValidationRejection?: {
    message?: GraphCacheResolver<
      WithTypename<IbanValidationRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  IdentificationLevels?: {
    PVID?: GraphCacheResolver<
      WithTypename<IdentificationLevels>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    QES?: GraphCacheResolver<
      WithTypename<IdentificationLevels>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    expert?: GraphCacheResolver<
      WithTypename<IdentificationLevels>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
  };
  IdentityAlreadyBindToAccountMembershipRejection?: {
    accountId?: GraphCacheResolver<
      WithTypename<IdentityAlreadyBindToAccountMembershipRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    identityId?: GraphCacheResolver<
      WithTypename<IdentityAlreadyBindToAccountMembershipRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    message?: GraphCacheResolver<
      WithTypename<IdentityAlreadyBindToAccountMembershipRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  InAppProvisioningData?: {
    activationData?: GraphCacheResolver<
      WithTypename<InAppProvisioningData>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    encryptedData?: GraphCacheResolver<
      WithTypename<InAppProvisioningData>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    ephemeralPublicKey?: GraphCacheResolver<
      WithTypename<InAppProvisioningData>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    iv?: GraphCacheResolver<
      WithTypename<InAppProvisioningData>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    oaepHashingAlgorithm?: GraphCacheResolver<
      WithTypename<InAppProvisioningData>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    publicKeyFingerprint?: GraphCacheResolver<
      WithTypename<InAppProvisioningData>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  IndividualUltimateBeneficialOwner?: {
    birthCity?: GraphCacheResolver<
      WithTypename<IndividualUltimateBeneficialOwner>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    birthCityPostalCode?: GraphCacheResolver<
      WithTypename<IndividualUltimateBeneficialOwner>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    birthCountryCode?: GraphCacheResolver<
      WithTypename<IndividualUltimateBeneficialOwner>,
      Record<string, never>,
      Scalars["CCA3"] | string
    >;
    birthDate?: GraphCacheResolver<
      WithTypename<IndividualUltimateBeneficialOwner>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    firstName?: GraphCacheResolver<
      WithTypename<IndividualUltimateBeneficialOwner>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    info?: GraphCacheResolver<
      WithTypename<IndividualUltimateBeneficialOwner>,
      Record<string, never>,
      | WithTypename<IndividualUltimateBeneficialOwnerTypeHasCapital>
      | WithTypename<IndividualUltimateBeneficialOwnerTypeLegalRepresentative>
      | WithTypename<IndividualUltimateBeneficialOwnerTypeOther>
      | string
    >;
    lastName?: GraphCacheResolver<
      WithTypename<IndividualUltimateBeneficialOwner>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    residencyAddress?: GraphCacheResolver<
      WithTypename<IndividualUltimateBeneficialOwner>,
      Record<string, never>,
      WithTypename<AddressInformation> | string
    >;
    taxIdentificationNumber?: GraphCacheResolver<
      WithTypename<IndividualUltimateBeneficialOwner>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    title?: GraphCacheResolver<
      WithTypename<IndividualUltimateBeneficialOwner>,
      Record<string, never>,
      TitleEnum | string
    >;
  };
  IndividualUltimateBeneficialOwnerTypeHasCapital?: {
    direct?: GraphCacheResolver<
      WithTypename<IndividualUltimateBeneficialOwnerTypeHasCapital>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    indirect?: GraphCacheResolver<
      WithTypename<IndividualUltimateBeneficialOwnerTypeHasCapital>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    totalCapitalPercentage?: GraphCacheResolver<
      WithTypename<IndividualUltimateBeneficialOwnerTypeHasCapital>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
    type?: GraphCacheResolver<
      WithTypename<IndividualUltimateBeneficialOwnerTypeHasCapital>,
      Record<string, never>,
      IndividualUltimateBeneficialOwnerTypeEnum | string
    >;
  };
  IndividualUltimateBeneficialOwnerTypeLegalRepresentative?: {
    type?: GraphCacheResolver<
      WithTypename<IndividualUltimateBeneficialOwnerTypeLegalRepresentative>,
      Record<string, never>,
      IndividualUltimateBeneficialOwnerTypeEnum | string
    >;
  };
  IndividualUltimateBeneficialOwnerTypeOther?: {
    type?: GraphCacheResolver<
      WithTypename<IndividualUltimateBeneficialOwnerTypeOther>,
      Record<string, never>,
      IndividualUltimateBeneficialOwnerTypeEnum | string
    >;
  };
  InternalDirectDebitB2BMerchantPaymentMethod?: {
    id?: GraphCacheResolver<
      WithTypename<InternalDirectDebitB2BMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    methodId?: GraphCacheResolver<
      WithTypename<InternalDirectDebitB2BMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    productId?: GraphCacheResolver<
      WithTypename<InternalDirectDebitB2BMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    rollingReserve?: GraphCacheResolver<
      WithTypename<InternalDirectDebitB2BMerchantPaymentMethod>,
      Record<string, never>,
      WithTypename<RollingReserve> | string
    >;
    statusInfo?: GraphCacheResolver<
      WithTypename<InternalDirectDebitB2BMerchantPaymentMethod>,
      Record<string, never>,
      | WithTypename<CanceledMerchantPaymentMethodStatusInfo>
      | WithTypename<DisabledMerchantPaymentMethodStatusInfo>
      | WithTypename<EnabledMerchantPaymentMethodStatusInfo>
      | WithTypename<PendingMerchantPaymentMethodStatusInfo>
      | WithTypename<RejectedMerchantPaymentMethodStatusInfo>
      | WithTypename<SuspendedMerchantPaymentMethodStatusInfo>
      | string
    >;
    type?: GraphCacheResolver<
      WithTypename<InternalDirectDebitB2BMerchantPaymentMethod>,
      Record<string, never>,
      MerchantPaymentMethodType | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<InternalDirectDebitB2BMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["Date"] | string
    >;
    version?: GraphCacheResolver<
      WithTypename<InternalDirectDebitB2BMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  InternalDirectDebitStandardMerchantPaymentMethod?: {
    id?: GraphCacheResolver<
      WithTypename<InternalDirectDebitStandardMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    methodId?: GraphCacheResolver<
      WithTypename<InternalDirectDebitStandardMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    productId?: GraphCacheResolver<
      WithTypename<InternalDirectDebitStandardMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    rollingReserve?: GraphCacheResolver<
      WithTypename<InternalDirectDebitStandardMerchantPaymentMethod>,
      Record<string, never>,
      WithTypename<RollingReserve> | string
    >;
    statusInfo?: GraphCacheResolver<
      WithTypename<InternalDirectDebitStandardMerchantPaymentMethod>,
      Record<string, never>,
      | WithTypename<CanceledMerchantPaymentMethodStatusInfo>
      | WithTypename<DisabledMerchantPaymentMethodStatusInfo>
      | WithTypename<EnabledMerchantPaymentMethodStatusInfo>
      | WithTypename<PendingMerchantPaymentMethodStatusInfo>
      | WithTypename<RejectedMerchantPaymentMethodStatusInfo>
      | WithTypename<SuspendedMerchantPaymentMethodStatusInfo>
      | string
    >;
    type?: GraphCacheResolver<
      WithTypename<InternalDirectDebitStandardMerchantPaymentMethod>,
      Record<string, never>,
      MerchantPaymentMethodType | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<InternalDirectDebitStandardMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["Date"] | string
    >;
    version?: GraphCacheResolver<
      WithTypename<InternalDirectDebitStandardMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  InternalErrorRejection?: {
    message?: GraphCacheResolver<
      WithTypename<InternalErrorRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  InvalidArgumentRejection?: {
    code?: GraphCacheResolver<
      WithTypename<InvalidArgumentRejection>,
      Record<string, never>,
      InvalidArgumentRejectionCode | string
    >;
    fields?: GraphCacheResolver<
      WithTypename<InvalidArgumentRejection>,
      Record<string, never>,
      Array<WithTypename<InvalidArgumentRejectionField> | string>
    >;
    message?: GraphCacheResolver<
      WithTypename<InvalidArgumentRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  InvalidArgumentRejectionField?: {
    errors?: GraphCacheResolver<
      WithTypename<InvalidArgumentRejectionField>,
      Record<string, never>,
      Array<Scalars["String"] | string>
    >;
    name?: GraphCacheResolver<
      WithTypename<InvalidArgumentRejectionField>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  InvalidPhoneNumberRejection?: {
    message?: GraphCacheResolver<
      WithTypename<InvalidPhoneNumberRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  InvalidSirenNumberRejection?: {
    message?: GraphCacheResolver<
      WithTypename<InvalidSirenNumberRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  LegalRepresentativeAccountMembershipCannotBeDisabledRejection?: {
    accountMembershipId?: GraphCacheResolver<
      WithTypename<LegalRepresentativeAccountMembershipCannotBeDisabledRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    message?: GraphCacheResolver<
      WithTypename<LegalRepresentativeAccountMembershipCannotBeDisabledRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  LegalRepresentativeAccountMembershipCannotBeSuspendedRejection?: {
    id?: GraphCacheResolver<
      WithTypename<LegalRepresentativeAccountMembershipCannotBeSuspendedRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    message?: GraphCacheResolver<
      WithTypename<LegalRepresentativeAccountMembershipCannotBeSuspendedRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  MaskedCardInfo?: {
    cardHolderName?: GraphCacheResolver<
      WithTypename<MaskedCardInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    maskedCvv?: GraphCacheResolver<
      WithTypename<MaskedCardInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    maskedExpiryDate?: GraphCacheResolver<
      WithTypename<MaskedCardInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    maskedPan?: GraphCacheResolver<
      WithTypename<MaskedCardInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  MerchantPaymentLink?: {
    amount?: GraphCacheResolver<
      WithTypename<MerchantPaymentLink>,
      Record<string, never>,
      WithTypename<Amount> | string
    >;
    billingAddress?: GraphCacheResolver<
      WithTypename<MerchantPaymentLink>,
      Record<string, never>,
      WithTypename<Address> | string
    >;
    cancelRedirectUrl?: GraphCacheResolver<
      WithTypename<MerchantPaymentLink>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    customer?: GraphCacheResolver<
      WithTypename<MerchantPaymentLink>,
      Record<string, never>,
      WithTypename<Customer> | string
    >;
    externalReference?: GraphCacheResolver<
      WithTypename<MerchantPaymentLink>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<MerchantPaymentLink>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    label?: GraphCacheResolver<
      WithTypename<MerchantPaymentLink>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    language?: GraphCacheResolver<
      WithTypename<MerchantPaymentLink>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    merchantProfile?: GraphCacheResolver<
      WithTypename<MerchantPaymentLink>,
      Record<string, never>,
      WithTypename<MerchantProfile> | string
    >;
    paymentMethods?: GraphCacheResolver<
      WithTypename<MerchantPaymentLink>,
      Record<string, never>,
      Array<
        | WithTypename<CheckMerchantPaymentMethod>
        | WithTypename<InternalDirectDebitB2BMerchantPaymentMethod>
        | WithTypename<InternalDirectDebitStandardMerchantPaymentMethod>
        | WithTypename<SepaDirectDebitB2BMerchantPaymentMethod>
        | WithTypename<SepaDirectDebitCoreMerchantPaymentMethod>
        | string
      >
    >;
    projectId?: GraphCacheResolver<
      WithTypename<MerchantPaymentLink>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    redirectUrl?: GraphCacheResolver<
      WithTypename<MerchantPaymentLink>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    reference?: GraphCacheResolver<
      WithTypename<MerchantPaymentLink>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    requestedExecutionAt?: GraphCacheResolver<
      WithTypename<MerchantPaymentLink>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    sequence?: GraphCacheResolver<
      WithTypename<MerchantPaymentLink>,
      Record<string, never>,
      PaymentLinkSequenceType | string
    >;
    statusInfo?: GraphCacheResolver<
      WithTypename<MerchantPaymentLink>,
      Record<string, never>,
      | WithTypename<ActiveMerchantPaymentLinkStatusInfo>
      | WithTypename<CanceledMerchantPaymentLinkStatusInfo>
      | WithTypename<CompletedMerchantPaymentLinkStatusInfo>
      | WithTypename<ExpiredMerchantPaymentLinkStatusInfo>
      | string
    >;
    url?: GraphCacheResolver<
      WithTypename<MerchantPaymentLink>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  MerchantPaymentMethodNotActiveRejection?: {
    message?: GraphCacheResolver<
      WithTypename<MerchantPaymentMethodNotActiveRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    paymentMethodIds?: GraphCacheResolver<
      WithTypename<MerchantPaymentMethodNotActiveRejection>,
      Record<string, never>,
      Array<Scalars["String"] | string>
    >;
  };
  MerchantProfile?: {
    accountId?: GraphCacheResolver<
      WithTypename<MerchantProfile>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<MerchantProfile>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    expectedAverageBasket?: GraphCacheResolver<
      WithTypename<MerchantProfile>,
      Record<string, never>,
      WithTypename<Amount> | string
    >;
    expectedMonthlyPaymentVolume?: GraphCacheResolver<
      WithTypename<MerchantProfile>,
      Record<string, never>,
      WithTypename<Amount> | string
    >;
    id?: GraphCacheResolver<
      WithTypename<MerchantProfile>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    merchantLogoUrl?: GraphCacheResolver<
      WithTypename<MerchantProfile>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    merchantName?: GraphCacheResolver<
      WithTypename<MerchantProfile>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    merchantPaymentMethods?: GraphCacheResolver<
      WithTypename<MerchantProfile>,
      Record<string, never>,
      Array<
        | WithTypename<CheckMerchantPaymentMethod>
        | WithTypename<InternalDirectDebitB2BMerchantPaymentMethod>
        | WithTypename<InternalDirectDebitStandardMerchantPaymentMethod>
        | WithTypename<SepaDirectDebitB2BMerchantPaymentMethod>
        | WithTypename<SepaDirectDebitCoreMerchantPaymentMethod>
        | string
      >
    >;
    merchantWebsite?: GraphCacheResolver<
      WithTypename<MerchantProfile>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    productType?: GraphCacheResolver<
      WithTypename<MerchantProfile>,
      Record<string, never>,
      ProductType | string
    >;
    requestedMerchantProfileUpdates?: GraphCacheResolver<
      WithTypename<MerchantProfile>,
      Record<string, never>,
      Array<WithTypename<RequestMerchantProfileUpdate> | string>
    >;
    statusInfo?: GraphCacheResolver<
      WithTypename<MerchantProfile>,
      Record<string, never>,
      | WithTypename<CanceledMerchantProfileStatusInfo>
      | WithTypename<EnabledMerchantProfileStatusInfo>
      | WithTypename<PendingReviewMerchantProfileStatusInfo>
      | WithTypename<RejectedMerchantProfileStatusInfo>
      | WithTypename<SuspendedMerchantProfileStatusInfo>
      | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<MerchantProfile>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
  };
  MerchantProfileWrongStatusRejection?: {
    currentStatus?: GraphCacheResolver<
      WithTypename<MerchantProfileWrongStatusRejection>,
      Record<string, never>,
      MerchantProfileStatus | string
    >;
    expectedStatus?: GraphCacheResolver<
      WithTypename<MerchantProfileWrongStatusRejection>,
      Record<string, never>,
      MerchantProfileStatus | string
    >;
    message?: GraphCacheResolver<
      WithTypename<MerchantProfileWrongStatusRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  MissingMandatoryFieldRejection?: {
    message?: GraphCacheResolver<
      WithTypename<MissingMandatoryFieldRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  NotFoundRejection?: {
    id?: GraphCacheResolver<
      WithTypename<NotFoundRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    message?: GraphCacheResolver<
      WithTypename<NotFoundRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  NotReachableConsentStatusRejection?: {
    currentStatus?: GraphCacheResolver<
      WithTypename<NotReachableConsentStatusRejection>,
      Record<string, never>,
      ConsentStatus | string
    >;
    message?: GraphCacheResolver<
      WithTypename<NotReachableConsentStatusRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    unreachableStatus?: GraphCacheResolver<
      WithTypename<NotReachableConsentStatusRejection>,
      Record<string, never>,
      ConsentStatus | string
    >;
  };
  NotSupportedCountryRejection?: {
    message?: GraphCacheResolver<
      WithTypename<NotSupportedCountryRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  OAuthRedirectParameters?: {
    redirectUrl?: GraphCacheResolver<
      WithTypename<OAuthRedirectParameters>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    state?: GraphCacheResolver<
      WithTypename<OAuthRedirectParameters>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  Onboarding?: {
    account?: GraphCacheResolver<
      WithTypename<Onboarding>,
      Record<string, never>,
      WithTypename<Account> | string
    >;
    accountCountry?: GraphCacheResolver<
      WithTypename<Onboarding>,
      Record<string, never>,
      AccountCountry | string
    >;
    accountHolder?: GraphCacheResolver<
      WithTypename<Onboarding>,
      Record<string, never>,
      WithTypename<AccountHolder> | string
    >;
    accountName?: GraphCacheResolver<
      WithTypename<Onboarding>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<Onboarding>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    email?: GraphCacheResolver<
      WithTypename<Onboarding>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    finalizedAt?: GraphCacheResolver<
      WithTypename<Onboarding>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<Onboarding>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    info?: GraphCacheResolver<
      WithTypename<Onboarding>,
      Record<string, never>,
      | WithTypename<OnboardingCompanyAccountHolderInfo>
      | WithTypename<OnboardingIndividualAccountHolderInfo>
      | string
    >;
    language?: GraphCacheResolver<
      WithTypename<Onboarding>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    legalRepresentativeAcceptedIdentificationLevels?: GraphCacheResolver<
      WithTypename<Onboarding>,
      Record<string, never>,
      Array<IdentificationLevel | string>
    >;
    legalRepresentativeRecommendedIdentificationLevel?: GraphCacheResolver<
      WithTypename<Onboarding>,
      Record<string, never>,
      IdentificationLevel | string
    >;
    oAuthRedirectParameters?: GraphCacheResolver<
      WithTypename<Onboarding>,
      Record<string, never>,
      WithTypename<OAuthRedirectParameters> | string
    >;
    onboardingState?: GraphCacheResolver<
      WithTypename<Onboarding>,
      Record<string, never>,
      OnboardingState | string
    >;
    onboardingUrl?: GraphCacheResolver<
      WithTypename<Onboarding>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    redirectUrl?: GraphCacheResolver<
      WithTypename<Onboarding>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    statusInfo?: GraphCacheResolver<
      WithTypename<Onboarding>,
      Record<string, never>,
      | WithTypename<OnboardingFinalizedStatusInfo>
      | WithTypename<OnboardingInvalidStatusInfo>
      | WithTypename<OnboardingValidStatusInfo>
      | string
    >;
    supportingDocumentCollection?: GraphCacheResolver<
      WithTypename<Onboarding>,
      Record<string, never>,
      WithTypename<SupportingDocumentCollection> | string
    >;
    tcuUrl?: GraphCacheResolver<
      WithTypename<Onboarding>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<Onboarding>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
  };
  OnboardingCompanyAccountHolderInfo?: {
    businessActivity?: GraphCacheResolver<
      WithTypename<OnboardingCompanyAccountHolderInfo>,
      Record<string, never>,
      BusinessActivity | string
    >;
    businessActivityDescription?: GraphCacheResolver<
      WithTypename<OnboardingCompanyAccountHolderInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    companyType?: GraphCacheResolver<
      WithTypename<OnboardingCompanyAccountHolderInfo>,
      Record<string, never>,
      CompanyType | string
    >;
    individualUltimateBeneficialOwners?: GraphCacheResolver<
      WithTypename<OnboardingCompanyAccountHolderInfo>,
      Record<string, never>,
      Array<WithTypename<IndividualUltimateBeneficialOwner> | string>
    >;
    isRegistered?: GraphCacheResolver<
      WithTypename<OnboardingCompanyAccountHolderInfo>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    legalRepresentativePersonalAddress?: GraphCacheResolver<
      WithTypename<OnboardingCompanyAccountHolderInfo>,
      Record<string, never>,
      WithTypename<AddressInformation> | string
    >;
    monthlyPaymentVolume?: GraphCacheResolver<
      WithTypename<OnboardingCompanyAccountHolderInfo>,
      Record<string, never>,
      MonthlyPaymentVolume | string
    >;
    name?: GraphCacheResolver<
      WithTypename<OnboardingCompanyAccountHolderInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    registrationNumber?: GraphCacheResolver<
      WithTypename<OnboardingCompanyAccountHolderInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    residencyAddress?: GraphCacheResolver<
      WithTypename<OnboardingCompanyAccountHolderInfo>,
      Record<string, never>,
      WithTypename<AddressInfo> | string
    >;
    taxIdentificationNumber?: GraphCacheResolver<
      WithTypename<OnboardingCompanyAccountHolderInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    type?: GraphCacheResolver<
      WithTypename<OnboardingCompanyAccountHolderInfo>,
      Record<string, never>,
      AccountHolderType | string
    >;
    typeOfRepresentation?: GraphCacheResolver<
      WithTypename<OnboardingCompanyAccountHolderInfo>,
      Record<string, never>,
      TypeOfRepresentation | string
    >;
    vatNumber?: GraphCacheResolver<
      WithTypename<OnboardingCompanyAccountHolderInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  OnboardingConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<OnboardingConnection>,
      Record<string, never>,
      Array<WithTypename<OnboardingEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<OnboardingConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
    totalCount?: GraphCacheResolver<
      WithTypename<OnboardingConnection>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  OnboardingEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<OnboardingEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<OnboardingEdge>,
      Record<string, never>,
      WithTypename<Onboarding> | string
    >;
  };
  OnboardingFinalizedStatusInfo?: {
    status?: GraphCacheResolver<
      WithTypename<OnboardingFinalizedStatusInfo>,
      Record<string, never>,
      OnboardingStatus | string
    >;
  };
  OnboardingIndividualAccountHolderInfo?: {
    employmentStatus?: GraphCacheResolver<
      WithTypename<OnboardingIndividualAccountHolderInfo>,
      Record<string, never>,
      EmploymentStatus | string
    >;
    monthlyIncome?: GraphCacheResolver<
      WithTypename<OnboardingIndividualAccountHolderInfo>,
      Record<string, never>,
      MonthlyIncome | string
    >;
    residencyAddress?: GraphCacheResolver<
      WithTypename<OnboardingIndividualAccountHolderInfo>,
      Record<string, never>,
      WithTypename<AddressInfo> | string
    >;
    taxIdentificationNumber?: GraphCacheResolver<
      WithTypename<OnboardingIndividualAccountHolderInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    type?: GraphCacheResolver<
      WithTypename<OnboardingIndividualAccountHolderInfo>,
      Record<string, never>,
      AccountHolderType | string
    >;
  };
  OnboardingInfo?: {
    accountCountry?: GraphCacheResolver<
      WithTypename<OnboardingInfo>,
      Record<string, never>,
      AccountCountry | string
    >;
    accountName?: GraphCacheResolver<
      WithTypename<OnboardingInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    email?: GraphCacheResolver<
      WithTypename<OnboardingInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<OnboardingInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    info?: GraphCacheResolver<
      WithTypename<OnboardingInfo>,
      Record<string, never>,
      | WithTypename<OnboardingCompanyAccountHolderInfo>
      | WithTypename<OnboardingIndividualAccountHolderInfo>
      | string
    >;
    language?: GraphCacheResolver<
      WithTypename<OnboardingInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    legalRepresentativeAcceptedIdentificationLevels?: GraphCacheResolver<
      WithTypename<OnboardingInfo>,
      Record<string, never>,
      Array<IdentificationLevel | string>
    >;
    legalRepresentativeRecommendedIdentificationLevel?: GraphCacheResolver<
      WithTypename<OnboardingInfo>,
      Record<string, never>,
      IdentificationLevel | string
    >;
    oAuthRedirectParameters?: GraphCacheResolver<
      WithTypename<OnboardingInfo>,
      Record<string, never>,
      WithTypename<OAuthRedirectParameters> | string
    >;
    onboardingState?: GraphCacheResolver<
      WithTypename<OnboardingInfo>,
      Record<string, never>,
      OnboardingState | string
    >;
    onboardingUrl?: GraphCacheResolver<
      WithTypename<OnboardingInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    projectInfo?: GraphCacheResolver<
      WithTypename<OnboardingInfo>,
      Record<string, never>,
      WithTypename<ProjectInfo> | string
    >;
    redirectUrl?: GraphCacheResolver<
      WithTypename<OnboardingInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    statusInfo?: GraphCacheResolver<
      WithTypename<OnboardingInfo>,
      Record<string, never>,
      | WithTypename<OnboardingFinalizedStatusInfo>
      | WithTypename<OnboardingInvalidStatusInfo>
      | WithTypename<OnboardingValidStatusInfo>
      | string
    >;
    supportingDocumentCollection?: GraphCacheResolver<
      WithTypename<OnboardingInfo>,
      Record<string, never>,
      WithTypename<SupportingDocumentCollection> | string
    >;
    tcuUrl?: GraphCacheResolver<
      WithTypename<OnboardingInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    verificationFlow?: GraphCacheResolver<
      WithTypename<OnboardingInfo>,
      Record<string, never>,
      VerificationFlow | string
    >;
  };
  OnboardingInvalidStatusInfo?: {
    errors?: GraphCacheResolver<
      WithTypename<OnboardingInvalidStatusInfo>,
      Record<string, never>,
      Array<WithTypename<ValidationError> | string>
    >;
    status?: GraphCacheResolver<
      WithTypename<OnboardingInvalidStatusInfo>,
      Record<string, never>,
      OnboardingStatus | string
    >;
  };
  OnboardingNotCompletedRejection?: {
    message?: GraphCacheResolver<
      WithTypename<OnboardingNotCompletedRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    onboarding?: GraphCacheResolver<
      WithTypename<OnboardingNotCompletedRejection>,
      Record<string, never>,
      WithTypename<Onboarding> | string
    >;
    onboardingId?: GraphCacheResolver<
      WithTypename<OnboardingNotCompletedRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  OnboardingValidStatusInfo?: {
    status?: GraphCacheResolver<
      WithTypename<OnboardingValidStatusInfo>,
      Record<string, never>,
      OnboardingStatus | string
    >;
  };
  PageInfo?: {
    endCursor?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    hasNextPage?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    hasPreviousPage?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    startCursor?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  PartnershipAcceptedStatusInfo?: {
    acceptedDate?: GraphCacheResolver<
      WithTypename<PartnershipAcceptedStatusInfo>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<PartnershipAcceptedStatusInfo>,
      Record<string, never>,
      PartnershipStatus | string
    >;
  };
  PartnershipCanceledStatusInfo?: {
    acceptedDate?: GraphCacheResolver<
      WithTypename<PartnershipCanceledStatusInfo>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    canceledDate?: GraphCacheResolver<
      WithTypename<PartnershipCanceledStatusInfo>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    reason?: GraphCacheResolver<
      WithTypename<PartnershipCanceledStatusInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<PartnershipCanceledStatusInfo>,
      Record<string, never>,
      PartnershipStatus | string
    >;
  };
  PartnershipCancelingStatusInfo?: {
    acceptedDate?: GraphCacheResolver<
      WithTypename<PartnershipCancelingStatusInfo>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    canceledAfter?: GraphCacheResolver<
      WithTypename<PartnershipCancelingStatusInfo>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<PartnershipCancelingStatusInfo>,
      Record<string, never>,
      PartnershipStatus | string
    >;
  };
  PaymentMandateReferenceAlreadyUsedRejection?: {
    message?: GraphCacheResolver<
      WithTypename<PaymentMandateReferenceAlreadyUsedRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  PaymentMethodNotCompatibleRejection?: {
    message?: GraphCacheResolver<
      WithTypename<PaymentMethodNotCompatibleRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  PendingDigitalCard?: {
    createdAt?: GraphCacheResolver<
      WithTypename<PendingDigitalCard>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<PendingDigitalCard>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    inAppProvisioningData?: GraphCacheResolver<
      WithTypename<PendingDigitalCard>,
      PendingDigitalCardInAppProvisioningDataArgs,
      WithTypename<InAppProvisioningData> | string
    >;
    statusInfo?: GraphCacheResolver<
      WithTypename<PendingDigitalCard>,
      Record<string, never>,
      | WithTypename<DigitalCardConsentPendingStatusInfo>
      | WithTypename<DigitalCardDeclinedStatusInfo>
      | WithTypename<DigitalCardPendingStatusInfo>
      | string
    >;
    type?: GraphCacheResolver<
      WithTypename<PendingDigitalCard>,
      Record<string, never>,
      DigitalizationType | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<PendingDigitalCard>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    walletProvider?: GraphCacheResolver<
      WithTypename<PendingDigitalCard>,
      Record<string, never>,
      WithTypename<WalletProvider> | string
    >;
  };
  PendingMerchantPaymentMethodStatusInfo?: {
    status?: GraphCacheResolver<
      WithTypename<PendingMerchantPaymentMethodStatusInfo>,
      Record<string, never>,
      MerchantPaymentMethodStatus | string
    >;
  };
  PendingReviewMerchantProfileStatusInfo?: {
    status?: GraphCacheResolver<
      WithTypename<PendingReviewMerchantProfileStatusInfo>,
      Record<string, never>,
      MerchantProfileStatus | string
    >;
  };
  PermissionCannotBeGrantedRejection?: {
    message?: GraphCacheResolver<
      WithTypename<PermissionCannotBeGrantedRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  PhysicalCard?: {
    cardMaskedNumber?: GraphCacheResolver<
      WithTypename<PhysicalCard>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    customOptions?: GraphCacheResolver<
      WithTypename<PhysicalCard>,
      Record<string, never>,
      WithTypename<PhysicalCardCustomOptions> | string
    >;
    expiryDate?: GraphCacheResolver<
      WithTypename<PhysicalCard>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    identifier?: GraphCacheResolver<
      WithTypename<PhysicalCard>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    offlineSpendingLimit?: GraphCacheResolver<
      WithTypename<PhysicalCard>,
      Record<string, never>,
      WithTypename<Amount> | string
    >;
    statusInfo?: GraphCacheResolver<
      WithTypename<PhysicalCard>,
      Record<string, never>,
      | WithTypename<PhysicalCardActivatedStatusInfo>
      | WithTypename<PhysicalCardCanceledStatusInfo>
      | WithTypename<PhysicalCardCancelingStatusInfo>
      | WithTypename<PhysicalCardConsentPendingStatusInfo>
      | WithTypename<PhysicalCardProcessingStatusInfo>
      | WithTypename<PhysicalCardRenewedStatusInfo>
      | WithTypename<PhysicalCardSuspendedStatusInfo>
      | WithTypename<PhysicalCardToActivateStatusInfo>
      | string
    >;
  };
  PhysicalCardActivatedStatusInfo?: {
    status?: GraphCacheResolver<
      WithTypename<PhysicalCardActivatedStatusInfo>,
      Record<string, never>,
      PhysicalCardStatus | string
    >;
  };
  PhysicalCardCanceledStatusInfo?: {
    reason?: GraphCacheResolver<
      WithTypename<PhysicalCardCanceledStatusInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<PhysicalCardCanceledStatusInfo>,
      Record<string, never>,
      PhysicalCardStatus | string
    >;
  };
  PhysicalCardCancelingStatusInfo?: {
    reason?: GraphCacheResolver<
      WithTypename<PhysicalCardCancelingStatusInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<PhysicalCardCancelingStatusInfo>,
      Record<string, never>,
      PhysicalCardStatus | string
    >;
  };
  PhysicalCardConsentPendingStatusInfo?: {
    consent?: GraphCacheResolver<
      WithTypename<PhysicalCardConsentPendingStatusInfo>,
      Record<string, never>,
      WithTypename<Consent> | string
    >;
    status?: GraphCacheResolver<
      WithTypename<PhysicalCardConsentPendingStatusInfo>,
      Record<string, never>,
      PhysicalCardStatus | string
    >;
  };
  PhysicalCardCustomOptions?: {
    additionalPrintedLine?: GraphCacheResolver<
      WithTypename<PhysicalCardCustomOptions>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  PhysicalCardNotFoundRejection?: {
    identifier?: GraphCacheResolver<
      WithTypename<PhysicalCardNotFoundRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    message?: GraphCacheResolver<
      WithTypename<PhysicalCardNotFoundRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  PhysicalCardProcessingStatusInfo?: {
    status?: GraphCacheResolver<
      WithTypename<PhysicalCardProcessingStatusInfo>,
      Record<string, never>,
      PhysicalCardStatus | string
    >;
  };
  PhysicalCardRenewedStatusInfo?: {
    address?: GraphCacheResolver<
      WithTypename<PhysicalCardRenewedStatusInfo>,
      Record<string, never>,
      WithTypename<Address> | string
    >;
    estimatedDeliveryDate?: GraphCacheResolver<
      WithTypename<PhysicalCardRenewedStatusInfo>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    isPINReady?: GraphCacheResolver<
      WithTypename<PhysicalCardRenewedStatusInfo>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    shippingProvider?: GraphCacheResolver<
      WithTypename<PhysicalCardRenewedStatusInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<PhysicalCardRenewedStatusInfo>,
      Record<string, never>,
      PhysicalCardStatus | string
    >;
    trackingNumber?: GraphCacheResolver<
      WithTypename<PhysicalCardRenewedStatusInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  PhysicalCardSuspendedStatusInfo?: {
    reason?: GraphCacheResolver<
      WithTypename<PhysicalCardSuspendedStatusInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<PhysicalCardSuspendedStatusInfo>,
      Record<string, never>,
      PhysicalCardStatus | string
    >;
  };
  PhysicalCardToActivateStatusInfo?: {
    address?: GraphCacheResolver<
      WithTypename<PhysicalCardToActivateStatusInfo>,
      Record<string, never>,
      WithTypename<Address> | string
    >;
    estimatedDeliveryDate?: GraphCacheResolver<
      WithTypename<PhysicalCardToActivateStatusInfo>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    isPINReady?: GraphCacheResolver<
      WithTypename<PhysicalCardToActivateStatusInfo>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    shippingProvider?: GraphCacheResolver<
      WithTypename<PhysicalCardToActivateStatusInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<PhysicalCardToActivateStatusInfo>,
      Record<string, never>,
      PhysicalCardStatus | string
    >;
    trackingNumber?: GraphCacheResolver<
      WithTypename<PhysicalCardToActivateStatusInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  PhysicalCardWrongStatusRejection?: {
    currentStatus?: GraphCacheResolver<
      WithTypename<PhysicalCardWrongStatusRejection>,
      Record<string, never>,
      PhysicalCardStatus | string
    >;
    expectedStatus?: GraphCacheResolver<
      WithTypename<PhysicalCardWrongStatusRejection>,
      Record<string, never>,
      PhysicalCardStatus | string
    >;
    identifier?: GraphCacheResolver<
      WithTypename<PhysicalCardWrongStatusRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    message?: GraphCacheResolver<
      WithTypename<PhysicalCardWrongStatusRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  PreProvisioningSUVCardSettings?: {
    ownerProvisioningSUVCards?: GraphCacheResolver<
      WithTypename<PreProvisioningSuvCardSettings>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    preProvisioningSUVCards?: GraphCacheResolver<
      WithTypename<PreProvisioningSuvCardSettings>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    preProvisioningSUVCardsAvailablePercentage?: GraphCacheResolver<
      WithTypename<PreProvisioningSuvCardSettings>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
    preProvisioningSUVNumberOfCards?: GraphCacheResolver<
      WithTypename<PreProvisioningSuvCardSettings>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  ProjectCardDesigns?: {
    cardDesigns?: GraphCacheResolver<
      WithTypename<ProjectCardDesigns>,
      Record<string, never>,
      Array<WithTypename<CardProductDesign> | string>
    >;
    id?: GraphCacheResolver<
      WithTypename<ProjectCardDesigns>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    issuingProcessorVisualId?: GraphCacheResolver<
      WithTypename<ProjectCardDesigns>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    name?: GraphCacheResolver<
      WithTypename<ProjectCardDesigns>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    preProvisioningSUVCardSettings?: GraphCacheResolver<
      WithTypename<ProjectCardDesigns>,
      Record<string, never>,
      WithTypename<PreProvisioningSuvCardSettings> | string
    >;
    specificCardProductCodeForCompanies?: GraphCacheResolver<
      WithTypename<ProjectCardDesigns>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  ProjectCardSettings?: {
    cardSettings?: GraphCacheResolver<
      WithTypename<ProjectCardSettings>,
      Record<string, never>,
      Array<WithTypename<CardSettings> | string>
    >;
    id?: GraphCacheResolver<
      WithTypename<ProjectCardSettings>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    issuingProcessorVisualId?: GraphCacheResolver<
      WithTypename<ProjectCardSettings>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    name?: GraphCacheResolver<
      WithTypename<ProjectCardSettings>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    preProvisioningSUVCardSettings?: GraphCacheResolver<
      WithTypename<ProjectCardSettings>,
      Record<string, never>,
      WithTypename<PreProvisioningSuvCardSettings> | string
    >;
    specificCardProductCodeForCompanies?: GraphCacheResolver<
      WithTypename<ProjectCardSettings>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  ProjectForbiddenRejection?: {
    message?: GraphCacheResolver<
      WithTypename<ProjectForbiddenRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  ProjectInfo?: {
    B2BMembershipIDVerification?: GraphCacheResolver<
      WithTypename<ProjectInfo>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    accentColor?: GraphCacheResolver<
      WithTypename<ProjectInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    activeCardSettings?: GraphCacheResolver<
      WithTypename<ProjectInfo>,
      Record<string, never>,
      WithTypename<CardSettings> | string
    >;
    allowsDesktopAuthentication?: GraphCacheResolver<
      WithTypename<ProjectInfo>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    cardProducts?: GraphCacheResolver<
      WithTypename<ProjectInfo>,
      Record<string, never>,
      Array<WithTypename<CardProduct> | string>
    >;
    customConsentSubdomain?: GraphCacheResolver<
      WithTypename<ProjectInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<ProjectInfo>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    logoUri?: GraphCacheResolver<
      WithTypename<ProjectInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    name?: GraphCacheResolver<
      WithTypename<ProjectInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    oAuthClientId?: GraphCacheResolver<
      WithTypename<ProjectInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<ProjectInfo>,
      Record<string, never>,
      ProjectStatus | string
    >;
    tcuDocumentId?: GraphCacheResolver<
      WithTypename<ProjectInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    tcuDocumentUri?: GraphCacheResolver<
      WithTypename<ProjectInfo>,
      ProjectInfoTcuDocumentUriArgs,
      Scalars["String"] | string
    >;
    type?: GraphCacheResolver<
      WithTypename<ProjectInfo>,
      Record<string, never>,
      ProjectType | string
    >;
    webBankingSettings?: GraphCacheResolver<
      WithTypename<ProjectInfo>,
      Record<string, never>,
      WithTypename<WebBankingSettings> | string
    >;
  };
  ProjectInvalidStatusRejection?: {
    message?: GraphCacheResolver<
      WithTypename<ProjectInvalidStatusRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  ProjectNotFound?: {
    message?: GraphCacheResolver<
      WithTypename<ProjectNotFound>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  ProjectNotFoundRejection?: {
    message?: GraphCacheResolver<
      WithTypename<ProjectNotFoundRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  ProjectSettingsForbiddenError?: {
    message?: GraphCacheResolver<
      WithTypename<ProjectSettingsForbiddenError>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  ProjectSettingsNotFound?: {
    message?: GraphCacheResolver<
      WithTypename<ProjectSettingsNotFound>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  ProjectSettingsStatusNotReachable?: {
    message?: GraphCacheResolver<
      WithTypename<ProjectSettingsStatusNotReachable>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  PublicOnboardingDisabledRejection?: {
    message?: GraphCacheResolver<
      WithTypename<PublicOnboardingDisabledRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  RejectedMerchantPaymentMethodStatusInfo?: {
    rejectedAt?: GraphCacheResolver<
      WithTypename<RejectedMerchantPaymentMethodStatusInfo>,
      Record<string, never>,
      Scalars["Date"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<RejectedMerchantPaymentMethodStatusInfo>,
      Record<string, never>,
      MerchantPaymentMethodStatus | string
    >;
  };
  RejectedMerchantProfileStatusInfo?: {
    rejectedAt?: GraphCacheResolver<
      WithTypename<RejectedMerchantProfileStatusInfo>,
      Record<string, never>,
      Scalars["Date"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<RejectedMerchantProfileStatusInfo>,
      Record<string, never>,
      MerchantProfileStatus | string
    >;
  };
  RequestMerchantProfileUpdate?: {
    createdAt?: GraphCacheResolver<
      WithTypename<RequestMerchantProfileUpdate>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    expectedAverageBasket?: GraphCacheResolver<
      WithTypename<RequestMerchantProfileUpdate>,
      Record<string, never>,
      WithTypename<Amount> | string
    >;
    expectedMonthlyPaymentVolume?: GraphCacheResolver<
      WithTypename<RequestMerchantProfileUpdate>,
      Record<string, never>,
      WithTypename<Amount> | string
    >;
    id?: GraphCacheResolver<
      WithTypename<RequestMerchantProfileUpdate>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    merchantLogoUrl?: GraphCacheResolver<
      WithTypename<RequestMerchantProfileUpdate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    merchantName?: GraphCacheResolver<
      WithTypename<RequestMerchantProfileUpdate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    merchantProfileId?: GraphCacheResolver<
      WithTypename<RequestMerchantProfileUpdate>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    merchantWebsite?: GraphCacheResolver<
      WithTypename<RequestMerchantProfileUpdate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    productType?: GraphCacheResolver<
      WithTypename<RequestMerchantProfileUpdate>,
      Record<string, never>,
      ProductType | string
    >;
    status?: GraphCacheResolver<
      WithTypename<RequestMerchantProfileUpdate>,
      Record<string, never>,
      RequestMerchantProfileUpdateStatus | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<RequestMerchantProfileUpdate>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
  };
  RestrictedTo?: {
    birthDate?: GraphCacheResolver<
      WithTypename<RestrictedTo>,
      Record<string, never>,
      Scalars["Date"] | string
    >;
    firstName?: GraphCacheResolver<
      WithTypename<RestrictedTo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    lastName?: GraphCacheResolver<
      WithTypename<RestrictedTo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    phoneNumber?: GraphCacheResolver<
      WithTypename<RestrictedTo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  RestrictedToUserRejection?: {
    message?: GraphCacheResolver<
      WithTypename<RestrictedToUserRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  RollingReserve?: {
    percentage?: GraphCacheResolver<
      WithTypename<RollingReserve>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    rollingDays?: GraphCacheResolver<
      WithTypename<RollingReserve>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  SchemeWrongRejection?: {
    message?: GraphCacheResolver<
      WithTypename<SchemeWrongRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  SepaDirectDebitB2BMerchantPaymentMethod?: {
    id?: GraphCacheResolver<
      WithTypename<SepaDirectDebitB2BMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    methodId?: GraphCacheResolver<
      WithTypename<SepaDirectDebitB2BMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    productId?: GraphCacheResolver<
      WithTypename<SepaDirectDebitB2BMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    rollingReserve?: GraphCacheResolver<
      WithTypename<SepaDirectDebitB2BMerchantPaymentMethod>,
      Record<string, never>,
      WithTypename<RollingReserve> | string
    >;
    sepaCreditorIdentifier?: GraphCacheResolver<
      WithTypename<SepaDirectDebitB2BMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    statusInfo?: GraphCacheResolver<
      WithTypename<SepaDirectDebitB2BMerchantPaymentMethod>,
      Record<string, never>,
      | WithTypename<CanceledMerchantPaymentMethodStatusInfo>
      | WithTypename<DisabledMerchantPaymentMethodStatusInfo>
      | WithTypename<EnabledMerchantPaymentMethodStatusInfo>
      | WithTypename<PendingMerchantPaymentMethodStatusInfo>
      | WithTypename<RejectedMerchantPaymentMethodStatusInfo>
      | WithTypename<SuspendedMerchantPaymentMethodStatusInfo>
      | string
    >;
    type?: GraphCacheResolver<
      WithTypename<SepaDirectDebitB2BMerchantPaymentMethod>,
      Record<string, never>,
      MerchantPaymentMethodType | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<SepaDirectDebitB2BMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["Date"] | string
    >;
    useSwanSepaCreditorIdentifier?: GraphCacheResolver<
      WithTypename<SepaDirectDebitB2BMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    version?: GraphCacheResolver<
      WithTypename<SepaDirectDebitB2BMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  SepaDirectDebitCoreMerchantPaymentMethod?: {
    id?: GraphCacheResolver<
      WithTypename<SepaDirectDebitCoreMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    methodId?: GraphCacheResolver<
      WithTypename<SepaDirectDebitCoreMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    productId?: GraphCacheResolver<
      WithTypename<SepaDirectDebitCoreMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    rollingReserve?: GraphCacheResolver<
      WithTypename<SepaDirectDebitCoreMerchantPaymentMethod>,
      Record<string, never>,
      WithTypename<RollingReserve> | string
    >;
    sepaCreditorIdentifier?: GraphCacheResolver<
      WithTypename<SepaDirectDebitCoreMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    statusInfo?: GraphCacheResolver<
      WithTypename<SepaDirectDebitCoreMerchantPaymentMethod>,
      Record<string, never>,
      | WithTypename<CanceledMerchantPaymentMethodStatusInfo>
      | WithTypename<DisabledMerchantPaymentMethodStatusInfo>
      | WithTypename<EnabledMerchantPaymentMethodStatusInfo>
      | WithTypename<PendingMerchantPaymentMethodStatusInfo>
      | WithTypename<RejectedMerchantPaymentMethodStatusInfo>
      | WithTypename<SuspendedMerchantPaymentMethodStatusInfo>
      | string
    >;
    type?: GraphCacheResolver<
      WithTypename<SepaDirectDebitCoreMerchantPaymentMethod>,
      Record<string, never>,
      MerchantPaymentMethodType | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<SepaDirectDebitCoreMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["Date"] | string
    >;
    useSwanSepaCreditorIdentifier?: GraphCacheResolver<
      WithTypename<SepaDirectDebitCoreMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    version?: GraphCacheResolver<
      WithTypename<SepaDirectDebitCoreMerchantPaymentMethod>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  SpendingLimit?: {
    amount?: GraphCacheResolver<
      WithTypename<SpendingLimit>,
      Record<string, never>,
      WithTypename<Amount> | string
    >;
    period?: GraphCacheResolver<
      WithTypename<SpendingLimit>,
      Record<string, never>,
      SpendingLimitPeriod | string
    >;
    type?: GraphCacheResolver<
      WithTypename<SpendingLimit>,
      Record<string, never>,
      SpendingLimitType | string
    >;
  };
  SupportingDocument?: {
    createdAt?: GraphCacheResolver<
      WithTypename<SupportingDocument>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<SupportingDocument>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    statusInfo?: GraphCacheResolver<
      WithTypename<SupportingDocument>,
      Record<string, never>,
      | WithTypename<SupportingDocumentNotUploadedStatusInfo>
      | WithTypename<SupportingDocumentRefusedStatusInfo>
      | WithTypename<SupportingDocumentUploadedStatusInfo>
      | WithTypename<SupportingDocumentValidatedStatusInfo>
      | WithTypename<SupportingDocumentWaitingForUploadStatusInfo>
      | string
    >;
    supportingDocumentPurpose?: GraphCacheResolver<
      WithTypename<SupportingDocument>,
      Record<string, never>,
      SupportingDocumentPurposeEnum | string
    >;
    supportingDocumentType?: GraphCacheResolver<
      WithTypename<SupportingDocument>,
      Record<string, never>,
      SupportingDocumentType | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<SupportingDocument>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
  };
  SupportingDocumentCollection?: {
    createdAt?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollection>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    requiredSupportingDocumentPurposes?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollection>,
      Record<string, never>,
      Array<WithTypename<SupportingDocumentPurpose> | string>
    >;
    statusInfo?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollection>,
      Record<string, never>,
      | WithTypename<SupportingDocumentCollectionApprovedStatusInfo>
      | WithTypename<SupportingDocumentCollectionCanceledStatusInfo>
      | WithTypename<SupportingDocumentCollectionPendingReviewStatusInfo>
      | WithTypename<SupportingDocumentCollectionRejectedStatusInfo>
      | WithTypename<SupportingDocumentCollectionWaitingForDocumentStatusInfo>
      | string
    >;
    supportingDocuments?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollection>,
      Record<string, never>,
      Array<WithTypename<SupportingDocument> | string>
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollection>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
  };
  SupportingDocumentCollectionApprovedStatusInfo?: {
    approvedAt?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionApprovedStatusInfo>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionApprovedStatusInfo>,
      Record<string, never>,
      SupportingDocumentCollectionStatus | string
    >;
  };
  SupportingDocumentCollectionCanceledStatusInfo?: {
    canceledAt?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionCanceledStatusInfo>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionCanceledStatusInfo>,
      Record<string, never>,
      SupportingDocumentCollectionStatus | string
    >;
  };
  SupportingDocumentCollectionConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionConnection>,
      Record<string, never>,
      Array<WithTypename<SupportingDocumentCollectionEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
    totalCount?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionConnection>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  SupportingDocumentCollectionEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionEdge>,
      Record<string, never>,
      WithTypename<SupportingDocumentCollection> | string
    >;
  };
  SupportingDocumentCollectionNotFoundRejection?: {
    id?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionNotFoundRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    message?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionNotFoundRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  SupportingDocumentCollectionPendingReviewStatusInfo?: {
    status?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionPendingReviewStatusInfo>,
      Record<string, never>,
      SupportingDocumentCollectionStatus | string
    >;
  };
  SupportingDocumentCollectionRejectedStatusInfo?: {
    rejectedAt?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionRejectedStatusInfo>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionRejectedStatusInfo>,
      Record<string, never>,
      SupportingDocumentCollectionStatus | string
    >;
  };
  SupportingDocumentCollectionStatusDoesNotAllowDeletionRejection?: {
    message?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionStatusDoesNotAllowDeletionRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    supportingDocumentCollection?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionStatusDoesNotAllowDeletionRejection>,
      Record<string, never>,
      WithTypename<SupportingDocumentCollection> | string
    >;
    supportingDocumentCollectionStatus?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionStatusDoesNotAllowDeletionRejection>,
      Record<string, never>,
      SupportingDocumentCollectionStatus | string
    >;
  };
  SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection?: {
    message?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    supportingDocumentCollection?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection>,
      Record<string, never>,
      WithTypename<SupportingDocumentCollection> | string
    >;
    supportingDocumentCollectionStatus?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection>,
      Record<string, never>,
      SupportingDocumentCollectionStatus | string
    >;
  };
  SupportingDocumentCollectionStatusNotAllowedRejection?: {
    message?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionStatusNotAllowedRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    newStatus?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionStatusNotAllowedRejection>,
      Record<string, never>,
      SupportingDocumentCollectionStatus | string
    >;
    oldStatus?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionStatusNotAllowedRejection>,
      Record<string, never>,
      SupportingDocumentCollectionStatus | string
    >;
  };
  SupportingDocumentCollectionWaitingForDocumentStatusInfo?: {
    status?: GraphCacheResolver<
      WithTypename<SupportingDocumentCollectionWaitingForDocumentStatusInfo>,
      Record<string, never>,
      SupportingDocumentCollectionStatus | string
    >;
  };
  SupportingDocumentNotFoundRejection?: {
    id?: GraphCacheResolver<
      WithTypename<SupportingDocumentNotFoundRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    message?: GraphCacheResolver<
      WithTypename<SupportingDocumentNotFoundRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  SupportingDocumentNotUploadedStatusInfo?: {
    status?: GraphCacheResolver<
      WithTypename<SupportingDocumentNotUploadedStatusInfo>,
      Record<string, never>,
      SupportingDocumentStatus | string
    >;
  };
  SupportingDocumentPostField?: {
    key?: GraphCacheResolver<
      WithTypename<SupportingDocumentPostField>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    value?: GraphCacheResolver<
      WithTypename<SupportingDocumentPostField>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  SupportingDocumentPurpose?: {
    acceptableSupportingDocumentTypes?: GraphCacheResolver<
      WithTypename<SupportingDocumentPurpose>,
      Record<string, never>,
      Array<SupportingDocumentType | string>
    >;
    name?: GraphCacheResolver<
      WithTypename<SupportingDocumentPurpose>,
      Record<string, never>,
      SupportingDocumentPurposeEnum | string
    >;
  };
  SupportingDocumentRefusedStatusInfo?: {
    downloadUrl?: GraphCacheResolver<
      WithTypename<SupportingDocumentRefusedStatusInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    filename?: GraphCacheResolver<
      WithTypename<SupportingDocumentRefusedStatusInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    reason?: GraphCacheResolver<
      WithTypename<SupportingDocumentRefusedStatusInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    refusedAt?: GraphCacheResolver<
      WithTypename<SupportingDocumentRefusedStatusInfo>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<SupportingDocumentRefusedStatusInfo>,
      Record<string, never>,
      SupportingDocumentStatus | string
    >;
  };
  SupportingDocumentSettings?: {
    collectMode?: GraphCacheResolver<
      WithTypename<SupportingDocumentSettings>,
      Record<string, never>,
      SupportingDocumentCollectMode | string
    >;
    communicationLanguage?: GraphCacheResolver<
      WithTypename<SupportingDocumentSettings>,
      Record<string, never>,
      SupportingDocumentCommunicationLanguageSettings | string
    >;
    emailContact?: GraphCacheResolver<
      WithTypename<SupportingDocumentSettings>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  SupportingDocumentStatusDoesNotAllowDeletionRejection?: {
    message?: GraphCacheResolver<
      WithTypename<SupportingDocumentStatusDoesNotAllowDeletionRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<SupportingDocumentStatusDoesNotAllowDeletionRejection>,
      Record<string, never>,
      SupportingDocumentStatus | string
    >;
    supportingDocument?: GraphCacheResolver<
      WithTypename<SupportingDocumentStatusDoesNotAllowDeletionRejection>,
      Record<string, never>,
      WithTypename<SupportingDocument> | string
    >;
  };
  SupportingDocumentStatusDoesNotAllowUpdateRejection?: {
    message?: GraphCacheResolver<
      WithTypename<SupportingDocumentStatusDoesNotAllowUpdateRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<SupportingDocumentStatusDoesNotAllowUpdateRejection>,
      Record<string, never>,
      SupportingDocumentStatus | string
    >;
    supportingDocument?: GraphCacheResolver<
      WithTypename<SupportingDocumentStatusDoesNotAllowUpdateRejection>,
      Record<string, never>,
      WithTypename<SupportingDocument> | string
    >;
  };
  SupportingDocumentStatusNotAllowedRejection?: {
    message?: GraphCacheResolver<
      WithTypename<SupportingDocumentStatusNotAllowedRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    newStatus?: GraphCacheResolver<
      WithTypename<SupportingDocumentStatusNotAllowedRejection>,
      Record<string, never>,
      SupportingDocumentStatus | string
    >;
    oldStatus?: GraphCacheResolver<
      WithTypename<SupportingDocumentStatusNotAllowedRejection>,
      Record<string, never>,
      SupportingDocumentStatus | string
    >;
  };
  SupportingDocumentUploadInfo?: {
    fields?: GraphCacheResolver<
      WithTypename<SupportingDocumentUploadInfo>,
      Record<string, never>,
      Array<WithTypename<SupportingDocumentPostField> | string>
    >;
    url?: GraphCacheResolver<
      WithTypename<SupportingDocumentUploadInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  SupportingDocumentUploadNotAllowedRejection?: {
    message?: GraphCacheResolver<
      WithTypename<SupportingDocumentUploadNotAllowedRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    supportingDocumentCollectionStatus?: GraphCacheResolver<
      WithTypename<SupportingDocumentUploadNotAllowedRejection>,
      Record<string, never>,
      SupportingDocumentCollectionStatus | string
    >;
  };
  SupportingDocumentUploadedStatusInfo?: {
    downloadUrl?: GraphCacheResolver<
      WithTypename<SupportingDocumentUploadedStatusInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    filename?: GraphCacheResolver<
      WithTypename<SupportingDocumentUploadedStatusInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<SupportingDocumentUploadedStatusInfo>,
      Record<string, never>,
      SupportingDocumentStatus | string
    >;
  };
  SupportingDocumentValidatedStatusInfo?: {
    downloadUrl?: GraphCacheResolver<
      WithTypename<SupportingDocumentValidatedStatusInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    filename?: GraphCacheResolver<
      WithTypename<SupportingDocumentValidatedStatusInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<SupportingDocumentValidatedStatusInfo>,
      Record<string, never>,
      SupportingDocumentStatus | string
    >;
    validatedAt?: GraphCacheResolver<
      WithTypename<SupportingDocumentValidatedStatusInfo>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
  };
  SupportingDocumentWaitingForUploadStatusInfo?: {
    status?: GraphCacheResolver<
      WithTypename<SupportingDocumentWaitingForUploadStatusInfo>,
      Record<string, never>,
      SupportingDocumentStatus | string
    >;
    upload?: GraphCacheResolver<
      WithTypename<SupportingDocumentWaitingForUploadStatusInfo>,
      Record<string, never>,
      WithTypename<SupportingDocumentUploadInfo> | string
    >;
  };
  SuspendAccountReason?: {
    message?: GraphCacheResolver<
      WithTypename<SuspendAccountReason>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    type?: GraphCacheResolver<
      WithTypename<SuspendAccountReason>,
      Record<string, never>,
      SuspendAccountReasonType | string
    >;
  };
  SuspendedMerchantPaymentMethodStatusInfo?: {
    status?: GraphCacheResolver<
      WithTypename<SuspendedMerchantPaymentMethodStatusInfo>,
      Record<string, never>,
      MerchantPaymentMethodStatus | string
    >;
    suspendedAt?: GraphCacheResolver<
      WithTypename<SuspendedMerchantPaymentMethodStatusInfo>,
      Record<string, never>,
      Scalars["Date"] | string
    >;
  };
  SuspendedMerchantProfileStatusInfo?: {
    status?: GraphCacheResolver<
      WithTypename<SuspendedMerchantProfileStatusInfo>,
      Record<string, never>,
      MerchantProfileStatus | string
    >;
    suspendedAt?: GraphCacheResolver<
      WithTypename<SuspendedMerchantProfileStatusInfo>,
      Record<string, never>,
      Scalars["Date"] | string
    >;
  };
  TooManyItemsRejection?: {
    message?: GraphCacheResolver<
      WithTypename<TooManyItemsRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  TransactionNotFoundRejection?: {
    message?: GraphCacheResolver<
      WithTypename<TransactionNotFoundRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    transactionId?: GraphCacheResolver<
      WithTypename<TransactionNotFoundRejection>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
  };
  UltimateBeneficialDirectOwnerCompanyInfo?: {
    id?: GraphCacheResolver<
      WithTypename<UltimateBeneficialDirectOwnerCompanyInfo>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    name?: GraphCacheResolver<
      WithTypename<UltimateBeneficialDirectOwnerCompanyInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    parentCompanyShareRatio?: GraphCacheResolver<
      WithTypename<UltimateBeneficialDirectOwnerCompanyInfo>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
    registrationNumber?: GraphCacheResolver<
      WithTypename<UltimateBeneficialDirectOwnerCompanyInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    type?: GraphCacheResolver<
      WithTypename<UltimateBeneficialDirectOwnerCompanyInfo>,
      Record<string, never>,
      UltimateBeneficialOwnerType | string
    >;
  };
  UltimateBeneficialDirectOwnerIndividualInfo?: {
    birthDate?: GraphCacheResolver<
      WithTypename<UltimateBeneficialDirectOwnerIndividualInfo>,
      Record<string, never>,
      Scalars["Date"] | string
    >;
    firstName?: GraphCacheResolver<
      WithTypename<UltimateBeneficialDirectOwnerIndividualInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<UltimateBeneficialDirectOwnerIndividualInfo>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    lastName?: GraphCacheResolver<
      WithTypename<UltimateBeneficialDirectOwnerIndividualInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    parentCompanyShareRatio?: GraphCacheResolver<
      WithTypename<UltimateBeneficialDirectOwnerIndividualInfo>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
    type?: GraphCacheResolver<
      WithTypename<UltimateBeneficialDirectOwnerIndividualInfo>,
      Record<string, never>,
      UltimateBeneficialOwnerType | string
    >;
  };
  UltimateBeneficialIndirectOwnerCompanyInfo?: {
    id?: GraphCacheResolver<
      WithTypename<UltimateBeneficialIndirectOwnerCompanyInfo>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    name?: GraphCacheResolver<
      WithTypename<UltimateBeneficialIndirectOwnerCompanyInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    parentCompanyReference?: GraphCacheResolver<
      WithTypename<UltimateBeneficialIndirectOwnerCompanyInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    parentCompanyShareRatio?: GraphCacheResolver<
      WithTypename<UltimateBeneficialIndirectOwnerCompanyInfo>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
    registrationNumber?: GraphCacheResolver<
      WithTypename<UltimateBeneficialIndirectOwnerCompanyInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    type?: GraphCacheResolver<
      WithTypename<UltimateBeneficialIndirectOwnerCompanyInfo>,
      Record<string, never>,
      UltimateBeneficialOwnerType | string
    >;
  };
  UltimateBeneficialIndirectOwnerIndividualInfo?: {
    birthDate?: GraphCacheResolver<
      WithTypename<UltimateBeneficialIndirectOwnerIndividualInfo>,
      Record<string, never>,
      Scalars["Date"] | string
    >;
    firstName?: GraphCacheResolver<
      WithTypename<UltimateBeneficialIndirectOwnerIndividualInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<UltimateBeneficialIndirectOwnerIndividualInfo>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    lastName?: GraphCacheResolver<
      WithTypename<UltimateBeneficialIndirectOwnerIndividualInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    parentCompanyReference?: GraphCacheResolver<
      WithTypename<UltimateBeneficialIndirectOwnerIndividualInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    parentCompanyShareRatio?: GraphCacheResolver<
      WithTypename<UltimateBeneficialIndirectOwnerIndividualInfo>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
    type?: GraphCacheResolver<
      WithTypename<UltimateBeneficialIndirectOwnerIndividualInfo>,
      Record<string, never>,
      UltimateBeneficialOwnerType | string
    >;
  };
  UnauthenticatedOnboardPublicCompanyAccountHolderSuccessPayload?: {
    onboarding?: GraphCacheResolver<
      WithTypename<UnauthenticatedOnboardPublicCompanyAccountHolderSuccessPayload>,
      Record<string, never>,
      WithTypename<OnboardingInfo> | string
    >;
  };
  UnauthenticatedOnboardPublicIndividualAccountHolderSuccessPayload?: {
    onboarding?: GraphCacheResolver<
      WithTypename<UnauthenticatedOnboardPublicIndividualAccountHolderSuccessPayload>,
      Record<string, never>,
      WithTypename<OnboardingInfo> | string
    >;
  };
  UnauthenticatedUpdateCompanyOnboardingSuccessPayload?: {
    onboarding?: GraphCacheResolver<
      WithTypename<UnauthenticatedUpdateCompanyOnboardingSuccessPayload>,
      Record<string, never>,
      WithTypename<OnboardingInfo> | string
    >;
  };
  UnauthenticatedUpdateIndividualOnboardingSuccessPayload?: {
    onboarding?: GraphCacheResolver<
      WithTypename<UnauthenticatedUpdateIndividualOnboardingSuccessPayload>,
      Record<string, never>,
      WithTypename<OnboardingInfo> | string
    >;
  };
  User?: {
    accountMemberships?: GraphCacheResolver<
      WithTypename<User>,
      UserAccountMembershipsArgs,
      WithTypename<AccountMembershipConnection> | string
    >;
    allFirstNames?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      Array<Scalars["String"] | string>
    >;
    authenticators?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      Array<WithTypename<Authenticator> | string>
    >;
    birthDate?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      Scalars["Date"] | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    firstName?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    id?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars["ID"] | string>;
    idVerified?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    identificationLevels?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      WithTypename<IdentificationLevels> | string
    >;
    identificationStatus?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      IdentificationStatus | string
    >;
    lastName?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    mobilePhoneNumber?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      Scalars["PhoneNumber"] | string
    >;
    nationalityCCA3?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      Scalars["CCA3"] | string
    >;
    preferredNotificationChannel?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      PreferredNotificationChannel | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
  };
  UserConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<UserConnection>,
      Record<string, never>,
      Array<WithTypename<UserEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<UserConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
    totalCount?: GraphCacheResolver<
      WithTypename<UserConnection>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  UserEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<UserEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<UserEdge>,
      Record<string, never>,
      WithTypename<User> | string
    >;
  };
  UserNotAllowedToDisableItsOwnAccountMembershipRejection?: {
    accountMembershipId?: GraphCacheResolver<
      WithTypename<UserNotAllowedToDisableItsOwnAccountMembershipRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    message?: GraphCacheResolver<
      WithTypename<UserNotAllowedToDisableItsOwnAccountMembershipRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  UserNotAllowedToManageAccountMembershipRejection?: {
    message?: GraphCacheResolver<
      WithTypename<UserNotAllowedToManageAccountMembershipRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  UserNotAllowedToSuspendItsOwnAccountMembershipRejection?: {
    accountMembershipId?: GraphCacheResolver<
      WithTypename<UserNotAllowedToSuspendItsOwnAccountMembershipRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    message?: GraphCacheResolver<
      WithTypename<UserNotAllowedToSuspendItsOwnAccountMembershipRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  UserNotCardHolderRejection?: {
    message?: GraphCacheResolver<
      WithTypename<UserNotCardHolderRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  ValidationError?: {
    errors?: GraphCacheResolver<
      WithTypename<ValidationError>,
      Record<string, never>,
      Array<FieldValidationError | string>
    >;
    field?: GraphCacheResolver<
      WithTypename<ValidationError>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  ValidationFieldError?: {
    code?: GraphCacheResolver<
      WithTypename<ValidationFieldError>,
      Record<string, never>,
      ValidationFieldErrorCode | string
    >;
    message?: GraphCacheResolver<
      WithTypename<ValidationFieldError>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    path?: GraphCacheResolver<
      WithTypename<ValidationFieldError>,
      Record<string, never>,
      Array<Scalars["String"] | string>
    >;
  };
  ValidationRejection?: {
    fields?: GraphCacheResolver<
      WithTypename<ValidationRejection>,
      Record<string, never>,
      Array<WithTypename<ValidationFieldError> | string>
    >;
    message?: GraphCacheResolver<
      WithTypename<ValidationRejection>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  VirtualIBANEntry?: {
    BIC?: GraphCacheResolver<
      WithTypename<VirtualIbanEntry>,
      Record<string, never>,
      Scalars["BIC"] | string
    >;
    IBAN?: GraphCacheResolver<
      WithTypename<VirtualIbanEntry>,
      Record<string, never>,
      Scalars["IBAN"] | string
    >;
    blockSDD?: GraphCacheResolver<
      WithTypename<VirtualIbanEntry>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<VirtualIbanEntry>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    label?: GraphCacheResolver<
      WithTypename<VirtualIbanEntry>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<VirtualIbanEntry>,
      Record<string, never>,
      IbanStatus | string
    >;
  };
  VirtualIBANEntryConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<VirtualIbanEntryConnection>,
      Record<string, never>,
      Array<WithTypename<VirtualIbanEntryEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<VirtualIbanEntryConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
    totalCount?: GraphCacheResolver<
      WithTypename<VirtualIbanEntryConnection>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  VirtualIBANEntryEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<VirtualIbanEntryEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<VirtualIbanEntryEdge>,
      Record<string, never>,
      WithTypename<VirtualIbanEntry> | string
    >;
  };
  WalletProvider?: {
    id?: GraphCacheResolver<
      WithTypename<WalletProvider>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    name?: GraphCacheResolver<
      WithTypename<WalletProvider>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  WebBankingSettings?: {
    canAddNewMembers?: GraphCacheResolver<
      WithTypename<WebBankingSettings>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    canInitiatePaymentsToNewBeneficiaries?: GraphCacheResolver<
      WithTypename<WebBankingSettings>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    canManageVirtualIbans?: GraphCacheResolver<
      WithTypename<WebBankingSettings>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    canOrderPhysicalCards?: GraphCacheResolver<
      WithTypename<WebBankingSettings>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    canOrderVirtualCards?: GraphCacheResolver<
      WithTypename<WebBankingSettings>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    canViewAccountDetails?: GraphCacheResolver<
      WithTypename<WebBankingSettings>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    canViewAccountStatement?: GraphCacheResolver<
      WithTypename<WebBankingSettings>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    canViewMembers?: GraphCacheResolver<
      WithTypename<WebBankingSettings>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    canViewPaymentList?: GraphCacheResolver<
      WithTypename<WebBankingSettings>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
  };
};

export type GraphCacheOptimisticUpdaters = {
  generateSupportingDocumentUploadUrl?: GraphCacheOptimisticMutationResolver<
    MutationGenerateSupportingDocumentUploadUrlArgs,
    WithTypename<GenerateSupportingDocumentUploadUrlPayload>
  >;
  unauthenticatedOnboardPublicCompanyAccountHolder?: GraphCacheOptimisticMutationResolver<
    MutationUnauthenticatedOnboardPublicCompanyAccountHolderArgs,
    WithTypename<UnauthenticatedOnboardPublicCompanyAccountHolderPayload>
  >;
  unauthenticatedOnboardPublicIndividualAccountHolder?: GraphCacheOptimisticMutationResolver<
    MutationUnauthenticatedOnboardPublicIndividualAccountHolderArgs,
    WithTypename<UnauthenticatedOnboardPublicIndividualAccountHolderPayload>
  >;
  unauthenticatedUpdateCompanyOnboarding?: GraphCacheOptimisticMutationResolver<
    MutationUnauthenticatedUpdateCompanyOnboardingArgs,
    WithTypename<UnauthenticatedUpdateCompanyOnboardingPayload>
  >;
  unauthenticatedUpdateIndividualOnboarding?: GraphCacheOptimisticMutationResolver<
    MutationUnauthenticatedUpdateIndividualOnboardingArgs,
    WithTypename<UnauthenticatedUpdateIndividualOnboardingPayload>
  >;
};

export type GraphCacheUpdaters = {
  Mutation?: {
    generateSupportingDocumentUploadUrl?: GraphCacheUpdateResolver<
      {
        generateSupportingDocumentUploadUrl: WithTypename<GenerateSupportingDocumentUploadUrlPayload>;
      },
      MutationGenerateSupportingDocumentUploadUrlArgs
    >;
    unauthenticatedOnboardPublicCompanyAccountHolder?: GraphCacheUpdateResolver<
      {
        unauthenticatedOnboardPublicCompanyAccountHolder: WithTypename<UnauthenticatedOnboardPublicCompanyAccountHolderPayload>;
      },
      MutationUnauthenticatedOnboardPublicCompanyAccountHolderArgs
    >;
    unauthenticatedOnboardPublicIndividualAccountHolder?: GraphCacheUpdateResolver<
      {
        unauthenticatedOnboardPublicIndividualAccountHolder: WithTypename<UnauthenticatedOnboardPublicIndividualAccountHolderPayload>;
      },
      MutationUnauthenticatedOnboardPublicIndividualAccountHolderArgs
    >;
    unauthenticatedUpdateCompanyOnboarding?: GraphCacheUpdateResolver<
      {
        unauthenticatedUpdateCompanyOnboarding: WithTypename<UnauthenticatedUpdateCompanyOnboardingPayload>;
      },
      MutationUnauthenticatedUpdateCompanyOnboardingArgs
    >;
    unauthenticatedUpdateIndividualOnboarding?: GraphCacheUpdateResolver<
      {
        unauthenticatedUpdateIndividualOnboarding: WithTypename<UnauthenticatedUpdateIndividualOnboardingPayload>;
      },
      MutationUnauthenticatedUpdateIndividualOnboardingArgs
    >;
  };
  Subscription?: {};
};

export type GraphCacheConfig = {
  schema?: CacheExchangeOpts["schema"];
  updates?: GraphCacheUpdaters;
  keys?: GraphCacheKeysConfig;
  optimistic?: GraphCacheOptimisticUpdaters;
  resolvers?: GraphCacheResolvers;
  storage?: GraphCacheStorageAdapter;
};
