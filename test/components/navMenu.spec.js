import { mount } from '@vue/test-utils'
import NavMenu from '@/components/navMenu/navMenu.vue'

jest.mock

describe('NavMenu', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NavMenu, {
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
        localePath: () => {},
        $t: () => {}
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
