<template>
  <p class="p-2 text-justify">
    <slot></slot>
  </p>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TextBlock',
})
</script>

<style scoped></style>
