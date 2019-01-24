<template lang="pug">
  .substations
    navMenu
    .container
      .row
        .col.text-center
          h1.title Substations Smarensol
          br
      .jumbotron
        gallery
</template>
<script>
import navMenu from '~/components/nav/navMenu.vue'
import gallery from '~/components/gallery/gallery.vue'

export default {
  name: 'Substations',
  components: {
    navMenu,
    gallery
  }
}
</script>
