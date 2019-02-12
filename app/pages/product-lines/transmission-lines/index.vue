<i18n src="./transmission-lines.json"></i18n>
<template lang="pug">
  .container
    .row
      .col.text-center
        h1.title {{ $t('transmission-lines')}}
        br
    .row
      gallery(:gallerys="gallerys")
</template>
<script>
import gallery from '~/components/gallery/gallery.vue'

export default {
  name: 'TransmissionLines',
  components: {
    gallery
  },
  data() {
    return {
      gallerys: [
        {
          id: 0,
          title: 'insulators',
          url: '/images/transmission-lines/insulators.jpg'
        },
        {
          id: 1,
          title: 'beacons',
          url: '/images/transmission-lines/beacons.jpg'
        },
        {
          id: 2,
          title: 'cables',
          url: '/images/transmission-lines/fiber-optic-cables.jpg'
        },
        {
          id: 3,
          title: 'chains',
          url: '/images/transmission-lines/assemblies-chains.jpg'
        },
        {
          id: 4,
          title: 'hardware',
          url: '/images/transmission-lines/accessories.jpg'
        },
        {
          id: 5,
          title: 'lighting',
          url: '/images/transmission-lines/lighting-rod.jpg'
        },
        {
          id: 6,
          title: 'disconnectors',
          url: '/images/transmission-lines/disconnectors.jpg'
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
        { property: 'og:title', content: this.$t('isolators') },
        { property: 'og:title', content: this.$t('beacons') },
        { property: 'og:title', content: this.$t('cables') },
        { property: 'og:title', content: this.$t('chains') },
        { property: 'og:title', content: this.$t('hardware') },
        { property: 'og:title', content: this.$t('lighting') },
        { property: 'og:title', content: this.$t('disconnectors') },
        {
          property: 'og:image',
          content: 'https://smarensol.com/images/distribution/insulator.jpg'
        },
        {
          property: 'og:image',
          content: 'https://smarensol.com/images/transmission-lines/beacons.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/transmission-lines/fiber-optic-cables.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/transmission-lines/assemblies-chains.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/transmission-lines/accessories.jpg'
        },
        {
          property: 'og:image',
          content: 'https://smarensol.com/images/substation/lighting-rod.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/substation/seccionador-de-subestacion.jpg'
        }
      ]
    }
  }
}
</script>
