<script setup lang="ts">
// (nothing changed from 2a-begin.vue)
const error = ref();

function doThing() {
  try {
    throw new Error("Random error");
  } catch (err) {
    error.value = err;
  }
}
</script>
<template>
  <div v-if="!error">
    <button @click="doThing">Do Thing</button>
  </div>
  <div v-else>
    {{ error.message }}
  </div>
</template>
