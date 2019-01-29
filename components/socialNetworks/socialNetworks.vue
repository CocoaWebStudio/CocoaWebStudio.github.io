<template lang="pug">
  .row
    .col.py-3
      a.text-light(href="https://ec.linkedin.com/", target="_blank", rel="noopener noreferrer")
        facebook-icon
    .col.py-3
      a.text-light(href="https://ec.linkedin.com/", target="_blank", rel="noopener noreferrer")
        TwitterIcon
    .col.py-3
      a.text-light(href="https://ec.linkedin.com/", target="_blank", rel="noopener noreferrer")
        LinkedinIcon
    .col.py-3
      a.text-light(href="mailto:ventas@smarensol.com", target="_blank")
        MailIcon
    .col-md-5.text-center.py-3
      a.text-light(href="whatsapp://tel:593994138795", target="_blank")
        PhoneIcon
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
