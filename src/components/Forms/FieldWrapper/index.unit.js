import FieldWrapper from './index.vue'

describe('FieldWrapper.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(FieldWrapper, {
      provide: {
        $parentInput() {
          return {}
        },
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
