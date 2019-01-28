<i18n src="./content.json" />
<template lang="pug">
  .about
    navMenu
    .container
      h1.title {{ $t('about-us') }}
      .row
        .col
          p.blockquote {{ $t('description') }}
      .row
        .col
          h2.title {{ $t('mission') }}
          p.blockquote Provide solutions for the electricity sector, with highly qualified personnel; in order to generate a good return for the business and contribute to national development.
        .col
          h2.title VISION
          p.blockquote To be leaders in the commercialization of solutions for the national electricity sector, seeking excellence and continuous improvement.
      .row
        .col.center-tex
          h2.title VALUES
          h4.center Honesty
          p.text Our attitude is directed to fulfill what we promise, we will respect the truth and justice.
          h4.center Efficiency
          p.text We will optimize our internal resources and processes.
          h4.center Social Responsability
          p.text We will contribute to the social and environmental improvement of our stakeholders.
          h4.center Teamwork
          p.text We will cultivate the camaraderie and development of work groups.
          h4.center Continuous Improvement
          p.text We will constantly review our internal processes, in order to reduce the response time to our customers.
</template>
<script>
import navMenu from '~/components/nav/navMenu.vue'

export default {
  name: 'about-us',
  components: {
    navMenu
  }
}
</script>
<style src="./about-us.scss" lang="scss" scoped/>
