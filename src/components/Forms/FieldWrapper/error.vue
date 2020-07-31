<template>
  <transition name="ds-input-error">
    <div v-show="!!error" class="ds-input-error">
      {{ error }}
    </div>
  </transition>
</template>

<script>
/**
 * @version 1.0.0
 * @private
 */
export default {
  name: 'InputError',
  props: {
    error: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>
