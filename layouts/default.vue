<script setup>
const links = [
  {
    to: "/2a-begin",
    label: "2a - Vue Component Errors (Try/Catch) Begin",
  },
  {
    to: "/2a-end",
    label: "2a - Vue Component Errors (Try/Catch) End",
  },
  {
    to: "/2b-begin",
    label: "2b - Vue Component Errors (onErrorCaptured) Begin",
  },
  {
    to: "/2b-end",
    label: "2b - Vue Component Errors (onErrorCaptured) End",
  },
  {
    to: "/3-begin",
    label: "3 - onErrorCaptured Begin",
  },
  {
    to: "/3-end",
    label: "3 - onErrorCaptured End",
  },
  {
    to: "/4-begin",
    label: "4 - onErrorCaptured with Slots Begin",
  },
  {
    to: "/4-end",
    label: "4 - onErrorCaptured with Slots End",
  },
  {
    to: "/5-begin",
    label: "5 - Error Boundary Component Begin",
  },
  {
    to: "/5-end",
    label: "5 - Error Boundary Component End",
  },
  {
    to: "/6-begin",
    label: "6 - Errors in Composables Begin",
  },
  {
    to: "/6-end",
    label: "6 - Errors in Composables End",
  },
  {
    to: "/7-begin",
    label: "7 - App Wide Errors Begin",
  },
  {
    to: "/7-end",
    label: "7 - App Wide Errors End",
  },
  {
    to: "/8-begin",
    label: "8 - Error Notifications Begin",
  },
  {
    to: "/8-end",
    label: "8 - Error Notifications End",
  },
  {
    to: "/9-begin",
    label: "9 - Technical Message in Dev Begin",
  },
  {
    to: "/9-end",
    label: "9 - Technical Message in Dev End",
  },
  {
    to: "/10-begin",
    label: "10 - Custom AlertableError Begin",
  },
  {
    to: "/10-end",
    label: "10 - Custom AlertableError End",
  },
];
</script>
<template>
  <div class="navbar bg-base-100 shadow-sm z-10 relative">
    <div class="flex-1">
      <NuxtLink class="btn btn-ghost text-x" to="/">Vue Errors Course</NuxtLink>
    </div>
    <div class="flex-none">
      <label for="my-drawer" class="btn btn-square btn-ghost drawer-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block h-5 w-5 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          ></path>
        </svg>
      </label>
    </div>
  </div>
  <div class="drawer drawer-end">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <div class="container mx-auto py-10 px-4">
        <slot></slot>
      </div>
      <!-- Page content here -->
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4 mt-16">
        <!-- Sidebar content here -->
        <li v-for="link in links" :key="link.to">
          <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
