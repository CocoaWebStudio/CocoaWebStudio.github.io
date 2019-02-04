<i18n src="./content.json" ></i18n>
<template lang="pug">
  .container-fluid(style="background-image: linear-gradient(to bottom right, lightgreen, white);")
    .row
      .col-md-6.offset-md-3
        h1.title.bounce-enter-active {{ $t('about-us') }}
        p.blockquote {{ $t('description') }}
    .row
      .col-md-6
        h2.title.bounce-enter-active {{ $t('mission') }}
        p.blockquote {{ $t('mission-content') }}
      .col-md-6
        h2.title.bounce-enter-active {{ $t('vision') }}
        p.blockquote {{ $t('vision-content') }}
    .row
      .col-md-6.offset-md-3.text-center
        h2.title.bounce-enter-active  {{ $t('values') }}
        h4.center {{ $t('honesty') }}
        p.text  {{ $t('honesty-content') }}
        h4.center {{ $t('efficiency') }}
        p.text {{ $t('efficiency-content') }}
        h4.center {{ $t('social-responsability') }}
        p.text {{ $t('social-responsability-content') }}
        h4.center {{ $t('teamwork') }}
        p.text {{ $t('teamwork-content') }}
        h4.center {{ $t('continuous-improvement') }}
        p.text {{ $t('continuous-improvement-content') }}
</template>
<script>
export default {
  name: 'about-us'
}
</script>
<style src="./about-us.scss" lang="scss" scoped/>
