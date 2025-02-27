<template>
  <button class="btn btn-primary" @click="throwError">
    Throw Error from Child
  </button>
  <RandomErrorGrandChild />
</template>

<script setup lang="ts">
function throwError() {
  throw new Error("Error from child");
}
</script>
