<i18n src="./substations.json"></i18n>
<template lang="pug">
  .container
    .row
      .col.text-center
        h1.title {{ $t('substations')}}
        br
    .row
      .col
        gallery(:gallerys="gallerys")
</template>
<script>
import gallery from '~/components/gallery/gallery.vue'

export default {
  name: 'Substations',
  components: {
    gallery
  },
  data() {
    return {
      gallerys: [
        {
          id: 0,
          title: 'isolatorsSt',
          url:
            '/images/products/substation/smarensol_substations_insulator.jpeg'
        },
        {
          id: 1,
          title: 'capacitors',
          url:
            '/images/products/substation/smarensol_substations_capacitors.jpeg'
        },
        {
          id: 2,
          title: 'batteries',
          url: '/images/products/substation/smarensol_substations_chargers.jpeg'
        },
        {
          id: 3,
          title: 'cells',
          url: '/images/products/substation/smarensol_substations_cells.jpeg'
        },
        {
          id: 4,
          title: 'connectors',
          url:
            '/images/products/substation/smarensol_substations_connectors.jpeg'
        },
        {
          id: 5,
          title: 'power',
          url:
            '/images/products/substation/smarensol_substations_power_switches.jpeg'
        },
        {
          id: 6,
          title: 'lighting',
          url:
            '/images/products/substation/smarensol_substations_lighting_rod.jpeg'
        },
        {
          id: 7,
          title: 'relays',
          url: '/images/products/substation/smarensol_substations_relays.jpeg'
        },
        {
          id: 8,
          title: 'energy',
          url:
            '/images/products/substation/smarensol_substations_energy_meters.jpeg'
        },
        {
          id: 9,
          title: 'disconnectors',
          url:
            '/images/products/substation/smarensol_substations_disconnectors.jpeg'
        },
        {
          id: 10,
          title: 'systems',
          url:
            '/images/products/substation/smarensol_substations_protection_systems.jpeg'
        },
        {
          id: 11,
          title: 'transformersMe',
          url:
            '/images/products/substation/smarensol_substations_measurement_transformers.jpeg'
        },
        {
          id: 12,
          title: 'transformersPo',
          url:
            '/images/products/substation/smarensol_substations_power_transformers.jpeg'
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
        { property: 'og:title', content: this.$t('isolatorsSt') },
        { property: 'og:title', content: this.$t('capacitors') },
        { property: 'og:title', content: this.$t('batteries') },
        { property: 'og:title', content: this.$t('cells') },
        { property: 'og:title', content: this.$t('connectors') },
        { property: 'og:title', content: this.$t('equipment') },
        { property: 'og:title', content: this.$t('power') },
        { property: 'og:title', content: this.$t('lighting') },
        { property: 'og:title', content: this.$t('relays') },
        { property: 'og:title', content: this.$t('energy') },
        { property: 'og:title', content: this.$t('disconnectors') },
        { property: 'og:title', content: this.$t('systems') },
        { property: 'og:title', content: this.$t('transformersMe') },
        { property: 'og:title', content: this.$t('transformersPo') },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_insulator.jpeg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_capacitors.jpeg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_chargers.jpeg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_cells.jpeg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_connectors.jpeg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_underground_networks.jpeg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_power_switches.jpeg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_lighting_rod.jpeg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_relays.jpeg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_energy_meters.jpeg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_disconnectors.jpeg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_protection_systems.jpeg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_measurement_transformers.jpeg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_power_transformers.jpeg'
        }
      ]
    }
  }
}
</script>
