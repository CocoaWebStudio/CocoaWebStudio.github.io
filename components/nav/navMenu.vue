<template src="./navMenu.pug" />
<script>
  export default {
    name: 'NavMenu',
    beforeMount: function () {
      window.addEventListener('scroll', this.Scroll);
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.Scroll);
    },
    methods: {
  		Scroll: function() {
        if (window.scrollY > 0) {
          this.imgHeight = 45
        } else {
          this.imgHeight = 80
        }
  		}
  	},
    data() {
      return {
        imgHeight: 80
      }
    }
  }
</script>
