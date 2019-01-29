<i18n src="./contact-us.json"></i18n>
<template lang="pug">
  .contacUs
    navMenu
    .container
      .row
        .col
          h1.title {{ $t('data') }}
          br
      p {{ $t('data-telephone') }}
      p {{ $t('data-addres') }}
      p {{ $t('data-email') }}
      p {{ $t('data-city') }}
    location
    .container
     h1.title {{ $t('contact-us') }}
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
