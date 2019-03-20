<i18n src="./content.json"></i18n>
<template src="./about-us.pug" />
<script>
export default {
  name: 'AboutUs',
  head() {
    return {
      title: 'Smarensol - About Us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('description')
        },
        {
          property: 'og:title',
          name: 'title',
          content: 'About Us'
        },
        { property: 'og:url', content: 'https://smarensol.com' }
      ]
    }
  }
}
</script>
<style src="./about-us.scss" lang="scss" scoped />
