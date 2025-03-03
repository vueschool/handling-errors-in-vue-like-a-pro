<script lang="ts" setup>
function doRiskyThing() {
  try {
    // https://www.youtube.com/watch?v=SIYkhb2NjfE
    throw new Error("Some men just want to watch the world burn - Alfred");
  } catch (err) {
    alert("Somebody go get batman!");
  }
}
</script>
<template>
  <h1 class="text-2xl font-bold mb-5">Lesson 8 - Error Notifications Begin</h1>
  <button class="btn btn-primary" @click="doRiskyThing">Click Me</button>
</template>
