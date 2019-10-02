<template lang="pug">
  .row
    .col.py-5
      a.text-success(href="mailto:quebec@chacunsonsite.ca")
        mail-icon
        span &nbsp Canadá
      .col.py-1
        span quebec@chacunsonsite.ca
    .col.py-5
      a.text-success(href="mailto:ecuador@chacunsonsite.ca")
        mail-icon
        span &nbsp Ecuador
      .col.py-1
        span ecuador@chacunsonsite.ca
    .col.py-5
      a.text-success(href="tel:+5812340581")
        phone-icon
        span +1 (581) 2340581
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
