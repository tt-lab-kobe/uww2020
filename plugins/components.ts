import Vue from 'vue'

// Importer
import Navbar from '~/components/layouts/Navbar.vue'
import Footer from '~/components/layouts/Footer.vue'
import Hero from '~/components/layouts/Hero.vue'

import Box from '~/components/ui/Box.vue'
import HLg from '~/components/ui/HLg.vue'
import HMd from '~/components/ui/HMd.vue'
import Content from '~/components/ui/Content.vue'
import TextBlock from '~/components/ui/TextBlock.vue'
import Budge from '~/components/ui/Budge.vue'
import ColorList from '~/components/ui/ColorList.vue'
import HighLighter from '~/components/ui/HighLighter.vue'

// Register
Vue.component('Navbar', Navbar)
Vue.component('Footer', Footer)
Vue.component('Hero', Hero)

Vue.component('Box', Box)
Vue.component('Content', Content)
Vue.component('HLg', HLg)
Vue.component('HMd', HMd)
Vue.component('TextBlock', TextBlock)
Vue.component('Budge', Budge)
Vue.component('ColorList', ColorList)
Vue.component('HighLighter', HighLighter)
