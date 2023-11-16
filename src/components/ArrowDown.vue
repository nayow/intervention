<template lang="pug">
.absolute.bottom-2.w-full.flex.justify-center
  img(v-if="light" class="w-1/6" src="@/assets/images/arrow_down_light.svg")
  img(v-else class="w-1/6" src="@/assets/images/arrow_down.svg")
</template>

<script>
export default {
  name: 'ArrowDown',
  props: {
    light: {
      type: Boolean,
      default: false
    }
  }
}
</script>
