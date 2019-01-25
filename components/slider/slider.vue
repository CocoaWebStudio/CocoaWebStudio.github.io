<template src="./slider.pug" />
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      images: [
        {title:'smarensol', url:'~/assets/images/smarensol.jpg'},
        {title: 'energy' , url:'~/assets/images/energy.jpg'},
        {title: 'industry' , url:'~/assets/images/industry.jpg'},
        {title: 'oil' , url:'~/assets/images/oil.jpg'}
      ]
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
