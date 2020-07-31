import InputRadio from './index.vue'

describe('InputRadio.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(InputRadio)
    expect(wrapper.element).toMatchSnapshot()
  })
})
