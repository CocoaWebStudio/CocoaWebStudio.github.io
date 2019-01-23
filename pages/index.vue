<template lang="pug">
  .home
    navMenu
    slider
</template>

<script>
import Logo from '~/components/Logo.vue'
import navMenu from '~/components/nav/navMenu.vue'
import slider from '~/components/slider/slider.vue'

export default {
  components: {
    Logo,
    navMenu,
    slider
  }
}
</script>
