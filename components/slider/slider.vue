<template src="./slider.pug" />
<script>
export default {
  props: {
    sliders: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>
<style src="./slider.scss" lang="scss" scoped />
