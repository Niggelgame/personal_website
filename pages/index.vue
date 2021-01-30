<template>
  <div class="max-w-full max-h-full bg-teal-100">
    <div class="container">
      <div>
        <Logo :avatar_url="avatar_url" />
        <h1 class="title">niggelgame</h1>
        <div class="links">
          <NuxtLink class="button--green" to="/docs">Documentation</NuxtLink>
          <a
            href="https://github.com/niggelgame"
            target="_blank"
            rel="noopener noreferrer"
            class="button--grey"
          >
            GitHub
          </a>
        </div>
        <div class="my-6 sm:my-10"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      avatar_url: '',
    }
  },
  async fetch() {
    this.avatar_url = await fetch(
      'https://api.github.com/users/niggelgame'
    ).then((res) => res.json().then((res) => res.avatar_url))
  },
})
</script>

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

/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #526488;
} */

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
