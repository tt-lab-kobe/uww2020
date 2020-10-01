<template>
  <div class="text-gray-800 bg-gray-300 font-body">
    <Navbar :links="links" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      links: [
        { title: 'Home', path: '/' },
        { title: 'Access', path: '' },
        { title: 'Program', path: '' },
      ],
    }
  },
})
</script>

<style></style>
