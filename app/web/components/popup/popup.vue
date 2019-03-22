<template lang="pug">
  include popup.pug
</template>
<script>
export default {
  name: 'Popup',
  components: {
    VueRecaptcha: () => import('vue-recaptcha'),
    WaitIcon: () => import('~/components/waitIcon/waitIcon.vue')
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        recaptcha: ''
      },
      recaptcha_key: process.env.RECAPTCHA_PUBLIC,
      waiting: false,
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
        url: '/brochure',
        data: this.form
      })
        .then(res => {
          this.success = true
          this.error = false
          this.clear()
        })
        .catch(e => {
          this.error = true
          this.success = false
        })
      this.waiting = false
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
      this.error = false
      this.success = false
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
<i18n src="./popup.json" />
