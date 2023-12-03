<template lang="pug">
#nav.px-3.py-2.fixed.w-full.top-0.flex.justify-between.gap-2.text-xxs.bg-white
  a(href='#welcome' data-menuanchor='welcome') Home
  a(href='#about' data-menuanchor='about') About
  a(href='#lindenhof' data-menuanchor='lindenhof') Lindenhof
  a(href='#activities1' data-menuanchor='activities1') Activities
  a(href='#principles' data-menuanchor='principles') Principles
  a(href='#pricing' data-menuanchor='pricing') Pricing
</template>

<script>
export default {
  name: "TheHeader"
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
#nav a.active {
  font-weight: bold;
}
#nav a.div-exact-active {
  color: inherit;
}
</style>
