import { useQuery } from "react-query";
import { promoterService } from "../../services";

const useDashboard = () => {
  const getDashboardInfo = useQuery(["dashboardInfo"], () => {
    return promoterService.getPromoter();
  });

  return { getDashboardInfo };
};

export default useDashboard;
