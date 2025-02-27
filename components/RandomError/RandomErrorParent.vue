<script setup lang="ts">
function throwError() {
  throw new Error("Error from parent");
}
</script>
<template>
  <button class="btn btn-primary" @click="throwError">
    Throw Error from Parent
  </button>
  <RandomErrorChild />
</template>
