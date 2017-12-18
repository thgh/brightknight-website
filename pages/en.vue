<template>
  <section class="content-container" v-if="page">
    <block v-for="block in page.blocks" :data="block" :key="block['@id']" />
  </section>
</template>

<script>
export default {
  data: () => ({ page: {} }),
  asyncData: async ({ app, params, payload }) => {
    return {
      page: await app.$content('/').get('en') || payload
    }
  },
  head () {
    return {
      title: this.page.title
    }
  }
}
</script>