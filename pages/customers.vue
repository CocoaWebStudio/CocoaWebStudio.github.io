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
  name: 'Customers',
  components: {
    navMenu
  }
}
</script>
<style src="./customers.scss" lang="scss" />
