<i18n src="./popup.json" />
<template src="./popup.pug" lang="pug" />
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
        email: ''
      }
    }
  },
  $_veeValidate: {
    validator: 'new' // give me my own validator scope.
  },
  methods: {
    clear() {
      this.form.name = ''
      this.form.email = ''
    },
    handleOk(evt) {
      // Prevent modal from closing
      evt.preventDefault()
      if (!this.form.name) {
        alert('Please enter your name')
      } else {
        this.handleSubmit()
      }
    },
    handleSubmit() {
      this.names.push(this.name)
      this.clear()
      this.$refs.modal.hide()
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
