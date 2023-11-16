<template lang="pug">
.flex.flex-col.h-full.w-full
  .relative.flex-1
    img.absolute(src="@/assets/images/1/theme.svg")
    img.absolute(class="top-80" src="@/assets/images/indivs/butterfly_no_sun.svg")
    .absolute.text-5xl.text-white.font-bold Intervention
  .self-center(class="h-1/3")
    .title Welcome friend

  arrow-down
</template>

<script>
export default {
  name: 'Welcome',
}
</script>

<style scoped>
</style>
