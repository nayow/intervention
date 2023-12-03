<template lang="pug">
.flex.flex-col.h-full.w-full
  img.absolute.min-h-screen(style="object-fit: cover" src="@/assets/images/9/theme.svg")
  
  .relative.p-6.flex.flex-col.flex-1
    .title And contribute.
    .my-auto.flex.flex-col.gap-3.text-sm.text-justify.p-4(class="w-2/3 rounded rounded-[10px]" style="background: rgb(230, 230, 230, 0.9)")
      div To bring the festival to life, we rely on both monetary contributions and collaborative efforts from all participants. It's important to understand that the prices solely cover our expenses. Any surplus funds remaining at the conclusion of the festival will be directed towards supporting our friend Serkan's charity, Stelp (https://stelp.eu/). Your support and involvement make this event possible.
    .ml-auto.my-auto.flex.flex-col.gap-3.text-sm.text-justify.p-4(class="w-2/3 rounded rounded-[10px]" style="background: rgb(230, 230, 230, 0.9)")
      div 
        div To learn more about the pricing click here: link 
        div To learn more about your role click here: link
</template>

<script>
export default {
  name: 'Pricing',
}
</script>

<style scoped>
</style>