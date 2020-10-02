<template>
  <div class="text-gray-800 bg-gray-300 font-body">
    <Navbar :links="navLinks" />
    <Nuxt />
    <Footer :contact="'uww2020_org [at] ubi.eedept.kobe-u.ac.jp'">
      <div>
        <HMd>Link</HMd>
        <div class="grid grid-cols-2 grid-rows-7 sm:grid-cols-4 sm:grid-rows-4">
          <div
            v-for="(link, i) in pastLinks"
            :key="i"
            class="text-center text-gray-600"
          >
            <a :href="link.url">{{ link.title }}</a>
          </div>
        </div>
      </div>
      <div class="text-center bg-gray-400 mt-3 py-3">
        (c) Tsukamoto Terada Lab.
      </div>
    </Footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      navLinks: [
        { title: 'Home', path: '/' },
        { title: 'Access', path: '' },
        { title: 'Program', path: '' },
      ],
      pastLinks: [
        {
          title: 'UWW2007',
          url: 'http://cse.eedept.kobe-u.ac.jp/old_webdata/event/workshop2007/',
        },
        {
          title: 'UWW2008',
          url: 'http://cse.eedept.kobe-u.ac.jp/old_webdata/event/workshop2008/',
        },
        {
          title: 'UWW2009',
          url: 'http://cse.eedept.kobe-u.ac.jp/uww2009',
        },
        {
          title: 'UWW2010',
          url: 'http://cse.eedept.kobe-u.ac.jp/uww2010/',
        },
        {
          title: 'UWW2011',
          url: 'http://cse.eedept.kobe-u.ac.jp/uww2011/',
        },
        {
          title: 'UWW2012',
          url: 'http://cse.eedept.kobe-u.ac.jp/uww2012/',
        },
        {
          title: 'UWW2013',
          url: 'http://cse.eedept.kobe-u.ac.jp/uww2013/',
        },
        {
          title: 'UWW2014',
          url: 'http://cse.eedept.kobe-u.ac.jp/uww2014/',
        },
        {
          title: 'UWW2015',
          url: 'http://cse.eedept.kobe-u.ac.jp/uww2015/',
        },
        {
          title: 'UWW2016',
          url: 'http://cse.eedept.kobe-u.ac.jp/uww2016/',
        },
        {
          title: 'UWW2017',
          url: 'http://cse.eedept.kobe-u.ac.jp/uww2017/',
        },
        {
          title: 'UWW2018',
          url: 'http://cse.eedept.kobe-u.ac.jp/uww2018/',
        },
        {
          title: 'UWW2019',
          url: 'http://cse.eedept.kobe-u.ac.jp/uww2019/',
        },
      ],
    }
  },
})
</script>

<style></style>
