<i18n src="./location.json"></i18n>
<template lang="pug">
  .container-fluid
    .row
      .col
        iframe(
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d996.748257174892!2d-79.89156349797865!3d-2.156345485291151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sguayaquil+torres+del+mall+del+sol!5e0!3m2!1ses!2sec!4v1549295057345",
            width="100%",
            height="500",
            frameborder="0"
            style="border:0"
            allowfullscreen
          )
</template>
<style src="./location.scss" lang="scss" scoped />
