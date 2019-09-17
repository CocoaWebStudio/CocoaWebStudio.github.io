<i18n src="./content-index.json"></i18n>
<template lang="pug" src="./index.pug" />

<script>
import slider from '~/components/slider/slider.vue'
import galleryHorizontal from '@/components/galleryHorizontal/galleryHorizontal.vue'
import background from '@/components/background/background.vue'
import imageSection from '@/components/imageSection/imageSection.vue'
import imageTextSection from '@/components/imageTextSection/imageTextSection.vue'
import contactForm from '~/components/contactForm/contactForm.vue'
import { PhoneIcon, MailIcon } from 'vue-feather-icons'

export default {
  components: {
    slider,
    galleryHorizontal,
    background,
    imageSection,
    imageTextSection,
    contactForm,
    PhoneIcon,
    MailIcon
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
          url: '/images/slider/slider_chacunsonsite_error400.jpg'
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
          url: '/images/works/works_smarensol.jpg',
          name: 'Smarensol S.A',
          description: 'smarensol',
          size: '6',
          link: '//smarensol.com/'
        },
        {
          id: 3,
          url: '/images/works/works_dechezmoi.jpg',
          name: 'De Chez Moí',
          description: 'deChezMoi',
          size: '6',
          link: '//dechezmoi.ca/'
        },
        {
          id: 4,
          url: '/images/works/works_rahua.jpg',
          name: 'Lorem ipsum ',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ante sed mauris accumsan viverra nec nec tortor. In ac facilisis libero, eget dictum est. Suspendisse egestas maximus libero faucibus lacinia',
          size: '6',
          link: '//smarensol.com/'
        },
        {
          id: 5,
          url: '/images/works/works_rahua.jpg',
          name: 'Lorem ipsum ',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ante sed mauris accumsan viverra nec nec tortor. In ac facilisis libero, eget dictum est. Suspendisse egestas maximus libero faucibus lacinia',
          size: '6',
          link: '//smarensol.com/'
        },
        {
          id: 6,
          url: '/images/works/works_rahua.jpg',
          name: 'Lorem ipsum ',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ante sed mauris accumsan viverra nec nec tortor. In ac facilisis libero, eget dictum est. Suspendisse egestas maximus libero faucibus lacinia',
          size: '6',
          link: '//smarensol.com/'
        },
        {
          id: 7,
          url: '/images/works/works_rahua.jpg',
          name: 'Lorem ipsum ',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ante sed mauris accumsan viverra nec nec tortor. In ac facilisis libero, eget dictum est. Suspendisse egestas maximus libero faucibus lacinia',
          size: '6',
          link: '//smarensol.com/'
        }
      ],
      imageSections: [
        {
          id: 0,
          name: 'Vuejs',
          image: '/images/elements/elements_vue_logo.png'
        },
        {
          id: 1,
          name: 'Nuxtjs',
          image: '/images/elements/elements_nuxt_logo.png'
        },
        {
          id: 2,
          name: 'Bootstrap Vue',
          image: '/images/elements/elements_bootrsp_vue_logo.png'
        },
        {
          id: 3,
          name: 'Bootstrap',
          image: '/images/elements/elements_bootstrap_logo.png'
        },
        {
          id: 4,
          name: 'Apollo',
          image: '/images/elements/elements_apollo_logo.png'
        },
        {
          id: 5,
          name: 'GraphQl',
          image: '/images/elements/elements_graphql_logo.png'
        },
        {
          id: 6,
          name: 'Shopify',
          image: '/images/elements/elements_shopify_logo.png'
        },
        {
          id: 7,
          name: 'Magento',
          image: '/images/elements/elements_magento_logo.png'
        },
        {
          id: 8,
          name: 'Magento2',
          image: '/images/elements/elements_magento2_logo.png'
        },
        {
          id: 9,
          name: 'Laravel',
          image: '/images/elements/elements_laravel_logo.png'
        },
        {
          id: 10,
          name: 'Wordpress',
          image: '/images/elements/elements_wordpress_logo.png'
        },
        {
          id: 11,
          name: 'Woo Commerce',
          image: '/images/elements/elements_woo_commerce_logo.png'
        }
      ],
      imageTextSections: [
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
      ]
    }
  }
}
</script>

<style src="./index.scss" lang="scss" scoped />
