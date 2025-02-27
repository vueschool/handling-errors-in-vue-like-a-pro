<script setup lang="ts">
const error = ref();
onErrorCaptured((err) => {
  console.log("error captured from slot", err);
  error.value = err;
  return false;
});
</script>
<template>
  <div v-if="!error">
    <slot></slot>
  </div>

  <div v-else>
    {{ error.message }}
  </div>
</template>
