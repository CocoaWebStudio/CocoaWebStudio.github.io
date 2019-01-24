<template lang="pug">
  .transmission
    navMenu
    .container
      .row
        .col.text-center
          h1.title Transmission Lines Smarensol
          br
      .jumbotron
       gallery
</template>
<script>
import navMenu from '~/components/nav/navMenu.vue'
import gallery from '~/components/gallery/gallery.vue'

export default {
  name: 'Transmission',
  components: {
    navMenu,
    gallery
  }
}
</script>
