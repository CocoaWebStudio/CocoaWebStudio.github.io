<template src="./footerSection.pug" />

<script>
import socialNetworks from '~/components/socialNetworks/socialNetworks.vue'

export default {
  name: 'FooterSection',
  components: {
    socialNetworks
  },
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style src="./footerSection.scss" lang="scss" scoped />
