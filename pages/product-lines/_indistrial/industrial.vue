<template lang="pug">
  .data
    navMenu
    .container
      .row
        .col.text-center
          h1.title Industrial Smarensol
          br
      .jumbotron
        gallery
</template>
<script>
import navMenu from '~/components/nav/navMenu.vue'
import gallery from '~/components/gallery/gallery.vue'

export default {
  name: 'Data',
  components: {
    navMenu,
    gallery
  }
}
</script>
