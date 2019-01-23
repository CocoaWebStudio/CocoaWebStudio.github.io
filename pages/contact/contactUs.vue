<template lang="pug">
  .contacUs
    .container
     h1.title ContactUs Smarensol
     contactForm
</template>
<script>
import contactForm from '~/components/contactForm/contactForm.vue'

export default {
  name: 'contactUs',
  components: {
    contactForm
  }
}
</script>
