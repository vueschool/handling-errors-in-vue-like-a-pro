<script setup lang="ts">
function throwError() {
  throw new Error("Error from grandchild");
}
</script>
<template>
  <button class="btn btn-primary" @click="throwError">
    Throw Error from GrandChild
  </button>
</template>
