<template lang="pug">
  main
    ah-main
    ah-intro
    ah-description
    ah-offer
    ah-rooms
</template>

<script>
// @ is an alias to /src
import AhMain from '@/components/home/Main.vue'
import AhIntro from '@/components/home/AhIntro.vue'
import AhDescription from '@/components/home/AhDescription.vue'
import AhOffer from '@/components/home/AhOffer.vue'
import AhRooms from '@/components/home/AhRooms.vue'

export default {
  name: 'home',
  components: {
    AhMain,
    AhIntro,
    AhDescription,
    AhOffer,
    AhRooms
  }
}
</script>
