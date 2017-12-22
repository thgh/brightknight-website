<template>
  <section class="section font-scale" :class="classes">
    <div class="col">
      <html-content :data="data" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: null
  },
  computed: {
    classes () {
      return (this.data.header.body_classes || this.data.header.classes || '')
        .split(/\s+/)
        .map(s => 'section--' + s)
        .join(' ')
    }
  }
}
</script>
