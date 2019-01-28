<template lang="pug">
  .contacUs
    navMenu
    .container
      .row
        .col
          h1.title Institutional Data Smarensol
          br
      p Teléfonos: +593 4 2071092 / +593 9 994138795
      p Dirección: Torres del Mall del Sol – Torre B Piso 4
      p Email: ventas@smarensol.com
      p Guayaquil – Ecuador
    location
    .container
     h1.title Contact Us Smarensol
     contactForm
</template>
<script>
import contactForm from '~/components/contactForm/contactForm.vue'
import navMenu from '~/components/nav/navMenu.vue'
import location from '~/components/location/location.vue'

export default {
  name: 'contact-us',
  components: {
    navMenu,
    contactForm,
    location
  }
}
</script>
<style src="./contact-us.scss" lang="scss" scoped />
