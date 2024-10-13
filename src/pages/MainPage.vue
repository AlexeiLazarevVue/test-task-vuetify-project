<script setup lang="ts">
import { HeaderComponent, PostListComponent } from "@/widgets";
import { SearchInListInputComponent } from "@/features";
import { usePostStore } from "@/entities";
import { computed, ref } from "vue";

const postStore = usePostStore();

const posts = computed(() => postStore.posts);
const filteredPosts = ref(posts.value);
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <v-sheet width="800px" class="bg-transparent">
    <v-col class="d-flex flex-column ga-4 pa-0">
      <SearchInListInputComponent
        placeholder="Looking for specific post?"
        :source-list="posts"
        v-model="filteredPosts" />
      <PostListComponent :posts="filteredPosts" /></v-col
  ></v-sheet>
</template>

<style scoped></style>
