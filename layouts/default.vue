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
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#425b6b' },
      { hid: 'description', content: "Nuxt.js project" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://www.google-analytics.com/analytics.js', async: true, defer: true }
    ]
  },
  components: {
    MyHeader,
    MyFooter,
  }
}
</script>

<style lang="scss">
@media (min-width: 30rem) {
  .header .col {
    min-height: 120px;
    min-height: 20vh;
  }
  .content-container {
    .section {
      min-height: 400px;
      min-height: 60vh;
      &.row--2 .col {
        min-height: 400px;
        min-height: 60vh;
      }
    }
    .section--bg-brand {
      min-height: 120px;
      min-height: 20vh;
      .col {
        min-height: 120px;
        min-height: 20vh;
      }
    }
  }
}
@media (min-width: 30rem) {
  .content-container {
    .section:nth-child(2) .col:first-child {
      width: 66.666%;
    }
    .section:nth-child(2) .col:last-child {
      width: 33.333%;
    }
  }
}
</style>
