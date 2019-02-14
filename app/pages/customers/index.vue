<i18n src="./customers.json"></i18n>
<template lang="pug">
  .customers
    imageBg(:images="images")
    .container-fluid
      .row
        .col-md-6.offset-md-3.text-center.bounce-enter-active
          h1.title {{ $t('customers-text')}}
          br
          br
      .row
        .col-md-6.offset-md-3.text-left
          h4
            li {{ $t('electric-company')}}
            br
      .row
        .col-md-6.offset-md-3.text-left
          h4
            li {{ $t('oil-company')}}
            br
      .row
        .col-md-6.offset-md-3.text-left
         h4
            li {{ $t('installation-company')}}
            br
      .row
        .col-md-6.offset-md-3.text-left
          h4
            li {{ $t('engineering-company')}}
            br
      .row
        .col-md-6.offset-md-3.text-left
          h4
            li {{ $t('warehouses')}}
            br
      .row
        .col-md-6.offset-md-3.text-left
         h4
            li {{ $t('manufacturers')}}
            br
      .row
        .col-md-6.offset-md-3.text-left
          h4
            li {{ $t('industrial-customers')}}
            br
</template>
<script>
import imageBg from '~/components/imageBg/imageBg.vue'

export default {
  name: 'Customers',
  components: {
    imageBg
  },
  data() {
    return {
      images: [
        {
          id: 0,
          url: '/images/customers/bg_customer.jpg'
        }
      ]
    }
  },
  head() {
    return {
      title: 'Smarensol',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('welcome')
        },
        {
          property: 'og:title',
          name: 'about',
          content: this.$t('description')
        },
        {
          property: 'og:image',
          content: 'http://euro-travel-example.com/thumbnail.jpg'
        },
        { property: 'og:url', content: 'https://smarensol.com' }
      ]
    }
  }
}
</script>
<style src="./customers.scss" lang="scss" scoped />
