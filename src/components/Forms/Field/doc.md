# Basic usage

```html
<Field placeholder="Name ..." />
```

## Usage with label

```html
<Field id="name" label="Your name" placeholder="Name ..." />
```

## Disabled

```html
<Field placeholder="Name ..." disabled />
```

## Input types

You can use an input for different types of input.

```html
<template>
  <div>
    <Field v-model="text"></Field>
    <Field v-model="text" type="password"></Field>
    <Field v-model="text" type="textarea" rows="2"></Field>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        text: 'Default text',
      }
    },
  }
</script>
```

## Bind to a value

Use v-model to bind a value to the input.

```html
<template>
  <div>
    <Field v-model="name" placeholder="Name ..."></Field>
    <text>Your name: {{ name }}</text>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: '',
      }
    },
  }
</script>
```

## Validation

We use [async-validator](https://github.com/yiminghe/async-validator) schemas for validation.

If you need to validate more than one field it is better to use the form component.

```html
<template>
  <div>
    <Field
      v-model="name"
      :schema="{ type: 'string', min: 6, message: 'Name must be longer' }"
      placeholder="Name ..."
    />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: '',
      }
    },
  }
</script>
```

## Input sizes

```html
<Field placeholder="Small ..." size="small"></Field>
<Field placeholder="Base ..."></Field>
<Field placeholder="Large ..." size="large"></Field>
```

## Input icons

Add an icon to help the user identify the input type.

```html
<Field placeholder="Search ..." icon="search"></Field>
<Field placeholder="Time ..." icon="clock"></Field>
<Field placeholder="Search ..." icon-right="search"></Field>
<Field placeholder="Search ..." icon="search" size="small"></Field>
<Field placeholder="Search ..." icon="search" size="large"></Field>
```
