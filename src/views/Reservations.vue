<template lang="pug">
  .container
    .row
      .col-lg-6.col-md-12
        .grid-container
          b-card.mb-2(tag='article')
            h2 {{ $t('reservations.card.title') }}
            h3.date {{ $t('reservations.card.season') }}
            h3.date {{ $t('reservations.card.date') }}, 
            h3.date {{ $t('reservations.card.fest') }}
            ul
              li {{ $t('reservations.card.list.item1') }}
              li {{ $t('reservations.card.list.item2') }}
              li {{ $t('reservations.card.list.item3') }}
              li {{ $t('reservations.card.list.item4') }}
              li {{ $t('reservations.card.list.item5') }}
              li {{ $t('reservations.card.list.item6') }}
              li {{ $t('reservations.card.list.item7') }}
              li {{ $t('reservations.card.list.item8') }}
              li {{ $t('reservations.card.list.item9') }}
              li {{ $t('reservations.card.list.item10') }}
              li {{ $t('reservations.card.list.item11') }}
              li {{ $t('reservations.card.list.item12') }}

      .col-lg-6.col-md-12.text-center
        .row.reviews
          .col
            h4.text-center.title {{ $t('reservations.title') }}
            .row.eviivo-container
              a.link-eviivo.btn.btn-warning(:href="srcEviivo", target="_blank") {{ $t('reservations.booking') }} 
                //- img.logo-eviivo.p-2(src="https://eviivo.com/wp-content/themes/eviivo/assets/images/eviivo-logo.svg")
            p.text-center {{ links }}
            h4.reservation-reviews {{ $t('reservations.reviews') }}
            .row
              .col.tripadvisor-container
                a(:href="srcTrip", target="_blank")
                  img(src="http://www.hotelmadanis.com/wp-content/uploads/2017/10/tripadvisor.png")
              .col.zoover-container
                a(:href="srcZoover", target="_blank")
                  img(
                    src="http://www.stickpng.com/assets/images/58482871cef1014c0b5e49e7.png")
              .col-12.center-align.mt-4
                img.avaibook.mb-4(src="https://www.avaibook.com/wp-content/uploads/2017/02/logo-avaibook.png")
                iframe(
                :src="srcAvaibook"
                style="width: 100%; height: 300px; border: 0px;"
                frameborder="0"
                allowtransparency="allowtransparency") Tu navegador no soporta iframes
            //- .col
            //-   h4.text-center.title {{ $t('reservations.title') }}
            //-   iframe(:src='srcCalendar', style='height:auto; border: 0', frameborder='0', allowtransparency='allowtransparency') Tu navegador no soporta iframes

            //-   div(style='width: 235px; margin: auto')
            //-     a(href='https://www.avaibook.com/en/', target='_blank') ©AvaiBook.com 2018
      

</template>

<script>
export default {
    data() {
        return {
            srcCalendar: `https://www.avaibook.com/widgets_propietarios/loader.php?id=32406&lang=${this.$i18n.locale}`,
            srcAvaibook: `https://www.avaibook.com/widgets_propietarios/opiniones.php?cod_propietario=5627&subtipo=2&color_texto=000000&lang=es`,
            srcZoover:
                "http://www.zoover.es/espana/andalucia-costa-del-sol-costa-de-la-luz/vinuela/huetor-casitas/casa-de-vacaciones",
            srcTrip:
                "https://www.tripadvisor.es/Hotel_Review-g1080319-d1444597-Reviews-Alojamientos_Huetor-Vinuela_Province_of_Malaga_Andalucia.html#REVIEWS",
            srcEviivo: "https://via.eviivo.com/AlojamientosHuetor"
        };
    },
    computed: {
        links() {
            if (this.$i18n.locale === "es") {
                (this.srcZoover =
                    "http://www.zoover.es/espana/andalucia-costa-del-sol-costa-de-la-luz/vinuela/huetor-casitas/casa-de-vacaciones"),
                    (this.srcTrip =
                        "https://www.tripadvisor.es/Hotel_Review-g1080319-d1444597-Reviews-Alojamientos_Huetor-Vinuela_Province_of_Malaga_Andalucia.html#REVIEWS");
                this.srcAvaibook =
                    "https://www.avaibook.com/widgets_propietarios/opiniones.php?cod_propietario=5627&subtipo=2&color_texto=000000&lang=es";
                this.srcEviivo = "https://via.eviivo.com/AlojamientosHuetor";
                // return this.srcZoover
                // console.log('Idioma: español')
            } else if (this.$i18n.locale === "en") {
                this.srcZoover =
                    "http://www.zoover.co.uk/spain/andalusia-costa-del-sol-de-la-luz/vinuela/huetor-casitas/holiday-home";
                this.srcTrip =
                    "https://www.tripadvisor.com/Hotel_Review-g1080319-d1444597-Reviews-Alojamientos_Huetor-Vinuela_Province_of_Malaga_Andalucia.html#REVIEWS";
                this.srcAvaibook =
                    "https://www.avaibook.com/widgets_propietarios/opiniones.php?cod_propietario=5627&subtipo=2&color_texto=000000&lang=en";
                this.srcEviivo =
                    "https://via.eviivo.com/en-GB/alojamientoshuetor";
                // console.log('Idioma: inglés')
            } else if (this.$i18n.locale === "de") {
                this.srcZoover =
                    "http://www.zoover.de/spanien/costa-del-sol-costa-de-la-luz-andalusien/vinuela/huetor-casitas/ferienhaus";
                this.srcTrip =
                    "https://www.tripadvisor.de/Hotel_Review-g1080319-d1444597-Reviews-Alojamientos_Huetor-Vinuela_Province_of_Malaga_Andalucia.html#REVIEWS";
                this.srcAvaibook =
                    "https://www.avaibook.com/widgets_propietarios/opiniones.php?cod_propietario=5627&subtipo=2&color_texto=000000&lang=de";
                this.srcEviivo =
                    "https://via.eviivo.com/de-DE/alojamientoshuetor";
                // console.log('Idioma: Alemán')
            } else if (this.$i18n.locale === "fr") {
                this.srcZoover =
                    "http://www.zoover.fr/espagne/andalousie/vinuela/huetor-casitas/maison-de-vacances";
                this.srcTrip =
                    "https://www.tripadvisor.fr/Hotel_Review-g1080319-d1444597-Reviews-Alojamientos_Huetor-Vinuela_Province_of_Malaga_Andalucia.html#REVIEWS";
                this.srcAvaibook =
                    "https://www.avaibook.com/widgets_propietarios/opiniones.php?cod_propietario=5627&subtipo=2&color_texto=000000&lang=fr";
                this.srcEviivo =
                    "https://via.eviivo.com/fr-FR/alojamientoshuetor";
                // console.log('Idioma: Francés')
            }
        }
    }
};
</script>

<style scoped>
h2,
h4 {
    font-family: "Satisfy", cursive;
}
p {
    display: none;
}
.container {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    /* margin-top: 50px; */
    margin-bottom: 150px;
}
.grid-container {
    /* margin: 0 50px; */
    grid-gap: 20px;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr) / 1fr;
    justify-content: space-between;
}
.btn {
    display: block;
    border-radius: 20px;
    margin-top: 40px;
    padding: 15px;
    font-size: 1.2em;
}
.card {
    padding: 0 20px 0 20px;
    border-radius: 10px;
    background-color: #fefdeb;
    margin: 0 10px;
}
.card-body h4,
h3,
h2 {
    text-align: left;
}
h2 {
    font-size: 3em;
    margin-bottom: 10px;
}
h3 {
    font-size: 1.5em;
    text-decoration: underline;
    padding: 5px 0;
}
.title,
.reservation-reviews {
    font-size: 2em;
}
.title {
    margin-bottom: 20px;
}
.reservation-reviews {
    margin: 20px 0;
}
img {
    width: 70%;
}
iframe {
    width: 90%;
}
.avaibook {
    width: 50%;
}
.eviivo-container {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
}
.logo-eviivo {
    width: 150px;
}
.link-eviivo {
    margin-top: 30px;
}
.zoover-container,
.tripadvisor-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.title {
    font-size: 2em;
    margin-top: 40px;
}

.reviews {
    border: 2px solid gray;
    border-radius: 5px;
    padding: 10px 0 40px 0;
}
@media screen and (max-width: 992px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
    .reviews {
        margin-top: 40px;
    }
}
@media screen and (max-width: 768px) {
    .grid-container {
        margin-bottom: 40px;
    }
    .reviews {
        margin: 0 20px;
        padding: 30px 0px;
    }
    img {
        width: 80%;
    }
    .reservation-reviews {
        margin-top: 15px;
    }
}
@media screen and (max-width: 576px) {
    h2,
    h4 {
        font-size: 1.9em;
    }
    .grid-container {
        margin-bottom: 40px;
    }
    .date {
        font-size: 1.5em;
    }
    ul {
        padding-left: 10px;
    }
    .date {
        font-size: 1.4em;
        padding: 5px;
    }
}
</style>