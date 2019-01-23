<template lang="pug">
  .contact
    navMenu
    contactUs
    dataInstitutional
</template>
<script>
import navMenu from '~/components/nav/navMenu.vue'
import contactUs from '~/pages/contact/contactUS.vue'
import dataInstitutional from '~/pages/contact/dataInstitutional.vue'

export default {
  name: 'contact',
  components: {
    navMenu,
    contactUs,
    dataInstitutional
  }
}
</script>
