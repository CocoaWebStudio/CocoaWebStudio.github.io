<i18n src="./contactForm.json"></i18n>
<template src="./contactForm.pug" />

<script>
import VueRecaptcha from 'vue-recaptcha'
import WaitIcon from '~/components/waitIcon/waitIcon.vue'

export default {
  name: 'ContactForm',
  components: {
    VueRecaptcha,
    WaitIcon
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
      recaptcha_key: process.env.RECAPTCHA_PUBLIC,
      waiting: true,
      success: false,
      error: false
    }
  },
  $_veeValidate: {
    validator: 'new' // give me my own validator scope.
  },
  methods: {
    async send() {
      this.waiting = true
      await this.$axios({
        method: 'post',
        url: '/contact-us',
        timeout: 8000,
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
      this.waiting = false
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
