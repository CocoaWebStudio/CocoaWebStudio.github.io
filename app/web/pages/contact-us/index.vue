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
            a(href="tel:+59342071092")
              phone-icon
              strong.mx-3 {{ $t('data-telephone1') }} &nbsp/
            a(href="tel:+593994138795")
              strong.mx-1 {{ $t('data-telephone2') }}
            br
            br
            map-pin-icon
            strong.mx-3 {{ $t('data-addres') }}
            br
            strong.mx-5 {{ $t('data-city') }}
            br
            strong.mx-5 {{ $t('data-zip')}}
            br
            br
            a.text-dark(href="mailto:ventas@smarensol.com")
               mail-icon
               strong.mx-3 {{ $t('data-email') }}
        .col-md-6
          contactForm
    location.d-none.d-md-block
    location.d-block.d-md-none
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
