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
        LogoWhite: '',
        LogoDark: '',
        Phone: '',
        Home: '',
        Mail: '',
        Image16: '',
        Image17: '',
        Image18: '',
        Image19: '',
        Image20: '',
        Image21: '',
        Image22: '',
        Image23: '',
        Image24: ''
      }
    },
    created() {
      addEventListener("load", () => {
          this.isLoaded = true
        }),

      // Images
      refStorageImages.child("Image16.jpg").getDownloadURL().then( url => this.Image16 = url ),
      refStorageImages.child("Image17.JPG").getDownloadURL().then( url => this.Image17 = url ),
      refStorageImages.child("Image18.JPG").getDownloadURL().then( url => this.Image18 = url ),
      refStorageImages.child("Image19.jpg").getDownloadURL().then( url => this.Image19 = url ),
      refStorageImages.child("Image20.JPG").getDownloadURL().then( url => this.Image20 = url ),
      refStorageImages.child("Image21.jpg").getDownloadURL().then( url => this.Image21 = url ),
      refStorageImages.child("Image22.JPG").getDownloadURL().then( url => this.Image22 = url ),
      refStorageImages.child("Image23.JPG").getDownloadURL().then( url => this.Image23 = url ),
      refStorageImages.child("Image24.JPG").getDownloadURL().then( url => this.Image24 = url ),

      // Icons
      refStorageIcons.child("Logo-Dark.svg").getDownloadURL().then( url => this.LogoDark = url ),
      refStorageIcons.child("Logo-White.svg").getDownloadURL().then( url => this.LogoWhite = url ),
      refStorageIcons.child("phone.svg").getDownloadURL().then( url => this.Phone = url ),
      refStorageIcons.child("home.svg").getDownloadURL().then( url => this.Home = url ),
      refStorageIcons.child("mail.svg").getDownloadURL().then( url => this.Mail = url )
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

