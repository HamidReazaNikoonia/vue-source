import Field from './Field.vue'

describe('Field.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Field)
    expect(wrapper.element).toMatchSnapshot()
  })
})
