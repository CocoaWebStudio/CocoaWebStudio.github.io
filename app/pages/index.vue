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
  data() {
    return {
      sliders: [
        {
          id: 0,
          title: 'smarensol',
          url: '/images/slider/smarensol_slider_logo.png'
        },
        { id: 1, url: '/images/slider/smarensol_slider_electric_tower.png' },
        {
          id: 2,
          url: '/images/slider/smarensol_slider_security_equipments.png'
        },
        { id: 3, url: '/images/slider/smarensol_slider_insulators.png' },
        {
          id: 4,
          url: '/images/slider/smarensol_slider_electrical_substations.png'
        },
        { id: 5, url: '/images/slider/smarensol_slider_substations.png' },
        {
          id: 6,
          url: '/images/slider/smarensol_slider_electricity_towers.png'
        },
        {
          id: 7,
          url: '/images/slider/smarensol_slider_electricity substations.png'
        }
      ],
      imageSections: [
        {
          id: 0,
          image: '/images/allies/delta-conectores.jpg',
          link: 'https://www.deltaconectores.com',
          name: 'Delta Conductores S.A. de C.V.'
        },
        {
          id: 1,
          image: '/images/allies/ever_exceed.jpg',
          link: 'http://www.everexceed.com',
          name: 'Ever Exceed.'
        },
        {
          id: 2,
          image: '/images/allies/gaon-cable.jpg',
          link: 'https://www.gaoncable.com',
          name: 'Gaon Cable Co. Ltd.'
        }
      ]
    }
  },
  head() {
    return {
      title: 'Smarensol',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('welcome')
        },
        {
          property: 'og:title',
          name: 'about',
          content: this.$t('description')
        },
        {
          property: 'og:image',
          content: 'http://euro-travel-example.com/thumbnail.jpg'
        },
        { property: 'og:url', content: 'https://smarensol.com' }
      ]
    }
  }
}
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
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
