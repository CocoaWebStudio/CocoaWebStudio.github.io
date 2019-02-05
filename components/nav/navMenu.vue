<template src="./navMenu.pug"></template>
<script>
import popup from '~/components/popup/popup.vue'

  export default {
    name: 'NavMenu',
    components: {
     popup
    },
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
        imgHeight: 80,
        icon: 35
      }
    }
  }
</script>
<style scoped>
  a:hover {
    border-bottom: 1px solid #020bfd;
    line-height: 1.3em;
}
</style>
