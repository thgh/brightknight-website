<template>
  <section class="section row row--2">
    <div class="col" v-if="textRight">
      <slot name="img"></slot>
    </div>
    <div class="col">
      <div class="content">
        <slot name="text"></slot>
      </div>
    </div>
    <div class="col" v-if="!textRight">
      <slot name="img"></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    img: null,
    textRight: null
  }
}  
</script>
