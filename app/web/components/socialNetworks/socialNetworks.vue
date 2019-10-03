<template lang="pug">
  .row
    .col.py-3
      a.text-warning(href="mailto:info@chacunsonsite.ca")
        mail-icon
        .col.py-1.text-warning
          span info@chacunsonsite.ca
    .col.py-3
      a.text-warning(href="tel:+15812340581")
        phone-icon
        .col.py-1.text-warning
          span +1 (581) 234-0581
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
