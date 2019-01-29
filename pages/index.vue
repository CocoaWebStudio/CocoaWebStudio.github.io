<i18n src="./content-index.json"></i18n>
<template lang="pug">
  .home
    .container-fluid
      .row
        .col.text-center.title-box
          h3.title {{ $t('welcome')}}
    slider(:sliders="sliders")
    .container-fluid
      .row
        .col.text-center
          h1.allies {{ $t('allies-us')}}
</template>

<script>
import slider from '~/components/slider/slider.vue'

export default {
  components: {
    slider
  },
  data() {
    return {
      sliders: [
        {id:0,title:'smarensol', url:'/images/sliderSmarensolLogo.jpg'},
        {id:1,title: 'energy' , url:'/images/energy1.jpg'},
        {id:2,title: 'industry' , url:'/images/energy4.jpg'},
        {id:3,title: 'oil' , url:'/images/energy3.jpg'}
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

.allies{
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
