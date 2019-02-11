<i18n src="./contactForm.json"></i18n>
<template src="./contactForm.pug" />

<script>
// import axios from 'axios'
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
        telephone: '',
        comentary: ''
      },
      status: '',
      sucessfulServerResponse: '',
      serverError: ''
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
    },
    submit() {
      // this.status = "submitting";
      this.$refs.recaptcha.execute()
    },
    onCaptchaVerified(recaptchaToken) {
      // eslint-disable-next-line
      console.log("it's alive!!")
      const self = this
      self.status = 'submitting'

      self.$refs.recaptcha.reset()
      /*
      axios.post("https://vue-recaptcha-demo.herokuapp.com/signup", {
        email: self.email,
        name: self.name,
        recaptchaToken: recaptchaToken
      }).then((response) => {
        self.sucessfulServerResponse = response.data.message;
      }).catch((err) => {
        self.serverError = getErrorMessage(err);
        //helper to get a displayable message to the user
        function getErrorMessage(err) {
          let responseBody;
          responseBody = err.response;
          if (!responseBody) {
            responseBody = err;
          }
          else {
            responseBody = err.response.data || responseBody;
          }
          return responseBody.message || JSON.stringify(responseBody);
        }
      }).then(() => {
        self.status = "";
      });
      */
    },
    onCaptchaExpired: function() {
      this.$refs.recaptcha.reset()
    }
  }
}
</script>
<style src="./contactForm.scss" lang="scss" scoped></style>
