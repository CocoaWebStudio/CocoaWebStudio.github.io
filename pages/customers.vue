<template lang="pug">
  .customer
    navMenu
    .container
      .row
        .col.text-center
          h1.title Customers Smarensol
</template>
<script>
import navMenu from '~/components/nav/navMenu.vue'

export default {
  name: 'customers',
  components: {
    navMenu
  },
  nuxtI18n: {
    paths: {
      en: '/customers',
      es: '/clientes'
    }
  }
}
</script>
<style src="./customers.scss" lang="scss" scoped />
