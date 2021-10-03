<template>
  <div class="flex flex-col min-h-screen bg-teal-100">
    <div class="flex flex-col justify-center items-center py-8 flex-grow">
      <Logo
        class="flex flex-col items-center w-2/3 md:w-1/2 lg:w-1/4 xl:max-w-md"
        :avatar_url="avatar_url"
      />
      <h1 class="text-3xl sm:text-6xl mt-4 sm:mt-6 title">
        niggelgame
      </h1>
      <div class="links my-6 sm:my-10">
        <NuxtLink class="button--green m-1" to="/docs">
          Documentation
        </NuxtLink>
        <a
          href="https://github.com/niggelgame"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey m-1"
        >
          GitHub
        </a>
      </div>
      <div class="my-6 sm:my-8">
        <a href="https://discord.gg/TjgC4wD" target="_blank" class="mr-3 sm:mr-6 last:mr-0 relative hover:text-green-base" rel="noreferrer" aria-label="Discord">
          <fa :icon="['fab', 'discord']" class="text-2xl sm:text-4xl md:text-6xl" />
        </a>
        <a href="https://twitch.tv/niggelgame" target="_blank" class="mr-3 sm:mr-6 last:mr-0 relative hover:text-green-base" rel="noreferrer" aria-label="Twitch">
          <fa :icon="['fab', 'twitch']" class="text-2xl sm:text-4xl md:text-6xl" />
        </a>
        <a href="https://twitter.com/niggelgame" target="_blank" class="mr-3 sm:mr-6 last:mr-0 relative hover:text-green-base" rel="noreferrer" aria-label="Twitter">
          <fa :icon="['fab', 'twitter']" class="text-2xl sm:text-4xl md:text-6xl" />
        </a>
        <a href="https://www.linkedin.com/in/nicolas-edelmann/" target="_blank" class="mr-3 sm:mr-6 last:mr-0 relative hover:text-green-base" rel="noreferrer" aria-label="LinkedIn">
          <fa :icon="['fab', 'linkedin']" class="text-2xl sm:text-4xl md:text-6xl" />
        </a>
      </div>
    </div>
    <div class="flex justify-end p-2">
      <p class="text-xs text-darkgrey opacity-50">© niggelgame 2021</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      avatar_url: ''
    }
  },
  async fetch () {
    this.avatar_url = await fetch(
      'https://api.github.com/users/niggelgame'
    ).then(res => res.json().then(res => res.avatar_url))
  }
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
  text-align: center;
}
</style>
