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
        {id:0,title: 'tools', url:'/images/industrial/tools.jpg'},
        {id:1,title: 'security' , url:'/images/industrial/security-equipments.jpg'},
        {id:2,title: 'motors' , url:'/images/industrial/motors.jpg'},
        {id:3,title: 'beacons' , url:'/images/transmission-lines/beacons.jpg'}
      ]
    }
  },
   head() {
    return {
      title: 'Smarensol',
      meta: [
        { hid: 'description', name: 'description', content: this.$t('welcome') },
        { property: "og:title", name: 'about', content: this.$t('description') },
        { property: "og:image", content: "http://euro-travel-example.com/thumbnail.jpg" },
        { property: "og:url", content: "http://euro-travel-example.com/index.htm" }
      ]
    }
  }
}
</script>
