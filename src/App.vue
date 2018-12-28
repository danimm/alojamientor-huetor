<template lang="pug">
  #app
    .loader-container(:class="{ 'hideLoader': isLoaded }")
      Loader
    .content(:class="{ 'showContent': isLoaded }")
      ah-header(
        :Logo="LogoDark"
      )
      router-view
      ah-footer(
        :Logo="LogoWhite",
        :Phone="Phone",
        :Home="Home",
        :Mail="Mail",
        :Instagram="Instagram",
        :Facebook="Facebook"
      )
</template>

<script>
  // @ is an alias to /src

  //Firebase
  import firebase from 'firebase/app'
  import 'firebase/storage'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBB9QaBMSBv9EeGz9LXiU0d-Kc4CbY6FOw",
    authDomain: "huetor-16ddf.firebaseapp.com",
    databaseURL: "https://huetor-16ddf.firebaseio.com",
    projectId: "huetor-16ddf",
    storageBucket: "huetor-16ddf.appspot.com",
    messagingSenderId: "637749459673"
  };
  firebase.initializeApp(config);

  let refStorageSlide = firebase.storage().ref("slides")
  let refStorageImages = firebase.storage().ref("images")
  let refStorageIcons = firebase.storage().ref("icons")

  let app = document.getElementById('app')

  // Components
  import AhHeader from '@/components/layout/AhHeader.vue'
  import AhFooter from '@/components/layout/AhFooter.vue'
  import Loader from '@/components/misc/Loader.vue'

  export default {
    components: { AhHeader, AhFooter, Loader },
    data() {
      return {
        isLoaded: false,
        isLoading: true,
        LogoWhite: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2FLogo-Huetor-White.png?alt=media&token=29b58139-00a4-49a7-be9d-6bc4079099f5',
        // LogoWhite: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2FLogo-White.svg?alt=media&token=9c265e0a-2c44-4036-9b9a-cd7e7186f0cd',
        LogoDark: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2FLogo-huetor.png?alt=media&token=41b6efd8-5da2-4f47-9913-99171cf7cd7f',
        // LogoDark: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2FLogo-Dark.svg?alt=media&token=ee127443-5d48-4e38-b35b-84a14b0cf47a',
        Phone: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fphone.svg?alt=media&token=4e8a8e25-3b16-4582-94ff-57e30fdfbfd6',
        Home: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fhome.svg?alt=media&token=e1b3f244-7e9f-4574-8fbb-6e5e0d0ef82c',
        Mail: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fmail.svg?alt=media&token=b02d8d8d-5384-4d3f-bb70-92d663220d03',
        Instagram: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Flogo-de-instagram.svg?alt=media&token=fb3bea32-d4f1-4c16-94ef-a8f9d8a5a03d',
        Facebook: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Ffacebook-logo.svg?alt=media&token=e26d9375-35a0-4aa1-ada9-316c7de423d2'
      }
    },
    created() {
      addEventListener("load", () => {
          this.isLoaded = true
        })
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Satisfy');
  #app {
    /* background-color: red; */
    font-family: system-ui;
    font-weight: 400;
    line-height: 1.8;
    font-size: 1rem;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Satisfy', cursive;
  }
  .content {
    display: none;
  }
  .loader-container {
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }
  .showContent{
    display: block;
  }
  .hideLoader{
    display: none;
  }
</style>

