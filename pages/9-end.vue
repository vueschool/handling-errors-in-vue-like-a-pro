<script lang="ts" setup>
const alert = useAlert();

function doRiskyThing() {
  try {
    test.trim();
  } catch (err) {
    alert.error("The Risky Thing Failed. Please contact support.", {
      title: import.meta.dev && err instanceof Error ? err.message : "",
    });
  }
}
</script>
<template>
  <h1 class="text-2xl font-bold mb-5">
    Lesson 9 - Technical Message in Dev End
  </h1>
  <button class="btn btn-primary" @click="doRiskyThing">Click Me</button>
</template>
