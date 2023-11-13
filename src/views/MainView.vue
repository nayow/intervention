<template lang='pug'>
#fullpage
  .section
    Home
  .section
    Welcome
  .section
    About
  .section.bg-dark
    Lindenhof
  .section
    Activities
  .section
    Principles
  .section
    Pricing
</template>

<script>
import fullpage from 'fullpage.js'
import Home from '@/components/slides/Home.vue'
import Welcome from '@/components/slides/Welcome.vue'
import About from '@/components/slides/About.vue'
import Lindenhof from '@/components/slides/Lindenhof.vue'
import Activities from '@/components/slides/Activities.vue'
import Principles from '@/components/slides/Principles.vue'
import Pricing from '@/components/slides/Pricing.vue'

export default {
  name: 'MainView',
  components: {
    Home,
    Welcome,
    About,
    Lindenhof,
    Activities,
    Principles,
    Pricing
  },
  mounted() {
    new fullpage('#fullpage', {
      licenseKey: 'licenseKey',
      anchors: [
        'home',
        'about',
        'lindenhof',
        'activities',
        'principles',
        'pricing'
      ],
      menu: '#nav',
    })
  }
}
</script>

<style scoped>
</style>
