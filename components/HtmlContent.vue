<template>
  <div class="content">
    <div v-html="filtered"></div>
    <p v-if="email">
      <leave-email :data="email"></leave-email>
    </p>
  </div>
</template>

<script>
import { markdownToHTML, youtubePlugin } from '@/util/markdown.js'

export default {
  props: {
    data: null
  },
  computed: {
    html () {
      const input = this.data.html || markdownToHTML(this.data.content)
      return youtubePlugin(input)
    },
    filtered () {
      return this.html.replace(/<leave-email[^>]+>/g, '')
    },
    email () {
      if (this.html.includes('<leave-email')) {
        return {
          placeholder: getAttribute(this.html, /<leave\-?email.+placeholder="([^"]*)".*\/>/i),
          button: getAttribute(this.html, /<leave\-?email.+button="([^"]*)".*\/>/i)
        }
      }
    }
  },
  methods: {
    markdownToHTML
  }
}

function getAttribute (html, regex) {
  const match = html.match(regex)
  return match && match[1] || ''
}
</script>
