<template lang="pug">
  b-container.py-2.gb-light
    b-row
      b-col( v-for="image in imageSections"
        :key="image.id",
        sm="6",
        md="3",
        cols="6"

      )
        b-img(
          :alt="image.name",
          thumbnail,
          fluid,
          v-lazy="image.image",
          height="100"
        )
</template>

<script>
export default {
  props: {
    imageSections: {
      type: Array,
      required: true
    }
  }
}
</script>
