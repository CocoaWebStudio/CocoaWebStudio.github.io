<template src="./footerSection.pug" />

<script>
export default {
  name: 'FooterSection',
  components: {
    SocialNetworks: () =>
      import('~/components/socialNetworks/socialNetworks.vue')
  },
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style src="./footerSection.scss" lang="scss" scoped />
