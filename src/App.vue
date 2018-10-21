<template lang="pug">
  #app
    Header
    router-view
    Footer(
      :Logo="Logo",
      :Phone="Phone",
      :Home="Home",
      :Mail="Mail",
      :Image16="Image16",
      :Image17="Image17",
      :Image18="Image18",
      :Image19="Image19",
      :Image20="Image20",
      :Image21="Image21",
      :Image22="Image22",
      :Image23="Image23",
      :Image24="Image24",
    )
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/layout/Header.vue'
  import Footer from '@/components/layout/Footer.vue'

  export default {
    components: { Header, Footer },
    data() {
      return {
        Logo: require('@/assets/Logo-White.svg'),
        Phone: require('@/assets/phone.svg'),
        Home: require('@/assets/home.svg'),
        Mail: require('@/assets/mail.svg'),
        Image16: require('@/assets/images/compressed/Image16.jpg'),
        Image17: require('@/assets/images/compressed/Image17.jpg'),
        Image18: require('@/assets/images/compressed/Image18.jpg'),
        Image19: require('@/assets/images/compressed/Image19.jpg'),
        Image20: require('@/assets/images/compressed/Image20.jpg'),
        Image21: require('@/assets/images/compressed/Image21.jpg'),
        Image22: require('@/assets/images/compressed/Image22.jpg'),
        Image23: require('@/assets/images/compressed/Image23.jpg'),
        Image24: require('@/assets/images/compressed/Image24.jpg'),
      }
    }
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

