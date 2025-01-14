import { Array, Option } from "@swan-io/boxed";
import { Box } from "@swan-io/lake/src/components/Box";
import {
  FixedListViewEmpty,
  PlainListViewPlaceholder,
} from "@swan-io/lake/src/components/FixedListView";
import { FocusTrapRef } from "@swan-io/lake/src/components/FocusTrap";
import { ListRightPanel } from "@swan-io/lake/src/components/ListRightPanel";
import { Pressable } from "@swan-io/lake/src/components/Pressable";
import { ResponsiveContainer } from "@swan-io/lake/src/components/ResponsiveContainer";
import { commonStyles } from "@swan-io/lake/src/constants/commonStyles";
import { breakpoints, spacings } from "@swan-io/lake/src/constants/design";
import { useUrqlPaginatedQuery } from "@swan-io/lake/src/hooks/useUrqlQuery";
import { isNotNullish } from "@swan-io/lake/src/utils/nullish";
import { useCallback, useMemo, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { match } from "ts-pattern";
import { ErrorView } from "../components/ErrorView";
import { TransactionDetail } from "../components/TransactionDetail";
import { TransactionList } from "../components/TransactionList";
import { PaymentProduct, TransactionListPageDocument } from "../graphql/partner";
import { t } from "../utils/i18n";
import { Router } from "../utils/routes";
import {
  TransactionFiltersState,
  TransactionListFilter,
  defaultFiltersDefinition,
} from "./TransactionListFilter";

const styles = StyleSheet.create({
  root: {
    ...commonStyles.fill,
  },
  filters: {
    paddingHorizontal: spacings[24],
    paddingBottom: spacings[12],
  },
  filtersLarge: {
    paddingHorizontal: spacings[40],
  },
});

const NUM_TO_RENDER = 20;

type Props = {
  accountId: string;
  accountMembershipId: string;
  canQueryCardOnTransaction: boolean;
  canViewAccount: boolean;
  params: {
    isAfterUpdatedAt?: string | undefined;
    isBeforeUpdatedAt?: string | undefined;
    paymentProduct?: string[] | undefined;
    search?: string | undefined;
    transactionStatus?: string[] | undefined;
  };
};

const DEFAULT_STATUSES = [
  "Booked" as const,
  "Canceled" as const,
  "Pending" as const,
  "Rejected" as const,
];

const DEFAULT_PRODUCTS = [
  "SEPACreditTransfer" as const,
  "InternalCreditTransfer" as const,
  "InternationalCreditTransfer" as const,
  "SEPADirectDebit" as const,
  "InternalDirectDebit" as const,
];

export const TransferList = ({
  accountId,
  accountMembershipId,
  params,
  canQueryCardOnTransaction,
  canViewAccount,
}: Props) => {
  const filters: TransactionFiltersState = useMemo(() => {
    return {
      includeRejectedWithFallback: false,
      isAfterUpdatedAt: params.isAfterUpdatedAt,
      isBeforeUpdatedAt: params.isBeforeUpdatedAt,
      paymentProduct: isNotNullish(params.paymentProduct)
        ? Array.filterMap(params.paymentProduct, item =>
            match(item)
              .with("CreditTransfer", "DirectDebit", value => Option.Some(value))
              .otherwise(() => Option.None()),
          )
        : undefined,
      search: params.search,
      status: isNotNullish(params.transactionStatus)
        ? Array.filterMap(params.transactionStatus, item =>
            match(item)
              .with("Booked", "Canceled", "Pending", "Rejected", "Released", item =>
                Option.Some(item),
              )
              .otherwise(() => Option.None()),
          )
        : undefined,
    } as const;
  }, [
    params.isAfterUpdatedAt,
    params.isBeforeUpdatedAt,
    params.paymentProduct,
    params.search,
    params.transactionStatus,
  ]);

  const hasFilters = Object.values(filters).some(isNotNullish);

  const paymentProduct = useMemo(() => {
    const actualPaymentProduct: PaymentProduct[] = [];
    filters.paymentProduct?.forEach(item => {
      const items = match(item)
        .returnType<PaymentProduct[]>()
        .with("CreditTransfer", () => [
          "SEPACreditTransfer",
          "InternalCreditTransfer",
          "InternationalCreditTransfer",
        ])
        .with("DirectDebit", () => ["SEPADirectDebit", "InternalDirectDebit"])
        .otherwise(() => []);
      actualPaymentProduct.push(...items);
    });
    return actualPaymentProduct.length > 0 ? actualPaymentProduct : DEFAULT_PRODUCTS;
  }, [filters]);

  const { data, nextData, reload, setAfter } = useUrqlPaginatedQuery(
    {
      query: TransactionListPageDocument,
      variables: {
        accountId,
        first: NUM_TO_RENDER,
        filters: {
          ...filters,
          paymentProduct,
          status: filters.status ?? DEFAULT_STATUSES,
        },
        canQueryCardOnTransaction,
        canViewAccount,
      },
    },
    [filters, canQueryCardOnTransaction],
  );

  const [activeTransactionId, setActiveTransactionId] = useState<string | null>(null);

  const transactions = data
    .toOption()
    .flatMap(result => result.toOption())
    .flatMap(data => Option.fromNullable(data.account?.transactions))
    .map(({ edges }) => edges.map(({ node }) => node))
    .getWithDefault([]);

  const panelRef = useRef<FocusTrapRef | null>(null);

  const onActiveRowChange = useCallback(
    (element: HTMLElement) => panelRef.current?.setInitiallyFocusedElement(element),
    [],
  );

  return (
    <ResponsiveContainer style={styles.root} breakpoint={breakpoints.large}>
      {({ large }) => (
        <>
          <Box style={[styles.filters, large && styles.filtersLarge]}>
            <TransactionListFilter
              filters={filters}
              onChange={({ status, ...filters }) =>
                Router.push("AccountPaymentsRoot", {
                  accountMembershipId,
                  transactionStatus: status,
                  ...filters,
                })
              }
              onRefresh={reload}
              large={large}
              filtersDefinition={{
                ...defaultFiltersDefinition,
                paymentProduct: {
                  ...defaultFiltersDefinition.paymentProduct,
                  items: defaultFiltersDefinition.paymentProduct.items.filter(({ value }) =>
                    ["CreditTransfer", "DirectDebit"].includes(value),
                  ),
                },
              }}
            ></TransactionListFilter>
          </Box>

          {data.match({
            NotAsked: () => null,
            Loading: () => (
              <PlainListViewPlaceholder
                count={NUM_TO_RENDER}
                rowVerticalSpacing={0}
                groupHeaderHeight={48}
                headerHeight={48}
                rowHeight={48}
              />
            ),
            Done: result =>
              result.match({
                Error: error => <ErrorView error={error} />,
                Ok: data => (
                  <TransactionList
                    withStickyTabs={true}
                    withGrouping={false}
                    transactions={data.account?.transactions?.edges ?? []}
                    getRowLink={({ item }) => (
                      <Pressable onPress={() => setActiveTransactionId(item.id)} />
                    )}
                    pageSize={NUM_TO_RENDER}
                    activeRowId={activeTransactionId ?? undefined}
                    onActiveRowChange={onActiveRowChange}
                    loading={{
                      isLoading: nextData.isLoading(),
                      count: 2,
                    }}
                    onEndReached={() => {
                      if (data.account?.transactions?.pageInfo.hasNextPage ?? false) {
                        setAfter(data.account?.transactions?.pageInfo.endCursor ?? undefined);
                      }
                    }}
                    renderEmptyList={() =>
                      hasFilters ? (
                        <FixedListViewEmpty
                          icon="lake-transfer"
                          borderedIcon={true}
                          title={t("transfer.list.noResults")}
                          subtitle={t("common.list.noResultsSuggestion")}
                        />
                      ) : (
                        <FixedListViewEmpty
                          borderedIcon={true}
                          icon="lake-transfer"
                          title={t("transfer.list.noResults")}
                        />
                      )
                    }
                  />
                ),
              }),
          })}

          <ListRightPanel
            ref={panelRef}
            keyExtractor={item => item.id}
            activeId={activeTransactionId}
            onActiveIdChange={setActiveTransactionId}
            onClose={() => setActiveTransactionId(null)}
            items={transactions}
            render={(transaction, large) => (
              <TransactionDetail large={large} transaction={transaction} />
            )}
            closeLabel={t("common.closeButton")}
            previousLabel={t("common.previous")}
            nextLabel={t("common.next")}
          />
        </>
      )}
    </ResponsiveContainer>
  );
};
