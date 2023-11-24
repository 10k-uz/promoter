import { TopBar } from "../components/fixed";
import { DashboardCard } from "../components/ui";
import { useDashboard, useGetFinAssets } from "../hooks";
import { dashboardData } from "../interfaces";
import { numberSpacer } from "../utils";

const Dashboard = () => {
  const { getDashboardInfo } = useDashboard();

  let data: dashboardData = getDashboardInfo.data?.data?.stats;

  return (
    <div>
      <TopBar name="Dashboard" />

      {data && (
        <div className="flex gap-5 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-1">
          <DashboardCard
            image={"/assets/balance.svg"}
            label={"Hisob"}
            amount={numberSpacer(data?.balance! | 0)}
          />
          <DashboardCard
            image={"/assets/streams.svg"}
            label={"Oqimlar"}
            amount={numberSpacer(data?.streams! | 0)}
            sufix={"ta"}
          />
          <DashboardCard
            image={"/assets/views.svg"}
            label={"Ko'rishlar"}
            amount={numberSpacer(data?.streamViews! | 0)}
            sufix="ta"
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
