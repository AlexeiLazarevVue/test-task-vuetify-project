import { defineStore } from "pinia";
import { StoreNames } from "@/shared/types/general.types";
import { posts as examplePosts } from "./posts";
import { Post, PostStoreState } from "@/entities/post";
import { uuid } from "vue3-uuid";

export const usePostStore = defineStore(StoreNames.POST, {
  state: (): PostStoreState => ({
    posts: [],
    editPostId: null,
    deletePostId: null,
  }),
  actions: {
    createPost(body: Omit<Post, "id">) {
      const newPost = {
        id: uuid.v4(),
        ...body,
      };
      this.posts.push(newPost);

      this.saveToLocalStorage();
    },
    setPost(id: Post["id"], body: Omit<Post, "id">) {
      const targetPostIndex = this.posts.findIndex((post) => post.id === id);
      if (targetPostIndex === -1) return;

      this.posts[targetPostIndex] = { id: id, ...body };

      this.saveToLocalStorage();
    },
    deletePost(id: Post["id"]) {
      this.posts = this.posts.filter((post) => post.id !== id);

      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem("posts", JSON.stringify(this.posts));
    },
    getPosts() {
      const localStoragePosts = localStorage.getItem("posts");
      const posts = localStoragePosts
        ? JSON.parse(localStoragePosts)
        : examplePosts;

      this.posts = posts;

      return posts;
    },
  },
});
