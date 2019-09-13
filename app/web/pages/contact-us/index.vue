<i18n src="./contact-us.json"></i18n>
<template lang="pug">
  .contacUs
    .container
      .row
        .col.text-center
          h1 {{ $t('contact-us') }}
          br
      .row
        .col-md-6
          address(itemscope itemtype="http://schema.org/LocalBusiness")
            h1(itemprop="name") {{ $t('data') }}
            br
            h4.mx-1 {{ $t('data-city') }}
            br
            a(href="tel:+5812340581")
              phone-icon
              strong.mx-3 {{ $t('data-telephone') }}
            span.text-primary
            br
            br
            a.text-dark(href="mailto:quebec@chacunsonsite.ca")
               mail-icon
               strong.mx-3 {{ $t('data-email-ca') }}
            br
            br
            a.text-dark(href="mailto:quebec@chacunsonsite.ca")
               mail-icon
               strong.mx-3 {{ $t('data-email-ec') }}
            br
            br
        .col-md-6
          contactForm
</template>
<script>
import contactForm from '@/components/contactForm/contactForm.vue'
import location from '@/components/location/location.vue'
import { PhoneIcon, MailIcon, MapPinIcon } from 'vue-feather-icons'

export default {
  name: 'ContactUs',
  components: {
    contactForm,
    location,
    PhoneIcon,
    MailIcon,
    MapPinIcon
  },
  head() {
    return {
      title: 'Smarensol - About'
    }
  }
}
</script>
