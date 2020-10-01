<template>
  <div>
    <button
      v-if="disabled"
      class="text-gray-100 bg-gradient-to-r from-red-600 to-orange-500 px-6 py-2 rounded-md opacity-50"
      disabled
    >
      <slot></slot>
    </button>
    <button
      v-else
      class="text-gray-100 bg-gradient-to-r from-red-600 to-orange-500 px-6 py-2 rounded-md"
      disabled
    >
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'GradientButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style scoped></style>
