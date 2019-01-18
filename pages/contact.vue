<template lang="pug">
  .contac
    navMenu
    contactUs
</template>
<script>
import navMenu from '~/components/nav/navMenu.vue'
import contactUs from '~/pages/contact/contactUS.vue'

export default {
  name: 'contact',
  components: {
    navMenu,
    contactUs
  }
}
</script>
