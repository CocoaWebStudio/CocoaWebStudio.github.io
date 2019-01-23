<template lang="pug">
  .contacUs
    .container
     h1.title Contact Us Smarensol
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
<style src="./contactUs.scss" lang="scss">
</style>
