import { useQuery } from "react-query";
import { postsService } from "../../services";
import { queryParamsType } from "../../interfaces";

const usePosts = (queryParams: queryParamsType) => {
  const getPosts = useQuery({
    queryKey: ["getPosts", queryParams],
    queryFn: () => {
      return postsService.getPosts(queryParams);
    },
  });

  return { getPosts };
};

export default usePosts;
