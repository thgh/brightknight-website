<template>
  <div></div>
</template>

<script>
export default {
  mounted () {
    this.$router.push('/en')
  },
  asyncData: async ({ redirect }) => redirect('en')
}
</script>
