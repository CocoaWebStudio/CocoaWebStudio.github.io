<template lang="pug">
  .row
    .col.py-5
      a.text-success(href="mailto:quebec@chacunsonsite.ca")
        mail-icon
    .col.py-5
      a.text-success(href="tel:+59342071092")
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
