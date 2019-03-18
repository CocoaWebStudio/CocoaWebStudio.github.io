import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate, {
  inject: false,
  // Important for bootstrap-vue
  fieldsBagName: 'veeFields'
})
