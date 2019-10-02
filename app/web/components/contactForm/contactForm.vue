<i18n src="./contactForm.json"></i18n>
<template lang="pug">
 include contactForm.pug
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import BTextInputWithValidation from '~/components//inputValidation/BTextInputWithValidation.vue'
import BTextAreaInputWithValidation from '~/components/inputValidation/BTextAreaInputWithValidation.vue'

export default {
  name: 'ContactForm',
  components: {
    VueRecaptcha: () => import('vue-recaptcha'),
    WaitIcon: () => import('~/components/waitIcon/waitIcon.vue'),
    ValidationObserver,
    BTextInputWithValidation,
    BTextAreaInputWithValidation
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
      waiting: false,
      success: false,
      error: false,
      response: ''
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
        .then((res) => {
          this.success = true
          this.error = false
          this.onReset()
          this.response = res.data.sendEmail
        })
        .catch((e) => {
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
    async onSubmit() {
      const isValid = await this.$refs.observer.validate()
      if (!isValid) {
        console.log('nope!')
      } else {
        this.$refs.contactRecaptcha.execute()
      }
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
    onCaptchaExpired() {
      this.$refs.contactRecaptcha.reset()
    }
  }
}
</script>
<style src="./contactForm.scss" lang="scss" scoped></style>
