<template lang="pug">
  .about
    navMenu
    .container
     h1.title ABOUT US?
     br
     p.text Smarensol S.A., is a company of the electrical sector, which has more than 15 years of experience in the commercialization of equipment and supplies for the electrical system of Distribution, Transmission and Substations.
     br
     br
     tab
</template>
<script>
import navMenu from '~/components/nav/navMenu.vue'
import tab from '~/components/tab/tab.vue'

export default {
  name: 'About-us',
  components: {
    navMenu,
    tab
  }
}
</script>
<style src="./about-us.scss" lang="scss" />
