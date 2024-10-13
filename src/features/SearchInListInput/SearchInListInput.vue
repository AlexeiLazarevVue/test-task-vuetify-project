<script setup lang="ts">
import { computed, ref, watch } from "vue";

type SearchInPostsProps = {
  modelValue: { [key: string]: any }[];
  sourceList: { [key: string]: any }[];
  field?: string;
  placeholder?: string;
};

const props = withDefaults(defineProps<SearchInPostsProps>(), {
  field: "name",
});
const emit = defineEmits(["update:modelValue"]);

const searchQuery = ref<string>("");

const filteredPosts = computed(() =>
  props.sourceList.filter((item) =>
    item[props.field].includes(searchQuery.value),
  ),
);

watch(filteredPosts, () => emit("update:modelValue", filteredPosts.value));
</script>

<template>
  <v-text-field
    class="w-100"
    :placeholder="placeholder"
    hide-details
    v-model="searchQuery"
  ></v-text-field>
</template>

<style scoped></style>
