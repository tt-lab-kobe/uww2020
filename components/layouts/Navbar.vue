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
        class="w-full lg:flex lg:items-center lg:w-auto"
      >
        <div v-for="(link, index) in links" :key="index" class="head-font">
          <a
            v-if="link.path === ''"
            disabled
            class="block mt-4 p-2 lg:inline-block lg:mt-0 text-gray-500 mr-4"
          >
            {{ link.title }}
          </a>
          <nuxt-link
            v-else
            :to="link.path"
            class="block mt-4 p-2 lg:inline-block lg:mt-0 text-gray-700 hover:bg-gray-300 mr-4"
          >
            {{ link.title }}
          </nuxt-link>
        </div>
      </div>
      <div class="hidden lg:flex">
        <svg
          width="20%"
          height="20%"
          viewBox="0 0 449 232"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xml:space="preserve"
          xmlns:serif="http://www.serif.com/"
          style="max-height: 10em"
        >
          <rect
            x="1.5"
            y="75.84"
            width="435.06"
            height="64.04"
            style="fill: none; stroke: rgb(101, 101, 101); stroke-width: 3px"
          />
          <path
            d="M123.62,170.59C123.62,198.07 100,231.99 71.43,231.99C42.86,231.99 20.09,198.07 20.09,170.59L20.09,0L123.62,0L123.62,170.59Z"
            style="fill: rgb(101, 101, 101)"
          />
          <path
            d="M170.86,0L309.37,0L170.86,231.99L170.86,0Z"
            style="fill: rgb(101, 101, 101)"
          />
          <path
            d="M310,0L448.51,0L310,231.99L310,0Z"
            style="fill: rgb(101, 101, 101)"
          />
        </svg>
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
      default: () => [{ title: 'Top', path: '' }],
    },
  },
  data: () => ({
    isOpen: false,
  }),
})
</script>

<style scoped></style>
