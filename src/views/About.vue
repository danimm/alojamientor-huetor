<template lang="pug">
  section
    ah-jumbo
    ah-description
    ah-columns
    ah-offer
</template>

<script>
  // Components
  import AhJumbo from '@/components/about/AhJumbo.vue'
  import AhDescription from '@/components/about/AhDescription.vue'
  import AhColumns from '@/components/about/AhColumns.vue'
  import AhOffer from '@/components/about/AhOffer.vue'

  export default {
    components: { AhJumbo, AhDescription, AhColumns, AhOffer }
  }
</script>

<style scoped>

</style>