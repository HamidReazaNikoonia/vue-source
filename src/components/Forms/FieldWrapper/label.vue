<template>
  <label v-show="!!label" class="ds-input-label">
    {{ label }}
  </label>
</template>

<script>
/**
 * @version 1.0.0
 * @private
 */
export default {
  name: 'InputLabel',
  props: {
    label: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>
