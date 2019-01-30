<template lang="pug">
  div
    navMenu
    .wraper.d-flex.flex-column
      nuxt.flex-fill
      footerSection.w-100.text-light
</template>
<script>
  import navMenu from '~/components/nav/navMenu'
  import footerSection from '~/components/footerSection/footerSection'

  export default {
    components: {
      navMenu,
      footerSection
    },
    head() {
      return this.$nuxtI18nSeo()
    }
  }
</script>
