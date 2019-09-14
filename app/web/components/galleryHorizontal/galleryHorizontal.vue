<template lang="pug" src="./galleryHorizontal.pug" />

<script>
export default {
  name: 'GalleryHorizontal',
  props: {
    galleryHorizontals: {
      type: Array,
      required: true
    }
  }
}
</script>
<style src="./galleryHorizontal.scss" lang="scss" scoped />
