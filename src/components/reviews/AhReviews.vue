<template lang="pug">
  .container
    a.link-eviivo.btn.btn-warning(:href="links.linkEviivo", target="_blank") {{ $t('header.reservations') }}
    .row.reviews.mt-4
      .col
        h4.reservation-reviews {{ $t('reservations.reviews') }}
        .row
          .col.tripadvisor-container
            a(:href="links.linkTripadvisor", target="_blank")
              img(:src="tripadvisor.src")
          .col.zoover-container
            a(:href="links.linkZoover", target="_blank")
              img(
                :src="zoover.src")
</template>

<script>
  export default {
    data(){
      return {
        tripadvisor: {
          src: "https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Freviews%2Ftripadvisor.svg?alt=media&token=e4123b47-20d9-4f27-b745-9c85bd587544",
        },
        zoover: {
          src: "https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Freviews%2Fzoover.png?alt=media&token=d8aeec52-47a6-40ab-baae-5f0843e6d2f5"
        }
      }
    },
    computed: {
      links(){
        switch (this.$i18n.locale) {
          case "es":
            return {
              linkTripadvisor: "https://www.tripadvisor.es/Hotel_Review-g1080319-d1444597-Reviews-Alojamientos_Huetor-Vinuela_Province_of_Malaga_Andalucia.html#REVIEWS",
              linkZoover: "http://www.zoover.es/espana/andalucia-costa-del-sol-costa-de-la-luz/vinuela/huetor-casitas/casa-de-vacaciones",
              linkEviivo: "https://via.eviivo.com/AlojamientosHuetor"
            }
            break;
          case "en":
            return "https://www.tripadvisor.com/Hotel_Review-g1080319-d1444597-Reviews-Alojamientos_Huetor-Vinuela_Province_of_Malaga_Andalucia.html#REVIEWS"
            break;
          case "de":
            return "https://www.tripadvisor.de/Hotel_Review-g1080319-d1444597-Reviews-Alojamientos_Huetor-Vinuela_Province_of_Malaga_Andalucia.html#REVIEWS"
            break;
          case "fr":
            return "https://www.tripadvisor.fr/Hotel_Review-g1080319-d1444597-Reviews-Alojamientos_Huetor-Vinuela_Province_of_Malaga_Andalucia.html#REVIEWS"
            break;
        
          default:
            return "https://www.tripadvisor.com"
            break;
        }
      },
      linkTripadvisor(){
        switch (this.$i18n.locale) {
          case "es":
            return "https://www.tripadvisor.es/Hotel_Review-g1080319-d1444597-Reviews-Alojamientos_Huetor-Vinuela_Province_of_Malaga_Andalucia.html#REVIEWS"
            break;
          case "en":
            return "https://www.tripadvisor.com/Hotel_Review-g1080319-d1444597-Reviews-Alojamientos_Huetor-Vinuela_Province_of_Malaga_Andalucia.html#REVIEWS"
            break;
          case "de":
            return "https://www.tripadvisor.de/Hotel_Review-g1080319-d1444597-Reviews-Alojamientos_Huetor-Vinuela_Province_of_Malaga_Andalucia.html#REVIEWS"
            break;
          case "fr":
            return "https://www.tripadvisor.fr/Hotel_Review-g1080319-d1444597-Reviews-Alojamientos_Huetor-Vinuela_Province_of_Malaga_Andalucia.html#REVIEWS"
            break;
        
          default:
            return "https://www.tripadvisor.com"
            break;
        }
      },
      linkZoover(){
        switch (this.$i18n.locale) {
          case "es":
            return "http://www.zoover.es/espana/andalucia-costa-del-sol-costa-de-la-luz/vinuela/huetor-casitas/casa-de-vacaciones"
            break;
          case "en":
            return "http://www.zoover.co.uk/spain/andalusia-costa-del-sol-de-la-luz/vinuela/huetor-casitas/holiday-home"
            break;
          case "de":
            return "http://www.zoover.de/spanien/costa-del-sol-costa-de-la-luz-andalusien/vinuela/huetor-casitas/ferienhaus"
            break;
          case "fr":
            return "http://www.zoover.fr/espagne/andalousie/vinuela/huetor-casitas/maison-de-vacances"
            break;
        
          default:
            return "http://www.zoover.com"
            break;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

h4.reservation-reviews {
  font-family: "Satisfy", cursive;
  font-size: 2em;
  margin: 20px 0;
}
img {
  width: 70%;
}

.container {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.reviews {
    border: 2px solid gray;
    border-radius: 5px;
    padding: 10px 0 40px 0;
}

.zoover-container,
.tripadvisor-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.link-eviivo {
    display: block;
    border-radius: 20px;
    // margin-top: 40px;
    padding: 15px;
    font-size: 1.2em;
}
@media screen and (max-width: 992px) {
    .reviews {
        margin-top: 20px;
    }
}
@media screen and (max-width: 768px) {
    .reviews {
        margin: 0 20px;
        padding: 30px 0px;
    }
    img {
        width: 100%;
    }
    .reservation-reviews {
        margin-top: 15px;
    }
}

</style>