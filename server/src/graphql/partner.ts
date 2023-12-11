import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Swan account number */
  AccountNumber: { input: string; output: string; }
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
  AmountValue: { input: string; output: string; }
  AuditId: { input: string; output: string; }
  AuthorizationId: { input: string; output: string; }
  /** Bank Identifier Code */
  BIC: { input: string; output: string; }
  /** Country code alpha 2 (ISO 3166) */
  CCA2: { input: string; output: string; }
  /** Country code alpha 3 (ISO 3166) */
  CCA3: { input: string; output: string; }
  CardToken: { input: string; output: string; }
  /** currency code alpha 3 (ISO 4217) */
  Currency: { input: string; output: string; }
  /** Date with YYYY-MM-DD format */
  Date: { input: string; output: string; }
  /**
   * Date time (ISO 8601 with time information)
   * ex: 2021-04-12T16:28:22.867Z
   */
  DateTime: { input: string; output: string; }
  EmailAddress: { input: string; output: string; }
  HexColorCode: { input: string; output: string; }
  /** International Bank Account Number */
  IBAN: { input: string; output: string; }
  /** 6 digits numeric passcode */
  PIN: { input: string; output: string; }
  /**
   * E.164 standard format phone number
   *
   * Examples
   * +551155256325
   * +44207183875
   */
  PhoneNumber: { input: string; output: string; }
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
  SepaCreditorIdentifier: { input: string; output: string; }
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
  SepaReference: { input: string; output: string; }
  TokenRequestorId: { input: string; output: string; }
  /**
   * URL that follows the WHATWG URL Standard.
   *
   * [Examples of parsed URLs](https://url.spec.whatwg.org/#example-url-parsing) may be found in the Standard itself.
   */
  URL: { input: string; output: string; }
  Upload: { input: unknown; output: unknown; }
  WalletToken: { input: string; output: string; }
  _FieldSet: { input: unknown; output: unknown; }
};

/** Whether you call it a wallet, monetary account, payment account or bank account, the notion of account is fundamental at Swan. All payment flows necessarily go through an account. */
export type Account = {
  __typename: 'Account';
  /**
   * Bank Identifier Code
   * Only if the account membership has `canViewAccount=true` & this account has `paymentLevel=Unlimited`
   */
  BIC: Scalars['BIC']['output'];
  /**
   * International Bank Account Number
   * Only if the account membership has `canViewAccount=true` & this account has `paymentLevel=Unlimited`
   */
  IBAN?: Maybe<Scalars['IBAN']['output']>;
  /** A list of balances regarding an account. */
  balances?: Maybe<AccountBalances>;
  /** Link to the account's bank details */
  bankDetails?: Maybe<Scalars['String']['output']>;
  /** `true` if the main IBAN refuses all Sepa Direct Debit received */
  blockSDD?: Maybe<Scalars['Boolean']['output']>;
  /** Cash account type */
  cashAccountType: CashAccountType;
  /** Country of the account */
  country: AccountCountry;
  /** Created date */
  createdAt: Scalars['DateTime']['output'];
  /** Currency */
  currency: Scalars['Currency']['output'];
  /** List of funding source created on the account */
  fundingSources?: Maybe<FundingSourceConnection>;
  /** Account holder */
  holder: AccountHolder;
  /** Unique identifier of an account */
  id: Scalars['ID']['output'];
  /**
   * A list of invoices of an account.
   * The list is ordered by creation date (from newest to oldest)
   */
  invoices?: Maybe<InvoiceConnection>;
  /** Language used for account statements */
  language: AccountLanguage;
  /** Legal Documents linked to the account */
  legalDocuments?: Maybe<LegalDocumentConnection>;
  /** Legal representative account membership */
  legalRepresentativeMembership: AccountMembership;
  /** List of account membership for this account */
  memberships: AccountMembershipConnection;
  /** List of merchant profiles created on the account */
  merchantProfiles?: Maybe<MerchantProfileConnection>;
  /** Account name */
  name: Scalars['String']['output'];
  /** Unique account number */
  number: Scalars['AccountNumber']['output'];
  /** Partnership status */
  partnershipStatusInfo?: Maybe<PartnershipStatusInfo>;
  /** Type of the account : EMoney if account holder has not finished the KYC requirements, PaymentService otherwise */
  paymentAccountType: PaymentAccountType;
  /** Payment level */
  paymentLevel: PaymentLevel;
  /** A list of receive Direct Mandates of an account. */
  receivedDirectDebitMandates?: Maybe<ReceivedDirectDebitMandateConnection>;
  /** `true`if a consent is required to fetch new transactions */
  requiredConsentToFetchNewTransactions: Scalars['Boolean']['output'];
  /** A list of standing orders regarding an account. */
  standingOrders: StandingOrderConnection;
  /**
   * A list of statements of an account.
   * The list is ordered by lastUpdateAt
   */
  statements?: Maybe<StatementConnection>;
  /** Status of the account */
  statusInfo: AccountStatusInfo;
  /** A list of transactions of an account. */
  transactions?: Maybe<TransactionConnection>;
  /** Updated date */
  updatedAt: Scalars['DateTime']['output'];
  /** Date of the account going from eMoney to PaymentService */
  upgradedAt?: Maybe<Scalars['DateTime']['output']>;
  /** List of Virtual IBAN */
  virtualIbanEntries: VirtualIbanEntryConnection;
};


/** Whether you call it a wallet, monetary account, payment account or bank account, the notion of account is fundamental at Swan. All payment flows necessarily go through an account. */
export type AccountFundingSourcesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<FundingSourceFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<FundingSourceOrderByInput>;
};


/** Whether you call it a wallet, monetary account, payment account or bank account, the notion of account is fundamental at Swan. All payment flows necessarily go through an account. */
export type AccountInvoicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: Scalars['Int']['input'];
};


/** Whether you call it a wallet, monetary account, payment account or bank account, the notion of account is fundamental at Swan. All payment flows necessarily go through an account. */
export type AccountLegalDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<LegalDocumentsFilterInput>;
  first?: Scalars['Int']['input'];
};


/** Whether you call it a wallet, monetary account, payment account or bank account, the notion of account is fundamental at Swan. All payment flows necessarily go through an account. */
export type AccountMembershipsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<MembershipsFilterInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<AccountMembershipOrderByInput>;
};


/** Whether you call it a wallet, monetary account, payment account or bank account, the notion of account is fundamental at Swan. All payment flows necessarily go through an account. */
export type AccountMerchantProfilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<MerchantProfileFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<MerchantProfileOrderByInput>;
};


/** Whether you call it a wallet, monetary account, payment account or bank account, the notion of account is fundamental at Swan. All payment flows necessarily go through an account. */
export type AccountReceivedDirectDebitMandatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<AccountReceivedDirectDebitMandateFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<AccountReceivedDirectDebitOrderByInput>;
};


/** Whether you call it a wallet, monetary account, payment account or bank account, the notion of account is fundamental at Swan. All payment flows necessarily go through an account. */
export type AccountStandingOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<AccountStandingOrderFiltersInput>;
  first?: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountStandingOrderOrderByInput>;
};


/** Whether you call it a wallet, monetary account, payment account or bank account, the notion of account is fundamental at Swan. All payment flows necessarily go through an account. */
export type AccountStatementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<StatementFiltersInput>;
  first?: Scalars['Int']['input'];
};


/** Whether you call it a wallet, monetary account, payment account or bank account, the notion of account is fundamental at Swan. All payment flows necessarily go through an account. */
export type AccountTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<TransactionsFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<TransactionsOrderByInput>;
};


/** Whether you call it a wallet, monetary account, payment account or bank account, the notion of account is fundamental at Swan. All payment flows necessarily go through an account. */
export type AccountVirtualIbanEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: Scalars['Int']['input'];
};

/** A list of balances regarding an account. */
export type AccountBalances = {
  __typename: 'AccountBalances';
  /** Balance composed of booked, pending transactions and rolling reserve used known at the time of calculation. */
  available: Amount;
  /** Balance just composed of booked transactions. */
  booked: Amount;
  /** Balance just composed of pending transactions. */
  pending: Amount;
  /** Balance just composed of rolling reserve used in booked transactions. */
  reserved: Amount;
};

/** Account Closed status information */
export type AccountClosedStatus = AccountStatusInfo & {
  __typename: 'AccountClosedStatus';
  /**
   * Reason why the account is suspended
   * @Deprecated
   */
  reason: Scalars['String']['output'];
  /** Reason why the account is currently closed */
  reasonInfo: CloseAccountStatusReason;
  /** Account status (always Closed for type AccountClosedStatus) */
  status: AccountStatus;
};

/** Account Closing status information */
export type AccountClosingStatus = AccountStatusInfo & {
  __typename: 'AccountClosingStatus';
  /**
   * Reason why the account is suspended
   * @Deprecated
   */
  reason: Scalars['String']['output'];
  /** Reason why the account is currently in closing */
  reasonInfo: CloseAccountStatusReason;
  /** Account status (always Closing for type AccountClosingStatus) */
  status: AccountStatus;
};

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type AccountConnection = Connection & {
  __typename: 'AccountConnection';
  /** AccountEdge list */
  edges: Array<AccountEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars['Int']['output'];
};

/**
 * Refers to the country of the account. It will determine the country code of the local IBAN of the account.
 *
 * Available Account Country: CCA3
 */
export type AccountCountry =
  /** German account with a German IBAN, starting with DE. */
  | 'DEU'
  /** Spanish account with a Spanish IBAN, starting with ES. */
  | 'ESP'
  /** French account with a French IBAN, starting with FR. */
  | 'FRA'
  /** Dutch account with a Dutch IBAN, starting with DU. */
  | 'NLD';

/** Implements the Relay Edge interface */
export type AccountEdge = Edge & {
  __typename: 'AccountEdge';
  /** Opaque identifier pointing to this node in the pagination mechanism */
  cursor: Scalars['String']['output'];
  /** The account */
  node: Account;
};

export type AccountFilterInput = {
  /** Account Payment Levels we want to filter on */
  paymentLevels?: InputMaybe<Array<PaymentLevel>>;
  /** Searches name, account number, and IBAN */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Account Status we want to filter on */
  status?: InputMaybe<Array<AccountStatus>>;
};

export type AccountFundingLimitsReachedReason =
  /** Account Holder funding limit exceeded */
  | 'FundingLimitExceededRejection'
  /** Global funding limit exceeded */
  | 'GlobalFundingLimitExceededRejection'
  /** Global instant funding limit exceeded */
  | 'GlobalInstantFundingLimitExceededRejection'
  /** Account Holder instant funding limit exceeded */
  | 'InstantFundingLimitExceededRejection'
  /** Insufficient funds rejection */
  | 'InsufficientFundsRejection'
  /** Project funding limit exceeded */
  | 'ProjectFundingLimitExceededRejection'
  /** Project instant funding limit exceeded */
  | 'ProjectInstantFundingLimitExceededRejection';

/** The account holder is the person who owns the money stored in the account. The account holder can be one of your customers, whether it is a natural person or a legal person, or quite simply you. */
export type AccountHolder = {
  __typename: 'AccountHolder';
  /** List of accounts owned by the account holder. */
  accounts: AccountConnection;
  /** Created date. */
  createdDate: Scalars['DateTime']['output'];
  /** List of external account owned by the account holder */
  externalAccounts: ExternalAccountConnection;
  /** Funding limit settings */
  fundingLimitSettings?: Maybe<FundingLimitSettings>;
  /** List of funding limit settings change request for an account holder */
  fundingLimitSettingsChangeRequests: FundingLimitSettingsChangeRequestConnection;
  /** Unique identifier of the account holder. */
  id: Scalars['ID']['output'];
  /** Account holder type information. */
  info: AccountHolderInfo;
  /** Account holder onboarding */
  onboarding?: Maybe<Onboarding>;
  /** A list of Payment Mandates for an account holder. */
  paymentMandates?: Maybe<PaymentMandateConnection>;
  /** Residency address. */
  residencyAddress: AddressInfo;
  /** Account holder status information. */
  statusInfo?: Maybe<AccountHolderStatusInfo>;
  /** List of supporting document collection for an account holder */
  supportingDocumentCollections: SupportingDocumentCollectionConnection;
  /** Updated date. */
  updatedDate: Scalars['DateTime']['output'];
  /**
   * Verification status.
   * *Banking regulations require financial institutions such as Swan to know and verify their customers in order to comply with their anti-money laundering and terrorist financing obligations. In banking jargon, we talk about KYC (Know Your Customers) procedure*
   */
  verificationStatus: VerificationStatus;
};


/** The account holder is the person who owns the money stored in the account. The account holder can be one of your customers, whether it is a natural person or a legal person, or quite simply you. */
export type AccountHolderAccountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<AccountOrderByInput>;
};


/** The account holder is the person who owns the money stored in the account. The account holder can be one of your customers, whether it is a natural person or a legal person, or quite simply you. */
export type AccountHolderExternalAccountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: Scalars['Int']['input'];
};


/** The account holder is the person who owns the money stored in the account. The account holder can be one of your customers, whether it is a natural person or a legal person, or quite simply you. */
export type AccountHolderFundingLimitSettingsChangeRequestsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: Scalars['Int']['input'];
};


/** The account holder is the person who owns the money stored in the account. The account holder can be one of your customers, whether it is a natural person or a legal person, or quite simply you. */
export type AccountHolderPaymentMandatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<PaymentMandateFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<PaymentMandateOrderByInput>;
};


/** The account holder is the person who owns the money stored in the account. The account holder can be one of your customers, whether it is a natural person or a legal person, or quite simply you. */
export type AccountHolderSupportingDocumentCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: Scalars['Int']['input'];
};

/** Account Holder Canceled Status Information */
export type AccountHolderCanceledStatusInfo = AccountHolderStatusInfo & {
  __typename: 'AccountHolderCanceledStatusInfo';
  /** Reason why the account holder is suspended. */
  reason: Scalars['String']['output'];
  /** Status of the account holder. */
  status: AccountHolderStatus;
};

export type AccountHolderCompanyInfo = AccountHolderInfo & {
  __typename: 'AccountHolderCompanyInfo';
  /** Business activity. */
  businessActivity: BusinessActivity;
  /**
   * Business activity description.
   * This must be 1024 characters long maximum.
   */
  businessActivityDescription: Scalars['String']['output'];
  /** Registration date of the company. */
  companyRegistrationDate?: Maybe<Scalars['Date']['output']>;
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
  name: Scalars['String']['output'];
  /** Registration number of the company (SIRET, ...). */
  registrationNumber?: Maybe<Scalars['String']['output']>;
  /** Tax Identification Number */
  taxIdentificationNumber?: Maybe<Scalars['String']['output']>;
  /** Account holder type (always Company for type AccountHolderCompanyInfo) */
  type: AccountHolderType;
  /** Unique number that identifies a taxable person (business) or non-taxable legal entity that is registered for VAT */
  vatNumber?: Maybe<Scalars['String']['output']>;
};

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)). */
export type AccountHolderConnection = Connection & {
  __typename: 'AccountHolderConnection';
  /** AccountHolderEdge list. */
  edges: Array<AccountHolderEdge>;
  /** Information about the current, the previous and the next page. */
  pageInfo: PageInfo;
  /** Total number of element in the list. */
  totalCount: Scalars['Int']['output'];
};

/** Implements the Relay Edge interface. */
export type AccountHolderEdge = Edge & {
  __typename: 'AccountHolderEdge';
  /** Opaque identifier pointing to this node in the pagination mechanism. */
  cursor: Scalars['String']['output'];
  /** The account holder. */
  node: AccountHolder;
};

/** Account Holder Enabled Status Information */
export type AccountHolderEnabledStatusInfo = AccountHolderStatusInfo & {
  __typename: 'AccountHolderEnabledStatusInfo';
  /** Status of the account holder. */
  status: AccountHolderStatus;
};

export type AccountHolderFilterInput = {
  birthDate?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  registrationNumber?: InputMaybe<Scalars['String']['input']>;
  /** Searches company name, first name, last name */
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<AccountHolderStatus>>;
  types?: InputMaybe<Array<AccountHolderType>>;
  verificationStatus?: InputMaybe<Array<VerificationStatus>>;
};

/** Individual account holder. */
export type AccountHolderIndividualInfo = AccountHolderInfo & {
  __typename: 'AccountHolderIndividualInfo';
  /** Employment status of the account holder (regulatory questions). */
  employmentStatus: EmploymentStatus;
  /** Monthly income of the account holder (regulatory questions). */
  monthlyIncome: MonthlyIncome;
  /** Account Holder's first name and last name. */
  name: Scalars['String']['output'];
  /** Tax Identification Number */
  taxIdentificationNumber?: Maybe<Scalars['String']['output']>;
  /** Account holder type (always Individual for type AccountHolderIndividualInfo). */
  type: AccountHolderType;
  /** User of the individual account holder. */
  user: User;
};

/** Account holder types. */
export type AccountHolderInfo = {
  /** Account holder name */
  name: Scalars['String']['output'];
  /** Account holder type */
  type: AccountHolderType;
};

/** Rejection returned when the Account Holder was not found */
export type AccountHolderNotFoundRejection = Rejection & {
  __typename: 'AccountHolderNotFoundRejection';
  message: Scalars['String']['output'];
};

/** Field we can use when ordering that can be applied when listing account holders */
export type AccountHolderOrderByFieldInput =
  | 'createdAt'
  | 'updatedAt';

/** Order that can be applied when listing account holders */
export type AccountHolderOrderByInput = {
  direction?: InputMaybe<OrderByDirection>;
  field?: InputMaybe<AccountHolderOrderByFieldInput>;
};

/** Account holder status. */
export type AccountHolderStatus =
  /** When the account holder is canceled. */
  | 'Canceled'
  /** When the account holder is enabled. */
  | 'Enabled'
  /** When the account holder is suspended. */
  | 'Suspended';

/** Account Holder Status Information */
export type AccountHolderStatusInfo = {
  /** Status of the account holder. */
  status: AccountHolderStatus;
};

/** Account Holder Suspended Status Information */
export type AccountHolderSuspendedStatusInfo = AccountHolderStatusInfo & {
  __typename: 'AccountHolderSuspendedStatusInfo';
  /** Reason why the account holder is suspended. */
  reason: Scalars['String']['output'];
  /** Status of the account holder. */
  status: AccountHolderStatus;
};

/** Account holder type */
export type AccountHolderType =
  /** Company (Legal person) */
  | 'Company'
  /** Individual (Natural person) */
  | 'Individual';

/**
 * Rejection returned if the account holder type is individual.
 * An individual account holder can't create a b2b received direct debit mandate.
 */
export type AccountHolderTypeIndividualRejection = Rejection & {
  __typename: 'AccountHolderTypeIndividualRejection';
  message: Scalars['String']['output'];
};

/** Language: ISO 639-1 language code */
export type AccountLanguage =
  | 'de'
  | 'en'
  | 'es'
  | 'fr'
  | 'it'
  | 'nl'
  | 'pt';

/**
 * An account membership represents the rights of a user for a given account.
 *
 * *Each account is administered by an account membership having the capacity of legal representative. He has the possibility of delegating rights on this account to other users.*
 */
export type AccountMembership = {
  __typename: 'AccountMembership';
  /** List of accepted identification level */
  acceptedIdentificationLevels: Array<Maybe<IdentificationLevel>>;
  /** account of the account membership */
  account?: Maybe<Account>;
  /** `true` if this account membership can initiate payments */
  canInitiatePayments: Scalars['Boolean']['output'];
  /** `true` if this account membership can invite, update, suspend or resume memberships */
  canManageAccountMembership: Scalars['Boolean']['output'];
  /** `true` if this account membership can add or canceled beneficiaries */
  canManageBeneficiaries: Scalars['Boolean']['output'];
  /** `true` if this account membership can manage cards for himself or to the memberships he manages */
  canManageCards: Scalars['Boolean']['output'];
  /** `true` if this account membership can view account balances and transactions history */
  canViewAccount: Scalars['Boolean']['output'];
  /** account membership's cards */
  cards: CardConnection;
  /** Created date */
  createdAt: Scalars['DateTime']['output'];
  /** Disabled date */
  disabledAt?: Maybe<Scalars['DateTime']['output']>;
  /** email */
  email: Scalars['String']['output'];
  /** Indicate if the identity bound to the account membership has required identification level */
  hasRequiredIdentificationLevel?: Maybe<Scalars['Boolean']['output']>;
  /** Unique identifier of an account membership */
  id: Scalars['ID']['output'];
  /** `true` if this account membership having the capacity of the legal representative of the account holder. */
  legalRepresentative: Scalars['Boolean']['output'];
  /** Recommended identification level */
  recommendedIdentificationLevel: IdentificationLevel;
  /** Residency address of the member */
  residencyAddress?: Maybe<AddressInfo>;
  /** Periodic Spending */
  spending?: Maybe<Spending>;
  /** Periodic Spending limit list */
  spendingLimits?: Maybe<Array<SpendingLimit>>;
  /** status of the account membership */
  statusInfo: AccountMembershipStatusInfo;
  /** Tax Identification Number of the member */
  taxIdentificationNumber?: Maybe<Scalars['String']['output']>;
  /** Updated date */
  updatedAt: Scalars['DateTime']['output'];
  /** user of this account membership */
  user?: Maybe<User>;
  /** version of the account membership started from '1' and incremented at every updates */
  version: Scalars['String']['output'];
};


/**
 * An account membership represents the rights of a user for a given account.
 *
 * *Each account is administered by an account membership having the capacity of legal representative. He has the possibility of delegating rights on this account to other users.*
 */
export type AccountMembershipCardsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<CardFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<CardOrderByInput>;
};

/** when a user is binded with the error to the account membership */
export type AccountMembershipBindingUserErrorStatusInfo = AccountMembershipStatusInfo & {
  __typename: 'AccountMembershipBindingUserErrorStatusInfo';
  /** `true` if the birth date of the user binded doesn't match with the invitation */
  birthDateMatchError: Scalars['Boolean']['output'];
  /** `true` if the first name of the user binded doesn't match with the invitation */
  firstNameMatchError: Scalars['Boolean']['output'];
  /** `true` if Swan hasn't verified the user's identity */
  idVerifiedMatchError: Scalars['Boolean']['output'];
  /** `true` if the last name of the user binded doesn't match with the invitation */
  lastNameMatchError: Scalars['Boolean']['output'];
  /** `true` if the phone number of the user binded doesn't match with the invitation */
  phoneNumberMatchError: Scalars['Boolean']['output'];
  /** restricted to a user */
  restrictedTo: RestrictedTo;
  /** AccountMembership status (always BindingUserError for type AccountMembershipBindingUserErrorStatusInfo) */
  status: AccountMembershipStatus;
};

export type AccountMembershipCannotBeDisabledRejection = Rejection & {
  __typename: 'AccountMembershipCannotBeDisabledRejection';
  accountMembershipId: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type AccountMembershipCannotBeUpdatedRejection = Rejection & {
  __typename: 'AccountMembershipCannotBeUpdatedRejection';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type AccountMembershipConnection = Connection & {
  __typename: 'AccountMembershipConnection';
  /** AccountMembershipEdge list */
  edges: Array<AccountMembershipEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars['Int']['output'];
};

/** when the user has to consent to invite a new account membership */
export type AccountMembershipConsentPendingStatusInfo = AccountMembershipStatusInfo & {
  __typename: 'AccountMembershipConsentPendingStatusInfo';
  /** The consent required to invite this account membership */
  consent: Consent;
  /** restricted to a user */
  restrictedTo: RestrictedTo;
  /** AccountMembership status (always ConsentPending for type AccountMembershipConsentPendingStatusInfo) */
  status: AccountMembershipStatus;
};

/** when the account membership is disabled */
export type AccountMembershipDisabledStatusInfo = AccountMembershipStatusInfo & {
  __typename: 'AccountMembershipDisabledStatusInfo';
  /** reason why the account membership is disabled */
  reason: Scalars['String']['output'];
  /** AccountMembership status (always Disabled for type AccountMembershipDisabledStatusInfo) */
  status: AccountMembershipStatus;
};

/** Implements the Relay Edge interface */
export type AccountMembershipEdge = Edge & {
  __typename: 'AccountMembershipEdge';
  /** Opaque identifier pointing to this node in the pagination mechanism */
  cursor: Scalars['String']['output'];
  /** The account membership */
  node: AccountMembership;
};

/** when the account membership is enabled */
export type AccountMembershipEnabledStatusInfo = AccountMembershipStatusInfo & {
  __typename: 'AccountMembershipEnabledStatusInfo';
  /** AccountMembership status (always Enabled for type AccountMembershipEnabledStatusInfo) */
  status: AccountMembershipStatus;
};

/** when a new account membership is invited and there is no user binded yet */
export type AccountMembershipInvitationSentStatusInfo = AccountMembershipStatusInfo & {
  __typename: 'AccountMembershipInvitationSentStatusInfo';
  /** restricted to a user */
  restrictedTo: RestrictedTo;
  /** AccountMembership status (always InvitationSent for type AccountMembershipInvitationSentStatusInfo) */
  status: AccountMembershipStatus;
};

/** Rejection returned when the Account Membership is not allowed to use an operation. */
export type AccountMembershipNotAllowedRejection = Rejection & {
  __typename: 'AccountMembershipNotAllowedRejection';
  message: Scalars['String']['output'];
};

export type AccountMembershipNotFoundRejection = Rejection & {
  __typename: 'AccountMembershipNotFoundRejection';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Rejection returned if invitation has not been sent to user yet */
export type AccountMembershipNotReadyToBeBoundRejection = Rejection & {
  __typename: 'AccountMembershipNotReadyToBeBoundRejection';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Field we can use when ordering that can be applied when listing account memberships */
export type AccountMembershipOrderByFieldInput =
  | 'createdAt'
  | 'updatedAt';

/** Order that can be applied when listing account memberships */
export type AccountMembershipOrderByInput = {
  direction?: InputMaybe<OrderByDirection>;
  field?: InputMaybe<AccountMembershipOrderByFieldInput>;
};

/** AccountMembership enabled */
export type AccountMembershipStatus =
  /** when the user binded with errors to the account membership */
  | 'BindingUserError'
  /** when the consent to invite the account membership is pending */
  | 'ConsentPending'
  /** when the account membership is disabled */
  | 'Disabled'
  /** when the account membership is enabled */
  | 'Enabled'
  /** when the account membership is invited */
  | 'InvitationSent'
  /** when the account membership is suspended */
  | 'Suspended';

/** here are the different account membership status: */
export type AccountMembershipStatusInfo = {
  /** AccountMembership status */
  status: AccountMembershipStatus;
};

/** when the account membership is suspended */
export type AccountMembershipSuspendedStatusInfo = AccountMembershipStatusInfo & {
  __typename: 'AccountMembershipSuspendedStatusInfo';
  /** reason why the account membership is suspended */
  reason: Scalars['String']['output'];
  /** AccountMembership status (always Suspended for type AccountMembershipSuspendedStatusInfo) */
  status: AccountMembershipStatus;
};

/** Filters that can be applied when listing accounts (Only applied in user context) */
export type AccountMembershipsFilterInput = {
  /** Can the user initiate payments on this account */
  canInitiatePayments?: InputMaybe<Scalars['Boolean']['input']>;
  /** Can the user manage account membership */
  canManageAccountMembership?: InputMaybe<Scalars['Boolean']['input']>;
  /** Can the user manage beneficiaries */
  canManageBeneficiaries?: InputMaybe<Scalars['Boolean']['input']>;
  /** `true` if this account membership can manage cards for himself or to the memberships he manages */
  canManageCards?: InputMaybe<Scalars['Boolean']['input']>;
  /** Can the user view account */
  canViewAccount?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filtered by email */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Filtered by first name */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Filtered by last name */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Searches email, first name, last name, and id */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Account memberships status/statuses we're looking for */
  status?: InputMaybe<Array<AccountMembershipStatus>>;
};

/** List of account memberships permission */
export type AccountMembershipsPermission =
  | 'canInitiatePayments'
  | 'canManageAccountMembership'
  | 'canManageBeneficiaries'
  | 'canManageCards'
  | 'canViewAccount';

/** Thrown when an related account is not eligible to the feature */
export type AccountNotEligibleRejection = Rejection & {
  __typename: 'AccountNotEligibleRejection';
  message: Scalars['String']['output'];
};

/** Rejection returned if the account was not found or if the user does not have the rights to know that the card exists */
export type AccountNotFoundRejection = Rejection & {
  __typename: 'AccountNotFoundRejection';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Account Opened status information */
export type AccountOpenedStatus = AccountStatusInfo & {
  __typename: 'AccountOpenedStatus';
  /** Account status (always Opened for type AccountOpenedStatus) */
  status: AccountStatus;
};

/** Fields that can be used when ordering accounts */
export type AccountOrderByFieldInput =
  | 'createdAt'
  | 'updatedAt';

/** Order that can be applied when listing accounts */
export type AccountOrderByInput = {
  direction?: InputMaybe<OrderByDirection>;
  field?: InputMaybe<AccountOrderByFieldInput>;
};

/** Filter that can be passed to get the received direct debit mandate in a specific data range */
export type AccountReceivedDirectDebitMandateFiltersInput = {
  /** To filter on scheme values */
  scheme?: InputMaybe<Array<ReceivedDirectDebitMandateScheme>>;
  /** To filter on status values */
  status?: InputMaybe<Array<ReceivedDirectDebitMandateStatus>>;
};

/** Field we can use when ordering that can be applied when listing receives direct debit mandate results */
export type AccountReceivedDirectDebitOrderByFieldInput =
  | 'createdAt'
  | 'updatedAt';

/** Order that can be applied when listing receives direct debit mandate results */
export type AccountReceivedDirectDebitOrderByInput = {
  direction?: InputMaybe<OrderByDirection>;
  field?: InputMaybe<AccountReceivedDirectDebitOrderByFieldInput>;
};

/** Filters that can be applied when listing Standing orders */
export type AccountStandingOrderFiltersInput = {
  status?: InputMaybe<Array<StandingOrderStatus>>;
};

/** Field we can use when ordering that can be applied when listing standing order results */
export type AccountStandingOrderOrderByFieldInput =
  | 'createdAt'
  | 'updatedAt';

/** Order that can be applied when listing standing order results */
export type AccountStandingOrderOrderByInput = {
  direction?: InputMaybe<OrderByDirection>;
  field?: InputMaybe<AccountStandingOrderOrderByFieldInput>;
};

export type AccountStatus =
  /** When the account is closed */
  | 'Closed'
  /** When the account is currently closing */
  | 'Closing'
  /** When the account is opened */
  | 'Opened'
  /** When the account is suspended */
  | 'Suspended';

export type AccountStatusInfo = {
  /** Account status */
  status: AccountStatus;
};

/** Account Suspended status information */
export type AccountSuspendedStatus = AccountStatusInfo & {
  __typename: 'AccountSuspendedStatus';
  /**
   * Reason why the account is suspended
   * @Deprecated
   */
  reason: Scalars['String']['output'];
  /** Reason why the account is currently suspend */
  reasonInfo: SuspendAccountStatusReason;
  /** Account status (always Suspended for type AccountSuspendedStatus) */
  status: AccountStatus;
};

/** Account Verification */
export type AccountVerification = {
  /** Creation date of the account verification */
  createdAt: Scalars['DateTime']['output'];
  /** Unique identifier of the Account Verification */
  id: Scalars['ID']['output'];
  /** Account Verification Status Information */
  statusInfo: AccountVerificationStatusInfo;
  /** Last update date of the account verification */
  updatedAt: Scalars['DateTime']['output'];
};

/**
 * Rejection returned when the external account has already been rejected.
 *
 * In such a case, contact Swan directly to resolve the situation for this specific account holder.
 */
export type AccountVerificationAlreadyRejectedRejection = Rejection & {
  __typename: 'AccountVerificationAlreadyRejectedRejection';
  message: Scalars['String']['output'];
};

/** Account Verification Status */
export type AccountVerificationStatus =
  /**
   * We could not automatically match the external iban based on last received transfer.
   * Manuel review process is underway
   */
  | 'PendingReview'
  /** We are waiting for the end user to send a credit transfer from his external iban to any Swan owned iban */
  | 'PendingVerification'
  /** Account verification has been rejected */
  | 'Rejected'
  /** Account has been verified */
  | 'Verified';

/** Account Verification Status Information */
export type AccountVerificationStatusInfo = {
  /** Account verification status */
  status: AccountVerificationStatus;
};

/** Rejection returned when the Account Verification is not in the expected status */
export type AccountVerificationWrongStatusRejection = Rejection & {
  __typename: 'AccountVerificationWrongStatusRejection';
  message: Scalars['String']['output'];
};

export type ActivatePhysicalCardInput = {
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
  /** Unique identifier present on physical card */
  identifier: Scalars['String']['input'];
};

export type ActivatePhysicalCardPayload = ActivatePhysicalCardSuccessPayload | BadAccountStatusRejection | CannotActivatePhysicalCardRejection | CardNotFoundRejection | ForbiddenRejection | PhysicalCardNotFoundRejection | PhysicalCardWrongStatusRejection | UserNotCardHolderRejection | ValidationRejection;

export type ActivatePhysicalCardSuccessPayload = {
  __typename: 'ActivatePhysicalCardSuccessPayload';
  /** The consent required to activate this physical card */
  consent: Consent;
  /** The physicalCard to activate */
  physicalCard: PhysicalCard;
};

export type ActiveMerchantPaymentLinkStatusInfo = MerchantPaymentLinkStatusInfo & {
  __typename: 'ActiveMerchantPaymentLinkStatusInfo';
  /**
   * The date when the payment link expires.
   * The payment link expires 24 hours after it was created.
   */
  expiresAt: Scalars['DateTime']['output'];
  status: MerchantPaymentLinkStatus;
};

/** Inputs to add a new account membership */
export type AddAccountMembershipInput = {
  /** Unique identifier of a given account */
  accountId: Scalars['ID']['input'];
  /** `true` if this account membership can initiate payments */
  canInitiatePayments: Scalars['Boolean']['input'];
  /** `true` if this account membership can invite, update, suspend or resume account membership */
  canManageAccountMembership: Scalars['Boolean']['input'];
  /** `true` if this account membership can add or canceled beneficiaries */
  canManageBeneficiaries: Scalars['Boolean']['input'];
  /** `true` if this account membership can manage cards for himself or to the memberships he manages */
  canManageCards?: InputMaybe<Scalars['Boolean']['input']>;
  /** `true` if this account membership can view account balances and transactions history */
  canViewAccount: Scalars['Boolean']['input'];
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
  /** Email address */
  email: Scalars['String']['input'];
  /** Residency address of the member to be added */
  residencyAddress?: InputMaybe<ResidencyAddressInput>;
  /** Restricted to a user if necessary */
  restrictedTo: RestrictedToInput;
  /** Tax Identification Number of the user added */
  taxIdentificationNumber?: InputMaybe<Scalars['String']['input']>;
};

export type AddAccountMembershipPayload = AddAccountMembershipSuccessPayload | BadAccountStatusRejection | ForbiddenRejection | InvalidPhoneNumberRejection | PermissionCannotBeGrantedRejection | ValidationRejection;

export type AddAccountMembershipSuccessPayload = {
  __typename: 'AddAccountMembershipSuccessPayload';
  accountMembership: AccountMembership;
};

/** Inputs to add a new account membership */
export type AddAccountMembershipsInput = {
  /** Unique identifier of a given account */
  accountId: Scalars['ID']['input'];
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
  /** Memberships to add to the account */
  memberships: Array<MembershipInfoInput>;
};

export type AddAccountMembershipsPayload = AddAccountMembershipsSuccessPayload | BadAccountStatusRejection | ForbiddenRejection | InvalidPhoneNumberRejection | PermissionCannotBeGrantedRejection | TooManyItemsRejection | ValidationRejection;

export type AddAccountMembershipsSuccessPayload = {
  __typename: 'AddAccountMembershipsSuccessPayload';
  accountMemberships: Array<AccountMembership>;
};

/** Inputs to add a new card */
export type AddCardInput = {
  /** Unique identifier of a given account membership */
  accountMembershipId: Scalars['ID']['input'];
  /** Card expiration date  if `null` it does not have an expiration date */
  cardContractExpiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** The id of the card product to use to create the new card. */
  cardProductId?: InputMaybe<Scalars['ID']['input']>;
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
  /** `true` if this card allows transactions at eCommerce sites */
  eCommerce: Scalars['Boolean']['input'];
  /** `true` if this card allows payments outside of the country */
  international: Scalars['Boolean']['input'];
  /** Card name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** `true` if this card allows transactions outside of the card's main currency */
  nonMainCurrencyTransactions: Scalars['Boolean']['input'];
  /** Spending limit */
  spendingLimit?: InputMaybe<SpendingLimitInput>;
  /** `true` to show the card confidential information in the same request */
  viewCardNumber?: InputMaybe<Scalars['Boolean']['input']>;
  /** `true` if this card allows cash withdrawals */
  withdrawal: Scalars['Boolean']['input'];
};

export type AddCardPayload = AccountMembershipNotAllowedRejection | AddCardSuccessPayload | BadAccountStatusRejection | CardProductDisabledRejection | CardProductSuspendedRejection | EnabledCardDesignNotFoundRejection | ForbiddenRejection | MissingMandatoryFieldRejection | ValidationRejection;

export type AddCardSuccessPayload = {
  __typename: 'AddCardSuccessPayload';
  /** The new card added */
  card: Card;
};

/** Input to add a new cards */
export type AddCardsInput = {
  /** The id of the card product to use to create the new cards. */
  cardProductId?: InputMaybe<Scalars['ID']['input']>;
  /** The configuration of all the cards you want to add */
  cards: Array<CardConfigInput>;
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
};

export type AddCardsPayload = AccountMembershipNotAllowedRejection | AddCardsSuccessPayload | AddingCardsToDifferentAccountsRejection | BadAccountStatusRejection | CardProductDisabledRejection | CardProductNotApplicableToPhysicalCardsRejection | CardProductSuspendedRejection | EnabledCardDesignNotFoundRejection | MissingMandatoryFieldRejection | TooManyItemsRejection | ValidationRejection;

export type AddCardsSuccessPayload = {
  __typename: 'AddCardsSuccessPayload';
  /** The newly created cards */
  cards: Array<Card>;
};

/** Input to add a new cards */
export type AddCardsWithGroupDeliveryInput = {
  /** The id of the card product to use to create the new cards. */
  cardProductId?: InputMaybe<Scalars['ID']['input']>;
  /** The configuration of all the cards you want to add */
  cards: Array<CardConfigWithGroupDeliveryInput>;
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
  /** Address to deliver the printed physical cards */
  groupDeliveryAddress: CompleteAddressWithContactInput;
};

export type AddCardsWithGroupDeliveryPayload = AccountMembershipNotAllowedRejection | AddCardsWithGroupDeliverySuccessPayload | AddingCardsToDifferentAccountsRejection | BadAccountStatusRejection | CardProductDisabledRejection | CardProductNotApplicableToPhysicalCardsRejection | CardProductSuspendedRejection | EnabledCardDesignNotFoundRejection | MissingMandatoryFieldRejection | TooManyItemsRejection | ValidationRejection;

export type AddCardsWithGroupDeliverySuccessPayload = {
  __typename: 'AddCardsWithGroupDeliverySuccessPayload';
  /** The newly created cards */
  cards: Array<Card>;
};

/** Inputs to add a new digital card */
export type AddDigitalCardInput = {
  /** Unique identifier of a card */
  cardId: Scalars['ID']['input'];
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
  /** Provider for which to generate a digitalCard */
  walletProvider: WalletProviderType;
};

/** Payload returned on mutation completion */
export type AddDigitalCardPayload = AccountMembershipNotAllowedRejection | AddDigitalCardSuccessPayload | ApplePayNotAllowedForProjectRejection | BadAccountStatusRejection | CardCanNotBeDigitalizedRejection | CardNotFoundRejection | CardProductDisabledRejection | EnabledCardDesignNotFoundRejection | MissingMandatoryFieldRejection | UserNotCardHolderRejection | ValidationRejection;

export type AddDigitalCardSuccessPayload = {
  __typename: 'AddDigitalCardSuccessPayload';
  /**
   * Digital Card used for ApplePay or GooglePay
   *
   * The consent can be found in the digital card status information.
   */
  digitalCard: PendingDigitalCard;
};

/** Input to add a Direct Debit Funding Source */
export type AddDirectDebitFundingSourceInput = {
  /**
   * Id of the account on which to create a funding source.
   * Money will be funded to this account when an `initiateFundingRequest` is done using this funding source
   */
  accountId: Scalars['ID']['input'];
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
  /**
   * IBAN to use in the direct debit transaction that will be triggered when funding the account.
   * Money will be debited from this IBAN when an `initiateFundingRequest` is done using this funding source
   */
  iban: Scalars['IBAN']['input'];
  /** Name to give to this funding source */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Scheme of the underlying payment mandate */
  scheme: SepaDirectDebitScheme;
};

/** Add Direct Debit Funding Source Payload */
export type AddDirectDebitFundingSourcePayload = AccountVerificationAlreadyRejectedRejection | AddDirectDebitFundingSourceSuccessPayload | ForbiddenRejection | IbanNotReachableRejection | NotFoundRejection | ValidationRejection;

/** Add Direct Debit Funding Source Success Payload */
export type AddDirectDebitFundingSourceSuccessPayload = {
  __typename: 'AddDirectDebitFundingSourceSuccessPayload';
  /** The created funding source */
  fundingSource: FundingSource;
};

export type AddExternalAccountBalanceInput = {
  /** Amount of the balance */
  amount: AmountInput;
  /** Unique identifier of a given external account */
  externalAccountId: Scalars['ID']['input'];
  /** Last changed Date */
  lastChangedAt: Scalars['DateTime']['input'];
  /** Type of the balance */
  type: ExternalAccountBalanceType;
};

export type AddExternalAccountBalancePayload = AddExternalAccountBalanceSuccessPayload | ExternalAccountBalanceAlreadyExistsRejection | ForbiddenRejection | ValidationRejection;

export type AddExternalAccountBalanceSuccessPayload = {
  __typename: 'AddExternalAccountBalanceSuccessPayload';
  /** The added external balance */
  externalAccountBalance: ExternalAccountBalance;
};

export type AddExternalAccountInput = {
  /** Bank Identifier Code */
  BIC: Scalars['BIC']['input'];
  /** International Bank Account Number */
  IBAN: Scalars['IBAN']['input'];
  /** Unique identifier of a given account holder */
  accountHolderId: Scalars['ID']['input'];
  /** Balances */
  balances?: InputMaybe<Array<ExternalAccountBalanceInput>>;
  /** Type of account */
  cashAccountType: CashAccountType;
  /** Country */
  country: Scalars['CCA3']['input'];
  /** Currency */
  currency: Scalars['Currency']['input'];
  /** External account identifier */
  externalId: Scalars['String']['input'];
  /** Account Holder name */
  holderName: Scalars['String']['input'];
  /** Name of the account */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Original Created date */
  originalCreatedAt: Scalars['DateTime']['input'];
  /** Source of the account information */
  source: Scalars['String']['input'];
  /** Usage information of the account */
  usage: ExternalAccountUsage;
};

export type AddExternalAccountPayload = AddExternalAccountSuccessPayload | ExternalAccountAlreadyExistsRejection | ForbiddenRejection | IbanValidationRejection | ValidationRejection;

export type AddExternalAccountSuccessPayload = {
  __typename: 'AddExternalAccountSuccessPayload';
  /** The added external account */
  externalAccount: ExternalAccount;
};

/** Inputs to add a new request for funding limit settings change */
export type AddFundingLimitSettingsChangeRequestInput = {
  /** Unique identifier of a given account holder */
  accountHolderId: Scalars['ID']['input'];
  /** Requested amount settings for the funding limit */
  fundingLimit: FundingLimitAmountInput;
  /** Requested amount settings for the instant funding limit */
  instantFundingLimit: FundingLimitAmountInput;
};

/** Payload returned on mutation completion */
export type AddFundingLimitSettingsChangeRequestPayload = AccountHolderNotFoundRejection | AddFundingLimitSettingsChangeRequestSuccessPayload | ForbiddenRejection | FundingLimitSettingsChangeRequestBadAmountRejection | ValidationRejection;

/** Add Funding Limit Settings Change Request Success Payload */
export type AddFundingLimitSettingsChangeRequestSuccessPayload = {
  __typename: 'AddFundingLimitSettingsChangeRequestSuccessPayload';
  /** The new request for funding limit settings change */
  fundingLimitSettingsChangeRequest: FundingLimitSettingsChangeRequest;
};

/** Inputs to add an Internal Direct Debit Payment Mandate */
export type AddInternalDirectDebitPaymentMandateInput = {
  /** ID of the Swan account of the debtor */
  debtorAccountId: Scalars['ID']['input'];
  /** Language that will be used to produce the mandate PDF document */
  language?: InputMaybe<MandateLanguage>;
  /** Custom name of the Internal Direct Debit mandate */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the concerned merchant payment method */
  paymentMethodId: Scalars['ID']['input'];
  /** Reference of the payment mandate */
  reference?: InputMaybe<Scalars['String']['input']>;
  /** Determines whether the payment mandate is a one-off or recurring */
  sequence?: InputMaybe<InternalDirectDebitSequence>;
  /** Signature date of the Internal Direct Debit mandate */
  signatureDate?: InputMaybe<Scalars['Date']['input']>;
};

/** Union type return by the addInternalDirectDebitPaymentMandate mutation */
export type AddInternalDirectDebitPaymentMandatePayload = AddInternalDirectDebitPaymentMandateSuccessPayload | DebtorAccountClosedRejection | DebtorAccountNotAllowedRejection | ForbiddenRejection | InternalErrorRejection | NotFoundRejection | PaymentMandateReferenceAlreadyUsedRejection | SchemeWrongRejection;

/** Return type in case of a successful response of the addInternalDirectDebitPaymentMandate mutation */
export type AddInternalDirectDebitPaymentMandateSuccessPayload = {
  __typename: 'AddInternalDirectDebitPaymentMandateSuccessPayload';
  paymentMandate: InternalPaymentDirectDebitMandate;
};

/** Input to add a Merchant Profile */
export type AddMerchantProfileInput = {
  /** ID of the Swan account which the merchantProfile is associated to */
  accountId: Scalars['ID']['input'];
  /** expected average basket value. */
  expectedAverageBasket: AmountInput;
  /** Expected annual activity volumes for all payment methods. */
  expectedMonthlyPaymentVolume: AmountInput;
  /** base64 encoded merchant's logo */
  merchantLogo?: InputMaybe<Scalars['String']['input']>;
  /** Business name of the merchant, i.e. name that will be displayed on debtors' bank statements */
  merchantName: Scalars['String']['input'];
  /** Url of the merchant's website */
  merchantWebsite?: InputMaybe<Scalars['String']['input']>;
  /** Type of product sold. Gifts and donations can be club subscription or collection of donations (for associations), tips collection, contributions for local authorities */
  productType: ProductType;
};

/** Add Merchant Profile Payload */
export type AddMerchantProfilePayload = AccountNotFoundRejection | AddMerchantProfileSuccessPayload | ForbiddenRejection | InternalErrorRejection;

/** Add Merchant Profile Success Payload */
export type AddMerchantProfileSuccessPayload = {
  __typename: 'AddMerchantProfileSuccessPayload';
  /** Merchant Profile */
  merchantProfile: MerchantProfile;
};

export type AddOrUpdateExternalAccountBalanceInput = {
  /** Amount of the balance */
  amount: AmountInput;
  /** Unique identifier of a given external account */
  externalAccountId: Scalars['ID']['input'];
  /** Last changed Date */
  lastChangedAt: Scalars['DateTime']['input'];
  /** Type of the balance */
  type: ExternalAccountBalanceType;
};

export type AddOrUpdateExternalAccountBalancePayload = AddOrUpdateExternalAccountBalanceSuccessPayload | ForbiddenRejection | ValidationRejection;

export type AddOrUpdateExternalAccountBalanceSuccessPayload = {
  __typename: 'AddOrUpdateExternalAccountBalanceSuccessPayload';
  /** The added external balance */
  externalAccountBalance: ExternalAccountBalance;
};

/** Inputs to add a received internal direct debit mandate B2b. */
export type AddReceivedInternalDirectDebitB2bMandateInput = {
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
  /** Label that will be displayed along with this received direct debit mandate in the web banking */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The associated Payment Mandate ID */
  paymentMandateId: Scalars['ID']['input'];
};

/** Union type return by the addReceivedInternalDirectDebitB2bMandate mutation */
export type AddReceivedInternalDirectDebitB2bMandatePayload = AccountHolderTypeIndividualRejection | AddReceivedInternalDirectDebitB2bMandateSuccessPayload | ForbiddenRejection | PaymentMandateMandateNotFoundRejection;

/** Return type in case of a successful response of the addReceivedInternalDirectDebitB2bMandate mutation */
export type AddReceivedInternalDirectDebitB2bMandateSuccessPayload = {
  __typename: 'AddReceivedInternalDirectDebitB2bMandateSuccessPayload';
  /** The received direct debit mandate is added */
  receivedDirectDebitMandate: ReceivedDirectDebitMandate;
};

/** Inputs to add a received sepa direct debit mandate B2b. */
export type AddReceivedSepaDirectDebitB2bMandateInput = {
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
  /** The Sepa Creditor Identifier of the creditor */
  creditorIdentifier: Scalars['String']['input'];
  /** The name of the creditor */
  creditorName: Scalars['String']['input'];
  /** The Swan Iban of the debtor */
  iban: Scalars['String']['input'];
  /** The unique identifier of the received direct debit mandate */
  mandateReference: Scalars['String']['input'];
  /** Label that will be displayed along with this received direct debit mandate in the web banking */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Sequence of the mandate */
  sequence: SepaReceivedDirectDebitMandateSequence;
  /** Date of signature of the mandate */
  signatureDate?: InputMaybe<Scalars['Date']['input']>;
};

/** Union type return by the addReceivedSepaDirectDebitB2bMandate mutation */
export type AddReceivedSepaDirectDebitB2bMandatePayload = AccountHolderTypeIndividualRejection | AccountNotFoundRejection | AddReceivedSepaDirectDebitB2bMandateSuccessPayload | ForbiddenRejection;

/** Return type in case of a successful response of the addReceivedSepaDirectDebitB2bMandate mutation */
export type AddReceivedSepaDirectDebitB2bMandateSuccessPayload = {
  __typename: 'AddReceivedSepaDirectDebitB2bMandateSuccessPayload';
  /** The received direct debit mandate is added */
  receivedDirectDebitMandate: ReceivedDirectDebitMandate;
};

export type AddSepaDirectDebitPaymentMandateInput = {
  /** Debtor of the SEPA Direct Debit Payment Mandate */
  debtor: SepaPaymentMandateDebtorInput;
  /** Language that will be used to produce the mandate PDF document */
  language: MandateLanguage;
  /** Custom name of the SEPA Direct Debit Payment Mandate */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specifies payment ID of a SEPA Direct Debit CORE or B2B payment method. */
  paymentMethodId: Scalars['ID']['input'];
  /** Unique reference of the SEPA Direct Debit Payment Mandate. */
  reference?: InputMaybe<Scalars['String']['input']>;
  /** Determines whether the payment mandate is a one-off or recurring */
  sequence: DirectDebitSequence;
  /** Signature date of the SEPA Direct Debit Payment Mandate */
  signatureDate: Scalars['Date']['input'];
};

/** Union type return by the addSepaDirectDebitPaymentMandate mutation */
export type AddSepaDirectDebitPaymentMandatePayload = AddSepaDirectDebitPaymentMandateSuccessPayload | DebtorAccountClosedRejection | DebtorAccountNotAllowedRejection | ForbiddenRejection | InternalErrorRejection | NotFoundRejection | PaymentMandateReferenceAlreadyUsedRejection | PaymentMethodNotCompatibleRejection | SchemeWrongRejection | ValidationRejection;

/** Return type in case of a successful response of the addSepaDirectDebitPaymentMandate mutation */
export type AddSepaDirectDebitPaymentMandateSuccessPayload = {
  __typename: 'AddSepaDirectDebitPaymentMandateSuccessPayload';
  paymentMandate: SepaPaymentDirectDebitMandate;
};

/** Inputs to add a new card */
export type AddSingleUseVirtualCardInput = {
  /** Unique identifier of a given account membership */
  accountMembershipId: Scalars['ID']['input'];
  /** The id of the card product to use to create the new card. */
  cardProductId?: InputMaybe<Scalars['ID']['input']>;
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
  /** Card name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Spending limit */
  spendingLimit: SpendingLimitInput;
  /** `true` to show the card confidential information in the same request */
  viewCardNumber?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AddSingleUseVirtualCardPayload = AccountMembershipNotAllowedRejection | AddSingleUseVirtualCardSuccessForProjectOwnerPayload | AddSingleUseVirtualCardSuccessForUserPayload | BadAccountStatusRejection | CardProductDisabledRejection | CardProductSuspendedRejection | EnabledCardDesignNotFoundRejection | MissingMandatoryFieldRejection | ValidationRejection;

export type AddSingleUseVirtualCardSuccessForProjectOwnerPayload = {
  __typename: 'AddSingleUseVirtualCardSuccessForProjectOwnerPayload';
  /** The new card added */
  card: Card;
  /** Card confidential */
  confidential: CardConfidential;
};

export type AddSingleUseVirtualCardSuccessForUserPayload = {
  __typename: 'AddSingleUseVirtualCardSuccessForUserPayload';
  /** The new card added */
  card: Card;
};

/** Input to add a new single-use virtual cards */
export type AddSingleUseVirtualCardsInput = {
  /** The id of the card product to use to create the new cards. */
  cardProductId?: InputMaybe<Scalars['ID']['input']>;
  /** The configuration of all the cards you want to add */
  cards: Array<SingleUseVirtualCardConfigInput>;
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
};

export type AddSingleUseVirtualCardsPayload = AccountMembershipNotAllowedRejection | AddSingleUseVirtualCardsSuccessPayload | AddingCardsToDifferentAccountsRejection | BadAccountStatusRejection | CardProductDisabledRejection | CardProductSuspendedRejection | EnabledCardDesignNotFoundRejection | MissingMandatoryFieldRejection | TooManyItemsRejection | ValidationRejection;

export type AddSingleUseVirtualCardsSuccessPayload = {
  __typename: 'AddSingleUseVirtualCardsSuccessPayload';
  /** The newly created single use virtual cards */
  cards: Array<Card>;
};

export type AddVirtualIbanEntryPayload = AccountNotFoundRejection | AddVirtualIbanEntrySuccessPayload | BadAccountStatusRejection | ForbiddenRejection | ValidationRejection;

export type AddVirtualIbanEntrySuccessPayload = {
  __typename: 'AddVirtualIbanEntrySuccessPayload';
  virtualIbanEntry: VirtualIbanEntry;
};

/** Input to Add a Virtual IBAN */
export type AddVirtualIbanInput = {
  /** Unique identifier of a given account */
  accountId: Scalars['ID']['input'];
};

/** Rejection returned if the attempting to add cards to different accounts. */
export type AddingCardsToDifferentAccountsRejection = Rejection & {
  __typename: 'AddingCardsToDifferentAccountsRejection';
  message: Scalars['String']['output'];
};

/** Address Information */
export type Address = {
  __typename: 'Address';
  /** address line 1 */
  addressLine1?: Maybe<Scalars['String']['output']>;
  /** addressLine2 */
  addressLine2?: Maybe<Scalars['String']['output']>;
  /** city */
  city?: Maybe<Scalars['String']['output']>;
  /** country */
  country?: Maybe<Scalars['CCA3']['output']>;
  /** postal code (max 10 characters) */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** state */
  state?: Maybe<Scalars['String']['output']>;
};

/** Address information. */
export type AddressInfo = {
  __typename: 'AddressInfo';
  /** Address line 1. */
  addressLine1?: Maybe<Scalars['String']['output']>;
  /** Address line 2. */
  addressLine2?: Maybe<Scalars['String']['output']>;
  /** City. */
  city?: Maybe<Scalars['String']['output']>;
  /** Country. */
  country?: Maybe<Scalars['CCA3']['output']>;
  /** Postal code. */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** State. */
  state?: Maybe<Scalars['String']['output']>;
};

/** Address */
export type AddressInformation = {
  __typename: 'AddressInformation';
  /** Address */
  addressLine1: Scalars['String']['output'];
  /** Address */
  addressLine2?: Maybe<Scalars['String']['output']>;
  /** City */
  city: Scalars['String']['output'];
  /** Country */
  country: Scalars['CCA3']['output'];
  /** Postal code */
  postalCode: Scalars['String']['output'];
  /** State */
  state?: Maybe<Scalars['String']['output']>;
};

/** Address */
export type AddressInformationInput = {
  /** Address */
  addressLine1: Scalars['String']['input'];
  /** Address */
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  /** City */
  city: Scalars['String']['input'];
  /** Country */
  country: Scalars['CCA3']['input'];
  /** Postal code */
  postalCode: Scalars['String']['input'];
  /** State */
  state?: InputMaybe<Scalars['String']['input']>;
};

/** Address Information */
export type AddressInput = {
  /** address line 1 (max 100 characters) */
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  /** address line 2 (max 100 characters) */
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  /** city (max 100 characters) */
  city?: InputMaybe<Scalars['String']['input']>;
  /** country code */
  country: Scalars['CCA3']['input'];
  /** postal code (max 10 characters) */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** state (max 100 characters) */
  state?: InputMaybe<Scalars['String']['input']>;
};

/** Input to Allow SDD */
export type AllowSddInput = {
  /** Unique identifier of a given account */
  accountId: Scalars['ID']['input'];
};

export type AllowSddPayload = AccountNotFoundRejection | AllowSddSuccessPayload | ValidationRejection;

export type AllowSddSuccessPayload = {
  __typename: 'AllowSddSuccessPayload';
  account: Account;
};

export type AllowSddVirtualIbanEntryInput = {
  ibanEntryId: Scalars['ID']['input'];
};

export type AllowSddVirtualIbanEntryPayload = AllowSddVirtualIbanEntrySuccessPayload | BadAccountStatusRejection | ValidationRejection;

export type AllowSddVirtualIbanEntrySuccessPayload = {
  __typename: 'AllowSddVirtualIbanEntrySuccessPayload';
  virtualIbanEntry: VirtualIbanEntry;
};

export type AllowedValue = {
  __typename: 'AllowedValue';
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** Rejection returned if card already has a valid Physical Card */
export type AlreadyValidPhysicalCardRejection = Rejection & {
  __typename: 'AlreadyValidPhysicalCardRejection';
  message: Scalars['String']['output'];
};

export type AmlRiskLevel =
  | 'High'
  | 'Low'
  | 'Medium'
  | 'TooHigh';

/** Amount with its currency */
export type Amount = {
  __typename: 'Amount';
  /** currency */
  currency: Scalars['Currency']['output'];
  /** value of the amount */
  value: Scalars['AmountValue']['output'];
};

/** Amount with its currency */
export type AmountInput = {
  /** currency */
  currency: Scalars['Currency']['input'];
  /** value of the amount */
  value: Scalars['AmountValue']['input'];
};

/** Rejection return if the project is not configured to allow Apple Pay */
export type ApplePayNotAllowedForProjectRejection = Rejection & {
  __typename: 'ApplePayNotAllowedForProjectRejection';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Approved Funding Limit */
export type ApprovedFundingLimit = {
  __typename: 'ApprovedFundingLimit';
  /** Requested amount settings for the funding limit */
  fundingLimit: FundingLimitAmount;
  /** Requested amount settings for the instant funding limit */
  instantFundingLimit: FundingLimitAmount;
};

/** A method used to authenticate a user */
export type Authenticator = {
  __typename: 'Authenticator';
  /** Accept-Language header used during registration, if it's a web authenticator */
  acceptLanguage?: Maybe<Scalars['String']['output']>;
  /** Device Brand (Apple, Samsung, ...) */
  brand?: Maybe<Scalars['String']['output']>;
  /** Device Model (iPhone XS, Samsung S3, ...) */
  model?: Maybe<Scalars['String']['output']>;
  /** Operating System (Apple, Android, ...) */
  os?: Maybe<Scalars['String']['output']>;
  /** Type of authenticator */
  type: AuthenticatorType;
  /** User agent, if it's a web authenticator */
  userAgent?: Maybe<Scalars['String']['output']>;
};

export type AuthenticatorType =
  /** The Swan app */
  | 'Swan'
  /** A Swan web authenticator */
  | 'SwanWeb';

/** Type of the card authorization transaction */
export type AuthorizationType =
  /** Classic authorization, nominal use-case, in order to hold the amount in the available balance that will be debited in the following days */
  | 'Classic'
  /** Usually an authorization used by a merchant to verify if the card exists and can successfully receive a future authorization */
  | 'DataRequest'
  /**
   * Pre-authorization.
   * Usually an authorization in order to hold the amount in the available balance that will be updated in a second time with the final amount (gaz station, car rent, etc)
   */
  | 'PreAuthorization';

/** Rejection returned if the status account is not valid */
export type BadAccountStatusRejection = Rejection & {
  __typename: 'BadAccountStatusRejection';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type BadRequestRejection = Rejection & {
  __typename: 'BadRequestRejection';
  message: Scalars['String']['output'];
};

/** Balance Information */
export type Balance = {
  __typename: 'Balance';
  /** Matching account for this balance */
  account: Account;
  /** A list of balances regarding an account. */
  balances?: Maybe<AccountBalances>;
  /** Last SCT IN transaction */
  lastSctIn?: Maybe<SepaCreditTransferTransaction>;
  /** Last SCT OUT transaction */
  lastSctOut?: Maybe<SepaCreditTransferTransaction>;
};

/** Information about the banking institution */
export type Bank = {
  __typename: 'Bank';
  /** Bank address (We might only be able to fill in the country) */
  address: Address;
  /** Bank BIC code */
  bic: Scalars['BIC']['output'];
  /** Bank Branch Code */
  branch?: Maybe<Scalars['String']['output']>;
  /** Bank name */
  name: Scalars['String']['output'];
  /** Bank local identifier (unique by country) */
  nationalId: Scalars['String']['output'];
};

/**
 * *SOON TO BE DEPRECATED*
 * Beneficiary
 */
export type Beneficiary = {
  /** unique identifier of a beneficiary */
  id?: Maybe<Scalars['ID']['output']>;
  /** `true` if this new beneficiary is the account holder himself in an other financial institution. */
  isMyOwnIban: Scalars['Boolean']['output'];
  /** full name of the beneficiary */
  name: Scalars['String']['output'];
};

export type BindAccountMembershipInput = {
  accountMembershipId: Scalars['ID']['input'];
};

export type BindAccountMembershipPayload = AccountMembershipNotFoundRejection | AccountMembershipNotReadyToBeBoundRejection | BadAccountStatusRejection | BindAccountMembershipSuccessPayload | IdentityAlreadyBindToAccountMembershipRejection | RestrictedToUserRejection | ValidationRejection;

export type BindAccountMembershipSuccessPayload = {
  __typename: 'BindAccountMembershipSuccessPayload';
  accountMembership: AccountMembership;
};

/** Booked transaction status information */
export type BookedTransactionStatusInfo = TransactionStatusInfo & {
  __typename: 'BookedTransactionStatusInfo';
  /** The Date when the transaction is posted to an account on the Swan books. */
  bookingDate: Scalars['DateTime']['output'];
  /** status of the transaction */
  status: TransactionStatus;
  /** The Date when the transaction is considered effective in accounting */
  valueDate: Scalars['DateTime']['output'];
};

/** Business activity. */
export type BusinessActivity =
  | 'AdministrativeServices'
  | 'Agriculture'
  | 'Arts'
  | 'BusinessAndRetail'
  | 'Construction'
  | 'Education'
  | 'ElectricalDistributionAndWaterSupply'
  | 'FinancialAndInsuranceOperations'
  | 'Health'
  | 'Housekeeping'
  | 'InformationAndCommunication'
  | 'LodgingAndFoodServices'
  | 'ManufacturingAndMining'
  | 'Other'
  | 'PublicAdministration'
  | 'RealEstate'
  | 'ScientificActivities'
  | 'Transportation';

/** Inputs to cancel a card */
export type CancelCardInput = {
  /** Unique identifier of a card */
  cardId: Scalars['ID']['input'];
};

export type CancelCardPayload = AccountMembershipNotAllowedRejection | CancelCardSuccessPayload | CardNotFoundRejection | ForbiddenRejection | ValidationRejection;

export type CancelCardSuccessPayload = {
  __typename: 'CancelCardSuccessPayload';
  /** The canceled card  */
  card: Card;
};

/** Input of the `cancelConsent` mutation */
export type CancelConsentInput = {
  consentId: Scalars['ID']['input'];
};

/** Payload of the `cancelConsent` mutation */
export type CancelConsentPayload = CancelConsentSuccessPayload | ConsentNotFoundRejection | NotReachableConsentStatusRejection;

/** Success payload of the `cancelConsent` mutation */
export type CancelConsentSuccessPayload = {
  __typename: 'CancelConsentSuccessPayload';
  consent: Consent;
};

/** Inputs to cancel a digital card */
export type CancelDigitalCardInput = {
  /** Unique identifier of a digital card */
  digitalCardId: Scalars['ID']['input'];
};

export type CancelDigitalCardPayload = AccountMembershipNotAllowedRejection | CancelDigitalCardSuccessPayload | CardNotFoundRejection | DigitalCardNotFoundRejection | ForbiddenRejection | ValidationRejection;

export type CancelDigitalCardSuccessPayload = {
  __typename: 'CancelDigitalCardSuccessPayload';
  /** The canceled digital card */
  digitalCard: DigitalCard;
};

/** Cancel Funding Source Input */
export type CancelFundingSourceInput = {
  /** ID of the funding source to cancel */
  id: Scalars['ID']['input'];
};

/** Cancel Funding Source Payload */
export type CancelFundingSourcePayload = CancelFundingSourceSuccessPayload | ForbiddenRejection | NotFoundRejection;

/** Cancel Funding Source Success Payload */
export type CancelFundingSourceSuccessPayload = {
  __typename: 'CancelFundingSourceSuccessPayload';
  /** Canceled Funding Source */
  fundingSource?: Maybe<FundingSource>;
};

/** Inputs to cancel a physical card */
export type CancelPhysicalCardInput = {
  /** Unique identifier of a card */
  cardId: Scalars['ID']['input'];
  /** Reason why the physical card is canceled */
  reason: CancelPhysicalCardReason;
};

export type CancelPhysicalCardPayload = AccountMembershipNotAllowedRejection | CancelPhysicalCardSuccessPayload | CardNotFoundRejection | ForbiddenRejection | PhysicalCardNotFoundRejection | ValidationRejection;

/** reason why the physical card is canceled */
export type CancelPhysicalCardReason =
  /** When the card holder wants to block his card */
  | 'Blocked'
  /** When the card doesn't work anymore */
  | 'Defected'
  /** When the card has been stolen */
  | 'Lost'
  /** When the card holder never received the card */
  | 'NonReceived'
  /** When the card has been stolen */
  | 'Stolen';

export type CancelPhysicalCardSuccessPayload = {
  __typename: 'CancelPhysicalCardSuccessPayload';
  /** The canceled physical card  */
  physicalCard: PhysicalCard;
};

export type CancelStandingOrderInput = {
  standingOrderId: Scalars['String']['input'];
};

export type CancelStandingOrderPayload = CancelStandingOrderSuccessPayload | ForbiddenRejection | InternalErrorRejection | StandingOrderNotFoundRejection;

export type CancelStandingOrderSuccessPayload = {
  __typename: 'CancelStandingOrderSuccessPayload';
  standingOrder: StandingOrder;
};

/** Cancel transaction */
export type CancelTransactionInput = {
  /** transaction ID to cancel */
  transactionId: Scalars['ID']['input'];
};

export type CancelTransactionPayload = CancelTransactionSuccessPayload | ForbiddenRejection;

export type CancelTransactionSuccessPayload = {
  __typename: 'CancelTransactionSuccessPayload';
  message: Scalars['String']['output'];
};

export type CancelVirtualIbanEntryInput = {
  virtualIbanEntryId: Scalars['ID']['input'];
};

export type CancelVirtualIbanEntryPayload = AccountNotFoundRejection | BadAccountStatusRejection | CancelVirtualIbanEntrySuccessPayload | InternalErrorRejection | ValidationRejection;

export type CancelVirtualIbanEntrySuccessPayload = {
  __typename: 'CancelVirtualIbanEntrySuccessPayload';
  virtualIbanEntry: VirtualIbanEntry;
};

/** Funding Source Canceled Reason */
export type CanceledFundingSourceReason =
  /** Underlying mandate has been canceled */
  | 'MandateCanceled'
  /** Underlying mandate has expired */
  | 'MandateExpired'
  /** User has canceled his funding source */
  | 'UserCanceled';

/** Funding Source Canceled status information */
export type CanceledFundingSourceStatusInfo = FundingSourceStatusInfo & {
  __typename: 'CanceledFundingSourceStatusInfo';
  /** Date at which the funding source was canceled */
  canceledAt: Scalars['Date']['output'];
  /** Date at which the funding source was enabled */
  enabledAt?: Maybe<Scalars['Date']['output']>;
  /** Reason code of the cancellation */
  reasonCode: CanceledFundingSourceReason;
  /** Funding Source Canceled status */
  status: FundingSourceStatus;
};

/** Describes an identification level for the process associated to this identification that has been cancelled by the end-user */
export type CanceledIdentificationLevelStatusInfo = {
  __typename: 'CanceledIdentificationLevelStatusInfo';
  /** Always set to `Cancelled` */
  status: SwanIdentificationStatus;
};

export type CanceledMerchantPaymentLinkStatusInfo = MerchantPaymentLinkStatusInfo & {
  __typename: 'CanceledMerchantPaymentLinkStatusInfo';
  /** The date at which the customer canceled the payment. */
  canceledAt: Scalars['DateTime']['output'];
  status: MerchantPaymentLinkStatus;
};

/** CanceledMerchantPaymentMethodStatusInfo */
export type CanceledMerchantPaymentMethodStatusInfo = MerchantPaymentMethodStatusInfo & {
  __typename: 'CanceledMerchantPaymentMethodStatusInfo';
  /** Merchant Payment Method canceled date */
  canceledAt: Scalars['Date']['output'];
  status: MerchantPaymentMethodStatus;
};

/** CanceledMerchantProfileStatusInfo */
export type CanceledMerchantProfileStatusInfo = MerchantProfileStatusInfo & {
  __typename: 'CanceledMerchantProfileStatusInfo';
  canceledAt: Scalars['Date']['output'];
  enabledAt?: Maybe<Scalars['Date']['output']>;
  status: MerchantProfileStatus;
};

/** Canceled transaction status information */
export type CanceledTransactionStatusInfo = TransactionStatusInfo & {
  __typename: 'CanceledTransactionStatusInfo';
  /** The date when the transaction was canceled */
  canceledDate?: Maybe<Scalars['DateTime']['output']>;
  /** status of the transaction */
  status: TransactionStatus;
};

/** Rejection returned when the Physical Card cannot be activated */
export type CannotActivatePhysicalCardRejection = Rejection & {
  __typename: 'CannotActivatePhysicalCardRejection';
  identifier: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Capital deposit case for a company. */
export type CapitalDepositCase = {
  __typename: 'CapitalDepositCase';
  /** Unique identifier of the company account. */
  companyAccountId?: Maybe<Scalars['String']['output']>;
  /** Name of the company. */
  companyName: Scalars['String']['output'];
  /** Onboarding information of the company. */
  companyOnboarding?: Maybe<Onboarding>;
  /** Created date */
  createdAt: Scalars['DateTime']['output'];
  /** Documents to provide to fulfill the capital deposit case. */
  documents: Array<CapitalDepositDocument>;
  /** Unique identifier of a capital deposit case. */
  id: Scalars['String']['output'];
  /** List of the company’s shareholders. */
  shareholders: Array<Shareholder>;
  /** Status of the capital deposit case. */
  status: CapitalDepositCaseStatus;
  /** Amount of the capital deposit. */
  totalCapitalDepositAmount: Amount;
  /** Updated date */
  updatedAt: Scalars['DateTime']['output'];
};

/** Implements the Relay Connection interface, used to paginate list of elements ([Learn More](https://docs.swan.io/api/pagination)) */
export type CapitalDepositCaseConnection = Connection & {
  __typename: 'CapitalDepositCaseConnection';
  /** CapitalDepositCaseEdge list */
  edges: Array<CapitalDepositCaseEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of elements in the list */
  totalCount: Scalars['Int']['output'];
};

/** Implements the Relay Edge interface */
export type CapitalDepositCaseEdge = Edge & {
  __typename: 'CapitalDepositCaseEdge';
  /** Opaque identifier pointing to this capital deposit case node in the pagination mechanism */
  cursor: Scalars['String']['output'];
  /** The CapitalDepositCase */
  node: CapitalDepositCase;
};

/** Filters that can be applied when listing capital deposit cases */
export type CapitalDepositCaseFiltersInput = {
  /** Searches company shareholder name, individual shareholder first name, last name, and id */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Status we want to filter on */
  status?: InputMaybe<Array<CapitalDepositCaseStatus>>;
};

/** Field we can use when ordering that can be applied when listing capital deposit cases */
export type CapitalDepositCaseOrderByFieldInput =
  | 'createdAt'
  | 'id'
  | 'updatedAt';

/** Order that can be applied when listing capital deposit cases */
export type CapitalDepositCaseOrderByInput = {
  direction?: InputMaybe<OrderByDirection>;
  field?: InputMaybe<CapitalDepositCaseOrderByFieldInput>;
};

/** Status of a capital deposit case. */
export type CapitalDepositCaseStatus =
  /** The capital deposit case is completed. */
  | 'Completed'
  /** Technical state when the mutation to create a new capital deposit case is called. */
  | 'Initiated'
  /** Swan is waiting for the notary to wire the share capital on the account of the company being registered. */
  | 'WaitingForNotaryTransfer'
  /** Swan is waiting for you to provide the Register Extract. */
  | 'WaitingForRegisterExtract'
  /** A new capital deposit case is created and Swan is waiting for the required information to be provided and each shareholder to wire their share of share capital. */
  | 'WaitingForRequirements'
  /** Swan is waiting for the notary to provide the Share Deposit Certificate. */
  | 'WaitingForShareDepositCertificate';

/** Document provided for a capital deposit case. */
export type CapitalDepositDocument = {
  __typename: 'CapitalDepositDocument';
  /** Created date */
  createdAt: Scalars['DateTime']['output'];
  /** Url to download the document, null if it has not already been uploaded. */
  downloadUrl?: Maybe<Scalars['String']['output']>;
  /** Unique identifier of a document. */
  id: Scalars['String']['output'];
  /** Information about capital deposit case. */
  relatedCapitalDepositCase?: Maybe<CapitalDepositCase>;
  /** Information about shareholder. */
  relatedShareholder?: Maybe<Shareholder>;
  /** Status of the document. */
  status: CapitalDepositDocumentStatus;
  /** Type of the document. */
  type: CapitalDepositDocumentType;
  /** Updated date */
  updatedAt: Scalars['DateTime']['output'];
  /** Date when the last version of the document has been uploaded. */
  uploadedAt?: Maybe<Scalars['Date']['output']>;
};

/** Rejection returned if the document from a capital deposit case cannot be uploaded in its context */
export type CapitalDepositDocumentCanNotBeUploaded = Rejection & {
  __typename: 'CapitalDepositDocumentCanNotBeUploaded';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Status of the Capital Deposit Case */
export type CapitalDepositDocumentStatus =
  /** Document is not uploaded yet. */
  | 'Pending'
  /** Document has been refused by Swan, it must be uploaded again. */
  | 'Refused'
  /** Document has been uploaded but not verified by Swan yet. */
  | 'Uploaded'
  /** Document has been uploaded and verified by Swan. */
  | 'Validated';

/** Type of the document. */
export type CapitalDepositDocumentType =
  /** Legal document required for company’s formation. */
  | 'ArticlesOfIncorporation'
  /** Created by the Notary, it certifies the capital of the company to have been deposited with the appropriate share for each shareholder. */
  | 'CapitalShareDepositCertificate'
  /** Lease agreement in the name of the business or Proof of Individual Address if the company is hosted by one of the legal representative. */
  | 'CompanyLeaseAgreement'
  /** Document submitted to your tax bureau at the end of the last business period. */
  | 'CorporateIncomeTaxReturn'
  /** Signed power of attorney document to give the power to act on behalf. */
  | 'PowerOfAttorney'
  /** Can be either passport, national id card or resident permit. */
  | 'ProofOfIdentity'
  /** Can be a utility bill (water, electricity or gas), a telephone bill or a rental receipt. The document must have been issued within the last 3 months. */
  | 'ProofOfIndividualAddress'
  /** Commercial registry extract issued within the last 3 months. */
  | 'RegisterExtract';

/** Card */
export type Card = {
  __typename: 'Card';
  /** Account membership to define the card holder and the account linked to the card. */
  accountMembership: AccountMembership;
  /** Card expiration date  if `null` it does not have an expiration date */
  cardContractExpiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** URL of the card design */
  cardDesignUrl: Scalars['String']['output'];
  /** Masked Card Number */
  cardMaskedNumber: Scalars['String']['output'];
  /** Card product */
  cardProduct: CardProduct;
  /** URL of the card with masked card information (like its number) and with full card information if connected user consented beforehand */
  cardUrl: Scalars['String']['output'];
  /** Created date */
  createdAt: Scalars['DateTime']['output'];
  /** Digital Cards linked to this card */
  digitalCards: DigitalCardConnection;
  /** `true` if this card allows transactions at eCommerce sites */
  eCommerce: Scalars['Boolean']['output'];
  /** Card expiry date with MM/YY format */
  expiryDate?: Maybe<Scalars['String']['output']>;
  /** Unique identifier of a card */
  id: Scalars['ID']['output'];
  /** `true` if this card allows payments outside of the country */
  international: Scalars['Boolean']['output'];
  /** Issuing Country */
  issuingCountry: Scalars['CCA3']['output'];
  /** Main Currency */
  mainCurrency: Scalars['Currency']['output'];
  /** Card name */
  name?: Maybe<Scalars['String']['output']>;
  /** `true` if this card allows transactions outside of the card's main currency */
  nonMainCurrencyTransactions: Scalars['Boolean']['output'];
  /** Physical card if the card holder has ordered one */
  physicalCard?: Maybe<PhysicalCard>;
  /** Periodic Spending */
  spending?: Maybe<Spending>;
  /** Periodic Spending limit list */
  spendingLimits?: Maybe<Array<SpendingLimit>>;
  /** Card status information */
  statusInfo: CardStatusInfo;
  /** List of transactions of a card. */
  transactions?: Maybe<TransactionConnection>;
  /** Type of a card */
  type: CardType;
  /** Updated date */
  updatedAt: Scalars['DateTime']['output'];
  /** `true` if this card allows cash withdrawals */
  withdrawal: Scalars['Boolean']['output'];
};


/** Card */
export type CardDigitalCardsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<DigitalCardFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<DigitalCardOrderByInput>;
};


/** Card */
export type CardTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<TransactionsFiltersInput>;
  first?: Scalars['Int']['input'];
};

export type CardAuthorizationOutcome =
  | 'Accepted'
  | 'AccountClosed'
  | 'AccountSuspended'
  | 'AtmWithdrawalAmountLimitExceeded'
  | 'AtmWithdrawalNumberLimitExceeded'
  | 'AuthorizationConsumed'
  | 'AuthorizationUpdated'
  | 'AuthorizationValidityExceeded'
  | 'CardCanceled'
  | 'CardExpired'
  | 'CardLost'
  | 'CardNotProvidedToCardholderOrClosed'
  | 'CardNumberInvalid'
  | 'CardOpposedCardStolen'
  | 'CardOutOfOrder'
  | 'CardTemporarilyLocked'
  | 'CardUnknown'
  | 'CardholderCancelation'
  | 'DoNotHonor'
  | 'IncorrectPinCodeAttemptsExceeded'
  | 'InsufficientFunds'
  | 'MerchantInvalid'
  | 'MerchantShouldResubmitAuthorization'
  | 'MiscellaneousReason'
  | 'OriginalTransactionNotFound'
  | 'PartialApproval'
  | 'PartialCancelation'
  | 'PeriodAmountLimitExceeded'
  | 'PeriodNumberTransactionLimitExceeded'
  | 'PinCodeInvalid'
  | 'PinCodeValidationImpossible'
  | 'SpendingLimitsReached'
  | 'TechnicalError'
  | 'TransactionAmountLimitExceeded'
  | 'TransactionCurrencyIncorrect'
  | 'TransactionInvalid'
  | 'TransactionNotAuthorizedForCardholder'
  | 'TransactionNotAuthorizedForPointOfSale'
  | 'eMoneyAccount'
  | 'eMoneyAccountLimitExceeded';

export type CardAuthorizationType =
  | 'Classic'
  | 'DataRequest'
  | 'PreAuthorization';

/** Rejection returned if the card could not be digitalized */
export type CardCanNotBeDigitalizedRejection = Rejection & {
  __typename: 'CardCanNotBeDigitalizedRejection';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Card Canceled Status Information */
export type CardCanceledStatusInfo = CardStatusInfo & {
  __typename: 'CardCanceledStatusInfo';
  /** Reason why the card is canceled */
  reason: Scalars['String']['output'];
  /** Card status (always Canceled for type CardCanceledStatusInfo). */
  status: CardStatus;
};

/** Card Canceling Status Information */
export type CardCancelingStatusInfo = CardStatusInfo & {
  __typename: 'CardCancelingStatusInfo';
  /** Reason why the card is about to be canceled. */
  reason: Scalars['String']['output'];
  /** Card status (always Canceling for type CardCancelingStatusInfo). */
  status: CardStatus;
};

export type CardConfidential = {
  __typename: 'CardConfidential';
  /** Card verification value */
  cvv: Scalars['String']['output'];
  /** Expiration date */
  expiryDate: Scalars['String']['output'];
  /** Card number */
  pan: Scalars['String']['output'];
};

export type CardConfigInput = {
  /** Unique identifier of a given account membership */
  accountMembershipId: Scalars['ID']['input'];
  /** Card expiration date  if `null` it does not have an expiration date */
  cardContractExpiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** `true` if this card allows transactions at eCommerce sites */
  eCommerce: Scalars['Boolean']['input'];
  /** `true` if this card allows payments outside of the country */
  international: Scalars['Boolean']['input'];
  /** Card name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** `true` if this card allows transactions outside of the card's main currency */
  nonMainCurrencyTransactions: Scalars['Boolean']['input'];
  /** If used a physical card will be printed and sent to the given address */
  physicalCard?: InputMaybe<PhysicalCardConfigInput>;
  /** Spending limit */
  spendingLimit: SpendingLimitInput;
  /** `true` if this card allows cash withdrawals */
  withdrawal: Scalars['Boolean']['input'];
};

export type CardConfigWithGroupDeliveryInput = {
  /** Unique identifier of a given account membership */
  accountMembershipId: Scalars['ID']['input'];
  /** Card expiration date  if `null` it does not have an expiration date */
  cardContractExpiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** `true` if this card allows transactions at eCommerce sites */
  eCommerce: Scalars['Boolean']['input'];
  /** `true` if this card allows payments outside of the country */
  international: Scalars['Boolean']['input'];
  /** Card name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** `true` if this card allows transactions outside of the card's main currency */
  nonMainCurrencyTransactions: Scalars['Boolean']['input'];
  /** Custom options to use for physical cards. */
  physicalCardCustomOptions?: InputMaybe<PhysicalCardCustomOptionsForGroupDeliveryInput>;
  /** `true` when you wish for print an associated physical card */
  printPhysicalCard: Scalars['Boolean']['input'];
  /** Spending limit */
  spendingLimit: SpendingLimitInput;
  /** `true` if this card allows cash withdrawals */
  withdrawal: Scalars['Boolean']['input'];
};

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type CardConnection = Connection & {
  __typename: 'CardConnection';
  /** CardEdge list */
  edges: Array<CardEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars['Int']['output'];
};

/** when the user has to consent to add this card */
export type CardConsentPendingStatusInfo = CardStatusInfo & {
  __typename: 'CardConsentPendingStatusInfo';
  /** The consent required to add this card */
  consent: Consent;
  /** Card status (always ConsentPending for type CardConsentPendingStatusInfo) */
  status: CardStatus;
};

export type CardDesignBackground = {
  __typename: 'CardDesignBackground';
  /** Card design background url */
  cardBackgroundUrl: Scalars['String']['output'];
  /** Card design background text color */
  cardTextColor: Scalars['String']['output'];
  /** Created date */
  createdAt: Scalars['DateTime']['output'];
  /** Unique identifier of a project card design background */
  id: Scalars['ID']['output'];
  /** Card design background name */
  name: Scalars['String']['output'];
  /** Card design background type */
  type: Scalars['String']['output'];
  /** Updated date */
  updatedAt: Scalars['DateTime']['output'];
};

/** Project Card Design Background Type */
export type CardDesignBackgroundType =
  /** when Card design background is black */
  | 'Black'
  /** when Card design background is customized */
  | 'Custom'
  /** when Card design background is light */
  | 'Silver';

/** Card designs Status */
export type CardDesignStatus =
  /** when card design are Disabled */
  | 'Disabled'
  /** when card design are in Draft */
  | 'Draft'
  /** when card design are Enabled */
  | 'Enabled'
  /** when card design are ToReview */
  | 'ToReview';

/** Implements the Relay Edge interface */
export type CardEdge = Edge & {
  __typename: 'CardEdge';
  /** Opaque identifier pointing to this node in the pagination mechanism */
  cursor: Scalars['String']['output'];
  /** The Card entry */
  node: Card;
};

/** Card Enabled Status Information */
export type CardEnabledStatusInfo = CardStatusInfo & {
  __typename: 'CardEnabledStatusInfo';
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
  accountId?: InputMaybe<Scalars['String']['input']>;
  /** String searched */
  search?: InputMaybe<Scalars['String']['input']>;
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

export type CardMerchantPaymentMethod = MerchantPaymentMethod & {
  __typename: 'CardMerchantPaymentMethod';
  /** Unique identifier tied to every version of a given Merchant Payment Method */
  id: Scalars['ID']['output'];
  /** Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type */
  methodId: Scalars['ID']['output'];
  /** Rolling Reserve applied to the Merchant Payment Method */
  rollingReserve?: Maybe<RollingReserve>;
  /** Status of the Merchant Payment Method */
  statusInfo: MerchantPaymentMethodStatusInfo;
  /** The Merchant Payment Method Type */
  type: MerchantPaymentMethodType;
  /** Date at which the Merchant Payment Method was last updated */
  updatedAt: Scalars['Date']['output'];
  /** Version of the Merchant Payment Method */
  version: Scalars['Int']['output'];
};

/** Rejection returned if the card was not found or if the user does not have the rights to know that the account exists */
export type CardNotFoundRejection = Rejection & {
  __typename: 'CardNotFoundRejection';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Field we can use when ordering that can be applied when listing cards */
export type CardOrderByFieldInput =
  | 'createdAt'
  | 'id'
  | 'updatedAt';

/** Order that can be applied when listing cards */
export type CardOrderByInput = {
  direction?: InputMaybe<OrderByDirection>;
  field?: InputMaybe<CardOrderByFieldInput>;
};

/** input for Card payment method */
export type CardPaymentMethodInput = {
  /** If true, the Payment Method will be in Pending Review */
  activate?: InputMaybe<Scalars['Boolean']['input']>;
};

/** when the card is in the process of being ready to use */
export type CardProcessingStatusInfo = CardStatusInfo & {
  __typename: 'CardProcessingStatusInfo';
  /** Card status (always Processing for type CardProcessingStatusInfo) */
  status: CardStatus;
};

/** Card Product */
export type CardProduct = {
  __typename: 'CardProduct';
  applicableToPhysicalCards: Scalars['Boolean']['output'];
  cardDesigns: Array<CardProductDesign>;
  companySpendingLimit: SpendingLimit;
  createdAt: Scalars['DateTime']['output'];
  defaultCardProduct: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  individualSpendingLimit: SpendingLimit;
  name?: Maybe<Scalars['String']['output']>;
  projectId: Scalars['ID']['output'];
  status: CardProductStatus;
  updatedAt: Scalars['DateTime']['output'];
};

/** Card design of a Card Product */
export type CardProductDesign = {
  __typename: 'CardProductDesign';
  /** Accent color */
  accentColor: Scalars['String']['output'];
  /** Card Background of the Card design */
  cardBackground: CardDesignBackground;
  /** Card Design URL */
  cardDesignUrl?: Maybe<Scalars['String']['output']>;
  /** Logo url 300 dpi */
  cardProjectLogo300dpiUrl?: Maybe<Scalars['String']['output']>;
  /** Logo url 300 dpi */
  cardProjectLogo600dpiUrl?: Maybe<Scalars['String']['output']>;
  /** Logo url svg */
  cardProjectLogoSvgUrl?: Maybe<Scalars['String']['output']>;
  /** Created date */
  createdAt: Scalars['DateTime']['output'];
  /** Unique identifier of a card design */
  id: Scalars['ID']['output'];
  /** Status of the card design */
  status: CardDesignStatus;
  /** Updated date */
  updatedAt: Scalars['DateTime']['output'];
  /** Design version */
  version: Scalars['Int']['output'];
  /** Zoom level */
  zoomRatioProjectLogo?: Maybe<Scalars['Int']['output']>;
};

/** Rejection returned if the card product is disabled. */
export type CardProductDisabledRejection = Rejection & {
  __typename: 'CardProductDisabledRejection';
  message: Scalars['String']['output'];
};

/** Rejection returned if the card product is not applicable to physical card. */
export type CardProductNotApplicableToPhysicalCardsRejection = Rejection & {
  __typename: 'CardProductNotApplicableToPhysicalCardsRejection';
  message: Scalars['String']['output'];
};

export type CardProductNotFoundRejection = Rejection & {
  __typename: 'CardProductNotFoundRejection';
  message: Scalars['String']['output'];
};

/** Card Product Status */
export type CardProductStatus =
  /** When card product is suspended */
  | 'Disabled'
  /** When card product is Enabled */
  | 'Enabled'
  /** When card product is waiting for review */
  | 'PendingReview'
  /** When card product is suspended */
  | 'Suspended';

/** Rejection returned if the card product is suspended. */
export type CardProductSuspendedRejection = Rejection & {
  __typename: 'CardProductSuspendedRejection';
  message: Scalars['String']['output'];
};

export type CardProductUsedRejection = Rejection & {
  __typename: 'CardProductUsedRejection';
  message: Scalars['String']['output'];
};

/** Card settings for a Project */
export type CardSettings = {
  __typename: 'CardSettings';
  /** Accent color */
  accentColor: Scalars['String']['output'];
  /**
   * Flag used to indicate if ApplePay is activated for the project
   * @deprecated Field no longer supported
   */
  allowsApplePay: Scalars['Boolean']['output'];
  /** Card Background of the Card Settings */
  cardBackground: CardSettingsBackground;
  /** Card Design URL */
  cardDesignUrl?: Maybe<Scalars['String']['output']>;
  /** Logo url 300 dpi */
  cardProjectLogo300dpiUrl?: Maybe<Scalars['String']['output']>;
  /** Logo url 300 dpi */
  cardProjectLogo600dpiUrl?: Maybe<Scalars['String']['output']>;
  /** Logo url svg */
  cardProjectLogoSvgUrl?: Maybe<Scalars['String']['output']>;
  /** Created date */
  createdAt: Scalars['DateTime']['output'];
  /** Unique identifier of a project card settings */
  id: Scalars['ID']['output'];
  /** Status of the card settings */
  status: ProjectCardStatus;
  /** Updated date */
  updatedAt: Scalars['DateTime']['output'];
  /** Settings version */
  version: Scalars['Int']['output'];
  /** Zoom level */
  zoomRatioProjectLogo?: Maybe<Scalars['Int']['output']>;
};

export type CardSettingsBackground = {
  __typename: 'CardSettingsBackground';
  /** Card settings background url */
  cardBackgroundUrl: Scalars['String']['output'];
  /** Card settings background text color */
  cardTextColor: Scalars['String']['output'];
  /** Created date */
  createdAt: Scalars['DateTime']['output'];
  /** Unique identifier of a project card settings */
  id: Scalars['ID']['output'];
  /** Card settings background name */
  name: Scalars['String']['output'];
  /** Card settings background type */
  type: Scalars['String']['output'];
  /** Updated date */
  updatedAt: Scalars['DateTime']['output'];
};

/** Card Settings Background Type */
export type CardSettingsBackgroundType =
  /** when Card background is black */
  | 'Black'
  /** when Card background is customized */
  | 'Custom'
  /** when Card background is light */
  | 'Silver';

/** Card Status */
export type CardStatus =
  /** when the card is canceled */
  | 'Canceled'
  /** when the card is about to be canceled */
  | 'Canceling'
  /** when the consent to add this card is pending */
  | 'ConsentPending'
  /** when the card is enabled */
  | 'Enabled'
  /** when the card is in the process of being ready to use */
  | 'Processing';

/** Card Status Information */
export type CardStatusInfo = {
  /** Status of the card. */
  status: CardStatus;
};

/** Card transaction */
export type CardTransaction = Transaction & {
  __typename: 'CardTransaction';
  /** matching account for the transaction */
  account?: Maybe<Account>;
  /** amount */
  amount: Amount;
  /**
   * type of the authorization.
   * Only available for:
   * - authorization transaction
   * - debit transaction linked to a previous authorization transaction
   */
  authorizationType?: Maybe<AuthorizationType>;
  /** booked balance after this transaction */
  bookedBalanceAfter?: Maybe<Amount>;
  /** card used for this transaction */
  card: Card;
  /** unique identifier of the card */
  cardId: Scalars['String']['output'];
  /** category of the payment flow */
  category: Category;
  /** name of the counterparty. e.g Merchant name, Creditor name, Beneficiary Name ... */
  counterparty: Scalars['String']['output'];
  /** created date */
  createdAt: Scalars['DateTime']['output'];
  /** currency exchange if any */
  currencyExchange: Array<ReportExchangeRate>;
  /** a date that reflects the execution date of a transaction from a user viewpoint. Can be used for sorting transactions. */
  executionDate: Scalars['DateTime']['output'];
  /**
   * an arbitrary identifier that was defined by you when you created this transaction.
   *
   * For example, you can define it in the CreditTransferInput mutation.
   */
  externalReference?: Maybe<Scalars['String']['output']>;
  /** unique identifier of the transaction */
  id: Scalars['ID']['output'];
  /** label */
  label: Scalars['String']['output'];
  /** card numbers masked (Primary Account Number) */
  maskedPan: Scalars['String']['output'];
  /** merchant category code (MCC) */
  merchantCategoryCode: Scalars['String']['output'];
  /**
   * merchant category description
   * Enum that explains what the MCC corresponds to in a more readable way
   */
  merchantCategoryDescription: MerchantCategoryDescription;
  /** merchant city */
  merchantCity: Scalars['String']['output'];
  /** merchant country */
  merchantCountry?: Maybe<Scalars['CCA3']['output']>;
  /** unique identifier of the merchant */
  merchantId: Scalars['String']['output'];
  /** merchant name */
  merchantName: Scalars['String']['output'];
  /** merchant postal code */
  merchantPostalCode?: Maybe<Scalars['String']['output']>;
  /** origin transaction associated to this transaction */
  originTransaction?: Maybe<Transaction>;
  /** ID of the origin transaction associated to this transaction */
  originTransactionId?: Maybe<Scalars['String']['output']>;
  /** original amount and currency of the transaction */
  originalAmount: Amount;
  /** payment associated to this transaction */
  payment?: Maybe<Payment>;
  /** ID of the payment associated to this transaction */
  paymentId?: Maybe<Scalars['String']['output']>;
  /** payment method identifier used for this transaction. e.g masked PAN or IBAN or accountNumber */
  paymentMethodIdentifier: Scalars['String']['output'];
  /** payment product used for this transaction */
  paymentProduct: PaymentProduct;
  /** external identifier of the transaction */
  reference: Scalars['String']['output'];
  /** a date that reflects the time at which the user asked the transaction to be executed */
  requestedExecutionAt?: Maybe<Scalars['DateTime']['output']>;
  /** side (Credit or Debit) */
  side: TransactionSide;
  /** status information */
  statusInfo: TransactionStatusInfo;
  /** unique identifier of the terminal */
  terminalId: Scalars['String']['output'];
  /** type */
  type: TransactionTypeEnum;
  /** updated date */
  updatedAt: Scalars['DateTime']['output'];
};

export type CardTransactionCategory =
  | 'InStore'
  | 'Other'
  | 'Withdrawal'
  | 'eCommerce'
  | 'eCommerceWith3DS';

/** Card Type */
export type CardType =
  /** When card is Single Use Virtual */
  | 'SingleUseVirtual'
  /** When card is Virtual */
  | 'Virtual'
  /** When card is Virtual and Physical */
  | 'VirtualAndPhysical';

/** Rejection returned when the Card is not the expected status */
export type CardWrongStatusRejection = Rejection & {
  __typename: 'CardWrongStatusRejection';
  currentStatus: CardStatus;
  expectedStatus: CardStatus;
  identifier: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Cash account type (Always Current) */
export type CashAccountType =
  | 'CashIncome'
  | 'CashPayment'
  | 'CashTrading'
  | 'Charges'
  | 'ClearingParticipantSettlementAccount'
  | 'Commission'
  /** When the account is a current account. */
  | 'Current'
  | 'LimitedLiquiditySavingsAccount'
  | 'Loan'
  | 'MarginalLending'
  | 'MoneyMarket'
  | 'NonResidentExternal'
  | 'OtherAccount'
  | 'OverNightDeposit'
  | 'Overdraft'
  | 'Salary'
  | 'Savings'
  | 'Settlement'
  | 'Tax'
  | 'TransactingAccount';

/** Payment flow available options */
export type Category =
  /** In store payment */
  | 'InStore'
  /** Other payment */
  | 'Other'
  /** Cash withdraw (atm) */
  | 'Withdrawal'
  /** Online (remote) payment */
  | 'eCommerce'
  /** Secured online (remote) payment */
  | 'eCommerceWith3DS';

/** Certificate */
export type Certificate = {
  /**
   * CertificateType
   *
   * Can be either LEAF or INTERMEDIATE
   */
  key: Scalars['String']['input'];
  /** Base64 value of the certificate */
  value: Scalars['String']['input'];
};

/** CheckMerchantPaymentMethod */
export type CheckMerchantPaymentMethod = MerchantPaymentMethod & {
  __typename: 'CheckMerchantPaymentMethod';
  /** Unique identifier tied to every version of a given Merchant Payment Method */
  id: Scalars['ID']['output'];
  /** Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type */
  methodId: Scalars['ID']['output'];
  /**
   * Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type
   * DEPRECATED use the methodId field instead.
   * @deprecated Use methodId instead
   */
  productId: Scalars['ID']['output'];
  /** Rolling Reserve applied to the Merchant Payment Method */
  rollingReserve?: Maybe<RollingReserve>;
  /** Status of the Merchant Payment Method */
  statusInfo: MerchantPaymentMethodStatusInfo;
  /** The Merchant Payment Method Type */
  type: MerchantPaymentMethodType;
  /** Date at which the Merchant Payment Method was last updated */
  updatedAt: Scalars['Date']['output'];
  /** Version of the Merchant Payment Method */
  version: Scalars['Int']['output'];
};

export type CheckPaymentCollectionInput = {
  /**
   * 31-caracter unique identifier located at the bottom of the check.
   * CMC7 is composed of 3 sections (check number (7 char.), check issuing bank code (12 char.), check holder account number (12 char.)).
   * Combined with RLMC key, it  allows the check traceability.
   */
  cmc7: Scalars['String']['input'];
  /** ID of the Merchant profile associated to the Swan creditor account */
  merchantProfileId: Scalars['ID']['input'];
  /**
   * 2-digit key used to check the integrity of the CMC7 line, located at the bottom right of the check.
   * Combined with CMC7 line, it allows the check traceability.
   */
  rlmcKey: Scalars['String']['input'];
};

export type CheckPaymentMethodInput = {
  /** Determine whether the payment method must be activated or not */
  activate?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Check transaction */
export type CheckTransaction = Transaction & {
  __typename: 'CheckTransaction';
  /** matching account for the transaction */
  account?: Maybe<Account>;
  /** amount */
  amount: Amount;
  /** booked balance after this transaction */
  bookedBalanceAfter?: Maybe<Amount>;
  /**
   * 31-caracter unique identifier located at the bottom of the check.
   * CMC7 is composed of 3 sections (check number (7 char.), check issuing bank code (12 char.), check holder account number (12 char.)).
   * Combined with RLMC key, it  allows the check traceability.
   */
  cmc7: Scalars['String']['output'];
  /** name of the counterparty. e.g Merchant name, Creditor name, Beneficiary Name ... */
  counterparty: Scalars['String']['output'];
  /** created date */
  createdAt: Scalars['DateTime']['output'];
  /** a date that reflects the execution date of a transaction from a user viewpoint. Can be used for sorting transactions. */
  executionDate: Scalars['DateTime']['output'];
  /**
   * an arbitrary identifier that was defined by you when you created this transaction.
   *
   * For example, you can define it in the CreditTransferInput mutation.
   */
  externalReference?: Maybe<Scalars['String']['output']>;
  /** unique identifier of the transaction */
  id: Scalars['ID']['output'];
  /** label */
  label: Scalars['String']['output'];
  /** origin transaction associated to this transaction */
  originTransaction?: Maybe<Transaction>;
  /** ID of the origin transaction associated to this transaction */
  originTransactionId?: Maybe<Scalars['String']['output']>;
  /** payment associated to this transaction */
  payment?: Maybe<Payment>;
  /** ID of the payment associated to this transaction */
  paymentId?: Maybe<Scalars['String']['output']>;
  /** payment method identifier used for this transaction: check number */
  paymentMethodIdentifier: Scalars['String']['output'];
  /** payment product used for this transaction */
  paymentProduct: PaymentProduct;
  /** reference assigned by the initiating party, to unambiguously identify the transaction. This reference is passed on, unchanged, throughout the entire end-to-end chain. */
  reference: Scalars['String']['output'];
  /** a date that reflects the time at which the user asked the transaction to be executed */
  requestedExecutionAt?: Maybe<Scalars['DateTime']['output']>;
  /** reserved amount of the transaction computed with the rolling reserve. */
  reservedAmount?: Maybe<Amount>;
  /** date on which reserved funds become available */
  reservedAmountReleasedAt?: Maybe<Scalars['DateTime']['output']>;
  /** return reason */
  returnReason?: Maybe<TransactionReasonCode>;
  /**
   * 2-digit key used to check the integrity of the CMC7 line, located at the bottom right of the check.
   * Combined with CMC7 line, it allows the check traceability.
   */
  rlmcKey: Scalars['String']['output'];
  /** side (Credit or Debit) */
  side: TransactionSide;
  /** status information */
  statusInfo: TransactionStatusInfo;
  /** type */
  type: TransactionTypeEnum;
  /** updated date */
  updatedAt: Scalars['DateTime']['output'];
};

export type CloseAccountInput = {
  accountId: Scalars['ID']['input'];
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
  reason: PartnerCloseAccountReasonInput;
};

export type CloseAccountPayload = AccountNotFoundRejection | BadAccountStatusRejection | CloseAccountSuccessPayload | ForbiddenRejection | InternalErrorRejection | ValidationRejection;

/** Define a reason with a message and a specific type for closing account action */
export type CloseAccountReason = Reason & {
  __typename: 'CloseAccountReason';
  message?: Maybe<Scalars['String']['output']>;
  type: CloseAccountReasonType;
};

/** Specific type for closing account action */
export type CloseAccountReasonType =
  /** Compliance Reason */
  | 'ComplianceReason'
  /** Inactivity */
  | 'Inactivity'
  /** Partner Reason */
  | 'PartnerReason';

/** Union between PartnerCloseAccountReasonType and InternalCloseAccountReason */
export type CloseAccountStatusReason = CloseAccountReason;

export type CloseAccountSuccessPayload = {
  __typename: 'CloseAccountSuccessPayload';
  consent: Consent;
};

/** Data provided following the search for company information by siren number */
export type CompanyInfo = {
  __typename: 'CompanyInfo';
  companyName: Scalars['String']['output'];
  headquarters: Headquarters;
  legalRepresentativePersonalAddress?: Maybe<AddressInformation>;
  siren: Scalars['String']['output'];
  taxIdentificationNumber?: Maybe<Scalars['String']['output']>;
  vatNumber?: Maybe<Scalars['String']['output']>;
};

/** Company shareholder info. */
export type CompanyShareholder = {
  __typename: 'CompanyShareholder';
  /** Company name. */
  name: Scalars['String']['output'];
  /** Whether the shareholder is an individual or a company. */
  type: ShareholderType;
};

/** Type of company. */
export type CompanyType =
  | 'Association'
  | 'Company'
  | 'HomeOwnerAssociation'
  | 'Other'
  | 'SelfEmployed';

/** Complete Address Information */
export type CompleteAddressInput = {
  /** address line 1 (max 38 characters) */
  addressLine1: Scalars['String']['input'];
  /** address line 2 (max 38 characters) */
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  /** city (max 30 characters) */
  city: Scalars['String']['input'];
  /** country code */
  country: Scalars['CCA3']['input'];
  /** postal code (max 10 characters) */
  postalCode: Scalars['String']['input'];
  /** state (max 30 characters) */
  state?: InputMaybe<Scalars['String']['input']>;
};

/** Complete Address Information with a contact */
export type CompleteAddressWithContactInput = {
  /** address line 1 (max 38 characters) */
  addressLine1: Scalars['String']['input'];
  /** address line 2 (max 38 characters) */
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  /** city (max 30 characters) */
  city: Scalars['String']['input'];
  /** contact company name (max 38 characters) */
  companyName?: InputMaybe<Scalars['String']['input']>;
  /** country code */
  country: Scalars['CCA3']['input'];
  /** contact first name */
  firstName: Scalars['String']['input'];
  /** contact last name */
  lastName: Scalars['String']['input'];
  /** contact phone number */
  phoneNumber: Scalars['PhoneNumber']['input'];
  /** postal code (max 10 characters) */
  postalCode: Scalars['String']['input'];
  /** state (max 30 characters) */
  state?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Complete Digital Card used for ApplePay or GooglePay
 *
 * Once the pending phase is over, more data will be available in the response
 */
export type CompleteDigitalCard = DigitalCard & {
  __typename: 'CompleteDigitalCard';
  /**
   * Masked DPAN with the last four digits visible
   *
   * This value is present in the user wallet application
   */
  cardMaskedNumber: Scalars['String']['output'];
  /** Created date */
  createdAt: Scalars['DateTime']['output'];
  /**
   * Device
   * In case of a wallet application, some information about the device will be provided
   */
  device: Device;
  /** Unique identifier of a digital card */
  id: Scalars['ID']['output'];
  /**
   * Digital Card status information
   *
   * In this type the status will be either ConsentPending or Pending
   */
  statusInfo: CompleteDigitalCardStatusInfo;
  /** The type of digitalization that created this digital card. */
  type: DigitalizationType;
  /** Updated date */
  updatedAt: Scalars['DateTime']['output'];
  /**
   * Id of the wallet application.
   * Will not be present for Merchant
   */
  walletId?: Maybe<Scalars['String']['output']>;
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
  | 'Canceled'
  /** when the digital card is enabled */
  | 'Enabled'
  /**
   * when the digital card is suspended
   *
   * the transactions will be blocked
   */
  | 'Suspended';

/** Complete Digital Card Status Information */
export type CompleteDigitalCardStatusInfo = {
  /** Status of the digital card. */
  status: CompleteDigitalCardStatus;
};

export type CompletedMerchantPaymentLinkStatusInfo = MerchantPaymentLinkStatusInfo & {
  __typename: 'CompletedMerchantPaymentLinkStatusInfo';
  /** The time when the customer completed the payment. */
  completedAt: Scalars['DateTime']['output'];
  status: MerchantPaymentLinkStatus;
};

/** Relay Connection type, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type Connection = {
  /** Edge list */
  edges: Array<Edge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars['Int']['output'];
};

/** Some sensitive operation at Swan, such as initiating a payment, require consent */
export type Consent = {
  __typename: 'Consent';
  /** unique hash of the consent */
  challenge?: Maybe<Scalars['String']['output']>;
  /** Redirect the user to this URL to start the consent flow */
  consentUrl: Scalars['String']['output'];
  /** created date */
  createdAt: Scalars['DateTime']['output'];
  /** date when the consent expire */
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  /** unique identifier of the consent */
  id: Scalars['ID']['output'];
  /** purpose of the consent */
  purpose: ConsentPurpose;
  /** When the consent flow is finished the user is redirected to this URL */
  redirectUrl: Scalars['String']['output'];
  /** `true` if the consent requires a Strong Customer Authentication */
  requireSCA: Scalars['Boolean']['output'];
  /** date when the `consentUrl` was request the first time */
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  /** status of the consent */
  status: ConsentStatus;
  /** updated date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** user who initiated the consent */
  user?: Maybe<User>;
  /** userId who initiated the consent */
  userId: Scalars['String']['output'];
};

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type ConsentConnection = Connection & {
  __typename: 'ConsentConnection';
  /** ConsentEdge list */
  edges: Array<ConsentEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars['Int']['output'];
};

/** Implements the Relay Edge interface */
export type ConsentEdge = Edge & {
  __typename: 'ConsentEdge';
  /** Opaque identifier pointing to this consent node in the pagination mechanism */
  cursor: Scalars['String']['output'];
  /** The consent */
  node: Consent;
};

/** Consent ID with related execution order */
export type ConsentIdWithOrder = {
  /** Consent ID */
  consentId: Scalars['String']['input'];
  /** Execution order. Consents are granted in ascending order. Consents with the same order may be granted in parallel. */
  order?: Scalars['Int']['input'];
};

/** Rejection returned if a consent was not found */
export type ConsentNotFoundRejection = Rejection & {
  __typename: 'ConsentNotFoundRejection';
  consentId: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Purpose of a consent */
export type ConsentPurpose =
  /** when accepting the partnership conditions */
  | 'AcceptPartnershipConditions'
  /** when activating a physical card */
  | 'ActivatePhysicalCard'
  /** when inviting a new account membership */
  | 'AddAccountMembership'
  /** when adding several account memberships */
  | 'AddAccountMemberships'
  /** when adding a beneficiary */
  | 'AddBeneficiary'
  /** when adding a virtual card */
  | 'AddCard'
  /** when adding multiple cards */
  | 'AddCards'
  /** when adding a digital card */
  | 'AddDigitalCard'
  /** when adding a payment direct debit mandate */
  | 'AddDirectDebitPaymentMandate'
  /** when closing an account */
  | 'CloseAccount'
  /** when the consent is a multiple consent */
  | 'ConsentToMultipleConsents'
  /** when enabling a mandate */
  | 'EnableMandate'
  /** when initiating a credit transfer */
  | 'InitPayment'
  /** when initiating a funding request */
  | 'InitiateFundingRequest'
  /** when initiating an instant funding request */
  | 'InitiateInstantFundingRequest'
  /** when initiating an international credit transfer */
  | 'InitiateInternationalCreditTransfer'
  /** when requesting to print physical card */
  | 'PrintPhysicalCard'
  /** when resuming an account membership */
  | 'ResumeAccountMembership'
  /** when resuming a physical card */
  | 'ResumePhysicalCard'
  /** when scheduling a standing order */
  | 'ScheduleStandingOrder'
  /** when updating an account membership */
  | 'UpdateAccountMembership'
  /** when updating a card */
  | 'UpdateCard'
  /** when updating a server consent project settings */
  | 'UpdateServerConsentProjectSettings'
  /** when viewing card confidential of a virtual card */
  | 'ViewCardNumbers'
  /** when requesting to view physical card PIN */
  | 'ViewPhysicalCardPin';

/** Status of a consent */
export type ConsentStatus =
  /** when the user accepted */
  | 'Accepted'
  /** when the user or the project decided to cancel the consent */
  | 'Canceled'
  /** when the consent is created */
  | 'Created'
  /** when the user credentials were refused */
  | 'CredentialRefused'
  /** when the user refused */
  | 'CustomerRefused'
  /** when the consent is expired */
  | 'Expired'
  /** when something went wrong */
  | 'Failed'
  /** when the operation is committing */
  | 'OperationCommitting'
  /** when the consentUrl has been requested */
  | 'Started';

export type ConsentTypeNotSupportedByServerConsentRejection = Rejection & {
  __typename: 'ConsentTypeNotSupportedByServerConsentRejection';
  message: Scalars['String']['output'];
};

/** Rejection returned when a the consent is already linked to another multi consent */
export type ConsentsAlreadyLinkedToMultiConsentRejection = Rejection & {
  __typename: 'ConsentsAlreadyLinkedToMultiConsentRejection';
  /** IDs of the consents that are already linked to another multi consent */
  consentIds: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type ConsentsFiltersInput = {
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Rejection returned when all provided consents are not in created status */
export type ConsentsNotAllInCreatedStatusRejection = Rejection & {
  __typename: 'ConsentsNotAllInCreatedStatusRejection';
  /** IDs of the consents that are not in created status */
  consentIds: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

/** Rejection returned when a consent ID passed as input does not exist. */
export type ConsentsNotFoundRejection = Rejection & {
  __typename: 'ConsentsNotFoundRejection';
  ids: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

/** Inputs to create a capital deposit case. */
export type CreateCapitalDepositCaseInput = {
  /** Name ("Dénomination sociale") of the company being registered and for which the capital is being deposited. */
  companyName: Scalars['String']['input'];
  /** Array of shareholders of type company ("personne morale"). */
  companyShareholders: Array<InputMaybe<OnboardCompanyShareholderInput>>;
  /** Array of shareholders of type individual ("personne physique"). */
  individualShareholders: Array<InputMaybe<OnboardIndividualShareholderInput>>;
  /** Information required for the onboarding of a company. */
  onboardingCapitalDepositCompany: OnboardCompanyAccountHolderInput;
  /** Amount of the capital deposit. */
  totalCapitalDepositAmount: AmountInput;
};

export type CreateCapitalDepositCasePayload = BadRequestRejection | CreateCapitalDepositCaseSuccessPayload | ForbiddenRejection | InternalErrorRejection;

export type CreateCapitalDepositCaseSuccessPayload = {
  __typename: 'CreateCapitalDepositCaseSuccessPayload';
  capitalDepositCase: CapitalDepositCase;
};

export type CreateMerchantPaymentLinkInput = {
  /** Amount to be paid to sucessfully complete the payment. */
  amount: AmountInput;
  /** billing address information */
  billingAddress: AddressInput;
  /** URL to redirect the user to if they cancel their payment */
  cancelRedirectUrl: Scalars['URL']['input'];
  /**
   * We will use the information specified here to prefill the payment link fields
   * depending on the payment method the end user chooses.
   * Keep in mind that your end customer will be able to edit these fields.
   */
  customer?: InputMaybe<CustomerInput>;
  /**
   * The date when the payment link expires.
   * If not specified, the default time will be 24 hours
   */
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Any string that you want to be attached to this payment link.
   * Usually something to help you reference the link in an external system.
   */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Label of the concerned payment collection, which will be displayed on Swan bank statement	and on the Swan merchant payment page. */
  label?: InputMaybe<Scalars['String']['input']>;
  /**
   * The language used for the payment page.
   * Default is the browser's language, or English if not available.
   */
  language?: InputMaybe<Language>;
  /** The Merchant Profile to link this Payment Link to */
  merchantProfileId: Scalars['ID']['input'];
  /**
   * List of payment methods enabled for this payment link.
   * If the array is empty, Swan will allow all the payment methods that are enabled for the merchant profile (except for Check and Internal Direct Debit)
   * If you want to make payment possible via SEPA Direct Debit, the list should be populated either by a SEPA Direct Debit CORE or B2B.
   */
  paymentMethodIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Merchant Website URL to redirect the user to when the payment is completed. */
  redirectUrl: Scalars['URL']['input'];
  /**
   * Optional field intended to provide a way for you to include a reference number or code.
   * The customer will most likely see this value on their bank statement, though we can't know as every banking platform is different.
   */
  reference?: InputMaybe<Scalars['String']['input']>;
  /**
   * A date that reflects the time at which the user asked the transaction to be executed.
   * For card transactions, request execution must occur within 7 days after authorization or the authorization may expire.
   * For SEPA Direct Debit transactions, request execution must occur up to 1 year in the future.
   *
   * Default value means that the execution will be as soon as possible
   */
  requestedExecutionAt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Controls if the payment mandate created from this payment link is for one-time use or can be reused
   * This is applicable for card and SEPA Direct Debit payment methods only.
   * If not specified, the default value is OneOff.
   */
  sequence?: InputMaybe<SequenceType>;
};

export type CreateMerchantPaymentLinkPayload = CreateMerchantPaymentLinkSuccessPayload | ForbiddenRejection | InternalErrorRejection | MerchantPaymentMethodNotActiveRejection | MerchantProfileWrongStatusRejection | PaymentMethodNotCompatibleRejection | ValidationRejection;

export type CreateMerchantPaymentLinkSuccessPayload = {
  __typename: 'CreateMerchantPaymentLinkSuccessPayload';
  merchantPaymentLink: MerchantPaymentLink;
};

/** Input of the `createMultiConsent` mutation */
export type CreateMultiConsentInput = {
  /** A list of consent IDs with their related execution orders */
  orderedConsentIds: Array<ConsentIdWithOrder>;
  /** URL the user is redirected to after consent has been given */
  redirectUrl: Scalars['String']['input'];
};

/** Payload of the `createMultiConsent` mutation */
export type CreateMultiConsentPayload = ConsentsAlreadyLinkedToMultiConsentRejection | ConsentsNotAllInCreatedStatusRejection | ConsentsNotFoundRejection | CreateMultiConsentSuccessPayload | TooManyChildConsentsRejection;

/** Success payload of the `createMultiConsent` mutation */
export type CreateMultiConsentSuccessPayload = {
  __typename: 'CreateMultiConsentSuccessPayload';
  consent?: Maybe<Consent>;
};

/** Credit transfer */
export type CreditTransferInput = {
  /** amount of the transfer */
  amount: AmountInput;
  /** if the transfer will credit a beneficiary already created */
  beneficiaryId?: InputMaybe<Scalars['ID']['input']>;
  /** an arbitrary identifier that you can define to easily identify this transaction later */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** label (max 140 characters) */
  label?: InputMaybe<Scalars['String']['input']>;
  /** if the transfer will execute as instant and fallbacked to a regular one if an error happend during the instant transfer */
  mode?: InputMaybe<CreditTransferMode>;
  /** reference assigned by the initiating party, to unambiguously identify the transaction. This reference is passed on, unchanged, throughout the entire end-to-end chain. (regex [A-Za-z0-9(\\-)(\\_)(\\?)(\\.)(\\+),' ]{1,35}) */
  reference?: InputMaybe<Scalars['String']['input']>;
  /** requested date at which the credit transfer will try to be executed, if `null` the credit transfer is executed right away */
  requestedExecutionAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** if the transfer will credit a new SEPA beneficiary */
  sepaBeneficiary?: InputMaybe<SepaBeneficiaryInput>;
  /** if the transfer will credit a new swan account beneficiary */
  swanAccountBeneficiary?: InputMaybe<SwanAccountBeneficiaryInput>;
};

export type CreditTransferMode =
  | 'InstantWithFallback'
  | 'InstantWithoutFallback'
  | 'Regular';

/** Custom information for a CSV statement */
export type CsvStatement = StatementInfo & {
  __typename: 'CsvStatement';
  /** date at which the link will not be useable anymore */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** statement type */
  type?: Maybe<StatementType>;
  /** temporary public url on which the file can be accessed */
  url?: Maybe<Scalars['String']['output']>;
};

export type Customer = {
  __typename: 'Customer';
  /**
   * A customer id present in a third-party system.
   * Alows to link a customer to a payment link and by extension, to a Merchant Payment.
   */
  externalCustomerId?: Maybe<Scalars['String']['output']>;
  iban?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CustomerInput = {
  /**
   * A customer ID present in a third-party system.
   * Alows to link a customer to a payment link and by extension, to a merchant payment.
   */
  externalCustomerId?: InputMaybe<Scalars['String']['input']>;
  /** Customer IBAN */
  iban?: InputMaybe<Scalars['String']['input']>;
  /** Customer name */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type DateField = Field & {
  __typename: 'DateField';
  example?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
  validationRegex?: Maybe<Scalars['String']['output']>;
};

/** Rejection returned when the Debtor is closed */
export type DebtorAccountClosedRejection = Rejection & {
  __typename: 'DebtorAccountClosedRejection';
  message: Scalars['String']['output'];
};

/** Rejection returned when the Debtor does not belong to the same project as the creditor */
export type DebtorAccountNotAllowedRejection = Rejection & {
  __typename: 'DebtorAccountNotAllowedRejection';
  message: Scalars['String']['output'];
};

export type DeleteSupportingDocumentInput = {
  /** Id of the supporting document to delete */
  id: Scalars['ID']['input'];
};

export type DeleteSupportingDocumentPayload = DeleteSupportingDocumentSuccessPayload | ForbiddenRejection | InternalErrorRejection | SupportingDocumentCollectionNotFoundRejection | SupportingDocumentCollectionStatusDoesNotAllowDeletionRejection | SupportingDocumentNotFoundRejection | SupportingDocumentStatusDoesNotAllowDeletionRejection | ValidationRejection;

export type DeleteSupportingDocumentSuccessPayload = {
  __typename: 'DeleteSupportingDocumentSuccessPayload';
  id: Scalars['String']['output'];
};

export type DenySddInput = {
  accountId: Scalars['ID']['input'];
};

export type DenySddPayload = AccountNotFoundRejection | BadAccountStatusRejection | DenySddSuccessPayload | InvalidArgumentRejection | ValidationRejection;

export type DenySddSuccessPayload = {
  __typename: 'DenySddSuccessPayload';
  account: Account;
};

export type DenySddVirtualIbanEntryInput = {
  ibanEntryId: Scalars['ID']['input'];
};

export type DenySddVirtualIbanEntryPayload = BadAccountStatusRejection | DenySddVirtualIbanEntrySuccessPayload | ValidationRejection;

export type DenySddVirtualIbanEntrySuccessPayload = {
  __typename: 'DenySddVirtualIbanEntrySuccessPayload';
  virtualIbanEntry: VirtualIbanEntry;
};

/** Device */
export type Device = {
  __typename: 'Device';
  /** Secure Element ID */
  SEID?: Maybe<Scalars['String']['output']>;
  /**
   * Device name
   * End user defined name of the device on which the card id provided
   */
  name?: Maybe<Scalars['String']['output']>;
  /** The type of device. It can be a Phone, Tablet, Watch */
  type?: Maybe<Scalars['String']['output']>;
};

/** Digital Card used for ApplePay or GooglePay */
export type DigitalCard = {
  /** Created date */
  createdAt: Scalars['DateTime']['output'];
  /** Unique identifier of a digital card */
  id: Scalars['ID']['output'];
  /** The type of digitalization that created this digital card. */
  type: DigitalizationType;
  /** Updated date */
  updatedAt: Scalars['DateTime']['output'];
  /** Wallet Provider (ApplePay, GooglePay ...) */
  walletProvider: WalletProvider;
};

/** Digital Card Canceled Status Information */
export type DigitalCardCanceledStatusInfo = CompleteDigitalCardStatusInfo & {
  __typename: 'DigitalCardCanceledStatusInfo';
  /** Cancel Date */
  canceledAt: Scalars['DateTime']['output'];
  /** Enable Date */
  enabledAt: Scalars['DateTime']['output'];
  /** Card status (always Canceled for type DigitalCardCanceledStatusInfo). */
  status: CompleteDigitalCardStatus;
};

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type DigitalCardConnection = Connection & {
  __typename: 'DigitalCardConnection';
  /** CardEdge list */
  edges: Array<DigitalCardEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars['Int']['output'];
};

/** Digital Card ConsentPending Status Information */
export type DigitalCardConsentPendingStatusInfo = PendingDigitalCardStatusInfo & {
  __typename: 'DigitalCardConsentPendingStatusInfo';
  /** A reference to the consent to validate */
  consent: Consent;
  /** Digital Card status (always ConsentPending for type DigitalCardConsentPendingStatusInfo). */
  status: PendingDigitalCardStatus;
};

/** Digital Card Declined Status Information */
export type DigitalCardDeclinedStatusInfo = PendingDigitalCardStatusInfo & {
  __typename: 'DigitalCardDeclinedStatusInfo';
  /** Digital Card status (always Declined for type DigitalCardDeclinedStatusInfo). */
  status: PendingDigitalCardStatus;
};

/** Implements the Relay Edge interface */
export type DigitalCardEdge = Edge & {
  __typename: 'DigitalCardEdge';
  /** Opaque identifier pointing to this node in the pagination mechanism */
  cursor: Scalars['String']['output'];
  /** The Card entry */
  node: DigitalCard;
};

/** Digital Card Enabled Status Information */
export type DigitalCardEnabledStatusInfo = CompleteDigitalCardStatusInfo & {
  __typename: 'DigitalCardEnabledStatusInfo';
  /** Enable Date */
  enabledAt: Scalars['DateTime']['output'];
  /** Digital Card status (always Enabled for type DigitalCardEnabledStatusInfo). */
  status: CompleteDigitalCardStatus;
};

/** Filters that can be applied when listing digitalCards */
export type DigitalCardFiltersInput = {
  /**
   * The Secure Element ID
   * Mostly present on APple Devices
   */
  SEID?: InputMaybe<Scalars['String']['input']>;
  /** The digital card masker number */
  cardMaskedNumber?: InputMaybe<Scalars['String']['input']>;
  /** The id of the digitalCard */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The status of the digital card. It can be a CompleteDigitalCardStatus or a PendingDigitalCardStatus */
  status?: InputMaybe<Scalars['String']['input']>;
  /** The wallet application ID in the user phone */
  walletId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the wallet provider in the scheme system */
  walletProviderId?: InputMaybe<Scalars['String']['input']>;
  /** Either ApplePay, GooglePay or Merchant */
  walletProviderName?: InputMaybe<Scalars['String']['input']>;
};

/** Rejection returned when the Digital Card does not exist */
export type DigitalCardNotFoundRejection = Rejection & {
  __typename: 'DigitalCardNotFoundRejection';
  identifier: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Field we can use when ordering that can be applied when listing digital cards */
export type DigitalCardOrderByFieldInput =
  | 'createdAt'
  | 'id'
  | 'updatedAt';

/** Order that can be applied when listing digital cards */
export type DigitalCardOrderByInput = {
  direction?: InputMaybe<OrderByDirection>;
  field?: InputMaybe<DigitalCardOrderByFieldInput>;
};

/** Digital Card Pending Status Information */
export type DigitalCardPendingStatusInfo = PendingDigitalCardStatusInfo & {
  __typename: 'DigitalCardPendingStatusInfo';
  /** Digital Card status (always Pending for type DigitalCardPendingStatusInfo). */
  status: PendingDigitalCardStatus;
};

/** Digital Card Suspended Status Information */
export type DigitalCardSuspendedStatusInfo = CompleteDigitalCardStatusInfo & {
  __typename: 'DigitalCardSuspendedStatusInfo';
  /** Enable Date */
  enabledAt: Scalars['DateTime']['output'];
  /** Digital Card status (always Suspended for type DigitalCardSuspendedStatusInfo). */
  status: CompleteDigitalCardStatus;
  /** Suspend Date */
  suspendedAt: Scalars['DateTime']['output'];
};

/** Digitalization Type */
export type DigitalizationType =
  /** This digital card was created based on a PAN stored into a merchant application (ex: iTunes) */
  | 'CardOnFile'
  /** This digital card was created by an in app provisioning */
  | 'InApp'
  /**
   * This digital card was created by direct input of the PAN into a wallet application
   *
   * This direct input can also be done using the device camera
   */
  | 'Manual'
  /** We could not get the source of the digitalization */
  | 'Unknown';

/** Direct Debit Account Verification */
export type DirectDebitAccountVerification = AccountVerification & {
  __typename: 'DirectDebitAccountVerification';
  /** Creation date of the account verification */
  createdAt: Scalars['DateTime']['output'];
  /** IBAN of the account to cross check with account holder information */
  iban: Scalars['IBAN']['output'];
  /** Unique identifier of the Account Verification */
  id: Scalars['ID']['output'];
  /** Account Verification Status Information */
  statusInfo: AccountVerificationStatusInfo;
  /** Last update date of the account verification */
  updatedAt: Scalars['DateTime']['output'];
};

/** Funding Source with Direct Debit Mandate */
export type DirectDebitFundingSource = FundingSource & {
  __typename: 'DirectDebitFundingSource';
  /**
   * Can be queried to check the status of the account verification for this funding source.
   * If the account verification is PendingVerification, you should ask your account holder to wire some money from his external account to any swan account
   */
  accountVerification: DirectDebitAccountVerification;
  /** Created date */
  createdAt: Scalars['DateTime']['output'];
  /**
   * IBAN to use in the direct debit transaction that will be triggered when funding the account.
   * Money will be debited from this IBAN when an `initiateFundingRequest` is done using this funding source
   */
  iban: Scalars['IBAN']['output'];
  /** ID of the Funding Source */
  id: Scalars['ID']['output'];
  /** Name of the Funding Source */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Can be queried to check the status of payment payment Mandate.
   * If the payment mandate is ConsentPending, you should confirm it to enable this funding source
   */
  paymentMandate: PaymentDirectDebitMandate;
  /** Funding Source status information */
  statusInfo: FundingSourceStatusInfo;
  /** Last updated date */
  updatedAt: Scalars['DateTime']['output'];
};

export type DirectDebitSequence =
  | 'OneOff'
  | 'Recurring';

/** Input to disable an account membership */
export type DisableAccountMembershipInput = {
  /** Unique identifier of the account membership to disable */
  accountMembershipId: Scalars['ID']['input'];
};

export type DisableAccountMembershipPayload = AccountMembershipCannotBeDisabledRejection | AccountMembershipNotFoundRejection | DisableAccountMembershipSuccessPayload | ForbiddenRejection | InternalErrorRejection | LegalRepresentativeAccountMembershipCannotBeDisabledRejection | UserNotAllowedToDisableItsOwnAccountMembershipRejection | ValidationRejection;

export type DisableAccountMembershipSuccessPayload = {
  __typename: 'DisableAccountMembershipSuccessPayload';
  accountMembership?: Maybe<AccountMembership>;
};

/** StatusInfo when funding limit settings has been disabled */
export type DisabledFundingLimitSettingsStatusInfo = FundingLimitSettingsStatusInfo & {
  __typename: 'DisabledFundingLimitSettingsStatusInfo';
  reason: Scalars['String']['output'];
  status: FundingLimitSettingsStatus;
};

/** EnabledMerchantPaymentMethodStatusInfo */
export type DisabledMerchantPaymentMethodStatusInfo = MerchantPaymentMethodStatusInfo & {
  __typename: 'DisabledMerchantPaymentMethodStatusInfo';
  /** Merchant Payment Method disabled date */
  disabledAt: Scalars['Date']['output'];
  status: MerchantPaymentMethodStatus;
};

/** Retrieved document extracted from the identity verification */
export type DocumentFile = {
  downloadUrl: Scalars['String']['output'];
};

/** From which side the document picture was taken */
export type DocumentFileSide =
  | 'BothSides'
  | 'SideA'
  | 'SideB'
  | 'Unknown';

/** The type of the document */
export type DocumentType =
  | 'DriversLicense'
  | 'Face'
  | 'IdCard'
  | 'Passport'
  | 'Report'
  | 'ResidencePermit';

/** The document corresponding to a driver's license */
export type DriversLicenseDocument = {
  __typename: 'DriversLicenseDocument';
  /** List of the associated files */
  files: Array<DriversLicenseDocumentFile>;
  /** Unique identifier of the driver's license document */
  id: Scalars['String']['output'];
  /** The type of the document */
  type: DocumentType;
};

/** The file associated to the driver's license document */
export type DriversLicenseDocumentFile = DocumentFile & {
  __typename: 'DriversLicenseDocumentFile';
  /** The file's temporary download url */
  downloadUrl: Scalars['String']['output'];
  /** From which side the deiver's license's picture was taken */
  side: DocumentFileSide;
};

/**
 * Edge type containing the node and cursor. The node is not defined in the interface because generic is not supported by GraphQL
 * but all implementation contains its own node property according to the paginated type.
 */
export type Edge = {
  /** Opaque identifier pointing to this node in the pagination mechanism */
  cursor: Scalars['String']['output'];
};

/** Employment status. */
export type EmploymentStatus =
  | 'Craftsman'
  | 'Employee'
  | 'Entrepreneur'
  | 'Farmer'
  | 'Manager'
  | 'Practitioner'
  | 'Retiree'
  | 'ShopOwner'
  | 'Student'
  | 'Unemployed';

/** Inputs to enable a received direct debit mandate, i.e. to move its status back from suspended. */
export type EnableReceivedDirectDebitMandateInput = {
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl?: InputMaybe<Scalars['String']['input']>;
  /** The received direct debit id to enable */
  receivedDirectDebitMandateId: Scalars['ID']['input'];
};

/** Union type return by the enableReceivedDirectDebitMandate mutation */
export type EnableReceivedDirectDebitMandatePayload = EnableReceivedDirectDebitMandateSuccessPayload | ForbiddenRejection | ReceivedDirectDebitMandateCanceledRejection | ReceivedDirectDebitMandateNotFoundRejection;

/** Return type in case of a successful response of the enableReceivedDirectDebitMandate mutation */
export type EnableReceivedDirectDebitMandateSuccessPayload = {
  __typename: 'EnableReceivedDirectDebitMandateSuccessPayload';
  /** The received direct debit mandate is enable, i.e that it is moved back to from the suspended to the enabled status */
  receivedDirectDebitMandate: ReceivedDirectDebitMandate;
};

/** Rejection returned if the card product don't have a card design enabled */
export type EnabledCardDesignNotFoundRejection = Rejection & {
  __typename: 'EnabledCardDesignNotFoundRejection';
  message: Scalars['String']['output'];
};

/** StatusInfo when the funding limit settings is enabled */
export type EnabledFundingLimitSettingsStatusInfo = FundingLimitSettingsStatusInfo & {
  __typename: 'EnabledFundingLimitSettingsStatusInfo';
  status: FundingLimitSettingsStatus;
};

/** Funding Source Enabled status information */
export type EnabledFundingSourceStatusInfo = FundingSourceStatusInfo & {
  __typename: 'EnabledFundingSourceStatusInfo';
  /** Date at which the funding source was enabled */
  enabledAt: Scalars['Date']['output'];
  /** Funding Source Enabled status */
  status: FundingSourceStatus;
};

/** EnabledMerchantPaymentMethodStatusInfo */
export type EnabledMerchantPaymentMethodStatusInfo = MerchantPaymentMethodStatusInfo & {
  __typename: 'EnabledMerchantPaymentMethodStatusInfo';
  /** Merchant Payment Method enabled date */
  enabledAt: Scalars['Date']['output'];
  status: MerchantPaymentMethodStatus;
};

/** EnabledMerchantProfileStatusInfo */
export type EnabledMerchantProfileStatusInfo = MerchantProfileStatusInfo & {
  __typename: 'EnabledMerchantProfileStatusInfo';
  enabledAt: Scalars['Date']['output'];
  status: MerchantProfileStatus;
};

export type EnvType =
  | 'Live'
  | 'Sandbox';

/** Describes an identification level for the process associated to this identification that has expired and is no longer considered valid */
export type ExpiredIdentificationLevelStatusInfo = {
  __typename: 'ExpiredIdentificationLevelStatusInfo';
  /** When this identification level expired */
  expiredAt: Scalars['Date']['output'];
  /** Always set to `Expired` */
  status: SwanIdentificationStatus;
};

export type ExpiredMerchantPaymentLinkStatusInfo = MerchantPaymentLinkStatusInfo & {
  __typename: 'ExpiredMerchantPaymentLinkStatusInfo';
  /**
   * The date when the payment link expired.
   * The payment link expires 24 hours after it was created.
   */
  expiredAt: Scalars['DateTime']['output'];
  status: MerchantPaymentLinkStatus;
};

export type ExternalAccount = {
  __typename: 'ExternalAccount';
  /** Bank Identifier Code */
  BIC: Scalars['BIC']['output'];
  /** International Bank Account Number */
  IBAN: Scalars['IBAN']['output'];
  /** Account holder for the external account */
  accountHolder?: Maybe<AccountHolder>;
  /** A list of balances regarding an external account. */
  balances: ExternalBalanceConnection;
  /** Type of the account */
  cashAccountType: CashAccountType;
  /** Country */
  country: Scalars['CCA3']['output'];
  /** Created date */
  createdAt: Scalars['DateTime']['output'];
  /** Currency */
  currency: Scalars['Currency']['output'];
  /** External account identifier following ISO-20022 standard */
  externalId: Scalars['String']['output'];
  /** Account Holder name */
  holderName: Scalars['String']['output'];
  /** Unique identifier of an external account */
  id: Scalars['ID']['output'];
  /** Financial institution */
  institution?: Maybe<FinancialInstitution>;
  /** Name of the account */
  name?: Maybe<Scalars['String']['output']>;
  /** Original Created date */
  originalCreatedAt: Scalars['DateTime']['output'];
  /** Source used for this account */
  source: ExternalAccountDataSource;
  /** Updated date */
  updatedAt: Scalars['DateTime']['output'];
  /** Usage information of the account */
  usage: ExternalAccountUsage;
};


export type ExternalAccountBalancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: Scalars['Int']['input'];
};

export type ExternalAccountAlreadyExistsRejection = Rejection & {
  __typename: 'ExternalAccountAlreadyExistsRejection';
  accountHolderId: Scalars['String']['output'];
  iban: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type ExternalAccountBalance = {
  __typename: 'ExternalAccountBalance';
  /** Amount with currency */
  amount?: Maybe<Amount>;
  /** Unique identifier of an external balance */
  id: Scalars['ID']['output'];
  /** Last changed Date */
  lastChangedAt: Scalars['DateTime']['output'];
  /** Type of Balance */
  type: ExternalAccountBalanceType;
};

export type ExternalAccountBalanceAlreadyExistsRejection = Rejection & {
  __typename: 'ExternalAccountBalanceAlreadyExistsRejection';
  lastChangedAt: Scalars['DateTime']['output'];
  message: Scalars['String']['output'];
  type: ExternalAccountBalanceType;
};

export type ExternalAccountBalanceInput = {
  /** Amount with currency */
  amount: AmountInput;
  /** Last changed Date */
  lastChangedAt: Scalars['DateTime']['input'];
  /** Type of Balance */
  type: ExternalAccountBalanceType;
};

export type ExternalAccountBalanceType =
  /** Balance of the account at the end of the pre-agreed account reporting period */
  | 'ClosingBooked'
  /** Balance composed of booked entries and pending items known at the time of calculation */
  | 'Expected'
  /** Available balance calculated in the course of the account servicer's business day, at the time specified, and subject to further changes during the business day */
  | 'InterimAvailable'
  /** Other balance */
  | 'Other'
  /** Balance of the account at the previously closed account reporting period */
  | 'PreviouslyClosedBooked'
  /** Value-date balance */
  | 'ValueDate';

/** Implements the Relay Connection interface, used to paginate the list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type ExternalAccountConnection = Connection & {
  __typename: 'ExternalAccountConnection';
  /** ExternalAccountEdge list */
  edges: Array<ExternalAccountEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of elements in the list */
  totalCount: Scalars['Int']['output'];
};

export type ExternalAccountDataSource = {
  __typename: 'ExternalAccountDataSource';
  name: Scalars['String']['output'];
  type: ExternalAccountDataSourceType;
};

export type ExternalAccountDataSourceType =
  /** When manually added by the partner */
  | 'Push';

/** Implements the Relay Edge interface */
export type ExternalAccountEdge = Edge & {
  __typename: 'ExternalAccountEdge';
  /** Opaque identifier pointing to this node in the pagination mechanism */
  cursor: Scalars['String']['output'];
  /** The external account */
  node: ExternalAccount;
};

export type ExternalAccountUsage =
  | 'Association'
  | 'Organization'
  | 'Private'
  | 'Unknown';

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type ExternalBalanceConnection = Connection & {
  __typename: 'ExternalBalanceConnection';
  /** ExternalBalanceEdge list */
  edges: Array<ExternalBalanceEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of elements in the list */
  totalCount: Scalars['Int']['output'];
};

/** Implements the Relay Edge interface */
export type ExternalBalanceEdge = Edge & {
  __typename: 'ExternalBalanceEdge';
  /** Opaque identifier pointing to this node in the pagination mechanism */
  cursor: Scalars['String']['output'];
  /** The external balance */
  node: ExternalAccountBalance;
};

/** The document corresponding to a face photo */
export type FacePhotoDocument = {
  __typename: 'FacePhotoDocument';
  /** Unique identifier of the face photo document. For privacy reasons, no temporary download url is exposed for this document */
  id: Scalars['String']['output'];
  /** The type of the document */
  type: DocumentType;
};

/** Fee creditor */
export type FeeCreditor = {
  /** account number */
  accountNumber: Scalars['AccountNumber']['output'];
  /** full name of the creditor */
  name: Scalars['String']['output'];
};

export type FeeDebtor = {
  /** account number */
  accountNumber: Scalars['AccountNumber']['output'];
  /** full name of the debtor */
  name: Scalars['String']['output'];
};

/** Fee creditor for Incoming transaction */
export type FeeInCreditor = FeeCreditor & {
  __typename: 'FeeInCreditor';
  /** account number */
  accountNumber: Scalars['AccountNumber']['output'];
  /** full name of the creditor */
  name: Scalars['String']['output'];
};

/** Fee debtor for Incoming transaction */
export type FeeInDebtor = FeeDebtor & {
  __typename: 'FeeInDebtor';
  /** account number */
  accountNumber: Scalars['AccountNumber']['output'];
  /** full name of the creditor */
  name: Scalars['String']['output'];
};

/** Fee creditor for Outgoing transaction */
export type FeeOutCreditor = FeeCreditor & {
  __typename: 'FeeOutCreditor';
  /** account number */
  accountNumber: Scalars['AccountNumber']['output'];
  /** full name of the creditor */
  name: Scalars['String']['output'];
};

/** Fee debtor for Outgoing transaction */
export type FeeOutDebtor = FeeDebtor & {
  __typename: 'FeeOutDebtor';
  /** account number */
  accountNumber: Scalars['AccountNumber']['output'];
  /** full name of the creditor */
  name: Scalars['String']['output'];
};

export type FeeSettingsNotFoundRejection = Rejection & {
  __typename: 'FeeSettingsNotFoundRejection';
  message: Scalars['String']['output'];
};

/** Fee Transaction */
export type FeeTransaction = Transaction & {
  __typename: 'FeeTransaction';
  /** matching account for the transaction */
  account?: Maybe<Account>;
  /** amount */
  amount: Amount;
  /** booked balance after this transaction */
  bookedBalanceAfter?: Maybe<Amount>;
  /** name of the counterparty. e.g Merchant name, Creditor name, Beneficiary Name ... */
  counterparty: Scalars['String']['output'];
  /** created date */
  createdAt: Scalars['DateTime']['output'];
  /** creditor information */
  creditor: FeeCreditor;
  /** debtor information */
  debtor: FeeDebtor;
  /** a date that reflects the execution date of a transaction from a user viewpoint. Can be used for sorting transactions. */
  executionDate: Scalars['DateTime']['output'];
  /**
   * an arbitrary identifier that was defined by you when you created this transaction.
   *
   * For example, you can define it in the CreditTransferInput mutation.
   */
  externalReference?: Maybe<Scalars['String']['output']>;
  /** feesType */
  feesType: FeesTypeEnum;
  /** unique identifier of the transaction */
  id: Scalars['ID']['output'];
  /** label */
  label: Scalars['String']['output'];
  /** origin transaction associated to this transaction */
  originTransaction?: Maybe<Transaction>;
  /** ID of the origin transaction associated to this transaction */
  originTransactionId?: Maybe<Scalars['String']['output']>;
  /** payment associated to this transaction */
  payment?: Maybe<Payment>;
  /** ID of the payment associated to this transaction */
  paymentId?: Maybe<Scalars['String']['output']>;
  /** payment method identifier used for this transaction. e.g masked PAN or IBAN or accountNumber */
  paymentMethodIdentifier: Scalars['String']['output'];
  /** payment product used for this transaction */
  paymentProduct: PaymentProduct;
  /** reference assigned by the initiating party, to unambiguously identify the transaction. This reference is passed on, unchanged, throughout the entire reference chain. */
  reference: Scalars['String']['output'];
  /** a date that reflects the time at which the user asked the transaction to be executed */
  requestedExecutionAt?: Maybe<Scalars['DateTime']['output']>;
  /** side (Credit or Debit) */
  side: TransactionSide;
  /** status information */
  statusInfo: TransactionStatusInfo;
  /** type */
  type: TransactionTypeEnum;
  /** updated date */
  updatedAt: Scalars['DateTime']['output'];
};

/** Fees type */
export type FeesTypeEnum =
  /** Other banking fee */
  | 'BankingFee'
  /** Card transaction in foreign currency */
  | 'CardPaymentsOutsideSEPA'
  /** Cash withdrawal in foreign currency */
  | 'CashWithdrawalsOutsideSEPA'
  /** Cash withdrawal */
  | 'CashWithdrawalsWithinSEPA'
  /** Deposit of a physical check */
  | 'CheckDeposit'
  /** Rejection or return of a physical check */
  | 'CheckIncident'
  /** Drafting circulation letter */
  | 'CirculationLetterDraftingFee'
  /** Drafting Confirmation letter */
  | 'ConfirmationLetterDraftingFee'
  /** Direct debit rejection */
  | 'DirectDebitRejection'
  /** Improper use of account */
  | 'ImproperUseOfAccount'
  /** Incoming credit transfers not denominated and executed in euros on group 1 currencies */
  | 'InternationalCreditTransferInGroup1'
  /** Incoming credit transfers not denominated and executed in euros on group 2 currencies */
  | 'InternationalCreditTransferInGroup2'
  /** Incoming credit transfers not denominated and executed in euros on group 3 currencies */
  | 'InternationalCreditTransferInGroup3'
  /** Incoming credit transfers not denominated and executed in euros on group 4 currencies */
  | 'InternationalCreditTransferInGroup4'
  /** Outgoing credit transfers not denominated and executed in euros on group 1 currencies */
  | 'InternationalCreditTransferOutGroup1'
  /** Outgoing credit transfers not denominated and executed in euros on group 2 currencies */
  | 'InternationalCreditTransferOutGroup2'
  /** Outgoing credit transfers not denominated and executed in euros on group 3 currencies */
  | 'InternationalCreditTransferOutGroup3'
  /** Outgoing credit transfers not denominated and executed in euros on group 4 currencies */
  | 'InternationalCreditTransferOutGroup4'
  /** Delivery of physical cards with an express delivery provider */
  | 'PhysicalCardDeliveryExpress'
  /** Delivery of physical cards within France */
  | 'PhysicalCardDeliveryFrance'
  /** Delivery of physical cards outside of France */
  | 'PhysicalCardDeliveryIntl'
  /** Process of printing physical cards */
  | 'PhysicalCardPrinting'
  /** Processing judicial or administrative seizure */
  | 'ProcessingJudicialOrAdministrativeSeizure'
  /** B2B SEPA Direct Debit up to 200€ */
  | 'SepaDirectDebitInB2bLevel1'
  /** B2B SEPA Direct Debit more than 200€ */
  | 'SepaDirectDebitInB2bLevel2'
  /** Core SEPA Direct Debit up to 200€ */
  | 'SepaDirectDebitInCoreLevel1'
  /** Core SEPA Direct Debit more than 200€ */
  | 'SepaDirectDebitInCoreLevel2'
  /** Return of a Core SEPA Direct Debit */
  | 'SepaDirectDebitInCoreReturn'
  /** Unauthorized overdraft */
  | 'UnauthorizedOverdraft';

export type Field = {
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
};

export type FieldValidationError =
  | 'Missing';

export type FinalizeOnboardingInput = {
  onboardingId: Scalars['String']['input'];
};

export type FinalizeOnboardingPayload = FinalizeOnboardingSuccessPayload | ForbiddenRejection | InternalErrorRejection | OnboardingNotCompletedRejection | ValidationRejection;

export type FinalizeOnboardingSuccessPayload = {
  __typename: 'FinalizeOnboardingSuccessPayload';
  onboarding: Onboarding;
};

export type FinancialInstitution = {
  __typename: 'FinancialInstitution';
  country: Scalars['CCA3']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ForbiddenRejection = Rejection & {
  __typename: 'ForbiddenRejection';
  message: Scalars['String']['output'];
};

export type FundingLimit = {
  __typename: 'FundingLimit';
  /** Maximum Funding Amount authorized */
  amount: Amount;
  /** Funding Amount that has already been used during the interval */
  funding?: Maybe<Amount>;
  /** Interval in number of calendar days where the limit is applied */
  rollingDays: Scalars['Int']['output'];
};

/** Funding Limit Amount */
export type FundingLimitAmount = {
  __typename: 'FundingLimitAmount';
  /** The amount settings */
  amount: Amount;
};

/** Funding Limit Amount Input */
export type FundingLimitAmountInput = {
  /** The amount settings */
  amount: AmountInput;
};

/** Rejection returned when the Account Holder Funding has been exceeded */
export type FundingLimitExceededRejection = Rejection & {
  __typename: 'FundingLimitExceededRejection';
  message: Scalars['String']['output'];
};

export type FundingLimitSettings = {
  __typename: 'FundingLimitSettings';
  /** Periodic funding limit */
  fundingLimit?: Maybe<FundingLimit>;
  /** Related change request */
  fundingLimitSettingsChangeRequest?: Maybe<FundingLimitSettingsChangeRequest>;
  /** Instant funding limit */
  instantFundingLimit?: Maybe<InstantFundingLimit>;
  /** Status of the resource */
  statusInfo: FundingLimitSettingsStatusInfo;
};

/** Funding Limit Settings Change Request */
export type FundingLimitSettingsChangeRequest = {
  __typename: 'FundingLimitSettingsChangeRequest';
  /** Approved amount settings for the the instant funding limit and the funding limit */
  approved?: Maybe<ApprovedFundingLimit>;
  /** Date of creation */
  createdAt?: Maybe<Scalars['Date']['output']>;
  /** Requested amount settings for the funding limit */
  fundingLimit: FundingLimitAmount;
  /** Unique identifier of a funding limit settings change request */
  id: Scalars['ID']['output'];
  /** Requested amount settings for the instant funding limit */
  instantFundingLimit: FundingLimitAmount;
  /** Status of the request */
  statusInfo: FundingLimitSettingsChangeRequestStatusInfo;
  /** Date of last update */
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

/** StatusInfo when funding limit settings change request has been approved */
export type FundingLimitSettingsChangeRequestApprovedStatusInfo = FundingLimitSettingsChangeRequestStatusInfo & {
  __typename: 'FundingLimitSettingsChangeRequestApprovedStatusInfo';
  reason: Scalars['String']['output'];
  status: FundingLimitSettingsChangeRequestStatus;
};

/** Funding Limit Settings Change Request Bad Amount Rejection */
export type FundingLimitSettingsChangeRequestBadAmountRejection = Rejection & {
  __typename: 'FundingLimitSettingsChangeRequestBadAmountRejection';
  message: Scalars['String']['output'];
};

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type FundingLimitSettingsChangeRequestConnection = Connection & {
  __typename: 'FundingLimitSettingsChangeRequestConnection';
  /** FundingLimitSettingsChangeRequestEdge list */
  edges: Array<FundingLimitSettingsChangeRequestEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars['Int']['output'];
};

/** Implements the Relay Edge interface */
export type FundingLimitSettingsChangeRequestEdge = Edge & {
  __typename: 'FundingLimitSettingsChangeRequestEdge';
  /** Opaque identifier pointing to this onboarding node in the pagination mechanism */
  cursor: Scalars['String']['output'];
  /** The FundingLimitSettingsChangeRequest */
  node: FundingLimitSettingsChangeRequest;
};

/** Filters that can be applied when listing funding limit settings change requests */
export type FundingLimitSettingsChangeRequestFiltersInput = {
  /** The ids of the funding limit settings change requests */
  id?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Status we want to filter on */
  status?: InputMaybe<Array<FundingLimitSettingsChangeRequestStatus>>;
};

/** Field we can use when ordering that can be applied when listing funding limit settings change requests */
export type FundingLimitSettingsChangeRequestOrderByFieldInput =
  | 'createdAt'
  | 'id'
  | 'updatedAt';

/** Order that can be applied when listing funding limit settings change requests */
export type FundingLimitSettingsChangeRequestOrderByInput = {
  direction?: InputMaybe<OrderByDirection>;
  field?: InputMaybe<FundingLimitSettingsChangeRequestOrderByFieldInput>;
};

/** StatusInfo when funding limit settings change request is pending */
export type FundingLimitSettingsChangeRequestPendingStatusInfo = FundingLimitSettingsChangeRequestStatusInfo & {
  __typename: 'FundingLimitSettingsChangeRequestPendingStatusInfo';
  status: FundingLimitSettingsChangeRequestStatus;
};

/** StatusInfo when funding limit settings change request has been rejected */
export type FundingLimitSettingsChangeRequestRefusedStatusInfo = FundingLimitSettingsChangeRequestStatusInfo & {
  __typename: 'FundingLimitSettingsChangeRequestRefusedStatusInfo';
  reason: Scalars['String']['output'];
  status: FundingLimitSettingsChangeRequestStatus;
};

/** Funding Limit Settings Change Request Status */
export type FundingLimitSettingsChangeRequestStatus =
  /** When the request is approved */
  | 'Approved'
  /** When the request is in pending */
  | 'Pending'
  /** When the request is refused */
  | 'Refused'
  /** When the request is in waiting for information */
  | 'WaitingForInformation';

/** Object containing details about funding limit settings change request status */
export type FundingLimitSettingsChangeRequestStatusInfo = {
  /** Current limit settings change request status. */
  status: FundingLimitSettingsChangeRequestStatus;
};

/** StatusInfo when funding limit settings change request is waiting for more information */
export type FundingLimitSettingsChangeRequestWaitingForInformationStatusInfo = FundingLimitSettingsChangeRequestStatusInfo & {
  __typename: 'FundingLimitSettingsChangeRequestWaitingForInformationStatusInfo';
  status: FundingLimitSettingsChangeRequestStatus;
};

/** Possible values for funding limit settings status */
export type FundingLimitSettingsStatus =
  /** When the funding limit settings is disabled */
  | 'Disabled'
  /** When the funding limit settings is enabled */
  | 'Enabled'
  /** When the funding limit settings is suspended */
  | 'Suspended';

/** Object containing details about funding limit settings status */
export type FundingLimitSettingsStatusInfo = {
  /** Current funding limit settings. */
  status: FundingLimitSettingsStatus;
};

/** Funding Source */
export type FundingSource = {
  /** Created date */
  createdAt: Scalars['DateTime']['output'];
  /** ID of the Funding Source */
  id: Scalars['ID']['output'];
  /** Name of the Funding Source */
  name?: Maybe<Scalars['String']['output']>;
  /** Funding Source status information */
  statusInfo: FundingSourceStatusInfo;
  /** Last updated date */
  updatedAt: Scalars['DateTime']['output'];
};

/** Please see the Connection interface */
export type FundingSourceConnection = Connection & {
  __typename: 'FundingSourceConnection';
  edges: Array<FundingSourceEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Please see the Connection interface */
export type FundingSourceEdge = Edge & {
  __typename: 'FundingSourceEdge';
  cursor: Scalars['String']['output'];
  node: FundingSource;
};

/** Filters that can be applied when listing Funding Sources */
export type FundingSourceFiltersInput = {
  status: Array<FundingSourceStatus>;
};

export type FundingSourceNotFoundRejection = Rejection & {
  __typename: 'FundingSourceNotFoundRejection';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Field we can use when ordering that can be applied when listing funding source results */
export type FundingSourceOrderByFieldInput =
  | 'createdAt'
  | 'updatedAt';

/** Order that can be applied when listing funding source results */
export type FundingSourceOrderByInput = {
  direction?: InputMaybe<OrderByDirection>;
  field?: InputMaybe<FundingSourceOrderByFieldInput>;
};

/** Funding Source Statuses */
export type FundingSourceStatus =
  | 'Canceled'
  | 'Enabled'
  | 'Pending'
  | 'Rejected'
  | 'Suspended';

/** Funding Source status information */
export type FundingSourceStatusInfo = {
  /** Funding Source Pending status */
  status: FundingSourceStatus;
};

/** Rejection returned when the Funding Source is not in the expected status */
export type FundingSourceWrongStatusRejection = Rejection & {
  __typename: 'FundingSourceWrongStatusRejection';
  currentStatus: FundingSourceStatus;
  expectedStatus: FundingSourceStatus;
  message: Scalars['String']['output'];
};

/** Inputs to generate an account */
export type GenerateAccountStatementInput = {
  /** Unique identifier of an account */
  accountId: Scalars['ID']['input'];
  /** ending date of the date window */
  closingDate: Scalars['DateTime']['input'];
  /** language to generate the statement in (default to account's language) */
  language?: InputMaybe<AccountLanguage>;
  /** starting date of the date window */
  openingDate: Scalars['DateTime']['input'];
  /** Type of statement to generate */
  statementType?: InputMaybe<StatementType>;
};

export type GenerateCapitalDepositDocumentUploadUrlInput = {
  /** Unique identifier of the capitalDepositCase associated to the document. */
  capitalDepositCaseId: Scalars['ID']['input'];
  /** Unique identifier of the document. */
  documentId: Scalars['ID']['input'];
  /** Filename of the document. */
  filename: Scalars['String']['input'];
};

export type GenerateCapitalDepositDocumentUploadUrlPayload = BadRequestRejection | CapitalDepositDocumentCanNotBeUploaded | ForbiddenRejection | GenerateCapitalDepositDocumentUploadUrlSuccessPayload | InternalErrorRejection;

export type GenerateCapitalDepositDocumentUploadUrlSuccessPayload = {
  __typename: 'GenerateCapitalDepositDocumentUploadUrlSuccessPayload';
  /** URL to be used to upload the document. */
  uploadUrl?: Maybe<Scalars['String']['output']>;
};

export type GenerateSupportingDocumentUploadUrlInput = {
  /** Name of the document which will be sent */
  filename: Scalars['String']['input'];
  /** Unique identifier of a supporting document collection */
  supportingDocumentCollectionId: Scalars['ID']['input'];
  /** Purpose of document */
  supportingDocumentPurpose?: InputMaybe<SupportingDocumentPurposeEnum>;
  /** Type of document */
  supportingDocumentType?: InputMaybe<SupportingDocumentType>;
};

export type GenerateSupportingDocumentUploadUrlPayload = ForbiddenRejection | GenerateSupportingDocumentUploadUrlSuccessPayload | InternalErrorRejection | SupportingDocumentCollectionNotFoundRejection | SupportingDocumentUploadNotAllowedRejection | ValidationRejection;

export type GenerateSupportingDocumentUploadUrlSuccessPayload = {
  __typename: 'GenerateSupportingDocumentUploadUrlSuccessPayload';
  /** Id of the supporting document created for this uploadUrl */
  supportingDocumentId: Scalars['String']['output'];
  /** Info to upload the document : url and fields to add along file in form (POST) */
  upload: SupportingDocumentUploadInfo;
};

/** Rejection returned when the Global Funding has been exceeded */
export type GlobalFundingLimitExceededRejection = Rejection & {
  __typename: 'GlobalFundingLimitExceededRejection';
  message: Scalars['String']['output'];
};

/** Rejection returned when the Global Instant Funding limit has been exceeded */
export type GlobalInstantFundingLimitExceededRejection = Rejection & {
  __typename: 'GlobalInstantFundingLimitExceededRejection';
  message: Scalars['String']['output'];
};

/** Input of the `grantConsentWithServerSignature` mutation */
export type GrantConsentWithServerSignatureInput = {
  /** ID of the consent to grant */
  consentId: Scalars['ID']['input'];
  /** Consent challenge signed with server consent credentials */
  signature: Scalars['String']['input'];
};

/** Payload of the `grantConsentWithServerSignature` mutation */
export type GrantConsentWithServerSignaturePayload = ConsentNotFoundRejection | ConsentTypeNotSupportedByServerConsentRejection | ForbiddenRejection | GrantConsentWithServerSignatureSuccessPayload | NotReachableConsentStatusRejection | ProjectNotFoundRejection | ServerConsentCredentialsNotValidOrOutdatedRejection | ServerConsentNotAllowedForConsentOperationRejection | ServerConsentNotAllowedForProjectRejection | ServerConsentProjectCredentialMissingRejection | ServerConsentProjectCredentialNotFoundRejection | ServerConsentProjectSettingsNotFoundRejection | ServerConsentSignatureNotValidRejection;

/** Success payload of the `grantConsentWithServerSignature` mutation */
export type GrantConsentWithServerSignatureSuccessPayload = {
  __typename: 'GrantConsentWithServerSignatureSuccessPayload';
  consent: Consent;
};

export type Headquarters = {
  __typename: 'Headquarters';
  address: Scalars['String']['output'];
  town: Scalars['String']['output'];
  zipCode: Scalars['String']['output'];
};

/** Rejection returned when the IBAN is not reachable */
export type IbanNotReachableRejection = Rejection & {
  __typename: 'IBANNotReachableRejection';
  message: Scalars['String']['output'];
};

/** Rejection returned when the IBAN is not valid */
export type IbanNotValidRejection = Rejection & {
  __typename: 'IBANNotValidRejection';
  message: Scalars['String']['output'];
};

/** Virtual IBAN Status */
export type IbanStatus =
  /** When the virtual IBAN refuse definitely to receive Sepa payments */
  | 'Canceled'
  /** When the virtual IBAN accept to receive Sepa payments */
  | 'Enabled'
  /** When the virtual IBAN refuse temporarily to receive Sepa payments */
  | 'Suspended';

/** ibanValidation input */
export type IbanValidationInput = {
  /** IBAN to validate */
  iban: Scalars['IBAN']['input'];
};

export type IbanValidationRejection = Rejection & {
  __typename: 'IbanValidationRejection';
  message: Scalars['String']['output'];
};

/** IbanValidationResult */
export type IbanValidationResult = InvalidIban | ValidIban;

/** The document corresponding to an ID card */
export type IdCardDocument = {
  __typename: 'IdCardDocument';
  /** The date at which the ID card expires */
  expiryDate?: Maybe<Scalars['Date']['output']>;
  /** List of the associated files */
  files: Array<IdCardDocumentFile>;
  /** Unique identifier of the ID card document */
  id: Scalars['String']['output'];
  /** The date at which the ID card was issued */
  issueDate?: Maybe<Scalars['Date']['output']>;
  /** Machine-readable zone code of the ID card */
  mrz?: Maybe<Scalars['String']['output']>;
  /** Number of the ID card */
  number?: Maybe<Scalars['String']['output']>;
  /** The type of the document */
  type: DocumentType;
};

/** The file associated to the ID card document */
export type IdCardDocumentFile = DocumentFile & {
  __typename: 'IdCardDocumentFile';
  /** The file's temporary download url */
  downloadUrl: Scalars['String']['output'];
  /** From which side the ID card's picture was taken */
  side: DocumentFileSide;
};

/** The identification represents an ongoing identification process or its result */
export type Identification = {
  __typename: 'Identification';
  /** Creation date of the identification */
  createdAt: Scalars['DateTime']['output'];
  /** The available documents related to the identification (id doc, selfie, report...) */
  documents?: Maybe<Array<IdentificationDocument>>;
  /** Unique identifier of the identification */
  id: Scalars['String']['output'];
  /** The identity document type used for the current identification (passport, id card ...) */
  identityDocumentType?: Maybe<IdentityDocumentType>;
  /** The status and results associated to the available identification processes */
  levels: IdentificationLevelStatusesInfo;
  /** The process that was used for this identification */
  process: IdentificationProcessInfo;
  /** Last update date of the identification */
  updatedAt: Scalars['DateTime']['output'];
};

/** Fields we can use when ordering that can be applied when listing identifications */
export type IdentificationConnection = {
  __typename: 'IdentificationConnection';
  /** IdentificationEdge list */
  edges: Array<IdentificationEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo?: Maybe<PageInfo>;
  /** Total number of element in the list */
  totalCount: Scalars['Int']['output'];
};

/** Union representing all the possible identification document types */
export type IdentificationDocument = DriversLicenseDocument | FacePhotoDocument | IdCardDocument | PassportDocument | ReportDocument | ResidencePermitDocument;

/** Implements the Relay Edge interface */
export type IdentificationEdge = Edge & {
  __typename: 'IdentificationEdge';
  /** Opaque identifier pointing to this node in the pagination mechanism */
  cursor: Scalars['String']['output'];
  /** The identification entry */
  node: Identification;
};

/** The identification process associated to the expert level */
export type IdentificationExpertProcessInfo = {
  __typename: 'IdentificationExpertProcessInfo';
  /**
   * The identification process associated to the expert level.
   * Using an alias to map this property is mandatory when querying multiple processes.
   */
  provider: IdentificationExpertProcessProvider;
};

/** The provider used for this expert-level identification process */
export type IdentificationExpertProcessProvider =
  | 'Fourthline'
  | 'Ubble';

/** The identification process associated to the Qualified Electronic Signature level */
export type IdentificationExpertWithQesProcessInfo = {
  __typename: 'IdentificationExpertWithQESProcessInfo';
  /**
   * The identification process associated to the qes level.
   * Using an alias to map this property is mandatory when querying multiple processes.
   */
  provider: IdentificationExpertWithQesProcessProvider;
};

/** The provider used for this QES-level identification process */
export type IdentificationExpertWithQesProcessProvider =
  | 'Fourthline';

/** Filter that can be passed to get the identifications in specific data ranges */
export type IdentificationFiltersInput = {
  /** To filter on level values */
  levels?: InputMaybe<Array<IdentificationLevel>>;
  /** To filter on process values */
  processes?: InputMaybe<Array<IdentificationProcess>>;
  /** To filter on status values */
  statuses?: InputMaybe<Array<SwanIdentificationStatus>>;
};

/** The various reasons that can lead to an invalid identification level */
export type IdentificationInvalidReason =
  /** Face must be fully present in the photo */
  | 'AbsentOrIncompleteFace'
  /** Applicant used a device that has been technically altered / modified */
  | 'AlteredDevice'
  /** Light on actual document is insufficient */
  | 'BadDocumentLightning'
  /** Something about the document is damaged (could be as tiny as a bent corner) */
  | 'DamagedDocument'
  /** Expiry date of document has passed */
  | 'ExpiredDocument'
  /** Attempt to commit fraud detected */
  | 'FraudDetected'
  /** Video quality isn’t sufficient or video is missing required information */
  | 'InadequateVideo'
  /** Lighting on applicant’s face is insufficient */
  | 'InsufficientApplicantLightning'
  /** Applicant isn’t meeting movement requirements */
  | 'InsufficientApplicantLiveness'
  /** Internet connection quality is insufficient */
  | 'InsufficientConnectionQuality'
  /** Video of document doesn’t meet movement requirements */
  | 'InsufficientDocumentLiveness'
  /** Document is blurry or otherwise distorted */
  | 'InsufficientDocumentReadability'
  /** Face is blurry or otherwise distorted */
  | 'InsufficientFaceReadability'
  /** Video is blurry or otherwise distorted */
  | 'InsufficientVideoReadability'
  /** There was a technical error */
  | 'InternalError'
  /** Address is not valid or accepted */
  | 'InvalidAddress'
  /** Identification data is invalid or missing */
  | 'InvalidOrMissingData'
  /** Applicant seems to be doing verification against their will */
  | 'InvoluntaryIdentification'
  /** Geolocation data is required but not available */
  | 'MissingGeolocationData'
  /** Applicant appears on unacceptable news list */
  | 'NegativeNewsHit'
  /** Applicant’s identity does not match the expected ID info */
  | 'NonMatchingIdentity'
  /** Applicant presented a duplicate of the document (digital or paper) */
  | 'NonOriginalDocument'
  /** Applicant appears on a sanctions list */
  | 'SanctionListHit'
  /** Applicant required to provide a second document */
  | 'SecondDocumentRequired'
  /** There was a technical error with the electronic signature process */
  | 'TechnicalSignatureError'
  /** The time to complete the signature timed out */
  | 'TimeoutSignatureFlow'
  /** Document not on list of acceptable document types */
  | 'UnacceptableDocument'
  /** Applicant is under the minimum required age */
  | 'UnderageApplicant';

/** Possible value for the field IdentificationLevel */
export type IdentificationLevel =
  /** Human identity verification */
  | 'Expert'
  /** Identity verification with PVID */
  | 'PVID'
  /** Identity verification with Qualified Electronic Signature */
  | 'QES';

/** User identification levels input payload. */
export type IdentificationLevelInput =
  /** Identity verified by an expert (Ubble-like) */
  | 'Expert'
  /** Identity verified by an expert with a Remote Identity Verification Service */
  | 'PVID'
  /** Identity verified by an expert and a Qualified Electronic Signature has been done */
  | 'QES';

/**
 * Union representing all the possible statuses: not supported, not started, pending, valid, invalid, cancelled, expired
 * Each variant contains its relevant data, for example invalid contains a `reason` field, expired contains an `expiredAt` field, valid contains a `documents` field
 */
export type IdentificationLevelStatusInfo = CanceledIdentificationLevelStatusInfo | ExpiredIdentificationLevelStatusInfo | InvalidIdentificationLevelStatusInfo | NotStartedIdentificationLevelStatusInfo | NotSupportedIdentificationLevelStatusInfo | PendingIdentificationLevelStatusInfo | StartedIdentificationLevelStatusInfo | ValidIdentificationLevelStatusInfo;

/** The status and results associated to the available identification processes */
export type IdentificationLevelStatusesInfo = {
  __typename: 'IdentificationLevelStatusesInfo';
  /** The status and results associated to the expert level */
  expert: IdentificationLevelStatusInfo;
  /** The status and results associated to the Remote Identity Verification Service level */
  pvid: IdentificationLevelStatusInfo;
  /** The status and results associated to the Qualified Electronic Signature level */
  qes: IdentificationLevelStatusInfo;
};

/** Identification levels */
export type IdentificationLevels = {
  __typename: 'IdentificationLevels';
  PVID: Scalars['Boolean']['output'];
  QES: Scalars['Boolean']['output'];
  expert: Scalars['Boolean']['output'];
};

/** The identification process associated to the PVID/Remote Identity Verification Service level */
export type IdentificationPvidProcessInfo = {
  __typename: 'IdentificationPVIDProcessInfo';
  /**
   * The identification process associated to the pvid level.
   * Using an alias to map this property is mandatory when querying multiple processes.
   */
  provider: IdentificationPvidProcessProvider;
};

/** The provider used for this PVID-level identification process */
export type IdentificationPvidProcessProvider =
  | 'Ubble';

/** Process of the identification */
export type IdentificationProcess =
  /** Identity verified by an expert */
  | 'Expert'
  /** Identity verified by an expert with a Remote Identity Verification Service */
  | 'PVID'
  /** Identity verified by an expert and a Qualified Electronic Signature has been done */
  | 'QES';

/** Union representing the process that was used for this identification */
export type IdentificationProcessInfo = IdentificationExpertProcessInfo | IdentificationExpertWithQesProcessInfo | IdentificationPvidProcessInfo;

/** Identification status */
export type IdentificationStatus =
  /**
   * The user has gone through the identity verification process, but we were unable to determine if their
   * identity is valid because the quality of the provided documents was insufficient.
   * The user will have to start a new identification, which will update this status to `Processing`.
   */
  | 'InsufficientDocumentQuality'
  /**
   * The user has gone through the identity verification process, but we have determined that their identity is invalid.
   * The user will have to start a new identification, which will update this status to `Processing`.
   */
  | 'InvalidIdentity'
  /** The user has gone through the identity verification process, but we are still processing their information. */
  | 'Processing'
  /**
   * The user has gone through the identity verification process, and we have determined that their identity is valid.
   * The user now needs to go through the QES process to complete their identification.
   */
  | 'ReadyToSign'
  /** The user hasn't started the identity verification process yet. */
  | 'Uninitiated'
  /** The user has gone through the identity verification process, and we have determined that their identity is valid. */
  | 'ValidIdentity';

/** Fields we can use when ordering that can be applied when listing identifications */
export type IdentificationsOrderByField =
  | 'createdAt'
  | 'updatedAt';

/** Order that can be applied when listing identifications */
export type IdentificationsOrderByInput = {
  /** The order in which the Identification list should be ordered */
  direction?: InputMaybe<OrderByDirection>;
  /** The field by which the Identification list should be ordered */
  field?: InputMaybe<IdentificationsOrderByField>;
};

/** Rejection returned if identity and the account memberships are already bind */
export type IdentityAlreadyBindToAccountMembershipRejection = Rejection & {
  __typename: 'IdentityAlreadyBindToAccountMembershipRejection';
  accountId: Scalars['String']['output'];
  identityId: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** The type of the identity document */
export type IdentityDocumentType =
  | 'DriversLicense'
  | 'IdCard'
  | 'Passport'
  | 'ResidencePermit';

/** Data used for in app provisioning */
export type InAppProvisioningData = {
  __typename: 'InAppProvisioningData';
  /** Cryptographic OTP used to pre-validate digitalization */
  activationData: Scalars['String']['output'];
  /** Encrypted card data */
  encryptedData: Scalars['String']['output'];
  /** Base64 public key used with the wallet provider public key to encrypt the card data */
  ephemeralPublicKey: Scalars['String']['output'];
  /** IV used to encrypt the card Data (Useful for Google Pay) */
  iv?: Maybe<Scalars['String']['output']>;
  /** hash algorithm used during encryption of the card data (Useful for Google Pay) */
  oaepHashingAlgorithm?: Maybe<Scalars['String']['output']>;
  /** public key fingerprint of the key used to encrypt card data (Useful for Google Pay) */
  publicKeyFingerprint?: Maybe<Scalars['String']['output']>;
};

/** Individual shareholder info. */
export type IndividualShareholder = {
  __typename: 'IndividualShareholder';
  /** Birth date of the shareholder. */
  birthDate: Scalars['String']['output'];
  /** First name of the shareholder. */
  firstName: Scalars['String']['output'];
  /** Last name of the shareholder. */
  lastName: Scalars['String']['output'];
  /** CCA3 code for the country of nationality of the shareholder. */
  nationality: Scalars['CCA3']['output'];
  /** Whether the shareholder is an individual or a company. */
  type: ShareholderType;
};

/**
 * Individual Ultimate Beneficial Owner
 * You need to describe the natural person (s) who hold, directly or indirectly, more than 25% of the capital or the rights of vote of the reporting company.
 * Please describe the company (s) that owns the company that wishes to open an account, when an individual holds in fine more than 25%
 */
export type IndividualUltimateBeneficialOwner = {
  __typename: 'IndividualUltimateBeneficialOwner';
  /** individual birth city */
  birthCity?: Maybe<Scalars['String']['output']>;
  /** individual birth city postal code */
  birthCityPostalCode?: Maybe<Scalars['String']['output']>;
  /** individual birth country code */
  birthCountryCode?: Maybe<Scalars['CCA3']['output']>;
  /** individual birth date */
  birthDate?: Maybe<Scalars['DateTime']['output']>;
  /** individual first name */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Information relating to the type of the UBO */
  info: IndividualUltimateBeneficialOwnerInfo;
  /** individual last name */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Individual beneficial owner residency Address */
  residencyAddress?: Maybe<AddressInformation>;
  /** Individual beneficial owner Tax or Identification Number */
  taxIdentificationNumber?: Maybe<Scalars['String']['output']>;
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
  birthCity?: InputMaybe<Scalars['String']['input']>;
  /** Individual birth city postal code. Length must be from 0 to 50 characters */
  birthCityPostalCode?: InputMaybe<Scalars['String']['input']>;
  /** Individual birth country code */
  birthCountryCode?: InputMaybe<Scalars['CCA3']['input']>;
  /** Individual birth date. Must be a valid date */
  birthDate?: InputMaybe<Scalars['String']['input']>;
  /** Define UBO is an Direct Owner */
  direct?: InputMaybe<Scalars['Boolean']['input']>;
  /** Individual beneficial owner first name. Length must be from 0 to 100 characters */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Define UBO is an Indirect Owner */
  indirect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Individual beneficial owner  last name. Length must be from 0 to 100 characters */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Individual beneficial owner residency Address */
  residencyAddress?: InputMaybe<AddressInformationInput>;
  /** Individual beneficial owner Tax or Identification Number */
  taxIdentificationNumber?: InputMaybe<Scalars['String']['input']>;
  /** Individual ultimate beneficial owner title (Mr/Ms) */
  title?: InputMaybe<TitleEnum>;
  /** Total of capital (in percentage, ex: 50 = 50%). Must be between 1 and 100. */
  totalCapitalPercentage?: InputMaybe<Scalars['Float']['input']>;
  /** Define UBO is a Legal Representative */
  type: IndividualUltimateBeneficialOwnerTypeEnum;
};

/** Individual Ultimate beneficial owner nature */
export type IndividualUltimateBeneficialOwnerTypeEnum =
  /** The Beneficial Owner have shares */
  | 'HasCapital'
  /** The Beneficial Owner is the representant legal */
  | 'LegalRepresentative'
  /** Other */
  | 'Other';

/** Individual Ultimate Beneficial Owner Type Has Capital */
export type IndividualUltimateBeneficialOwnerTypeHasCapital = IndividualUltimateBeneficialOwnerInfo & {
  __typename: 'IndividualUltimateBeneficialOwnerTypeHasCapital';
  /** Define UBO is an Direct Owner */
  direct?: Maybe<Scalars['Boolean']['output']>;
  /** Define UBO is an Indirect Owner */
  indirect?: Maybe<Scalars['Boolean']['output']>;
  /** Total of capital (in percentage, ex: 50 = 50%) */
  totalCapitalPercentage?: Maybe<Scalars['Float']['output']>;
  /** Individual type */
  type: IndividualUltimateBeneficialOwnerTypeEnum;
};

/** Individual Ultimate Beneficial Owner Type Legal Representative */
export type IndividualUltimateBeneficialOwnerTypeLegalRepresentative = IndividualUltimateBeneficialOwnerInfo & {
  __typename: 'IndividualUltimateBeneficialOwnerTypeLegalRepresentative';
  /** Individual type */
  type: IndividualUltimateBeneficialOwnerTypeEnum;
};

/** Individual Ultimate Beneficial Owner Type Other */
export type IndividualUltimateBeneficialOwnerTypeOther = IndividualUltimateBeneficialOwnerInfo & {
  __typename: 'IndividualUltimateBeneficialOwnerTypeOther';
  /** Individual type */
  type: IndividualUltimateBeneficialOwnerTypeEnum;
};

/** Initiate credit transfers */
export type InitiateCreditTransfersInput = {
  /** account id to be debited identified by id */
  accountId?: InputMaybe<Scalars['ID']['input']>;
  /** account to be debited identified by number */
  accountNumber?: InputMaybe<Scalars['AccountNumber']['input']>;
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
  /** credit transfers (max 250 records) */
  creditTransfers: Array<CreditTransferInput>;
};

export type InitiateCreditTransfersPayload = AccountNotFoundRejection | ForbiddenRejection | InitiateCreditTransfersSuccessPayload;

export type InitiateCreditTransfersSuccessPayload = {
  __typename: 'InitiateCreditTransfersSuccessPayload';
  payment: Payment;
};

/** Input to initiate a funding request */
export type InitiateFundingRequestInput = {
  /** Amount of the requested funding, i.e. amount that will credit the concerned Swan account and debit the external funding source. */
  amount: AmountInput;
  /** Url to which the authorized account member must be redirected once the consent has been finalized. */
  consentRedirectUrl: Scalars['String']['input'];
  /** ID of the funding source to be used to fund the concerned account */
  fundingSourceId: Scalars['ID']['input'];
  /**
   * *SOON TO BE DEPRECATED*
   * If `true` the funds should be available immediately. If `false` or `null`, the funds will be available
   * after the resolution of the credit transaction.
   */
  isInstant?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Label of the funding request that will be shown on the account holder statement and on the debtor account used
   * Always starts with 'Partner Name' truncated at 19 characters followed by a space.
   * If empty, default label is "Partner Name - Account Holder Name".
   */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Reference of the funding request that will be shown on the account holder statement and on the debtor account used. */
  reference?: InputMaybe<Scalars['String']['input']>;
  /**
   * When the funding request should be executed. If `null`, it will be executed as soon as possible.
   * It is not possible to define this value when the option `isInstant` is set to true.
   */
  requestedExecutionAt?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Initiate A Funding Request Payload */
export type InitiateFundingRequestPayload = AccountVerificationWrongStatusRejection | ForbiddenRejection | FundingLimitExceededRejection | FundingSourceNotFoundRejection | FundingSourceWrongStatusRejection | GlobalFundingLimitExceededRejection | GlobalInstantFundingLimitExceededRejection | InitiateFundingRequestSuccessPayload | InstantFundingLimitExceededRejection | InsufficientFundsRejection | ProjectFundingLimitExceededRejection | ProjectInstantFundingLimitExceededRejection | ValidationRejection;

/** Initiate A Funding Request Success Payload */
export type InitiateFundingRequestSuccessPayload = {
  __typename: 'InitiateFundingRequestSuccessPayload';
  /** Details of the funding payment created */
  payment: Payment;
};

/**
 * *COMING SOON*
 * Input to create a quote and an international beneficiary
 */
export type InitiateInternationalCreditTransferInput = {
  /** Account ID of the originator of the international credit transfer */
  accountId?: InputMaybe<Scalars['ID']['input']>;
  /** Account number if the beneficiary is a swan account */
  accountNumber?: InputMaybe<Scalars['AccountNumber']['input']>;
  /** When the consent flow is finished the user is redirected to this URL */
  consentRedirectUrl: Scalars['String']['input'];
  /** External reference */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Beneficiary of the international credit transfer */
  internationalBeneficiary: InternationalBeneficiaryInput;
  /** Transfer details */
  internationalCreditTransferDetails: Array<InternationalCreditTransferDetailsInput>;
  /** Target amount of the international credit transfer */
  targetAmount: AmountInput;
};

/** Initiate International Credit Transfer Response Payload */
export type InitiateInternationalCreditTransferResponsePayload = AccountNotFoundRejection | ForbiddenRejection | InitiateInternationalCreditTransferResponseSuccessPayload | InternalErrorRejection | ValidationRejection;

/** Initiate International Credit Transfer Response Success Payload */
export type InitiateInternationalCreditTransferResponseSuccessPayload = {
  __typename: 'InitiateInternationalCreditTransferResponseSuccessPayload';
  /** Details of the international credit transfer created */
  payment: Payment;
  /** Details for the quote of international credit transfer */
  quote: InternationalCreditTransferQuote;
};

export type InitiateMerchantPaymentCollectionInput = {
  /** Amount of the concerned payment collection. For check deposit, the amount should not exceed 10 000€. */
  amount: AmountInput;
  /** Check type of payment collection */
  check?: InputMaybe<CheckPaymentCollectionInput>;
  /** external reference (JSON) that can be used by the Swan merchant for reconciliation purposes */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Internal direct debit type of payment collection */
  internalDirectDebit?: InputMaybe<InternalDirectDebitPaymentCollectionInput>;
  /**
   * Label of the concerned payment collection, which will be displayed on Swan bank statement -
   * For checks transaction, if empty, default label will be set as "Check N° [1st part of CMC7 - 7 char.]
   */
  label?: InputMaybe<Scalars['String']['input']>;
  /** end-to-end reference of the concerned payment collection */
  reference?: InputMaybe<Scalars['String']['input']>;
  /** Sepa Direct Debit type of payment collection */
  sepaDirectDebit?: InputMaybe<SepaDirectDebitPaymentCollectionInput>;
};

export type InitiateMerchantPaymentCollectionPayload = ForbiddenRejection | InitiateMerchantPaymentCollectionSuccessPayload | InternalErrorRejection | NotFoundRejection | ValidationRejection;

export type InitiateMerchantPaymentCollectionSuccessPayload = {
  __typename: 'InitiateMerchantPaymentCollectionSuccessPayload';
  merchantPaymentCollection: Payment;
};

export type InstantFundingLimit = {
  __typename: 'InstantFundingLimit';
  /** Maximum Instant Funding Amount authorized */
  amount: Amount;
  /** Instant Funding Amount that has already been used */
  funding?: Maybe<Amount>;
};

/** Rejection returned when the Account Holder Instant Funding limit has been exceeded */
export type InstantFundingLimitExceededRejection = Rejection & {
  __typename: 'InstantFundingLimitExceededRejection';
  message: Scalars['String']['output'];
};

/** Rejection returned when the Available balance is insufficient */
export type InsufficientFundsRejection = Rejection & {
  __typename: 'InsufficientFundsRejection';
  message: Scalars['String']['output'];
};

/**
 * *SOON TO BE DEPRECATED*
 * Internal Beneficiary
 */
export type InternalBeneficiary = Beneficiary & {
  __typename: 'InternalBeneficiary';
  /**
   * account number if the beneficiary is a swan account
   * @deprecated because it is not already implemented (a default value is set).
   */
  accountNumber: Scalars['AccountNumber']['output'];
  /** unique identifier of a beneficiary */
  id?: Maybe<Scalars['ID']['output']>;
  /** `true` if this new beneficiary is the account holder himself in an other financial institution. */
  isMyOwnIban: Scalars['Boolean']['output'];
  /** full name of the beneficiary */
  name: Scalars['String']['output'];
};

/** Internal Credit Transfer transaction */
export type InternalCreditTransfer = Transaction & {
  __typename: 'InternalCreditTransfer';
  /** matching account for the transaction */
  account?: Maybe<Account>;
  /** amount */
  amount: Amount;
  /** booked balance after this transaction */
  bookedBalanceAfter?: Maybe<Amount>;
  /** name of the counterparty. e.g Merchant name, Creditor name, Beneficiary Name ... */
  counterparty: Scalars['String']['output'];
  /** created date */
  createdAt: Scalars['DateTime']['output'];
  /** creditor information */
  creditor: InternalCreditTransferCreditor;
  /** debtor information */
  debtor: InternalCreditTransferDebtor;
  /** a date that reflects the execution date of a transaction from a user viewpoint. Can be used for sorting transactions. */
  executionDate: Scalars['DateTime']['output'];
  /**
   * an arbitrary identifier that was defined by you when you created this transaction.
   *
   * For example, you can define it in the CreditTransferInput mutation.
   */
  externalReference?: Maybe<Scalars['String']['output']>;
  /** unique identifier of the transaction */
  id: Scalars['ID']['output'];
  /** label */
  label: Scalars['String']['output'];
  /** origin transaction associated to this transaction */
  originTransaction?: Maybe<Transaction>;
  /** ID of the origin transaction associated to this transaction */
  originTransactionId?: Maybe<Scalars['String']['output']>;
  /** payment associated to this transaction */
  payment?: Maybe<Payment>;
  /** ID of the payment associated to this transaction */
  paymentId?: Maybe<Scalars['String']['output']>;
  /** payment method identifier used for this transaction. e.g masked PAN or IBAN or accountNumber */
  paymentMethodIdentifier: Scalars['String']['output'];
  /** payment product used for this transaction */
  paymentProduct: PaymentProduct;
  /** reference assigned by the initiating party, to unambiguously identify the transaction. This reference is passed on, unchanged, throughout the entire reference chain. */
  reference: Scalars['String']['output'];
  /** a date that reflects the time at which the user asked the transaction to be executed */
  requestedExecutionAt?: Maybe<Scalars['DateTime']['output']>;
  /** r-transaction reason */
  returnReason?: Maybe<TransactionReasonCode>;
  /** side (Credit or Debit) */
  side: TransactionSide;
  /** status information */
  statusInfo: TransactionStatusInfo;
  /** type */
  type: TransactionTypeEnum;
  /** updated date */
  updatedAt: Scalars['DateTime']['output'];
};

/** Internal Credit Transfer creditor */
export type InternalCreditTransferCreditor = {
  /** account number */
  accountNumber: Scalars['AccountNumber']['output'];
  /** full name of the Creditor */
  name: Scalars['String']['output'];
};

/** Internal Credit Transfer debtor */
export type InternalCreditTransferDebtor = {
  /** account number */
  accountNumber: Scalars['AccountNumber']['output'];
  /** full name of the debtor */
  name: Scalars['String']['output'];
};

/** Internal Credit Transfer creditor for Incoming transaction */
export type InternalCreditTransferInCreditor = InternalCreditTransferCreditor & {
  __typename: 'InternalCreditTransferInCreditor';
  /** account number */
  accountNumber: Scalars['AccountNumber']['output'];
  /** full name of the creditor */
  name: Scalars['String']['output'];
};

/** Internal Credit Transfer debtor for Incoming transaction */
export type InternalCreditTransferInDebtor = InternalCreditTransferDebtor & {
  __typename: 'InternalCreditTransferInDebtor';
  /** account number */
  accountNumber: Scalars['AccountNumber']['output'];
  /** full name of the creditor */
  name: Scalars['String']['output'];
};

/** Internal Credit Transfer creditor for Outgoing transaction */
export type InternalCreditTransferOutCreditor = InternalCreditTransferCreditor & {
  __typename: 'InternalCreditTransferOutCreditor';
  /** account number */
  accountNumber: Scalars['AccountNumber']['output'];
  /** full name of the creditor */
  name: Scalars['String']['output'];
};

/** Internal Credit Transfer debtor for Outgoing transaction */
export type InternalCreditTransferOutDebtor = InternalCreditTransferDebtor & {
  __typename: 'InternalCreditTransferOutDebtor';
  /** account number */
  accountNumber: Scalars['AccountNumber']['output'];
  /** full name of the creditor */
  name: Scalars['String']['output'];
};

/** InternalDirectDebitB2BMerchantPaymentMethod */
export type InternalDirectDebitB2BMerchantPaymentMethod = MerchantPaymentMethod & {
  __typename: 'InternalDirectDebitB2BMerchantPaymentMethod';
  /** Unique identifier tied to every version of a given Merchant Payment Method */
  id: Scalars['ID']['output'];
  /** Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type */
  methodId: Scalars['ID']['output'];
  /**
   * Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type
   * DEPRECATED use the methodId field instead.
   * @deprecated Use methodId instead
   */
  productId: Scalars['ID']['output'];
  /** Rolling Reserve applied to the Merchant Payment Method */
  rollingReserve?: Maybe<RollingReserve>;
  /** Status of the Merchant Payment Method */
  statusInfo: MerchantPaymentMethodStatusInfo;
  /** The Merchant Payment Method Type */
  type: MerchantPaymentMethodType;
  /** Date at which the Merchant Payment Method was last updated */
  updatedAt: Scalars['Date']['output'];
  /** Version of the Merchant Payment Method */
  version: Scalars['Int']['output'];
};

export type InternalDirectDebitB2BPaymentMethodInput = {
  /** If `true`, the Payment Method will be Pending Review */
  activate?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Internal Direct Debit Creditor */
export type InternalDirectDebitCreditor = {
  __typename: 'InternalDirectDebitCreditor';
  /** unique identifier of the creditor account */
  accountId: Scalars['ID']['output'];
};

/** Internal Direct Debit Debtor */
export type InternalDirectDebitDebtor = {
  __typename: 'InternalDirectDebitDebtor';
  /** unique identifier of the debtor account */
  accountId: Scalars['ID']['output'];
};

export type InternalDirectDebitMandate = {
  /** Unique identifier of the internal direct debit mandate, generated by Swan */
  id: Scalars['ID']['output'];
};

export type InternalDirectDebitPaymentCollectionInput = {
  /** ID of the concerned payment mandate */
  mandateId: Scalars['ID']['input'];
  /** Date at which the Swan merchant wishes the payment to be executed */
  requestedExecutionAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InternalDirectDebitSequence =
  | 'OneOff'
  | 'Recurring';

/** InternalDirectDebitStandardMerchantPaymentMethod */
export type InternalDirectDebitStandardMerchantPaymentMethod = MerchantPaymentMethod & {
  __typename: 'InternalDirectDebitStandardMerchantPaymentMethod';
  /** Unique identifier tied to every version of a given Merchant Payment Method */
  id: Scalars['ID']['output'];
  /** Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type */
  methodId: Scalars['ID']['output'];
  /**
   * Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type
   * DEPRECATED use the methodId field instead.
   * @deprecated Use methodId instead
   */
  productId: Scalars['ID']['output'];
  /** Rolling Reserve applied to the Merchant Payment Method */
  rollingReserve?: Maybe<RollingReserve>;
  /** Status of the Merchant Payment Method */
  statusInfo: MerchantPaymentMethodStatusInfo;
  /** The Merchant Payment Method Type */
  type: MerchantPaymentMethodType;
  /** Date at which the Merchant Payment Method was last updated */
  updatedAt: Scalars['Date']['output'];
  /** Version of the Merchant Payment Method */
  version: Scalars['Int']['output'];
};

export type InternalDirectDebitStandardPaymentMethodInput = {
  /** If `true`, the Payment Method will be Pending Review */
  activate?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Internal Direct Debit transaction */
export type InternalDirectDebitTransaction = Transaction & {
  __typename: 'InternalDirectDebitTransaction';
  /** matching account for the transaction */
  account?: Maybe<Account>;
  /** amount */
  amount: Amount;
  /** booked balance after this transaction */
  bookedBalanceAfter?: Maybe<Amount>;
  /** name of the counterparty. e.g Merchant name, Creditor name, Beneficiary Name ... */
  counterparty: Scalars['String']['output'];
  /** created date */
  createdAt: Scalars['DateTime']['output'];
  /** creditor information */
  creditor: InternalDirectDebitCreditor;
  /** debtor information */
  debtor: InternalDirectDebitDebtor;
  /** a date that reflects the execution date of a transaction from a user viewpoint. Can be used for sorting transactions. */
  executionDate: Scalars['DateTime']['output'];
  /**
   * an arbitrary identifier that was defined by you when you created this transaction.
   *
   * For example, you can define it in the CreditTransferInput mutation.
   */
  externalReference?: Maybe<Scalars['String']['output']>;
  /** unique identifier of the transaction */
  id: Scalars['ID']['output'];
  /** label */
  label: Scalars['String']['output'];
  /** matching Internal mandate for the transaction */
  mandate?: Maybe<InternalDirectDebitMandate>;
  /** origin transaction associated to this transaction */
  originTransaction?: Maybe<Transaction>;
  /** ID of the origin transaction associated to this transaction */
  originTransactionId?: Maybe<Scalars['String']['output']>;
  /** payment associated to this transaction */
  payment?: Maybe<Payment>;
  /** ID of the payment associated to this transaction */
  paymentId?: Maybe<Scalars['String']['output']>;
  /** payment method identifier used for this transaction: accountNumber */
  paymentMethodIdentifier: Scalars['String']['output'];
  /** payment product used for this transaction */
  paymentProduct: PaymentProduct;
  /** reference assigned by the initiating party, to unambiguously identify the transaction. This reference is passed on, unchanged, throughout the entire end-to-end chain. */
  reference: Scalars['String']['output'];
  /** a date that reflects the time at which the user asked the transaction to be executed */
  requestedExecutionAt?: Maybe<Scalars['DateTime']['output']>;
  /** reserved amount of the transaction computed with the rolling reserve. */
  reservedAmount?: Maybe<Amount>;
  /** date on which reserved funds become available. */
  reservedAmountReleasedAt?: Maybe<Scalars['DateTime']['output']>;
  /** r-transaction reason */
  returnReason?: Maybe<TransactionReasonCode>;
  /** side (Credit or Debit) */
  side: TransactionSide;
  /** status information */
  statusInfo: TransactionStatusInfo;
  /** type */
  type: TransactionTypeEnum;
  /** updated date */
  updatedAt: Scalars['DateTime']['output'];
};

/** Rejection returned on unexpected server error */
export type InternalErrorRejection = Rejection & {
  __typename: 'InternalErrorRejection';
  message: Scalars['String']['output'];
};

/** Payment direct debit mandate for Internal */
export type InternalPaymentDirectDebitMandate = InternalDirectDebitMandate & PaymentDirectDebitMandate & PaymentMandate & {
  __typename: 'InternalPaymentDirectDebitMandate';
  /** Account Holder information */
  accountHolder: AccountHolder;
  /** Creation date of the Internal Direct Debit Payment Mandate */
  createdAt: Scalars['DateTime']['output'];
  /** Internal Direct Debit Payment Mandate creditor information */
  creditor: InternalPaymentMandateCreditor;
  /** Internal Direct Debit Payment Mandate debtor information */
  debtor: InternalPaymentMandateDebtor;
  /** Date of the the last transaction executed for the concerned Internal Direct Debit Payment Mandate */
  executedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Expiry date of the Internal Direct Debit Payment Mandate */
  expiredAt?: Maybe<Scalars['Date']['output']>;
  /** Unique identifier of the Internal Direct Debit Payment Mandate */
  id: Scalars['ID']['output'];
  /** Language that will be used to produce the mandate PDF document */
  language: Scalars['String']['output'];
  /** Internal Direct Debit Payment Mandate PDF document URL */
  mandateDocumentUrl: Scalars['String']['output'];
  /** Custom name of the mandate */
  name?: Maybe<Scalars['String']['output']>;
  /** Unique reference of the Internal Direct Debit Payment Mandate */
  reference: Scalars['String']['output'];
  /** Internal Direct Debit Payment Mandate scheme */
  scheme: InternalPaymentMandateScheme;
  /** Internal Direct Debit Payment Mandate sequence */
  sequence: InternalPaymentMandateSequence;
  /** Signature date of the Internal Direct Debit Payment Mandate */
  signatureDate?: Maybe<Scalars['Date']['output']>;
  /** Internal Direct Debit Payment Mandate status information */
  statusInfo: PaymentMandateStatusInfo;
  /** List of transactions associated with the Internal Payment Direct Debit Mandate. */
  transactions?: Maybe<TransactionConnection>;
  /** Internal direct debit ultimate creditor name */
  ultimateCreditorName?: Maybe<Scalars['String']['output']>;
  /** Last Update date of the Internal Direct Debit Payment Mandate */
  updatedAt: Scalars['DateTime']['output'];
};


/** Payment direct debit mandate for Internal */
export type InternalPaymentDirectDebitMandateTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<TransactionsFiltersInput>;
  first?: Scalars['Int']['input'];
};

export type InternalPaymentMandateCreditor = PaymentMandateCreditor & {
  __typename: 'InternalPaymentMandateCreditor';
  /** Internal Direct Debit Payment Mandate creditor address */
  address: Address;
  /** Internal Direct Debit Payment Mandate creditor UUID */
  id: Scalars['ID']['output'];
  /** Internal Direct Debit Payment Mandate Creditor Idenfier */
  identifier: Scalars['ID']['output'];
  /** Internal Direct Debit Payment Mandate creditor name */
  name: Scalars['String']['output'];
};

export type InternalPaymentMandateDebtor = PaymentMandateDebtor & {
  __typename: 'InternalPaymentMandateDebtor';
  /** Internal Direct Debit Payment Mandate debtor address. Mandatory for non EEA Countries */
  accountId?: Maybe<Scalars['ID']['output']>;
  /** Internal Direct Debit Payment Mandate debtor address. Mandatory for non EEA Countries */
  address?: Maybe<Address>;
  /** Internal Direct Debit Payment Mandate debtor country */
  country: Scalars['CCA3']['output'];
  /** Internal Direct Debit Payment Mandate debtor e-mail */
  email: Scalars['String']['output'];
  /** Internal Direct Debit Payment Mandate debtor name */
  name: Scalars['String']['output'];
};

export type InternalPaymentMandateScheme =
  /** Internal Direct Debit B2B */
  | 'InternalDirectDebitB2b'
  /** Internal Direct Debit Standard */
  | 'InternalDirectDebitStandard';

/** Internal Direct Debit Payment Mandate Sequence */
export type InternalPaymentMandateSequence =
  /** The Internal Direct Debit Payment Mandate can be used only once */
  | 'OneOff'
  /** The Internal Direct Debit Payment Mandate can be used for recurrent collections */
  | 'Recurring';

/** Received direct debit mandate for SEPA */
export type InternalReceivedDirectDebitMandate = InternalDirectDebitMandate & ReceivedDirectDebitMandate & {
  __typename: 'InternalReceivedDirectDebitMandate';
  /** Account of the received internal direct debit mandate debtor */
  account?: Maybe<Account>;
  /** Creation date of the received internal direct debit mandate */
  createdAt: Scalars['DateTime']['output'];
  /** Received internal direct debit creditor */
  creditor: InternalReceivedDirectDebitMandateCreditor;
  /** Date of the last internal direct debit transaction executed for the concerned received internal direct debit mandate */
  executedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Expiry date of the received internal direct debit mandate, computed automatically (36 months from the executedAt date) */
  expiredAt?: Maybe<Scalars['Date']['output']>;
  /** Iban of the received internal direct debit mandate debtor */
  iban: Scalars['IBAN']['output'];
  /** Unique identifier of the received internal direct debit mandate, generated by Swan */
  id: Scalars['ID']['output'];
  /** Mandate name */
  name?: Maybe<Scalars['String']['output']>;
  /** Received internal direct debit Unique Mandate Reference (UMR) */
  reference: Scalars['String']['output'];
  /** Received internal direct debit mandate scheme */
  scheme: InternalReceivedDirectDebitMandateScheme;
  /** Received internal direct debit mandate sequence */
  sequence: InternalReceivedDirectDebitMandateSequence;
  /** Date of signature of the received internal direct debit mandate */
  signatureDate?: Maybe<Scalars['Date']['output']>;
  /** Mandate status information of the received internal direct debit mandate */
  statusInfo: ReceivedDirectDebitMandateStatusInfo;
  /** List of transactions associated with the Internal Receive Direct Debit Mandate. */
  transactions?: Maybe<TransactionConnection>;
  /** Received internal direct debit ultimate creditor name */
  ultimateCreditorName?: Maybe<Scalars['String']['output']>;
  /** Last Update date of the received internal direct debit mandate */
  updatedAt: Scalars['DateTime']['output'];
  /** Version of the received internal direct debit mandate */
  version: Scalars['String']['output'];
};


/** Received direct debit mandate for SEPA */
export type InternalReceivedDirectDebitMandateTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<TransactionsFiltersInput>;
  first?: Scalars['Int']['input'];
};

/** Internal received direct debit mandate creditor */
export type InternalReceivedDirectDebitMandateCreditor = {
  __typename: 'InternalReceivedDirectDebitMandateCreditor';
  /** Address of the creditor */
  address: Address;
  /** Creditor identifier */
  identifier: Scalars['String']['output'];
  /** Name of the creditor */
  name: Scalars['String']['output'];
};

/** Received internal direct debit mandate scheme */
export type InternalReceivedDirectDebitMandateScheme =
  /** When the received internal direct debit mandate can only be used for internal B2B direct debit transactions */
  | 'InternalDirectDebitB2b'
  /** When the received internal direct debit mandate can only be used for internal Standard direct debit transactions */
  | 'InternalDirectDebitStandard';

/** Internal received direct debit mandate sequence */
export type InternalReceivedDirectDebitMandateSequence =
  /** When the authorisation is given once by the Debtor to collect only one single internal direct debit */
  | 'OneOff'
  /** When the authorisation by the Debtor can be used for regular internal direct debits initiated by the Creditor */
  | 'Recurrent';

/** Address of an international beneficiary */
export type InternationalAddressInput = {
  /** Address 1 */
  address1?: InputMaybe<Scalars['String']['input']>;
  /** City */
  city?: InputMaybe<Scalars['String']['input']>;
  /** Country */
  country?: InputMaybe<Scalars['String']['input']>;
  /** State */
  state?: InputMaybe<Scalars['String']['input']>;
  /** Zip Code */
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

/** International Beneficiary Details */
export type InternationalBeneficiaryDetailsInput = {
  /** Key */
  key: Scalars['String']['input'];
  /** Value */
  value: Scalars['String']['input'];
};

/**
 * *COMING SOON*
 * International Beneficiary Dynamic Forms
 */
export type InternationalBeneficiaryDynamicForms = {
  __typename: 'InternationalBeneficiaryDynamicForms';
  /**
   * *COMING SOON*
   * Schemes
   */
  schemes: Array<Scheme>;
};

/**
 * *COMING SOON*
 * International Beneficiary
 */
export type InternationalBeneficiaryInput = {
  /** Currency of the international beneficiary account */
  currency: Scalars['Currency']['input'];
  /**
   * *COMING SOON*
   * Currency-specific details of the beneficiary
   */
  details: Array<InternationalBeneficiaryDetailsInput>;
  /** Account holder name */
  name: Scalars['String']['input'];
  /**
   * *COMING SOON*
   * Route that Wise will use to transfer the funds
   */
  route: InternationalCreditTransferRouteInput;
};

/** International Currency Exchange / Quote */
export type InternationalCreditTransferCurrencyExchange = {
  __typename: 'InternationalCreditTransferCurrencyExchange';
  /** Rate of the quote */
  exchangeRate: Scalars['String']['output'];
  /** Fees */
  feesAmount: Amount;
  /** Source amount of the quote */
  sourceAmount: Amount;
  /** target amount of the quote */
  targetAmount: Amount;
};

/** International Credit Transfer - Currency-specific details of the beneficiary */
export type InternationalCreditTransferDetails = {
  __typename: 'InternationalCreditTransferDetails';
  /** Key */
  key: Scalars['String']['output'];
  /** Value */
  value: Scalars['String']['output'];
};

/**
 * *COMING SOON*
 * International Credit Transfer Details
 */
export type InternationalCreditTransferDetailsInput = {
  /**
   * *COMING SOON*
   * Key
   */
  key: Scalars['String']['input'];
  /**
   * *COMING SOON*
   * Value
   */
  value: Scalars['String']['input'];
};

/** Language: ISO 639-1 language code */
export type InternationalCreditTransferDisplayLanguage =
  /** German */
  | 'de'
  /** British English */
  | 'en'
  /** Spanish */
  | 'es'
  /** French */
  | 'fr'
  /** Italian */
  | 'it'
  /** Dutch */
  | 'nl'
  /** Portuguese */
  | 'pt';

/**
 * *COMING SOON*
 * International Credit Transfer Dynamic Form
 */
export type InternationalCreditTransferDynamicForm = {
  __typename: 'InternationalCreditTransferDynamicForm';
  /** List of international transaction fields */
  fields: Array<Field>;
  /**
   * *COMING SOON*
   * Number of fields that need to be updated to fill the form completely. Please re run the query internationalCreditTransferTransactionDetailsDynamicForm with updated refreshableFields if the value of this field is not 0
   */
  remainingFieldsToRefreshCount: Scalars['Int']['output'];
};

/** International Credit Transfer Out - Creditor info */
export type InternationalCreditTransferOutCreditor = {
  __typename: 'InternationalCreditTransferOutCreditor';
  /** Currency of the international beneficiary account */
  currency: Scalars['Currency']['output'];
  /** Currency-specific details of the beneficiary */
  details: Array<InternationalCreditTransferDetails>;
  /** Account holder name */
  name: Scalars['String']['output'];
  /** Route that Wise will use to transfer the funds */
  route: InternationalCreditTransferRoute;
};

/** International Credit Transfer Out - Debtor info */
export type InternationalCreditTransferOutDebtor = {
  __typename: 'InternationalCreditTransferOutDebtor';
  name: Scalars['String']['output'];
};

/**
 * *COMING SOON*
 * International Quote
 */
export type InternationalCreditTransferQuote = {
  __typename: 'InternationalCreditTransferQuote';
  /** Rate of the quote */
  exchangeRate: Scalars['String']['output'];
  /** Fees */
  feesAmount: Amount;
  /** Source amount of the quote */
  sourceAmount: Amount;
  /** target amount of the quote */
  targetAmount: Amount;
};

/** International Credit Transfer Route */
export type InternationalCreditTransferRoute =
  /** American ACH for low-value payments */
  | 'Aba'
  /** Argentinian local route */
  | 'Argentina'
  /** Australian local route */
  | 'Australian'
  /** Australian local route Bpay usually used for bill payments */
  | 'AustralianBpay'
  /** Brazilian local route */
  | 'Brazil'
  /** Canadian local route */
  | 'Canadian'
  /** Chilean local route */
  | 'Chile'
  /** Costa Rican local route */
  | 'CostaRica'
  /** Czech local route */
  | 'Czech'
  /** Emirate local route */
  | 'Emirates'
  /** American credit transfers service for large-value and time-critical payments */
  | 'FedwireLocal'
  /** M-PAiSA */
  | 'FijiMobile'
  /** Faster Payment System */
  | 'HongKongFps'
  /** Hong Kong's local route */
  | 'Hongkong'
  /** Hungarian local route */
  | 'Hungarian'
  /** Local route using an IBAN as recipient account identifier */
  | 'Iban'
  /** Indian local route */
  | 'Indian'
  /** Indian instant payment system Unified Payments Interface */
  | 'IndianUpi'
  /** Canadian payment network Interac */
  | 'Interac'
  /** Israeli local route */
  | 'IsraeliLocal'
  /** Kenyan local route */
  | 'KenyaLocal'
  /** Kenyan mobile payment network M-PESA */
  | 'KenyaMobile'
  /** Malaysian local route */
  | 'Malaysian'
  /** Malaysian payment network DuitNow */
  | 'MalaysianDuitnow'
  /** Mexican local route */
  | 'Mexican'
  /** Moroccan local route */
  | 'Morocco'
  /** Nepalese local route */
  | 'Nepal'
  /** New Zealand local route */
  | 'NewZealand'
  /** Filipino local route */
  | 'Philippines'
  /** Filipino mobile payment network */
  | 'PhilippinesMobile'
  /** Polish local route */
  | 'Polish'
  /** Ukranian local route */
  | 'PrivatBank'
  /** Singapore local route */
  | 'Singapore'
  /** Singapore mobile payment network PayNow */
  | 'SingaporePaynow'
  /** British local route */
  | 'SortCode'
  /** South African local route */
  | 'SouthAfrica'
  /** South Korean payment network Paygate */
  | 'SouthKoreanPaygate'
  /** South Korean payment network Paygate for corporates */
  | 'SouthKoreanPaygateBusiness'
  /** Swift */
  | 'SwiftCode'
  /** Thai local route */
  | 'Thailand'
  /** Turkish local route */
  | 'TurkishEarthport'
  /** Unknown route */
  | 'Unknown';

/** International Credit Transfer Route */
export type InternationalCreditTransferRouteInput =
  /** American ACH for low-value payments */
  | 'Aba'
  /** Argentinian local route */
  | 'Argentina'
  /** Australian local route */
  | 'Australian'
  /** Australian local route Bpay usually used for bill payments */
  | 'AustralianBpay'
  /** Brazilian local route */
  | 'Brazil'
  /** Canadian local route */
  | 'Canadian'
  /** Chilean local route */
  | 'Chile'
  /** Costa Rican local route */
  | 'CostaRica'
  /** Czech local route */
  | 'Czech'
  /** Emirate local route */
  | 'Emirates'
  /** American credit transfers service for large-value and time-critical payments */
  | 'FedwireLocal'
  /** M-PAiSA */
  | 'FijiMobile'
  /** Faster Payment System */
  | 'HongKongFps'
  /** Hong Kong's local route */
  | 'Hongkong'
  /** Hungarian local route */
  | 'Hungarian'
  /** Local route using an IBAN as recipient account identifier */
  | 'Iban'
  /** Indian local route */
  | 'Indian'
  /** Indian instant payment system Unified Payments Interface */
  | 'IndianUpi'
  /** Canadian payment network Interac */
  | 'Interac'
  /** Israeli local route */
  | 'IsraeliLocal'
  /** Kenyan local route */
  | 'KenyaLocal'
  /** Kenyan mobile payment network M-PESA */
  | 'KenyaMobile'
  /** Malaysian local route */
  | 'Malaysian'
  /** Malaysian payment network DuitNow */
  | 'MalaysianDuitnow'
  /** Mexican local route */
  | 'Mexican'
  /** Moroccan local route */
  | 'Morocco'
  /** Nepalese local route */
  | 'Nepal'
  /** New Zealand local route */
  | 'NewZealand'
  /** Filipino local route */
  | 'Philippines'
  /** Filipino mobile payment network */
  | 'PhilippinesMobile'
  /** Polish local route */
  | 'Polish'
  /** Ukranian local route */
  | 'PrivatBank'
  /** Singapore local route */
  | 'Singapore'
  /** Singapore mobile payment network PayNow */
  | 'SingaporePaynow'
  /** British local route */
  | 'SortCode'
  /** South African local route */
  | 'SouthAfrica'
  /** South Korean payment network Paygate */
  | 'SouthKoreanPaygate'
  /** South Korean payment network Paygate for corporates */
  | 'SouthKoreanPaygateBusiness'
  /** Swift */
  | 'SwiftCode'
  /** Thai local route */
  | 'Thailand'
  /** Turkish local route */
  | 'TurkishEarthport';

export type InternationalCreditTransferTransaction = Transaction & {
  __typename: 'InternationalCreditTransferTransaction';
  /** matching account for this transaction */
  account?: Maybe<Account>;
  /** amount */
  amount: Amount;
  /** booked balance after this transaction */
  bookedBalanceAfter?: Maybe<Amount>;
  /** name of the counterparty. e.g Merchant name, Creditor name, Beneficiary Name ... */
  counterparty: Scalars['String']['output'];
  /** created date */
  createdAt: Scalars['DateTime']['output'];
  /** creditor information */
  creditor: InternationalCreditTransferOutCreditor;
  /** quote given by our international provider */
  currencyExchange: InternationalCreditTransferCurrencyExchange;
  /** debtor information */
  debtor: InternationalCreditTransferOutDebtor;
  /** a date that reflects the execution date of a transaction from a user viewpoint. Can be used for sorting transactions. */
  executionDate: Scalars['DateTime']['output'];
  /**
   * an arbitrary identifier that was defined by you when you created this transaction.
   *
   * For example, you can define it in the CreditTransferInput mutation.
   */
  externalReference?: Maybe<Scalars['String']['output']>;
  /** @deprecated(reason: "use `quote.feesAmount` instead") */
  fees?: Maybe<Amount>;
  /** unique identifier of the transaction */
  id: Scalars['ID']['output'];
  /** label */
  label: Scalars['String']['output'];
  /** origin transaction associated to this transaction */
  originTransaction?: Maybe<Transaction>;
  /** ID of the origin transaction associated to this transaction */
  originTransactionId?: Maybe<Scalars['String']['output']>;
  /** payment associated to this transaction */
  payment?: Maybe<Payment>;
  /** ID of the payment associated to this transaction */
  paymentId?: Maybe<Scalars['String']['output']>;
  /** payment method identifier used for this transaction. e.g masked PAN or IBAN or accountNumber */
  paymentMethodIdentifier: Scalars['String']['output'];
  /** payment product used for this transaction */
  paymentProduct: PaymentProduct;
  /** external identifier of the transaction */
  reference: Scalars['String']['output'];
  /** a date that reflects the time at which the user asked the transaction to be executed */
  requestedExecutionAt?: Maybe<Scalars['DateTime']['output']>;
  /** side (Credit or Debit) */
  side: TransactionSide;
  /** status information */
  statusInfo: TransactionStatusInfo;
  /** type */
  type: TransactionTypeEnum;
  /** updated date */
  updatedAt: Scalars['DateTime']['output'];
};

/** Rejection returned on invalid argument error */
export type InvalidArgumentRejection = Rejection & {
  __typename: 'InvalidArgumentRejection';
  code: InvalidArgumentRejectionCode;
  fields: Array<InvalidArgumentRejectionField>;
  message: Scalars['String']['output'];
};

export type InvalidArgumentRejectionCode =
  | 'INVALID_INPUT';

export type InvalidArgumentRejectionField = {
  __typename: 'InvalidArgumentRejectionField';
  errors: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

/** Information about the invalidity of the IBAN */
export type InvalidIban = {
  __typename: 'InvalidIban';
  /** Enum that can be used to discriminate on the error */
  code: InvalidIbanCode;
  /** Iban from input */
  iban: Scalars['IBAN']['output'];
  /** Message that give a bit of context during development */
  message: Scalars['String']['output'];
};

/** InvalidIbanCode */
export type InvalidIbanCode =
  /** We do not know the banking institution referenced in this IBAN. */
  | 'InvalidBank'
  /** The IBAN does not verify the mod97 algorithm */
  | 'InvalidChecksum'
  /** Iban is either too short (<2) or does not match this country's specified length */
  | 'InvalidLength'
  /** We do not know this IBAN Structure (Meaning that the country code is probably wrong) */
  | 'InvalidStructure';

/** Describes an invalid identification level for the process associated to this identification, and the invalid reason can be accessed */
export type InvalidIdentificationLevelStatusInfo = {
  __typename: 'InvalidIdentificationLevelStatusInfo';
  /** The reasons why this identification level is invalid */
  reasons?: Maybe<Array<IdentificationInvalidReason>>;
  /** Always set to `Invalid` */
  status: SwanIdentificationStatus;
};

/** Rejection returned if phone number is not well formatted */
export type InvalidPhoneNumberRejection = Rejection & {
  __typename: 'InvalidPhoneNumberRejection';
  message: Scalars['String']['output'];
};

/** Rejection returned if siren number is not well formatted */
export type InvalidSirenNumberRejection = Rejection & {
  __typename: 'InvalidSirenNumberRejection';
  message: Scalars['String']['output'];
};

/** Invoice */
export type Invoice = {
  __typename: 'Invoice';
  /** account id */
  accountId: Scalars['ID']['output'];
  /** due amount */
  amount: Amount;
  /** ending date of the billing window */
  closingDate: Scalars['DateTime']['output'];
  /** creation date */
  createdAt: Scalars['DateTime']['output'];
  /** date at which the link will not be useable anymore */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** unique id */
  id: Scalars['ID']['output'];
  /** name of the invoice */
  name: Scalars['String']['output'];
  /** starting date of the billing window */
  openingDate: Scalars['DateTime']['output'];
  /** status of the invoice */
  status: InvoiceStatus;
  /** type of the invoice */
  type: InvoiceType;
  /** last update date */
  updatedAt: Scalars['DateTime']['output'];
  /** temporary public url on which the file can be accessible */
  url?: Maybe<Scalars['String']['output']>;
};

/** Please see the Connection interface */
export type InvoiceConnection = Connection & {
  __typename: 'InvoiceConnection';
  edges: Array<InvoiceEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Please see the Edge interface */
export type InvoiceEdge = Edge & {
  __typename: 'InvoiceEdge';
  cursor: Scalars['String']['output'];
  node: Invoice;
};

/** The different statuses of invoice */
export type InvoiceStatus =
  | 'Failed'
  | 'NotPaid'
  | 'Paid'
  | 'PaymentDue'
  | 'Pending'
  | 'Voided';

export type InvoiceType =
  | 'Invoice'
  | 'RefundNote';

export type Language =
  | 'de'
  | 'en'
  | 'es'
  | 'fr'
  | 'it'
  | 'nl';

export type LegalDocument = {
  __typename: 'LegalDocument';
  /** ID of the legal document */
  id: Scalars['ID']['output'];
  /** Language of the Legal Document */
  language: AccountLanguage;
  /** Status of the Legal Document */
  statusInfo: LegalDocumentStatusInfo;
  /** Type of the legal document */
  type: LegalDocumentType;
  /** Url to download the Document */
  url: Scalars['String']['output'];
};

export type LegalDocumentActiveStatusInfo = LegalDocumentStatusInfo & {
  __typename: 'LegalDocumentActiveStatusInfo';
  /** Activation date */
  activatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Creation date */
  createdAt: Scalars['DateTime']['output'];
  /** LegalDocument status (always Active for type LegalDocumentActiveStatusInfo) */
  status: LegalDocumentStatus;
};

export type LegalDocumentConnection = Connection & {
  __typename: 'LegalDocumentConnection';
  /** LegalDocumentEdge list */
  edges: Array<LegalDocumentEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars['Int']['output'];
};

export type LegalDocumentEdge = Edge & {
  __typename: 'LegalDocumentEdge';
  /** Opaque identifier pointing to this node in the pagination mechanism */
  cursor: Scalars['String']['output'];
  /** The account membership */
  node: LegalDocument;
};

export type LegalDocumentInactiveStatusInfo = LegalDocumentStatusInfo & {
  __typename: 'LegalDocumentInactiveStatusInfo';
  /** Activation date */
  activatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Creation date */
  createdAt: Scalars['DateTime']['output'];
  /** Deactivation date */
  deactivatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** LegalDocument status (always Inactive for type LegalDocumentInactiveStatusInfo) */
  status: LegalDocumentStatus;
};

export type LegalDocumentStatus =
  /** When the LegalDocument is currently active on the account */
  | 'Active'
  /** When the LegalDocument is no more active on the account */
  | 'Inactive'
  /** When the LegalDocument will be the next active on the account */
  | 'Upcoming';

export type LegalDocumentStatusInfo = {
  /** LegalDocument Status */
  status: LegalDocumentStatus;
};

export type LegalDocumentType =
  /** Swan Terms & Conditions of Use */
  | 'SwanTCU';

export type LegalDocumentUpcomingStatusInfo = LegalDocumentStatusInfo & {
  __typename: 'LegalDocumentUpcomingStatusInfo';
  /** Creation date */
  createdAt: Scalars['DateTime']['output'];
  /** Date when the LegalDocument will be activated */
  effectiveDate?: Maybe<Scalars['DateTime']['output']>;
  /** LegalDocument status (always Upcoming for type LegalDocumentUpcomingStatusInfo) */
  status: LegalDocumentStatus;
};

export type LegalDocumentsFilterInput = {
  status?: InputMaybe<LegalDocumentStatus>;
};

export type LegalRepresentativeAccountMembershipCannotBeDisabledRejection = Rejection & {
  __typename: 'LegalRepresentativeAccountMembershipCannotBeDisabledRejection';
  accountMembershipId: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type LegalRepresentativeAccountMembershipCannotBeSuspendedRejection = Rejection & {
  __typename: 'LegalRepresentativeAccountMembershipCannotBeSuspendedRejection';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Language: ISO 639-1 language code */
export type MandateLanguage =
  | 'de'
  | 'en'
  | 'es'
  | 'fr'
  | 'it'
  | 'nl';

export type MembershipInfoInput = {
  /** `true` if this account membership can initiate payments */
  canInitiatePayments: Scalars['Boolean']['input'];
  /** `true` if this account membership can invite, update, suspend or resume account membership */
  canManageAccountMembership: Scalars['Boolean']['input'];
  /** `true` if this account membership can add or canceled beneficiaries */
  canManageBeneficiaries: Scalars['Boolean']['input'];
  /** `true` if this account membership can manage cards for himself or to the memberships he manages */
  canManageCards?: InputMaybe<Scalars['Boolean']['input']>;
  /** `true` if this account membership can view account balances and transactions history */
  canViewAccount: Scalars['Boolean']['input'];
  /** Email address */
  email: Scalars['String']['input'];
  /** Residency address of the member to be added */
  residencyAddress?: InputMaybe<ResidencyAddressInput>;
  /** Restricted to a user if necessary */
  restrictedTo: RestrictedToInput;
  /** Tax Identification Number of the user added */
  taxIdentificationNumber?: InputMaybe<Scalars['String']['input']>;
};

/** Filters that can be applied when listing accounts (Only applied in user context) */
export type MembershipsFilterInput = {
  /** Can the user initiate payments on this account */
  canInitiatePayments?: InputMaybe<Scalars['Boolean']['input']>;
  /** Can the user manage account membership */
  canManageAccountMembership?: InputMaybe<Scalars['Boolean']['input']>;
  /** Can the user manage beneficiaries */
  canManageBeneficiaries?: InputMaybe<Scalars['Boolean']['input']>;
  /** `true` if this account membership can manage cards for himself or to the memberships he manages */
  canManageCards?: InputMaybe<Scalars['Boolean']['input']>;
  /** Can the user view account */
  canViewAccount?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filtered by email */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Filtered by first name */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Filtered by last name */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Searches email, first name, last name, and id */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Account memberships status/statuses we're looking for */
  status?: InputMaybe<Array<AccountMembershipStatus>>;
};

/** MerchantCategoryDescription */
export type MerchantCategoryDescription =
  | 'AccessoryAndApparelStoresMiscellaneous'
  | 'AccountingAuditingAndBookkeepingServices'
  | 'AdvertisingServices'
  | 'AgriculturalCooperatives'
  | 'AirCarriersAirlinesNotElsewhereClassified'
  | 'AirConditioningAndRefrigerationRepairShops'
  | 'AirConditioningHeatingAndPlumbingContractors'
  | 'AirlinesAirCarriers'
  | 'AirportsAirportTerminalsFlyingFields'
  | 'AlterationsMendingSeamstressesTailors'
  | 'AmbulanceServices'
  | 'AmusementParksCarnivalsCircusesFortuneTellers'
  | 'AntiqueReproductionStores'
  | 'AntiqueShopsSalesRepairsAndRestorationServices'
  | 'ApplianceRepairShopsElectricalAndSmall'
  | 'AquariumsDolphinariumsZoosAndSeaquariums'
  | 'ArchitecturalEngineeringAndSurveyingServices'
  | 'ArtDealersAndGalleries'
  | 'ArtistSupplyStoresCraftShops'
  | 'AssociationsCivicSocialAndFraternal'
  | 'AthleticFieldsCommercialSportsProfessionalSportsClubsSportsPromoters'
  | 'AttorneysLegalServices'
  | 'AutoStoreHomeSupplyStores'
  | 'AutomatedCashDisbursementsCustomerFinancialInstitution'
  | 'AutomobileAndTruckDealersSalesServiceRepairsPartsAndLeasing'
  | 'AutomobileAndTruckDealersUsedOnlySales'
  | 'AutomobileAssociations'
  | 'AutomobileParkingLotsAndGarages'
  | 'AutomobileRentalAgencyNotElsewhereClassified'
  | 'AutomotiveBodyRepairShops'
  | 'AutomotivePaintShops'
  | 'AutomotivePartsAccessoriesStores'
  | 'AutomotiveServiceShops'
  | 'AutomotiveTireStores'
  | 'BailAndBondPayments'
  | 'Bakeries'
  | 'BandsOrchestrasAndMiscellaneousEntertainersNotElsewhereClassified'
  | 'BarberAndBeautyShops'
  | 'BarsCocktailLoungesDiscothequesNightclubsAndTavernsDrinkingPlacesAlcoholicBeverages'
  | 'BicycleShopsSalesAndService'
  | 'BoatDealers'
  | 'BoatLeasesAndBoatRentals'
  | 'BookStores'
  | 'BooksPeriodicalsAndNewspapers'
  | 'BowlingAlleys'
  | 'BridgeAndRoadFeesTolls'
  | 'BuildingMaterialsLumberStores'
  | 'BusLines'
  | 'BusinessServicesNotElsewhereClassified'
  | 'BuyingOrShoppingClubsServices'
  | 'CableSatelliteAndOtherPayTelevisionAndRadioServices'
  | 'CameraAndPhotographicSupplyStores'
  | 'CamperDealersRecreationalAndUtilityTrailers'
  | 'CampgroundsAndTrailerParks'
  | 'CandyNutConfectioneryStores'
  | 'CarRentalAgencies'
  | 'CarWashes'
  | 'CardGiftNoveltyAndSouvenirShops'
  | 'CarpentryContractors'
  | 'CarpetAndUpholsteryCleaning'
  | 'Caterers'
  | 'ChemicalsAndAlliedProductsNotElsewhereClassified'
  | 'ChildCareServices'
  | 'ChildrenAndInfantsWearStores'
  | 'ChiropodistsPodiatrists'
  | 'Chiropractors'
  | 'CigarStoresAndStands'
  | 'CleaningAndMaintenanceJanitorialServices'
  | 'CleaningGarmentAndLaundryServices'
  | 'ClockJewelryAndWatchRepairShops'
  | 'ClockJewelryWatchAndSilverwareStore'
  | 'ClothingRentalCostumesUniformsAndFormalWear'
  | 'ClubsCountryClubsMembershipAthleticRecreationSportsPrivateGolfCourses'
  | 'CollegesUniversitiesProfessionalSchoolsAndJuniorColleges'
  | 'CommercialArtGraphicsPhotography'
  | 'CommercialEquipmentNotElsewhereClassified'
  | 'CommercialFootwear'
  | 'ComputerMaintenanceRepairAndServicesNotElsewhereClassified'
  | 'ComputerNetworkOrInformationServices'
  | 'ComputerProgrammingDataProcessingAndIntegratedSystemsDesignServices'
  | 'ComputerSoftwareStores'
  | 'ComputersComputerPeripheralEquipmentSoftware'
  | 'ConcreteWorkContractors'
  | 'ConstructionMaterialsNotElsewhereClassified'
  | 'ConsultingManagementAndPublicRelationsServices'
  | 'ConsumerCreditReportingAgencies'
  | 'ContractorsSpecialTradeNotElsewhereClassified'
  | 'CosmeticStores'
  | 'CourierServiceAirAndGroundFreightForwarders'
  | 'CourtCostsIncludingAlimonyAndChildSupport'
  | 'CruiseLines'
  | 'CrystalAndGlasswareStores'
  | 'DairyProductsStores'
  | 'DanceHallsSchoolsAndStudios'
  | 'DatingServices'
  | 'DebtMarriagePersonalCounselingService'
  | 'DentalAndMedicalLaboratories'
  | 'DentalLaboratoryMedicalOphthalmicHospitalEquipmentAndSupplies'
  | 'DentistsOrthodontists'
  | 'DepartmentStores'
  | 'DetectiveAgenciesProtectiveAgenciesSecurityServicesIncludingArmoredCarsGuardDogs'
  | 'DigitalGoodsAudiovisualMediaIncludingBooksMoviesAndMusic'
  | 'DigitalGoodsGames'
  | 'DigitalGoodsMultiCategory'
  | 'DigitalGoodsSoftwareApplicationsExcludingGames'
  | 'DirectMarketingCatalogMerchants'
  | 'DirectMarketingCombinationCatalogAndRetailMerchants'
  | 'DirectMarketingContinuitySubscriptionMerchants'
  | 'DirectMarketingInboundTelemarketingMerchants'
  | 'DirectMarketingInsuranceServices'
  | 'DirectMarketingOtherDirectMarketersNotElsewhereClassified'
  | 'DirectMarketingOutboundTelemarketingMerchants'
  | 'DirectMarketingTravelRelatedArrangementServices'
  | 'DiscountStores'
  | 'DoctorsNotElsewhereClassified'
  | 'DoorToDoorSales'
  | 'DraperyUpholsteryAndWindowCoveringsStores'
  | 'DrugStoresPharmacies'
  | 'DrugsDrugProprietorsAndDruggistsSundries'
  | 'DryCleaners'
  | 'DurableGoodsNotElsewhereClassified'
  | 'DutyFreeStores'
  | 'EatingPlacesRestaurants'
  | 'ElectricRazorStoresSalesAndService'
  | 'ElectricVehicleCharging'
  | 'ElectricalContractors'
  | 'ElectricalPartsAndEquipment'
  | 'ElectronicRepairShops'
  | 'ElectronicSales'
  | 'EmploymentAgenciesTemporaryHelpServices'
  | 'EquipmentFurnitureAndHomeFurnishingsStoresExceptAppliances'
  | 'EquipmentRentalAndLeasingServicesFurnitureRentalToolRental'
  | 'ExterminatingAndDisinfectingServices'
  | 'FabricNeedleworkPieceGoodsAndSewingStores'
  | 'FamilyClothingStores'
  | 'FastFoodRestaurants'
  | 'Fines'
  | 'FireplaceFireplaceScreensAndAccessoriesStores'
  | 'FloorCoveringStores'
  | 'Florists'
  | 'FloristsSuppliesNurseryStockAndFlowers'
  | 'FreezerLockerMeatProvisioners'
  | 'FuelDealersCoalFuelOilLiquefiedPetroleumWood'
  | 'FuelDispenserAutomated'
  | 'FuneralServiceAndCrematories'
  | 'FurnitureReupholsteryAndRepairRefinishing'
  | 'FurriersAndFurShops'
  | 'GamblingTransactions'
  | 'GameToyAndHobbyShops'
  | 'GeneralContractorsResidentialAndCommercial'
  | 'GlassPaintWallpaperStores'
  | 'GolfCoursesPublic'
  | 'GovernmentLicensedHorseOrDogRacingUSRegionOnly'
  | 'GovernmentOwnedLotterySpecificCountries'
  | 'GovernmentOwnedLotteryUSRegionOnly'
  | 'GovernmentServicesNotElsewhereClassified'
  | 'GroceryStoresSupermarkets'
  | 'HardwareEquipmentAndSupplies'
  | 'HardwareStores'
  | 'HatCleaningShopsShoeRepairShopsShoeShineParlors'
  | 'HealthAndBeautySpas'
  | 'HealthPractitionersMedicalServicesNotElsewhereClassified'
  | 'HearingAidsSalesServiceSupplyStores'
  | 'HomeSupplyWarehouseStores'
  | 'HorticulturalAndLandscapingServices'
  | 'Hospitals'
  | 'HouseholdApplianceStores'
  | 'IndustrialSuppliesNotElsewhereClassified'
  | 'InformationRetrievalServices'
  | 'InsulationMasonryPlasteringStoneworkAndTileSettingContractors'
  | 'InsuranceSalesUnderwritingAndPremiums'
  | 'InternetGamblingUSRegionOnly'
  | 'IntraGovernmentPurchasesGovernmentOnly'
  | 'KeyEntryTelecomMerchantProvidingSingleLocalAndLongDistancePhoneCallsUsingACentralAccessNumberInANonFaceToFaceEnvironmentUsingKeyEntry'
  | 'LaundryServicesFamilyAndCommercial'
  | 'LawnAndGardenSupplyStores'
  | 'LeatherGoodsAndLuggageStores'
  | 'LimousinesAndTaxicabs'
  | 'LodgingHotelsMotelsResorts'
  | 'LodgingHotelsMotelsResortsNotElsewhereClassified'
  | 'ManualCashDisbursementsCustomerFinancialInstitution'
  | 'MarinasMarineServiceSupplies'
  | 'MassageParlors'
  | 'MenAndBoysClothingAndAccessoriesStores'
  | 'MenAndWomenClothingStores'
  | 'MenWomenAndChildrenUniformsAndCommercialClothing'
  | 'MerchandiseAndServicesCustomerFinancialInstitution'
  | 'MetalServiceCentersAndOffices'
  | 'MiscellaneousAndSpecialtyRetailStores'
  | 'MiscellaneousAutomotiveAircraftAndFarmEquipmentDealersNotElsewhereClassified'
  | 'MiscellaneousFoodStoresConvenienceStoresMarketsSpecialtyStores'
  | 'MiscellaneousGeneralMerchandiseStores'
  | 'MiscellaneousHouseFurnishingSpecialtyShops'
  | 'MiscellaneousPublishingAndPrinting'
  | 'MiscellaneousRepairShopsAndRelatedServices'
  | 'MobileHomeDealers'
  | 'MoneySendFunding'
  | 'MoneySendInterCountry'
  | 'MoneySendIntraCountry'
  | 'MoneyTransfer'
  | 'MotionPictureAndVideoTapeProductionAndDistribution'
  | 'MotionPictureTheaters'
  | 'MotorFreightCarriersTruckingLocalLongDistanceMovingAndStorageCompaniesLocalDelivery'
  | 'MotorHomeAndRecreationalVehicleRental'
  | 'MotorHomeDealers'
  | 'MotorVehicleSuppliesAndNewParts'
  | 'MotorcycleShopsAndDealers'
  | 'MusicStoresMusicalInstrumentsPianosSheetMusic'
  | 'NewsDealersAndNewsstands'
  | 'NondurableGoodsNotElsewhereClassified'
  | 'NursingAndPersonalCareFacilities'
  | 'OfficeAndCommercialFurniture'
  | 'OfficePhotographicPhotocopyAndMicrofilmEquipment'
  | 'OfficeSchoolSupplyAndStationeryStores'
  | 'OpticiansOpticalGoodsAndEyeglasses'
  | 'OptometristsOphthalmologists'
  | 'OrganizationsCharitableAndSocialService'
  | 'OrganizationsMembershipNotElsewhereClassified'
  | 'OrganizationsPolitical'
  | 'OrganizationsReligious'
  | 'OrthopedicGoodsArtificialLimbStores'
  | 'OsteopathicPhysicians'
  | 'OtherServicesNotElsewhereClassified'
  | 'PackageStoresBeerWineAndLiquor'
  | 'PaintsVarnishesAndSupplies'
  | 'PassengerRailways'
  | 'PawnShops'
  | 'PaymentTransactionCustomerFinancialInstitution'
  | 'PaymentTransactionMerchant'
  | 'PetShopsPetFoodAndSupplies'
  | 'PetroleumAndPetroleumProducts'
  | 'PhotoDevelopingPhotofinishingLaboratories'
  | 'PhotographicStudios'
  | 'PieceGoodsNotionsAndOtherDryGoods'
  | 'PlumbingAndHeatingEquipment'
  | 'PoiFundingTransactions'
  | 'PoolAndBilliardEstablishments'
  | 'PostalServicesGovernmentOnly'
  | 'PreciousStonesAndMetalsWatchesAndJewelry'
  | 'ProfessionalServicesNotElsewhereClassified'
  | 'PublicWarehousingFarmProductsRefrigeratedGoodsHouseholdGoodsStorage'
  | 'QuasiCashCustomerFinancialInstitution'
  | 'QuasiCashMerchant'
  | 'QuickCopyReproductionAndBlueprintingServices'
  | 'RailroadsFreight'
  | 'RealEstateAgentsAndManagersRentals'
  | 'RecordShops'
  | 'RecreationServicesNotElsewhereClassified'
  | 'RecreationalAndSportingCamps'
  | 'ReligiousGoodsStores'
  | 'RoofingAndSidingSheetMetalWorkContractors'
  | 'SalvageAndWreckingYards'
  | 'SanitationPolishingAndSpecialtyCleaningPreparations'
  | 'SchoolsAndEducationalServicesNotElsewhereClassified'
  | 'SchoolsBusinessAndSecretarial'
  | 'SchoolsCorrespondence'
  | 'SchoolsElementaryAndSecondary'
  | 'SchoolsTradeAndVocational'
  | 'SecondHandStoresUsedMerchandiseStores'
  | 'SecuritiesBrokersDealers'
  | 'ServiceStationsWithOrWithoutAncillaryServices'
  | 'ShoeStores'
  | 'SnowmobileDealers'
  | 'SportingGoodsStores'
  | 'SportsApparelRidingApparelStores'
  | 'StampAndCoinStoresPhilatelicAndNumismaticSupplies'
  | 'StationeryOfficeSuppliesPrintingAndWritingPaper'
  | 'StenographicAndSecretarialSupportServices'
  | 'SwimmingPoolsSalesAndSupplies'
  | 'TaxPayments'
  | 'TaxPreparationService'
  | 'TelecommunicationEquipmentIncludingTelephoneSales'
  | 'TelecommunicationServicesIncludingButNotLimitedToPrepaidPhoneServicesAndRecurringPhoneServices'
  | 'TelegraphServices'
  | 'TentAndAwningShops'
  | 'TestingLaboratoriesNonMedical'
  | 'TheatricalProducersExceptMotionPicturesAndTicketAgencies'
  | 'Timeshares'
  | 'TireRetreadingAndRepairShops'
  | 'TouristAttractionsAndExhibits'
  | 'TowingServices'
  | 'TransportationServicesNotElsewhereClassified'
  | 'TransportationSuburbanAndLocalCommuterPassengerIncludingFerries'
  | 'TravelAgenciesAndTourOperators'
  | 'TruckRental'
  | 'TypesettingPlateMakingAndRelatedServices'
  | 'TypewriterStoresRentalsSalesService'
  | 'Unknown'
  | 'UtilitiesElectricGasHeatingOilSanitaryWater'
  | 'VarietyStores'
  | 'VeterinaryServices'
  | 'VideoAmusementGameSupplies'
  | 'VideoEntertainmentRentalStores'
  | 'VideoGameArcadesOrEstablishments'
  | 'WeldingRepair'
  | 'WholesaleClubs'
  | 'WigAndToupeeShops'
  | 'WomenAccessoryAndSpecialtyStores'
  | 'WomenReadyToWearStores';

export type MerchantPaymentLink = {
  __typename: 'MerchantPaymentLink';
  /** Amount to be paid to sucessfully complete the payment. */
  amount: Amount;
  /** billing address informations */
  billingAddress?: Maybe<Address>;
  /** URL to redirect the user to if they cancel their payment */
  cancelRedirectUrl: Scalars['String']['output'];
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
  externalReference?: Maybe<Scalars['String']['output']>;
  /** Merchant payment link's unique ID. */
  id: Scalars['String']['output'];
  /** Label of the concerned payment collection, which will be displayed on Swan bank statement	and on the Swan merchant payment page. */
  label?: Maybe<Scalars['String']['output']>;
  /**
   * The language used for the payment page.
   * Default is the browser's language, or English if not available.
   */
  language?: Maybe<Scalars['String']['output']>;
  /** The Merchant Profile to link this Payment Link to */
  merchantProfile: MerchantProfile;
  /** The Merchant Profile to link this Payment Link to */
  merchantProfileId: Scalars['ID']['output'];
  /**
   * List of payment methods IDs enabled for this payment link.
   * If the array is empty Swan will allow all the payment methods that are enabled for the merchant profile (except for Check and Internal Direct Debit)
   */
  paymentMethods: Array<MerchantPaymentMethod>;
  /** ID of the related project */
  projectId: Scalars['ID']['output'];
  /** Merchant Website URL to redirect the user to when the payment is completed. */
  redirectUrl: Scalars['String']['output'];
  /**
   * Optional field intended to provide a way for you to include a reference number or code.
   * The customer will most likely see this value on their bank statement, though we can't know as every banking platform is different.
   */
  reference?: Maybe<Scalars['String']['output']>;
  /**
   *   A date that reflects the time at which the user asked the transaction to be executed.
   * For card transactions, request execution must occur within 7 days after authorization or the authorization may expire.
   * For SEPA Direct Debit transactions, request execution must occur up to 1 year in the future.
   *
   * Default value means that the execution will be as soon as possible
   */
  requestedExecutionAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Controls if the payment mandate created from this payment link is for one-time use or can be reused
   * This is applicable for card and SEPA Direct Debit payment methods only.
   */
  sequence: PaymentLinkSequenceType;
  /** The merchant payment link status. */
  statusInfo: MerchantPaymentLinkStatusInfo;
  /** The URL at which the customer can complete the payment. */
  url: Scalars['String']['output'];
};

export type MerchantPaymentLinkStatus =
  /** Customers can still use the merchant payment link to pay. */
  | 'Active'
  /** The customer cancel the payment. */
  | 'Canceled'
  /** The customer completed the payment. */
  | 'Completed'
  /** The merchant payment link is expired. */
  | 'Expired';

export type MerchantPaymentLinkStatusInfo = {
  status: MerchantPaymentLinkStatus;
};

/** Base object for the different Payment Methods available */
export type MerchantPaymentMethod = {
  /** Unique identifier tied to every version of a given Merchant Payment Method */
  id: Scalars['ID']['output'];
  /** Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type */
  methodId: Scalars['ID']['output'];
  /** Rolling Reserve applied to the Merchant Payment Method */
  rollingReserve?: Maybe<RollingReserve>;
  /** Status of the Merchant Payment Method */
  statusInfo: MerchantPaymentMethodStatusInfo;
  /** The Merchant Payment Method Type */
  type: MerchantPaymentMethodType;
  /** Date at which the Merchant Payment Method was last updated */
  updatedAt: Scalars['Date']['output'];
  /** Version of the Merchant Payment Method */
  version: Scalars['Int']['output'];
};

/** Rejection returned when the Merchant Payment Method is not active */
export type MerchantPaymentMethodNotActiveRejection = Rejection & {
  __typename: 'MerchantPaymentMethodNotActiveRejection';
  message: Scalars['String']['output'];
  paymentMethodIds?: Maybe<Array<Scalars['String']['output']>>;
};

/** The different statuses a MerchantPaymentMethod can have */
export type MerchantPaymentMethodStatus =
  | 'Canceled'
  | 'Disabled'
  | 'Enabled'
  | 'PendingReview'
  | 'Rejected'
  | 'Suspended';

/** The payment method status information */
export type MerchantPaymentMethodStatusInfo = {
  /** Merchant Payment Method Status */
  status: MerchantPaymentMethodStatus;
};

/** The different statuses a MerchantPaymentMethod can have */
export type MerchantPaymentMethodType =
  | 'Card'
  | 'Check'
  | 'InternalDirectDebitB2b'
  | 'InternalDirectDebitStandard'
  | 'SepaDirectDebitB2b'
  | 'SepaDirectDebitCore';

/** Merchant Profile */
export type MerchantProfile = {
  __typename: 'MerchantProfile';
  /** The Account ID this Merchant Profile is linked to */
  accountId: Scalars['ID']['output'];
  /** created date */
  createdAt: Scalars['DateTime']['output'];
  /** expected average basket value. */
  expectedAverageBasket: Amount;
  /** Expected annual activity volumes for all payment method */
  expectedMonthlyPaymentVolume: Amount;
  /** The Merchant Profile ID */
  id: Scalars['ID']['output'];
  /** Url of the merchant's logo */
  merchantLogoUrl?: Maybe<Scalars['String']['output']>;
  /** Business name of the merchant, i.e. name that will be displayed on debtors' bank statements */
  merchantName: Scalars['String']['output'];
  /** Payment Methods associated */
  merchantPaymentMethods?: Maybe<Array<MerchantPaymentMethod>>;
  /** Url of the merchant's website */
  merchantWebsite?: Maybe<Scalars['String']['output']>;
  /** Type of product sold. List of value: Goods, Services, VirtualGoods, GiftsAndDonations. Gifts and donations can be club subscription or collection of donations (for associations), tips collection, contributions for local authorities */
  productType: ProductType;
  /** Updates Requested associated */
  requestedMerchantProfileUpdates?: Maybe<Array<RequestMerchantProfileUpdate>>;
  /** The status of the merchant profile */
  statusInfo: MerchantProfileStatusInfo;
  /** updated date */
  updatedAt: Scalars['DateTime']['output'];
};

export type MerchantProfileConnection = Connection & {
  __typename: 'MerchantProfileConnection';
  /** Edge list */
  edges: Array<MerchantProfileEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars['Int']['output'];
};

export type MerchantProfileEdge = Edge & {
  __typename: 'MerchantProfileEdge';
  /** Opaque identifier pointing to this node in the pagination mechanism */
  cursor: Scalars['String']['output'];
  node: MerchantProfile;
};

/** Filters that can be applied when listing Funding Sources */
export type MerchantProfileFiltersInput = {
  status: Array<MerchantProfileStatus>;
};

export type MerchantProfileOrderByFieldInput =
  | 'createdAt'
  | 'updatedAt';

export type MerchantProfileOrderByInput = {
  direction?: InputMaybe<OrderByDirection>;
  field?: InputMaybe<MerchantProfileOrderByFieldInput>;
};

/** Merchant Profile Statuses */
export type MerchantProfileStatus =
  /** Canceled */
  | 'Canceled'
  /** Enabled */
  | 'Enabled'
  /** A Merchant Profile is created in the PendingReview status */
  | 'PendingReview'
  /** Rejected */
  | 'Rejected'
  /** Suspended */
  | 'Suspended';

/** Merchant Profile Status Information */
export type MerchantProfileStatusInfo = {
  status: MerchantProfileStatus;
};

/** Rejection returned when the Merchant Profile is not in the expected status */
export type MerchantProfileWrongStatusRejection = Rejection & {
  __typename: 'MerchantProfileWrongStatusRejection';
  currentStatus: MerchantProfileStatus;
  expectedStatus: MerchantProfileStatus;
  message: Scalars['String']['output'];
};

/** Rejection returned when mandatory fields are missing from the call. */
export type MissingMandatoryFieldRejection = Rejection & {
  __typename: 'MissingMandatoryFieldRejection';
  message: Scalars['String']['output'];
};

/** Monthly income. */
export type MonthlyIncome =
  /** between 500 and 1500 */
  | 'Between500And1500'
  /** between 1500 and 3000 */
  | 'Between1500And3000'
  /** between 3000 and 4500 */
  | 'Between3000And4500'
  /** less than 500 */
  | 'LessThan500'
  /** more than 4500 */
  | 'MoreThan4500';

/** Monthly payment volume. */
export type MonthlyPaymentVolume =
  | 'Between10000And50000'
  | 'Between50000And100000'
  | 'LessThan10000'
  | 'MoreThan100000';

export type Mutation = {
  __typename: 'Mutation';
  /**
   * Activate a Physical Card.
   *
   * This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request.
   *
   * The user must have the account membership for this card
   */
  activatePhysicalCard: ActivatePhysicalCardPayload;
  /**
   * Add a new account membership to an account.
   *
   * *This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request.*
   *
   * *The user must have an account membership for this account with the attribute `canManageAccountMembership=true`.*
   */
  addAccountMembership: AddAccountMembershipPayload;
  /**
   * Add multiple new account memberships to account
   *
   * *This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request.*
   *
   * *The user must have an account membership for this account with the attribute `canManageAccountMembership=true`.*
   */
  addAccountMemberships: AddAccountMembershipsPayload;
  /**
   * Add a new card to an account membership.
   *
   * This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request.
   *
   * The user must have an account membership for this account with the attribute `canManageAccountMembership=true`.
   */
  addCard: AddCardPayload;
  /**
   * Add several cards
   *
   * This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request.
   *
   * The user must have an account membership for this account with the attribute `canManageAccountMembership=true`.
   */
  addCards: AddCardsPayload;
  /**
   * Add several cards with Group Delivery
   *
   * This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request.
   *
   * The user must have an account membership for this account with the attribute `canManageAccountMembership=true`.
   */
  addCardsWithGroupDelivery: AddCardsWithGroupDeliveryPayload;
  /**
   * Add a Digital Card to push to ApplePay or GooglePay
   *
   * This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request.
   *
   * The user must be the card holder
   *
   * A digital card will only be valid for 1 hour after consent validation
   */
  addDigitalCard: AddDigitalCardPayload;
  /**
   * Add a funding source to an account
   *
   * This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request.
   *
   * The user must have an account membership for this account with the attribute `canManageAccountMembership=true`.
   */
  addDirectDebitFundingSource?: Maybe<AddDirectDebitFundingSourcePayload>;
  /**
   * Add an external account to an account holder.
   *
   * This mutation is restricted to a Project access token ([Learn More](https://docs.swan.io/api/authentication)).
   */
  addExternalAccount: AddExternalAccountPayload;
  /**
   * Add an external balance to an external account.
   *
   * This mutation is restricted to a Project access token ([Learn More](https://docs.swan.io/api/authentication)).
   * @deprecated use `AddOrUpdateExternalAccountBalance` instead
   */
  addExternalAccountBalance: AddExternalAccountBalancePayload;
  /**
   * Add a new request for funding limit settings change.
   *
   * This mutation is restricted to a Project access token ([Learn More](https://docs.swan.io/api/authentication)).
   */
  addFundingLimitSettingsChangeRequest: AddFundingLimitSettingsChangeRequestPayload;
  /** Allows to add an internal direct debit payment mandate. */
  addInternalDirectDebitPaymentMandate: AddInternalDirectDebitPaymentMandatePayload;
  /** Add a merchant profile to a company account holder */
  addMerchantProfile?: Maybe<AddMerchantProfilePayload>;
  /**
   * Add an external balance to an external account.
   * If a balance already exist for the day, the balance amount will be updated.
   *
   * This mutation is restricted to a Project access token ([Learn More](https://docs.swan.io/api/authentication)).
   */
  addOrUpdateExternalAccountBalance: AddOrUpdateExternalAccountBalancePayload;
  /**
   * Allows to add a received internal direct debit mandate B2b.
   *
   * *This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request with the Swan app.*
   *
   * *The user must be able to initiate payments for this account.*
   */
  addReceivedInternalDirectDebitB2bMandate: AddReceivedInternalDirectDebitB2bMandatePayload;
  /**
   * Allows to add a received sepa direct debit mandate B2b.
   *
   * *This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request with the Swan app.*
   *
   * *The user must be able to initiate payments for this account.*
   */
  addReceivedSepaDirectDebitB2bMandate: AddReceivedSepaDirectDebitB2bMandatePayload;
  addSepaDirectDebitPaymentMandate?: Maybe<AddSepaDirectDebitPaymentMandatePayload>;
  /** Add a new Single Use Virtual Card to an account membership. */
  addSingleUseVirtualCard: AddSingleUseVirtualCardPayload;
  /**
   * Add several single-use virtual cards
   *
   * This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request.
   *
   * The user must have an account membership for this account with the attribute `canManageAccountMembership=true`.
   */
  addSingleUseVirtualCards: AddSingleUseVirtualCardsPayload;
  /** Add a new Virtual IBAN. */
  addVirtualIbanEntry?: Maybe<AddVirtualIbanEntryPayload>;
  /** Allows to receive Sepa Direct Debit on an account. */
  allowSdd: AllowSddPayload;
  /** Allows to receive Sepa Direct Debit on a Virtual IBAN. */
  allowSddVirtualIbanEntry: AllowSddVirtualIbanEntryPayload;
  /**
   * Bind a user to an account membership
   *
   * *This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request.*
   */
  bindAccountMembership: BindAccountMembershipPayload;
  /** Cancel a Card */
  cancelCard: CancelCardPayload;
  /** Cancels a consent. */
  cancelConsent: CancelConsentPayload;
  /** Cancel a Digital Card */
  cancelDigitalCard: CancelDigitalCardPayload;
  /** Cancel a funding source */
  cancelFundingSource?: Maybe<CancelFundingSourcePayload>;
  /** Cancel a physical card. */
  cancelPhysicalCard: CancelPhysicalCardPayload;
  /**
   * Cancel a standing Order
   *
   * The user must have an account membership to the account and the permission to initiate credit transfer
   */
  cancelStandingOrder: CancelStandingOrderPayload;
  /**
   * Cancels an UPCOMING credit transfer
   *
   *  *The user must have an account membership for this account with the attribute `canInitiatePayments=true`.*
   */
  cancelTransaction: CancelTransactionPayload;
  /** Cancels a Virtual IBAN. */
  cancelVirtualIbanEntry: CancelVirtualIbanEntryPayload;
  /**
   * Closes an account.
   *
   * *This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request with the Swan app.*
   *
   * *The user must have a legal representative account membership for this account.*
   */
  closeAccount: CloseAccountPayload;
  /**
   * Create a capital deposit case.
   *
   * This mutation is restricted to a Project access token ([Learn More](https://docs.swan.io/api/authentication)).
   */
  createCapitalDepositCase: CreateCapitalDepositCasePayload;
  /** Create a unique URL for a merchant to collect payment from a customer */
  createMerchantPaymentLink: CreateMerchantPaymentLinkPayload;
  /**
   * Create a multi consent, which represents a consent of several other consents,
   * executed in parallel or sequentially depending on the `order` input value
   *
   * This mutation is restricted to a User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request.
   */
  createMultiConsent?: Maybe<CreateMultiConsentPayload>;
  /**
   * Delete a supporting document, in case uploaded file is not what was wanted. This action can not be undone.
   *
   * This mutation can only be used on an "Uploaded" supporting document of a "WaitingForDocument" supporting document collection.
   *
   * *This mutation is restricted to a Project access token ([Learn More](https://docs.swan.io/api/authentication))*
   */
  deleteSupportingDocument: DeleteSupportingDocumentPayload;
  /** Allows to refuse all Sepa Direct Debit received on an account. */
  denySdd: DenySddPayload;
  /** Allows to refuse all Sepa Direct Debit received on a Virtual IBAN. */
  denySddVirtualIbanEntry: DenySddVirtualIbanEntryPayload;
  /**
   * Disable an account membership
   *
   * This mutation is callable with a User access token and a Project access token ([Learn More](https://docs.swan.io/api/authentication))
   *
   * With a User access token, the user must have the permission to manage account membership of the account
   */
  disableAccountMembership: DisableAccountMembershipPayload;
  /**
   * Allows to enable a received mandate in the Suspended status.
   *
   * *For B2b received direct debit mandate, this mutation is restricted to an User access token([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request with the Swan app.*
   *
   * *The user must be able to initiate payments for this account.*
   */
  enableReceivedDirectDebitMandate: EnableReceivedDirectDebitMandatePayload;
  /**
   * Finalize an onboarding led to the opening of a new account for your client, who thus become the account holder.
   *
   * *This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)).*
   */
  finalizeOnboarding: FinalizeOnboardingPayload;
  /** Generate an account statement */
  generateAccountStatement: Statement;
  /**
   * Generate an url allowing the upload of a document which unique identifier is specified in parameters.
   *
   * This mutation is restricted to an Project access token ([Learn More](https://docs.swan.io/api/authentication)).
   */
  generateCapitalDepositDocumentUploadUrl: GenerateCapitalDepositDocumentUploadUrlPayload;
  /**
   * Generate and return a presigned URL to upload a unique file for the supporting document collection
   *
   * *This mutation is restricted to a Project access token ([Learn More](https://docs.swan.io/api/authentication))*
   */
  generateSupportingDocumentUploadUrl: GenerateSupportingDocumentUploadUrlPayload;
  /** Grant consent with a server signature */
  grantConsentWithServerSignature: GrantConsentWithServerSignaturePayload;
  /**
   * Initiates a credit transfer to an other Swan account or to an IBAN
   *
   * *This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and if necessary ask the user to consent to this request.*
   *
   * *The user must have an account membership for this account with the attribute `canInitiatePayments=true`.*
   */
  initiateCreditTransfers: InitiateCreditTransfersPayload;
  /**
   * Initiate a funding request.
   * This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request.
   * The user must have an account membership for this account with the attribute `canInitiateCreditTransfer=true`.
   */
  initiateFundingRequest?: Maybe<InitiateFundingRequestPayload>;
  /**
   * *COMING SOON*
   * Create an international transfer
   */
  initiateInternationalCreditTransfer?: Maybe<InitiateInternationalCreditTransferResponsePayload>;
  initiateMerchantPaymentCollection?: Maybe<InitiateMerchantPaymentCollectionPayload>;
  /**
   * Creates an onboarding for a new company account holder.
   *
   * *This mutation is restricted to a Project access token ([Learn More](https://docs.swan.io/api/authentication))*
   */
  onboardCompanyAccountHolder: OnboardCompanyAccountHolderPayload;
  /**
   * Creates an onboarding for a new individual account holder.
   *
   * *This mutation is restricted to a Project access token ([Learn More](https://docs.swan.io/api/authentication))*
   */
  onboardIndividualAccountHolder: OnboardIndividualAccountHolderPayload;
  /**
   * Print Physical Card.
   *
   * This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request.
   */
  printPhysicalCard: PrintPhysicalCardPayload;
  /**
   * initiates a refund for a list of booked transaction
   *
   * *This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and if necessary ask the user to consent to this request.*
   *
   * *The user must have an account membership on the accounts that are beneficiary of the transaction with the attribute `canInitiatePayments=true`.*
   */
  refund: RefundPayload;
  /** Request merchant payment methods for a merchant profile */
  requestMerchantPaymentMethods?: Maybe<RequestMerchantPaymentMethodsPayload>;
  /** Request an update of a MerchantProfile */
  requestMerchantProfileUpdate?: Maybe<RequestMerchantProfileUpdatePayload>;
  /**
   * Ask for Swan's compliance team to review given supporting document collection.
   *
   * *This mutation is restricted to a Project access token ([Learn More](https://docs.swan.io/api/authentication))*
   */
  requestSupportingDocumentCollectionReview: RequestSupportingDocumentCollectionReviewPayload;
  /**
   * Resumes an account membership already suspended.
   *
   * *This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request.*
   *
   * *The user must have an account membership for this account with the attribute `canManageAccountMembership=true`.*
   */
  resumeAccountMembership: ResumeAccountMembershipPayload;
  /**
   * Resume a Physical Card.
   *
   * This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request.
   *
   * The user must have the account membership for this card
   */
  resumePhysicalCard: ResumePhysicalCardPayload;
  /**
   * Schedule a standing Order
   *
   * This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request.
   *
   * The user must have an account membership to the account and the permission to initiate credit transfer
   */
  scheduleStandingOrder: ScheduleStandingOrderPayload;
  /**
   * Suspends an account membership.
   *
   * *This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)).
   *
   * *The user must have an account membership for this account with the attribute `canManageAccountMembership=true`.*
   */
  suspendAccountMembership: SuspendAccountMembershipPayload;
  /** Suspend a Physical Card. */
  suspendPhysicalCard: SuspendPhysicalCardPayload;
  /**
   * Allows to suspend a received direct debit mandate in the Enabled status.
   *
   * *The user must be able to initiate payments for this account.*
   */
  suspendReceivedDirectDebitMandate: SuspendReceivedDirectDebitMandatePayload;
  /** Update an account. */
  updateAccount: UpdateAccountPayload;
  updateAccountHolder: UpdateAccountHolderPayload;
  /**
   * Updates an account membership.
   *
   * *This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request.*
   *
   * *The user must have an account membership for this account with the attribute `canManageAccountMembership=true`.*
   */
  updateAccountMembership: UpdateAccountMembershipPayload;
  /** Update a Card. */
  updateCard?: Maybe<UpdateCardPayload>;
  /**
   * Updates a company onboarding.
   *
   * If you aim to update Ultimate Beneficiary Owners, you need to provide all of them as they are going to be overridden by your update payload.
   *
   * *This mutation is restricted to a Project access token ([Learn More](https://docs.swan.io/api/authentication))*
   */
  updateCompanyOnboarding: UpdateCompanyOnboardingPayload;
  /**
   * Updates an individual onboarding.
   *
   * *This mutation is restricted to a Project access token ([Learn More](https://docs.swan.io/api/authentication))*
   */
  updateIndividualOnboarding: UpdateIndividualOnboardingPayload;
  /**
   * Allows to update a received sepa direct debit mandate B2b.
   *
   * *This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request with the Swan app.*
   *
   * *The user must be able to initiate payments for this account.*
   */
  updateReceivedSepaDirectDebitB2bMandate: UpdateReceivedSepaDirectDebitB2bMandatePayload;
  updateSupportingDocument: UpdateSupportingDocumentPayload;
  /**
   * Updates user preferred consent notification channel.
   *
   * *This mutation is restricted to a Project access token ([Learn More](https://docs.swan.io/api/authentication))*
   */
  updateUserConsentSettings: UpdateUserConsentSettingsPayload;
  /**
   * Reveal the card numbers in the consent page once consent has been given by the cardholder
   *
   * This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request.
   *
   * The user must have the account membership for this card
   */
  viewCardNumbers: ViewCardNumbersPayload;
  /**
   * Reveal the physical card numbers in the consent page once consent has been given by the cardholder
   *
   * This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request.
   *
   * The user must have the account membership for this card
   */
  viewPhysicalCardNumbers: ViewPhysicalCardNumbersPayload;
  /**
   * Reveal the PIN code on Swan app after his consent
   *
   * This mutation is restricted to an User access token ([Learn More](https://docs.swan.io/api/authentication)) and ask the user to consent to this request.
   *
   * The user must have the account membership for this card
   */
  viewPhysicalCardPin: ViewPhysicalCardPinPayload;
};


export type MutationActivatePhysicalCardArgs = {
  input: ActivatePhysicalCardInput;
};


export type MutationAddAccountMembershipArgs = {
  input: AddAccountMembershipInput;
};


export type MutationAddAccountMembershipsArgs = {
  input: AddAccountMembershipsInput;
};


export type MutationAddCardArgs = {
  input: AddCardInput;
};


export type MutationAddCardsArgs = {
  input: AddCardsInput;
};


export type MutationAddCardsWithGroupDeliveryArgs = {
  input: AddCardsWithGroupDeliveryInput;
};


export type MutationAddDigitalCardArgs = {
  input?: InputMaybe<AddDigitalCardInput>;
};


export type MutationAddDirectDebitFundingSourceArgs = {
  input: AddDirectDebitFundingSourceInput;
};


export type MutationAddExternalAccountArgs = {
  input: AddExternalAccountInput;
};


export type MutationAddExternalAccountBalanceArgs = {
  input: AddExternalAccountBalanceInput;
};


export type MutationAddFundingLimitSettingsChangeRequestArgs = {
  input: AddFundingLimitSettingsChangeRequestInput;
};


export type MutationAddInternalDirectDebitPaymentMandateArgs = {
  input: AddInternalDirectDebitPaymentMandateInput;
};


export type MutationAddMerchantProfileArgs = {
  input: AddMerchantProfileInput;
};


export type MutationAddOrUpdateExternalAccountBalanceArgs = {
  input: AddOrUpdateExternalAccountBalanceInput;
};


export type MutationAddReceivedInternalDirectDebitB2bMandateArgs = {
  input: AddReceivedInternalDirectDebitB2bMandateInput;
};


export type MutationAddReceivedSepaDirectDebitB2bMandateArgs = {
  input: AddReceivedSepaDirectDebitB2bMandateInput;
};


export type MutationAddSepaDirectDebitPaymentMandateArgs = {
  input: AddSepaDirectDebitPaymentMandateInput;
};


export type MutationAddSingleUseVirtualCardArgs = {
  input: AddSingleUseVirtualCardInput;
};


export type MutationAddSingleUseVirtualCardsArgs = {
  input: AddSingleUseVirtualCardsInput;
};


export type MutationAddVirtualIbanEntryArgs = {
  input?: InputMaybe<AddVirtualIbanInput>;
};


export type MutationAllowSddArgs = {
  input: AllowSddInput;
};


export type MutationAllowSddVirtualIbanEntryArgs = {
  input: AllowSddVirtualIbanEntryInput;
};


export type MutationBindAccountMembershipArgs = {
  input: BindAccountMembershipInput;
};


export type MutationCancelCardArgs = {
  input?: InputMaybe<CancelCardInput>;
};


export type MutationCancelConsentArgs = {
  input: CancelConsentInput;
};


export type MutationCancelDigitalCardArgs = {
  input?: InputMaybe<CancelDigitalCardInput>;
};


export type MutationCancelFundingSourceArgs = {
  input: CancelFundingSourceInput;
};


export type MutationCancelPhysicalCardArgs = {
  input?: InputMaybe<CancelPhysicalCardInput>;
};


export type MutationCancelStandingOrderArgs = {
  input: CancelStandingOrderInput;
};


export type MutationCancelTransactionArgs = {
  input: CancelTransactionInput;
};


export type MutationCancelVirtualIbanEntryArgs = {
  input: CancelVirtualIbanEntryInput;
};


export type MutationCloseAccountArgs = {
  input: CloseAccountInput;
};


export type MutationCreateCapitalDepositCaseArgs = {
  input: CreateCapitalDepositCaseInput;
};


export type MutationCreateMerchantPaymentLinkArgs = {
  input: CreateMerchantPaymentLinkInput;
};


export type MutationCreateMultiConsentArgs = {
  input: CreateMultiConsentInput;
};


export type MutationDeleteSupportingDocumentArgs = {
  input: DeleteSupportingDocumentInput;
};


export type MutationDenySddArgs = {
  input?: InputMaybe<DenySddInput>;
};


export type MutationDenySddVirtualIbanEntryArgs = {
  input: DenySddVirtualIbanEntryInput;
};


export type MutationDisableAccountMembershipArgs = {
  input?: InputMaybe<DisableAccountMembershipInput>;
};


export type MutationEnableReceivedDirectDebitMandateArgs = {
  input: EnableReceivedDirectDebitMandateInput;
};


export type MutationFinalizeOnboardingArgs = {
  input: FinalizeOnboardingInput;
};


export type MutationGenerateAccountStatementArgs = {
  input: GenerateAccountStatementInput;
};


export type MutationGenerateCapitalDepositDocumentUploadUrlArgs = {
  input: GenerateCapitalDepositDocumentUploadUrlInput;
};


export type MutationGenerateSupportingDocumentUploadUrlArgs = {
  input: GenerateSupportingDocumentUploadUrlInput;
};


export type MutationGrantConsentWithServerSignatureArgs = {
  input: GrantConsentWithServerSignatureInput;
};


export type MutationInitiateCreditTransfersArgs = {
  input: InitiateCreditTransfersInput;
};


export type MutationInitiateFundingRequestArgs = {
  input: InitiateFundingRequestInput;
};


export type MutationInitiateInternationalCreditTransferArgs = {
  input: InitiateInternationalCreditTransferInput;
};


export type MutationInitiateMerchantPaymentCollectionArgs = {
  input: InitiateMerchantPaymentCollectionInput;
};


export type MutationOnboardCompanyAccountHolderArgs = {
  input?: InputMaybe<OnboardCompanyAccountHolderInput>;
};


export type MutationOnboardIndividualAccountHolderArgs = {
  input?: InputMaybe<OnboardIndividualAccountHolderInput>;
};


export type MutationPrintPhysicalCardArgs = {
  input: PrintPhysicalCardInput;
};


export type MutationRefundArgs = {
  input: RefundInput;
};


export type MutationRequestMerchantPaymentMethodsArgs = {
  input: RequestMerchantPaymentMethodsInput;
};


export type MutationRequestMerchantProfileUpdateArgs = {
  input: RequestMerchantProfileUpdateInput;
};


export type MutationRequestSupportingDocumentCollectionReviewArgs = {
  input?: InputMaybe<RequestSupportingDocumentCollectionReviewInput>;
};


export type MutationResumeAccountMembershipArgs = {
  input?: InputMaybe<ResumeAccountMembershipInput>;
};


export type MutationResumePhysicalCardArgs = {
  input?: InputMaybe<ResumePhysicalCardInput>;
};


export type MutationScheduleStandingOrderArgs = {
  input: ScheduleStandingOrderInput;
};


export type MutationSuspendAccountMembershipArgs = {
  input: SuspendAccountMembershipInput;
};


export type MutationSuspendPhysicalCardArgs = {
  input?: InputMaybe<SuspendPhysicalCardInput>;
};


export type MutationSuspendReceivedDirectDebitMandateArgs = {
  input: SuspendReceivedDirectDebitMandateInput;
};


export type MutationUpdateAccountArgs = {
  input: UpdateAccountInput;
};


export type MutationUpdateAccountHolderArgs = {
  input: UpdateAccountHolderInput;
};


export type MutationUpdateAccountMembershipArgs = {
  input: UpdateAccountMembershipInput;
};


export type MutationUpdateCardArgs = {
  input?: InputMaybe<UpdateCardInput>;
};


export type MutationUpdateCompanyOnboardingArgs = {
  input?: InputMaybe<UpdateCompanyOnboardingInput>;
};


export type MutationUpdateIndividualOnboardingArgs = {
  input: UpdateIndividualOnboardingInput;
};


export type MutationUpdateReceivedSepaDirectDebitB2bMandateArgs = {
  input: UpdateReceivedSepaDirectDebitB2bMandateInput;
};


export type MutationUpdateSupportingDocumentArgs = {
  input: UpdateSupportingDocumentInput;
};


export type MutationUpdateUserConsentSettingsArgs = {
  input: UpdateUserConsentSettingsInput;
};


export type MutationViewCardNumbersArgs = {
  input: ViewCardNumbersInput;
};


export type MutationViewPhysicalCardNumbersArgs = {
  input: ViewPhysicalCardNumbersInput;
};


export type MutationViewPhysicalCardPinArgs = {
  input: ViewPhysicalCardPinInput;
};

/** Rejection returned if the entity was not found or if the user does not have the rights to know that the account exists */
export type NotFoundRejection = Rejection & {
  __typename: 'NotFoundRejection';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Rejection returned when consent status couldn't change */
export type NotReachableConsentStatusRejection = Rejection & {
  __typename: 'NotReachableConsentStatusRejection';
  currentStatus?: Maybe<ConsentStatus>;
  message: Scalars['String']['output'];
  unreachableStatus?: Maybe<ConsentStatus>;
};

/** Describes an identification level that hasn't started for the process of the current identification */
export type NotStartedIdentificationLevelStatusInfo = {
  __typename: 'NotStartedIdentificationLevelStatusInfo';
  /** Always set to `NotStarted` */
  status: SwanIdentificationStatus;
};

/** Rejection returned if the queried service doesn't support the country code */
export type NotSupportedCountryRejection = Rejection & {
  __typename: 'NotSupportedCountryRejection';
  message: Scalars['String']['output'];
};

/** Describes an identification level that's not supported for the process of the current identification */
export type NotSupportedIdentificationLevelStatusInfo = {
  __typename: 'NotSupportedIdentificationLevelStatusInfo';
  /** Always set to `NotSupported` */
  status: SwanIdentificationStatus;
};

/** Extra parameters provided by partner */
export type OAuthRedirectParameters = {
  __typename: 'OAuthRedirectParameters';
  /** URL used to redirect the user at the end of the onboarding process. If `null` the user is redirected to the white label web banking. */
  redirectUrl?: Maybe<Scalars['String']['output']>;
  /** Custom state provided by partner to prevent XSRF attack, will be filled by onBoardingId in case of nullity. */
  state?: Maybe<Scalars['String']['output']>;
};

export type OAuthRedirectParametersInput = {
  /** URL used to redirect the user at the end of the onboarding process. If `null` the user is redirected to the white label web banking. Length must be from 0 to 255 characters */
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
  /** Custom state provided by partner to prevent XSRF attack, will be filled by onBoardingId in case of nullity. Length must be from 0 to 255 characters */
  state?: InputMaybe<Scalars['String']['input']>;
};

/** Inputs to onboard a new company account holder */
export type OnboardCompanyAccountHolderInput = {
  /** Country of the account that will be created at the end of the onboarding process */
  accountCountry?: InputMaybe<AccountCountry>;
  /**
   * Account name of the company account holder.
   * Length must be from 0 to 100 characters
   */
  accountName?: InputMaybe<Scalars['String']['input']>;
  /** Business activity */
  businessActivity?: InputMaybe<BusinessActivity>;
  /** Business activity description. Length must be from 0 to 1024 characters */
  businessActivityDescription?: InputMaybe<Scalars['String']['input']>;
  /** Type of the company (Association ...) */
  companyType?: InputMaybe<CompanyType>;
  /** Email of the legal representative. Length must be from 0 to 255 characters */
  email?: InputMaybe<Scalars['String']['input']>;
  /**
   * The ultimate beneficial owner is defined as the natural person (s) who own or control, directly and/or indirectly, the reporting company.
   *
   * The ultimate beneficial owner is :
   * - either the natural person (s) who hold, directly or indirectly, more than 25% of the capital or the rights of vote of the reporting company;
   * - either the natural person (s) who exercise, by other means, a power of control of the company;
   */
  individualUltimateBeneficialOwners?: InputMaybe<Array<IndividualUltimateBeneficialOwnerInput>>;
  /** Is company registered at RCS in its country */
  isRegistered?: InputMaybe<Scalars['Boolean']['input']>;
  /** Language of the onboarding process. Must be compliant with RFC 5646 */
  language?: InputMaybe<Scalars['String']['input']>;
  /** Legal representative personal address */
  legalRepresentativePersonalAddress?: InputMaybe<AddressInformationInput>;
  /** Estimated monthly payment volume (euro) */
  monthlyPaymentVolume?: InputMaybe<MonthlyPaymentVolume>;
  /** Name of the company. Length must be from 0 to 255 characters */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Extra parameters provided by partner */
  oAuthRedirectParameters?: InputMaybe<OAuthRedirectParametersInput>;
  /**
   * URL used to redirect the user at the end of the onboarding process. If `null` the user is redirected to the white label web banking.
   * Length must be from 0 to 255 characters
   */
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
  /** Registration number of the company (SIRET, ...). Length must be from 0 to 50 characters */
  registrationNumber?: InputMaybe<Scalars['String']['input']>;
  /** Residency address of the head office (Must be in a European country) */
  residencyAddress?: InputMaybe<ResidencyAddressInput>;
  /** Tax Identification Number */
  taxIdentificationNumber?: InputMaybe<Scalars['String']['input']>;
  /** Type of representation (legal representative or power of attorney) */
  typeOfRepresentation?: InputMaybe<TypeOfRepresentation>;
  /** VAT number */
  vatNumber?: InputMaybe<Scalars['String']['input']>;
};

export type OnboardCompanyAccountHolderPayload = BadRequestRejection | ForbiddenRejection | OnboardCompanyAccountHolderSuccessPayload | ValidationRejection;

export type OnboardCompanyAccountHolderSuccessPayload = {
  __typename: 'OnboardCompanyAccountHolderSuccessPayload';
  onboarding: Onboarding;
};

/** Information on the shareholder. */
export type OnboardCompanyShareholderInput = {
  /** Amount the shareholder has to deposit. */
  capitalDepositAmount: AmountInput;
  /** Name ("Dénomination sociale") of the shareholder. */
  name: Scalars['String']['input'];
  /** Information required for the onboarding of a company shareholder. */
  onboardingInfo: OnboardCompanyAccountHolderInput;
};

/** Inputs to onboard a new individual account holder */
export type OnboardIndividualAccountHolderInput = {
  /** Country of the account that will be created at the end of the onboarding process */
  accountCountry?: InputMaybe<AccountCountry>;
  /** Account name of the individual account holder. Length must be from 0 to 255 characters */
  accountName?: InputMaybe<Scalars['String']['input']>;
  /** Email. Length must be from 0 to 255 characters */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Employment status of the individual account holder */
  employmentStatus?: InputMaybe<EmploymentStatus>;
  /** Language of the onboarding process. Must be compliant with RFC 5646 */
  language?: InputMaybe<Scalars['String']['input']>;
  /** Monthly income of the individual account holder */
  monthlyIncome?: InputMaybe<MonthlyIncome>;
  /** Extra parameters provided by partner */
  oAuthRedirectParameters?: InputMaybe<OAuthRedirectParametersInput>;
  /** URL used to redirect the user at the end of the onboarding process. If `null` the user is redirected to the white label web banking. Length must be from 0 to 255 characters */
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
  /** Residency address of the individual account holder (must be in a European country) */
  residencyAddress?: InputMaybe<ResidencyAddressInput>;
  /** Tax Identification Number */
  taxIdentificationNumber?: InputMaybe<Scalars['String']['input']>;
};

export type OnboardIndividualAccountHolderPayload = ForbiddenRejection | OnboardIndividualAccountHolderSuccessPayload | ValidationRejection;

export type OnboardIndividualAccountHolderSuccessPayload = {
  __typename: 'OnboardIndividualAccountHolderSuccessPayload';
  onboarding: Onboarding;
};

/** Information on the shareholder. */
export type OnboardIndividualShareholderInput = {
  /** Birthdate of the shareholder in the YYYY/MM/DD format. */
  birthDate: Scalars['String']['input'];
  /** Amount the shareholder has to deposit. */
  capitalDepositAmount: AmountInput;
  /** First name of the shareholder. */
  firstName: Scalars['String']['input'];
  /** Last name of the shareholder. */
  lastName: Scalars['String']['input'];
  /** CCA3 code for the country of nationality of the shareholder. */
  nationality: Scalars['CCA3']['input'];
  /** Information required for the onboarding of a individual shareholder. */
  onboardingInfo: OnboardIndividualAccountHolderInput;
};

/** Information provided during the onboarding process of an individual or a company */
export type Onboarding = {
  __typename: 'Onboarding';
  /** Account opened after the onboarding finalization */
  account?: Maybe<Account>;
  /** Account Country */
  accountCountry: AccountCountry;
  /** Account holder created at the end of the onboarding process */
  accountHolder?: Maybe<AccountHolder>;
  /** Account name */
  accountName?: Maybe<Scalars['String']['output']>;
  /** Creation date */
  createdAt: Scalars['DateTime']['output'];
  /** Email */
  email?: Maybe<Scalars['String']['output']>;
  /** Finalization date */
  finalizedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Unique identifier of an onboarding */
  id: Scalars['String']['output'];
  /** Information regarding the Individual or the company to onboard */
  info: OnboardingAccountHolderInfo;
  /** Language of the onboarding process. This consists of a 2-3 letter base language tag representing the language, optionally followed by additional subtags separated by '-'. The most common extra information is the country or region variant (like 'en-US' or 'fr-CA') or the type of alphabet to use (like 'sr-Latn'). Other variants like the type of orthography ('de-DE-1996') are usually not used in the context of this header. [Learn More](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language) */
  language?: Maybe<Scalars['String']['output']>;
  /** List of accepted identification level for the legal representative */
  legalRepresentativeAcceptedIdentificationLevels: Array<Maybe<IdentificationLevel>>;
  /** Recommended identification level for the legal representative */
  legalRepresentativeRecommendedIdentificationLevel: IdentificationLevel;
  /** Extra parameters provided by partner */
  oAuthRedirectParameters?: Maybe<OAuthRedirectParameters>;
  /** Current computed state of onboarding */
  onboardingState: OnboardingState;
  /** Redirect the legal representative of a new account holder to this URL to start the onboarding process */
  onboardingUrl: Scalars['String']['output'];
  /**
   * URL used to redirect the user at the end of the onboarding process. If `null` the user is redirected to the white label web banking.
   * @deprecated Use `redirectUrl` field on oauthRedirectParameters parameters instead.
   */
  redirectUrl: Scalars['String']['output'];
  /** Status (valid/invalid/finalized) and details of errors on fields */
  statusInfo: OnboardingStatusInfo;
  /** List of supporting document collection owned by the account holder. */
  supportingDocumentCollection: SupportingDocumentCollection;
  /** Swan TCU URL */
  tcuUrl: Scalars['String']['output'];
  /** Creation date */
  updatedAt: Scalars['DateTime']['output'];
};

/** The onboarding could be for an Individual or a company */
export type OnboardingAccountHolderInfo = {
  /** Account holder type */
  type: AccountHolderType;
};

/** Company Account Holder Information */
export type OnboardingCompanyAccountHolderInfo = OnboardingAccountHolderInfo & {
  __typename: 'OnboardingCompanyAccountHolderInfo';
  /** business activity */
  businessActivity?: Maybe<BusinessActivity>;
  /**
   * business activity description
   * This must be 1024 characters long maximum.
   */
  businessActivityDescription?: Maybe<Scalars['String']['output']>;
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
  isRegistered?: Maybe<Scalars['Boolean']['output']>;
  /** Legal representative personal address */
  legalRepresentativePersonalAddress?: Maybe<AddressInformation>;
  /** estimated monthly payment volume (euro) */
  monthlyPaymentVolume?: Maybe<MonthlyPaymentVolume>;
  /** name of the company */
  name?: Maybe<Scalars['String']['output']>;
  /** registration number of the company (SIRET, ...) */
  registrationNumber?: Maybe<Scalars['String']['output']>;
  /** residency address of the head office (Must be in a European country) */
  residencyAddress?: Maybe<AddressInfo>;
  /** Tax Identification Number */
  taxIdentificationNumber?: Maybe<Scalars['String']['output']>;
  /** Account holder type (always Company for type OnboardingCompanyAccountHolderInfo) */
  type: AccountHolderType;
  /** Type of representation (legal representative or power of attorney) */
  typeOfRepresentation?: Maybe<TypeOfRepresentation>;
  /** Unique number that identifies a taxable person (business) or non-taxable legal entity that is registered for VAT */
  vatNumber?: Maybe<Scalars['String']['output']>;
};

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type OnboardingConnection = Connection & {
  __typename: 'OnboardingConnection';
  /** OnboardingEdge list */
  edges: Array<OnboardingEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars['Int']['output'];
};

/** Implements the Relay Edge interface */
export type OnboardingEdge = Edge & {
  __typename: 'OnboardingEdge';
  /** Opaque identifier pointing to this onboarding node in the pagination mechanism */
  cursor: Scalars['String']['output'];
  /** The Onboarding */
  node: Onboarding;
};

/** Filters that can be applied when listing onboardings */
export type OnboardingFiltersInput = {
  /** Email we want to filter on */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Searches company name, first name, last name */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Status we want to filter on */
  status?: InputMaybe<Array<OnboardingStatus>>;
  /** Type/Types we want to filter on */
  types?: InputMaybe<Array<AccountHolderType>>;
};

/** StatusInfo when onboarding has been finalized */
export type OnboardingFinalizedStatusInfo = OnboardingStatusInfo & {
  __typename: 'OnboardingFinalizedStatusInfo';
  status: OnboardingStatus;
};

/** Individual Account Holder Information */
export type OnboardingIndividualAccountHolderInfo = OnboardingAccountHolderInfo & {
  __typename: 'OnboardingIndividualAccountHolderInfo';
  /** employment status of the individual account holder */
  employmentStatus?: Maybe<EmploymentStatus>;
  /** monthly income of the individual account holder */
  monthlyIncome?: Maybe<MonthlyIncome>;
  /** residency address of the individual account holder (must be in a European country) */
  residencyAddress?: Maybe<AddressInfo>;
  /** Tax Identification Number */
  taxIdentificationNumber?: Maybe<Scalars['String']['output']>;
  /** Account holder type (always Individual for type OnboardingIndividualAccountHolderInfo) */
  type: AccountHolderType;
};

export type OnboardingInfo = {
  __typename: 'OnboardingInfo';
  /** Country of the account that will be created at the end of the onboarding process */
  accountCountry?: Maybe<AccountCountry>;
  /** Account name */
  accountName?: Maybe<Scalars['String']['output']>;
  /** email */
  email?: Maybe<Scalars['String']['output']>;
  /** Unique identifier of an onboarding */
  id: Scalars['String']['output'];
  /** Information regarding the Individual or the company to onboard */
  info: OnboardingAccountHolderInfo;
  /** language of the onboarding process. This consists of a 2-3 letter base language tag representing the language, optionally followed by additional subtags separated by '-'. The most common extra information is the country or region variant (like 'en-US' or 'fr-CA') or the type of alphabet to use (like 'sr-Latn'). Other variants like the type of orthography ('de-DE-1996') are usually not used in the context of this header. [Learn More](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language) */
  language?: Maybe<Scalars['String']['output']>;
  /** List of accepted identification level for the legal representative */
  legalRepresentativeAcceptedIdentificationLevels: Array<Maybe<IdentificationLevel>>;
  /** Recommended identification level for the legal representative */
  legalRepresentativeRecommendedIdentificationLevel: IdentificationLevel;
  /** Extra parameters provided by partner */
  oAuthRedirectParameters?: Maybe<OAuthRedirectParameters>;
  /** Current computed state of onboarding */
  onboardingState?: Maybe<OnboardingState>;
  /** Redirect the legal representative of a new account holder to this URL to start the onboarding process */
  onboardingUrl: Scalars['String']['output'];
  /** Project infos you set in the dashboard */
  projectInfo?: Maybe<ProjectInfo>;
  /** URL used to redirect the user at the end of the onboarding process. If `null` the user is redirected to the white label web banking. */
  redirectUrl: Scalars['String']['output'];
  /** Status (valid/invalid/finalized) and details of errors on fields */
  statusInfo: OnboardingStatusInfo;
  /** Supporting document collection related to onboarding. */
  supportingDocumentCollection: SupportingDocumentCollection;
  /** Swan TCU URL */
  tcuUrl: Scalars['String']['output'];
  /** Verification Flow */
  verificationFlow: VerificationFlow;
};

/** StatusInfo when onboarding has still at least one incorrect field */
export type OnboardingInvalidStatusInfo = OnboardingStatusInfo & {
  __typename: 'OnboardingInvalidStatusInfo';
  errors: Array<ValidationError>;
  status: OnboardingStatus;
};

/** Rejection returned if an onboarding is not completed */
export type OnboardingNotCompletedRejection = Rejection & {
  __typename: 'OnboardingNotCompletedRejection';
  message: Scalars['String']['output'];
  onboarding: Onboarding;
  /** @deprecated(reason: "use `onboarding.id` instead") */
  onboardingId: Scalars['String']['output'];
};

/** Field we can use when ordering that can be applied when listing onboardings */
export type OnboardingOrderByFieldInput =
  | 'createdAt'
  | 'finalizedAt'
  | 'updatedAt';

/** Order that can be applied when listing onboardings */
export type OnboardingOrderByInput = {
  direction?: InputMaybe<OrderByDirection>;
  field?: InputMaybe<OnboardingOrderByFieldInput>;
};

/** Onboarding process state */
export type OnboardingState =
  /** When the onboarding is finalized and the account holder is created */
  | 'Completed'
  /** When the onboarding is in progress */
  | 'Ongoing';

/** Possible values for onboarding status */
export type OnboardingStatus =
  /** When the onboarding is finalized */
  | 'Finalized'
  /** when the onboarding is invalid. Final status */
  | 'Invalid'
  /** When the onboarding is valid. Final status */
  | 'Valid';

/** Object containing details about onboarding status (valid/invalid and why it is invalid/already finalized) */
export type OnboardingStatusInfo = {
  /** Current onboarding status. Onboarding can only be finalized if status is "valid" */
  status: OnboardingStatus;
};

/** StatusInfo when onboarding has all onboarding fields are correctly filled */
export type OnboardingValidStatusInfo = OnboardingStatusInfo & {
  __typename: 'OnboardingValidStatusInfo';
  status: OnboardingStatus;
};

export type OrderByDirection =
  | 'Asc'
  | 'Desc';

export type PinNotReadyRejection = Rejection & {
  __typename: 'PINNotReadyRejection';
  message: Scalars['String']['output'];
  physicalCardIdentifier: Scalars['String']['output'];
};

/** Implements PageInfo from the Relay Connections Specification - information about a page in the pagination mechanism */
export type PageInfo = {
  __typename: 'PageInfo';
  /** Opaque identifier pointing to the last node of the page */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Indicates whether more edges exist following this page */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether more edges exist preceding this page */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
  /** Opaque identifier pointing to the first node of the page */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Input version */
export type PartnerCloseAccountReasonInput = {
  message?: InputMaybe<Scalars['String']['input']>;
  type: PartnerCloseAccountReasonType;
};

/** Specific type for closing account action */
export type PartnerCloseAccountReasonType =
  /** Simple closing request */
  | 'ClosingRequested';

/** Partnership Status Accepted */
export type PartnershipAcceptedStatusInfo = PartnershipStatusInfo & {
  __typename: 'PartnershipAcceptedStatusInfo';
  /** Accepted date of the partnership for this account */
  acceptedDate: Scalars['DateTime']['output'];
  /** Partnership status (always Accepted for type PartnershipAcceptedStatusInfo) */
  status: PartnershipStatus;
};

/** Partnership Status canceled */
export type PartnershipCanceledStatusInfo = PartnershipStatusInfo & {
  __typename: 'PartnershipCanceledStatusInfo';
  /** Accepted date of the partnership for this account */
  acceptedDate: Scalars['DateTime']['output'];
  /** Canceled date of the partnership for this account */
  canceledDate: Scalars['DateTime']['output'];
  /** Reason of the cancelation */
  reason: Scalars['String']['output'];
  /** Partnership status (always Canceled for type PartnershipCanceledStatusInfo) */
  status: PartnershipStatus;
};

/** Partnership Status currently cancelling */
export type PartnershipCancelingStatusInfo = PartnershipStatusInfo & {
  __typename: 'PartnershipCancelingStatusInfo';
  /** Accepted date of the partnership for this account */
  acceptedDate: Scalars['DateTime']['output'];
  /** Canceled date of the partnership for this account */
  canceledAfter: Scalars['DateTime']['output'];
  /** Partnership status (always Canceling for type PartnershipCancelingStatusInfo) */
  status: PartnershipStatus;
};

export type PartnershipStatus =
  /** When the partnership is accepted by the account holder for this account */
  | 'Accepted'
  /** When the partnership was canceled by you or the account holder */
  | 'Canceled'
  /** When you decide to stop the partnership, you have 2 months notice */
  | 'Canceling';

/** Partnership Status information */
export type PartnershipStatusInfo = {
  /** Status of the partnership for this account */
  status: PartnershipStatus;
};

/** The document corresponding to a passport */
export type PassportDocument = {
  __typename: 'PassportDocument';
  /** The date at which the passport expires */
  expiryDate?: Maybe<Scalars['Date']['output']>;
  /** List of the associated files */
  files: Array<PassportDocumentFile>;
  /** Unique identifier of the passport document */
  id: Scalars['String']['output'];
  /** The date at which the passport was issued */
  issueDate?: Maybe<Scalars['Date']['output']>;
  /** Machine-readable zone code of the passport */
  mrz?: Maybe<Scalars['String']['output']>;
  /** Number of the passport */
  number?: Maybe<Scalars['String']['output']>;
  /** The type of the document */
  type: DocumentType;
};

/** The file associated to the passport document */
export type PassportDocumentFile = DocumentFile & {
  __typename: 'PassportDocumentFile';
  /** The file's temporary download url */
  downloadUrl: Scalars['String']['output'];
  /** From which side the passport's picture was taken */
  side: DocumentFileSide;
};

/**
 * A Payment represents a set of transactions linked to the same payment act.
 *
 * This payment act can be initiated:
 * - either from a user
 * - either from a merchant
 * - either from you
 * - either from Swan
 */
export type Payment = {
  __typename: 'Payment';
  /** created date */
  createdAt: Scalars['DateTime']['output'];
  /** unique identifier of a payment */
  id: Scalars['ID']['output'];
  /** standing order that has initiated this payment */
  standingOrder?: Maybe<StandingOrder>;
  /** status information */
  statusInfo: PaymentStatusInfo;
  /** list of transactions associated to this payment */
  transactions?: Maybe<TransactionConnection>;
  /** updated date */
  updatedAt: Scalars['DateTime']['output'];
};


/**
 * A Payment represents a set of transactions linked to the same payment act.
 *
 * This payment act can be initiated:
 * - either from a user
 * - either from a merchant
 * - either from you
 * - either from Swan
 */
export type PaymentTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<TransactionsFiltersInput>;
  first?: Scalars['Int']['input'];
};

export type PaymentAccountType =
  /** When the account holder if the account hasn't met KYC requirements */
  | 'EMoney'
  /** When all KYC requirements are met */
  | 'PaymentService';

/** Please see the Connection interface */
export type PaymentConnection = Connection & {
  __typename: 'PaymentConnection';
  edges: Array<PaymentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Payment status consent pending */
export type PaymentConsentPending = PaymentStatusInfo & {
  __typename: 'PaymentConsentPending';
  /** The consent required to initiate this payment */
  consent: Consent;
  /** status of the payment */
  status: PaymentStatus;
};

export type PaymentDirectDebitMandate = {
  /** Unique identifier of the Direct Debit Payment Mandate */
  id: Scalars['ID']['output'];
};

/** Please see the Connection interface */
export type PaymentEdge = Edge & {
  __typename: 'PaymentEdge';
  cursor: Scalars['String']['output'];
  node: Payment;
};

/** Filters that can be applied when listing payments */
export type PaymentFiltersInput = {
  status?: InputMaybe<Array<PaymentStatus>>;
};

/** Payment status initiated */
export type PaymentInitiated = PaymentStatusInfo & {
  __typename: 'PaymentInitiated';
  /** status of the payment */
  status: PaymentStatus;
};

/** Payment Level of the account */
export type PaymentLevel =
  /** When the account is limited to 150€ within 30 days and with no IBAN */
  | 'Limited'
  /** When the account holder is fully verified and then the account is unlimited with an IBAN */
  | 'Unlimited';

export type PaymentLinkSequenceType =
  | 'OneOff'
  | 'Recurring';

export type PaymentMandate = {
  /** Unique identifier of the Payment Mandate */
  id: Scalars['ID']['output'];
};

export type PaymentMandateCanceledReason =
  /** When the Payment Mandate is expired */
  | 'MandateExpired'
  /** When the user requested to cancel the Payment Mandate */
  | 'RequestedByUser';

/** Payment Mandate Canceled status information */
export type PaymentMandateCanceledStatusInfo = PaymentMandateStatusInfo & {
  __typename: 'PaymentMandateCanceledStatusInfo';
  /** Reason behind the Payment Mandate Canceled status */
  reason: PaymentMandateCanceledReason;
  /** Payment Mandate status (always Canceled for type PaymentMandateCanceledStatusInfo). */
  status: PaymentMandateStatus;
};

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type PaymentMandateConnection = Connection & {
  __typename: 'PaymentMandateConnection';
  /** PaymentMandateEdge list */
  edges: Array<PaymentMandateEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of elements in the list */
  totalCount: Scalars['Int']['output'];
};

/** Payment Mandate Consent Pending status information */
export type PaymentMandateConsentPendingStatusInfo = PaymentMandateStatusInfo & {
  __typename: 'PaymentMandateConsentPendingStatusInfo';
  /** Consent information required to enable the concerned Payment Mandate */
  consent: Consent;
  /** Payment Mandate status (always Enabled for type PaymentMandateEnableedStatusInfo). */
  status: PaymentMandateStatus;
};

export type PaymentMandateCreditor = {
  /** Creditor address */
  address: Address;
  /** Creditor UUID */
  id: Scalars['ID']['output'];
  /** Creditor name */
  name: Scalars['String']['output'];
};

export type PaymentMandateDebtor = {
  /** Debtor country */
  country: Scalars['CCA3']['output'];
  /** Debtor e-mail */
  email?: Maybe<Scalars['String']['output']>;
  /** Debtor name */
  name: Scalars['String']['output'];
};

/** Implements the Relay Edge interface */
export type PaymentMandateEdge = Edge & {
  __typename: 'PaymentMandateEdge';
  /** Opaque identifier pointing to this onboarding node in the pagination mechanism */
  cursor: Scalars['String']['output'];
  /** The payment mandate */
  node: PaymentMandate;
};

/** Payment Mandate Enabled status information */
export type PaymentMandateEnabledStatusInfo = PaymentMandateStatusInfo & {
  __typename: 'PaymentMandateEnabledStatusInfo';
  /** Payment Mandate status (always Enabled for type PaymentMandateEnabledStatusInfo). */
  status: PaymentMandateStatus;
};

/** Filter that can be passed to get the payment mandate in a specific data range */
export type PaymentMandateFiltersInput = {
  /** To filter on scheme values */
  scheme?: InputMaybe<Array<PaymentMandateScheme>>;
  /** To filter on status values */
  status?: InputMaybe<Array<PaymentMandateStatus>>;
};

/** Error returned if the payment mandate was not found */
export type PaymentMandateMandateNotFoundRejection = Rejection & {
  __typename: 'PaymentMandateMandateNotFoundRejection';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Field we can use when ordering that can be applied when listing payment mandate results */
export type PaymentMandateOrderByFieldInput =
  | 'createdAt'
  | 'updatedAt';

/** Order that can be applied when listing payment mandate results */
export type PaymentMandateOrderByInput = {
  direction?: InputMaybe<OrderByDirection>;
  field?: InputMaybe<PaymentMandateOrderByFieldInput>;
};

/** Rejection returned when a payment mandate reference is already for a creditor */
export type PaymentMandateReferenceAlreadyUsedRejection = Rejection & {
  __typename: 'PaymentMandateReferenceAlreadyUsedRejection';
  message: Scalars['String']['output'];
};

/** Payment Mandate Rejected status information */
export type PaymentMandateRejectedStatusInfo = PaymentMandateStatusInfo & {
  __typename: 'PaymentMandateRejectedStatusInfo';
  /** Payment Mandate status (always Rejected for type PaymentMandateSuspendedStatusInfo). */
  status: PaymentMandateStatus;
};

export type PaymentMandateScheme =
  /** Internal Direct Debit B2B */
  | 'InternalDirectDebitB2b'
  /** Internal Direct Debit Standard */
  | 'InternalDirectDebitStandard'
  /** SEPA Direct Debit B2B */
  | 'SepaDirectDebitB2b'
  /** SEPA Direct Debit Core */
  | 'SepaDirectDebitCore';

/** Payment Mandate Sequence */
export type PaymentMandateSequence =
  /** The Payment Mandate can be used only once */
  | 'OneOff'
  /** The Payment Mandate can be used for recurrent collections */
  | 'Recurrent';

/** Payment Mandate status */
export type PaymentMandateStatus =
  | 'Canceled'
  | 'ConsentPending'
  | 'Enabled'
  | 'Rejected';

/** Payment Mandate status information */
export type PaymentMandateStatusInfo = {
  /** Status of the payment mandate. */
  status: PaymentMandateStatus;
};

/** Rejection returned when a payment method is not compatible for the requested mutation */
export type PaymentMethodNotCompatibleRejection = Rejection & {
  __typename: 'PaymentMethodNotCompatibleRejection';
  message: Scalars['String']['output'];
};

/** Field we can use when ordering that can be applied when listing payment */
export type PaymentOrderByFieldInput =
  | 'createdAt'
  | 'updatedAt';

/** Order that can be applied when listing payments */
export type PaymentOrderByInput = {
  direction?: InputMaybe<OrderByDirection>;
  field?: InputMaybe<PaymentOrderByFieldInput>;
};

/** Payment product */
export type PaymentProduct =
  /** When the payment is a Card operation */
  | 'Card'
  /** When the payment is a Check operation */
  | 'Check'
  /** When the payment is a Fees operation */
  | 'Fees'
  /** When the payment is an Internal Credit Transfer operation */
  | 'InternalCreditTransfer'
  /** When the payment is an Internal Direct Debit operation */
  | 'InternalDirectDebit'
  /** When the payment is an International Credit Transfer operation */
  | 'InternationalCreditTransfer'
  /** When the payment is a Sepa Credit Transfer operation */
  | 'SEPACreditTransfer'
  /** When the payment is a Sepa Direct Debit operation */
  | 'SEPADirectDebit';

/** Payment status rejected */
export type PaymentRejected = PaymentStatusInfo & {
  __typename: 'PaymentRejected';
  /** rejected reason */
  reason: Scalars['String']['output'];
  /** status of the payment */
  status: PaymentStatus;
};

/** Payment status */
export type PaymentStatus =
  /** when a consent is pending before initiating the payment */
  | 'ConsentPending'
  /** when the payment has been initiated */
  | 'Initiated'
  /** when the payment has been rejected */
  | 'Rejected';

/** Payment Status Information */
export type PaymentStatusInfo = {
  /** status of the payment */
  status: PaymentStatus;
};

/** Custom information for a PDF statement */
export type PdfStatement = StatementInfo & {
  __typename: 'PdfStatement';
  /** date at which the link will not be useable anymore */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** statement type */
  type?: Maybe<StatementType>;
  /** temporary public url on which the file can be accessed */
  url?: Maybe<Scalars['String']['output']>;
};

/** Pending Consent when the account membership will be updated */
export type PendingConsentAccountMembershipUpdate = {
  __typename: 'PendingConsentAccountMembershipUpdate';
  /** New account membership version waiting for consent */
  accountMembershipId: AccountMembership;
  /** The consent required to update the account membership */
  consent: Consent;
};

/** Pending Digital Card used for ApplePay or GooglePay */
export type PendingDigitalCard = DigitalCard & {
  __typename: 'PendingDigitalCard';
  /** Created date */
  createdAt: Scalars['DateTime']['output'];
  /** Unique identifier of a digital card */
  id: Scalars['ID']['output'];
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
  updatedAt: Scalars['DateTime']['output'];
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
  | 'ConsentPending'
  /**
   * when the creation of a digital card is declined
   *
   * this is a final state
   */
  | 'Declined'
  /** when the digital card is pending the end of the digitalization process */
  | 'Pending';

/** Pending Digital Card Status Information */
export type PendingDigitalCardStatusInfo = {
  /** Status of the digital card. */
  status: PendingDigitalCardStatus;
};

/** Funding Source Pending status information */
export type PendingFundingSourceStatusInfo = FundingSourceStatusInfo & {
  __typename: 'PendingFundingSourceStatusInfo';
  /** Funding Source Pending status */
  status: FundingSourceStatus;
};

/** Describes an identification level that is pending for the process of the current identification, requiring an operation not related to the end-user to progress */
export type PendingIdentificationLevelStatusInfo = {
  __typename: 'PendingIdentificationLevelStatusInfo';
  /** Always set to `Pending` */
  status: SwanIdentificationStatus;
};

/** PendingMerchantPaymentMethodStatusInfo */
export type PendingMerchantPaymentMethodStatusInfo = MerchantPaymentMethodStatusInfo & {
  __typename: 'PendingMerchantPaymentMethodStatusInfo';
  status: MerchantPaymentMethodStatus;
};

/** PendingReviewMerchantProfileStatusInfo */
export type PendingReviewMerchantProfileStatusInfo = MerchantProfileStatusInfo & {
  __typename: 'PendingReviewMerchantProfileStatusInfo';
  status: MerchantProfileStatus;
};

/** Pending Verification Information */
export type PendingReviewStatusInfo = AccountVerificationStatusInfo & {
  __typename: 'PendingReviewStatusInfo';
  /** Account verification status (PendingReview) */
  status: AccountVerificationStatus;
};

/** Pending transaction status information */
export type PendingTransactionStatusInfo = TransactionStatusInfo & {
  __typename: 'PendingTransactionStatusInfo';
  /** The date when the pending amount of this transaction is released on the available balance of this account if not booked */
  pendingEndDate?: Maybe<Scalars['DateTime']['output']>;
  /** status of the transaction */
  status: TransactionStatus;
};

/** Pending Verification Information */
export type PendingVerificationStatusInfo = AccountVerificationStatusInfo & {
  __typename: 'PendingVerificationStatusInfo';
  /** Account verification status (PendingVerification) */
  status: AccountVerificationStatus;
};

export type PermissionCannotBeGrantedRejection = Rejection & {
  __typename: 'PermissionCannotBeGrantedRejection';
  message: Scalars['String']['output'];
};

/** Physical Card */
export type PhysicalCard = {
  __typename: 'PhysicalCard';
  /** Masked Card Number */
  cardMaskedNumber: Scalars['String']['output'];
  /** Custom Options */
  customOptions: PhysicalCardCustomOptions;
  /** Physical Card expiration date  with MM/YY string format */
  expiryDate?: Maybe<Scalars['String']['output']>;
  /** Unique identifier present on physical card, such identifier is null if the status is ToActivate or Canceled. This identifier is updated when a renewed card is activated */
  identifier?: Maybe<Scalars['String']['output']>;
  /** Offline Spending limit defined by Swan */
  offlineSpendingLimit: Amount;
  /** Physical Card status information */
  statusInfo: PhysicalCardStatusInfo;
};

/** Physical Card Activated Status Information */
export type PhysicalCardActivatedStatusInfo = PhysicalCardStatusInfo & {
  __typename: 'PhysicalCardActivatedStatusInfo';
  /** Physical Card status (always Activated for type PhysicalCardEnabledStatusInfo). */
  status: PhysicalCardStatus;
};

/** Physical Card Canceled Status Information */
export type PhysicalCardCanceledStatusInfo = PhysicalCardStatusInfo & {
  __typename: 'PhysicalCardCanceledStatusInfo';
  /** Reason why the card is canceled. */
  reason: Scalars['String']['output'];
  /** Physical Card status (always Canceled for type PhysicalCardCanceledStatusInfo). */
  status: PhysicalCardStatus;
};

/** Physical Card Canceling Status Information */
export type PhysicalCardCancelingStatusInfo = PhysicalCardStatusInfo & {
  __typename: 'PhysicalCardCancelingStatusInfo';
  /** Reason why the card is canceled. */
  reason: Scalars['String']['output'];
  /** Physical Card status (always Canceling for type PhysicalCardCancelingStatusInfo). */
  status: PhysicalCardStatus;
};

export type PhysicalCardConfigInput = {
  /** Address to deliver the physical card */
  deliveryAddress: CompleteAddressInput;
  /** Custom options to use for physical cards. */
  physicalCardCustomOptions?: InputMaybe<PhysicalCardCustomOptionsInput>;
};

/** when the user has to authorize production of the physical card */
export type PhysicalCardConsentPendingStatusInfo = PhysicalCardStatusInfo & {
  __typename: 'PhysicalCardConsentPendingStatusInfo';
  /** The consent required to authorize production of the physical card */
  consent: Consent;
  /** Physical Card status (always ConsentPending for type PhysicalCardConsentPendingStatusInfo) */
  status: PhysicalCardStatus;
};

/** Custom options for physical card. */
export type PhysicalCardCustomOptions = {
  __typename: 'PhysicalCardCustomOptions';
  /** Additional line embossed on the card. */
  additionalPrintedLine?: Maybe<Scalars['String']['output']>;
};

export type PhysicalCardCustomOptionsForGroupDeliveryInput = {
  /**
   * Additional line to be embossed on the card.
   *
   * This field will only be taken into account for custom card design that include it. ([Learn More](https://docs.swan.io/guide/issue-cards#order-cards-with-additional-line))
   *
   * Max length allowed: 26 characters.
   * Characters allowed: alphanumeric’*’ ‘.’ ‘-’ ‘/’ apostrophe
   */
  additionalPrintedLine?: InputMaybe<Scalars['String']['input']>;
};

export type PhysicalCardCustomOptionsForPrintInput = {
  /**
   * Additional line to be printed on the card.
   *
   * This field will only be taken into account for custom card design that include it. ([Learn More](https://docs.swan.io/guide/issue-cards#order-cards-with-additional-line))
   *
   * Max length allowed: 26 characters.
   * Characters allowed: alphanumeric’*’ ‘.’ ‘-’ ‘/’ apostrophe
   */
  additionalPrintedLine?: InputMaybe<Scalars['String']['input']>;
};

export type PhysicalCardCustomOptionsInput = {
  /**
   * Additional line to be embossed on the card.
   *
   * This field will only be taken into account for custom card design that include it. ([Learn More](https://docs.swan.io/guide/issue-cards#order-cards-with-additional-line))
   *
   * Max length allowed: 26 characters.
   * Characters allowed: alphanumeric’*’ ‘.’ ‘-’ ‘/’ apostrophe
   */
  additionalPrintedLine?: InputMaybe<Scalars['String']['input']>;
};

/** Rejection returned when the Physical Card does not exist */
export type PhysicalCardNotFoundRejection = Rejection & {
  __typename: 'PhysicalCardNotFoundRejection';
  identifier: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** when the physical card is in the process of being ready to use */
export type PhysicalCardProcessingStatusInfo = PhysicalCardStatusInfo & {
  __typename: 'PhysicalCardProcessingStatusInfo';
  /** Physical card status (always Processing for type PhysicalCardProcessingStatusInfo) */
  status: PhysicalCardStatus;
};

/** Physical Card Renewed Status Information */
export type PhysicalCardRenewedStatusInfo = PhysicalCardStatusInfo & {
  __typename: 'PhysicalCardRenewedStatusInfo';
  /** address to deliver the physical card */
  address: Address;
  /** Estimated delivery date */
  estimatedDeliveryDate?: Maybe<Scalars['DateTime']['output']>;
  /** `true` if PIN Code is available. */
  isPINReady: Scalars['Boolean']['output'];
  /** Name of the shipping provider (Ex: LaPoste, DHL ...) */
  shippingProvider?: Maybe<Scalars['String']['output']>;
  /** Physical Card status (always Renewed for type PhysicalCardRenewedStatusInfo). */
  status: PhysicalCardStatus;
  /** Shipping tracking number */
  trackingNumber?: Maybe<Scalars['String']['output']>;
};

/** Physical Card Status */
export type PhysicalCardStatus =
  /** when the physical card is activated */
  | 'Activated'
  /** when the physical card is canceled */
  | 'Canceled'
  /** when the physical card is about to be canceled */
  | 'Canceling'
  /** when the consent to authorize physical card production is pending */
  | 'ConsentPending'
  /** when the physical card is in the process of being ready to use */
  | 'Processing'
  /** when the physical card is renewed */
  | 'Renewed'
  /** when the physical card is suspended */
  | 'Suspended'
  /** when the physical card is not yet activated */
  | 'ToActivate';

/** Physical Card Status Information */
export type PhysicalCardStatusInfo = {
  /** Status of the physical card. */
  status: PhysicalCardStatus;
};

/** Physical Card Suspended Status Information */
export type PhysicalCardSuspendedStatusInfo = PhysicalCardStatusInfo & {
  __typename: 'PhysicalCardSuspendedStatusInfo';
  /** Reason why the card is suspended. */
  reason: Scalars['String']['output'];
  /** Physical Card status (always Suspended for type PhysicalCardSuspendedStatusInfo). */
  status: PhysicalCardStatus;
};

/** Physical Card To Activate Status Information */
export type PhysicalCardToActivateStatusInfo = PhysicalCardStatusInfo & {
  __typename: 'PhysicalCardToActivateStatusInfo';
  /** address to deliver the physical card */
  address: Address;
  /** Estimated delivery date */
  estimatedDeliveryDate?: Maybe<Scalars['DateTime']['output']>;
  /** `true` if PIN Code is available. */
  isPINReady: Scalars['Boolean']['output'];
  /** Name of the shipping provider (Ex: LaPoste, DHL ...) */
  shippingProvider?: Maybe<Scalars['String']['output']>;
  /** Physical Card status (always ToActivate for type PhysicalCardToActivateStatusInfo). */
  status: PhysicalCardStatus;
  /** Shipping tracking number */
  trackingNumber?: Maybe<Scalars['String']['output']>;
};

/** Rejection returned when the Physical Card is not the expected status */
export type PhysicalCardWrongStatusRejection = Rejection & {
  __typename: 'PhysicalCardWrongStatusRejection';
  currentStatus: PhysicalCardStatus;
  expectedStatus: PhysicalCardStatus;
  identifier: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type PreProvisioningSuvCardSettings = {
  __typename: 'PreProvisioningSUVCardSettings';
  ownerProvisioningSUVCards?: Maybe<Scalars['ID']['output']>;
  preProvisioningSUVCards: Scalars['Boolean']['output'];
  preProvisioningSUVCardsAvailablePercentage: Scalars['Float']['output'];
  preProvisioningSUVNumberOfCards: Scalars['Int']['output'];
};

export type PreferredNotificationChannel =
  /** Use In-App notification */
  | 'App'
  /** Use Swan SMS */
  | 'Sms';

/** Inputs to print a physical card */
export type PrintPhysicalCardInput = {
  /** Address to deliver the physical card */
  address: CompleteAddressInput;
  /** Unique identifier of a card */
  cardId: Scalars['ID']['input'];
  /** `true` if the user must choose their PIN Code */
  choosePINCode: Scalars['Boolean']['input'];
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
  /** Custom options to use for physical cards. */
  physicalCardCustomOptions?: InputMaybe<PhysicalCardCustomOptionsForPrintInput>;
};

export type PrintPhysicalCardPayload = AccountMembershipNotAllowedRejection | AlreadyValidPhysicalCardRejection | BadAccountStatusRejection | BadRequestRejection | CardNotFoundRejection | CardProductDisabledRejection | CardProductNotApplicableToPhysicalCardsRejection | MissingMandatoryFieldRejection | PrintPhysicalCardSuccessPayload | ValidationRejection;

export type PrintPhysicalCardSuccessPayload = {
  __typename: 'PrintPhysicalCardSuccessPayload';
  /** The physicalCard created */
  physicalCard: PhysicalCard;
};

/** Type of product sold. Gifts and donations can be club subscription or collection of donations (for associations), tips collection, contributions for local authorities */
export type ProductType =
  | 'GiftsAndDonations'
  | 'Goods'
  | 'Services'
  | 'VirtualGoods';

export type ProjectCardDesigns = {
  __typename: 'ProjectCardDesigns';
  /** Project card product designs */
  cardDesigns: Array<CardProductDesign>;
  /** Unique identifier of a project */
  id: Scalars['ID']['output'];
  /** Visual Id from the issuing card processor (Monext) */
  issuingProcessorVisualId?: Maybe<Scalars['String']['output']>;
  /** Project name */
  name?: Maybe<Scalars['String']['output']>;
  /** Project's pre provisioning suv card settings */
  preProvisioningSUVCardSettings?: Maybe<PreProvisioningSuvCardSettings>;
  /** Specific card product for companies */
  specificCardProductCodeForCompanies?: Maybe<Scalars['String']['output']>;
};

export type ProjectCardSettings = {
  __typename: 'ProjectCardSettings';
  /** Project's card settings */
  cardSettings: Array<CardSettings>;
  /** Unique identifier of a project */
  id: Scalars['ID']['output'];
  /** Visual Id from the issuing card processor (Monext) */
  issuingProcessorVisualId?: Maybe<Scalars['String']['output']>;
  /** Project name */
  name?: Maybe<Scalars['String']['output']>;
  /** Project's pre provisioning suv card settings */
  preProvisioningSUVCardSettings?: Maybe<PreProvisioningSuvCardSettings>;
  /** Specific card product for companies */
  specificCardProductCodeForCompanies?: Maybe<Scalars['String']['output']>;
};

/** Project Card Settings Background Type */
export type ProjectCardSettingsBackgroundType =
  /** when Card setting background is black */
  | 'Black'
  /** when Card setting background is customized */
  | 'Custom'
  /** when Card setting background is light */
  | 'Silver';

/** Card Status */
export type ProjectCardStatus =
  /** when project's card settings are Disabled */
  | 'Disabled'
  /** when project's card settings are Enabled */
  | 'Enabled'
  /** when project's card settings are Initiated */
  | 'Initiated'
  /** when project's card settings are Rejected */
  | 'Rejected'
  /** when project's card settings are Suspended */
  | 'Suspended'
  /** when project's card settings are ToReview */
  | 'ToReview';

export type ProjectForbiddenRejection = Rejection & {
  __typename: 'ProjectForbiddenRejection';
  message: Scalars['String']['output'];
};

/** Rejection returned when the Project Funding has been exceeded */
export type ProjectFundingLimitExceededRejection = Rejection & {
  __typename: 'ProjectFundingLimitExceededRejection';
  message: Scalars['String']['output'];
};

/** Public information of a `Project` */
export type ProjectInfo = {
  __typename: 'ProjectInfo';
  B2BMembershipIDVerification?: Maybe<Scalars['Boolean']['output']>;
  /** Your accent color, used in white label interfaces. Most of the time for call to actions */
  accentColor?: Maybe<Scalars['String']['output']>;
  /**
   * the currently active card settings
   * @deprecated Use cardProduct.cardDesigns instead
   */
  activeCardSettings?: Maybe<CardSettings>;
  /** Flag that determines if desktop authentication is enabled for this project */
  allowsDesktopAuthentication: Scalars['Boolean']['output'];
  amlRiskLevel?: Maybe<AmlRiskLevel>;
  /** The card products associated with this project. */
  cardProducts?: Maybe<Array<CardProduct>>;
  /** Your custom subdomain used in consents */
  customConsentSubdomain?: Maybe<Scalars['String']['output']>;
  /** Unique identifier of the project */
  id: Scalars['ID']['output'];
  /** URL of your logo */
  logoUri?: Maybe<Scalars['String']['output']>;
  /** Your project name displayed in white label interfaces and in the terms and conditions */
  name: Scalars['String']['output'];
  /** Your OAuth client id */
  oAuthClientId?: Maybe<Scalars['String']['output']>;
  /** Project status */
  status: ProjectStatus;
  supportingDocumentSettings?: Maybe<SupportingDocumentSettings>;
  /**
   * Unique id of your current Terms and Conditions of Use
   * @deprecated use tcuDocumentUrl from the onboarding query
   */
  tcuDocumentId: Scalars['String']['output'];
  /**
   * URL to your Terms and Conditions of Use document depending on the provided language
   * @deprecated use tcuDocumentUrl from the onboarding query
   */
  tcuDocumentUri: Scalars['String']['output'];
  /** The type of your project */
  type: ProjectType;
  /** Web banking settings */
  webBankingSettings?: Maybe<WebBankingSettings>;
};


/** Public information of a `Project` */
export type ProjectInfoTcuDocumentUriArgs = {
  language: Scalars['String']['input'];
};

/** Rejection returned when the Project Instant Funding limit has been exceeded */
export type ProjectInstantFundingLimitExceededRejection = Rejection & {
  __typename: 'ProjectInstantFundingLimitExceededRejection';
  message: Scalars['String']['output'];
};

export type ProjectInvalidStatusRejection = Rejection & {
  __typename: 'ProjectInvalidStatusRejection';
  message: Scalars['String']['output'];
};

export type ProjectNotFound = Rejection & {
  __typename: 'ProjectNotFound';
  message: Scalars['String']['output'];
};

/** Rejection returned when the project is not found */
export type ProjectNotFoundRejection = Rejection & {
  __typename: 'ProjectNotFoundRejection';
  message: Scalars['String']['output'];
};

export type ProjectSettingsForbiddenError = Rejection & {
  __typename: 'ProjectSettingsForbiddenError';
  message: Scalars['String']['output'];
};

export type ProjectSettingsNotFound = Rejection & {
  __typename: 'ProjectSettingsNotFound';
  message: Scalars['String']['output'];
};

export type ProjectSettingsStatusNotReachable = Rejection & {
  __typename: 'ProjectSettingsStatusNotReachable';
  message: Scalars['String']['output'];
};

export type ProjectStatus =
  | 'BetaLiveAccess'
  | 'Disabled'
  | 'Enabled'
  | 'FullLiveAccess'
  | 'Initiated'
  | 'LimitedLiveAccess'
  | 'MeetingScheduled'
  | 'PendingCompliance'
  | 'PendingLiveReview'
  | 'Rejected'
  | 'Suspended'
  | 'ToReview';

export type ProjectType =
  | 'COMPANY'
  | 'COMPANY_AND_CUSTOMERS'
  | 'Company'
  | 'CompanyAndCustomers'
  | 'INDIVIDUAL'
  | 'Individual';

/** Rejection returned when the public onboarding is disabled */
export type PublicOnboardingDisabledRejection = Rejection & {
  __typename: 'PublicOnboardingDisabledRejection';
  message: Scalars['String']['output'];
};

export type Query = {
  __typename: 'Query';
  /** Returns an account from its id. */
  account?: Maybe<Account>;
  /** Returns an account holder from its id. */
  accountHolder?: Maybe<AccountHolder>;
  /**
   * Returns the list of account holders.
   *
   * *For a Project access token, this is all the account holders of the project and for an User access token, these are the holders of the accounts of which the user has an account membership.*
   */
  accountHolders: AccountHolderConnection;
  accountInvoice?: Maybe<Invoice>;
  /** Returns an account membership from its id. */
  accountMembership?: Maybe<AccountMembership>;
  /** The list of account memberships */
  accountMemberships: AccountMembershipConnection;
  /** Returns an account statement by id */
  accountStatement: Statement;
  /**
   * Returns the list of accounts.
   *
   * *For a Project access token, this is all the accounts of the project and for an User access token, these are the accounts of which the user has an account membership.*
   */
  accounts: AccountConnection;
  /** Return the capital deposit case for the provided id. */
  capitalDepositCase?: Maybe<CapitalDepositCase>;
  /**
   * Returns the list of capital deposit cases.
   *
   * *This query is restricted to a Project access token ([Learn More](https://docs.swan.io/api/authentication))*
   */
  capitalDepositCases: CapitalDepositCaseConnection;
  /** Return the CapitalDepositDocument for the provided id. */
  capitalDepositDocument?: Maybe<CapitalDepositDocument>;
  /** Returns a card from its id. */
  card?: Maybe<Card>;
  /**
   * Returns the list of cards.
   *
   * *For a Project access token, this is all the cards of the project and for an User access token, these are the cards owned by the user whom have an account membership.*
   */
  cards: CardConnection;
  /** Returns a consent by its id. */
  consent: Consent;
  /**
   * Return the list of consents
   *
   * For a User access token : return the list of consents for the signed-in user
   * For a Project access token : return the list of consents for the project. This list can be filtered by userId
   *
   * *([Learn more on authentication](https://docs.swan.io/api/authentication))*
   */
  consents: ConsentConnection;
  /** Returns a request for funding limit settings change from its id. */
  fundingLimitSettingsChangeRequest?: Maybe<FundingLimitSettingsChangeRequest>;
  /** Returns funding source by id. */
  fundingSource?: Maybe<FundingSource>;
  /** Allows to check iban validation. It also returns its bank and reachability information */
  ibanValidation?: Maybe<IbanValidationResult>;
  /** Returns an international beneficiary dynamic forms. */
  internationalBeneficiaryDynamicForms?: Maybe<InternationalBeneficiaryDynamicForms>;
  /** Request an international credit transfer quote. */
  internationalCreditTransferQuote?: Maybe<InternationalCreditTransferQuote>;
  /** Returns an international credit transfer dynamic form. */
  internationalCreditTransferTransactionDetailsDynamicForm?: Maybe<InternationalCreditTransferDynamicForm>;
  /** Returns a merchant profile by id. */
  merchantProfile?: Maybe<MerchantProfile>;
  /**
   * Returns an onboarding from its id.
   *
   * *This query is restricted to a Project access token ([Learn More](https://docs.swan.io/api/authentication))*
   */
  onboarding: Onboarding;
  /**
   * Returns the list of onboardings.
   *
   * *This query is restricted to a Project access token ([Learn More](https://docs.swan.io/api/authentication))*
   */
  onboardings: OnboardingConnection;
  /** Returns a payment from its id. */
  payment: Payment;
  /**
   * Returns the list of payments.
   *
   * *For a Project access token, this is all the payments of the project and for an User access token, these are the payments initiated by the user*
   */
  payments: PaymentConnection;
  /** Returns the project infos you set in the dashboard. */
  projectInfo: ProjectInfo;
  /** Returns a received direct debit mandate from its id. */
  receivedDirectDebitMandate?: Maybe<ReceivedDirectDebitMandate>;
  /** Return the Shareholder for the provided id. */
  shareholder?: Maybe<Shareholder>;
  /** Returns standing order from its id. */
  standingOrder?: Maybe<StandingOrder>;
  /**
   * Returns a supporting document collection from its id.
   *
   * *This query is restricted to a Project access token ([Learn More](https://docs.swan.io/api/authentication))*
   */
  supportingDocumentCollection?: Maybe<SupportingDocumentCollection>;
  /**
   * Returns a transaction from its id.
   *
   * *This query is restricted to a Project access token ([Learn More](https://docs.swan.io/api/authentication))*
   */
  transaction: Transaction;
  /**
   * A list of transactions of a project.
   *
   * *For a Project access token, this is all the transactions of the project (only available with project access token)*
   */
  transactions: TransactionConnection;
  /**
   * Returns a User
   *
   * For a Project access token : it requires a user id and returns the user for the given id
   * For a User access token : returns the signed-in user and all of their data at Swan
   *
   * *([Learn more on authentication](https://docs.swan.io/api/authentication))*
   */
  user?: Maybe<User>;
  /**
   * Returns the list of user that joined the project
   * The search field allows to search in : id, phonNumber, firstName, allFirstNames, lastName
   *
   * *This query is restricted to a Project access token ([Learn More](https://docs.swan.io/api/authentication))*
   */
  users: UserConnection;
};


export type QueryAccountArgs = {
  accountId: Scalars['ID']['input'];
};


export type QueryAccountHolderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAccountHoldersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<AccountHolderFilterInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<AccountHolderOrderByInput>;
};


export type QueryAccountInvoiceArgs = {
  invoiceId: Scalars['ID']['input'];
};


export type QueryAccountMembershipArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAccountMembershipsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<AccountMembershipsFilterInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<AccountMembershipOrderByInput>;
};


export type QueryAccountStatementArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAccountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<AccountFilterInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<AccountOrderByInput>;
};


export type QueryCapitalDepositCaseArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCapitalDepositCasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<CapitalDepositCaseFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<CapitalDepositCaseOrderByInput>;
};


export type QueryCapitalDepositDocumentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCardArgs = {
  cardId: Scalars['ID']['input'];
};


export type QueryCardsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<CardFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<CardOrderByInput>;
};


export type QueryConsentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryConsentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<ConsentsFiltersInput>;
  first?: Scalars['Int']['input'];
};


export type QueryFundingLimitSettingsChangeRequestArgs = {
  fundingLimitSettingsChangeRequestId: Scalars['ID']['input'];
};


export type QueryFundingSourceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryIbanValidationArgs = {
  input?: InputMaybe<IbanValidationInput>;
};


export type QueryInternationalBeneficiaryDynamicFormsArgs = {
  amount: AmountInput;
  dynamicFields?: InputMaybe<Array<InternationalBeneficiaryDetailsInput>>;
  language?: InputMaybe<InternationalCreditTransferDisplayLanguage>;
};


export type QueryInternationalCreditTransferQuoteArgs = {
  accountId: Scalars['ID']['input'];
  targetAmount: AmountInput;
};


export type QueryInternationalCreditTransferTransactionDetailsDynamicFormArgs = {
  internationalBeneficiary: InternationalBeneficiaryInput;
  language?: InputMaybe<InternationalCreditTransferDisplayLanguage>;
  refreshableFields?: InputMaybe<Array<InternationalCreditTransferDetailsInput>>;
  targetAmount: AmountInput;
};


export type QueryMerchantProfileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOnboardingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOnboardingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<OnboardingFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OnboardingOrderByInput>;
};


export type QueryPaymentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPaymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<PaymentFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<PaymentOrderByInput>;
};


export type QueryReceivedDirectDebitMandateArgs = {
  receivedDirectDebitMandateId: Scalars['ID']['input'];
};


export type QueryShareholderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStandingOrderArgs = {
  standingOrderId: Scalars['ID']['input'];
};


export type QuerySupportingDocumentCollectionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTransactionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<TransactionsFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<TransactionsOrderByInput>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<UserFilterInput>;
  first?: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
};

export type RadioField = Field & {
  __typename: 'RadioField';
  allowedValues: Array<AllowedValue>;
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  refreshDynamicFieldsOnChange: Scalars['Boolean']['output'];
  required: Scalars['Boolean']['output'];
};

/** Information that can be used to determine where the iban can be used */
export type Reachability = {
  __typename: 'Reachability';
  /** Can be used for transfer over SEPA (can be used in initiateCreditTransfer mutation) */
  sepaCreditTransfer: Scalars['Boolean']['output'];
  /** Can be used for instant transfer over SEPA */
  sepaCreditTransferInst: Scalars['Boolean']['output'];
  /** Can be used for B2B direct debit over SEPA */
  sepaDirectDebitB2b: Scalars['Boolean']['output'];
  /** Can be used for direct debit over SEPA */
  sepaDirectDebitCore: Scalars['Boolean']['output'];
};

/** Define a reason with a message */
export type Reason = {
  message?: Maybe<Scalars['String']['output']>;
};

/** Input version */
export type ReasonInput = {
  message?: InputMaybe<Scalars['String']['input']>;
};

/** Interface for Received Direct Debit Mandate */
export type ReceivedDirectDebitMandate = {
  /** Creation date of the received direct debit mandate */
  createdAt: Scalars['DateTime']['output'];
  /** Date of the last direct debit transaction executed for the concerned received direct debit mandate */
  executedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Expiry date of the received direct debit mandate */
  expiredAt?: Maybe<Scalars['Date']['output']>;
  /** Unique identifier of the received direct debit mandate, generated by Swan */
  id: Scalars['ID']['output'];
  /** Mandate name */
  name?: Maybe<Scalars['String']['output']>;
  /** Date of signature of the received direct debit mandate */
  signatureDate?: Maybe<Scalars['Date']['output']>;
  /** Mandate status information of the received direct debit mandate */
  statusInfo: ReceivedDirectDebitMandateStatusInfo;
  /** Last Update date of the received direct debit mandate */
  updatedAt: Scalars['DateTime']['output'];
  /** Version of the received direct debit mandate */
  version: Scalars['String']['output'];
};

/** Rejection returned if the received direct debit mandate already exist */
export type ReceivedDirectDebitMandateAlreadyExistRejection = Rejection & {
  __typename: 'ReceivedDirectDebitMandateAlreadyExistRejection';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Received direct debit mandate is canceled and therefore can't be enabled/suspended or updated */
export type ReceivedDirectDebitMandateCanceledRejection = Rejection & {
  __typename: 'ReceivedDirectDebitMandateCanceledRejection';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type ReceivedDirectDebitMandateConnection = Connection & {
  __typename: 'ReceivedDirectDebitMandateConnection';
  /** ReceivedDirectDebitMandateEdge list */
  edges: Array<ReceivedDirectDebitMandateEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of elements in the list */
  totalCount: Scalars['Int']['output'];
};

/** Implements the Relay Edge interface */
export type ReceivedDirectDebitMandateEdge = Edge & {
  __typename: 'ReceivedDirectDebitMandateEdge';
  /** Opaque identifier pointing to this onboarding node in the pagination mechanism */
  cursor: Scalars['String']['output'];
  /** The received direct debit mandate */
  node: ReceivedDirectDebitMandate;
};

/** Rejection returned if the received direct debit mandate is not a B2b mandate */
export type ReceivedDirectDebitMandateNotB2bRejection = Rejection & {
  __typename: 'ReceivedDirectDebitMandateNotB2bRejection';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/**
 * Error returned if the received direct debit mandate was not found or if the user does not have the rights to receive information abo
 * ut the existence of the received direct debit mandate
 */
export type ReceivedDirectDebitMandateNotFoundRejection = Rejection & {
  __typename: 'ReceivedDirectDebitMandateNotFoundRejection';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Received Direct Debit Mandate Scheme */
export type ReceivedDirectDebitMandateScheme =
  /** When the received direct debit mandate can only be used for SEPA B2B direct debit transactions */
  | 'SepaDirectDebitB2b'
  /** When the received direct debit mandate can only be used for SEPA Core direct debit transactions */
  | 'SepaDirectDebitCore';

/** Received Direct Debit Mandate Statuses */
export type ReceivedDirectDebitMandateStatus =
  /** When the received direct debit mandate is canceled */
  | 'Canceled'
  /** When the received direct debit mandate requires the initiation of a consent process */
  | 'ConsentInitiationPending'
  /** When the received direct debit mandate is pending consent completion */
  | 'ConsentPending'
  /** When the received direct debit mandate is enabled */
  | 'Enabled'
  /** When the received direct debit mandate is suspended */
  | 'Suspended';

/** Received Direct Debit Mandate status information */
export type ReceivedDirectDebitMandateStatusInfo = {
  /** Received Direct Debit Mandate status */
  status: ReceivedDirectDebitMandateStatus;
};

/** Received Direct Debit Mandate Canceled status information */
export type ReceivedDirectDebitMandateStatusInfoCanceled = ReceivedDirectDebitMandateStatusInfo & {
  __typename: 'ReceivedDirectDebitMandateStatusInfoCanceled';
  /** Date of cancellation */
  canceledAt: Scalars['DateTime']['output'];
  /** Received Direct Debit Mandate status (always Canceled for type ReceivedDirectDebitMandateStatusInfoCanceled) */
  status: ReceivedDirectDebitMandateStatus;
};

/** Received Direct Debit Mandate ConsentInitiationPending status information */
export type ReceivedDirectDebitMandateStatusInfoConsentInitiationPending = ReceivedDirectDebitMandateStatusInfo & {
  __typename: 'ReceivedDirectDebitMandateStatusInfoConsentInitiationPending';
  /** Received Direct Debit Mandate status (always ConsentInitiationPending for type ReceivedDirectDebitMandateStatusInfoConsentInitiationPending) */
  status: ReceivedDirectDebitMandateStatus;
};

/** Received Direct Debit Mandate ConsentPending status information */
export type ReceivedDirectDebitMandateStatusInfoConsentPending = ReceivedDirectDebitMandateStatusInfo & {
  __typename: 'ReceivedDirectDebitMandateStatusInfoConsentPending';
  /** The consent required to consent to a received direct debit mandate */
  consent: Consent;
  /** Received Direct Debit Mandate status (always ConsentInitiationPending for type ReceivedDirectDebitMandateStatusInfoConsentPending) */
  status: ReceivedDirectDebitMandateStatus;
};

/** Received Direct Debit Mandate Enabled status information */
export type ReceivedDirectDebitMandateStatusInfoEnabled = ReceivedDirectDebitMandateStatusInfo & {
  __typename: 'ReceivedDirectDebitMandateStatusInfoEnabled';
  /** Date at which the received direct debit mandate has been moved to the enabled status */
  enabledAt: Scalars['DateTime']['output'];
  /** Received Direct Debit Mandate status (always Enabled for type ReceivedDirectDebitMandateStatusInfoEnabled) */
  status: ReceivedDirectDebitMandateStatus;
};

/** Received Direct Debit Mandate Suspended status information */
export type ReceivedDirectDebitMandateStatusInfoSuspended = ReceivedDirectDebitMandateStatusInfo & {
  __typename: 'ReceivedDirectDebitMandateStatusInfoSuspended';
  /** Received Direct Debit Mandate status (always Suspended for type ReceivedDirectDebitMandateStatusInfoSuspended) */
  status: ReceivedDirectDebitMandateStatus;
  /** Date of the last time the received direct debit mandate has been moved to the suspended status */
  suspendedAt: Scalars['DateTime']['output'];
};

/** Input to select the beneficiary and the originator to perform a refund */
export type RefundInput = {
  /** url the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
  /** transactions to refund */
  refundTransactions: Array<RefundTransaction>;
};

/** The respond body to a refund mutation */
export type RefundPayload = RefundRejection | RefundSuccessPayload;

/** Rejection returned if the transaction status is not correct for the desired action */
export type RefundRejection = Rejection & {
  __typename: 'RefundRejection';
  code: RefundRejectionCode;
  message: Scalars['String']['output'];
};

/** Reason code that explains why we can't refund the transactions */
export type RefundRejectionCode =
  /** Error server */
  | 'ServerError'
  /** The transaction status is not Booked */
  | 'TransactionNonRefundable'
  /** The transaction couldn't be found or the user doesn't have the 'canInitiatePayment' rights on the account */
  | 'TransactionNotFound';

/** Consent generated by the refund mutation */
export type RefundSuccessPayload = {
  __typename: 'RefundSuccessPayload';
  /** optional consent that need to be validated for the refund to go through */
  consent?: Maybe<Consent>;
};

/** Information about the transaction to refund */
export type RefundTransaction = {
  /** amount to refund in the same currency as the account */
  amount: AmountInput;
  /**
   * only used when the transaction was a credit transfer
   *
   * date when the credit transfer will be executed, if `null` the credit transfer is executed today
   */
  executionDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** label for the refund transaction (max 140 characters) */
  label?: InputMaybe<Scalars['String']['input']>;
  /** id of the transaction to refund */
  originTransactionId: Scalars['String']['input'];
  /**
   * reference assigned by the initiating party, to unambiguously identify the transaction.
   * This reference is passed on, unchanged, throughout the entire end-to-end chain for credit transfers. (regex [A-Za-z0-9(\\-)(\\_)(\\?)(\\.)(\\+),' ]{1,35})
   */
  reference?: InputMaybe<Scalars['String']['input']>;
};

/** Funding Source Rejected Reason */
export type RejectedFundingSourceReason =
  | 'AccountVerificationRejected';

/** Funding Source Rejected status information */
export type RejectedFundingSourceStatusInfo = FundingSourceStatusInfo & {
  __typename: 'RejectedFundingSourceStatusInfo';
  /** Reason code of the rejection */
  reasonCode: RejectedFundingSourceReason;
  /** Date at which the funding source was rejected */
  rejectedAt: Scalars['Date']['output'];
  /** Funding Source Rejected status */
  status: FundingSourceStatus;
};

/** RejectedMerchantPaymentMethodStatusInfo */
export type RejectedMerchantPaymentMethodStatusInfo = MerchantPaymentMethodStatusInfo & {
  __typename: 'RejectedMerchantPaymentMethodStatusInfo';
  /** Merchant Payment Method rejected date */
  rejectedAt: Scalars['Date']['output'];
  status: MerchantPaymentMethodStatus;
};

/** RejectedMerchantProfileStatusInfo */
export type RejectedMerchantProfileStatusInfo = MerchantProfileStatusInfo & {
  __typename: 'RejectedMerchantProfileStatusInfo';
  rejectedAt: Scalars['Date']['output'];
  status: MerchantProfileStatus;
};

/** The following reason code for a rejected transaction are defined: */
export type RejectedReasonCode =
  /** Rejected because the account is closed */
  | 'AccountClosed'
  /** Rejected because the account holder is deceased */
  | 'AccountHolderDeceased'
  /** Rejected by the account membership */
  | 'AccountMembershipRefused'
  /** Rejected because the account is suspended */
  | 'AccountSuspended'
  /** Rejected because the account is unknown */
  | 'AccountUnknown'
  /** Rejected by the bank */
  | 'BankRefused'
  /** Rejected because the creditor bank is not reachable */
  | 'BeneficiaryBankNotReachable'
  /** Rejected because the card is expired */
  | 'CardExpired'
  /** Rejected because the card is not activated yet */
  | 'CardNotActivated'
  /** Rejected because the card has been permanently blocked */
  | 'CardPermanentlyBlocked'
  /** Rejected because the card is suspended */
  | 'CardSuspended'
  /** Rejected because the creditor bank is offline */
  | 'CreditorBankOffline'
  /** Rejected following an error from the creditor bank */
  | 'CreditorBankTechnicalErrorOccurred'
  /** Rejected following a timeout from the creditor bank */
  | 'CreditorBankTimeout'
  /** Rejected because the debtor account is closed */
  | 'DebtorAccountClosed'
  /** Rejected because the debtor is a non business account and the transaction is a B2B SEPA Direct Debit transaction */
  | 'DebtorAccountConsumer'
  /** Rejected because the debtor account is unknown */
  | 'DebtorAccountUnknown'
  /** Rejected because the debtor bank is offline */
  | 'DebtorBankOffline'
  /** Rejected following an error from the debtor bank */
  | 'DebtorBankTechnicalErrorOccurred'
  /** Rejected following a timeout from the debtor bank */
  | 'DebtorBankTimeout'
  /** Rejected because the debtor account holder is dead */
  | 'DebtorDeceased'
  /** Rejected because of a fraud suspicion */
  | 'FraudSuspected'
  /** Rejected because the beneficiary IBAN is invalid */
  | 'IbanInvalid'
  /** Rejected because the beneficiary IBAN is suspended */
  | 'IbanSuspended'
  /** Rejected because of insufficient funds on the account */
  | 'InsufficientFunds'
  /** Rejected because the expiration date entered does not match the one on the card */
  | 'InvalidExpirationDate'
  /** Rejected because the PIN is invalid */
  | 'InvalidPin'
  /** Rejected because there were too many invalid tries on the PIN validation */
  | 'InvalidPinAttemptsExceeded'
  /** Rejected because the security number entered does not match the one on the card */
  | 'InvalidSecurityNumber'
  /** Rejected because of invalid transfer date */
  | 'InvalidTransferDate'
  /** Rejected by debtor because the mandate is invalid */
  | 'MandateInvalid'
  /** Rejected because the merchant must request a new transaction with authorisation */
  | 'MerchantShouldResubmitAuthorization'
  /** Rejected because the mandate has been revoked or does not exist */
  | 'NoMandate'
  /** Rejected by the partner (you) */
  | 'PartnerRefused'
  /** Rejected following an error or a timeout from the partner */
  | 'PartnerTechnicalErrorOccurred'
  /** Rejected because the maximum amount allowed on the given period has been exceeded */
  | 'PeriodAmountLimitExceeded'
  /** Rejected because the maximum number of transactions on the given period has been exceeded */
  | 'PeriodNbTransactionLimitExceeded'
  /** Rejected because a transaction with PIN code is required to continue to using the card */
  | 'PinRequiredForFurtherTransaction'
  /** Rejected by bank with no specified reason */
  | 'ReasonNotSpecifiedByBank'
  /** Rejected by debtor with no specified reason */
  | 'ReasonNotSpecifiedByDebtor'
  /** Rejected by bank for regulatory reason */
  | 'RegulatoryReason'
  /** Rejected because the Swipe method is not supported, a retry using the Chip and PIN method is necessary */
  | 'RetryWithChipAndPin'
  /** Rejected because the debtor or the creditor bank is offline */
  | 'SwanOffline'
  /** Rejected by Swan */
  | 'SwanRefused'
  /** Rejected because of a Swan technical error */
  | 'SwanTechnicalErrorOccurred'
  /** Rejected because of a Swan timeout */
  | 'SwanTimeout'
  /** Rejected because the terms and conditions limit has been exceeded */
  | 'TermsAndConditionsLimitExceeded'
  /** Rejected because the maximum amount for a transaction has been exceeded */
  | 'TransactionAmountLimitExceeded'
  /** Rejected by bank because this transaction is duplicated */
  | 'TransactionDuplicated'
  /** Rejected because the transaction is forbidden on this type of account */
  | 'TransactionOnAccountTypeNotAllowed'
  /** Rejected because the type of transaction is forbidden on the account */
  | 'TransactionTypeNotAllowed';

/** Rejected transaction status information */
export type RejectedTransactionStatusInfo = TransactionStatusInfo & {
  __typename: 'RejectedTransactionStatusInfo';
  /** `true` if the transaction had a fallback */
  hasFallback: Scalars['Boolean']['output'];
  /** reason code */
  reason: RejectedReasonCode;
  /** status of the transaction */
  status: TransactionStatus;
};

/** Rejected Verification Reason */
export type RejectedVerificationReason =
  | 'HolderDidNotMatch';

/** Rejected Information */
export type RejectedVerificationStatusInfo = AccountVerificationStatusInfo & {
  __typename: 'RejectedVerificationStatusInfo';
  /** Rejected Reason */
  reason: RejectedVerificationReason;
  /** Date at which the verification was rejected */
  rejectedAt: Scalars['DateTime']['output'];
  /** Account verification status (Rejected) */
  status: AccountVerificationStatus;
};

export type Rejection = {
  message: Scalars['String']['output'];
};

export type ReleasedReason =
  /** Authorization has been superseded by an advice */
  | 'AdviceReceived'
  /** Authorization fully captured by one or more debits */
  | 'Captured'
  /** Authorization expired */
  | 'Expired'
  /** Authorization manually released by Swan */
  | 'ManuallyReleased'
  /** Authorization released by the merchant */
  | 'MerchantReleased'
  /** Authorization released for other/undefined reasons */
  | 'Other';

/** Released card transaction status information */
export type ReleasedTransactionStatusInfo = TransactionStatusInfo & {
  __typename: 'ReleasedTransactionStatusInfo';
  /** reason of the released transaction */
  reason: ReleasedReason;
  /** The date when the transaction was released */
  releaseDate: Scalars['DateTime']['output'];
  /** status of the transaction */
  status: TransactionStatus;
};

/** The document corresponding to a identification report */
export type ReportDocument = {
  __typename: 'ReportDocument';
  /** List of the associated files */
  files: Array<ReportDocumentFile>;
  /** Unique identifier of the report document */
  id: Scalars['String']['output'];
  /** The type of the document */
  type: DocumentType;
};

/** The file associated to the report document */
export type ReportDocumentFile = DocumentFile & {
  __typename: 'ReportDocumentFile';
  /** The file's temporary download url */
  downloadUrl: Scalars['String']['output'];
};

/** here is the exchange rate detail */
export type ReportExchangeRate = {
  __typename: 'ReportExchangeRate';
  contractIdentification?: Maybe<Scalars['String']['output']>;
  exchangeRate: Scalars['Float']['output'];
  quotationDate: Scalars['Date']['output'];
  sourceCurrency: Scalars['Currency']['output'];
  targetCurrency: Scalars['Currency']['output'];
  unitCurrency: Scalars['Currency']['output'];
};

export type RequestMerchantPaymentMethodsInput = {
  /** Input for Check payment method */
  check?: InputMaybe<CheckPaymentMethodInput>;
  /** Input for the Internal Direct Debit B2B payment method */
  internalDirectDebitB2B?: InputMaybe<InternalDirectDebitB2BPaymentMethodInput>;
  /** Input for the Internal Direct Debit Standard payment method */
  internalDirectDebitStandard?: InputMaybe<InternalDirectDebitStandardPaymentMethodInput>;
  /** ID of the Merchant Profile */
  merchantProfileId: Scalars['ID']['input'];
  /** Input for the Sepa Direct Debit B2B payment method */
  sepaDirectDebitB2B?: InputMaybe<SepaDirectDebitB2BPaymentMethodInput>;
  /** Input for the Sepa Direct Debit Core payment method */
  sepaDirectDebitCore?: InputMaybe<SepaDirectDebitCorePaymentMethodInput>;
};

export type RequestMerchantPaymentMethodsPayload = ForbiddenRejection | InternalErrorRejection | NotFoundRejection | RequestMerchantPaymentMethodsSuccessPayload | ValidationRejection;

export type RequestMerchantPaymentMethodsSuccessPayload = {
  __typename: 'RequestMerchantPaymentMethodsSuccessPayload';
  merchantProfile?: Maybe<MerchantProfile>;
};

/** Request Update Merchant Profile */
export type RequestMerchantProfileUpdate = {
  __typename: 'RequestMerchantProfileUpdate';
  /** created date */
  createdAt: Scalars['DateTime']['output'];
  /** expected average basket value. */
  expectedAverageBasket: Amount;
  /** Expected annual activity volumes for all payment method */
  expectedMonthlyPaymentVolume: Amount;
  /** The Request ID */
  id: Scalars['ID']['output'];
  /** Url of the merchant's logo */
  merchantLogoUrl?: Maybe<Scalars['String']['output']>;
  /** Business name of the merchant, i.e. name that will be displayed on debtors' bank statements */
  merchantName: Scalars['String']['output'];
  /** The Merchant Profile ID to update */
  merchantProfileId: Scalars['ID']['output'];
  /** Url of the merchant's website */
  merchantWebsite?: Maybe<Scalars['String']['output']>;
  /** Type of product sold. List of value: Goods, Services, VirtualGoods, GiftsAndDonations. Gifts and donations can be club subscription or collection of donations (for associations), tips collection, contributions for local authorities */
  productType: ProductType;
  /** The status of the request */
  status: RequestMerchantProfileUpdateStatus;
  /** updated date */
  updatedAt: Scalars['DateTime']['output'];
};

/** Input to update a Merchant Profile */
export type RequestMerchantProfileUpdateInput = {
  /** expected average basket value. */
  expectedAverageBasket: AmountInput;
  /** Expected annual activity volumes for all payment methods. */
  expectedMonthlyPaymentVolume: AmountInput;
  /**
   * base64 encoded merchant's logo.
   * Use '' to delete the field. Don't add the field to the mutation if you want to keep the existing value.
   */
  merchantLogo?: InputMaybe<Scalars['String']['input']>;
  /** Business name of the merchant, i.e. name that will be displayed on debtors' bank statements */
  merchantName: Scalars['String']['input'];
  /** ID of the MerchantProfile to update */
  merchantProfileId: Scalars['ID']['input'];
  /**
   * Url of the merchant's website.
   * Use '' to delete the field. Don't add the field to the mutation if you want to keep the existing value.
   */
  merchantWebsite?: InputMaybe<Scalars['String']['input']>;
  /** Type of product sold. Gifts and donations can be club subscription or collection of donations (for associations), tips collection, contributions for local authorities */
  productType: ProductType;
};

/** Add Merchant Profile Payload */
export type RequestMerchantProfileUpdatePayload = AccountNotFoundRejection | ForbiddenRejection | InternalErrorRejection | RequestMerchantProfileUpdateSuccessPayload;

/** Request Merchant Profile Update Statuses */
export type RequestMerchantProfileUpdateStatus =
  /** A Request that has already been approved */
  | 'Enabled'
  /** A Request is created in the PendingReview status */
  | 'PendingReview'
  /** A Request that has already been rejected */
  | 'Rejected';

/** Add Merchant Profile Success Payload */
export type RequestMerchantProfileUpdateSuccessPayload = {
  __typename: 'RequestMerchantProfileUpdateSuccessPayload';
  /** Request Update Merchant Profile */
  requestMerchantProfileUpdate: RequestMerchantProfileUpdate;
};

export type RequestSupportingDocumentCollectionReviewInput = {
  /** Id of the supporting document collection to review. */
  supportingDocumentCollectionId: Scalars['ID']['input'];
};

export type RequestSupportingDocumentCollectionReviewPayload = ForbiddenRejection | RequestSupportingDocumentCollectionReviewSuccessPayload | SupportingDocumentCollectionNotFoundRejection | SupportingDocumentCollectionStatusNotAllowedRejection | ValidationRejection;

export type RequestSupportingDocumentCollectionReviewSuccessPayload = {
  __typename: 'RequestSupportingDocumentCollectionReviewSuccessPayload';
  supportingDocumentCollection: SupportingDocumentCollection;
};

/** The document corresponding to a residence permit */
export type ResidencePermitDocument = {
  __typename: 'ResidencePermitDocument';
  /** The date at which the residence permit expires */
  expiryDate?: Maybe<Scalars['Date']['output']>;
  /** List of the associated files */
  files: Array<ResidencePermitDocumentFile>;
  /** Unique identifier of the residence permit document */
  id: Scalars['String']['output'];
  /** The date at which the residence permit was issued */
  issueDate?: Maybe<Scalars['Date']['output']>;
  /** Machine-readable zone code of the residence permit */
  mrz?: Maybe<Scalars['String']['output']>;
  /** Number of the residence permit */
  number?: Maybe<Scalars['String']['output']>;
  /** The type of the document */
  type: DocumentType;
};

/** The file associated to the resident permit document */
export type ResidencePermitDocumentFile = DocumentFile & {
  __typename: 'ResidencePermitDocumentFile';
  /** The file's temporary download url */
  downloadUrl: Scalars['String']['output'];
  /** From which side the residence permit's picture was taken */
  side: DocumentFileSide;
};

export type ResidencyAddressInput = {
  /** Address line 1. Length must be from 0 to 255 characters */
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  /** AddressLine2. Length must be from 0 to 255 characters */
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  /** City. Length must be from 0 to 100 characters */
  city?: InputMaybe<Scalars['String']['input']>;
  /** Country */
  country?: InputMaybe<Scalars['CCA3']['input']>;
  /** Postal code. Length must be from 0 to 50 characters */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** State of residency. Length must be from 0 to 100 characters */
  state?: InputMaybe<Scalars['String']['input']>;
};

/** Account membership restricted to */
export type RestrictedTo = {
  __typename: 'RestrictedTo';
  /** birth date */
  birthDate?: Maybe<Scalars['Date']['output']>;
  /** first name */
  firstName: Scalars['String']['output'];
  /** last name */
  lastName: Scalars['String']['output'];
  /** phone number */
  phoneNumber: Scalars['String']['output'];
};

/** Input when the account membership is restricted to a verified user */
export type RestrictedToInput = {
  /** Account member birth date */
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  /** Account member first name */
  firstName: Scalars['String']['input'];
  /** Account member last name */
  lastName: Scalars['String']['input'];
  /** Account member phone number */
  phoneNumber: Scalars['PhoneNumber']['input'];
};

/** Rejection returned if the mutation cannot be executed in another context than user */
export type RestrictedToUserRejection = Rejection & {
  __typename: 'RestrictedToUserRejection';
  message: Scalars['String']['output'];
};

export type ResumeAccountMembershipInput = {
  /** Unique identifier of a given account membership to resume */
  accountMembershipId: Scalars['ID']['input'];
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
};

export type ResumeAccountMembershipPayload = ForbiddenRejection | ResumeAccountMembershipSuccessPayload | UserNotAllowedToManageAccountMembershipRejection | ValidationRejection;

export type ResumeAccountMembershipSuccessPayload = {
  __typename: 'ResumeAccountMembershipSuccessPayload';
  consent: Consent;
};

/** Inputs to resume a physical card */
export type ResumePhysicalCardInput = {
  /** Unique identifier of a card */
  cardId: Scalars['ID']['input'];
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
};

export type ResumePhysicalCardPayload = CardNotFoundRejection | ForbiddenRejection | PhysicalCardNotFoundRejection | PhysicalCardWrongStatusRejection | ResumePhysicalCardSuccessPayload | UserNotCardHolderRejection | ValidationRejection;

export type ResumePhysicalCardSuccessPayload = {
  __typename: 'ResumePhysicalCardSuccessPayload';
  /** The consent required to resume a physical card */
  consent: Consent;
  /** The physicalCard to resume */
  physicalCard: PhysicalCard;
};

/**
 * Percentage over a number of business days, that is applied to all funds collected to compute a Reserved amount
 * This amount cannot be used over the corresponding business days
 */
export type RollingReserve = {
  __typename: 'RollingReserve';
  /** Percentage of the funding amount to be reserved */
  percentage: Scalars['Int']['output'];
  /** Number of business days the computed amount is reserved */
  rollingDays: Scalars['Int']['output'];
};

/**
 * *SOON TO BE DEPRECATED*
 * External Beneficiary type SEPA
 */
export type SepaBeneficiary = Beneficiary & {
  __typename: 'SEPABeneficiary';
  /** beneficiary address */
  address?: Maybe<Address>;
  /** unique identifier of a beneficiary */
  id?: Maybe<Scalars['ID']['output']>;
  /** `true` if this new beneficiary is the account holder himself in an other financial institution. */
  isMyOwnIban: Scalars['Boolean']['output'];
  /** maskedIBAN if the beneficiary is a an account in an other financial institution */
  maskedIBAN?: Maybe<Scalars['String']['output']>;
  /** full name of the beneficiary */
  name: Scalars['String']['output'];
};

/** Sepa Credit Transfer Creditor */
export type SepaCreditTransferCreditor = {
  /** BIC */
  BIC?: Maybe<Scalars['String']['output']>;
  /** IBAN */
  IBAN?: Maybe<Scalars['String']['output']>;
  /** maskedIBAN */
  maskedIBAN: Scalars['String']['output'];
  /** full name of the creditor */
  name: Scalars['String']['output'];
};

/** Sepa Credit Transfer Debtor */
export type SepaCreditTransferDebtor = {
  /** BIC */
  BIC?: Maybe<Scalars['String']['output']>;
  /** IBAN */
  IBAN?: Maybe<Scalars['String']['output']>;
  /** maskedIBAN */
  maskedIBAN: Scalars['String']['output'];
  /** full name of the debtor */
  name: Scalars['String']['output'];
};

/** Sepa Credit Transfer Creditor for Incoming transaction */
export type SepaCreditTransferInCreditor = SepaCreditTransferCreditor & {
  __typename: 'SEPACreditTransferInCreditor';
  /** BIC */
  BIC?: Maybe<Scalars['String']['output']>;
  /** IBAN */
  IBAN?: Maybe<Scalars['String']['output']>;
  /**
   * account number
   * @deprecated because it is not already implemented (a default value is set).
   */
  accountNumber: Scalars['AccountNumber']['output'];
  /** maskedIBAN */
  maskedIBAN: Scalars['String']['output'];
  /** full name of the creditor */
  name: Scalars['String']['output'];
  /** identifier of a Virtual IBAN */
  virtualIBANEntryId?: Maybe<Scalars['ID']['output']>;
};

/** Sepa Credit Transfer Debtor for Incoming transaction */
export type SepaCreditTransferInDebtor = SepaCreditTransferDebtor & {
  __typename: 'SEPACreditTransferInDebtor';
  /** BIC */
  BIC?: Maybe<Scalars['String']['output']>;
  /** IBAN */
  IBAN?: Maybe<Scalars['String']['output']>;
  /** maskedIBAN */
  maskedIBAN: Scalars['String']['output'];
  /** full name of the debtor (max 70 characters) */
  name: Scalars['String']['output'];
  /** identifier of a Virtual IBAN */
  virtualIBANEntryId?: Maybe<Scalars['ID']['output']>;
};

/**
 * *SOON TO BE DEPRECATED*
 * Sepa Credit Transfer Debtor for Incoming transaction
 */
export type SepaCreditTransferInternalInDebtor = SepaCreditTransferDebtor & {
  __typename: 'SEPACreditTransferInternalInDebtor';
  /** BIC */
  BIC?: Maybe<Scalars['String']['output']>;
  /** IBAN */
  IBAN?: Maybe<Scalars['String']['output']>;
  /**
   * account number
   * @deprecated because it is not already implemented (a default value is set).
   */
  accountNumber: Scalars['AccountNumber']['output'];
  /** maskedIBAN */
  maskedIBAN: Scalars['String']['output'];
  /** full name of the debtor */
  name: Scalars['String']['output'];
  /** identifier of a Virtual IBAN */
  virtualIBANEntryId?: Maybe<Scalars['ID']['output']>;
};

/**
 * *SOON TO BE DEPRECATED*
 * Sepa Credit Transfer Creditor for internal transaction
 */
export type SepaCreditTransferInternalOutCreditor = SepaCreditTransferCreditor & {
  __typename: 'SEPACreditTransferInternalOutCreditor';
  /** BIC */
  BIC?: Maybe<Scalars['String']['output']>;
  /** IBAN */
  IBAN?: Maybe<Scalars['String']['output']>;
  /** account number */
  accountNumber: Scalars['AccountNumber']['output'];
  /**
   * beneficiary if the beneficiary is already saved
   * @deprecated because it is not already implemented.
   */
  beneficiary?: Maybe<InternalBeneficiary>;
  /** maskedIBAN */
  maskedIBAN: Scalars['String']['output'];
  /** full name of the creditor */
  name: Scalars['String']['output'];
  /** identifier of a Virtual IBAN */
  virtualIBANEntryId?: Maybe<Scalars['ID']['output']>;
};

/** Sepa Credit Transfer Creditor for Outgoing transaction */
export type SepaCreditTransferOutCreditor = SepaCreditTransferCreditor & {
  __typename: 'SEPACreditTransferOutCreditor';
  /** BIC */
  BIC?: Maybe<Scalars['String']['output']>;
  /** IBAN */
  IBAN?: Maybe<Scalars['String']['output']>;
  /**
   * beneficiary if the beneficiary is already saved
   * @deprecated because it is not already implemented.
   */
  beneficiary?: Maybe<SepaBeneficiary>;
  /** maskedIBAN */
  maskedIBAN: Scalars['String']['output'];
  /** full name of the creditor */
  name: Scalars['String']['output'];
};

/** Sepa Credit Transfer Debtor for internal transaction */
export type SepaCreditTransferOutDebtor = SepaCreditTransferDebtor & {
  __typename: 'SEPACreditTransferOutDebtor';
  /** BIC */
  BIC?: Maybe<Scalars['String']['output']>;
  /** IBAN */
  IBAN?: Maybe<Scalars['String']['output']>;
  /**
   * account number
   * @deprecated because it is not already implemented (a default value is set).
   */
  accountNumber: Scalars['AccountNumber']['output'];
  /** maskedIBAN */
  maskedIBAN: Scalars['String']['output'];
  /** full name of the debtor */
  name: Scalars['String']['output'];
  /** identifier of a Virtual IBAN */
  virtualIBANEntryId?: Maybe<Scalars['ID']['output']>;
};

/** Sepa Credit Transfer transaction */
export type SepaCreditTransferTransaction = Transaction & {
  __typename: 'SEPACreditTransferTransaction';
  /** matching account for the transaction */
  account?: Maybe<Account>;
  /** amount */
  amount: Amount;
  /** booked balance after this transaction */
  bookedBalanceAfter?: Maybe<Amount>;
  /** name of the counterparty. e.g Merchant name, Creditor name, Beneficiary Name ... */
  counterparty: Scalars['String']['output'];
  /** created date */
  createdAt: Scalars['DateTime']['output'];
  /** creditor information */
  creditor: SepaCreditTransferCreditor;
  /** debtor information */
  debtor: SepaCreditTransferDebtor;
  /** a date that reflects the execution date of a transaction from a user viewpoint. Can be used for sorting transactions. */
  executionDate: Scalars['DateTime']['output'];
  /**
   * an arbitrary identifier that was defined by you when you created this transaction.
   *
   * For example, you can define it in the CreditTransferInput mutation.
   */
  externalReference?: Maybe<Scalars['String']['output']>;
  /** unique identifier of the transaction */
  id: Scalars['ID']['output'];
  /** label */
  label: Scalars['String']['output'];
  /** origin transaction associated to this transaction */
  originTransaction?: Maybe<Transaction>;
  /** ID of the origin transaction associated to this transaction */
  originTransactionId?: Maybe<Scalars['String']['output']>;
  /** payment associated to this transaction */
  payment?: Maybe<Payment>;
  /** ID of the payment associated to this transaction */
  paymentId?: Maybe<Scalars['String']['output']>;
  /** payment method identifier used for this transaction. e.g masked PAN or IBAN or accountNumber */
  paymentMethodIdentifier: Scalars['String']['output'];
  /** payment product used for this transaction */
  paymentProduct: PaymentProduct;
  /** reference assigned by the initiating party, to unambiguously identify the transaction. This reference is passed on, unchanged, throughout the entire end-to-end chain. */
  reference: Scalars['String']['output'];
  /** a date that reflects the time at which the user asked the transaction to be executed */
  requestedExecutionAt?: Maybe<Scalars['DateTime']['output']>;
  /** r-transaction reason */
  returnReason?: Maybe<TransactionReasonCode>;
  /** side (Credit or Debit) */
  side: TransactionSide;
  /** status information */
  statusInfo: TransactionStatusInfo;
  /** type */
  type: TransactionTypeEnum;
  /** updated date */
  updatedAt: Scalars['DateTime']['output'];
};

/** Sepa Direct Debit Creditor */
export type SepaDirectDebitCreditor = {
  /** BIC */
  BIC?: Maybe<Scalars['String']['output']>;
  /** IBAN */
  IBAN?: Maybe<Scalars['String']['output']>;
  /** maskedIBAN */
  maskedIBAN: Scalars['String']['output'];
  /** full name of the creditor */
  name: Scalars['String']['output'];
};

/** Sepa Direct Debit Debtor */
export type SepaDirectDebitDebtor = {
  /** BIC */
  BIC?: Maybe<Scalars['String']['output']>;
  /** IBAN */
  IBAN?: Maybe<Scalars['String']['output']>;
  /** maskedIBAN */
  maskedIBAN: Scalars['String']['output'];
  /** full name of the debtor */
  name: Scalars['String']['output'];
};

/** Sepa Direct Debit Creditor for Input transaction */
export type SepaDirectDebitInCreditor = SepaDirectDebitCreditor & {
  __typename: 'SEPADirectDebitInCreditor';
  /** BIC */
  BIC?: Maybe<Scalars['String']['output']>;
  /** IBAN */
  IBAN?: Maybe<Scalars['String']['output']>;
  /** account number */
  accountNumber: Scalars['AccountNumber']['output'];
  /** maskedIBAN */
  maskedIBAN: Scalars['String']['output'];
  /** full name of the creditor */
  name: Scalars['String']['output'];
  /** identifier of a Virtual IBAN */
  virtualIBANEntryId?: Maybe<Scalars['ID']['output']>;
};

/** Sepa Direct Debtor for Input transaction */
export type SepaDirectDebitInDebtor = SepaDirectDebitDebtor & {
  __typename: 'SEPADirectDebitInDebtor';
  /** BIC */
  BIC?: Maybe<Scalars['String']['output']>;
  /** IBAN */
  IBAN?: Maybe<Scalars['String']['output']>;
  /** beneficiary if the beneficiary is already saved */
  beneficiary?: Maybe<SepaBeneficiary>;
  /** maskedIBAN */
  maskedIBAN: Scalars['String']['output'];
  /** full name of the debtor */
  name: Scalars['String']['output'];
  /** identifier of a Virtual IBAN */
  virtualIBANEntryId?: Maybe<Scalars['ID']['output']>;
};

export type SepaDirectDebitMandate = {
  /** Unique identifier of the received direct debit mandate, generated by Swan */
  id: Scalars['ID']['output'];
};

/** Sepa Direct Debit Creditor for Outgoing transaction */
export type SepaDirectDebitOutCreditor = SepaDirectDebitCreditor & {
  __typename: 'SEPADirectDebitOutCreditor';
  /** BIC */
  BIC?: Maybe<Scalars['String']['output']>;
  /** IBAN */
  IBAN?: Maybe<Scalars['String']['output']>;
  /**
   * beneficiary if the beneficiary is already saved
   * @deprecated because it is not already implemented (a default value is set).
   */
  beneficiary?: Maybe<SepaBeneficiary>;
  /** maskedIBAN */
  maskedIBAN: Scalars['String']['output'];
  /** full name of the creditor (max 70 characters) */
  name: Scalars['String']['output'];
  /** identifier of a Virtual IBAN */
  virtualIBANEntryId?: Maybe<Scalars['ID']['output']>;
};

/** Sepa Direct Debtor for Outgoing transaction */
export type SepaDirectDebitOutDebtor = SepaDirectDebitDebtor & {
  __typename: 'SEPADirectDebitOutDebtor';
  /** BIC */
  BIC?: Maybe<Scalars['String']['output']>;
  /** IBAN */
  IBAN?: Maybe<Scalars['String']['output']>;
  /**
   * account number
   * @deprecated because it is not already implemented (a default value is set).
   */
  accountNumber: Scalars['AccountNumber']['output'];
  /** maskedIBAN */
  maskedIBAN: Scalars['String']['output'];
  /** full name of the debtor */
  name: Scalars['String']['output'];
  /** identifier of a Virtual IBAN */
  virtualIBANEntryId?: Maybe<Scalars['ID']['output']>;
};

/** Scheme that will be used to create the underlying payment mandate for this funding source */
export type SepaDirectDebitScheme =
  /** Sepa Direct Debit B2B Scheme */
  | 'SepaDirectDebitB2b'
  /** Sepa Direct Debit Core Scheme */
  | 'SepaDirectDebitCore';

/** Sepa Direct Debit transaction */
export type SepaDirectDebitTransaction = Transaction & {
  __typename: 'SEPADirectDebitTransaction';
  /** matching account for the transaction */
  account?: Maybe<Account>;
  /** amount */
  amount: Amount;
  /** booked balance after this transaction */
  bookedBalanceAfter?: Maybe<Amount>;
  /** name of the counterparty. e.g Merchant name, Creditor name, Beneficiary Name ... */
  counterparty: Scalars['String']['output'];
  /** created date */
  createdAt: Scalars['DateTime']['output'];
  /** creditor information */
  creditor: SepaDirectDebitCreditor;
  /** debtor information */
  debtor: SepaDirectDebitDebtor;
  /** a date that reflects the execution date of a transaction from a user viewpoint. Can be used for sorting transactions. */
  executionDate: Scalars['DateTime']['output'];
  /**
   * an arbitrary identifier that was defined by you when you created this transaction.
   *
   * For example, you can define it in the CreditTransferInput mutation.
   */
  externalReference?: Maybe<Scalars['String']['output']>;
  /** unique identifier of the transaction */
  id: Scalars['ID']['output'];
  /** label */
  label: Scalars['String']['output'];
  /** matching SEPA mandate for the transaction */
  mandate?: Maybe<SepaDirectDebitMandate>;
  /** origin transaction associated to this transaction */
  originTransaction?: Maybe<Transaction>;
  /** ID of the origin transaction associated to this transaction */
  originTransactionId?: Maybe<Scalars['String']['output']>;
  /** payment associated to this transaction */
  payment?: Maybe<Payment>;
  /** ID of the payment associated to this transaction */
  paymentId?: Maybe<Scalars['String']['output']>;
  /** payment method identifier used for this transaction. e.g masked PAN or IBAN or accountNumber */
  paymentMethodIdentifier: Scalars['String']['output'];
  /** payment product used for this transaction */
  paymentProduct: PaymentProduct;
  /** reference assigned by the initiating party, to unambiguously identify the transaction. This reference is passed on, unchanged, throughout the entire end-to-end chain. */
  reference: Scalars['String']['output'];
  /** a date that reflects the time at which the user asked the transaction to be executed */
  requestedExecutionAt?: Maybe<Scalars['DateTime']['output']>;
  /** reserved amount of the transaction computed with the rolling reserve. */
  reservedAmount?: Maybe<Amount>;
  /** date on which reserved funds become available. */
  reservedAmountReleasedAt?: Maybe<Scalars['DateTime']['output']>;
  /** r-transaction reason */
  returnReason?: Maybe<TransactionReasonCode>;
  /** side (Credit or Debit) */
  side: TransactionSide;
  /** status information */
  statusInfo: TransactionStatusInfo;
  /** type */
  type: TransactionTypeEnum;
  /** updated date */
  updatedAt: Scalars['DateTime']['output'];
};

/** Payment direct debit mandate for SEPA */
export type SepaPaymentDirectDebitMandate = PaymentDirectDebitMandate & PaymentMandate & SepaDirectDebitMandate & {
  __typename: 'SEPAPaymentDirectDebitMandate';
  /** Account Holder information */
  accountHolder: AccountHolder;
  /** Creation date of the SEPA Direct Debit Payment Mandate */
  createdAt: Scalars['DateTime']['output'];
  /** SEPA Direct Debit Payment Mandate creditor information */
  creditor: SepaPaymentMandateCreditor;
  /** SEPA Direct Debit Payment Mandate debtor information */
  debtor: SepaPaymentMandateDebtor;
  /** Date of the the last transaction executed for the concerned SEPA Direct Debit Payment Mandate */
  executedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Expiry date of the SEPA Direct Debit Payment Mandate */
  expiredAt?: Maybe<Scalars['Date']['output']>;
  /** Unique identifier of the SEPA Direct Debit Payment Mandate */
  id: Scalars['ID']['output'];
  /** SEPA Direct Debit Payment Mandate PDF document URL */
  mandateDocumentUrl: Scalars['String']['output'];
  /** Custom name of the mandate */
  name?: Maybe<Scalars['String']['output']>;
  /** Unique reference of the SEPA Direct Debit Payment Mandate */
  reference: Scalars['String']['output'];
  /** SEPA Direct Debit Payment Mandate scheme */
  scheme: SepaPaymentMandateScheme;
  /** SEPA Direct Debit Payment Mandate sequence */
  sequence: SepaPaymentMandateSequence;
  /** Signature date of the SEPA Direct Debit Payment Mandate */
  signatureDate?: Maybe<Scalars['Date']['output']>;
  /** SEPA Direct Debit Payment Mandate status information */
  statusInfo: PaymentMandateStatusInfo;
  /** List of transactions associated with the SEPA Payment Direct Debit Mandate. */
  transactions?: Maybe<TransactionConnection>;
  /** SEPA direct debit ultimate creditor name */
  ultimateCreditorName?: Maybe<Scalars['String']['output']>;
  /** Last Update date of the SEPA Direct Debit Payment Mandate */
  updatedAt: Scalars['DateTime']['output'];
};


/** Payment direct debit mandate for SEPA */
export type SepaPaymentDirectDebitMandateTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<TransactionsFiltersInput>;
  first?: Scalars['Int']['input'];
};

export type SepaPaymentMandateCreditor = PaymentMandateCreditor & {
  __typename: 'SEPAPaymentMandateCreditor';
  /** SEPA Direct Debit Payment Mandate creditor address */
  address: Address;
  /** SEPA Direct Debit Payment Mandate creditor UUID */
  id: Scalars['ID']['output'];
  /** SEPA Direct Debit Payment Mandate Sepa Creditor Idenfier (SCI) */
  identifier: Scalars['SepaCreditorIdentifier']['output'];
  /** SEPA Direct Debit Payment Mandate creditor name */
  name: Scalars['String']['output'];
};

export type SepaPaymentMandateDebtor = PaymentMandateDebtor & {
  __typename: 'SEPAPaymentMandateDebtor';
  /** SEPA Direct Debit Payment Mandate debtor address. Mandatory for non EEA Countries */
  address?: Maybe<Address>;
  /** SEPA Direct Debit Payment Mandate debtor country */
  country: Scalars['CCA3']['output'];
  /** SEPA Direct Debit Payment Mandate debtor e-mail */
  email?: Maybe<Scalars['String']['output']>;
  /** SEPA Direct Debit Payment Mandate debtor IBAN */
  iban: Scalars['IBAN']['output'];
  /** SEPA Direct Debit Payment Mandate debtor name */
  name: Scalars['String']['output'];
};

export type SepaPaymentMandateScheme =
  /** SEPA Direct Debit B2B */
  | 'SepaDirectDebitB2b'
  /** SEPA Direct Debit Core */
  | 'SepaDirectDebitCore';

/** SEPA Direct Debit Payment Mandate Sequence */
export type SepaPaymentMandateSequence =
  /** The SEPA Direct Debit Payment Mandate can be used only once */
  | 'OneOff'
  /** The SEPA Direct Debit Payment Mandate can be used for recurrent collections */
  | 'Recurrent';

/** Received direct debit mandate for SEPA */
export type SepaReceivedDirectDebitMandate = ReceivedDirectDebitMandate & SepaDirectDebitMandate & {
  __typename: 'SEPAReceivedDirectDebitMandate';
  /** Account of the received SEPA direct debit mandate debtor */
  account?: Maybe<Account>;
  /** Creation date of the received SEPA direct debit mandate */
  createdAt: Scalars['DateTime']['output'];
  /** Received SEPA direct debit creditor */
  creditor: SepaReceivedDirectDebitMandateCreditor;
  /** Date of the last SEPA direct debit transaction executed for the concerned received SEPA direct debit mandate */
  executedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Expiry date of the received SEPA direct debit mandate, computed automatically (36 months from the executedAt date) */
  expiredAt?: Maybe<Scalars['Date']['output']>;
  /** Iban of the received SEPA direct debit mandate debtor */
  iban: Scalars['IBAN']['output'];
  /** Unique identifier of the received SEPA direct debit mandate, generated by Swan */
  id: Scalars['ID']['output'];
  /** Mandate name */
  name?: Maybe<Scalars['String']['output']>;
  /** Received SEPA direct debit Unique Mandate Reference (UMR) */
  reference: Scalars['String']['output'];
  /** Received SEPA direct debit mandate scheme */
  scheme: SepaReceivedDirectDebitMandateScheme;
  /** Received SEPA direct debit mandate sequence */
  sequence: SepaReceivedDirectDebitMandateSequence;
  /** Date of signature of the received SEPA direct debit mandate */
  signatureDate?: Maybe<Scalars['Date']['output']>;
  /** Mandate status information of the received SEPA direct debit mandate */
  statusInfo: ReceivedDirectDebitMandateStatusInfo;
  /** List of transactions associated with the SEPA Receive Direct Debit Mandate. */
  transactions?: Maybe<TransactionConnection>;
  /** Received SEPA direct debit ultimate creditor name */
  ultimateCreditorName?: Maybe<Scalars['String']['output']>;
  /** Last Update date of the received SEPA direct debit mandate */
  updatedAt: Scalars['DateTime']['output'];
  /** Version of the received SEPA direct debit mandate */
  version: Scalars['String']['output'];
};


/** Received direct debit mandate for SEPA */
export type SepaReceivedDirectDebitMandateTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<TransactionsFiltersInput>;
  first?: Scalars['Int']['input'];
};

/** SEPA received direct debit mandate creditor */
export type SepaReceivedDirectDebitMandateCreditor = {
  __typename: 'SEPAReceivedDirectDebitMandateCreditor';
  /** Address of the SEPA creditor */
  address: Address;
  /** SEPA Creditor identifier (SCI) */
  identifier: Scalars['String']['output'];
  /** Name of the SEPA creditor */
  name: Scalars['String']['output'];
};

/** Received SEPA direct debit mandate scheme */
export type SepaReceivedDirectDebitMandateScheme =
  /** When the received SEPA direct debit mandate can only be used for SEPA B2B direct debit transactions */
  | 'SepaDirectDebitB2b'
  /** When the received SEPA direct debit mandate can only be used for SEPA Core direct debit transactions */
  | 'SepaDirectDebitCore';

/** SEPA received direct debit mandate sequence */
export type SepaReceivedDirectDebitMandateSequence =
  /** When the authorisation is given once by the SEPA Debtor to collect only one single SEPA direct debit */
  | 'OneOff'
  /** When the authorisation by the Debtor can be used for regular SEPA direct debits initiated by the Creditor */
  | 'Recurrent';

export type ScheduleStandingOrderInput = {
  /** Account the Standing Order will be attached to */
  accountId: Scalars['String']['input'];
  /**
   * Fix Amount that will be periodically transferred
   * *the value must be empty when `targetAvailableBalance` is defined*
   */
  amount?: InputMaybe<AmountInput>;
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
  /** Transfer mode of the Standing Order */
  creditTransferMode?: InputMaybe<CreditTransferMode>;
  /** Earlier date the Standing Order will be executed */
  firstExecutionDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** label (max 140 characters) */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Latest date the Standing Order will be executed */
  lastExecutionDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Scheduled period of Standing Order */
  period: StandingOrderPeriod;
  /** reference assigned by the initiating party, to unambiguously identify the transaction. This reference is passed on, unchanged, throughout the entire end-to-end chain. (regex [A-Za-z0-9(\\-)(\\_)(\\?)(\\.)(\\+),' ]{1,35}) */
  reference?: InputMaybe<Scalars['String']['input']>;
  /** SEPA beneficiary of the Standing ORder */
  sepaBeneficiary?: InputMaybe<SepaBeneficiaryInput>;
  /**
   * Target available balance that will be used for periodically clipping the account
   * *the value must be empty when `amount` is defined*
   */
  targetAvailableBalance?: InputMaybe<AmountInput>;
};

export type ScheduleStandingOrderPayload = ForbiddenRejection | InternalErrorRejection | InvalidArgumentRejection | ScheduleStandingOrderSuccessPayload;

export type ScheduleStandingOrderSuccessPayload = {
  __typename: 'ScheduleStandingOrderSuccessPayload';
  standingOrder: StandingOrder;
};

export type Scheme = {
  __typename: 'Scheme';
  fields: Array<Field>;
  remainingFieldsToRefreshCount: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  type: InternationalCreditTransferRouteInput;
};

/** Rejection returned when adding a B2B mandate with an Individual debtor */
export type SchemeWrongRejection = Rejection & {
  __typename: 'SchemeWrongRejection';
  message: Scalars['String']['output'];
};

export type SelectField = Field & {
  __typename: 'SelectField';
  allowedValues: Array<AllowedValue>;
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  refreshDynamicFieldsOnChange: Scalars['Boolean']['output'];
  required: Scalars['Boolean']['output'];
};

/** Sepa beneficiary account */
export type SepaBeneficiaryInput = {
  /** beneficiary address */
  address?: InputMaybe<AddressInput>;
  /** International Bank Account Number */
  iban: Scalars['IBAN']['input'];
  /** `true` if this new beneficiary is the account holder himself in another financial institution. */
  isMyOwnIban: Scalars['Boolean']['input'];
  /** Full name of the beneficiary (min 2 characters, max 70 characters). The name should not include any special characters. */
  name: Scalars['String']['input'];
  /** `true` if this new beneficiary will be saved to the beneficiary list of the debited account. */
  save: Scalars['Boolean']['input'];
};

/** SepaDirectDebitB2BMerchantPaymentMethod */
export type SepaDirectDebitB2BMerchantPaymentMethod = MerchantPaymentMethod & {
  __typename: 'SepaDirectDebitB2BMerchantPaymentMethod';
  /** Unique identifier tied to every version of a given Merchant Payment Method */
  id: Scalars['ID']['output'];
  /** Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type */
  methodId: Scalars['ID']['output'];
  /**
   * Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type
   * DEPRECATED use the methodId field instead.
   * @deprecated Use methodId instead
   */
  productId: Scalars['ID']['output'];
  /** Rolling Reserve applied to the Merchant Payment Method */
  rollingReserve?: Maybe<RollingReserve>;
  /** When the above is false, the value of the Sepa Creditor Identifier used */
  sepaCreditorIdentifier?: Maybe<Scalars['String']['output']>;
  /** Status of the Merchant Payment Method */
  statusInfo: MerchantPaymentMethodStatusInfo;
  /** The Merchant Payment Method Type */
  type: MerchantPaymentMethodType;
  /** Date at which the Merchant Payment Method was last updated */
  updatedAt: Scalars['Date']['output'];
  /** Whether this payment method uses the Swan Sepa Creditor Identifier */
  useSwanSepaCreditorIdentifier: Scalars['Boolean']['output'];
  /** Version of the Merchant Payment Method */
  version: Scalars['Int']['output'];
};

export type SepaDirectDebitB2BPaymentMethodInput = {
  /** If `true`, the Payment Method will be Enabled */
  activate?: InputMaybe<Scalars['Boolean']['input']>;
  /** Your own SCI - Mandatory if the useSwanCreditorIdentifier is set to false, otherwise Swan does not take this input into account (even if not empty) */
  sepaCreditorIdentifier?: InputMaybe<Scalars['String']['input']>;
  /** If `true`, the transaction will be created with the Swan Creditor Identifier */
  useSwanSepaCreditorIdentifier?: Scalars['Boolean']['input'];
};

/** SepaDirectDebitCoreMerchantPaymentMethod */
export type SepaDirectDebitCoreMerchantPaymentMethod = MerchantPaymentMethod & {
  __typename: 'SepaDirectDebitCoreMerchantPaymentMethod';
  /** Unique identifier tied to every version of a given Merchant Payment Method */
  id: Scalars['ID']['output'];
  /** Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type */
  methodId: Scalars['ID']['output'];
  /**
   * Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type
   * DEPRECATED use the methodId field instead.
   * @deprecated Use methodId instead
   */
  productId: Scalars['ID']['output'];
  /** Rolling Reserve applied to the Merchant Payment Method */
  rollingReserve?: Maybe<RollingReserve>;
  /** When the above is false, the value of the Sepa Creditor Identifier used */
  sepaCreditorIdentifier?: Maybe<Scalars['String']['output']>;
  /** Status of the Merchant Payment Method */
  statusInfo: MerchantPaymentMethodStatusInfo;
  /** The Merchant Payment Method Type */
  type: MerchantPaymentMethodType;
  /** Date at which the Merchant Payment Method was last updated */
  updatedAt: Scalars['Date']['output'];
  /** Whether this payment method uses the Swan Sepa Creditor Identifier */
  useSwanSepaCreditorIdentifier: Scalars['Boolean']['output'];
  /** Version of the Merchant Payment Method */
  version: Scalars['Int']['output'];
};

export type SepaDirectDebitCorePaymentMethodInput = {
  /** If `true`, the Payment Method will be Pending Review */
  activate?: InputMaybe<Scalars['Boolean']['input']>;
  /** Your own SCI - Mandatory if the useSwanCreditorIdentifier is set to false, otherwise Swan does not take this input into account (even if not empty) */
  sepaCreditorIdentifier?: InputMaybe<Scalars['String']['input']>;
  /** If `true`, the transaction will be created with the Swan Creditor Identifier */
  useSwanSepaCreditorIdentifier?: Scalars['Boolean']['input'];
};

export type SepaDirectDebitPaymentCollectionInput = {
  /** Payment Mandate ID generated by Swan */
  mandateId: Scalars['ID']['input'];
  /** Date at which the Swan merchant wishes the payment to be executed */
  requestedExecutionAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SepaPaymentMandateDebtorInput = {
  /** SEPA Direct Debit Payment Mandate debtor IBAN */
  IBAN: Scalars['String']['input'];
  address: AddressInput;
  /** SEPA Direct Debit Payment Mandate debtor name */
  name: Scalars['String']['input'];
};

export type SequenceType =
  | 'OneOff'
  | 'Recurring';

/** Rejection returned when signature is not valid or remote IP address is not allowed */
export type ServerConsentCredentialsNotValidOrOutdatedRejection = Rejection & {
  __typename: 'ServerConsentCredentialsNotValidOrOutdatedRejection';
  message: Scalars['String']['output'];
};

/** Rejection returned when server consent is not allowed on the consent */
export type ServerConsentNotAllowedForConsentOperationRejection = Rejection & {
  __typename: 'ServerConsentNotAllowedForConsentOperationRejection';
  message: Scalars['String']['output'];
};

/** Rejection returned when server consent is not allowed for the project associated with the consent */
export type ServerConsentNotAllowedForProjectRejection = Rejection & {
  __typename: 'ServerConsentNotAllowedForProjectRejection';
  message: Scalars['String']['output'];
};

/** Rejection returned when there are no server consent credentials for the project */
export type ServerConsentProjectCredentialMissingRejection = Rejection & {
  __typename: 'ServerConsentProjectCredentialMissingRejection';
  message: Scalars['String']['output'];
};

/** Rejection returned when the server consent project credentials are not found */
export type ServerConsentProjectCredentialNotFoundRejection = Rejection & {
  __typename: 'ServerConsentProjectCredentialNotFoundRejection';
  message: Scalars['String']['output'];
};

/** Rejection returned when the server consent project settings are not found */
export type ServerConsentProjectSettingsNotFoundRejection = Rejection & {
  __typename: 'ServerConsentProjectSettingsNotFoundRejection';
  message: Scalars['String']['output'];
};

/**
 * Rejection returned when the signature is not valid
 * @Deprecated
 */
export type ServerConsentSignatureNotValidRejection = Rejection & {
  __typename: 'ServerConsentSignatureNotValidRejection';
  message: Scalars['String']['output'];
};

/** Shareholder of a company creating a Capital Deposit Case */
export type Shareholder = {
  __typename: 'Shareholder';
  /** Unique identifier of the shareholder account. */
  accountId?: Maybe<Scalars['String']['output']>;
  /** Amount the shareholder has to deposit. */
  capitalDepositAmount: Amount;
  /** Created date */
  createdAt: Scalars['DateTime']['output'];
  /** Shareholder documents for the capital deposit case */
  documents: Array<CapitalDepositDocument>;
  /** Unique identifier of a shareholder. */
  id: Scalars['ID']['output'];
  /** Extra information about the shareholder */
  info: ShareholderInfo;
  /** Onboarding information of the shareholder. */
  onboarding?: Maybe<Onboarding>;
  /** Status of the shareholder during the process with Swan. */
  status: ShareholderStatus;
  /** Updated date */
  updatedAt: Scalars['DateTime']['output'];
};

/** Shareholder information. */
export type ShareholderInfo = CompanyShareholder | IndividualShareholder;

/** Status of the shareholder during the process with Swan. */
export type ShareholderStatus =
  /** When the shareholder's capital is wired to the notary. */
  | 'CapitalFundsWiredToNotary'
  /** When the shareholder has wired their share of the capital. */
  | 'CapitalTransferred'
  /** Waiting for the shareholder to finalize their onboarding. */
  | 'PendingOnboarding'
  /** Waiting for the shareholder to wire their share of the capital on their temporary Swan account. */
  | 'WaitingForTransfer'
  /** Waiting for Swan compliance team to verify the shareholder. */
  | 'WaitingForVerification';

/** Shareholder type to identify individuals and companies. */
export type ShareholderType =
  /** Company shareholder type. */
  | 'Company'
  /** Individual shareholder type. */
  | 'Individual';

export type Signature = {
  __typename: 'Signature';
  status: SignatureStatus;
};

/** Signature data used during apple pay inApp provisioning */
export type SignatureData = {
  /** list of apple generated certificates */
  certificates: Array<Certificate>;
  /** nonce */
  nonce: Scalars['String']['input'];
  /** nonce signed by the secure element */
  nonceSignature: Scalars['String']['input'];
};

export type SignatureStatus =
  | 'Canceled'
  | 'Created'
  | 'Failed'
  | 'Invalid'
  | 'PendingVerification'
  | 'Processing'
  | 'Signed';

export type SimulationCardType =
  | 'Physical'
  | 'Virtual';

export type SingleUseVirtualCardConfigInput = {
  /** Unique identifier of a given account membership */
  accountMembershipId: Scalars['ID']['input'];
  /** Card name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Spending limit */
  spendingLimit: SpendingLimitInput;
};

/** Spending */
export type Spending = {
  __typename: 'Spending';
  /** amount spent during the period */
  amount?: Maybe<Amount>;
  /** period concerned */
  period: SpendingLimitPeriod;
};

/** Spending limits */
export type SpendingLimit = {
  __typename: 'SpendingLimit';
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
export type SpendingLimitPeriod =
  | 'Always'
  | 'Daily'
  | 'Monthly'
  | 'Weekly';

/** Available period to compute spending limits */
export type SpendingLimitPeriodInput =
  | 'Always'
  | 'Daily'
  | 'Monthly'
  | 'Weekly';

/** Available type of spending limits */
export type SpendingLimitType =
  /** for the account holder - defined by the partner */
  | 'AccountHolder'
  /** for the partner - defined by Swan */
  | 'Partner';

export type StandingOrder = {
  __typename: 'StandingOrder';
  /** Account of the Standing Order */
  account: Account;
  /** Fixed Amount that will be regularly transferred */
  amount?: Maybe<Amount>;
  /** Date the Standing Order has been created */
  createdAt: Scalars['Date']['output'];
  /** Identity that scheduled the Standing Order */
  createdBy: User;
  /** Transfer mode of the Standing Order */
  creditTransferMode?: Maybe<CreditTransferMode>;
  /** Earlier date the Standing Order will be executed */
  firstExecutionDate?: Maybe<Scalars['DateTime']['output']>;
  /** Standing Order unique identifier */
  id: Scalars['ID']['output'];
  /** label that will be transferred to the beneficiary */
  label?: Maybe<Scalars['String']['output']>;
  /** Latest date the Standing Order will be executed */
  lastExecutionDate?: Maybe<Scalars['DateTime']['output']>;
  /** Next execution date of the Standing Order, if any */
  nextExecutionDate?: Maybe<Scalars['Date']['output']>;
  /** A list of payments of an standing order. */
  payments: PaymentConnection;
  /** Scheduled period of Standing Order */
  period: StandingOrderPeriod;
  /** reference that will be transferred to the beneficiary throughout the entire end-to-end chain */
  reference?: Maybe<Scalars['String']['output']>;
  /** SEPA beneficiary of the Standing Order */
  sepaBeneficiary: SepaBeneficiary;
  /** Status of the Standing Order */
  statusInfo: StandingOrderStatusInfo;
  /** Target available balance value that will be used for periodically clipping the account */
  targetAvailableBalance?: Maybe<Amount>;
  /** Last date the Standing Order has been updated */
  updatedAt: Scalars['Date']['output'];
};


export type StandingOrderPaymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<PaymentFiltersInput>;
  first?: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaymentOrderByInput>;
};

export type StandingOrderCanceledStatusInfo = StandingOrderStatusInfo & {
  __typename: 'StandingOrderCanceledStatusInfo';
  canceledAt: Scalars['Date']['output'];
  status: StandingOrderStatus;
};

/** Please see the Connection interface */
export type StandingOrderConnection = Connection & {
  __typename: 'StandingOrderConnection';
  edges: Array<StandingOrderEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StandingOrderConsentPendingStatusInfo = StandingOrderStatusInfo & {
  __typename: 'StandingOrderConsentPendingStatusInfo';
  consent: Consent;
  status: StandingOrderStatus;
};

/** Please see the Connection interface */
export type StandingOrderEdge = Edge & {
  __typename: 'StandingOrderEdge';
  cursor: Scalars['String']['output'];
  node: StandingOrder;
};

export type StandingOrderEnabledStatusInfo = StandingOrderStatusInfo & {
  __typename: 'StandingOrderEnabledStatusInfo';
  status: StandingOrderStatus;
};

/** Rejection returned when Standing Order is not found */
export type StandingOrderNotFoundRejection = Rejection & {
  __typename: 'StandingOrderNotFoundRejection';
  message: Scalars['String']['output'];
};

export type StandingOrderPeriod =
  | 'Daily'
  | 'Monthly'
  | 'Weekly';

export type StandingOrderStatus =
  | 'Canceled'
  | 'ConsentPending'
  | 'Enabled';

export type StandingOrderStatusInfo = {
  status: StandingOrderStatus;
};

/** Describes an identification level that has started for the process of the current identification */
export type StartedIdentificationLevelStatusInfo = {
  __typename: 'StartedIdentificationLevelStatusInfo';
  /** Always set to `Started` */
  status: SwanIdentificationStatus;
};

/** A statement represent metadata around a banking document that list all of the BOOKED banking transactions that have happened between startDate and endDate */
export type Statement = {
  __typename: 'Statement';
  /** account of the statement */
  account: Account;
  /** booked balance at the end of the window */
  closingBalance: Amount;
  /** ending date of the date window */
  closingDate: Scalars['DateTime']['output'];
  /** created date */
  createdAt: Scalars['DateTime']['output'];
  /** the sum of fee transactions during the window */
  fees: Amount;
  /** unique identifier of the statement */
  id: Scalars['ID']['output'];
  /** booked balance at the start of the window */
  openingBalance: Amount;
  /** starting date of the date window */
  openingDate: Scalars['DateTime']['output'];
  /** period of statement (either custom or monthly) */
  period?: Maybe<StatementPeriod>;
  /** status of the statement */
  status: StatementStatus;
  /** the sum of credit transactions during the window */
  totalCredits: Amount;
  /** the sum of debit transactions during the window */
  totalDebits: Amount;
  /** type of statements (ex: PDF) */
  type: Array<Maybe<StatementInfo>>;
  /** updated date */
  updatedAt: Scalars['DateTime']['output'];
};

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)). */
export type StatementConnection = Connection & {
  __typename: 'StatementConnection';
  edges: Array<StatementEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Implements the Relay Edge interface. */
export type StatementEdge = Edge & {
  __typename: 'StatementEdge';
  cursor: Scalars['String']['output'];
  node: Statement;
};

/** Filter that can be given to give the statement in a specific data range */
export type StatementFiltersInput = {
  /** To filter after an updatedAt value */
  isAfterUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** To filter before an updatedAt value */
  isBeforeUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** To filter on a specific period of statement (either custom or monthly) */
  period?: InputMaybe<StatementPeriod>;
};

/** Custom information for a certain type of statement */
export type StatementInfo = {
  type?: Maybe<StatementType>;
};

/** The different periods of statement */
export type StatementPeriod =
  | 'Custom'
  | 'Monthly';

/** The different statuses of statement */
export type StatementStatus =
  | 'Available'
  | 'Failed'
  | 'Pending';

/**
 * The different type of statement actually available
 * - PDF will be a PDF file with the statement information
 */
export type StatementType =
  | 'CSV'
  | 'PDF';

/** Supporting document used for compliance */
export type SupportingDocument = {
  __typename: 'SupportingDocument';
  /** Created date */
  createdAt: Scalars['DateTime']['output'];
  /** Unique identifier of the document */
  id: Scalars['String']['output'];
  /** Supporting document status information */
  statusInfo: SupportingDocumentStatusInfo;
  /** Purpose of supporting document */
  supportingDocumentPurpose: SupportingDocumentPurposeEnum;
  /** Type of supporting Document */
  supportingDocumentType?: Maybe<SupportingDocumentType>;
  /** Updated date */
  updatedAt: Scalars['DateTime']['output'];
};

export type SupportingDocumentCollectMode =
  | 'API'
  | 'EndCustomer'
  | 'Partner';

/**
 * Collection of supporting documents used for compliance
 *
 * Fetching SupportingDocument is restricted to Project access token
 */
export type SupportingDocumentCollection = {
  __typename: 'SupportingDocumentCollection';
  /** Created date */
  createdAt: Scalars['DateTime']['output'];
  /** Unique identifier of the supporting document collection */
  id: Scalars['String']['output'];
  /** List of required supporting document purposes for this supporting document collection */
  requiredSupportingDocumentPurposes: Array<SupportingDocumentPurpose>;
  /** Status of the supporting document collection */
  statusInfo: SupportingDocumentCollectionStatusInfo;
  /** List of supported documents contained in the supporting document collection */
  supportingDocuments: Array<Maybe<SupportingDocument>>;
  /** Updated date */
  updatedAt: Scalars['DateTime']['output'];
};

/** Supporting document collection with Approved status */
export type SupportingDocumentCollectionApprovedStatusInfo = SupportingDocumentCollectionStatusInfo & {
  __typename: 'SupportingDocumentCollectionApprovedStatusInfo';
  /** Date on which the supporting document collection has been approved */
  approvedAt: Scalars['DateTime']['output'];
  /** When the supporting document collection is approved */
  status: SupportingDocumentCollectionStatus;
};

/** Supporting document collection with Canceled status */
export type SupportingDocumentCollectionCanceledStatusInfo = SupportingDocumentCollectionStatusInfo & {
  __typename: 'SupportingDocumentCollectionCanceledStatusInfo';
  /** Date on which the supporting document collection has been canceled */
  canceledAt: Scalars['DateTime']['output'];
  /** When the supporting document collection is canceled */
  status: SupportingDocumentCollectionStatus;
};

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type SupportingDocumentCollectionConnection = Connection & {
  __typename: 'SupportingDocumentCollectionConnection';
  /** SupportingDocumentCollectionEdge list */
  edges: Array<SupportingDocumentCollectionEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars['Int']['output'];
};

/** Implements the Relay Edge interface */
export type SupportingDocumentCollectionEdge = Edge & {
  __typename: 'SupportingDocumentCollectionEdge';
  /** Opaque identifier pointing to this node in the pagination mechanism */
  cursor: Scalars['String']['output'];
  /** The supporting document collection */
  node: SupportingDocumentCollection;
};

/** Rejection returned if the supporting document collection was not found */
export type SupportingDocumentCollectionNotFoundRejection = Rejection & {
  __typename: 'SupportingDocumentCollectionNotFoundRejection';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Supporting document collection with PendingReview status */
export type SupportingDocumentCollectionPendingReviewStatusInfo = SupportingDocumentCollectionStatusInfo & {
  __typename: 'SupportingDocumentCollectionPendingReviewStatusInfo';
  /** When the supporting document collection is completed and in compliance review */
  status: SupportingDocumentCollectionStatus;
};

/** Supporting document collection with Rejected status */
export type SupportingDocumentCollectionRejectedStatusInfo = SupportingDocumentCollectionStatusInfo & {
  __typename: 'SupportingDocumentCollectionRejectedStatusInfo';
  /** Date on which the supporting document collection has been rejected */
  rejectedAt: Scalars['DateTime']['output'];
  /** When the supporting document collection is rejected */
  status: SupportingDocumentCollectionStatus;
};

/** Verification status of a supporting document collection */
export type SupportingDocumentCollectionStatus =
  /** When the supporting document collection is approved. Final status */
  | 'Approved'
  /** When the supporting document collection is canceled. Final status */
  | 'Canceled'
  /** When the supporting document collection is completed and in compliance review */
  | 'PendingReview'
  /** When the supporting document collection is rejected. Final status */
  | 'Rejected'
  /** When the supporting document collection is created and on going */
  | 'WaitingForDocument';

/** Rejection returned if supporting document cannot be deleted because its supporting document collection status is not WaitingForDocument */
export type SupportingDocumentCollectionStatusDoesNotAllowDeletionRejection = Rejection & {
  __typename: 'SupportingDocumentCollectionStatusDoesNotAllowDeletionRejection';
  message: Scalars['String']['output'];
  supportingDocumentCollection: SupportingDocumentCollection;
  supportingDocumentCollectionStatus: SupportingDocumentCollectionStatus;
};

/** Rejection returned if supporting document cannot be updated because its supporting document collection status is not WaitingForDocument */
export type SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection = Rejection & {
  __typename: 'SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection';
  message: Scalars['String']['output'];
  supportingDocumentCollection: SupportingDocumentCollection;
  supportingDocumentCollectionStatus: SupportingDocumentCollectionStatus;
};

export type SupportingDocumentCollectionStatusInfo = {
  /** Status of the supporting document collection */
  status: SupportingDocumentCollectionStatus;
};

/** Rejection returned if the status transition is not allowed */
export type SupportingDocumentCollectionStatusNotAllowedRejection = Rejection & {
  __typename: 'SupportingDocumentCollectionStatusNotAllowedRejection';
  message: Scalars['String']['output'];
  newStatus: SupportingDocumentCollectionStatus;
  oldStatus: SupportingDocumentCollectionStatus;
};

/** Supporting document collection with WaitingForUpload status */
export type SupportingDocumentCollectionWaitingForDocumentStatusInfo = SupportingDocumentCollectionStatusInfo & {
  __typename: 'SupportingDocumentCollectionWaitingForDocumentStatusInfo';
  /** When the Supporting Document Collection is created */
  status: SupportingDocumentCollectionStatus;
};

export type SupportingDocumentCommunicationLanguageSettings =
  | 'en'
  | 'fr';

/** Rejection returned if the supporting document was not found */
export type SupportingDocumentNotFoundRejection = Rejection & {
  __typename: 'SupportingDocumentNotFoundRejection';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Supporting document with NotUploaded status. */
export type SupportingDocumentNotUploadedStatusInfo = SupportingDocumentStatusInfo & {
  __typename: 'SupportingDocumentNotUploadedStatusInfo';
  /** When the document has not been updated on time. */
  status: SupportingDocumentStatus;
};

export type SupportingDocumentPostField = {
  __typename: 'SupportingDocumentPostField';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** Details of a supporting document purpose */
export type SupportingDocumentPurpose = {
  __typename: 'SupportingDocumentPurpose';
  /** Corresponding supporting document types accepted for this supporting document purpose */
  acceptableSupportingDocumentTypes: Array<SupportingDocumentType>;
  /** Technical name of the purpose */
  name: SupportingDocumentPurposeEnum;
};

/** Supporting document purpose */
export type SupportingDocumentPurposeEnum =
  /** Proof of association registration */
  | 'AssociationRegistration'
  /** Banking */
  | 'Banking'
  /** Proof of company registration */
  | 'CompanyRegistration'
  /** Minutes Of The General Assembly */
  | 'GeneralAssemblyMinutes'
  /** Other */
  | 'Other'
  /** Signed power of attorney document to give the power to act on behalf. */
  | 'PowerOfAttorney'
  /** Proof of company address */
  | 'ProofOfCompanyAddress'
  /** Proof of company income */
  | 'ProofOfCompanyIncome'
  /** Proof of identity */
  | 'ProofOfIdentity'
  /** Proof of individual address */
  | 'ProofOfIndividualAddress'
  /** Proof of individual income */
  | 'ProofOfIndividualIncome'
  /** Proof of origin of funds */
  | 'ProofOfOriginOfFunds'
  /** Signed status */
  | 'SignedStatus'
  /** Sworn statement */
  | 'SwornStatement'
  /** UBO Declaration */
  | 'UBODeclaration';

/** Supporting document with Refused status */
export type SupportingDocumentRefusedStatusInfo = SupportingDocumentStatusInfo & {
  __typename: 'SupportingDocumentRefusedStatusInfo';
  /** An unique URL and one-time URL to download the Document */
  downloadUrl: Scalars['String']['output'];
  /** Original file name */
  filename: Scalars['String']['output'];
  /** Reason why the supporting document has been refused */
  reason: Scalars['String']['output'];
  /** Date on which the supporting document collection has been refused */
  refusedAt: Scalars['DateTime']['output'];
  /** When the document has been refused by Swan */
  status: SupportingDocumentStatus;
};

export type SupportingDocumentSettings = {
  __typename: 'SupportingDocumentSettings';
  collectMode: SupportingDocumentCollectMode;
  communicationLanguage?: Maybe<SupportingDocumentCommunicationLanguageSettings>;
  emailContact?: Maybe<Scalars['String']['output']>;
};

/** Verification status of a document */
export type SupportingDocumentStatus =
  /** Document has not been uploaded on time. */
  | 'NotUploaded'
  /** Document has been refused by Swan. */
  | 'Refused'
  /** Document has been uploaded but not verified by Swan yet. */
  | 'Uploaded'
  /** Document has been uploaded and verified by Swan. */
  | 'Validated'
  /** Document is not uploaded yet. */
  | 'WaitingForUpload';

/** Rejection returned if supporting document cannot be deleted because of its status */
export type SupportingDocumentStatusDoesNotAllowDeletionRejection = Rejection & {
  __typename: 'SupportingDocumentStatusDoesNotAllowDeletionRejection';
  message: Scalars['String']['output'];
  status: SupportingDocumentStatus;
  supportingDocument: SupportingDocument;
};

/** Rejection returned if supporting document cannot be updated because of its status */
export type SupportingDocumentStatusDoesNotAllowUpdateRejection = Rejection & {
  __typename: 'SupportingDocumentStatusDoesNotAllowUpdateRejection';
  message: Scalars['String']['output'];
  status: SupportingDocumentStatus;
  supportingDocument: SupportingDocument;
};

export type SupportingDocumentStatusInfo = {
  /** Status of the supporting document */
  status: SupportingDocumentStatus;
};

/** Rejection returned if the status transition is not allowed */
export type SupportingDocumentStatusNotAllowedRejection = Rejection & {
  __typename: 'SupportingDocumentStatusNotAllowedRejection';
  message: Scalars['String']['output'];
  newStatus: SupportingDocumentStatus;
  oldStatus: SupportingDocumentStatus;
};

/** Specific type for document */
export type SupportingDocumentType =
  /** Account statement */
  | 'AccountStatement'
  /** Legal document required for company’s formation */
  | 'ArticlesOfIncorporation'
  /** Document with details such as bank name, address, account number and account holder */
  | 'BankAccountDetails'
  /** Bank Statement */
  | 'BankStatement'
  /** By Laws */
  | 'ByLaws'
  /** Share Deposit Certificate */
  | 'CapitalShareDepositCertificate'
  /** Lease agreement in the name of the business or Proof of Individual Address if the company is hosted by one of the legal representative */
  | 'CompanyLeaseAgreement'
  /** Document submitted to your tax bureau at the end of the last business period */
  | 'CorporateIncomeTaxReturn'
  /** Deed of donation */
  | 'DeedOfDonation'
  /** Deed of sale */
  | 'DeedOfSale'
  /** Deed of succession */
  | 'DeedOfSuccession'
  /** Driving license */
  | 'DrivingLicense'
  /** Home Insurance contract */
  | 'HomeInsurance'
  /** Income Tax return or tax-exemption certificate dating less than 2 years */
  | 'IncomeTaxReturn'
  /** Association registration proof for french association */
  | 'JOAFFEExtract'
  /** Loan contract */
  | 'LoanContract'
  /** Meeting's minutes */
  | 'MeetingMinutes'
  /** NationalIdCard */
  | 'NationalIdCard'
  /** Notarial deed */
  | 'NotarialDeed'
  /** Other */
  | 'Other'
  /** Passport */
  | 'Passport'
  /** A pay slip dating less than 3 months */
  | 'PaySlip'
  /** Telephone Bill issued within the last 3 months */
  | 'PhoneBill'
  /** Signed power of attorney document to give the power to act on behalf */
  | 'PowerOfAttorney'
  /** Commercial registry extract issued within the last 3 months */
  | 'RegisterExtract'
  /** Rental Receipt issued within the last 3 months */
  | 'RentReceipt'
  /** Resident permit */
  | 'ResidentPermit'
  /** Selfie */
  | 'Selfie'
  /** Sworn statement */
  | 'SwornStatement'
  /** Ultimate Beneficial Owner Declaration */
  | 'UBODeclaration'
  /** Water, Electricity or Gas Bill issued within the last 3 months */
  | 'UtilityBill';

export type SupportingDocumentUploadInfo = {
  __typename: 'SupportingDocumentUploadInfo';
  fields: Array<SupportingDocumentPostField>;
  url: Scalars['String']['output'];
};

/** Rejection returned if the supporting document collection cannot receive supporting documents anymore */
export type SupportingDocumentUploadNotAllowedRejection = Rejection & {
  __typename: 'SupportingDocumentUploadNotAllowedRejection';
  message: Scalars['String']['output'];
  supportingDocumentCollectionStatus: SupportingDocumentCollectionStatus;
};

/** Supporting document with Uploaded status */
export type SupportingDocumentUploadedStatusInfo = SupportingDocumentStatusInfo & {
  __typename: 'SupportingDocumentUploadedStatusInfo';
  /** An unique URL and one-time URL to download the Document */
  downloadUrl: Scalars['String']['output'];
  /** Original file name */
  filename: Scalars['String']['output'];
  /** When the document has been uploaded but not verified by Swan yet */
  status: SupportingDocumentStatus;
};

/** Supporting document with Validated status */
export type SupportingDocumentValidatedStatusInfo = SupportingDocumentStatusInfo & {
  __typename: 'SupportingDocumentValidatedStatusInfo';
  /** An unique URL and one-time URL to download the Document */
  downloadUrl: Scalars['String']['output'];
  /** Original file name */
  filename: Scalars['String']['output'];
  /** When the document has been uploaded and verified by Swan */
  status: SupportingDocumentStatus;
  /** Date on which the supporting document has been validated */
  validatedAt: Scalars['DateTime']['output'];
};

/** Supporting document with WaitingForUpload status */
export type SupportingDocumentWaitingForUploadStatusInfo = SupportingDocumentStatusInfo & {
  __typename: 'SupportingDocumentWaitingForUploadStatusInfo';
  /** When the document is not uploaded yet */
  status: SupportingDocumentStatus;
  /** Info to upload the document : url and fields to add along file in form (POST) */
  upload: SupportingDocumentUploadInfo;
};

export type SuspendAccountMembershipInput = {
  accountMembershipId: Scalars['ID']['input'];
};

export type SuspendAccountMembershipPayload = InternalErrorRejection | LegalRepresentativeAccountMembershipCannotBeSuspendedRejection | SuspendAccountMembershipSuccessPayload | UserNotAllowedToManageAccountMembershipRejection | UserNotAllowedToSuspendItsOwnAccountMembershipRejection | ValidationRejection;

export type SuspendAccountMembershipSuccessPayload = {
  __typename: 'SuspendAccountMembershipSuccessPayload';
  accountMembership: AccountMembership;
};

/** Define a reason with a message and a specific type for suspend account action */
export type SuspendAccountReason = Reason & {
  __typename: 'SuspendAccountReason';
  message?: Maybe<Scalars['String']['output']>;
  type: SuspendAccountReasonType;
};

/** Input version */
export type SuspendAccountReasonInput = {
  message?: InputMaybe<Scalars['String']['input']>;
  type: SuspendAccountReasonType;
};

/** Specific type for suspend account action */
export type SuspendAccountReasonType =
  /** Simple suspend request */
  | 'SuspendRequested';

/** SuspendAccountStatusReason */
export type SuspendAccountStatusReason = SuspendAccountReason;

/** Inputs to suspend a physical card */
export type SuspendPhysicalCardInput = {
  /** Unique identifier of a card */
  cardId: Scalars['ID']['input'];
};

export type SuspendPhysicalCardPayload = AccountMembershipNotAllowedRejection | CardNotFoundRejection | ForbiddenRejection | PhysicalCardNotFoundRejection | SuspendPhysicalCardSuccessPayload | ValidationRejection;

export type SuspendPhysicalCardSuccessPayload = {
  __typename: 'SuspendPhysicalCardSuccessPayload';
  /** The physicalCard suspended */
  physicalCard: PhysicalCard;
};

/** Inputs to suspend a received direct debit mandate */
export type SuspendReceivedDirectDebitMandateInput = {
  receivedDirectDebitMandateId: Scalars['ID']['input'];
};

/** Union type returned by the suspendReceivedDirectDebitMandate mutation */
export type SuspendReceivedDirectDebitMandatePayload = ForbiddenRejection | ReceivedDirectDebitMandateCanceledRejection | ReceivedDirectDebitMandateNotFoundRejection | SuspendReceivedDirectDebitMandateSuccessPayload | SuspendReceivedDirectDebitMandatedRejection;

/** Return type in case of a successful response of the suspendReceivedDirectDebitMandate mutation */
export type SuspendReceivedDirectDebitMandateSuccessPayload = {
  __typename: 'SuspendReceivedDirectDebitMandateSuccessPayload';
  /** the received direct debit mandate is suspended */
  receivedDirectDebitMandate: ReceivedDirectDebitMandate;
};

/** Rejection returned if the SuspendReceivedDirectDebitMandatedRejection mutation is rejected */
export type SuspendReceivedDirectDebitMandatedRejection = Rejection & {
  __typename: 'SuspendReceivedDirectDebitMandatedRejection';
  message: Scalars['String']['output'];
  reason: SuspendReceivedDirectDebitMandatedRejectionReason;
};

/** Enum of reasons of rejection for suspendReceivedDirectDebitMandate mutation */
export type SuspendReceivedDirectDebitMandatedRejectionReason =
  /** Received direct debit mandate is canceled and therefore can't be suspend */
  | 'ReceivedDirectDebitMandateCanceled';

/** StatusInfo when funding limit settings has been suspended */
export type SuspendedFundingLimitSettingsStatusInfo = FundingLimitSettingsStatusInfo & {
  __typename: 'SuspendedFundingLimitSettingsStatusInfo';
  reason: Scalars['String']['output'];
  status: FundingLimitSettingsStatus;
};

/** Funding Source Suspended status information */
export type SuspendedFundingSourceStatusInfo = FundingSourceStatusInfo & {
  __typename: 'SuspendedFundingSourceStatusInfo';
  /** Funding Source Suspended status */
  status: FundingSourceStatus;
  /** Date at which the funding source was suspended */
  suspendedAt: Scalars['Date']['output'];
};

/** SuspendedMerchantPaymentMethodStatusInfo */
export type SuspendedMerchantPaymentMethodStatusInfo = MerchantPaymentMethodStatusInfo & {
  __typename: 'SuspendedMerchantPaymentMethodStatusInfo';
  status: MerchantPaymentMethodStatus;
  /** Merchant Payment Method suspended date */
  suspendedAt: Scalars['Date']['output'];
};

/** SuspendedMerchantProfileStatusInfo */
export type SuspendedMerchantProfileStatusInfo = MerchantProfileStatusInfo & {
  __typename: 'SuspendedMerchantProfileStatusInfo';
  status: MerchantProfileStatus;
  suspendedAt: Scalars['Date']['output'];
};

/** Swan account beneficiary */
export type SwanAccountBeneficiaryInput = {
  /** account number to be credited */
  accountNumber: Scalars['AccountNumber']['input'];
  /** full name of the beneficiary  (max 70 characters) */
  name: Scalars['String']['input'];
  /** `true` if this new beneficiary will be saved to the beneficiary list of the debited account. */
  save: Scalars['Boolean']['input'];
};

/** Status values of an identification */
export type SwanIdentificationStatus =
  /** When the user canceled the identification process or the identification service was unavailable */
  | 'Canceled'
  /** When the identification is no longer valid */
  | 'Expired'
  /** When the identification is invalid */
  | 'Invalid'
  /** When the identification hasn't been started yet */
  | 'NotStarted'
  /** When the identification does not support an identification level */
  | 'NotSupported'
  /** When the identification process is currently being treated by a manual or automatic process */
  | 'Pending'
  /** When the identification has been started */
  | 'Started'
  /** When the identification is valid */
  | 'Valid';

export type SwanTcuDocumentNotFoundRejection = Rejection & {
  __typename: 'SwanTCUDocumentNotFoundRejection';
  message: Scalars['String']['output'];
};

export type SwanTcuDocumentStatusNotAllowedRejection = Rejection & {
  __typename: 'SwanTCUDocumentStatusNotAllowedRejection';
  message: Scalars['String']['output'];
};

export type TextField = Field & {
  __typename: 'TextField';
  displayFormat?: Maybe<Scalars['String']['output']>;
  example?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  maxLength?: Maybe<Scalars['Int']['output']>;
  minLength?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  refreshDynamicFieldsOnChange: Scalars['Boolean']['output'];
  required: Scalars['Boolean']['output'];
  validationRegex?: Maybe<Scalars['String']['output']>;
};

/** Individual ultimate beneficial owner title (Mr/Ms) */
export type TitleEnum =
  /** Identified as a man */
  | 'Mr'
  /** Identified as a woman */
  | 'Ms';

/** Rejection returned when trying to create a multi consent with too many child consents */
export type TooManyChildConsentsRejection = Rejection & {
  __typename: 'TooManyChildConsentsRejection';
  message: Scalars['String']['output'];
};

/** Rejection returned if too many items are given */
export type TooManyItemsRejection = Rejection & {
  __typename: 'TooManyItemsRejection';
  message: Scalars['String']['output'];
};

/** Transaction */
export type Transaction = {
  /** matching account for this transaction */
  account?: Maybe<Account>;
  /** amount */
  amount: Amount;
  /** booked balance after this transaction */
  bookedBalanceAfter?: Maybe<Amount>;
  /** name of the counterparty. e.g Merchant name, Creditor name, Beneficiary Name ... */
  counterparty: Scalars['String']['output'];
  /** created date */
  createdAt: Scalars['DateTime']['output'];
  /** a date that reflects the execution date of a transaction from a user viewpoint. Can be used for sorting transactions. */
  executionDate: Scalars['DateTime']['output'];
  /**
   * an arbitrary identifier that was defined by you when you created this transaction.
   *
   * For example, you can define it in the CreditTransferInput mutation.
   */
  externalReference?: Maybe<Scalars['String']['output']>;
  /** unique identifier of the transaction */
  id: Scalars['ID']['output'];
  /** label */
  label: Scalars['String']['output'];
  /** origin transaction associated to this transaction */
  originTransaction?: Maybe<Transaction>;
  /** ID of the origin transaction associated to this transaction */
  originTransactionId?: Maybe<Scalars['String']['output']>;
  /** payment associated to this transaction */
  payment?: Maybe<Payment>;
  /** ID of the payment associated to this transaction */
  paymentId?: Maybe<Scalars['String']['output']>;
  /** payment method identifier used for this transaction. e.g masked PAN or IBAN or accountNumber */
  paymentMethodIdentifier: Scalars['String']['output'];
  /** payment product used for this transaction */
  paymentProduct: PaymentProduct;
  /** external identifier of the transaction */
  reference: Scalars['String']['output'];
  /** a date that reflects the time at which the user asked the transaction to be executed */
  requestedExecutionAt?: Maybe<Scalars['DateTime']['output']>;
  /** side (Credit or Debit) */
  side: TransactionSide;
  /** status information */
  statusInfo: TransactionStatusInfo;
  /** type */
  type: TransactionTypeEnum;
  /** updated date */
  updatedAt: Scalars['DateTime']['output'];
};

/** Please see the Connection interface */
export type TransactionConnection = Connection & {
  __typename: 'TransactionConnection';
  edges: Array<TransactionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Please see the Edge interface */
export type TransactionEdge = Edge & {
  __typename: 'TransactionEdge';
  cursor: Scalars['String']['output'];
  node: Transaction;
};

/** Rejection returned if the transaction was not found */
export type TransactionNotFoundRejection = Rejection & {
  __typename: 'TransactionNotFoundRejection';
  message: Scalars['String']['output'];
  transactionId: Scalars['ID']['output'];
};

/** The following reason codes for a r-transaction are defined: */
export type TransactionReasonCode =
  /** Rejected because the account is closed */
  | 'AccountClosed'
  /** Rejected because the account holder is deceased */
  | 'AccountHolderDeceased'
  /** Rejected because the account is suspended */
  | 'AccountSuspended'
  /** Rejected because the account is unknown */
  | 'AccountUnknown'
  /** Rejected by the bank */
  | 'BankRefused'
  /** Creditor account is blocked */
  | 'BeneficiaryAccountBlocked'
  /** Creditor account is closed */
  | 'BeneficiaryAccountClosed'
  /** Creditor account number is incorrect */
  | 'BeneficiaryAccountIncorrect'
  /** Creditor account number does not exist */
  | 'BeneficiaryAccountUnknown'
  /** Rejected because the creditor bank is not reachable */
  | 'BeneficiaryBankNotReachable'
  /** Customer is deceased */
  | 'BeneficiaryDeceased'
  /** Rejected because the card is expired */
  | 'CardExpired'
  /** Rejected because the card is not activated yet */
  | 'CardNotActivated'
  /** Rejected because the card has been permanently blocked */
  | 'CardPermanentlyBlocked'
  /** Rejected because the card is suspended */
  | 'CardSuspended'
  /** Invalid check */
  | 'CheckInvalid'
  /** Invalid check number */
  | 'CheckNumberInvalid'
  /** Rejected because the creditor bank is offline */
  | 'CreditorBankOffline'
  /** Rejected following an error from the creditor bank */
  | 'CreditorBankTechnicalErrorOccurred'
  /** Rejected following a timeout from the creditor bank */
  | 'CreditorBankTimeout'
  /** Debtor Account Blocked */
  | 'DebtorAccountBlocked'
  /** Rejected because the debtor account is closed */
  | 'DebtorAccountClosed'
  /** Rejected because the debtor is a non business account and the transaction is a B2B SEPA Direct Debit transaction */
  | 'DebtorAccountConsumer'
  /** Rejected because the debtor account is unknown */
  | 'DebtorAccountUnknown'
  /** Rejected because the debtor bank is offline */
  | 'DebtorBankOffline'
  /** Rejected following an error from the debtor bank */
  | 'DebtorBankTechnicalErrorOccurred'
  /** Rejected following a timeout from the debtor bank */
  | 'DebtorBankTimeout'
  /** Rejected because the debtor account holder is dead */
  | 'DebtorDeceased'
  /** Funds already transferred back to the originator */
  | 'FundsAlreadyTransferredBack'
  /** Rejected because of insufficient funds on the account */
  | 'InsufficientFunds'
  /** Rejected because the expiration date entered does not match the one on the card */
  | 'InvalidExpirationDate'
  /** Rejected because the PIN is invalid */
  | 'InvalidPin'
  /** Rejected because there were too many invalid tries on the PIN validation */
  | 'InvalidPinAttemptsExceeded'
  /** Rejected because the security number entered does not match the one on the card */
  | 'InvalidSecurityNumber'
  /** Funds cannot be reimbursed by beneficiary bank/legal decision */
  | 'LegalOrBankDecision'
  /** Rejected by debtor because the mandate is invalid */
  | 'MandateInvalid'
  /** Rejected because the merchant must request a new transaction with authorisation */
  | 'MerchantShouldResubmitAuthorization'
  /** No answer from customer */
  | 'NoAnswerFromBeneficiary'
  /** No original transaction received */
  | 'NoOriginalTransactionReceived'
  /** Rejected by the partner (you) */
  | 'PartnerRefused'
  /** Rejected following an error or a timeout from the partner */
  | 'PartnerTechnicalErrorOccurred'
  /** Rejected because the maximum amount allowed on the given period has been exceeded */
  | 'PeriodAmountLimitExceeded'
  /** Rejected because the maximum number of transactions on the given period has been exceeded */
  | 'PeriodNbTransactionLimitExceeded'
  /** Rejected because a transaction with PIN code is required to continue to using the card */
  | 'PinRequiredForFurtherTransaction'
  /** Rejected by bank with no specified reason */
  | 'ReasonNotSpecifiedByBank'
  /** Reason unspecified */
  | 'ReasonNotSpecifiedByBeneficiary'
  /** Rejected by debtor with no specified reason */
  | 'ReasonNotSpecifiedByDebtor'
  /** Customer request */
  | 'ReasonNotSpecifiedByOriginator'
  /** Recall request accepted by beneficiary bank or beneficiary */
  | 'RecallAccepted'
  /** Refund requested by end customer */
  | 'RefundRequestedByDebtor'
  /** Rejected by bank for regulatory reason */
  | 'RegulatoryReason'
  /** Invalid RLMC key, please control the key and the check number */
  | 'RlmcKeyInvalid'
  /** Rejected because the debtor or the creditor bank is offline */
  | 'SwanOffline'
  /** Rejected by Swan */
  | 'SwanRefused'
  /** Rejected because of a Swan technical error */
  | 'SwanTechnicalErrorOccurred'
  /** Rejected because of a Swan timeout */
  | 'SwanTimeout'
  /** Technical issue resulting in incorrect transactions sent out */
  | 'TechnicalIssue'
  /** Rejected because the terms and conditions limit has been exceeded */
  | 'TermsAndConditionsLimitExceeded'
  /** Wrong transaction amount */
  | 'TransactionAmountIncorrect'
  /** Rejected because the maximum amount for a transaction has been exceeded */
  | 'TransactionAmountLimitExceeded'
  /** Rejected by bank because this transaction is duplicated */
  | 'TransactionDuplicated'
  /** Rejected because the transaction is forbidden on this type of account */
  | 'TransactionOnAccountTypeNotAllowed'
  /** Rejected because the type of transaction is forbidden on the account */
  | 'TransactionTypeNotAllowed';

/** Transaction side */
export type TransactionSide =
  /** when the transaction credit the account */
  | 'Credit'
  /** when the transaction debit the account */
  | 'Debit';

/** Transaction status */
export type TransactionStatus =
  /** when the transaction is posted to the Swan book and impact the booked balance */
  | 'Booked'
  /** when a pending transaction is canceled and the amount is released on the available balance */
  | 'Canceled'
  /** when the transaction is pending and the amount impact the available balance */
  | 'Pending'
  /** when the transaction is rejected */
  | 'Rejected'
  /** when a card authorization is released after X days or fully consumed by X debits */
  | 'Released'
  /** when the transaction is upcoming (scheduled credit transfer, direct debit ...) */
  | 'Upcoming';

/** Transaction Status information */
export type TransactionStatusInfo = {
  /** status of the transaction */
  status: TransactionStatus;
};

/** Transaction Type */
export type TransactionTypeEnum =
  /** When a card authorization has been received by Swan. */
  | 'CardOutAuthorization'
  /** When a card credit credited a Swan account. */
  | 'CardOutCredit'
  /** When a card credit has been reversed by the merchant (debited on a Swan account). */
  | 'CardOutCreditReversal'
  /** When a card debit debited a Swan account. */
  | 'CardOutDebit'
  /** When a card debit has been reversed by the merchant (credited on a Swan account). */
  | 'CardOutDebitReversal'
  /** When a Check credited a Swan account. */
  | 'CheckIn'
  /** When a Check credited a Swan account and Swan or the debtor returned the funds. */
  | 'CheckInReturn'
  /** When a fee is credited to a Swan account. */
  | 'FeesIn'
  /** When a fee is debited from a Swan account. */
  | 'FeesOut'
  /** When an internal Credit Transfer credited a Swan account. */
  | 'InternalCreditTransferIn'
  /** When an internal Credit Transfer credited a Swan account, Swan or the Swan creditor asked for a recall of the transaction, and Swan or the Swan debtor accepted the recall request. */
  | 'InternalCreditTransferInRecall'
  /** When an internal Credit Transfer credited a Swan account and Swan or the Swan debtor returned the funds. */
  | 'InternalCreditTransferInReturn'
  /** When an internal Credit Transfer debited a Swan account. */
  | 'InternalCreditTransferOut'
  /** When an internal Credit Transfer debited a Swan account, Swan or the Swan debtor asked for a recall of the transaction, and Swan or the Swan creditor accepted the recall request. */
  | 'InternalCreditTransferOutRecall'
  /** When an internal Credit Transfer debited a Swan account and Swan or the Swan creditor returned the funds. */
  | 'InternalCreditTransferOutReturn'
  /** When an Internal Direct Debit credited a Swan account. */
  | 'InternalDirectDebitIn'
  /** When an Internal Direct Debit credited a Swan account and Swan or the debtor returned the funds. */
  | 'InternalDirectDebitInReturn'
  /** When an Internal Direct Debit debited a Swan account. */
  | 'InternalDirectDebitOut'
  /** When an Internal Direct Debit debited a Swan account and Swan or the debtor returned the funds. */
  | 'InternalDirectDebitOutReturn'
  /**
   * *COMING SOON*
   * When an International Credit Transfer credited a Swan account.
   */
  | 'InternationalCreditTransferIn'
  /**
   * *COMING SOON*
   * When an International Credit Transfer credited a Swan account and Swan or the Swan debtor returned the funds.
   */
  | 'InternationalCreditTransferInReturn'
  /**
   * *COMING SOON*
   * When an International Credit Transfer debited a Swan account.
   */
  | 'InternationalCreditTransferOut'
  /**
   * *COMING SOON*
   * When an International Credit Transfer debited a Swan account and Swan or the Swan debtor returned it.
   */
  | 'InternationalCreditTransferOutReturn'
  /** When a Sepa Credit Transfer credited a Swan account. */
  | 'SepaCreditTransferIn'
  /** When a Sepa Credit Transfer credited a Swan account, Swan or the Swan creditor asked for a recall of the transaction, and the debtor bank or the debtor accepted the recall request. */
  | 'SepaCreditTransferInRecall'
  /** When a Sepa Credit Transfer credited a Swan account and Swan or the Swan debtor returned the funds. */
  | 'SepaCreditTransferInReturn'
  /** When a Sepa Credit Transfer debited a Swan account. */
  | 'SepaCreditTransferOut'
  /** When a Sepa Credit Transfer debited a Swan account, Swan or the Swan debtor asked for a recall of the transaction, and the creditor bank or the creditor accepted the recall request. */
  | 'SepaCreditTransferOutRecall'
  /** When a Sepa Credit Transfer debited a Swan account and the creditor bank or the creditor returned the funds. */
  | 'SepaCreditTransferOutReturn'
  /** When a Sepa Direct Debit credited a Swan account. */
  | 'SepaDirectDebitIn'
  /** When a Sepa Direct Debit credited a Swan account and the debtor bank or the debtor returned it. */
  | 'SepaDirectDebitInReturn'
  /**
   * *COMING SOON*
   * When a Sepa Direct Debit credited a Swan account and Swan or the Swan creditor reversed it.
   */
  | 'SepaDirectDebitInReversal'
  /** When a Sepa Direct Debit debited a Swan account. */
  | 'SepaDirectDebitOut'
  /** When a Sepa Direct Debit debited a Swan account and Swan or the Swan debtor returned it. */
  | 'SepaDirectDebitOutReturn'
  /** When a Sepa Direct Debit debited a Swan account and the creditor bank or the creditor reversed it. */
  | 'SepaDirectDebitOutReversal'
  /** When an instant Sepa Credit Transfer credited a Swan account. */
  | 'SepaInstantCreditTransferIn'
  /** When a Sepa Instant Credit Transfer credited a Swan account, Swan or the Swan creditor asked for a recall of the transaction, and the debtor bank or the debtor accepted the recall request. */
  | 'SepaInstantCreditTransferInRecall'
  /** When an instant Sepa Credit Transfer debited a Swan account. */
  | 'SepaInstantCreditTransferOut'
  /** When a Sepa Instant Credit Transfer debited a Swan account, Swan or the Swan debtor asked for a recall of the transaction, and the creditor bank or the creditor accepted the recall request. */
  | 'SepaInstantCreditTransferOutRecall';

/** the criteria to filter transactions */
export type TransactionsFiltersInput = {
  /** To filter so it includes rejected transactions that had a fallback (`true` by default) */
  includeRejectedWithFallback?: InputMaybe<Scalars['Boolean']['input']>;
  /** To filter after an updatedAt value */
  isAfterUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** To filter before an updatedAt value */
  isBeforeUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** To filter on some Payment Products (all if empty) */
  paymentProduct?: InputMaybe<Array<PaymentProduct>>;
  /** To filter on some text occurrences (words or ids) */
  search?: InputMaybe<Scalars['String']['input']>;
  /** To filter on some Transaction Status (all if empty) */
  status?: InputMaybe<Array<TransactionStatus>>;
  /** To filter on some transaction types */
  type?: InputMaybe<Array<TransactionTypeEnum>>;
};

export type TransactionsOrderByField =
  | 'createdAt'
  | 'executionDate'
  | 'id'
  | 'updatedAt';

/** the criteria to sort transactions */
export type TransactionsOrderByInput = {
  direction?: InputMaybe<OrderByDirection>;
  field?: InputMaybe<TransactionsOrderByField>;
};

/** Quality of the account holder doing the onboarding */
export type TypeOfRepresentation =
  /** The account holder is the legal representative */
  | 'LegalRepresentative'
  /** The account holder has a power of attorney */
  | 'PowerOfAttorney';

/** Ultimate beneficial Direct Owner company info. */
export type UltimateBeneficialDirectOwnerCompanyInfo = UltimateBeneficialOwnerInfo & {
  __typename: 'UltimateBeneficialDirectOwnerCompanyInfo';
  /** Ultimate Beneficial Owner Unique Identifier . */
  id: Scalars['ID']['output'];
  /** Name of the company. */
  name: Scalars['String']['output'];
  /** Shares ratio of the parent company. Example: 50 if the share ratio is 50%. */
  parentCompanyShareRatio: Scalars['Float']['output'];
  /** Registration number. */
  registrationNumber: Scalars['String']['output'];
  /** Ultimate beneficial Direct Owner Company type. */
  type: UltimateBeneficialOwnerType;
};

/** Ultimate beneficial Direct Owner individual info. */
export type UltimateBeneficialDirectOwnerIndividualInfo = UltimateBeneficialOwnerInfo & {
  __typename: 'UltimateBeneficialDirectOwnerIndividualInfo';
  /** Birth date. */
  birthDate: Scalars['Date']['output'];
  /** First name. */
  firstName: Scalars['String']['output'];
  /** Ultimate Beneficial Owner Unique Identifier . */
  id: Scalars['ID']['output'];
  /** Last name. */
  lastName: Scalars['String']['output'];
  /** Shares ratio of the parent company. Example: 50 if the share ratio is 50%. */
  parentCompanyShareRatio: Scalars['Float']['output'];
  /** Ultimate beneficial Direct owner Individual type . */
  type: UltimateBeneficialOwnerType;
};

/** Ultimate beneficial owner company info. */
export type UltimateBeneficialIndirectOwnerCompanyInfo = UltimateBeneficialOwnerInfo & {
  __typename: 'UltimateBeneficialIndirectOwnerCompanyInfo';
  /** Ultimate Beneficial Owner Unique Identifier . */
  id: Scalars['ID']['output'];
  /** Name of the company. */
  name: Scalars['String']['output'];
  /** Unique Reference of the Parent Company. */
  parentCompanyReference: Scalars['String']['output'];
  /** Shares ratio of the parent company. Example: 50 if the share ratio is 50%. */
  parentCompanyShareRatio: Scalars['Float']['output'];
  /** Registration number. */
  registrationNumber: Scalars['String']['output'];
  /** Ultimate beneficial Indirect Owner Company type. */
  type: UltimateBeneficialOwnerType;
};

/** Ultimate beneficial Indirect Owner individual info. */
export type UltimateBeneficialIndirectOwnerIndividualInfo = UltimateBeneficialOwnerInfo & {
  __typename: 'UltimateBeneficialIndirectOwnerIndividualInfo';
  /** Birth date. */
  birthDate: Scalars['Date']['output'];
  /** First name. */
  firstName: Scalars['String']['output'];
  /** Ultimate Beneficial Owner Unique Identifier. */
  id: Scalars['ID']['output'];
  /** Last name. */
  lastName: Scalars['String']['output'];
  /** Unique Reference of the Parent Company. */
  parentCompanyReference: Scalars['String']['output'];
  /** Shares ratio of the parent company. Example: 50 if the share ratio is 50%. */
  parentCompanyShareRatio: Scalars['Float']['output'];
  /** Ultimate beneficial Indirect Owner Individual type . */
  type: UltimateBeneficialOwnerType;
};

/** The Ultimate Beneficial Owner could be for an Individual or a Company and these can Direct or Indirect */
export type UltimateBeneficialOwnerInfo = {
  /** Ultimate Beneficial Owner Unique Identifier . */
  id: Scalars['ID']['output'];
  /** Shares ratio of the parent company. Example: 50 if the share ratio is 50%. */
  parentCompanyShareRatio: Scalars['Float']['output'];
  /** Ultimate beneficial owner type. */
  type: UltimateBeneficialOwnerType;
};

/** Ultimate Beneficial Owner type. */
export type UltimateBeneficialOwnerType =
  /** Direct Company Owner (Legal person). */
  | 'DirectCompany'
  /** Direct Individual Owner (Natural person) . */
  | 'DirectIndividual'
  /** Indirect Company Owner (Legal person). */
  | 'IndirectCompany'
  /** Indirect Individual Owner (Natural person). */
  | 'IndirectIndividual';

/** Upcoming transaction status information */
export type UpcomingTransactionStatusInfo = TransactionStatusInfo & {
  __typename: 'UpcomingTransactionStatusInfo';
  /** The date when the transaction will be executed */
  executionDate: Scalars['DateTime']['output'];
  /** status of the transaction */
  status: TransactionStatus;
};

export type UpdateAccountHolderInput = {
  accountHolderId: Scalars['ID']['input'];
  taxIdentificationNumber?: InputMaybe<Scalars['String']['input']>;
  vatNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAccountHolderPayload = AccountHolderNotFoundRejection | UpdateAccountHolderSuccessPayload | ValidationRejection;

export type UpdateAccountHolderSuccessPayload = {
  __typename: 'UpdateAccountHolderSuccessPayload';
  accountHolder: AccountHolder;
};

/** Inputs to update an account */
export type UpdateAccountInput = {
  /** Unique identifier of an account */
  accountId: Scalars['ID']['input'];
  /** Language */
  language?: InputMaybe<AccountLanguage>;
  /** Name */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Inputs to update an account membership */
export type UpdateAccountMembershipInput = {
  /** Unique identifier of an account membership */
  accountMembershipId: Scalars['ID']['input'];
  /** `true` if this account membership can initiate payments */
  canInitiatePayments?: InputMaybe<Scalars['Boolean']['input']>;
  /** `true` if this account membership can invite, update, suspend or resume memberships */
  canManageAccountMembership?: InputMaybe<Scalars['Boolean']['input']>;
  /** `true` if this account membership can add or canceled beneficiaries */
  canManageBeneficiaries?: InputMaybe<Scalars['Boolean']['input']>;
  /** `true` if this account membership can manage cards for himself or to the memberships he manages */
  canManageCards?: InputMaybe<Scalars['Boolean']['input']>;
  /** `true` if this account membership can view account balances and transactions history */
  canViewAccount?: InputMaybe<Scalars['Boolean']['input']>;
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
  /** Email address */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Residency address of the member to be added */
  residencyAddress?: InputMaybe<ResidencyAddressInput>;
  /** Restricted to a user if necessary */
  restrictedTo?: InputMaybe<UpdatedRestrictedToInput>;
  /** Periodic Spending limit */
  spendingLimit?: InputMaybe<SpendingLimitInput>;
  /** Tax Identification Number of the user added */
  taxIdentificationNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAccountMembershipPayload = AccountMembershipCannotBeUpdatedRejection | AccountMembershipNotFoundRejection | ForbiddenRejection | InvalidPhoneNumberRejection | PermissionCannotBeGrantedRejection | UpdateAccountMembershipSuccessPayload | UserNotAllowedToManageAccountMembershipRejection | ValidationRejection;

export type UpdateAccountMembershipSuccessPayload = {
  __typename: 'UpdateAccountMembershipSuccessPayload';
  consent: Consent;
};

export type UpdateAccountPayload = AccountNotFoundRejection | BadAccountStatusRejection | ForbiddenRejection | InternalErrorRejection | UpdateAccountSuccessPayload | ValidationRejection;

export type UpdateAccountSuccessPayload = {
  __typename: 'UpdateAccountSuccessPayload';
  account: Account;
};

/** Input to Update Card */
export type UpdateCardInput = {
  /** Card expiration date  if `null` it does not have an expiration date */
  cardContractExpiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Unique identifier of the card to update */
  cardId: Scalars['ID']['input'];
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
  /** `true` if this card allows transactions at eCommerce sites */
  eCommerce: Scalars['Boolean']['input'];
  /** `true` if this card allows payments outside of the country */
  international: Scalars['Boolean']['input'];
  /** Card name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** `true` if this card allows transactions outside of the card's main currency */
  nonMainCurrencyTransactions: Scalars['Boolean']['input'];
  /** Periodic Spending limit */
  spendingLimit?: InputMaybe<SpendingLimitInput>;
  /** `true` if this card allows cash withdrawals */
  withdrawal: Scalars['Boolean']['input'];
};

export type UpdateCardPayload = AccountMembershipNotAllowedRejection | AccountNotFoundRejection | CardNotFoundRejection | UpdateCardSuccessPayload | ValidationRejection;

export type UpdateCardSuccessPayload = {
  __typename: 'UpdateCardSuccessPayload';
  consent: Consent;
};

export type UpdateCompanyOnboardingInput = {
  /** Country of the account that will be created at the end of the onboarding process */
  accountCountry?: InputMaybe<AccountCountry>;
  /** Account name of the company account holder. Length must be from 0 to 100 characters */
  accountName?: InputMaybe<Scalars['String']['input']>;
  /** Business activity */
  businessActivity?: InputMaybe<BusinessActivity>;
  /** Business activity description. Length must be from 0 to 1024 characters */
  businessActivityDescription?: InputMaybe<Scalars['String']['input']>;
  /** Type of the company (Association ...) */
  companyType?: InputMaybe<CompanyType>;
  /** Email of the legal representative. Length must be from 0 to 255 characters */
  email?: InputMaybe<Scalars['String']['input']>;
  /**
   * The ultimate beneficial owner is defined as the natural person (s) who own or control, directly and/or indirectly, the reporting company.
   *
   * The ultimate beneficial owner is :
   * - either the natural person (s) who hold, directly or indirectly, more than 25% of the capital or the rights of vote of the reporting company;
   * - either the natural person (s) who exercise, by other means, a power of control of the company;
   */
  individualUltimateBeneficialOwners?: InputMaybe<Array<IndividualUltimateBeneficialOwnerInput>>;
  /** Is company registered at RCS in its country */
  isRegistered?: InputMaybe<Scalars['Boolean']['input']>;
  /** Language of the onboarding process. Must be compliant with RFC 5646 */
  language?: InputMaybe<Scalars['String']['input']>;
  /** Legal representative personal address */
  legalRepresentativePersonalAddress?: InputMaybe<AddressInformationInput>;
  /** Estimated monthly payment volume (euro) */
  monthlyPaymentVolume?: InputMaybe<MonthlyPaymentVolume>;
  /** Name of the company. Length must be from 0 to 255 characters */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Id of onboarding to be updated. Must be a valid UUID v4. Required */
  onboardingId: Scalars['ID']['input'];
  /** Registration number of the company (SIRET, ...). Length must be from 0 to 50 characters */
  registrationNumber?: InputMaybe<Scalars['String']['input']>;
  /** Residency address of the head office (Must be in a European country) */
  residencyAddress?: InputMaybe<ResidencyAddressInput>;
  /** Tax Identification Number */
  taxIdentificationNumber?: InputMaybe<Scalars['String']['input']>;
  /** Type of representation (legal representative or power of attorney) */
  typeOfRepresentation?: InputMaybe<TypeOfRepresentation>;
  /** VAT number */
  vatNumber?: InputMaybe<Scalars['String']['input']>;
};

/** Possible results for mutation `updateCompanyOnboarding` */
export type UpdateCompanyOnboardingPayload = ForbiddenRejection | InternalErrorRejection | UpdateCompanyOnboardingSuccessPayload | ValidationRejection;

/** Result when updateCompanyOnboarding is a success */
export type UpdateCompanyOnboardingSuccessPayload = {
  __typename: 'UpdateCompanyOnboardingSuccessPayload';
  onboarding: OnboardingInfo;
};

export type UpdateIndividualOnboardingInput = {
  /** Country of the account that will be created at the end of the onboarding process */
  accountCountry?: InputMaybe<AccountCountry>;
  /** Account name of the individual account holder. Length must be from 0 to 255 characters */
  accountName?: InputMaybe<Scalars['String']['input']>;
  /** Email. Length must be from 0 to 255 characters */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Employment status of the individual account holder */
  employmentStatus?: InputMaybe<EmploymentStatus>;
  /** Language of the onboarding process. Must be compliant with RFC 5646 */
  language?: InputMaybe<Scalars['String']['input']>;
  /** Monthly income of the individual account holder */
  monthlyIncome?: InputMaybe<MonthlyIncome>;
  /** Id of onboarding to be updated. Must be a valid UUID v4. Required */
  onboardingId: Scalars['ID']['input'];
  /** Residency address of the individual account holder (must be in a European country) */
  residencyAddress?: InputMaybe<ResidencyAddressInput>;
  /** Tax Identification Number */
  taxIdentificationNumber?: InputMaybe<Scalars['String']['input']>;
};

/** Possible result types for `updateIndividualOnboarding` */
export type UpdateIndividualOnboardingPayload = ForbiddenRejection | InternalErrorRejection | UpdateIndividualOnboardingSuccessPayload | ValidationRejection;

/** Type of result when updateIndividualOnboarding is a success */
export type UpdateIndividualOnboardingSuccessPayload = {
  __typename: 'UpdateIndividualOnboardingSuccessPayload';
  onboarding: OnboardingInfo;
};

/** Inputs to update a received sepa direct debit mandate B2b. */
export type UpdateReceivedSepaDirectDebitB2bMandateInput = {
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
  /** The Sepa Creditor Identifier of the creditor */
  creditorIdentifier?: InputMaybe<Scalars['String']['input']>;
  /** The name of the creditor */
  creditorName?: InputMaybe<Scalars['String']['input']>;
  /** The Swan Iban of the debtor */
  iban?: InputMaybe<Scalars['String']['input']>;
  /** The unique identifier of the received direct debit mandate */
  mandateReference?: InputMaybe<Scalars['String']['input']>;
  /** Label that will be displayed along with this received direct debit mandate in the web banking */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The unique mandate id */
  receivedDirectDebitMandateId: Scalars['ID']['input'];
};

/** Union type returned by the updateReceivedSepaDirectDebitB2bMandate mutation */
export type UpdateReceivedSepaDirectDebitB2bMandatePayload = AccountNotFoundRejection | ForbiddenRejection | ReceivedDirectDebitMandateAlreadyExistRejection | ReceivedDirectDebitMandateNotB2bRejection | ReceivedDirectDebitMandateNotFoundRejection | UpdateReceivedSepaDirectDebitB2bMandateSuccessPayload;

/** Return type in case of a successful response of the updateReceivedSepaDirectDebitB2bMandate mutation */
export type UpdateReceivedSepaDirectDebitB2bMandateSuccessPayload = {
  __typename: 'UpdateReceivedSepaDirectDebitB2bMandateSuccessPayload';
  /** The received direct debit mandate updated */
  receivedDirectDebitMandate: ReceivedDirectDebitMandate;
};

export type UpdateSupportingDocumentInput = {
  supportingDocumentId: Scalars['ID']['input'];
  supportingDocumentPurpose?: InputMaybe<SupportingDocumentPurposeEnum>;
  supportingDocumentType?: InputMaybe<SupportingDocumentType>;
};

export type UpdateSupportingDocumentPayload = ForbiddenRejection | InternalErrorRejection | SupportingDocumentCollectionNotFoundRejection | SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection | SupportingDocumentNotFoundRejection | SupportingDocumentStatusDoesNotAllowUpdateRejection | UpdateSupportingDocumentSuccessPayload | ValidationRejection;

export type UpdateSupportingDocumentSuccessPayload = {
  __typename: 'UpdateSupportingDocumentSuccessPayload';
  supportingDocument: SupportingDocument;
};

export type UpdateUserConsentSettingsInput = {
  /** Preferred consent notification channel, Sms or App */
  preferredNotificationChannel: PreferredNotificationChannel;
  /** Swan user id */
  userId: Scalars['ID']['input'];
};

export type UpdateUserConsentSettingsPayload = UpdateUserConsentSettingsSuccessPayload | UpdateUserConsentSettingsTokenRejection;

export type UpdateUserConsentSettingsSuccessPayload = {
  __typename: 'UpdateUserConsentSettingsSuccessPayload';
  userConsentSettings: UserConsentSettings;
};

export type UpdateUserConsentSettingsTokenRejection = Rejection & {
  __typename: 'UpdateUserConsentSettingsTokenRejection';
  message: Scalars['String']['output'];
};

/** Input when the account membership is restricted to a verified user */
export type UpdatedRestrictedToInput = {
  /** Account member birth date */
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  /** Account member first name */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Account member last name */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Account member phone number */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

/** The User is the unique user, natural person, of the Swan app. */
export type User = {
  __typename: 'User';
  /** The list of account memberships */
  accountMemberships: AccountMembershipConnection;
  /** list of first names */
  allFirstNames?: Maybe<Array<Scalars['String']['output']>>;
  /** the methods used to authenticate this user */
  authenticators?: Maybe<Array<Authenticator>>;
  /** birth date */
  birthDate?: Maybe<Scalars['Date']['output']>;
  /** Creation date of the user */
  createdAt: Scalars['DateTime']['output'];
  /** first name */
  firstName?: Maybe<Scalars['String']['output']>;
  /** unique identifier of the user */
  id: Scalars['ID']['output'];
  /** `true` if Swan has verified the user's identity */
  idVerified: Scalars['Boolean']['output'];
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
  identifications?: Maybe<IdentificationConnection>;
  /** Date on which the user joined the project. Joining the project is done after the first accepted OAuth login. */
  joinedAt: Scalars['DateTime']['output'];
  /** last name */
  lastName?: Maybe<Scalars['String']['output']>;
  /** mobile phone number with the international format (Example: +33689788967) */
  mobilePhoneNumber?: Maybe<Scalars['PhoneNumber']['output']>;
  /** nationality */
  nationalityCCA3?: Maybe<Scalars['CCA3']['output']>;
  /**
   * Preferred notification channel
   *
   * When it is "null" it means that the preferences have not been updated. Default SMS in use
   */
  preferredNotificationChannel?: Maybe<PreferredNotificationChannel>;
  /** Last update date of the user */
  updatedAt: Scalars['DateTime']['output'];
};


/** The User is the unique user, natural person, of the Swan app. */
export type UserAccountMembershipsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<AccountMembershipsFilterInput>;
  first?: Scalars['Int']['input'];
};


/** The User is the unique user, natural person, of the Swan app. */
export type UserIdentificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<IdentificationFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<IdentificationsOrderByInput>;
};

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type UserConnection = Connection & {
  __typename: 'UserConnection';
  /** UserEdge list */
  edges: Array<UserEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars['Int']['output'];
};

export type UserConsentSettings = {
  __typename: 'UserConsentSettings';
  /** Preferred notification channel */
  preferredNotificationChannel: PreferredNotificationChannel;
  /** Project identifier */
  projectId: Scalars['String']['output'];
  /** User identifier */
  userId: Scalars['String']['output'];
};

/** Implements the Relay Edge interface */
export type UserEdge = Edge & {
  __typename: 'UserEdge';
  /** Opaque identifier pointing to this consent node in the pagination mechanism */
  cursor: Scalars['String']['output'];
  /** The consent */
  node: User;
};

export type UserFilterInput = {
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  identificationLevel?: InputMaybe<IdentificationLevelInput>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobilePhoneNumber?: InputMaybe<Scalars['String']['input']>;
  nationalityCCA3?: InputMaybe<Scalars['CCA3']['input']>;
  preferredNotificationChannel?: InputMaybe<PreferredNotificationChannel>;
  /**
   * Searches first name, last name, phone number and id
   * Min length : 3 characters
   */
  search?: InputMaybe<Scalars['String']['input']>;
};

export type UserNotAllowedToDisableItsOwnAccountMembershipRejection = Rejection & {
  __typename: 'UserNotAllowedToDisableItsOwnAccountMembershipRejection';
  accountMembershipId: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Rejection returned if a identity does not have enough permission to manage account membership */
export type UserNotAllowedToManageAccountMembershipRejection = Rejection & {
  __typename: 'UserNotAllowedToManageAccountMembershipRejection';
  message: Scalars['String']['output'];
};

export type UserNotAllowedToSuspendItsOwnAccountMembershipRejection = Rejection & {
  __typename: 'UserNotAllowedToSuspendItsOwnAccountMembershipRejection';
  accountMembershipId: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Rejection returned when the User is not the Card Holder */
export type UserNotCardHolderRejection = Rejection & {
  __typename: 'UserNotCardHolderRejection';
  message: Scalars['String']['output'];
};

/** Field we can use when ordering that can be applied when listing users */
export type UserOrderByFieldInput =
  | 'createdAt'
  | 'updatedAt';

/** Order that can be applied when listing users */
export type UserOrderByInput = {
  direction?: InputMaybe<OrderByDirection>;
  field?: InputMaybe<UserOrderByFieldInput>;
};

/** Information extracted from a valid IBAN */
export type ValidIban = {
  __typename: 'ValidIban';
  /** Account Number extracted from the IBAN */
  accountNumber: Scalars['String']['output'];
  /** Bank that owns this IBAN */
  bank: Bank;
  /** Checksum extracted from the IBAN */
  checksum: Scalars['String']['output'];
  /** Iban from input */
  iban: Scalars['IBAN']['output'];
  /** Reachability of this IBAN over different payment methods */
  reachability: Reachability;
};

/** Describes a valid identification level for the process associated to this identification, and identification documents can be accessed */
export type ValidIdentificationLevelStatusInfo = {
  __typename: 'ValidIdentificationLevelStatusInfo';
  /** Always set to `Valid` */
  status: SwanIdentificationStatus;
};

/** A detail of a validation error : what field is errored and why */
export type ValidationError = {
  __typename: 'ValidationError';
  /** Constraints that are not matched on the Onboarding property */
  errors?: Maybe<Array<FieldValidationError>>;
  /** Onboarding property that is not matching requirements to allow a finalization */
  field: Scalars['String']['output'];
};

export type ValidationFieldError = {
  __typename: 'ValidationFieldError';
  code: ValidationFieldErrorCode;
  message: Scalars['String']['output'];
  path: Array<Scalars['String']['output']>;
};

export type ValidationFieldErrorCode =
  | 'InvalidString'
  | 'InvalidType'
  | 'TooLong'
  | 'TooShort'
  | 'UnrecognizedKeys';

/** Rejection returned if an input contains invalid data */
export type ValidationRejection = Rejection & {
  __typename: 'ValidationRejection';
  fields: Array<ValidationFieldError>;
  message: Scalars['String']['output'];
};

/** Verification Flow. */
export type VerificationFlow =
  /** When you ask the account holder the minimum required to comply the law at the beginning of the relationship. */
  | 'Progressive'
  /** When you ask the account holder to start the verification process at the beginning of the relationship to get an unlimited account. */
  | 'Upfront';

/** Verification status of an account holder */
export type VerificationStatus =
  /** When the account holder has not started to answer the verification process. */
  | 'NotStarted'
  /** When the verification process is pending. */
  | 'Pending'
  /** When the account holder is refused. */
  | 'Refused'
  /** When the account holder is verified. */
  | 'Verified'
  /** When Swan is waiting for information about the account holder to continue the verification process. */
  | 'WaitingForInformation';

/** Enabled Information */
export type VerifiedStatusInfo = AccountVerificationStatusInfo & {
  __typename: 'VerifiedStatusInfo';
  /** Account verification status (Verified) */
  status: AccountVerificationStatus;
  /** Date at which the verification was verified */
  verifiedAt: Scalars['DateTime']['output'];
};

export type ViewCardNumbersInput = {
  /** Unique identifier of a card */
  cardId: Scalars['ID']['input'];
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
};

export type ViewCardNumbersPayload = CardNotFoundRejection | UserNotCardHolderRejection | ValidationRejection | ViewCardNumbersSuccessPayload;

export type ViewCardNumbersSuccessPayload = {
  __typename: 'ViewCardNumbersSuccessPayload';
  /** The consent required to view card numbers */
  consent: Consent;
};

export type ViewPhysicalCardNumbersInput = {
  /** Unique identifier of a card */
  cardId: Scalars['ID']['input'];
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
};

export type ViewPhysicalCardNumbersPayload = CardNotFoundRejection | UserNotCardHolderRejection | ValidationRejection | ViewPhysicalCardNumbersSuccessPayload;

export type ViewPhysicalCardNumbersSuccessPayload = {
  __typename: 'ViewPhysicalCardNumbersSuccessPayload';
  /** The consent required to view card numbers */
  consent: Consent;
};

export type ViewPhysicalCardPinInput = {
  /** Unique identifier of a card */
  cardId: Scalars['ID']['input'];
  /** URL the user is redirected to after consent has been given */
  consentRedirectUrl: Scalars['String']['input'];
};

export type ViewPhysicalCardPinPayload = CardNotFoundRejection | PinNotReadyRejection | PhysicalCardNotFoundRejection | UserNotCardHolderRejection | ValidationRejection | ViewPhysicalCardPinSuccessPayload;

export type ViewPhysicalCardPinSuccessPayload = {
  __typename: 'ViewPhysicalCardPinSuccessPayload';
  /** The consent required to view card numbers */
  consent: Consent;
};

/** Virtual IBAN can be used by the account holder to receive SCT (Sepa Credit Transfer) or to be debited by SDD (Sepa Direct Debit). */
export type VirtualIbanEntry = {
  __typename: 'VirtualIBANEntry';
  /** Bank Identifier Code */
  BIC: Scalars['BIC']['output'];
  /** International Bank Account Number */
  IBAN: Scalars['IBAN']['output'];
  /** `true` if the Virtual IBAN refuses all Sepa Direct Debit received */
  blockSDD: Scalars['Boolean']['output'];
  /** Unique identifier of a Virtual IBAN entry */
  id: Scalars['ID']['output'];
  /** Label (could be used to identify) */
  label?: Maybe<Scalars['String']['output']>;
  /** Status of the Iban */
  status: IbanStatus;
};

/** Implements the Relay Connection interface, used to paginate list of element ([Learn More](https://docs.swan.io/api/pagination)) */
export type VirtualIbanEntryConnection = Connection & {
  __typename: 'VirtualIBANEntryConnection';
  /** VirtualIBANEntryEdge list */
  edges: Array<VirtualIbanEntryEdge>;
  /** Information about the current, the previous and the next page */
  pageInfo: PageInfo;
  /** Total number of element in the list */
  totalCount: Scalars['Int']['output'];
};

/** Implements the Relay Edge interface */
export type VirtualIbanEntryEdge = Edge & {
  __typename: 'VirtualIBANEntryEdge';
  /** Opaque identifier pointing to this node in the pagination mechanism */
  cursor: Scalars['String']['output'];
  /** The virtual iban entry */
  node: VirtualIbanEntry;
};

/** Wallet Provider (ApplePay, GooglePay ...) */
export type WalletProvider = {
  __typename: 'WalletProvider';
  /** id of the Wallet Provider */
  id: Scalars['String']['output'];
  /** name of the Wallet Provider (Apple / Google / Amazon or Unknown) */
  name: Scalars['String']['output'];
};

/** Wallet Provider */
export type WalletProviderType =
  | 'ApplePay'
  | 'GooglePay';

export type WebBankingSettings = {
  __typename: 'WebBankingSettings';
  canAddNewMembers?: Maybe<Scalars['Boolean']['output']>;
  canInitiatePaymentsToNewBeneficiaries?: Maybe<Scalars['Boolean']['output']>;
  canManageVirtualIbans?: Maybe<Scalars['Boolean']['output']>;
  canOrderPhysicalCards?: Maybe<Scalars['Boolean']['output']>;
  canOrderVirtualCards?: Maybe<Scalars['Boolean']['output']>;
  canViewAccountDetails?: Maybe<Scalars['Boolean']['output']>;
  canViewAccountStatement?: Maybe<Scalars['Boolean']['output']>;
  canViewMembers?: Maybe<Scalars['Boolean']['output']>;
  canViewPaymentList?: Maybe<Scalars['Boolean']['output']>;
};

/** Rejection returned when a parameter has a wrong value */
export type WrongValueProvidedRejection = Rejection & {
  __typename: 'WrongValueProvidedRejection';
  message: Scalars['String']['output'];
  parameterName: Scalars['String']['output'];
  valueProvided: Scalars['String']['output'];
};

export type ProjectIdQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectIdQuery = { __typename: 'Query', projectInfo: { __typename: 'ProjectInfo', id: string } };

export type OnboardingRedirectInfoFragment = { __typename: 'Onboarding', id: string, redirectUrl: string, account?: { __typename: 'Account', legalRepresentativeMembership: { __typename: 'AccountMembership', id: string } } | null, statusInfo: { __typename: 'OnboardingFinalizedStatusInfo', status: OnboardingStatus } | { __typename: 'OnboardingInvalidStatusInfo', status: OnboardingStatus } | { __typename: 'OnboardingValidStatusInfo', status: OnboardingStatus }, oAuthRedirectParameters?: { __typename: 'OAuthRedirectParameters', state?: string | null, redirectUrl?: string | null } | null };

export type GetAccountMembershipInvitationDataQueryVariables = Exact<{
  inviterAccountMembershipId: Scalars['ID']['input'];
  inviteeAccountMembershipId: Scalars['ID']['input'];
}>;


export type GetAccountMembershipInvitationDataQuery = { __typename: 'Query', projectInfo: { __typename: 'ProjectInfo', id: string, name: string, accentColor?: string | null, logoUri?: string | null }, inviterAccountMembership?: { __typename: 'AccountMembership', email: string, user?: { __typename: 'User', firstName?: string | null, lastName?: string | null } | null, account?: { __typename: 'Account', name: string, number: string, holder: { __typename: 'AccountHolder', info: { __typename: 'AccountHolderCompanyInfo', name: string } | { __typename: 'AccountHolderIndividualInfo', name: string } } } | null } | null, inviteeAccountMembership?: { __typename: 'AccountMembership', id: string, email: string, statusInfo: { __typename: 'AccountMembershipBindingUserErrorStatusInfo' } | { __typename: 'AccountMembershipConsentPendingStatusInfo' } | { __typename: 'AccountMembershipDisabledStatusInfo' } | { __typename: 'AccountMembershipEnabledStatusInfo' } | { __typename: 'AccountMembershipInvitationSentStatusInfo', restrictedTo: { __typename: 'RestrictedTo', firstName: string } } | { __typename: 'AccountMembershipSuspendedStatusInfo' } } | null };

export type FinalizeOnboardingMutationVariables = Exact<{
  input: FinalizeOnboardingInput;
}>;


export type FinalizeOnboardingMutation = { __typename: 'Mutation', finalizeOnboarding: { __typename: 'FinalizeOnboardingSuccessPayload', onboarding: (
      { __typename: 'Onboarding' }
      & OnboardingRedirectInfoFragment
    ) } | { __typename: 'ForbiddenRejection', message: string } | { __typename: 'InternalErrorRejection', message: string } | { __typename: 'OnboardingNotCompletedRejection', message: string } | { __typename: 'ValidationRejection', message: string } };

export type BindAccountMembershipMutationVariables = Exact<{
  input: BindAccountMembershipInput;
}>;


export type BindAccountMembershipMutation = { __typename: 'Mutation', bindAccountMembership: { __typename: 'AccountMembershipNotFoundRejection', message: string } | { __typename: 'AccountMembershipNotReadyToBeBoundRejection', message: string } | { __typename: 'BadAccountStatusRejection', message: string } | { __typename: 'BindAccountMembershipSuccessPayload', accountMembership: { __typename: 'AccountMembership', id: string } } | { __typename: 'IdentityAlreadyBindToAccountMembershipRejection', message: string } | { __typename: 'RestrictedToUserRejection', message: string } | { __typename: 'ValidationRejection', message: string } };

export const OnboardingRedirectInfoFragmentDoc = gql`
    fragment OnboardingRedirectInfo on Onboarding {
  __typename
  id
  account {
    __typename
    legalRepresentativeMembership {
      __typename
      id
    }
  }
  redirectUrl
  statusInfo {
    __typename
    status
  }
  oAuthRedirectParameters {
    __typename
    state
    redirectUrl
  }
}
    `;
export const ProjectIdDocument = gql`
    query ProjectId {
  __typename
  projectInfo {
    __typename
    id
  }
}
    `;
export const GetAccountMembershipInvitationDataDocument = gql`
    query GetAccountMembershipInvitationData($inviterAccountMembershipId: ID!, $inviteeAccountMembershipId: ID!) {
  __typename
  projectInfo {
    __typename
    id
    name
    accentColor
    logoUri
  }
  inviterAccountMembership: accountMembership(id: $inviterAccountMembershipId) {
    __typename
    email
    user {
      __typename
      firstName
      lastName
    }
    account {
      __typename
      name
      number
      holder {
        __typename
        info {
          __typename
          ... on AccountHolderCompanyInfo {
            __typename
            name
          }
          ... on AccountHolderIndividualInfo {
            __typename
            name
          }
        }
      }
    }
  }
  inviteeAccountMembership: accountMembership(id: $inviteeAccountMembershipId) {
    __typename
    id
    email
    statusInfo {
      __typename
      ... on AccountMembershipInvitationSentStatusInfo {
        __typename
        restrictedTo {
          __typename
          firstName
        }
      }
    }
  }
}
    `;
export const FinalizeOnboardingDocument = gql`
    mutation FinalizeOnboarding($input: FinalizeOnboardingInput!) {
  __typename
  finalizeOnboarding(input: $input) {
    __typename
    ... on Rejection {
      __typename
      message
    }
    ... on FinalizeOnboardingSuccessPayload {
      __typename
      onboarding {
        __typename
        ...OnboardingRedirectInfo
      }
    }
  }
}
    ${OnboardingRedirectInfoFragmentDoc}`;
export const BindAccountMembershipDocument = gql`
    mutation BindAccountMembership($input: BindAccountMembershipInput!) {
  __typename
  bindAccountMembership(input: $input) {
    __typename
    ... on BindAccountMembershipSuccessPayload {
      __typename
      accountMembership {
        __typename
        id
      }
    }
    ... on Rejection {
      __typename
      message
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    ProjectId(variables?: ProjectIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ProjectIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProjectIdQuery>(ProjectIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ProjectId', 'query');
    },
    GetAccountMembershipInvitationData(variables: GetAccountMembershipInvitationDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAccountMembershipInvitationDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAccountMembershipInvitationDataQuery>(GetAccountMembershipInvitationDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAccountMembershipInvitationData', 'query');
    },
    FinalizeOnboarding(variables: FinalizeOnboardingMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FinalizeOnboardingMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<FinalizeOnboardingMutation>(FinalizeOnboardingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FinalizeOnboarding', 'mutation');
    },
    BindAccountMembership(variables: BindAccountMembershipMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<BindAccountMembershipMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<BindAccountMembershipMutation>(BindAccountMembershipDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'BindAccountMembership', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;