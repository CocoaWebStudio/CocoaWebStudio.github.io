<template lang="pug">
  .allies
    navMenu
    .container
     h1.title Allies Smarensol
     br
     image
</template>
<script>
import navMenu from '~/components/nav/navMenu.vue'
import image from '~/components/image/image.vue'

export default {
  name: 'allies',
  components: {
    navMenu,
    image
  }
}
</script>
