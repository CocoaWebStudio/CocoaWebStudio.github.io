<template lang="pug">
  div.container.mt-4
    .row.mb-4
      .col-7
        .row.mt-5
          .offset-4.col-8
            contactForm
      .col-5
        img.img-fluid(src="~/assets/factoryContacts.png")

</template>

<script>
export default {
  name: 'Contacs',
  components: {
    contactForm: () => import('~/components/contactForm/contactForm.vue')
  }
}
</script>
