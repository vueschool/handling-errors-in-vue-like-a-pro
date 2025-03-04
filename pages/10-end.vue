<script lang="ts" setup>
class AppError extends Error {
  public uxMessage: string;

  constructor(options: { uxMessage: string; devMessage: string }) {
    super(options.devMessage);
    this.name = "AppError";
    this.uxMessage = options.uxMessage;
  }
}

function doRiskyThing() {
  try {
    test.trim();
  } catch (err) {
    if (err instanceof Error) {
      throw new AppError({
        uxMessage: "The Risky Thing Failed. Please contact support.",
        devMessage: err.message,
      });
    } else {
      throw new AppError({
        uxMessage: "The Risky Thing Failed. Please contact support.",
        devMessage: "Unknown error",
      });
    }
  }
}
</script>
<template>
  <h1 class="text-2xl font-bold mb-5">
    Lesson 9 - Show Technial Details in Dev Begin
  </h1>
  <button class="btn btn-primary" @click="doRiskyThing">Click Me</button>
</template>
