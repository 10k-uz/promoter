import { metaType } from ".";

export interface singleStatType {
  Id: number;
  name: string;
  views: number;
  profit: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface statisticsType {
  stats: singleStatType[];
  meta: metaType;
}
