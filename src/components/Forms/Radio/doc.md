# Basic usage

```html
<InputRadio :options="['blue', 'red', 'green']" />
```

## Usage with label

```html
<InputRadio label="Color" :options="['blue', 'red', 'green']" />
```

## Bind to a value

Use v-model to bind a value to the select input.

```html
<template>
  <div>
    <InputRadio
      v-model="color"
      :options="['blue', 'red', 'green']"
      placeholder="Color ..."
    ></InputRadio>
    <text>Your color: {{ color }}</text>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        color: 'blue',
      }
    },
  }
</script>
```

## Style variations

```html
<InputRadio label="Color" :options="['blue', 'red', 'green']" buttons />
```

## Validation

We use [async-validator](https://github.com/yiminghe/async-validator) schema for validation.

If you need to validate more than one field it is better to use the form component.

```html
<template>
  <div>
    <InputRadio
      v-model="color"
      :options="['blue', 'red', 'green']"
      :schema="{type: 'enum', enum: ['green'], message: 'Please choose green :)' }"
      placeholder="Color ..."
    />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        color: '',
      }
    },
  }
</script>
```
