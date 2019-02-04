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
        {id:0,title: 'isolatorsSt', url:'https://picsum.photos/300/300/?image=41'},
        {id:1,title: 'capacitors' , url:'https://picsum.photos/300/300/?image=28'},
        {id:2,title: 'batteries' , url:'https://picsum.photos/300/300/?image=61'},
        {id:3,title: 'cells' , url:'https://picsum.photos/300/300/?image=26'},
        {id:4,title: 'connectors' , url:'https://picsum.photos/300/300/?image=50'},
        {id:5,title: 'equipment' , url:'https://picsum.photos/300/300/?image=45'},
        {id:6,title: 'power' , url:'https://picsum.photos/300/300/?image=37'},
        {id:7,title: 'lighting' , url:'https://picsum.photos/300/300/?image=39'},
        {id:8,title: 'relays' , url:'https://picsum.photos/300/300/?image=47'},
        {id:9,title: 'energy' , url:'https://picsum.photos/300/300/?image=46'},
        {id:10,title: 'disconnectors' , url:'/images/substation/seccionador-de-subestacion.jpeg'},
        {id:11,title: 'systems' , url:'https://picsum.photos/300/300/?image=54'},
        {id:12,title: 'transformersMe' , url:'https://picsum.photos/300/300/?image=52'},
        {id:13,title: 'transformersPo' , url:'https://picsum.photos/300/300/?image=55'}
      ]
    }
  }
}
</script>
