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
        LogoWhite: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2FLogo-White.svg?alt=media&token=9c265e0a-2c44-4036-9b9a-cd7e7186f0cd',
        LogoDark: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2FLogo-Dark.svg?alt=media&token=ee127443-5d48-4e38-b35b-84a14b0cf47a',
        Phone: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fphone.svg?alt=media&token=4e8a8e25-3b16-4582-94ff-57e30fdfbfd6',
        Home: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fhome.svg?alt=media&token=e1b3f244-7e9f-4574-8fbb-6e5e0d0ef82c',
        Mail: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fmail.svg?alt=media&token=b02d8d8d-5384-4d3f-bb70-92d663220d03',
        Image16: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage16.jpg?alt=media&token=65341002-e939-4d96-a800-81b40690af01',
        Image17: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage17.JPG?alt=media&token=f869b8a0-8d0a-452c-a6a5-be2054642131',
        Image18: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage18.JPG?alt=media&token=ea5f6296-00a7-47f2-9a74-123384124767',
        Image19: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage19.jpg?alt=media&token=ec65d1e7-1b7b-4d08-9988-4d1cb5a1ed11',
        Image20: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage20.JPG?alt=media&token=0fe251a5-db49-4332-a232-e06eef2b38bf',
        Image21: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage21.jpg?alt=media&token=6701c268-c35b-407e-8b39-31b0a77cfa93',
        Image22: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage22.JPG?alt=media&token=0cc0ce2c-16d2-404d-a349-e3cb66f26846',
        Image23: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage23.JPG?alt=media&token=08bc4ed2-82ae-488e-af1d-dc8ebc014033',
        Image24: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage24.JPG?alt=media&token=9753fff9-2b99-4ef4-b2a8-1031994a5d56'
      }
    },
    created() {
      addEventListener("load", () => {
          this.isLoaded = true
        })

      // Images
      // refStorageImages.child("Image16.jpg").getDownloadURL().then( url => this.Image16 = url ),
      // refStorageImages.child("Image17.JPG").getDownloadURL().then( url => this.Image17 = url ),
      // refStorageImages.child("Image18.JPG").getDownloadURL().then( url => this.Image18 = url ),
      // refStorageImages.child("Image19.jpg").getDownloadURL().then( url => this.Image19 = url ),
      // refStorageImages.child("Image20.JPG").getDownloadURL().then( url => this.Image20 = url ),
      // refStorageImages.child("Image21.jpg").getDownloadURL().then( url => this.Image21 = url ),
      // refStorageImages.child("Image22.JPG").getDownloadURL().then( url => this.Image22 = url ),
      // refStorageImages.child("Image23.JPG").getDownloadURL().then( url => this.Image23 = url ),
      // refStorageImages.child("Image24.JPG").getDownloadURL().then( url => this.Image24 = url ),

      // Icons
      // refStorageIcons.child("Logo-Dark.svg").getDownloadURL().then( url => this.LogoDark = url ),
      // refStorageIcons.child("Logo-White.svg").getDownloadURL().then( url => this.LogoWhite = url ),
      // refStorageIcons.child("phone.svg").getDownloadURL().then( url => this.Phone = url ),
      // refStorageIcons.child("home.svg").getDownloadURL().then( url => this.Home = url ),
      // refStorageIcons.child("mail.svg").getDownloadURL().then( url => this.Mail = url )
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

