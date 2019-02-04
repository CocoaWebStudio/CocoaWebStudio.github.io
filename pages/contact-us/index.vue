<i18n src="./contact-us.json"></i18n>
<template lang="pug">
  .contacUs
    location
    .container
      .row
        .col
          br
      p {{ $t('data-telephone') }}
      p {{ $t('data-addres') }}
      p {{ $t('data-email') }}
      p {{ $t('data-city') }}
    .container
     h1.title {{ $t('contact-us') }}
     contactForm
</template>
<script>
import contactForm from '~/components/contactForm/contactForm.vue'
import location from '~/components/location/location.vue'

export default {
  name: 'contact-us',
  components: {
    contactForm,
    location
  }
}
</script>
<style src="./contact-us.scss" lang="scss" scoped />
