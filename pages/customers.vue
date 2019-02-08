<template lang="pug">
  .container
    .row
      .col.text-center
        h1.title Customers Smarensol
</template>
<script>

export default {
  name: 'customers',
   head() {
    return {
      title: 'Smarensol',
      meta: [
        { hid: 'description', name: 'description', content: this.$t('welcome') },
        { property: "og:title", name: 'about', content: this.$t('description') },
        { property: "og:image", content="http://euro-travel-example.com/thumbnail.jpg" },
        { property: "og:url", content="http://euro-travel-example.com/index.htm" }
      ]
    }
  }
}
</script>
<style src="./customers.scss" lang="scss" scoped />
