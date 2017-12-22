<template>
  <div>
    <my-header/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'
import MyHeader from '~/components/Header.vue'

export default {
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#425b6b' },
      { hid: 'description', content: "Nuxt.js project" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  transition: {
    name: 'page',
    mode: 'in-out'
  },
  components: {
    MyHeader,
    MyFooter,
  }
}
</script>
