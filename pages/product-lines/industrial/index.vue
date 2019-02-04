<i18n src="./industrial.json"></i18n>
<template lang="pug">
  .container
    .row
      .col.text-center
        h1.title {{ $t('industry')}}
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
        {id:0,title: 'tools', url:'https://picsum.photos/300/300/?image=41'},
        {id:1,title: 'security' , url:'https://picsum.photos/300/300/?image=28'},
        {id:2,title: 'motors' , url:'https://www.tecowestinghouse.com/wp-content/uploads/2018/08/metricie3cutout.jpg'}
      ]
    }
  }
}
</script>
