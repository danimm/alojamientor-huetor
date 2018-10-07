<template>
  <div>
    <b-row  align-h="center"
            class="mt-5 mb-5">
      <b-col cols="3">
        <b-card title="Texto de titulo"
                :img-src="Image2"
                img-top
                class="text-center">
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>

        </b-card>
      </b-col>
      <b-col cols="3" class="mr-4 ml-4">
        <b-card title="Texto de titulo"
                :img-src="Image2"
                img-bottom
                class="text-center">
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>

        </b-card>
      </b-col>
      <b-col cols="3">
        <b-card title="Texto de titulo"
                :img-src="Image2"
                img-top
                class="text-center">
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>

        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import Image1 from '@/assets/images/image1.jpg'
  import Image2 from '@/assets/images/image2.jpg'
  import Image3 from '@/assets/images/image3.jpg'
  export default {
    data() {
      return {
        Image1,
        Image2,
        Image3
      }
    }
  }
</script>

<style scoped>
  .card-body {
    height: 200px;
  }
</style>