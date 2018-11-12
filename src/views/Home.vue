<template lang="pug">
  main
    ah-main(
      :Slide1="Slide1",
      :Slide2="Slide2",
      :Slide3="Slide3",
    )
    //- ah-intro(
    //-   :Image1="Image1",
    //-   :Image2="Image2",
    //-   :Image3="Image3",
    //- )
    ah-description
    ah-columns
    ah-rooms(
      :Image9="Image9",
      :Image11="Image11",
      :Image12="Image12",
      :Image13="Image13",
    )
    ah-cards(
      :Image4="Image4",
      :Image7="Image7",
      :Image10="Image10",
    )
    ah-offer
    ah-map
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
import AhCards from '@/components/home/AhCards.vue'
import AhRooms from '@/components/home/AhRooms.vue'
import AhColumns from '@/components/home/AhColumns.vue'
import AhOffer from '@/components/home/AhOffer.vue'
import AhMap from '@/components/home/AhMap.vue'

export default {
  components: { AhMain, AhIntro, AhDescription, AhCards, AhRooms,AhColumns, AhOffer, AhMap },
  name: 'home',
  data() {
    return {
      // Slide1: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/slides%2FSlide1.jpg?alt=media&token=fb4274c0-fa09-4ed4-8f0c-d93154dcb1fb',
      Slide1: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/slides%2FSlide2.jpg?alt=media&token=b7c27705-23e8-4a99-8ac6-8068e643386c',
      Slide2: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage24.JPG?alt=media&token=9753fff9-2b99-4ef4-b2a8-1031994a5d56',
      Slide3: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/gallery%2FSlide3.JPEG?alt=media&token=cf5b1f96-c846-400e-ae37-ac15c4717bd7',
      Image1: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage1.JPG?alt=media&token=248ab0a9-bcda-4c97-9cd3-c55575236369',
      Image2: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage2.JPG?alt=media&token=8e846eb0-c9d2-4311-af38-8032ce2c6faa',
      Image3: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage3.jpg?alt=media&token=0a7a27d1-6ed6-4118-99ea-ea9ef0b497b2',
      Image4: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/gallery%2FH-15124650640%20(1).JPEG?alt=media&token=881c0af6-c33f-44f1-b774-c6b6f9ea0ac4',
      // Image4: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage4.jpg?alt=media&token=3f98b4d8-3469-4d70-a143-bad874add1f0',
      Image7: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage6.JPG?alt=media&token=a415151c-b85d-4e17-8775-c3df616c57b2',
      // Image7: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage7.JPG?alt=media&token=bab52def-ba59-4c40-97f7-d40917ec38c6',
      Image9: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FH-81162952392.JPEG?alt=media&token=e64a688a-6b23-4cf7-b2f5-468b5664d20b',
      Image10: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FH-81162951850.JPEG?alt=media&token=efb5f15b-8e01-4bd9-bae5-0373d68f872a',
      Image11: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FIMG_1159%202.JPG?alt=media&token=d6e1f203-36c4-46f2-bd3c-997d6bedb853',
      Image12: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage12.jpg?alt=media&token=ad6d81a1-74df-4817-aecc-031c1ce3690b',
      Image13: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage23.JPG?alt=media&token=08bc4ed2-82ae-488e-af1d-dc8ebc014033'
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

