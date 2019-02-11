<template lang="pug">
  div
    nav
    .wraper.d-flex.flex-column
      nuxt.flex-fill
      footerSection.w-100.text-light
</template>
<script>
import nav from '~/components/nav/nav'
import footerSection from '~/components/footerSection/footerSection'

export default {
  components: {
    nav,
    footerSection
  },
  head() {
    return this.$nuxtI18nSeo()
  }
}
</script>
