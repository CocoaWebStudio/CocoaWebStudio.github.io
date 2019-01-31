<i18n src="./location.json"></i18n>
<template lang="pug">
  .container
    .row
      .col.text-center
        h1.subtitle {{ $t('location') }}
    .row
      .col.text-center
        a(href="#")
          b-img(thumbnail fluid src="/images/location.jpg" alt="Thumbnail")
</template>
<style src="./location.scss" lang="scss" scoped />
