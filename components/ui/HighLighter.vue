<template>
  <div class="p-2 bg-gray-400">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'HighLighter',
})
</script>

<style scoped></style>
