<i18n src="./distribution.json"></i18n>
<template lang="pug">
  .container
    .row
      .col.text-center
          h1.title {{ $t('distribution')}}
          br
    .row
      .col
        gallery(:gallerys="gallerys")
</template>
<script>
import gallery from '~/components/gallery/gallery'

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
          url:
            '/images/products/distribution/smarensol_distribution_insulators.jpg'
        },
        {
          id: 1,
          title: 'capacitorBa',
          url:
            '/images/products/distribution/smarensol_distribution_capacitor_banks.jpg'
        },
        {
          id: 2,
          title: 'distributionTe',
          url:
            '/images/products/distribution/smarensol_distribution_distribution_terminals.jpg'
        },
        {
          id: 3,
          title: 'equipment',
          url:
            '/images/products/distribution/smarensol_distribution_underground_networks.jpg'
        },
        {
          id: 4,
          title: 'fuses',
          url: '/images/products/distribution/smarensol_distribution_fuses.jpg'
        },
        {
          id: 5,
          title: 'reclosers',
          url:
            '/images/products/distribution/smarensol_distribution_reclosers.jpg'
        },
        {
          id: 6,
          title: 'switches',
          url:
            '/images/products/distribution/smarensol_distribution_switches.jpg'
        },
        {
          id: 7,
          title: 'lighting',
          url:
            '/images/products/distribution/smarensol_distribution_lighting_rod.jpg'
        },
        {
          id: 8,
          title: 'regulators',
          url:
            '/images/products/distribution/smarensol_distribution_regulators.jpg'
        },
        {
          id: 9,
          title: 'transformersMe',
          url:
            '/images/products/distribution/smarensol_distribution_measurement_transformers.jpg'
        },
        {
          id: 10,
          title: 'premolded',
          url:
            '/images/products/distribution/smarensol_distribution_pre_molded_accessories.jpg'
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
          content: this.$t('distribution')
        },
        { property: 'og:url', content: 'https://smarensol.com' },
        { property: 'og:title', content: this.$t('insulators') },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/distribution/insulators.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/distribution/capacitor-banks.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/distribution/distribution-terminals.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/underground-networks.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/distribution/fuses.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/distribution/switches.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/lighting-rod.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/distribution/regulators.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/seccionador-de-subestacion.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/measurement-transformers.jpg'
        }
      ]
    }
  }
}
</script>
