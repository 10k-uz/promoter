import { queryParamsType } from "../interfaces";
import api from "./api";

class StreamStats {
  getAllStats = async (queryParams: queryParamsType) => {
    let { page, limit, keyword } = queryParams;
    return await api.get(
      `/v1/streams/stats?page=${page}&limit=${limit}&keyword=${keyword}`
    );
  };
  getSingleStats = async (streamId: number) => {
    return await api.delete(`/v1/streams/stats/${streamId}`);
  };
}

export const streamStatsService = new StreamStats();
