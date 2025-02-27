<script setup lang="ts">
const error = ref();
onErrorCaptured((err) => {
  console.log("error captured from slot", err);
  error.value = err;
  return false;
});

function clearError() {
  error.value = null;
}

const slotProps = computed(() => {
  if (!error.value) return {};
  return { error, clearError };
});

const slotName = computed(() => (error.value ? "error" : "default"));
</script>
<template>
  <slot :name="slotName" v-bind="slotProps"></slot>
</template>
