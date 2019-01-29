<i18n src="./industrial.json"></i18n>
<template lang="pug">
  .container
    .row
      .col.text-center
        h1.title {{ $t('industrial')}}
        br
    .row
      gallery(:gallerys="gallerys")
</template>
<script>
import gallery from '~/components/gallery/gallery.vue'

export default {
  name: 'industrial',
  components: {
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
