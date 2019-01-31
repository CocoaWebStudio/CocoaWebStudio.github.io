<i18n src="./content-index.json"></i18n>
<template lang="pug">
  .home
    .container-fluid
      .row.bg-primary
        .col.text-center.text-light.py-2
          h4.title {{ $t('welcome')}}
    slider(:sliders="sliders")
    .container-fluid.py-4
      .row
        .col.text-center
          h3.allies {{ $t('our-allies')}}
    imageSection(:imageSections="imageSections")
</template>

<script>
import slider from '~/components/slider/slider.vue'
import imageSection from '~/components/imageSection/imageSection.vue'

export default {
  components: {
    slider,
    imageSection
  },
  data() {
    return {
      sliders: [
        {id:0,title:'smarensol', url:'/images/sliderSmarensolLogo.jpg'},
        {id:1,title: 'energy' , url:'/images/energy1.jpg'},
        {id:2,title: 'industry' , url:'/images/energy4.jpg'},
        {id:3,title: 'oil' , url:'/images/energy3.jpg'}
      ],
      imageSections: [
        {id:0 , image:'/images/allies/delta-conectores.jpeg', link:'https://www.deltaconectores.com', name:"Delta Conductores S.A. de C.V."}
      ]
    }
  }
}
</script>
