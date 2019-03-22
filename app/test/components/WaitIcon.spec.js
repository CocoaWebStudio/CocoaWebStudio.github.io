import { shallowMount } from '@vue/test-utils'
import WaitIcon from '~/components/WaitIcon/WaitIcon.vue'

describe('NavMenu component', () => {
  let cmp
  
  beforeEach(() => {
    cmp = shallowMount(WaitIcon, {
      props: {
        show:true
      }
    })
  })
  
  it('is a Vue instance', () => {
    // Within cmp.vm, we can access all Vue instance methods
    expect(cmp.isVueInstance()).toBeTruthy()
  })
  
  it("has the expected html structure", () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
