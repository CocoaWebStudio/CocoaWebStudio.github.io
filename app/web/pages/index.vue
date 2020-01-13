<i18n src="./content-index.json"></i18n>
<template lang="pug" src="./index.pug" />

<script>
import { PhoneIcon, MailIcon } from 'vue-feather-icons'

export default {
  name: 'Index',
  components: {
    PhoneIcon,
    MailIcon,
    slider: () => import('~/components/slider/slider.vue'),
    galleryHorizontal: () =>
      import('@/components/galleryHorizontal/galleryHorizontal.vue'),
    separator: () => import('@/components/separator/separator.vue'),
    imageSection: () => import('@/components/imageSection/imageSection.vue'),
    textsGallery: () => import('@/components/textsGallery/textsGallery.vue'),
    contactForm: () => import('~/components/contactForm/contactForm.vue'),
    gallery: () => import('@/components/gallery/gallery.vue')
  },
  data() {
    return {
      sliders: [
        {
          id: 0,
          title: 'chacunsonsite',
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
          url: '/images/slider/slider_chacunsonsite_socialNetworks.jpg'
        }
      ],
      galleryHorizontals: [
        {
          id: 0,
          url: '/images/works/works_rahua.jpg',
          name: 'Rahua',
          description: 'rahua',
          size: '6',
          link: '//rahua.com/'
        },
        {
          id: 1,
          url: '/images/works/works_matte.jpg',
          name: 'Matte CG',
          description: 'matteGc',
          size: '6',
          link: '//matte.cg/'
        },
        {
          id: 2,
          url: '/images/works/works_eps.jpg',
          name: 'EPS S.A',
          description: 'eps',
          size: '6',
          link: '//eps.ec/'
        },
        {
          id: 3,
          url: '/images/works/works_dechezmoi.jpg',
          name: 'De Chez Moí',
          description: 'deChezMoi',
          size: '6',
          link: '//dechezmoi.ca/'
        }
      ],
      imageSections: [
        {
          id: 0,
          name: 'Vuejs',
          image: '/images/technologies/technologies_vue_logo.png'
        },
        {
          id: 1,
          name: 'Nuxtjs',
          image: '/images/technologies/technologies_nuxt_logo.png'
        },
        {
          id: 2,
          name: 'Bootstrap Vue',
          image: '/images/technologies/technologies_bootrsp_vue_logo.png'
        },
        {
          id: 3,
          name: 'Bootstrap',
          image: '/images/technologies/technologies_bootstrap_logo.png'
        },
        {
          id: 4,
          name: 'Apollo',
          image: '/images/technologies/technologies_apollo_logo.png'
        },
        {
          id: 5,
          name: 'GraphQl',
          image: '/images/technologies/technologies_graphql_logo.png'
        },
        {
          id: 6,
          name: 'Shopify',
          image: '/images/technologies/technologies_shopify_logo.png'
        },
        {
          id: 7,
          name: 'Magento',
          image: '/images/technologies/technologies_magento_logo.png'
        },
        {
          id: 8,
          name: 'Magento2',
          image: '/images/technologies/technologies_magento2_logo.png'
        },
        {
          id: 9,
          name: 'Laravel',
          image: '/images/technologies/technologies_laravel_logo.png'
        },
        {
          id: 10,
          name: 'Wordpress',
          image: '/images/technologies/technologies_wordpress_logo.png'
        },
        {
          id: 11,
          name: 'Woo Commerce',
          image: '/images/technologies/technologies_woo_commerce_logo.png'
        }
      ],
      textsGallerys: [
        {
          id: 0,
          text: 'codeLovers',
          image: '/images/services/services_code_lovers.png'
        },
        {
          id: 1,
          text: 'security',
          image: '/images/services/services_data_segurity.png'
        },
        {
          id: 2,
          text: 'seoUx',
          image: '/images/services/services_seo_ux.png'
        },
        {
          id: 3,
          text: 'ui',
          image: '/images/services/services_ui.png'
        },
        {
          id: 4,
          text: 'tools',
          image: '/images/services/services_tools.png'
        }
      ],
      gallerys: [
        {
          id: 0,
          url: '/images/blog/vue-logo.jpg',
          title: 'titleVue',
          description: 'postVue',
          size: '12'
        }
      ]
    }
  },
  head() {
    return {
      title: 'ChacunSonSite',
      meta: [
        {
          property: 'og:title',
          content: this.$t('css')
        },
        {
          property: 'og:description',
          content: this.$t('slogan')
        },
        {
          property: 'og:image',
          content: '~/assets/ChacunsonsiteLogo-sm.jpg'
        },
        { property: 'og:url', content: 'https://chacunsonsite.ca' }
      ]
    }
  }
}
</script>
