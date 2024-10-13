<script setup lang="ts">
import { ref } from "vue";
import { Post, usePostStore } from "@/entities/post";

type EditPostFormProps = {
  post: Post;
};

const props = defineProps<EditPostFormProps>();
const emit = defineEmits(["close"]);

const postStore = usePostStore();

const newPostData = ref<Omit<Post, "id">>({ name: props.post.name });

const onSubmit = () => {
  postStore.setPost(props.post.id, newPostData.value);
  emit("close");
};
</script>

<template>
  <v-sheet class="pa-4">
    <v-form @submit.prevent="onSubmit">
      <v-col class="d-flex flex-column ga-5">
        <span class="text-h5">Edit post</span>
        <v-textarea v-model="newPostData.name"></v-textarea>
        <div class="d-flex justify-space-between w-100">
          <v-btn color="primary" type="submit">Edit</v-btn
          ><v-btn color="#323232" @click="emit('close')">Cancel</v-btn>
        </div></v-col
      >
    </v-form></v-sheet
  >
</template>

<style scoped></style>
