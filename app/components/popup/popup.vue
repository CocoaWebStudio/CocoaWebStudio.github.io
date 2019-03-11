<i18n src="./popup.json" />
<template src="./popup.pug" />
<script>
import VueRecaptcha from 'vue-recaptcha'
export default {
  name: 'Popup',
  components: {
    VueRecaptcha
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        recaptcha: ''
      },
      recaptcha_key: process.env.RECAPTCHA_PUBLIC,
      success: false,
      error: false
    }
  },
  $_veeValidate: {
    validator: 'new' // give me my own validator scope.
  },
  methods: {
    send() {
      this.$axios({
        method: 'post',
        url: '/brochure',
        data: this.form
      })
        .then(res => {
          this.success = true
          this.error = false
          this.onReset()
        })
        .catch(e => {
          this.error = true
          this.success = false
        })
    },
    clear() {
      this.form.name = ''
      this.form.email = ''
      this.form.recaptcha = ''
      this.$validator.reset()
    },
    handleOk(evt) {
      // Prevent modal from closing
      evt.preventDefault()
      this.$validator.validateAll().then(res => {
        if (res) {
          this.$refs.popupRecaptcha.execute()
        }
      })
    },
    onCaptchaVerified(recaptchaToken) {
      this.status = 'submitting'
      this.$refs.popupRecaptcha.reset()
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
      this.$refs.popupRecaptcha.reset()
    }
  }
}
</script>
