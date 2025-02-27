<template>
  <button @click="throwError">Throw Error from GrandChild</button>
</template>

<script setup lang="ts">
function throwError() {
  throw new Error("Error from grandchild");
}
</script>
