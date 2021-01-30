<template>
  <div class="max-w-full max-h-full bg-teal-100">
    <div class="container">
      <div>
        <h1 class="title">no docs found.</h1>
        <NuxtLink class="error-link" to="/">Go back home</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
>

<style>
.body {
  @apply bg-teal-100;
}

.container {
  @apply min-h-screen;
  @apply justify-center;
  @apply items-center;
  @apply text-center;
  @apply mx-auto;
  @apply flex;
}
</style>
