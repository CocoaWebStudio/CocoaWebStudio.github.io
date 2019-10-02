<template lang="pug">
  .row.no-gutters.bg(:style="styles")
    slot
</template>
<script>
export default {
  props: {
    styles: {
      type: Object,
      required: false,
      default() {
        return {
          backgroundColor: '#f7931e'
        }
      }
    }
  }
}
</script>
