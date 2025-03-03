<script lang="ts" setup>
const { error, data } = await useFetch("https://httpbin.org/500");

watch(
  error,
  () => {
    error.value && alert(error.value.message);
  },
  { immediate: true }
);
</script>
<template>
  <h1 class="text-2xl font-bold mb-5">
    Lesson 6 - Errors in Composables Begin
  </h1>
</template>
