<template lang="pug">
  b-embed(
    type="iframe"
    aspect="16by9"
    src="/videos/chacunsonsite_test.mov"
    allowfullscreen
    )
</template>
<script>
export default {
  name: 'VideoSection',
  VideoSection: {
    sliders: {
      type: Object,
      required: true
    }
  }
}
</script>
