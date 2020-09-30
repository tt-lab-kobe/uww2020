import Vue from 'vue'

// Importer
import Navbar from '~/components/layouts/Navbar.vue'
import Hero from '~/components/layouts/Hero.vuw'

import Box from '~/components/ui/Box.vue'
import HLg from '~/components/ui/HLg.vue'
import Content from '~/components/ui/Content.vue'
import TextBlock from '~/components/ui/TextBlock.vue'

// Register
Vue.component('Navbar', Navbar)

Vue.component('Box', Box)
Vue.component('Content', Content)
Vue.component('HLg', HLg)
Vue.component('TextBlock ', TextBlock)
