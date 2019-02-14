<i18n src="./transmission-lines.json"></i18n>
<template lang="pug">
  .container
    .row
      .col.text-center
        h1.title {{ $t('transmission-lines')}}
        br
    .row
      .col
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
          url:
            '/images/products/transmission-lines/smarensol_transmission_lines_insulators.jpg'
        },
        {
          id: 1,
          title: 'beacons',
          url:
            '/images/products/transmission-lines/smarensol_transmission_lines_beacons.jpg'
        },
        {
          id: 2,
          title: 'cables',
          url:
            '/images/products/transmission-lines/smarensol_transmission_lines_fiber_optic_cables.jpg'
        },
        {
          id: 3,
          title: 'chains',
          url:
            '/images/products/transmission-lines/smarensol_transmission_lines_assemblies_chains.jpg'
        },
        {
          id: 4,
          title: 'hardware',
          url:
            '/images/products/transmission-lines/smarensol_transmission_lines_accessories.jpg'
        },
        {
          id: 5,
          title: 'lighting',
          url:
            '/images/products/transmission-lines/smarensol_transmission_lines_lighting_rod.jpg'
        },
        {
          id: 6,
          title: 'disconnectors',
          url:
            '/images/products/transmission-lines/smarensol_transmission_lines_disconnectors.jpg'
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
          content:
            'https://smarensol.com/images/distribution/smarensol_transmission_lines_insulator.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/transmission-lines/smarensol_transmission_lines_beacons.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/transmission-lines/smarensol_transmission_lines_fiber_optic_cables.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/transmission-lines/smarensol_transmission_lines_assemblies_chains.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/transmission-lines/smarensol_transmission_lines_accessories.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/substation/smarensol_transmission_lines_lighting_rod.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/substation/smarensol_transmission_lines_disconnectors.jpg'
        }
      ]
    }
  }
}
</script>
