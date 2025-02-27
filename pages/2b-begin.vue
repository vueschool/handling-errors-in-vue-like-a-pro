<script setup lang="ts">
const error = ref();
onErrorCaptured((err) => {
  error.value = err;
  console.log("error captured", err);
  return false;
});
</script>

<template>
  <div v-if="!error">
    <RandomErrorParent />
  </div>
  <div v-else>
    <pre>{{ error }}</pre>
  </div>
</template>
