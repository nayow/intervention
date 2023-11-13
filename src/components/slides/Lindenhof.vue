<template lang="pug">
.flex.flex-col.h-full.w-full
  .relative.flex-1
    img.absolute(src="@/assets/images/4/theme.svg")
  .relative.flex.flex-col.p-4
    div
      .title.text-white A place
      .text-sm.text-white The time-honored Hotel Lindenhof in Churwalden has been around since 1906 and is exclusively available to us for the whole festival. On the inviting main floor there are several, wood-clad common rooms, as well as a dining room. The accommodation rooms are located on the three floors above. The whole thing is complemented with our own decoration, additional lights inside & outside and a specially made for this festival light show construction.
  
    img.-mt-6(src="@/assets/images/4/animals.svg")

  arrow-down
</template>
  
<script>
export default {
  name: 'Lindenhof',
}
</script>

<style scoped>
</style>
