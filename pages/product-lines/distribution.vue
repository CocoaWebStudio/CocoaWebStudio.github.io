<template lang="pug">
  .distribution
    navMenu
    .container
      .row
        .col.text-center
          h1.title Distribution Smarensol
          br
      .jumbotron
        gallery
</template>
<script>
import navMenu from '~/components/nav/navMenu.vue'
import gallery from '~/components/gallery/gallery.vue'

export default {
  name: 'Distribution',
  components: {
    navMenu,
    gallery
  }
}
</script>
