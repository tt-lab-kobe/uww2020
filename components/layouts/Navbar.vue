<template>
  <div>
    <nav
      class="flex lg:flex-row-reverse items-center justify-between flex-wrap lg:px-24 px-6 py-6"
    >
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-gray-600 border-current hover:bg-gray-300"
          @click="isOpen = !isOpen"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        :class="isOpen ? 'block' : 'hidden'"
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto"
      >
        <div v-for="(link, index) in links" :key="index">
          <nuxt-link
            :to="link.path"
            class="block mt-4 p-2 lg:inline-block lg:mt-0 text-gray-700 hover:bg-gray-300 mr-4"
          >
            {{ link.name }}
          </nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Navbar',
  props: {
    links: {
      type: Array,
      required: true,
      default: () => [{ name: 'Top', path: '/' }],
    },
  },
  data: () => ({
    isOpen: false,
  }),
})
</script>

<style scoped></style>
