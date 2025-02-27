<script setup lang="ts">
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
  <h1 class="text-2xl font-bold mb-5">
    Lesson 2 (part a) - Catching Errors at the Vue Component Level (Try/Catch)
    Begin
  </h1>
  <div v-if="!error">
    <button class="btn btn-primary" @click="doThing">Do Thing</button>
  </div>
  <div v-else>
    {{ error.message }}
  </div>
</template>
