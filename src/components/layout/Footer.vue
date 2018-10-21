<template>
  <div class="wrapper pt-4 pb-5">
    <b-container>
      <b-row>
        <b-col class="text-white">
          <img :src="Logo" alt="Logo Huetor" class="logo">
          <p class="mt-4">
            <!-- Hotel WordPress Theme is the best hotel, hostel, resort, apartment presentation WordPress theme. With its beautiful design and high coding quality, this theme can showcase your unique accommodations to the world and attract more visitors to your website. -->
          </p>
          <p>
            Comarca de la Axarquía - Málaga - España
          </p>
          <p>Trataremos de responder su correo electrónico antes de 24 horas.
            Para reservas, consultas o información adicional contacte con nosotros.</p>
          <p>
            <img :src="Phone" alt="phone-icon" class="icon">
            +34 659 589 562
          </p>
          <p>
            <img :src="Phone" alt="phone-icon" class="icon">
            +34 659 589 562
          </p>
          <p>
            <img :src="Home" alt="home-icon" class="icon">
            Paraje la Rotura, 29712 La Viñuela, Málaga, España
          </p>
          <p>
            <img :src="Mail" alt="mail-icon" class="icon">
            info@alojamientoshuetor.com
          </p>
        </b-col>
        <b-col>
          <h4 class="subtitle mb-4 text-white">Cuenta de Instagram ?</h4>
          <div class="grid-container">
            <picture>
              <img :src="Image16" alt="">
            </picture>
            <picture>
              <img :src="Image17" alt="">
            </picture>
            <picture>
              <img :src="Image18" alt="">
            </picture>
            <picture>
              <img :src="Image19" alt="">
            </picture>
            <picture>
              <img :src="Image20" alt="">
            </picture>
            <picture>
              <img :src="Image21" alt="">
            </picture>
            <picture>
              <img :src="Image22" alt="">
            </picture>
            <picture>
              <img :src="Image23" alt="">
            </picture>
            <picture>
              <img :src="Image24" alt="">
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
    props: {
      Logo: { type: String, required: true},
      Phone: { type: String, required: true},
      Home: { type: String, required: true},
      Mail: { type: String, required: true},
      Image16: { type: String, required:true },
      Image17: { type: String, required:true },
      Image18: { type: String, required:true },
      Image19: { type: String, required:true },
      Image20: { type: String, required:true },
      Image21: { type: String, required:true },
      Image22: { type: String, required:true },
      Image23: { type: String, required:true },
      Image24: { type: String, required:true },
    }
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