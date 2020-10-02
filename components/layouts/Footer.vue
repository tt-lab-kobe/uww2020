<template>
  <div>
    <div class="block bg-gray-400 my-2 p-4">
      <p class="text-center">{{ contact }}</p>
    </div>
    <div class="mx-auto">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Footer',
  props: {
    contact: {
      type: String,
      default: '',
    },
  },
})
</script>

<style scoped></style>
