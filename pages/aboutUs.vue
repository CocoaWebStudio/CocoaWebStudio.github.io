<template lang="pug">
  .about
    navMenu
    .container
     h1 About Smarensol
     br
     br
     tab
</template>
<script>
import navMenu from '~/components/nav/navMenu.vue'
import tab from '~/components/tab/tab.vue'

export default {
  name: 'aboutUs',
  components: {
    navMenu,
    tab
  }
}
</script>
