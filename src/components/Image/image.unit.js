import Image from './Image.vue'

describe('@components/Image', () => {
  it('renders its content', () => {
    const { element } = mount(Image, {
      propsData: {
        src: '',
      },
    })
    expect(element.tagName).toEqual('img')
  })
})
