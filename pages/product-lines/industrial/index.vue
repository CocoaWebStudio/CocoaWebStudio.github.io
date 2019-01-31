<i18n src="./industrial.json"></i18n>
<template lang="pug">
  .container
    .row
      .col.text-center
        h1.title {{ $t('industrial')}}
        br
    .row
      button(@click="show = !show") Toggle show
      transition(name="bounce")
        gallery(:gallerys="gallerys" v-if="show")
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
      show: true,
      gallerys: [
        {id:0,title: 'tools', url:'https://picsum.photos/300/300/?image=41'},
        {id:1,title: 'security' , url:'https://picsum.photos/300/300/?image=28'},
        {id:2,title: 'motors' , url:'https://picsum.photos/300/300/?image=61'}
      ]
    }
  }
}
</script>
<style  scoped>
.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>

