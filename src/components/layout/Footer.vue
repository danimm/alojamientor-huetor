<template>
  <div class="wrapper pt-4 pb-5">
    <b-container>
      <b-row>
        <b-col class="text-white">
          <img src="@/assets/Logo-White.svg" alt="Logo Huetor" class="logo">
          <p class="mt-4">
            Hotel WordPress Theme is the best hotel, hostel, resort, apartment presentation WordPress theme. With its beautiful design and high coding quality, this theme can showcase your unique accommodations to the world and attract more visitors to your website.
          </p>
          <p>855-123-1234 / 100-1234</p>
          <p>Super Hotel Street. 1000 Thailand</p>
          <p>reservation@hotel.com</p>
        </b-col>
        <b-col>
          <h4 class="subtitle mb-4 text-white">Instagram widget</h4>
          <div class="grid-container">
            <picture>
              <img src="@/assets/images/image2.jpg" alt="">
            </picture>
            <picture>
              <img src="@/assets/images/image2.jpg" alt="">
            </picture>
            <picture>
              <img src="@/assets/images/image2.jpg" alt="">
            </picture>
              <img src="@/assets/images/image2.jpg" alt="">
            </picture>
            <picture>
              <img src="@/assets/images/image2.jpg" alt="">
            </picture>
            <picture>
              <img src="@/assets/images/image2.jpg" alt="">
            </picture>
              <img src="@/assets/images/image2.jpg" alt="">
            </picture>
            <picture>
              <img src="@/assets/images/image2.jpg" alt="">
            </picture>
            <picture>
              <img src="@/assets/images/image2.jpg" alt="">
            </picture>
          </div>
        </b-col>
        <b-col>
          <h4 class="text-white">Otros datos</h4>
          <p class="text-white mt-4">
            Winehouse WordPress Theme https://t.co/lXZmhpCAYC for wineries, shops & bars, pubs, online wine sales, #wine… https://t.co/2JF8nGvi7H
          </p>
          <p class="text-white mt-4">
            Winehouse WordPress Theme https://t.co/lXZmhpCAYC for wineries, shops & bars, pubs, online wine sales, #wine… https://t.co/2JF8nGvi7H
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .wrapper {
    background-color: #333a40;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 120px);
    grid-template-rows: repeat(3, 120px);
    grid-gap: 10px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
  }
  .logo {
    max-width: 150px;
    height: auto;
  }
  /* .img-container {
    height: 100px;
  } */
</style>