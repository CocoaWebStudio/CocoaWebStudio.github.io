<template lang="pug">
  include navMenu.pug
</template>
<script>
import Popup from '~/components/popup/popup.vue'

export default {
  name: 'NavMenu',
  components: {
    Popup
  },
  data() {
    return {
      imgHeight: 0,
      widthScreen: 0
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.Scroll)
    window.addEventListener('resize', this.Resize)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.Scroll)
    window.removeEventListener('resize', this.Resize)
  },
  mounted() {
    this.widthScreen = document.body.clientWidth
    this.bigHeight()
  },
  methods: {
    Scroll() {
      if (window.scrollY > 0) {
        this.imgHeight = window.innerWidth > 600 ? 65 : 45
      } else {
        this.bigHeight()
      }
    },
    Resize() {
      this.widthScreen = document.body.clientWidth
      this.bigHeight()
    },
    bigHeight() {
      if (this.widthScreen > 1430) {
        this.imgHeight = 80
      } else if (this.widthScreen > 1255 && this.widthScreen < 1429) {
        this.imgHeight = 75
      } else if (this.widthScreen > 990 && this.widthScreen < 1254) {
        this.imgHeight = 60
      } else if (this.widthScreen > 300 && this.widthScreen < 899) {
        this.imgHeight = 50
      } else {
        this.imgHeight = 85
      }
    }
  }
}
</script>
<style scoped>
a:hover {
  border-bottom: 1px solid #020bfd;
  line-height: 1.3em;
}

.flag {
  max-width: 25%;
}
</style>
