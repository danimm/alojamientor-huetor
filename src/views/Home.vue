<template lang="pug">
  main
    ah-main(
      :Slide1="Slide1",
      :Slide2="Slide2",
      :Slide3="Slide3")
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
// Components
import AhMain from '@/components/home/Main.vue'
import AhIntro from '@/components/home/AhIntro.vue'
import AhDescription from '@/components/home/AhDescription.vue'
import AhOffer from '@/components/home/AhOffer.vue'
import AhRooms from '@/components/home/AhRooms.vue'

export default {
  name: 'home',
  data() {
    return {
      Slide1: require('@/assets/images/slides/image1.jpg'),
      Slide2: require('@/assets/images/slides/image2.jpg'),
      Slide3: require('@/assets/images/slides/image3.jpg'),
      Image1: require('@/assets/images/compressed/Image1.jpg'),
      Image2: require('@/assets/images/compressed/Image2.jpg'),
      Image3: require('@/assets/images/compressed/Image3.jpg'),
      Image4: require('@/assets/images/compressed/Image4.jpg'),
      Image7: require('@/assets/images/compressed/Image7.jpg'),
      Image10: require('@/assets/images/compressed/Image10.jpg'),
      Image11: require('@/assets/images/compressed/Image11.jpg'),
      Image12: require('@/assets/images/compressed/Image12.jpg'),
      Image13: require('@/assets/images/compressed/Image13.jpg'),
    }
  },
  components: {
    AhMain,
    AhIntro,
    AhDescription,
    AhOffer,
    AhRooms
  }
}
</script>
