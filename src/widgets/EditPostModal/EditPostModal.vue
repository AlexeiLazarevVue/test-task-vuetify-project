<script setup lang="ts">
import { EditPostFormComponent } from "@/widgets/EditPostForm";
import { Post, usePostStore } from "@/entities/post";
import { computed } from "vue";

type EditPostModalProps = {
  modelValue: boolean;
  postId: Post["id"];
};

const props = defineProps<EditPostModalProps>();
const emit = defineEmits(["update:modelValue"]);

const postStore = usePostStore();

const targetPost = computed(() =>
  postStore.posts.find((post) => post.id === props.postId),
);
</script>

<template>
  <v-dialog
    :model-value="modelValue"
    @update:modelValue="(value) => emit('update:modelValue', value)"
    width="500"
  >
    <EditPostFormComponent
      v-if="targetPost"
      :post="targetPost"
      @close="emit('update:modelValue', false)"
    ></EditPostFormComponent>
  </v-dialog>
</template>

<style scoped></style>
