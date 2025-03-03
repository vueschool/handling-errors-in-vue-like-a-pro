<script lang="ts" setup>
const { post, error } = await usePost("99999");
</script>
<template>
  <h1 class="text-2xl font-bold mb-5">
    Lesson 6 - Errors in Composables Begin
  </h1>
  <pre>{{ post }}</pre>
  <p v-if="error">{{ error.message }}</p>
</template>
