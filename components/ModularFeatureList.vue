<template>
  <section id="how" class="section section--white font-scale" style="padding: 2em 0;">
    <div class="col" style="font-size: .9em">
      <div class="text-center-sm ">
        <h2>
          {{ data.header.title }}
        </h2>
      </div>
    </div>
    <div class="row row--3" style="overflow: auto;">
      <div class="col" v-for="feature in data.header.features">
        <div class="content">
          <img v-if="feature.image" :src="feature.image"></img>
          <icon v-else :name="feature.icon || 'item'" style="font-size: 16px" />
          <h3 class="feature__header">
            {{ feature.header }}
          </h3>
          <p>
            {{ markdownToHTML(feature.text) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { markdownToHTML } from '@/util/markdown.js'

export default {
  props: {
    data: null
  },
  methods: {
    markdownToHTML
  }
}
</script>

<style>
.feature__header {
  margin: 1rem 0;
  font-weight: normal;
  opacity: .5;
  color: inherit;
}
</style>
