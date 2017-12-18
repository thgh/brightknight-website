<template>
  <div :is="data.type" :data="data"></div>
</template>

<script>
export default {
  props: {
    data: null
  }
}
</script>
