<template lang="pug">
.flex.flex-col.h-full.w-full
  img.absolute.h-full(style="object-fit: cover" src="@/assets/images/3/theme.svg")
  .relative.px-6.flex.flex-col.justify-between.h-full(class="py-[10%]")
    div(class="w-2/5")
      .title About
      .text-sm.text-justify What began as Stefan's 30th birthday celebration this year holds the promise of evolving into something far greater. Let’s continue with this birthday tradition. Immerse yourself in a unique gathering of around 150 kindred spirits, fostering warmth and connection.
    .text-sm.text-justify.ml-auto(class="w-2/5") Immerse yourself in our hotel's diverse entertainment and activities. Relish daily meals, enjoy complimentary drinks, and dance the night away on our state-of-the-art floor, illuminated by captivating light displays.
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
</style>