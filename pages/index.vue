<template lang="pug">
  .home
    navMenu
    slider
    .container
      .row
        h1.title Welcome to Smarensol
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor elit vel augue gravida, et ultricies massa scelerisque. Vivamus cursus semper arcu at sollicitudin. Pellentesque imperdiet metus eu egestas posuere. Nulla odio ligula, congue vel posuere ut, accumsan quis lectus. Aenean velit turpis, iaculis ut suscipit at, luctus eget dolor. Curabitur sed magna vel magna rutrum accumsan. Fusce ultrices felis mauris, vitae porttitor arcu auctor quis. Fusce eget libero laoreet, vestibulum ipsum et, tempus lorem. Nam lacus eros, convallis ornare rhoncus non, aliquet et sem. In at efficitur risus, vitae tempor diam. Donec volutpat nec sem non iaculis. Quisque fringilla eros ligula, in rutrum libero efficitur vel. Cras luctus cursus commodo. Ut euismod, odio vitae suscipit tristique, lorem turpis ultrices purus, at iaculis dolor turpis in tortor. Aliquam laoreet nunc ante, ultricies feugiat nulla congue eu.
        p Etiam ut eros non turpis imperdiet rhoncus. Vestibulum viverra dolor id libero sollicitudin faucibus. Curabitur vehicula sollicitudin est sed suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam id felis lacus. Aenean hendrerit ex nec aliquam auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed massa tellus. Aliquam fringilla nisl risus, in ultrices sapien porttitor id.
</template>

<script>
import Logo from '~/components/Logo.vue'
import navMenu from '~/components/nav/navMenu.vue'
import slider from '~/components/slider/slider.vue'

export default {
  components: {
    Logo,
    navMenu,
    slider
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
