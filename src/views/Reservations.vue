<template lang="pug">
  .container
    .col-lg-6.col-md-12.text-center
        ah-reviews
    .col-lg-6.col-md-12
        ah-notes
      

</template>

<script>
import AhReviews from '@/components/reviews/AhReviews.vue'
import AhNotes from '@/components/reviews/AhNotes.vue'
export default {
    components: { AhNotes, AhReviews },
};
</script>

<style scoped>

.container {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    /* margin-top: 50px; */
    margin-bottom: 150px;
}
</style>