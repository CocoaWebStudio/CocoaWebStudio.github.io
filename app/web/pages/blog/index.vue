<template lang="pug">
  b-container(fluid)
    b-row(no-gutters)
      b-col.text-center
        h1.title BLOG
    separator.text-primary.py-2
    b-col
      gallery(:gallerys="gallerys")
    separator.text-primary.py-2
</template>
<script>
import gallery from '@/components/gallery/gallery.vue'
import separator from '@/components/separator/separator.vue'
export default {
  name: 'BLOG',
  components: {
    gallery,
    separator
  },
  data() {
    return {
      gallerys: [
        {
          id: 0,
          url: '/images/blog/vue-logo.jpg',
          title: '¿Porque Usamos Vuejs?',
          description: 'postVue',
          size: '12'
        }
      ]
    }
  }
}
</script>
<style src="./blog.scss" lang="scss" scoped />
