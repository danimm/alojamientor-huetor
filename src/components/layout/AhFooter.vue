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
              img(src='https://scontent-mad1-1.cdninstagram.com/vp/0f00486941a24092917874d4ef52cdad/5D8FA1EA/t51.2885-15/e35/c0.135.1080.1080a/s150x150/61456738_602591240251459_7977204359561950190_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com', alt='')
              //- img(:src='Image16', alt='')
            picture
              img(src='https://scontent-mad1-1.cdninstagram.com/vp/34659d749ee99bd950ba8dd8a588f0dc/5DC54E8A/t51.2885-15/e35/c0.135.1080.1080a/s150x150/61338380_331609534403841_7395182412686598104_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com', alt='')
              //- img(:src='Image17', alt='')
            picture
              img(src='https://scontent-mad1-1.cdninstagram.com/vp/3f48e5f0f0df531ec017d728fe48dab6/5DA2A551/t51.2885-15/e35/c236.0.608.608a/61440214_1036506819887825_7408700076707344412_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com', alt='')
              //- img(:src='Image18', alt='')
            picture
              img(src='https://scontent-mad1-1.cdninstagram.com/vp/79c707039f48ae21fedc4917b422bfe9/5D8F2DA0/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/60428167_687269255041576_3122343742060127140_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com', alt='')
              //- img(:src='Image19', alt='')
            picture
              img(src='https://scontent-mad1-1.cdninstagram.com/vp/720b2005af1708bb708458367fe62e7e/5DC672D9/t51.2885-15/sh0.08/e35/s640x640/58785073_829576464085625_3479691210925167400_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com', alt='')
            picture
              img(src='https://scontent-mad1-1.cdninstagram.com/vp/fd17fdaa0eb7c9d7a880c9c95aebb51c/5DA40555/t51.2885-15/sh0.08/e35/s640x640/56197324_268353840710023_5474470613996799890_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com', alt='')
            picture
              img(src='https://scontent-mad1-1.cdninstagram.com/vp/6a8b6c43e11c37345bfc9862191bd747/5D870F88/t51.2885-15/e35/47585952_223529871890045_8339322036379746390_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com', alt='')
            picture
              img(src='https://scontent-mad1-1.cdninstagram.com/vp/6d71a64daa5c4d96497e160e4aa85c10/5D91CB4A/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/62188326_348739355789196_2989692589005786510_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com', alt='')
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
    Logo: { type: String, required: true },
    Phone: { type: String, required: true },
    Home: { type: String, required: true },
    Mail: { type: String, required: true },
    Instagram: { type: String, required: true },
    Facebook: { type: String, required: true }
  },
  methods: {
    goLegal() {
      window.scrollTo(0, 0);
      this.$router.push("legal");
    }
  }
};
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
@media screen and (max-width: 992px) {
  /* .grid-container {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 120px);
    } */
}
@media screen and (max-width: 768px) {
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

@media screen and (max-width: 576px) {
  .col-sm-10 {
    display: flex;
    justify-content: center;
  }
  .lastFooter p {
    display: none;
  }
}
</style>