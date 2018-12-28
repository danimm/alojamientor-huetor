<template lang="pug">
  .wrapper.pt-4.pb-5
    b-container
      b-row
        .col-lg-4.col-md-12.text-white.contact
          img.logo(:src='Logo', alt='Logo Huetor')
          p.mt-4
            // Hotel WordPress Theme is the best hotel, hostel, resort, apartment presentation WordPress theme. With its beautiful design and high coding quality, this theme can showcase your unique accommodations to the world and attract more visitors to your website.
          p Comarca de la Axarquía - Málaga - España
          //- p Trataremos de responder su correo electrónico antes de 24 horas.
          p {{ $t('footer.text1') }}
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
            a.text-white.email(href="mailto:info@alojamientoshuetor.com", target="_blank") info@alojamientoshuetor.com
          p
            img.icon(:src="Instagram", alt="instagram-icon")
            a.text-white(href="https://www.instagram.com/alojamientos_huetor/", target="_blank") alojamientos_huetor
          p
            img.icon(:src="Facebook", alt="facebook-icon")
            a.text-white(href="https://es-es.facebook.com/alojamientoshuetor.alojamientos", target="_blank") Alojamientos Huetor
        .col-lg-4.col-md-6.mb-4
          h4.mb-4.text-white {{ $t('footer.titleInstagram') }}
          .grid-container
            picture
              img(src='https://instagram.fmad3-8.fna.fbcdn.net/vp/d2ea5b92ceb732028edd397cf22c316b/5CC9B33E/t51.2885-15/sh0.08/e35/s640x640/43014924_1750974341696474_8057018949742624768_n.jpg?_nc_ht=instagram.fmad3-8.fna.fbcdn.net', alt='')
              //- img(:src='Image16', alt='')
            picture
              img(src='https://instagram.fmad3-8.fna.fbcdn.net/vp/0da4b1259ad1a00649d8ef66896de422/5CCE990E/t51.2885-15/sh0.08/e35/s640x640/45831884_319576411962109_2320455372717948928_n.jpg?_nc_ht=instagram.fmad3-8.fna.fbcdn.net', alt='')
              //- img(:src='Image17', alt='')
            picture
              img(src='https://instagram.fmad3-8.fna.fbcdn.net/vp/295ebf5acbb900fbe1e03dff130ae199/5CD97820/t51.2885-15/sh0.08/e35/p640x640/44766451_517433122075725_6381255945023913984_n.jpg?_nc_ht=instagram.fmad3-8.fna.fbcdn.net', alt='')
              //- img(:src='Image18', alt='')
            picture
              img(src='https://instagram.fmad3-8.fna.fbcdn.net/vp/08dd86c6180d8a47316da9a085314634/5CCCDFF5/t51.2885-15/sh0.08/e35/p640x640/44626715_315581195932900_4565953039155855360_n.jpg?_nc_ht=instagram.fmad3-8.fna.fbcdn.net', alt='')
              //- img(:src='Image19', alt='')
            picture
              img(src='https://instagram.fmad3-8.fna.fbcdn.net/vp/32aee5894a4057b5e7979f5bd20c6d82/5CBEE01D/t51.2885-15/sh0.08/e35/s750x750/45824477_728973444152426_723676807982743552_n.jpg?_nc_ht=instagram.fmad3-8.fna.fbcdn.net', alt='')
            picture
              img(src='https://instagram.fmad3-8.fna.fbcdn.net/vp/dcfd6d488e51edfcd19214dcddb36805/5CB631D2/t51.2885-15/sh0.08/e35/s640x640/46420736_281738809195514_4119327786705879040_n.jpg?_nc_ht=instagram.fmad3-8.fna.fbcdn.net', alt='')
            picture
              img(src='https://instagram.fmad3-8.fna.fbcdn.net/vp/814cf40cfc960e20c701e0a5fb11a87a/5CCC7B4B/t51.2885-15/sh0.08/e35/s640x640/47585742_899093220287686_8819568196756439040_n.jpg?_nc_ht=instagram.fmad3-8.fna.fbcdn.net', alt='')
            picture
              img(src='https://instagram.fmad3-8.fna.fbcdn.net/vp/ba8f855502d4cb19fda480c2fcaa610d/5CCB9E86/t51.2885-15/e35/46203166_276152556421819_7142441385302425600_n.jpg?_nc_ht=instagram.fmad3-8.fna.fbcdn.net', alt='')
            //- picture
            //-   img(:src='Image24', alt='')
        .col-lg-4.col-md-6
          h4.text-white {{ $t('footer.titleLinks') }}
          p.text-white.mt-4
            a.text-white(href="http://planamalaga.com/" target="_blank") Actividades al aire libre
          p.text-white
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
            a.text-white(href="http://www.andalucia.org" target="_blank") Web oficial de turismo de Andalucía
          p.text-white
    b-container
      b-row.lastFooter
        .col-sm-12.col-md-6
          p
          | {{ $t('footer.made')}}
          a.text-white.email(href="mailto:info@danimm.com", target="_blank") info@danimm.com
          
        .col-sm-10.col-md-6.text-right
          //- router-link.nav-link(to="/") Inicio
          //- router-link.nav-link(to="reservations") Reservas
          //- router-link.nav-link(to="gallery") Galería
          //- router-link.nav-link(to="contact") Contacto
          a.nav-link(@click="goLegal") {{ $t('footer.legal') }}

</template>

<script>
  export default {
    props: {
      Logo: { type: String, required: true},
      Phone: { type: String, required: true},
      Home: { type: String, required: true},
      Mail: { type: String, required: true},
      Instagram: { type: String, required: true},
      Facebook: { type: String, required: true}
    },
    methods: {
      goLegal(){
        window.scrollTo(0, 0)
        this.$router.push("legal")
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    background-color: #333a40;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 120px);
    grid-gap: 10px;
  }
  img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* object-position: left; */
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
  .nav-link {
    /* display: none; */
    cursor: pointer;
  }
  @media screen and (max-width: 992px){
    /* .grid-container {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 120px);
    } */
  }
  @media screen and (max-width: 768px){
    h4 {
      margin-bottom: 0;
      margin-top: 20px;
    }
    .contact {
      margin-bottom: 30px;
    }
    /* .col-sm-12 p {
      display: none;
    } */
  }

  @media screen and (max-width: 576px){ 
    .col-sm-10 {
      display: flex;
      justify-content: center;
    }
    .lastFooter p {
      display: none;
    }
  }
</style>