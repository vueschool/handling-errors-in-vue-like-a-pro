<script lang="ts" setup>
class AlertableError extends Error {
  public uxMessage: string;

  constructor(options: { uxMessage: string; devMessage: string | undefined }) {
    super(options.devMessage ?? "Unknown error");
    this.name = "AppError";
    this.uxMessage = options.uxMessage;
  }
}

function doRiskyThing() {
  try {
    test.trim();
  } catch (err) {
    throw new AlertableError({
      uxMessage: "The Risky Thing Failed. Please contact support.",
      devMessage: err?.toString(),
    });
  }
}
</script>
<template>
  <h1 class="text-2xl font-bold mb-5">
    Lesson 9 - Show Technial Details in Dev Begin
  </h1>
  <button class="btn btn-primary" @click="doRiskyThing">Click Me</button>
</template>
