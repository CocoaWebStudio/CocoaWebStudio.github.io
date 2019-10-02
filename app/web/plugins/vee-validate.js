import { extend } from 'vee-validate'
import { required, min, max, email } from 'vee-validate/dist/rules'

// Add the rules you need.
extend('required', {
  ...required,
  message: 'This field is required'
})
extend('min', min)
extend('max', max)
extend('email', email)
