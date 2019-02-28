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
    return {}
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
      success: false,
      error: false
    }
  },
  $_veeValidate: {
    validator: 'new' // give me my own validator scope.
  },
  methods: {
    send() {
      this.$axios
        .post('/contact-us', this.form, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          console.log('success', res)
          this.success = true
          this.error = false
          this.onReset()
        })
        .catch(e => {
          console.log('error', e.response)
          this.error = true
          this.success = false
        })
    },
    onReset() {
      /* Reset our form values */
      this.form.email = ''
      this.form.name = ''
      this.form.phone = ''
      this.form.msg = ''
      this.form.recaptcha = ''
      this.$validator.reset()
    },
    onSubmit() {
      this.$validator.validateAll().then(res => {
        if (res) {
          this.$refs.contactRecaptcha.execute()
        }
      })
    },
    onCaptchaVerified(recaptchaToken) {
      this.status = 'submitting'
      this.$refs.contactRecaptcha.reset()
      this.form.recaptcha = recaptchaToken
      this.send()
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
      this.$refs.contactRecaptcha.reset()
    }
  }
}
</script>
<style src="./contactForm.scss" lang="scss" scoped></style>
