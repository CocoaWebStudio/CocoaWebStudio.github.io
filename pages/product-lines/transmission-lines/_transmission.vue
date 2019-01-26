<template lang="pug">
  .transmission
    navMenu
    .container
      .row
        .col.text-center
          h1.title Transmission Lines Smarensol
          br
      .row
        gallery(:gallerys="gallerys")
</template>
<script>
import navMenu from '~/components/nav/navMenu.vue'
import gallery from '~/components/gallery/gallery.vue'

export default {
  name: 'Transmission',
  components: {
    navMenu,
    gallery
  },
  data() {
    return {
      gallerys: [
        {id:0,title:'Isolators', url:'https://picsum.photos/300/300/?image=41'},
        {id:1,title: 'Signaling Beacons' , url:'https://picsum.photos/300/300/?image=28'},
        {id:2,title: 'Conductors and Fiber Optic Cables' , url:'https://picsum.photos/300/300/?image=61'},
        {id:3,title: 'Assemblies for chains' , url:'https://picsum.photos/300/300/?image=26'},
        {id:4,title: 'Hardware and Accessories' , url:'https://picsum.photos/300/300/?image=50'},
        {id:5,title: 'Lighting rod' , url:'https://picsum.photos/300/300/?image=45'},
        {id:6,title: 'Disconnectors' , url:'https://picsum.photos/300/300/?image=37'}
      ]
    }
  }
}
</script>
