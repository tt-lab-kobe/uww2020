<template>
  <div class="p-2 md:flex-1">
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
