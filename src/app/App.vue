<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { usePostStore } from "@/entities/post";

const postsStore = usePostStore();

onMounted(() => {
  postsStore.getPosts();
});
</script>

<style lang="scss">
body {
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 2rem;
  background: rgb(var(--v-theme-background));
}
</style>
