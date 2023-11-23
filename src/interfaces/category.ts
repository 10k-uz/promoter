export interface singleCategory {
  id: number;
  adminId: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface categoriesType {
  categories: singleCategory[];
  isLoading?: boolean;
}
