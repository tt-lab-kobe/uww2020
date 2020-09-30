<template>
  <div class="py-2 w-full px-2">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Content',
})
</script>

<style scoped></style>
