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
  name: 'distribution',
  components: {
    gallery
  },
  data() {
    return {
      gallerys: [
        {id:0,title: 'insulators', url:'https://picsum.photos/300/300/?image=41'},
        {id:1,title: 'capacitorBa' , url:'https://picsum.photos/300/300/?image=28'},
        {id:2,title: 'distributionTe' , url:'https://picsum.photos/300/300/?image=61'},
        {id:3,title: 'equipment' , url:'https://picsum.photos/300/300/?image=26'},
        {id:4,title: 'fuses' , url:'https://picsum.photos/300/300/?image=50'},
        {id:5,title: 'switches' , url:'https://picsum.photos/300/300/?image=45'},
        {id:6,title: 'lighting' , url:'https://picsum.photos/300/300/?image=37'},
        {id:7,title: 'regulators' , url:'https://picsum.photos/300/300/?image=39'},
        {id:8,title: 'disconnectors' , url:'https://picsum.photos/300/300/?image=47'},
        {id:9,title: 'transformersMe' , url:'https://picsum.photos/300/300/?image=46'}
      ]
    }
  }
}
</script>
