<template lang="pug" src="./galleryHorizontal.pug" />

<script>
import Popup from '~/components/popup/popup.vue'

export default {
  name: 'GalleryHorizontal',
  components: {
    Popup
  },
  props: {
    elements: {
      type: Array,
      required: true
    }
  }
}
</script>
<style src="./galleryHorizontal.scss" lang="scss" scoped />
