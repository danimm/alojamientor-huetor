<template lang="pug">
  main
    ah-main(
      :Slide1="Slide1",
      :Slide2="Slide2",
      :Slide3="Slide3",
    )
    ah-intro(
      :Image1="Image1",
      :Image2="Image2",
      :Image3="Image3",
    )
    ah-description
    ah-offer(
      :Image4="Image4",
      :Image7="Image7",
      :Image10="Image10",
    )
    ah-rooms(
      :Image10="Image10",
      :Image11="Image11",
      :Image12="Image12",
      :Image13="Image13",
    )
</template>

<script>
// @ is an alias to /src
//firebase
import firebase from 'firebase/app'
import 'firebase/storage'
let refStorageSlide = firebase.storage().ref("slides")
let refStorageImages = firebase.storage().ref("images")

// Components
import AhMain from '@/components/home/AhMain.vue'
import AhIntro from '@/components/home/AhIntro.vue'
import AhDescription from '@/components/home/AhDescription.vue'
import AhOffer from '@/components/home/AhOffer.vue'
import AhRooms from '@/components/home/AhRooms.vue'

export default {
  components: { AhMain, AhIntro, AhDescription, AhOffer, AhRooms },
  name: 'home',
  data() {
    return {
      Slide1: '',
      Slide2: '',
      Slide3: '',
      Image1: '',
      Image2: '',
      Image3: '',
      Image4: '',
      Image7: '',
      Image10: '',
      Image11: '',
      Image12: '',
      Image13: ''
    }
  },
  created() {
    // Slides
    refStorageSlide.child("Slide1.jpg").getDownloadURL().then( url => this.Slide1 = url ),
    refStorageSlide.child("Slide2.jpg").getDownloadURL().then( url => this.Slide2 = url ),
    refStorageSlide.child("Slide3.jpg").getDownloadURL().then( url => this.Slide3 = url ),

    // Images
    refStorageImages.child("Image1.JPG").getDownloadURL().then( url => this.Image1 = url ),
    refStorageImages.child("Image2.JPG").getDownloadURL().then( url => this.Image2 = url ),
    refStorageImages.child("Image3.jpg").getDownloadURL().then( url => this.Image3 = url ),
    refStorageImages.child("Image4.jpg").getDownloadURL().then( url => this.Image4 = url ),
    refStorageImages.child("Image5.JPG").getDownloadURL().then( url => this.Image5 = url ),
    refStorageImages.child("Image6.JPG").getDownloadURL().then( url => this.Image6 = url ),
    refStorageImages.child("Image7.JPG").getDownloadURL().then( url => this.Image7 = url ),
    refStorageImages.child("Image8.JPG").getDownloadURL().then( url => this.Image8 = url ),
    refStorageImages.child("Image10.JPG").getDownloadURL().then( url => this.Image10 = url ),
    refStorageImages.child("Image11.JPG").getDownloadURL().then( url => this.Image11 = url ),
    refStorageImages.child("Image12.jpg").getDownloadURL().then( url => this.Image12 = url ),
    refStorageImages.child("Image13.JPG").getDownloadURL().then( url => this.Image13 = url )
  }
}
</script>
