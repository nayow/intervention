<template lang="pug">
.flex.flex-col.h-full.w-full
  img.absolute(style="min-width: 150%" src="@/assets/images/8/theme.svg")
  
  .relative.p-6.flex.flex-col.flex-1
    .title As long as you follow our principles
    .m-auto.flex.flex-col.gap-3.text-sm.text-justify.p-4(class="w-2/3 rounded rounded-[10px]" style="background: rgb(230, 230, 230, 0.75)")
      div Heavily inspired by the principles of Burning Man, we have created our own three Principles: 
      div
        span.font-semibold Sharing and caring :&nbsp;
        span at our festival, we embrace the spirit of respect and love, fostering a close-knit community where kindness, thoughtfulness and generosity flow freely among all participants.
      div
        span.font-semibold Creating and Cooperating :&nbsp;
        span in a symphony of collaborative synergies, we unite our creativity and skills, where the fusion of each individual brilliance contributes to the greater good.
      div
        span.font-semibold Exploring and restoring :&nbsp;
        span shedding the constraints of our everyday life, we encourage free expression and inner exploration, while nurturing a culture of mindfulness to ensure the well-being of both mind and body throughout our journey together.

  arrow-down
</template>

<script>
export default {
  name: 'Principles',
}
</script>

<style scoped>
</style>
