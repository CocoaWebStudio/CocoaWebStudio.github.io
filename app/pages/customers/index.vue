<i18n src="./customers.json"></i18n>
<template lang="pug">
  .container-fluid.bg
    .row
      .col-md-6.offset-md-3
        h1.title.bg-color {{ $t('customers')}}
        br
        br
        br
        br
        br
        br
    .container
      .row
        .col-md-6.offset-md-3.text-center
          h1.bg-color {{ $t('information')}}
            alert-triangle-icon.mx-3
</template>
<script>
import { AlertTriangleIcon } from 'vue-feather-icons'
export default {
  name: 'Customers',
  components: {
    AlertTriangleIcon
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
