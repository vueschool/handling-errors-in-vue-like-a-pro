<template>
  <button @click="throwError">Throw Error from Parent</button>
  <RandomErrorChild />
</template>

<script setup lang="ts">
function throwError() {
  throw new Error("Error from parent");
}
</script>
