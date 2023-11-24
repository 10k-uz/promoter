import { metaType } from ".";

export interface singlePostType {
  id: number;
  title: string;
  descr: string;
  cover_image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface postsType {
  posts: singlePostType[];
  setSearchValue?: any;
  isLoading?: boolean;
  meta: metaType;
}
