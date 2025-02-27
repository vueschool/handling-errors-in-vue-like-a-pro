<template>
  <h1 class="text-2xl font-bold mb-5">
    Lesson 5 - Error Boundary Component Begin
  </h1>
  <ErrorBoundary>
    <RandomErrorParent />
    <template #error="{ error, clearError }">
      <p>Error Template: {{ error }}</p>
      <button class="btn btn-primary" @click="clearError">Clear Error</button>
    </template>
  </ErrorBoundary>
</template>
