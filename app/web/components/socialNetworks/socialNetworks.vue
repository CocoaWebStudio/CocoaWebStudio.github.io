<template lang="pug">
  .row
    .col-md-6.text-center.py-4
      a.text-light(href="mailto:quebec@chacunsonsite.ca")
        mail-icon
    .col-md-6.text-center.py-4
      a.text-light(href="tel:+59342071092")
        phone-icon
        span  (+593) 4 207-1092
</template>
<script>
import { MailIcon, PhoneIcon } from 'vue-feather-icons'

export default {
  name: 'SocialNetworks',
  components: {
    MailIcon,
    PhoneIcon
  }
}
</script>
