<template lang="pug">
  .about
    navMenu
    .container
      h1.title ABOUT US
      .row
        .col
          p.blockquote Smarensol S.A., is a company of the electrical sector, which has more than 15 years of experience in the commercialization of equipment and supplies for the electrical system of Distribution, Transmission and Substations.
      .row
        .col
          h2.title Mission
          p.blockquote Provide solutions for the electricity sector, with highly qualified personnel; in order to generate a good return for the business and contribute to national development.
        .col
          h2.title VISION
          p.blockquote To be leaders in the commercialization of solutions for the national electricity sector, seeking excellence and continuous improvement.
      .row
        .col
          h2.title VALUES
          h4 Honesty
          p Our attitude is directed to fulfill what we promise, we will respect the truth and justice.
          h4 Efficiency
          p We will optimize our internal resources and processes.
          h4 Social Responsability
          p We will contribute to the social and environmental improvement of our stakeholders.
          h4 Teamwork
          p We will cultivate the camaraderie and development of work groups.
          h4 Continuous Improvement
          p We will constantly review our internal processes, in order to reduce the response time to our customers.
</template>
<script>
import navMenu from '~/components/nav/navMenu.vue'

export default {
  name: 'About-us',
  components: {
    navMenu
  }
}
</script>
<style src="./about-us.scss" lang="scss" />
