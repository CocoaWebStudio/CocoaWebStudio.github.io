<i18n src="./content-index.json"></i18n>
<template lang="pug">
  .wraper
    slider(:sliders="sliders")
    .col.text-center
        h1.py-4 TODAS TUS IDEAS LAS PODEMOS TRANSFORMAR EN DESARROLLO WEB
    imageSection(:imageSections="imageSections")
    background.text-primary.py-2
    galleryHorizontal.no-gutters(:galleryHorizontals="galleryHorizontals")
    background.text-primary.py-2
</template>

<script>
import slider from '~/components/slider/slider'
import galleryHorizontal from '@/components/galleryHorizontal/galleryHorizontal.vue'
import background from '@/components/background/background.vue'
import imageSection from '@/components/imageSection/imageSection.vue'

export default {
  components: {
    slider,
    galleryHorizontal,
    background,
    imageSection
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
      ],
      imageSections: [
        {
          id: 0,
          name: 'Apollo',
          image: '/images/elements/elements_apollo_logo.png'
        },
        {
          id: 1,
          name: 'Bootstrap Vue',
          image: '/images/elements/elements_bootrsp_vue_logo.png'
        },
        {
          id: 2,
          name: 'Bootstrap',
          image: '/images/elements/elements_bootstrap_logo.png'
        },
        {
          id: 3,
          name: 'GraphQl',
          image: '/images/elements/elements_graphql_logo.png'
        },
        {
          id: 4,
          name: 'Laravel',
          image: '/images/elements/elements_laravel_logo.png'
        },
        {
          id: 5,
          name: 'Magento',
          image: '/images/elements/elements_magento_logo.png'
        },
        {
          id: 6,
          name: 'Magento2',
          image: '/images/elements/elements_magento2_logo.png'
        },
        {
          id: 7,
          name: 'Nuxtjs',
          image: '/images/elements/elements_nuxt_logo.png'
        },
        {
          id: 8,
          name: 'Nuxtjs',
          image: '/images/elements/elements_nuxtjs_logo.svg'
        },
        {
          id: 9,
          name: 'Shopify',
          image: '/images/elements/elements_shopify_logo.png'
        },
        {
          id: 10,
          name: 'Vuejs',
          image: '/images/elements/elements_vue_logo.svg'
        },
        {
          id: 11,
          name: 'Woo Commerce',
          image: '/images/elements/elements_woo_commerce_logo.png'
        },
        {
          id: 12,
          name: 'Wordpress',
          image: '/images/elements/elements_wordpress_logo.png'
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
.text {
}
</style>
