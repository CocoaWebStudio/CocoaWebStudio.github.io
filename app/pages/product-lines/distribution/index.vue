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
          url:
            '/images/products/distribution/smarensol_distribution_insulators.jpeg'
        },
        {
          id: 1,
          title: 'capacitorBa',
          url:
            '/images/products/distribution/smarensol_distribution_capacitor_banks.jpeg'
        },
        {
          id: 2,
          title: 'distributionTe',
          url:
            '/images/products/distribution/smarensol_distribution_distribution_terminals.jpeg'
        },
        {
          id: 3,
          title: 'equipment',
          url:
            '/images/products/distribution/smarensol_distribution_underground_networks.jpeg'
        },
        {
          id: 4,
          title: 'fuses',
          url: '/images/products/distribution/smarensol_distribution_fuses.jpeg'
        },
        {
          id: 5,
          title: 'reclosers',
          url:
            '/images/products/distribution/smarensol_distribution_reclosers.jpeg'
        },
        {
          id: 6,
          title: 'switches',
          url:
            '/images/products/distribution/smarensol_distribution_switches.jpeg'
        },
        {
          id: 7,
          title: 'lighting',
          url:
            '/images/products/distribution/smarensol_distribution_lighting_rod.jpeg'
        },
        {
          id: 8,
          title: 'regulators',
          url:
            '/images/products/distribution/smarensol_distribution_regulators.jpeg'
        },
        {
          id: 9,
          title: 'transformersMe',
          url:
            '/images/products/distribution/smarensol_distribution_measurement_transformers.jpeg'
        },
        {
          id: 10,
          title: 'premolded',
          url:
            '/images/products/distribution/smarensol_distribution_pre_molded_accessories.jpeg'
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
        { property: 'og:title', content: this.$t('distribution') },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/distribution/insulators.jpeg'
        }
      ]
    }
  }
}
</script>
