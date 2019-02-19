<i18n src="./industrial.json"></i18n>
<template lang="pug">
  .container
    .row
      .col.text-center
        h1.title {{ $t('industry')}}
        br
        br
        br
    .row
      .col
        gallery(:gallerys="gallerys")
</template>
<script>
import gallery from '~/components/gallery/gallery.vue'

export default {
  name: 'Industrial',
  components: {
    gallery
  },
  data() {
    return {
      gallerys: [
        {
          id: 0,
          title: 'tools',
          url: '/images/products/industrial/smarensol_industrial_tools.jpeg'
        },
        {
          id: 1,
          title: 'security',
          url:
            '/images/products/industrial/smarensol_industrial_security_equipments.jpeg'
        },
        {
          id: 2,
          title: 'motors',
          url: '/images/products/industrial/smarensol_industrial_motors.jpeg'
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
        { property: 'og:url', content: 'https://smarensol.com' },
        { property: 'og:title', content: this.$t('tools') },
        { property: 'og:title', content: this.$t('security') },
        { property: 'og:title', content: this.$t('motors') },
        { property: 'og:title', content: this.$t('beacons') },
        {
          property: 'og:image',
          content: 'https://smarensol.com/images/products/industrial/tools.jpeg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/industrial/security-equipments.jpeg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/industrial/motors.jpeg'
        }
      ]
    }
  }
}
</script>
