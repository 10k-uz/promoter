import { queryParamsType } from "../interfaces";
import api from "./api";

export interface createStreamType {
  postId: number;
  name: string;
}

class Streams {
  createStream = async (data: createStreamType) => {
    return await api.post("/v1/streams", data);
  };
  getStreams = async (queryParams: queryParamsType) => {
    let { page, limit, keyword, categoryId } = queryParams;

    return await api.get(
      `/v1/streams?page=${page || 1}&limit=${limit || 10}&keyword=${
        keyword || ""
      }&categoryId=${categoryId || ""}`
    );
  };
  deleteStream = async (streamId: number) => {
    return await api.delete(`/v1/streams/${streamId}`);
  };
}

export const streamsService = new Streams();
