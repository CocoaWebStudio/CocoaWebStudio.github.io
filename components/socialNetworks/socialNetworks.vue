<template lang="pug">
  .row
    .col.py-3
      a.text-light(
        href="//www.facebook.com/Smarensol-SA-374476870003912/",
        target="_blank",
        rel="noopener noreferrer"
      )
        facebook-icon
    .col.py-3
      a.text-light(
        href="linkedin.com/company/smarensol-s-a",
        target="_blank",
        rel="noopener noreferrer"
      )
        linkedin-icon
    .col.py-3
      a.text-light(href="mailto:ventas@smarensol.com")
        mail-icon
    .col-md-5.text-center.py-3
      a.text-light(href="tel:+59342071092")
        phone-icon
        span  (+593) 42071092
</template>
<script>
  import { FacebookIcon, LinkedinIcon, MailIcon, PhoneIcon } from 'vue-feather-icons'

  export default {
    components: {
      FacebookIcon,
      LinkedinIcon,
      MailIcon,
      PhoneIcon
    }
  }
</script>
