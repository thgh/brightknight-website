<template>
  <div class="content-container">
    <block v-for="block in page.children" :data="block" :key="block.id" />
  </div>
</template>

<script>
import { asyncDataPage } from '@/util/content'

export default {
  data: () => ({ page: {} }),
  asyncData: asyncDataPage,
  head () {
    return {
      title: 'BrightKnight'
    }
  }
}
</script>
