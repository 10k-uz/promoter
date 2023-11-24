import { TopBar } from "../components/fixed";
import {
  BalanceCard,
  DashboardCard,
  PaymentCard,
  PaymentTable,
} from "../components/ui";
import { usePromoter, useTransactions } from "../hooks";
import { transactionsType } from "../interfaces/transactions";
import { promoterStats } from "../interfaces";
import { numberSpacer } from "../utils";

const Transactions = () => {
  const { getPromoter } = usePromoter("GET_PROMOTER");
  const { getTransactions } = useTransactions(
    {
      page: 1,
      limit: 5,
    },
    "GET_TRANSACTIONS"
  );

  const trData: transactionsType[] = getTransactions.data?.data?.transactions;
  const promoterInfo: promoterStats = getPromoter.data?.data?.stats;

  return (
    <div className="max-md:mb-20 pb-10 max-md:w-[95%]">
      <TopBar name="To'lovlar" />

      <div className="flex gap-[5%] max-md:flex-col ">
        <div className="flex flex-col justify-between w-[35%] max-md:w-full max-md:gap-4">
          <BalanceCard amount={numberSpacer(promoterInfo?.balance | 0)} />
          <DashboardCard
            image="/assets/paid_money.svg"
            label="To'lab berilgan summa"
            amount={numberSpacer(promoterInfo?.total_paid | 0)}
            rounded="rounded-xl"
          />
        </div>
        <div className="w-[65%] max-md:mt-5 max-md:w-full">
          <PaymentCard />
        </div>
      </div>
      <PaymentTable data={trData} isLoading={getTransactions.isFetching} />
    </div>
  );
};

export default Transactions;
