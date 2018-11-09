<template lang="pug">
  .wrapper.pt-4.pb-5
    b-container
      b-row
        .col-lg-4.col-md-12.text-white.contact
          img.logo(:src='Logo', alt='Logo Huetor')
          p.mt-4
            // Hotel WordPress Theme is the best hotel, hostel, resort, apartment presentation WordPress theme. With its beautiful design and high coding quality, this theme can showcase your unique accommodations to the world and attract more visitors to your website.
          p Comarca de la Axarquía - Málaga - España
          p Trataremos de responder su correo electrónico antes de 24 horas.
            | Para reservas, consultas o información adicional contacte con nosotros.
          p
            img.icon(:src='Phone', alt='phone-icon')
            a.text-white(href="tel:+34659589562") +34 659 589 562
          p
            img.icon(:src='Home', alt='home-icon')
            a.text-white(
              href="https://www.google.com/maps/place/Alojamientos+Huetor/@36.8786239,-4.1887103,1735m/data=!3m1!1e3!4m7!3m6!1s0xd7269d63c8dbefb:0x2f0a38fa3fbf8baa!5m1!1s2018-11-25!8m2!3d36.881525!4d-4.18549"
              target="_blank"
              ) Paraje la Rotura, 29712 La Viñuela, Málaga, España
          p
            img.icon(:src='Mail', alt='mail-icon')
            a.text-white.email(href="mailto:info@alojamientoshuetor.com") info@alojamientoshuetor.com
        .col-lg-4.col-md-6.mb-4
          h4.mb-4.text-white Visita nuestro Instagram
          .grid-container
            picture
              img(:src='Image16', alt='')
            picture
              img(:src='Image17', alt='')
            picture
              img(:src='Image18', alt='')
            picture
              img(:src='Image19', alt='')
            picture
              img(:src='Image20', alt='')
            picture
              img(:src='Image21', alt='')
            picture
              img(:src='Image22', alt='')
            picture
              img(:src='Image23', alt='')
            //- picture
            //-   img(:src='Image24', alt='')
        .col-lg-4.col-md-6
          h4.text-white Enlaces de Interés
          p.text-white.mt-4
            a.text-white(href="http://www.granadatur.com" target="_blank") Turismo de Granada
          p.text-white
            a.text-white(href="http://www.turismosevilla.org/opencms2/opencms/es/index.html" target="_blank") Portal de Turismo de la provincia de Sevilla
          p.text-white
            a.text-white(href="http://www.cadizturismo.com/esp/1024/index.asp" target="_blank") Turismo de Cádiz
          p.text-white
            a.text-white(href="http://www.cordobaturismo.es/es" target="_blank") Turismo de Córdoba
          p.text-white
            a.text-white(href="http://www.turismoalmeria.com" target="_blank") Costa de Almería
          p.text-white
            a.text-white(href="http://www.turismohuelva.org" target="_blank") Patronato de Turismo de Huelva
          p.text-white
            a.text-white(href="http://www.laaxarquiaentumesa.es/index.php" target="_blank") Productos de la Axarquía, gastronomía malagueña
          p.text-white
            a.text-white(href="http://www.andalucia.org" target="_blank") Web oficial de turismo de Andalucía
          p.text-white
    b-container
      b-row.lastFooter
        .col-sm-12.col-md-6
          p Creado por Daniel Muñoz Martín
        .col-sm-10.col-md-6.text-right
          router-link.nav-link(to="/") Inicio
          router-link.nav-link(to="reservations") Reservas
          router-link.nav-link(to="gallery") Galería
          router-link.nav-link(to="contact") Contacto

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
  .text-right a {
    display: inline-block;
  }
  @media screen and (max-width: 992px){
    .grid-container {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 768px){
    h4 {
      margin-bottom: 0;
      margin-top: 20px;
    }
    .contact {
      margin-bottom: 30px;
    }
    .col-sm-12 p {
      display: none;
    }
  }

  @media screen and (max-width: 576px){ 
    .col-sm-10 {
      text-align: left !important;
    }
    .col-sm-10 a {
      display: block;
    }
  }
</style>