<script setup lang="ts">
import { CreatePostFormComponent } from "@/widgets/CreatePostForm";

type CreatePostModalProps = {
  modelValue: boolean;
};
defineProps<CreatePostModalProps>();
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <v-dialog
    :model-value="modelValue"
    @update:modelValue="(value) => emit('update:modelValue', value)"
    width="500"
  >
    <CreatePostFormComponent
      @close="emit('update:modelValue', false)"
    ></CreatePostFormComponent>
  </v-dialog>
</template>

<style scoped></style>
