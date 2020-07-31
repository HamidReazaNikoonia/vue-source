<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main.vue'
import InputRadio from '@components/Forms/Radio/index.vue'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, InputRadio },
}
</script>

<template>
  <Layout>
    <InputRadio />
    <h1>Home Page</h1>
    <img src="@assets/images/logo.png" alt="Logo" />
  </Layout>
</template>
