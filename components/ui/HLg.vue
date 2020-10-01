<template>
  <h1
    class="head-font text-3xl bg-gradient-to-r from-pink-600 via-red-500 via-orange-500 to-orange-300"
    style="-webkit-background-clip: text; -webkit-text-fill-color: transparent"
  >
    <slot></slot>
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'HLg',
})
</script>

<style scoped></style>
