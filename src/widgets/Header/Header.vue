<script setup lang="ts">
import { useModalStore } from "@/entities/modal";
import { ModalTypes } from "@/entities/modal/types/modal.types";
import { CreatePostModalComponent } from "@/widgets/";

const modalStore = useModalStore();
</script>

<template>
  <v-app-bar class="px-3">
    <template #prepend>
      <v-btn
        color="primary"
        @click="modalStore.openModal(ModalTypes.CREATE_BOT_MODAL)"
        >Create post</v-btn
      ></template
    >
  </v-app-bar>
  <CreatePostModalComponent
    :model-value="modalStore.checkModal(ModalTypes.CREATE_BOT_MODAL)"
    @update:modelValue="modalStore.closeModal(ModalTypes.CREATE_BOT_MODAL)"
  ></CreatePostModalComponent>
</template>

<style scoped></style>
