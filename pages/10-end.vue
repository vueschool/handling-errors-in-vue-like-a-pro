<script lang="ts" setup>
function doRiskyThing() {
  try {
    test.trim();
  } catch (err) {
    throw new AlertableError(err, {
      uxMessage: "The Risky Thing Failed. Please contact support.",
    });
  }
}
</script>
<template>
  <h1 class="text-2xl font-bold mb-5">Lesson 10 - Custom AlertableError End</h1>
  <button class="btn btn-primary" @click="doRiskyThing">Click Me</button>
</template>
