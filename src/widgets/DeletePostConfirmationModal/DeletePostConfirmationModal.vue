<script setup lang="ts">
import { Post, usePostStore } from "@/entities/post";
import { computed } from "vue";

type EditPostModalProps = {
  modelValue: boolean;
  postId: Post["id"];
};

const props = defineProps<EditPostModalProps>();
const emit = defineEmits(["update:modelValue", "close"]);
const postStore = usePostStore();

const targetPost = computed(() =>
  postStore.posts.find((post) => post.id === props.postId),
);

const onDeleteButtonClick = () => {
  emit("update:modelValue", false);
  postStore.deletePost(props.postId);
};
</script>

<template>
  <v-dialog
    :model-value="modelValue"
    @update:modelValue="(value) => emit('update:modelValue', value)"
    width="400"
  >
    <v-sheet class="pa-8 d-flex flex-column ga-8">
      <span class="text-h5">Confirm deletion</span>
      <p>
        Are you sure that you want to delete this post (ID:
        {{ targetPost?.id }})?
      </p>
      <div class="d-flex justify-space-between w-100">
        <v-btn color="#b04034" @click="onDeleteButtonClick">Delete</v-btn
        ><v-btn color="#323232" @click="emit('close')">Cancel</v-btn>
      </div>
    </v-sheet>
  </v-dialog>
</template>

<style scoped></style>
