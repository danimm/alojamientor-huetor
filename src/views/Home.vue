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
      Slide1: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/slides%2FSlide1.jpg?alt=media&token=fb4274c0-fa09-4ed4-8f0c-d93154dcb1fb',
      Slide2: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/slides%2FSlide2.jpg?alt=media&token=b7c27705-23e8-4a99-8ac6-8068e643386c',
      Slide3: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/slides%2FSlide3.jpg?alt=media&token=21ce07b7-528a-4d74-8d93-2d3511c61715',
      Image1: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage1.JPG?alt=media&token=248ab0a9-bcda-4c97-9cd3-c55575236369',
      Image2: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage2.JPG?alt=media&token=8e846eb0-c9d2-4311-af38-8032ce2c6faa',
      Image3: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage3.jpg?alt=media&token=0a7a27d1-6ed6-4118-99ea-ea9ef0b497b2',
      Image4: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage4.jpg?alt=media&token=3f98b4d8-3469-4d70-a143-bad874add1f0',
      Image7: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage7.JPG?alt=media&token=bab52def-ba59-4c40-97f7-d40917ec38c6',
      Image10: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage10.JPG?alt=media&token=e188e884-15fa-4748-9e03-982feed9f730',
      Image11: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage11.JPG?alt=media&token=28d2f2ff-8705-45fe-b771-6be8e5ff4d76',
      Image12: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage12.jpg?alt=media&token=ad6d81a1-74df-4817-aecc-031c1ce3690b',
      Image13: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage13.JPG?alt=media&token=89b4bc50-6c39-4eb6-ad81-afd20c310815'
    }
  },
  created() {
    // Slides
    // refStorageSlide.child("Slide1.jpg").getDownloadURL().then( url => this.Slide1 = url ),
    // refStorageSlide.child("Slide2.jpg").getDownloadURL().then( url => this.Slide2 = url ),
    // refStorageSlide.child("Slide3.jpg").getDownloadURL().then( url => this.Slide3 = url ),

    // Images
    // refStorageImages.child("Image1.JPG").getDownloadURL().then( url => this.Image1 = url ),
    // refStorageImages.child("Image2.JPG").getDownloadURL().then( url => this.Image2 = url ),
    // refStorageImages.child("Image3.jpg").getDownloadURL().then( url => this.Image3 = url ),
    // refStorageImages.child("Image4.jpg").getDownloadURL().then( url => this.Image4 = url ),
    // refStorageImages.child("Image5.JPG").getDownloadURL().then( url => this.Image5 = url ),
    // refStorageImages.child("Image6.JPG").getDownloadURL().then( url => this.Image6 = url ),
    // refStorageImages.child("Image7.JPG").getDownloadURL().then( url => this.Image7 = url ),
    // refStorageImages.child("Image8.JPG").getDownloadURL().then( url => this.Image8 = url ),
    // refStorageImages.child("Image10.JPG").getDownloadURL().then( url => this.Image10 = url ),
    // refStorageImages.child("Image11.JPG").getDownloadURL().then( url => this.Image11 = url ),
    // refStorageImages.child("Image12.jpg").getDownloadURL().then( url => this.Image12 = url ),
    // refStorageImages.child("Image13.JPG").getDownloadURL().then( url => this.Image13 = url )
  }
}
</script>
