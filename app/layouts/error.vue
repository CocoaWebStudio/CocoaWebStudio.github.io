<template>
  <div class="nuxt-error">
    <component :is="errorPage" :error="error" />
  </div>
</template>
<script>
import error404 from '~/components/errors/404/404.vue'
import error500 from '~/components/errors/500/500.vue'
export default {
  name: 'NuxtError',
  layout: 'default', // optional
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    errorPage(res) {
      // eslint-disable-next-line
      console.log('status', res)
      if (res.error.statusCode === 404) {
        return error404
      }
      // catch everything else
      return error500
    }
  }
}
</script>
