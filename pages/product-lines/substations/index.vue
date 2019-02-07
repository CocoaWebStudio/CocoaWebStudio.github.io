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
  }
}
</script>
