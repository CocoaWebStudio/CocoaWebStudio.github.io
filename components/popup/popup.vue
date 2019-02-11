<i18n src="./popup.json"></i18n>
<template lang="pug">
  div
    b-modal(id="modalPrevent"
      ref="modal"
      title= "Smarensol Brochure"
      @oks="handleOk"
      @shown="clear"
     )
      form(@submit.stop.prevent="handleSubmit")
        b-form-group(id="exampleInputGroup1"
          label-for="exampleInput1"
         ) {{ $t('email') }}
          b-form-input(id="exampleInput1"
            type="email"
            v-model="email"
            required
          )
        b-form-group(id="exampleInputGroup2"
          label-for="exampleInput2"
         ) {{ $t('name') }}
          b-form-input(id="exampleInput2"
            type="text"
            v-model="name"
            required
          )
</template>
<script>
export default {
  name: 'Popup',
  data() {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    clear() {
      this.name = ''
      this.email = ''
    },
    handleOk(evt) {
      // Prevent modal from closing
      evt.preventDefault()
      if (!this.name) {
        alert('Please enter your name')
      } else {
        this.handleSubmit()
      }
    },
    handleSubmit() {
      this.names.push(this.name)
      this.clear()
      this.$refs.modal.hide()
    }
  }
}
</script>
