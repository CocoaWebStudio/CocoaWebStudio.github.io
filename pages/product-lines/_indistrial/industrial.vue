<template lang="pug">
  .data
    navMenu
    .container
      .row
        .col.text-center
          h1.title Industrial Smarensol
          br
      .row
        gallery(:gallerys="gallerys")
</template>
<script>
import navMenu from '~/components/nav/navMenu.vue'
import gallery from '~/components/gallery/gallery.vue'

export default {
  name: 'Data',
  components: {
    navMenu,
    gallery
  },
  data() {
    return {
      gallerys: [
        {id:0,title:'Tools', url:'https://picsum.photos/300/300/?image=41'},
        {id:1,title: 'Security equipments' , url:'https://picsum.photos/300/300/?image=28'},
        {id:2,title: 'Motors and Variators' , url:'https://picsum.photos/300/300/?image=61'}
      ]
    }
  }
}
</script>
