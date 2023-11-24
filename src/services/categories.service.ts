import api from "./api";

class Categories {
  getAll = async () => {
    return await api.get("/v1/categories");
  };
}

export const categoriesService = new Categories();
