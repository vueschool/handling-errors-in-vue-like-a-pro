<template>
  <h1 class="text-2xl font-bold mb-5">
    Lesson 5 - Error Boundary Component Begin
  </h1>

  <!-- error boundary allows you to... -->
  <ErrorBoundary>
    <!-- display component that might throw an error -->
    <RandomErrorParent />

    <!-- and use the error slot to 
     conditionally display an error message 
     (if error is thrown)
     -->
    <template #error="{ error, clearError }">
      <p>Error Template: {{ error }}</p>

      <!-- Plus provide a way to clear the error -->
      <button class="btn btn-primary" @click="clearError">Clear Error</button>
    </template>
  </ErrorBoundary>
</template>
