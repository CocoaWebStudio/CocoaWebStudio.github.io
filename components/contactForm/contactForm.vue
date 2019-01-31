<i18n src="./contactForm.json"></i18n>
<template src="./contactForm.pug" />
<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        telephone: '',
        comentary: ''
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
      this.form.email = ''
      this.form.name = ''
      this.form.telephone = ''
      this.form.comentary = ''
    },
    onReset(evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.name = ''
      this.form.telephone = ''
      this.form.comentary = ''
    }
  }
}
</script>
<style src="./contactForm.scss" lang="scss" scoped>
</style>
