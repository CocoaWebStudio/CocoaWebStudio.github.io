<template lang="pug">
  .home
    navMenu
    .container.jumbotron
      .row
        .col.text-center
          h1.subtitle WE ARE SPECIALISTS IN PROVIDING EQUIPMENT AND ELECTRICAL SUPPLIES
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

<style scoped>
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
  font-size: 30px;
  color: #526488;
  word-spacing: 1px;
  padding-bottom: 15px;
}
</style>
