<script setup lang="ts">
const error = ref();
onErrorCaptured((err) => {
  error.value = err;
  console.log("error captured", err);
  return false;
});
</script>

<template>
  <h1 class="text-2xl font-bold mb-5">
    Lesson 2 (part b) - Catching Errors at the Vue Component Level
    (onErrorCaptured) Begin
  </h1>
  <RandomErrorParent v-if="!error" />
  <div v-else>
    {{ error }}
  </div>
</template>
