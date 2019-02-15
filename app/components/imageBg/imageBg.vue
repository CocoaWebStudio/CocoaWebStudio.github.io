<template lang="pug">
  div
    b-card(overlay v-for="image in images"
      :key="image.id"
      :img-src="image.url"
      img-alt="Customers smarensol"
      )
</template>
<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  }
}
</script>
