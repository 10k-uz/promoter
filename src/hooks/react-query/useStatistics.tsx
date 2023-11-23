import { useQuery } from "react-query";
import { streamStatsService } from "../../services";
import { queryParamsType } from "../../interfaces";

const useStatistics = (queryParams: queryParamsType, usageType: string) => {
  const getStats = useQuery({
    queryKey: ["getStats", queryParams],
    queryFn: () => {
      return streamStatsService.getAllStats(queryParams);
    },
    enabled: usageType === "GET_STATS",
  });

  return { getStats };
};

export default useStatistics;
