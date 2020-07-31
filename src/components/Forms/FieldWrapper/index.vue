<template>
  <div class="ds-form-item" :class="$parentInput.stateClasses">
    <input-label :label="$parentInput.label" :for="$parentInput.id" />
    <slot />
    <input-error :error="$parentInput.error" />
  </div>
</template>

<script>
/**
 * @version 1.0.0
 * @private
 */

import inputError from './error.vue'
import inputLabel from './label.vue'
export default {
  name: 'FieldWrapper',
  components: { inputError, inputLabel },
  inject: ['$parentInput'],
}
</script>

<style lang="scss" src="./styles.scss"></style>
