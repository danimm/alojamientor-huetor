<template lang="pug">
  #app
    ah-header
    router-view
    ah-footer
</template>

<script>
// @ is an alias to /src
  import AhHeader from '@/components/layout/AhHeader.vue'
  import AhFooter from '@/components/layout/AhFooter.vue'

  export default {
    components: { AhHeader, AhFooter }
  }
</script>

<style scoped>
  #app {
    /* background-color: red; */
  }
</style>

