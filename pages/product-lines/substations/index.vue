<template lang="pug">
  .container
    .row
      .col.text-center
        h1.title Substations Smarensol
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
        {id:0,title: 'Station type isolators', url:'https://picsum.photos/300/300/?image=41'},
        {id:1,title: 'Banks of High Voltage Capacitors' , url:'https://picsum.photos/300/300/?image=28'},
        {id:2,title: 'Batteries Chargers and Banks' , url:'https://picsum.photos/300/300/?image=61'},
        {id:3,title: 'Cells' , url:'https://picsum.photos/300/300/?image=26'},
        {id:4,title: 'Substation connectors' , url:'https://picsum.photos/300/300/?image=50'},
        {id:5,title: 'Equipment and Accessories for Underground Networks' , url:'https://picsum.photos/300/300/?image=45'},
        {id:6,title: 'Power Switches' , url:'https://picsum.photos/300/300/?image=37'},
        {id:7,title: 'Lighting rod' , url:'https://picsum.photos/300/300/?image=39'},
        {id:8,title: 'Relays of protections and RTUs' , url:'https://picsum.photos/300/300/?image=47'},
        {id:9,title: 'Energy Meters' , url:'https://picsum.photos/300/300/?image=46'},
        {id:10,title: 'Disconnectors' , url:'https://picsum.photos/300/300/?image=51'},
        {id:11,title: 'Explosion protection systems for transformers' , url:'https://picsum.photos/300/300/?image=54'},
        {id:12,title: 'Measurement transformers' , url:'https://picsum.photos/300/300/?image=52'},
        {id:13,title: 'Power Transformers' , url:'https://picsum.photos/300/300/?image=55'}
      ]
    }
  }
}
</script>
