<i18n src="./content-index.json"></i18n>
<template lang="pug">
  .home
    slider(:sliders="sliders")
    .container-fluid.py-4
      .row
        .col.text-center
          h3.allies {{ $t('our-allies')}}
    imageSection(:imageSections="imageSections")
    about-us

</template>

<script>
import slider from '~/components/slider/slider.vue'
import imageSection from '~/components/imageSection/imageSection.vue'
import aboutUs from '~/pages/about-us/index.vue'


export default {
  components: {
    slider,
    imageSection,
    aboutUs
  },
  head() {
  return {
    title: 'Smarensol',
    meta: [
      { hid: 'description', name: 'description', content: this.$t('welcome') }
    ]
  }
},
  data() {
    return {
      sliders: [
        {id:0,title:'smarensol', url:'/images/sliderSmarensolLogo.jpg'},
        {id:1,title: 'energy' , url:'/images/energy2.jpg'},
        {id:2,title: 'industry' , url:'/images/energy5.jpg'},
        {id:3,title: 'oil' , url:'/images/energy6.jpg'},
        {id:4,title: 'power' , url:'/images/energy4.jpg'}
      ],
      imageSections: [
        {id:0 , image:'/images/allies/delta-conectores.jpeg', link:'https://www.deltaconectores.com', name:"Delta Conductores S.A. de C.V."}
      ]
    }
  }
}
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in .8s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
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
