<template>
  <section class="section section--h font-scale row row--2" :class="data.classes">
    <div class="col" v-if="textRight">
      <img :src="data.image.src" alt="" class="img-fill">
    </div>
    <div class="col">
      <div class="content" v-html="markdownToHTML(data.content)"></div>
    </div>
    <div class="col" v-if="!textRight">
      <img :src="data.image.src" alt="" class="img-fill">
    </div>
  </section>
</template>

<script>
import { markdownToHTML } from '@/util/markdown.js'

export default {
  props: {
    data: null
  },
  computed: {
    textRight () {
      return (this.data.classes || '').includes('text-right')
    }
  },
  methods: {
    markdownToHTML
  }
}
</script>
