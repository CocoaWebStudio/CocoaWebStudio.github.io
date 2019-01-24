<template lang="pug">
  .contacUs
    navMenu
    .container
     h1.title Contact Us Smarensol
     contactForm
</template>
<script>
import contactForm from '~/components/contactForm/contactForm.vue'
import navMenu from '~/components/nav/navMenu.vue'

export default {
  name: 'Contact-us',
  components: {
    navMenu,
    contactForm
  }
}
</script>
<style src="./contact-us.scss" lang="scss">
</style>
