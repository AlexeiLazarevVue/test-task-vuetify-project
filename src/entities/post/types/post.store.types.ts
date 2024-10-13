import { Post } from "@/entities/post";

export type PostStoreState = {
  posts: Post[];
  editPostId: Post["id"] | null;
  deletePostId: Post["id"] | null;
};
