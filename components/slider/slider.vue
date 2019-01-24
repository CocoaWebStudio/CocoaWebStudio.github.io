<template src="./slider.pug" />
<script>
import smarensol from '~/assets/images/smarensol.jpg'
import energy from '~/assets/images/energy.jpg'
import industry from '~/assets/images/industry.jpg'
import oil from '~/assets/images/oil.jpg'

export default {
  data() {
    return {
      smarensol: smarensol,
      energy: energy,
      industry: industry,
      oil: oil,
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
<style src="./slider.scss" lang="scss" />
