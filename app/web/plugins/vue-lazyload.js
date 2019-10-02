import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
  listenEvents: ['scroll', 'transitionend'],
  // set observer to true
  observer: true,

  // optional
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  }
})
