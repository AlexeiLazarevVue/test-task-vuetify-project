<script setup lang="ts">
import { Post } from "@/entities/post";

type PostProps = {
  post: Post;
};

defineProps<PostProps>();
</script>

<template>
  <v-card :title="post.id" :subtitle="post.name" sm="4">
    <v-card-actions>
      <v-btn>Edit</v-btn>
      <v-btn color="#e74c3c">Delete</v-btn>
    </v-card-actions></v-card
  >
</template>

<style scoped></style>
