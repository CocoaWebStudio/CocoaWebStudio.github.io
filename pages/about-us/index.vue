<i18n src="./content.json" ></i18n>
<template lang="pug">
  .container
    h1.title {{ $t('about-us') }}
    .row
      .col
        p.blockquote {{ $t('description') }}
    .row
      .col
        h2.title {{ $t('mission') }}
        p.blockquote {{ $t('mission-content') }}
      .col
        h2.title {{ $t('vision') }}
        p.blockquote {{ $t('vision-content') }}
    .row
      .col.center-tex
        h2.title  {{ $t('values') }}
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
  name: 'about-us',
}
</script>
<style src="./about-us.scss" lang="scss" scoped/>
