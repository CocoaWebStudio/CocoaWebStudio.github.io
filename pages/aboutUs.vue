<template lang="pug">
  .about
    navMenu
    .container
     h1.title ABOUT US?
     p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet semper felis, eget scelerisque ante. Phasellus tincidunt lectus id purus tempus, nec faucibus lacus finibus. Integer eu dictum ante. Aliquam quam mi, consectetur vel augue a, sagittis ornare urna. Suspendisse feugiat mi velit, et rhoncus metus commodo ullamcorper. Maecenas et ornare magna, eu euismod neque. Etiam sodales vitae orci a elementum. Nulla rhoncus pretium enim. Nunc aliquet dolor urna, bibendum ultrices nulla auctor non. Quisque iaculis condimentum ex eget consectetur. Suspendisse quis mi vitae odio consectetur ornare. Suspendisse tempus mauris a fermentum laoreet.
     p Integer auctor mi at tincidunt fermentum. Proin id lectus sit amet enim lobortis bibendum. Nulla sit amet nisi diam. Nullam turpis ligula, dignissim sed blandit sit amet, vulputate in felis. Suspendisse venenatis mi eget erat imperdiet, accumsan condimentum dolor semper. Curabitur a dui tincidunt, ornare metus aliquam, semper augue. Sed ultricies lacus sed dictum feugiat. Cras varius nec nisi a cursus. Phasellus convallis ligula urna, vel blandit metus rhoncus quis. Aliquam sagittis ornare turpis id sagittis. Fusce vitae risus euismod, volutpat felis eu, euismod neque. Donec nibh tortor, semper eu volutpat sit amet, laoreet ut nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
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
