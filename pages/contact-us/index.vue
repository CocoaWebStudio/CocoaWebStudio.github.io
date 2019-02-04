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
            a(href="tel:+59342071092")
              phone-icon
              strong {{ $t('data-telephone') }}
            br
            map-pin-icon
            strong {{ $t('data-addres') }}
            br
            strong.mx-4 {{ $t('data-city') }}
            br
            strong.mx-4 {{ $t('data-zip')}}
            br
            a.text-dark(href="mailto:ventas@smarensol.com")
               mail-icon
               strong {{ $t('data-email') }}
        .col-md-6
          contactForm
    location.d-none.d-md-block
    location.d-block.d-md-none
</template>
<script>
import contactForm from '~/components/contactForm/contactForm.vue'
import location from '~/components/location/location.vue'
import { PhoneIcon, MailIcon, MapPinIcon } from 'vue-feather-icons'

export default {
  name: 'contact-us',
  components: {
    contactForm,
    location,
    PhoneIcon,
    MailIcon,
    MapPinIcon
  }
}
</script>
