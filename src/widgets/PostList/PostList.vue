<script setup lang="ts">
import { Post, PostComponent, usePostStore } from "@/entities/post";
import { computed, ref } from "vue";
import { ModalTypes } from "@/entities/modal/types/modal.types";
import { useModalStore } from "@/entities/modal";
import {
  DeletePostConfirmationModalComponent,
  EditPostModalComponent,
} from "@/widgets";
import { revertArray } from "@/shared/utils/helpers";

type PostListProps = {
  posts: Post[];
};

const props = defineProps<PostListProps>();

const postStore = usePostStore();
const modalStore = useModalStore();

const POSTS_PER_PAGE = 10;

const currentPage = ref(1);

const posts = computed(() => props.posts);
const revertedPosts = computed(() =>
  revertArray(posts.value).slice(0, currentPage.value * POSTS_PER_PAGE),
);
const showLoadMoreButton = computed(
  () => currentPage.value * POSTS_PER_PAGE < posts.value.length,
);
const editPostId = computed(() => postStore.editPostId);
const deletePostId = computed(() => postStore.deletePostId);

const onShowMoreButtonClick = () => {
  currentPage.value += 1;
};
</script>

<template>
  <div class="d-flex flex-column ga-2" v-if="posts.length">
    <v-col rounded="lg" class="pa-0">
      <v-sheet v-for="post in revertedPosts" :key="post.id" class="my-2 w-100">
        <PostComponent :post="post"
      /></v-sheet>
    </v-col>
    <v-btn
      v-if="showLoadMoreButton"
      color="primary"
      @click="onShowMoreButtonClick"
      >Load {{ POSTS_PER_PAGE }} more</v-btn
    >
  </div>
  <span class="text-center text-h5 text-medium-emphasis" v-else
    >Couldn't find any post :(</span
  >

  <EditPostModalComponent
    v-if="editPostId"
    :model-value="modalStore.checkModal(ModalTypes.EDIT_BOT_MODAL)"
    @update:modelValue="modalStore.closeModal(ModalTypes.EDIT_BOT_MODAL)"
    :postId="editPostId"
  ></EditPostModalComponent>
  <DeletePostConfirmationModalComponent
    v-if="deletePostId"
    :model-value="modalStore.checkModal(ModalTypes.DELETE_BOT_MODAL)"
    @update:modelValue="modalStore.closeModal(ModalTypes.DELETE_BOT_MODAL)"
    :postId="deletePostId"
  ></DeletePostConfirmationModalComponent>
</template>

<style scoped></style>
