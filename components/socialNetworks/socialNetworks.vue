<template lang="pug">
  .row
    .col
      a.text-light(href="https://ec.linkedin.com/")
        facebook-icon
    .col
      a.text-light(href="https://ec.linkedin.com/")
        TwitterIcon
    .col
      a.text-light(href="https://ec.linkedin.com/")
        LinkedinIcon
    .col
      a.text-light(href="mailto:ventas@smarensol.com")
        MailIcon
    .col
      a.text-light(href="whatsapp://tel:3216541234")
        PhoneIcon
</template>
<script>
  import { FacebookIcon,  TwitterIcon, LinkedinIcon, MailIcon, PhoneIcon } from 'vue-feather-icons'

  export default {
    components: {
      FacebookIcon,
      TwitterIcon,
      LinkedinIcon,
      MailIcon,
      PhoneIcon
    }
  }
</script>
