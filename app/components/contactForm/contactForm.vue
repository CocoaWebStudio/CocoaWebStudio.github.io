<i18n src="./contactForm.json"></i18n>
<template src="./contactForm.pug" />

<script>
/* eslint-disable no-console */
import VueRecaptcha from 'vue-recaptcha'

export default {
  components: {
    VueRecaptcha
  },
  head() {
    return {
      script: [
        {
          src:
            'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit',
          async: true,
          defer: true
        }
      ]
    }
  },
  data() {
    return {
      form: {
        email: '',
        name: '',
        phone: '',
        msg: '',
        recaptcha: ''
      },
      status: '',
      test: ''
    }
  },
  $_veeValidate: {
    validator: 'new' // give me my own validator scope.
  },
  methods: {
    onSend() {
      this.$axios
        .post('/contact-us', this.form, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          this.status = 'success'
          this.onReset()
        })
        .catch(e => {
          this.status = 'error'
        })
    },
    onReset(evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.name = ''
      this.form.phone = ''
      this.form.msg = ''
      this.form.recaptcha = ''
    },
    onSubmit() {
      this.$refs.recaptcha.execute()
    },
    onCaptchaVerified(recaptchaToken) {
      this.status = 'submitting'
      this.$refs.recaptcha.reset()
      this.form.recaptcha = recaptchaToken
      this.onSend()
    },
    validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.errors.has(ref)
      }
      return null
    },
    onCaptchaExpired: function() {
      this.$refs.recaptcha.reset()
    }
  }
}
</script>
<style src="./contactForm.scss" lang="scss" scoped></style>
