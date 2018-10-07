<template lang="pug">
  #app
    Header
    router-view
    ah-footer
    Footer
</template>

<script>
// @ is an alias to /src
  // import AhHeader from '@/components/layout/AhHeader.vue'
  import Header from '@/components/layout/Header.vue'
  import AhFooter from '@/components/layout/AhFooter.vue'
  import Footer from '@/components/layout/Footer.vue'

  export default {
    components: { Header, AhFooter,Footer }
  }
</script>

<style scoped>
  #app {
    /* background-color: red; */
    font-family: system-ui;
    font-weight: 400;
    line-height: 1.8;
    font-size: 1rem;
  }
</style>

