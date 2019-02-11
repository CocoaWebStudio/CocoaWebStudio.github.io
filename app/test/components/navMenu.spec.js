import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import NavMenu from '@/components/navMenu/navMenu.vue'
import BootstrapVue from 'bootstrap-vue'
import i18n from 'nuxt-i18n'

const localVue = createLocalVue()

localVue.use(BootstrapVue)

describe('NavMenu', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NavMenu, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      },
      mocks: {
        $i18n: {
          locale:'es',
          locales: [
            {
         			code: 'en',
         			iso: 'en-US',
         			file: 'en.js',
               name: 'ENGLISH',
               flag: '/images/flags/en-US.png'
         		},
         		{
         			code: 'es',
         			iso: 'es-EC',
         			file: 'es.js',
               name: 'ESPAÑOL',
               flag: 'images/flags/es-EC.png'
         		}
         	]
        },
        switchLocalePath: () => {},
        localePath: (e) => {},
        $t: () => {}
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
