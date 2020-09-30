<template>
  <table class="w-full">
    <tr v-for="(item, index) in items" :key="index">
      <th
        class="font-normal text-center text-gray-100 bg-gradient-to-r from-red-600 to-orange-500 p-2"
      >
        {{ item.header }}
      </th>
      <td
        :class="[index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-400']"
        class="text-center p-2 bg-gray-200"
      >
        {{ item.description }}
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ColorList',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

<style scoped></style>
