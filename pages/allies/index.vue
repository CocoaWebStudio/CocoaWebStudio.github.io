<template lang="pug">
  .allies
    navMenu
    .container
     h1.title Allies Smarensol
     br
     b-container#alliesImg(fluid class="p-4 bg")
      b-row
        b-col
          b-img(thumbnail fluid src="https://picsum.photos/125/125/?image=35" alt="Thumbnail")
        b-col
          b-img(thumbnail fluid src="https://picsum.photos/125/125/?image=58" alt="Thumbnail")
        b-col
          b-img(thumbnail fluid src="https://picsum.photos/125/125/?image=59" alt="Thumbnail")
        b-col
          b-img(thumbnail fluid src="https://picsum.photos/125/125/?image=54" alt="Thumbnail")
        b-col
          b-img(thumbnail fluid src="https://picsum.photos/125/125/?image=41" alt="Thumbnail")
      br
      b-row
        b-col
          b-img(thumbnail fluid src="https://picsum.photos/125/125/?image=30" alt="Thumbnail")
        b-col
          b-img(thumbnail fluid src="https://picsum.photos/125/125/?image=55" alt="Thumbnail")
        b-col
          b-img(thumbnail fluid src="https://picsum.photos/125/125/?image=60" alt="Thumbnail")
        b-col
          b-img(thumbnail fluid src="https://picsum.photos/125/125/?image=25" alt="Thumbnail")
        b-col
          b-img(thumbnail fluid src="https://picsum.photos/125/125/?image=45" alt="Thumbnail")
      br
      b-row
        b-col
          b-img(thumbnail fluid src="https://picsum.photos/125/125/?image=70" alt="Thumbnail")
        b-col
          b-img(thumbnail fluid src="https://picsum.photos/125/125/?image=56" alt="Thumbnail")
        b-col
          b-img(thumbnail fluid src="https://picsum.photos/125/125/?image=69" alt="Thumbnail")
        b-col
          b-img(thumbnail fluid src="https://picsum.photos/125/125/?image=43" alt="Thumbnail")
        b-col
          b-img(thumbnail fluid src="https://picsum.photos/125/125/?image=38" alt="Thumbnail")

</template>
<script>
import navMenu from '~/components/nav/navMenu.vue'

export default {
  name: 'F',
  components: {
    navMenu
  }
}
</script>
<style lang="scss">
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 1px;
  text-align: center;
}
</style>
