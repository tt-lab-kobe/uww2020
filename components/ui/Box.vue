<template>
  <div class="p-2 flex flex-wrap">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Box',
})
</script>

<style scoped></style>
