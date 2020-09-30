<template>
  <div>
    <Hero :img-src="'/uww2020-topimage.jpg'">
      <div>
        <p class="font-mono">
          <span class="text-5xl lg:text-6xl">U</span
          ><span class="text-4xl lg:text-5xl">biquitous </span>
          <span class="text-5xl lg:text-6xl">W</span
          ><span class="text-4xl lg:text-5xl">earable </span>
          <span class="text-5xl lg:text-6xl">W</span
          ><span class="text-4xl lg:text-5xl">orkshop </span>
          <span class="text-5xl lg:text-6xl">2020</span>
        </p>
      </div>
      <div class="md:my-3 md:py-3">
        <p class="md:text-lg lg:text-xl">2020年12月12日（土） – 12日(日)</p>
        <p class="md:text-lg lg:text-xl">
          オンラインとオフラインのハイブリッド開催を予定
        </p>
        <p class="md:text-lg lg:text-xl">
          ※本ページに最新情報を掲載しますので適宜ご確認ください
        </p>
      </div>
    </Hero>
    <div class="container text-center mx-auto">
      <div>Clean up codes!</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import hero from '~/components/layouts/Hero.vue'

export default Vue.extend({
  components: {
    hero,
  },
})
</script>

<style></style>
