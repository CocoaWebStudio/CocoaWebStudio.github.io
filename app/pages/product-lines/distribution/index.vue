<i18n src="./distribution.json"></i18n>
<template lang="pug">
  .container
    .row
      .col.text-center
          h1.title {{ $t('distribution')}}
          br
    .row
      gallery(:gallerys="gallerys")
</template>
<script>
import gallery from '~/components/gallery/gallery.vue'

export default {
  name: 'Distribution',
  components: {
    gallery
  },
  data() {
    return {
      gallerys: [
        {
          id: 0,
          title: 'insulators',
          url: '/images/distribution/insulators.jpg'
        },
        {
          id: 1,
          title: 'capacitorBa',
          url: '/images/distribution/capacitor-banks.jpg'
        },
        {
          id: 2,
          title: 'distributionTe',
          url: '/images/distribution/distribution-terminals.jpg'
        },
        {
          id: 3,
          title: 'equipment',
          url: '/images/distribution/underground-networks.jpg'
        },
        { id: 4, title: 'fuses', url: '/images/distribution/fuses.jpg' },
        {
          id: 5,
          title: 'reclosers',
          url: '/images/distribution/reclosers.jpg'
        },
        { id: 6, title: 'switches', url: '/images/distribution/switches.jpg' },
        {
          id: 7,
          title: 'lighting',
          url: '/images/distribution/lighting-rod.jpg'
        },
        {
          id: 8,
          title: 'regulators',
          url: '/images/distribution/regulators.jpg'
        },
        {
          id: 9,
          title: 'transformersMe',
          url: '/images/distribution/measurement-transformers.jpg'
        },
        {
          id: 10,
          title: 'premolded',
          url: '/images/distribution/pre-molded-accessories.jpg'
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
        { property: 'og:title', content: this.$t('insulators') },
        { property: 'og:title', content: this.$t('capacitorBa') },
        { property: 'og:title', content: this.$t('distributionTe') },
        { property: 'og:title', content: this.$t('equipment') },
        { property: 'og:title', content: this.$t('fuses') },
        { property: 'og:title', content: this.$t('switches') },
        { property: 'og:title', content: this.$t('lighting') },
        { property: 'og:title', content: this.$t('regulators') },
        { property: 'og:title', content: this.$t('disconnectors') },
        { property: 'og:title', content: this.$t('transformersMe') },
        {
          property: 'og:image',
          content: 'https://smarensol.com/images/distribution/insulators.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/distribution/capacitor-banks.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/distribution/distribution-terminals.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/substation/underground-networks.jpg'
        },
        {
          property: 'og:image',
          content: 'https://smarensol.com/images/distribution/fuses.jpg'
        },
        {
          property: 'og:image',
          content: 'https://smarensol.com/images/distribution/switches.jpg'
        },
        {
          property: 'og:image',
          content: 'https://smarensol.com/images/substation/lighting-rod.jpg'
        },
        {
          property: 'og:image',
          content: 'https://smarensol.com/images/distribution/regulators.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/substation/seccionador-de-subestacion.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/substation/measurement-transformers.jpg'
        }
      ]
    }
  }
}
</script>
