<template lang="pug">
  .home
    navMenu
    slider
    .container-fluid
      .row
        b-col(align="right") follow us
        socialNetworks
</template>

<script>
import Logo from '~/components/Logo.vue'
import navMenu from '~/components/nav/navMenu.vue'
import slider from '~/components/slider/slider.vue'
import socialNetworks from '~/components/socialNetworks/socialNetworks.vue'

export default {
  components: {
    Logo,
    navMenu,
    slider,
    socialNetworks
  }
}
</script>

<style>
.slider {
  height: 60vh;
  display: flex;
  align-items: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
