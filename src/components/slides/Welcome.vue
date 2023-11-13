<template lang="pug">
.flex.flex-col.h-full.w-full
  .relative.flex-1
    img.absolute(src="@/assets/images/2/theme.svg")
    img.absolute(class="top-80" src="@/assets/images/indivs/butterfly_sun.svg")
    .absolute.text-5xl.text-white.font-bold Intervention
  .p-4.self-center(class="h-1/3")
    .title Let us tell you a story
    .subtitle Dearest friends from near and far
    .text-sm Following the success of last year, we are thrilled to announce the return of our intimate, private, non-profit festival nestled amidst the breathtaking Swiss mountains. Join us for another enchanting four-day event at the Lindenhof as we embark on this journey together.
  
  arrow-down
</template>

<script>
export default {
  name: 'Welcome',
}
</script>

<style scoped>
</style>
