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
import slider from '~/components/slider/slider'
import imageSection from '~/components/imageSection/imageSection'
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
          url: '/images/slider/smarensol_slider_logo.jpg'
        },
        {
          id: 1,
          url: '/images/slider/smarensol_slider_electric_tower.jpeg'
        },
        {
          id: 2,
          url: '/images/slider/smarensol_slider_security_equipments.jpg'
        },
        {
          id: 3,
          url: '/images/slider/smarensol_slider_insulators.jpeg'
        },
        {
          id: 4,
          url: '/images/slider/smarensol_slider_electrical_substations.jpg'
        },
        {
          id: 5,
          url: '/images/slider/smarensol_slider_substations.jpeg'
        },
        {
          id: 6,
          url: '/images/slider/smarensol_slider_electricity_towers.jpg'
        },
        {
          id: 7,
          url: '/images/slider/smarensol_slider_electricity_substations.jpeg'
        }
      ],
      imageSections: [
        {
          id: 0,
          image: '/images/allies/smarensol_allies_delta_conectores.jpeg',
          link: 'https://www.deltaconectores.com',
          name: 'Delta Conductores S.A. de C.V.'
        },
        {
          id: 1,
          image: '/images/allies/smarensol_allies_ever_exceed.jpeg',
          link: 'http://www.everexceed.com',
          name: 'Ever Exceed.'
        },
        {
          id: 2,
          image: '/images/allies/smarensol_allies_gaon_cable.jpeg',
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
          name: 'title',
          content: 'Smarensol'
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
