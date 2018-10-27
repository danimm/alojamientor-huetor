<template lang="pug">
  section
    ah-jumbo
    ah-description
    ah-columns
</template>

<script>
  // Components
  import AhJumbo from '@/components/about/AhJumbo.vue'
  import AhDescription from '@/components/about/AhDescription.vue'
  import AhColumns from '@/components/about/AhColumns.vue'

  export default {
    components: { AhJumbo, AhDescription, AhColumns }
  }
</script>

<style scoped>

</style>