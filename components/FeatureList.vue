<template>
  <section id="how" class="section section--white" style="padding: 2em 0;">
    <div class="col">
      <h1>
        {{ data.name }}
      </h1>
    </div>
    <div class="row row--3" style="overflow: auto;">
      <div class="col" v-for="feature in data.features">
        <div class="content">
          <img v-if="feature.image" :src="feature.image"></img>
          <icon v-else :name="feature.icon || 'item'" />
          <h2>
            {{ feature.name }}
          </h2>
          <p class="font-normal">
            {{ markdownToHTML(feature.content) }}
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
