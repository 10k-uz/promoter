export * from "./streams";
export * from "./category";
export * from "./posts";
export * from "./dashboard";
export * from "./queryParams";
export * from "./statistics";
export * from "./promoter";
export * from "./finAsset";

export interface metaType {
  total_pages: number;
  total_length: number;
  current_page: number;
  limit: number;
  found_results: number;
}
