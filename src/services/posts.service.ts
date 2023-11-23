import { queryParamsType } from "../interfaces";
import api from "./api";

class Posts {
  getPosts = async (queryParams: queryParamsType) => {
    let { page, limit, keyword, categoryId } = queryParams;
    return await api.get(
      `/v1/posts?page=${page || 1}&limit=${limit || 10}&keyword=${
        keyword || ""
      }&categoryId=${categoryId || null}&role=PROMOTER`
    );
  };
}

export const postsService = new Posts();
