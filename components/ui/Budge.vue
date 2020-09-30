<template>
  <span
    class="text-white text-xs align-middle bg-gradient-to-r from-pink-600 via-red-500 to-orange-500 rounded p-1 mr-2"
  >
    <slot></slot>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Budge',
})
</script>

<style scoped></style>
