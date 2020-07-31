<template>
  <FieldWrapper>
    <div
      class="ds-radio"
      :tabindex="tabindex"
      @keydown.self.down.prevent="pointerNext"
      @keydown.self.up.prevent="pointerPrev"
    >
      <component
        :is="buttons ? 'ds-button' : 'div'"
        v-for="option in options"
        :key="option[labelProp] || option"
        class="ds-radio-option"
        :class="[isSelected(option) && `ds-radio-option-is-selected`]"
        :primary="buttons && isSelected(option)"
        @click="handleSelect(option)"
      >
        <span v-if="!buttons" class="ds-radio-option-mark" />
        <span class="ds-radio-option-label">
          <!-- @slot Slot to provide custom option items -->
          <slot name="option" :option="option">
            {{ option[labelProp] || option }}
          </slot>
        </span>
      </component>
    </div>
  </FieldWrapper>
</template>

<script>
import FieldWrapper from '@components/Forms/FieldWrapper/index.vue'
// eslint-disable-next-line import/no-relative-parent-imports
import multiinputMixin from './../Input/multiinput'
// eslint-disable-next-line import/no-relative-parent-imports
import inputMixin from './../Input/Input.js'

/**
 * Used for letting the user choose one value from a set of options.
 * @version 1.0.0
 */
export default {
  name: 'InputRadio',
  components: {
    FieldWrapper,
  },
  mixins: [inputMixin, multiinputMixin],
  props: {
    /**
     * Whether the input should be options should be buttons
     */
    buttons: {
      type: Boolean,
      default: false,
    },
    /**
     * The select options.
     */
    options: {
      type: Array,
      default() {
        return []
      },
    },
    /**
     * The prop to use as the label when options are objects
     */
    labelProp: {
      type: String,
      default: 'label',
    },
  },
  data() {
    return {
      pointer: 0,
    }
  },
  computed: {
    pointerMax() {
      return this.options.length - 1
    },
  },
  watch: {
    pointerMax(max) {
      if (max < this.pointer) {
        this.$nextTick(() => {
          this.pointer = max
        })
      }
    },
  },
  methods: {
    handleSelect(option) {
      this.selectOption(option)
    },
    pointerPrev() {
      if (this.pointer === 0) {
        this.pointer = this.pointerMax
      } else {
        this.pointer--
      }
      this.selectPointerOption()
    },
    pointerNext() {
      if (this.pointer === this.pointerMax) {
        this.pointer = 0
      } else {
        this.pointer++
      }
      this.selectPointerOption()
    },
    selectPointerOption() {
      this.handleSelect(this.options[this.pointer])
    },
  },
}
</script>

<style lang="scss" src="./styles.scss"></style>

<docs src="./doc.md"></docs>
