<template lang="pug">
  b-container(class="p-4 bg-ligh")
    b-row
      //b-col
        b-img(v-for="imageSection in imageSections"
          :key="imageSection.id"
          :img-src="imageSection.url"
          )
      b-col
        b-img(thumbnail fluid src="/images/allies/delta.jpg" alt="Thumbnail")
      b-col
        b-img(thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Thumbnail")
      b-col
        b-img(thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Thumbnail")
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
