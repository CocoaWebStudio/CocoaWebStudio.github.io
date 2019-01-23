<template lang="pug">
  .data
    .container
     h1.title Data Institutional to Smarensol
     br
     p Teléfonos: +593 4 2071092 / +593 9 994138795
     p Dirección: Torres del Mall del Sol – Torre B Piso 4
     p Email: ventas@smarensol.com
     p Guayaquil – Ecuador
     location
</template>
<script>
import location from '~/components/location/location.vue'

export default {
  name: 'data',
  components: {
    location
  }
}
</script>
