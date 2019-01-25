<template lang="pug">
  .home
    navMenu
    .container-fluid
      .row
        .col.text-center.title-box
          h3.title WE ARE SPECIALISTS PROVIDING EQUIPMENT AND ELECTRICAL SUPPLIES
    slider(:sliders="sliders")
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
  },
  data() {
    return {
      sliders: [
        {id:0,title:'smarensol', url:'/images/sliderSmarensolLogo.jpg'},
        {id:1,title: 'energy' , url:'/images/energy.jpg'},
        {id:2,title: 'industry' , url:'/images/industry.jpg'},
        {id:3,title: 'oil' , url:'/images/oil.jpg'}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.title-box{
  background-color:  #0002F5;
  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: #ffffff;
    letter-spacing: 1.5px;
    padding-top: 10px;
  }
}


.subtitle {
  font-weight: 300;
  font-size: 30px;
  color: #526488;
  word-spacing: 1px;
  padding-bottom: 15px;
}
</style>
s
