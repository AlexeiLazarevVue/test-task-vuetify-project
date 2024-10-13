<script setup lang="ts">
import { Post, usePostStore } from "@/entities/post";
import { useModalStore } from "@/entities/modal";
import { ModalTypes } from "@/entities/modal/types/modal.types";

type PostProps = {
  post: Post;
};

const props = defineProps<PostProps>();

const modalStore = useModalStore();
const postStore = usePostStore();

const onEditButtonClick = () => {
  postStore.editPostId = props.post.id;
  modalStore.openModal(ModalTypes.EDIT_BOT_MODAL);
};
const onDeleteButtonClick = () => {
  postStore.deletePostId = props.post.id;
  modalStore.openModal(ModalTypes.DELETE_BOT_MODAL);
};
</script>

<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card
      :color="isHovering ? '#323232' : ''"
      :title="post.id"
      :text="post.name"
      v-bind="props"
    >
      <v-card-actions>
        <v-btn @click="onEditButtonClick">Edit</v-btn>
        <v-btn @click="onDeleteButtonClick" color="#e74c3c">Delete</v-btn>
      </v-card-actions></v-card
    ></v-hover
  >
</template>

<style scoped></style>
