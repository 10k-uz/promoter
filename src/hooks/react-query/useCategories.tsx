import { useQuery } from "react-query";
import { categoriesService } from "../../services";

const useCategories = () => {
  const getCategories = useQuery(["getCategories"], () => {
    return categoriesService.getAll();
  });

  return { getCategories };
};

export default useCategories;
