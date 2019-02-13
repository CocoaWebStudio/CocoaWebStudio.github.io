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
          url: '/images/products/substation/smarensol_substations_insulator.jpg'
        },
        {
          id: 1,
          title: 'capacitors',
          url:
            '/images/products/substation/smarensol_substations_capacitors.jpg'
        },
        {
          id: 2,
          title: 'batteries',
          url: '/images/products/substation/smarensol_substations_chargers.jpg'
        },
        {
          id: 3,
          title: 'cells',
          url: '/images/products/substation/smarensol_substations_cells.jpg'
        },
        {
          id: 4,
          title: 'connectors',
          url:
            '/images/products/substation/smarensol_substations_connectors.jpg'
        },
        {
          id: 5,
          title: 'power',
          url:
            '/images/products/substation/smarensol_substations_power_switches.jpg'
        },
        {
          id: 6,
          title: 'lighting',
          url:
            '/images/products/substation/smarensol_substations_lighting_rod.jpg'
        },
        {
          id: 7,
          title: 'relays',
          url: '/images/products/substation/smarensol_substations_relays.jpg'
        },
        {
          id: 8,
          title: 'energy',
          url:
            '/images/products/substation/smarensol_substations_energy_meters.jpg'
        },
        {
          id: 9,
          title: 'disconnectors',
          url:
            '/images/products/substation/smarensol_substations_disconnectors.jpg'
        },
        {
          id: 10,
          title: 'systems',
          url:
            '/images/products/substation/smarensol_substations_protection_systems.jpg'
        },
        {
          id: 11,
          title: 'transformersMe',
          url:
            '/images/products/substation/smarensol_substations_measurement_transformers.jpg'
        },
        {
          id: 12,
          title: 'transformersPo',
          url:
            '/images/products/substation/smarensol_substations_power_transformers.jpg'
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
            'https://smarensol.com/images/products/substation/smarensol_substations_insulator.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_capacitors.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_chargers.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_cells.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_connectors.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_underground_networks.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_power_switches.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_lighting_rod.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_relays.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_energy_meters.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_disconnectors.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_protection_systems.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_measurement_transformers.jpg'
        },
        {
          property: 'og:image',
          content:
            'https://smarensol.com/images/products/substation/smarensol_substations_power_transformers.jpg'
        }
      ]
    }
  }
}
</script>
