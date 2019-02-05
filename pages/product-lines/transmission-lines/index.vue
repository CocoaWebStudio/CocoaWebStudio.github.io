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
        {id:0,title: 'insulators', url:'/images/distribution/insulators.jpg'},
        {id:1,title: 'beacons' , url:'/images/transmission-lines/beacons.jpg'},
        {id:2,title: 'cables' , url:'/images/transmission-lines/fiber-optic-cables.jpg'},
        {id:3,title: 'chains' , url:'/images/transmission-lines/assemblies-chains.jpg'},
        {id:4,title: 'hardware' , url:'/images/transmission-lines/accessories.jpg'},
        {id:5,title: 'lighting' , url:'/images/substation/lighting-rod.jpg'},
        {id:6,title: 'disconnectors' , url:'/images/substation/seccionador-de-subestacion.jpeg'}
      ]
    }
  }
}
</script>
