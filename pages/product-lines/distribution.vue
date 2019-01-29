<i18n src="./product-lines.json"></i18n>
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
  name: 'Distribution',
  components: {
    gallery
  },
  data() {
    return {
      gallerys: [
        {id:0,title:'Insulators', url:'https://picsum.photos/300/300/?image=41'},
        {id:1,title: 'Capacitor Banks' , url:'https://picsum.photos/300/300/?image=28'},
        {id:2,title: 'Connectors and Distribution Terminals' , url:'https://picsum.photos/300/300/?image=61'},
        {id:3,title: 'Equipment and Accessories for Underground Networks' , url:'https://picsum.photos/300/300/?image=26'},
        {id:4,title: 'Fuses' , url:'https://picsum.photos/300/300/?image=50'},
        {id:5,title: 'Lighting rod' , url:'https://picsum.photos/300/300/?image=45'},
        {id:6,title: 'Medium Voltage Regulators' , url:'https://picsum.photos/300/300/?image=37'}
      ]
    }
  }
}
</script>
