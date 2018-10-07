<template lang="pug">
  #app
    Header
    router-view
    ah-footer
</template>

<script>
// @ is an alias to /src
  // import AhHeader from '@/components/layout/AhHeader.vue'
  import Header from '@/components/layout/Header.vue'
  import AhFooter from '@/components/layout/AhFooter.vue'

  export default {
    components: { Header, AhFooter }
  }
</script>

<style scoped>
  #app {
    /* background-color: red; */
  }
</style>

