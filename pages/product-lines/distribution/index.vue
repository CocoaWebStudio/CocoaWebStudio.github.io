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
        {id:0,title: 'insulators', url:'/images/distribution/insulators.jpg'},
        {id:1,title: 'capacitorBa' , url:'/images/distribution/capacitor-banks.jpg'},
        {id:2,title: 'distributionTe' , url:'/images/distribution/distribution-terminals.jpg'},
        {id:3,title: 'equipment' , url:'/images/substation/underground-networks.jpg'},
        {id:4,title: 'fuses' , url:'/images/distribution/fuses.jpg'},
        {id:5,title: 'switches' , url:'/images/distribution/switches.jpg'},
        {id:6,title: 'lighting' , url:'/images/substation/lighting-rod.jpg'},
        {id:7,title: 'regulators' , url:'/images/distribution/regulators.jpg'},
        {id:8,title: 'disconnectors' , url:'/images/substation/seccionador-de-subestacion.jpg'},
        {id:9,title: 'transformersMe' , url:'/images/substation/measurement-transformers.jpg'}
      ]
    }
  },
   head() {
    return {
      title: 'Smarensol',
      meta: [
        { hid: 'description', name: 'description', content: this.$t('welcome') },
        { property: "og:title", name: 'about', content: this.$t('description') },
        { property: "og:image", content="http://euro-travel-example.com/thumbnail.jpg" },
        { property: "og:url", content="http://euro-travel-example.com/index.htm" }
      ]
    }
  }
}
</script>
