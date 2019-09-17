<template lang="pug">
  b-container.py-2.gb-light
    b-row
      b-col( v-for="image in imageTextSections"
        :key="image.id",
        sm="6",
        md="4",
        cols="6"

      )
        b-img(
          :alt="image.name",
          thumbnail,
          fluid,
          v-lazy="image.image",
          height="100"
        )
        b-col(sm="12")
          h4 {{$t(image.text)}}
</template>
<script>
export default {
  props: {
    imageTextSections: {
      type: Array,
      required: true
    }
  }
}
</script>
