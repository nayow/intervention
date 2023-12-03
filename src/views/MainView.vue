<template lang='pug'>
#fullpage
  .section
    Welcome
  .section
    Home
  .section
    About
  .section.bg-dark
    Lindenhof
  .section
    Activities1
  .section
    Activities2
  .section
    Activities3
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
import Activities1 from '@/components/slides/Activities1.vue'
import Activities2 from '@/components/slides/Activities2.vue'
import Activities3 from '@/components/slides/Activities3.vue'
import Principles from '@/components/slides/Principles.vue'
import Pricing from '@/components/slides/Pricing.vue'

export default {
  name: 'MainView',
  components: {
    Home,
    Welcome,
    About,
    Lindenhof,
    Activities1,
    Activities2,
    Activities3,
    Principles,
    Pricing
  },
  mounted() {
    new fullpage('#fullpage', {
      licenseKey: 'licenseKey',
      fixedElements: '#nav',
      menu: '#nav',
      anchors: [
        'welcome',
        'home',
        'about',
        'lindenhof',
        'activities1',
        'activities2',
        'activities3',
        'principles',
        'pricing'
      ],
      onLeave: (origin, destination, direction, trigger) => {
        if (trigger === 'menu') return
        this.$emit('onSlideLeave', direction)
      },
      afterLoad: () => {
        document.querySelector('.fp-watermark').hidden = true
      }
    })
  }
}
</script>

<style scoped>
</style>
