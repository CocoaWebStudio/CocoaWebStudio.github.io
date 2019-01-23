<template lang="pug">
  .products
    navMenu
    br
    .row
      .col.text-center
         h1.title Products and Services
    br
    .container
      gallery
</template>
<script>
import navMenu from '~/components/nav/navMenu.vue'
import gallery from '~/components/gallery/gallery.vue'

export default {
  name: 'products',
  components: {
    navMenu,
    gallery
  }
}
</script>
