<i18n src="./content-index.json"></i18n>
<template lang="pug">
  .wraper
    slider(:sliders="sliders")
    .col.text-center
        h1.py-4 TODAS TUS IDEAS LAS PODEMOS EJECUTAR EN DESARROLLO WEB
    galleryHorizontal.no-gutters(:galleryHorizontals="galleryHorizontals")
</template>

<script>
import slider from '~/components/slider/slider'
import galleryHorizontal from '@/components/galleryHorizontal/galleryHorizontal.vue'

export default {
  components: {
    slider,
    galleryHorizontal
  },
  data() {
    return {
      sliders: [
        {
          id: 0,
          title: 'smarensol',
          url: '/images/slider/slider_chacunsonsite_logo.jpg'
        },
        {
          id: 1,
          url: '/images/slider/slider_chacunsonsite_seo.jpg'
        },
        {
          id: 2,
          url: '/images/slider/slider_chacunsonsite_ideas.jpg'
        },
        {
          id: 3,
          url: '/images/slider/slider_chacunsonsite_error400.jpg'
        }
      ],
      galleryHorizontals: [
        {
          id: 0,
          url: '/images/works/works_rahua.jpg',
          name: 'Rahua',
          description:
            'Fue desarrollada para una gran y reconocida empresa ecomerce que se dedica al cuidado y mantenimiento del cabello, piel y rostro, con ingredientes orgánicos naturales  y puros derivados de las platas',
          size: '4',
          link: '//rahua.com/'
        },
        {
          id: 1,
          url: '/images/works/works_matte.jpg',
          name: 'Matte CG',
          description:
            'Reconocida Estudio Ecuatoriano de animación, VFX y Film, con una larga trayectoria en la creacion de proyectos por encargo para contenido y publicidad a nivel mundial',
          size: '4',
          link: '//matte.cg/'
        },
        {
          id: 2,
          url: '/images/works/works_smarensol.jpg',
          name: 'Smarensol S.A',
          description:
            'Empresa enfocada al sector electrico, con una vasta experiencia en la comercializacion de equipos y suministros para sistemas eléctricos de Distribución, Transmisión y Subestaciones.',
          size: '4',
          link: '//smarensol.com/'
        },
        {
          id: 3,
          url: '/images/works/works_rahua.jpg',
          name: 'Lorem ipsum ',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ante sed mauris accumsan viverra nec nec tortor. In ac facilisis libero, eget dictum est. Suspendisse egestas maximus libero faucibus lacinia',
          size: '4',
          link: '//smarensol.com/'
        },
        {
          id: 4,
          url: '/images/works/works_rahua.jpg',
          name: 'Lorem ipsum ',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ante sed mauris accumsan viverra nec nec tortor. In ac facilisis libero, eget dictum est. Suspendisse egestas maximus libero faucibus lacinia',
          size: '4',
          link: '//smarensol.com/'
        },
        {
          id: 5,
          url: '/images/works/works_rahua.jpg',
          name: 'Lorem ipsum ',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ante sed mauris accumsan viverra nec nec tortor. In ac facilisis libero, eget dictum est. Suspendisse egestas maximus libero faucibus lacinia',
          size: '4',
          link: '//smarensol.com/'
        },
        {
          id: 6,
          url: '/images/works/works_rahua.jpg',
          name: 'Lorem ipsum ',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ante sed mauris accumsan viverra nec nec tortor. In ac facilisis libero, eget dictum est. Suspendisse egestas maximus libero faucibus lacinia',
          size: '4',
          link: '//smarensol.com/'
        },
        {
          id: 7,
          url: '/images/works/works_rahua.jpg',
          name: 'Lorem ipsum ',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ante sed mauris accumsan viverra nec nec tortor. In ac facilisis libero, eget dictum est. Suspendisse egestas maximus libero faucibus lacinia',
          size: '4',
          link: '//smarensol.com/'
        },
        {
          id: 8,
          url: '/images/works/works_rahua.jpg',
          name: 'Lorem ipsum ',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ante sed mauris accumsan viverra nec nec tortor. In ac facilisis libero, eget dictum est. Suspendisse egestas maximus libero faucibus lacinia',
          size: '4',
          link: '//smarensol.com/'
        }
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
