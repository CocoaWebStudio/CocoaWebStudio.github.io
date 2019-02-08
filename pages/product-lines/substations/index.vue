<i18n src="./substations.json"></i18n>
<template lang="pug">
  .container
    .row
      .col.text-center
        h1.title {{ $t('substations')}}
        br
    .row
      gallery(:gallerys="gallerys")
</template>
<script>
import gallery from '~/components/gallery/gallery.vue'

export default {
  name: 'substations',
  components: {
    gallery
  },
  data() {
    return {
      gallerys: [
        {id:0,title: 'isolatorsSt', url:'/images/substation/insulator.jpg'},
        {id:1,title: 'capacitors' , url:'/images/substation/capacitors.jpg'},
        {id:2,title: 'batteries' , url:'/images/substation/chargers.jpg'},
        {id:3,title: 'cells' , url:'/images/substation/cells.jpg'},
        {id:4,title: 'connectors' , url:'/images/substation/connectors.jpg'},
        {id:5,title: 'equipment' , url:'/images/substation/underground-networks.jpg'},
        {id:6,title: 'power' , url:'/images/substation/power-switches.jpg'},
        {id:7,title: 'lighting' , url:'/images/substation/lighting-rod.jpg'},
        {id:8,title: 'relays' , url:'/images/substation/relays.jpg'},
        {id:9,title: 'energy' , url:'/images/substation/energy-meters.jpg'},
        {id:10,title: 'disconnectors' , url:'/images/substation/seccionador-de-subestacion.jpg'},
        {id:11,title: 'systems' , url:'/images/substation/protection-systems.jpg'},
        {id:12,title: 'transformersMe' , url:'/images/substation/measurement-transformers.jpg'},
        {id:13,title: 'transformersPo' , url:'/images/substation/power-transformers.jpg'}
      ]
    }
  },
   head() {
    return {
      title: 'Smarensol',
      meta: [
        { hid: 'description', name: 'description', content: this.$t('welcome') },
        { property: "og:url", content: "https://smarensol.com" },
        { property: 'og:title',  content: this.$t('isolatorsSt') },
        { property: 'og:title',  content: this.$t('capacitors') },
        { property: 'og:title',  content: this.$t('batteries') },
        { property: 'og:title',  content: this.$t('cells') },
        { property: 'og:title',  content: this.$t('connectors') },
        { property: 'og:title',  content: this.$t('equipment') },
        { property: 'og:title',  content: this.$t('power') },
        { property: 'og:title',  content: this.$t('lighting') },
        { property: 'og:title',  content: this.$t('relays') },
        { property: 'og:title',  content: this.$t('energy') },
        { property: 'og:title',  content: this.$t('disconnectors') },
        { property: 'og:title',  content: this.$t('systems') },
        { property: 'og:title',  content: this.$t('transformersMe') },
        { property: 'og:title',  content: this.$t('transformersPo') },
        { property: "og:image", content: "https://smarensol.com/images/substation/insulator.jpg" },
        { property: "og:image", content: "https://smarensol.com/images/substation/capacitors.jpg" },
        { property: "og:image", content: "https://smarensol.com/images/substation/chargers.jpg" },
        { property: "og:image", content: "https://smarensol.com/images/substation/cells.jpg" },
        { property: "og:image", content: "https://smarensol.com/images/substation/connectors.jpg" },
        { property: "og:image", content: "https://smarensol.com/images/substation/underground-networks.jpg" },
        { property: "og:image", content: "https://smarensol.com/images/substation/power-switches.jpg" },
        { property: "og:image", content: "https://smarensol.com/images/substation/lighting-rod.jpg" },
        { property: "og:image", content: "https://smarensol.com/images/substation/relays.jpg" },
        { property: "og:image", content: "https://smarensol.com/images/substation/energy-meters.jpg" },
        { property: "og:image", content: "https://smarensol.com/images/substation/seccionador-de-subestacion.jpg" },
        { property: "og:image", content: "https://smarensol.com/images/substation/protection-systems.jpg" },
        { property: "og:image", content: "https://smarensol.com/images/substation/measurement-transformers.jpg" },
        { property: "og:image", content: "https://smarensol.com/images/substation/power-transformers.jpg" }
      ]
    }
  }
}
</script>
