import { metaType } from ".";

export interface streamData {
  id?: number;
  postId?: number;
  promoterId?: number;
  name?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface streamsType {
  streams: streamData[];
  meta: metaType;
}
