<template lang="pug">
  div
    navMenu
    nuxt
    footerSection.col.w-100.text-success
</template>
<script>
import navMenu from '~/components/navMenu/navMenu'
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
