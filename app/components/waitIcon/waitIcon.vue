<template lang="pug">
  .wait.d-flex(v-if="show")
    .bg-dark.w-100.h-100
    refresh-ccw-icon.rotate.d-block.mx-auto.justify-content-center.align-self-center
</template>

<script>
import { RefreshCcwIcon } from 'vue-feather-icons'

export default {
  name: 'WaitIcon',
  components: {
    RefreshCcwIcon
  },
  props: {
    show: {
      required: true,
      type: Boolean
    }
  }
}
</script>

<style scoped>
.rotate {
  animation: rotation 1.5s infinite linear;
  width: 32px;
  height: auto;
}
.bg-dark {
  opacity: 0.3;
  filter: alpha(opacity=30);
  position: absolute;
  top: 0;
  left: 0;
}
.wait {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

@keyframes rotation {
  from {
    transform: rotate(359deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
