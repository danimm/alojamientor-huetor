<template>
  <div class="wrapper pt-4 pb-5">
    <b-container>
      <b-row>
        <b-col class="text-white">
          <img src="@/assets/Logo-White.svg" alt="Logo Huetor" class="logo">
          <p class="mt-4">
            <!-- Hotel WordPress Theme is the best hotel, hostel, resort, apartment presentation WordPress theme. With its beautiful design and high coding quality, this theme can showcase your unique accommodations to the world and attract more visitors to your website. -->
          </p>
          <p>
            Comarca de la Axarquía - Málaga - España
          </p>
          <p>Trataremos de responder su correo electrónico antes de 24 horas.
            Para reservas, consultas o información adicional contacte con nosotros.</p>
          <p>
            <img src="@/assets/phone.svg" alt="home" class="icon">
            +34 659 589 562
          </p>
          <p>
            <img src="@/assets/phone.svg" alt="home" class="icon">
            +34 659 589 562
          </p>
          <p>
            <img src="@/assets/home.svg" alt="home" class="icon">
            Paraje la Rotura, 29712 La Viñuela, Málaga, España
          </p>
          <p>
            <img src="@/assets/mail.svg" alt="home" class="icon">
            info@alojamientoshuetor.com
          </p>
        </b-col>
        <b-col>
          <h4 class="subtitle mb-4 text-white">Cuenta de Instagram ?</h4>
          <div class="grid-container">
            <picture>
              <img src="@/assets/images/compressed/Image16.jpg" alt="">
            </picture>
            <picture>
              <img src="@/assets/images/compressed/Image17.jpg" alt="">
            </picture>
            <picture>
              <img src="@/assets/images/compressed/Image18.jpg" alt="">
            </picture>
            <picture>
              <img src="@/assets/images/compressed/Image19.jpg" alt="">
            </picture>
            <picture>
              <img src="@/assets/images/compressed/Image20.jpg" alt="">
            </picture>
            <picture>
              <img src="@/assets/images/compressed/Image21.jpg" alt="">
            </picture>
            <picture>
              <img src="@/assets/images/compressed/Image22.jpg" alt="">
            </picture>
            <picture>
              <img src="@/assets/images/compressed/Image23.jpg" alt="">
            </picture>
            <picture>
              <img src="@/assets/images/compressed/Image24.jpg" alt="">
            </picture>
          </div>
        </b-col>
        <b-col>
          <h4 class="text-white">Otros datos</h4>
          <p class="text-white mt-4">
            Este es un espacio que podemos utilizar para añadir enlaces a otras web relacionadas con Huetor o actividades que se te ocurran.
          </p>
          <p class="text-white mt-4">
            Este es un espacio que podemos utilizar para añadir enlaces a otras web relacionadas con Huetor o actividades que se te ocurran.
          </p>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="lastFooter">
        <b-col>
          <p>Creado por Daniel Muñoz Martín</p>
        </b-col>
        <b-col class="text-right">
          <a href="#" class="link">Home</a>
          <a href="#" class="link">Galería</a>
          <a href="#" class="link">Precio</a>
          <a href="#" class="link">Contacto</a>
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
    max-width: 200px;
    height: auto;
  }
  .icon {
    max-width: 20px;
    height: auto;
    margin-right: 5px;
  }
  .lastFooter {
    margin-top: 30px;
    border-top: gray 2px solid;
    padding-top: 30px;
    color: white;
  }
  .lastFooter a {
    color: white;
    padding-right: 12px;
  }
  .lastFooter .col {
    padding-left: 0;
    padding-right: 0;
  }
</style>