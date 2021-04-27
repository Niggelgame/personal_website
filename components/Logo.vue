<template>
  <img class="rounded-full NuxtLogo max-w-sm" :src="avatar_url" alt="Avatar" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    avatar_url: {
      type: String,
      required: true
    }
  }
})
</script>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
