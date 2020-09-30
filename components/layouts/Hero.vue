<template>
  <div class="relative bg-gray-300 overflow-hidden">
    <div>
      <img
        class="jumbotron h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        :src="imgSrc"
        alt="topimage"
      />
    </div>
    <div>
      <svg
        width="0"
        height="0"
        viewBox="0 0 1281 382"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="none"
      >
        <g>
          <clipPath id="clipper" clipPathUnits="objectBoundingBox">
            <path
              width="100%"
              height="100%"
              d="M1280,266L456,381L0,266C0,266 0,0 0,0L1280,0L1280,266Z"
              style="fill: white; stroke: white; stroke-width: 1px"
              transform="scale(0.00078064012, 0.00261780104)"
            />
          </clipPath>
        </g>
      </svg>
    </div>
    <div class="absolute inset-0 text-center md:mx-6 md:px-6 md:my-6 md:py-6">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Hero',
  props: {
    imgSrc: {
      type: String,
      default: '',
    },
  },
})
</script>

<style scoped>
.jumbotron {
  -webkit-clip-path: url(#clipper);
  clip-path: url(#clipper);
}
</style>
