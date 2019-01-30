<i18n src="./transmission-lines.json"></i18n>
<template lang="pug">
  .container
    .row
      .col.text-center
        h1.title {{ $t('transmission-lines')}}
        br
    .row
      gallery(:gallerys="gallerys")
</template>
<script>
import gallery from '~/components/gallery/gallery.vue'

export default {
  name: 'transmission-lines',
  components: {
    gallery
  },
  data() {
    return {
      gallerys: [
        {id:0,title: 'insulators', url:'https://picsum.photos/300/300/?image=41'},
        {id:1,title: 'beacons' , url:'https://picsum.photos/300/300/?image=28'},
        {id:2,title: 'cables' , url:'https://picsum.photos/300/300/?image=61'},
        {id:3,title: 'chains' , url:'https://picsum.photos/300/300/?image=26'},
        {id:4,title: 'hardware' , url:'https://picsum.photos/300/300/?image=50'},
        {id:5,title: 'lighting' , url:'https://picsum.photos/300/300/?image=45'},
        {id:6,title: 'disconnectors' , url:'https://picsum.photos/300/300/?image=37'}
      ]
    }
  }
}
</script>
