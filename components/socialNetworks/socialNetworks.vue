<template lang="pug">
  .row
    .col.py-3
      a.text-light(href="https://ec.linkedin.com/", target="_blank", rel="noopener noreferrer")
        facebook-icon
    .col.py-3
      a.text-light(href="https://ec.linkedin.com/", target="_blank", rel="noopener noreferrer")
        twitter-icon
    .col.py-3
      a.text-light(href="https://ec.linkedin.com/", target="_blank", rel="noopener noreferrer")
        linkedin-icon
    .col.py-3
      a.text-light(href="mailto:ventas@smarensol.com")
        mail-icon
    .col-md-5.text-center.py-3
      a.text-light(href="whatsapp://tel:593994138795")
        phone-icon
        span  (+593) 994138795
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
