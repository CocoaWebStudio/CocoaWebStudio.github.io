import Vue from 'vue'
import {
  Validator,
  install as VeeValidate
} from 'vee-validate/dist/vee-validate.minimal.esm.js'
import { required, min, max, email } from 'vee-validate/dist/rules.esm.js'

// Add the rules you need.
Validator.extend('required', required)
Validator.extend('min', min)
Validator.extend('max', max)
Validator.extend('email', email)

Vue.use(VeeValidate, {
  inject: false,
  // Important for bootstrap-vue
  fieldsBagName: 'veeFields'
})
