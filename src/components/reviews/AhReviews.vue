<template lang="pug">
  .container
    a.link-eviivo.btn.btn-warning(:href="links.linkEviivo", target="_blank") {{ $t('header.reservations') }}
    .row.reviews.mt-4
      .col
        h4 {{ $t('reservations.comments.title') }}
        p {{ $t('reservations.comments.text') }} 
        a.link-review.btn.btn-warning(href="https://g.page/alojamientos-huetor/review?gm", target="_blank") 
          | {{ $t('reservations.comments.button.text') }}
        h4.reservation-reviews {{ $t('reservations.reviews') }}
        .row
          .col.tripadvisor-container
            a(:href="links.linkTripadvisor", target="_blank")
              img(:src="imageTripadvisor.src")
          .col.zoover-container
            a(href="https://www.zoover.nl/spanje/andalusie-costa-del-sol-de-la-luz/vinuela/huetor-casitas/vakantiehuis?from_search=casitas%20huetor ", target="_blank")
              img(:src="imageZoover.src")
        .row.pt-4
          .col.tripadvisor-container
            a(:href="links.linkBooking", target="_blank")
              img.booking(src="@/assets/booking.png")
          .col.zoover-container
            a(:href="links.linkAirbnb", target="_blank")
              img.airbnb(src="@/assets/airbnb.png")
</template>

<script>
export default {
  data() {
    return {
      imageTripadvisor: {
        src:
          'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Freviews%2Ftripadvisor.svg?alt=media&token=e4123b47-20d9-4f27-b745-9c85bd587544'
      },
      imageZoover: {
        src:
          'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Freviews%2Fzoover.png?alt=media&token=d8aeec52-47a6-40ab-baae-5f0843e6d2f5'
      }
    };
  },
  computed: {
    links() {
      switch (this.$i18n.locale) {
        case 'es':
          return {
            linkTripadvisor:
              'https://www.tripadvisor.es/Hotel_Review-g1080319-d1444597-Reviews-Alojamientos_Huetor-Vinuela_Province_of_Malaga_Andalucia.html#REVIEWS',
            linkZoover: 'http://www.zoover.es/espana/andalucia-costa-del-sol-costa-de-la-luz/vinuela/huetor-casitas/casa-de-vacaciones',
            linkEviivo: 'https://via.eviivo.com/AlojamientosHuetor',
            linkBooking: 'https://www.booking.com/hotel/es/alojamientos-huetor.es.html?aid=340303&label=metatrivago-hotel-25490_xqdz-649b8b_los-2_nrm-1_gstadt-2_gstkid-0_curr-eur_lang-nl_mcid-10_dev-dsk_losb-2_bw-6_bwb-5_pg-1_trvbm-a_defdate-0_tstar-0_trat-0_tprc-0_tamnt-0_trvref-0ef59875-b995-4480-a823-9a3cef0b69f8&sid=d2c7e093f073a6c21723c341995eac82&all_sr_blocks=2549002_295704952_2_0_0&checkin=2021-04-06&checkout=2021-04-08&dest_id=-408804&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=2549002_295704952_2_0_0&hpos=1&lang=es&no_rooms=1&room1=A%2CA&sb_price_type=total&soz=1&sr_order=popularity&sr_pri_blocks=2549002_295704952_2_0_0__18580&srepoch=1617190186&srpvid=20d850d5219601e8&type=total&ucfs=1&lang_click=other;cdl=nl;lang_changed=1',
            linkAirbnb: 'https://www.airbnb.es/rooms/39353570?adults=2&check_in=2021-04-06&check_out=2021-04-08&federated_search_id=804e33e0-9686-47f8-89fe-f91121fe2031&source_impression_id=p3_1617189548_2ptMidTajDJa6Xre&guests=1'
          };
          break;
        case 'en':
          return {
            linkTripadvisor:
              'https://www.tripadvisor.com/Hotel_Review-g1080319-d1444597-Reviews-Alojamientos_Huetor-Vinuela_Province_of_Malaga_Andalucia.html#REVIEWS',
            linkZoover: 'http://www.zoover.co.uk/spain/andalusia-costa-del-sol-de-la-luz/vinuela/huetor-casitas/holiday-home',
            linkEviivo: 'https://via.eviivo.com/en-GB/alojamientoshuetor',
            linkBooking: 'https://www.booking.com/hotel/es/alojamientos-huetor.en-gb.html?aid=340303&label=metatrivago-hotel-25490_xqdz-649b8b_los-2_nrm-1_gstadt-2_gstkid-0_curr-eur_lang-nl_mcid-10_dev-dsk_losb-2_bw-6_bwb-5_pg-1_trvbm-a_defdate-0_tstar-0_trat-0_tprc-0_tamnt-0_trvref-0ef59875-b995-4480-a823-9a3cef0b69f8&sid=d2c7e093f073a6c21723c341995eac82&all_sr_blocks=2549002_295704952_2_0_0&checkin=2021-04-06&checkout=2021-04-08&dest_id=-408804&dest_type=city&group_adults=2&group_children=0&hapos=1&highlighted_blocks=2549002_295704952_2_0_0&hpos=1&lang=en-gb&no_rooms=1&room1=A%2CA&sb_price_type=total&soz=1&sr_order=popularity&sr_pri_blocks=2549002_295704952_2_0_0__18580&srepoch=1617190186&srpvid=20d850d5219601e8&type=total&ucfs=1&lang_click=other;cdl=es;lang_changed=1',
            linkAirbnb: 'https://www.airbnb.co.uk/rooms/39353570?check_out=2021-04-08&adults=2&check_in=2021-04-06&federated_search_id=804e33e0-9686-47f8-89fe-f91121fe2031&guests=1&source_impression_id=p3_1617189548_2ptMidTajDJa6Xre&_set_bev_on_new_domain=1610717448_OThlZDNiYjRjNWU2'
          };
          break;
        case 'de':
          return {
            linkTripadvisor:
              'https://www.tripadvisor.de/Hotel_Review-g1080319-d1444597-Reviews-Alojamientos_Huetor-Vinuela_Province_of_Malaga_Andalucia.html#REVIEWS',
            linkZoover: 'http://www.zoover.de/spanien/costa-del-sol-costa-de-la-luz-andalusien/vinuela/huetor-casitas/ferienhaus',
            linkEviivo: 'https://via.eviivo.com/de-DE/alojamientoshuetor',
            linkBooking: 'https://www.booking.com/hotel/es/alojamientos-huetor.de.html?aid=340303&label=metatrivago-hotel-25490_xqdz-649b8b_los-2_nrm-1_gstadt-2_gstkid-0_curr-eur_lang-nl_mcid-10_dev-dsk_losb-2_bw-6_bwb-5_pg-1_trvbm-a_defdate-0_tstar-0_trat-0_tprc-0_tamnt-0_trvref-0ef59875-b995-4480-a823-9a3cef0b69f8&sid=d2c7e093f073a6c21723c341995eac82&all_sr_blocks=2549002_295704952_2_0_0&checkin=2021-04-06&checkout=2021-04-08&dest_id=-408804&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=2549002_295704952_2_0_0&hpos=1&lang=de&no_rooms=1&room1=A%2CA&sb_price_type=total&soz=1&sr_order=popularity&sr_pri_blocks=2549002_295704952_2_0_0__18580&srepoch=1617190186&srpvid=20d850d5219601e8&type=total&ucfs=1&lang_click=other;cdl=en-gb;lang_changed=1',
            linkAirbnb: 'https://www.airbnb.ch/rooms/39353570?adults=2&check_in=2021-04-06&source_impression_id=p3_1617189548_2ptMidTajDJa6Xre&check_out=2021-04-08&federated_search_id=804e33e0-9686-47f8-89fe-f91121fe2031&_set_bev_on_new_domain=1610717448_OThlZDNiYjRjNWU2&guests=1&locale=de'
          };
          break;
        case 'fr':
          return {
            linkTripadvisor:
              'https://www.tripadvisor.fr/Hotel_Review-g1080319-d1444597-Reviews-Alojamientos_Huetor-Vinuela_Province_of_Malaga_Andalucia.html#REVIEWS',
            linkZoover: 'http://www.zoover.fr/espagne/andalousie/vinuela/huetor-casitas/maison-de-vacances',
            linkEviivo: 'https://via.eviivo.com/fr-FR/alojamientoshuetor',
            linkBooking: 'https://www.booking.com/hotel/es/alojamientos-huetor.fr.html?aid=340303&label=metatrivago-hotel-25490_xqdz-649b8b_los-2_nrm-1_gstadt-2_gstkid-0_curr-eur_lang-nl_mcid-10_dev-dsk_losb-2_bw-6_bwb-5_pg-1_trvbm-a_defdate-0_tstar-0_trat-0_tprc-0_tamnt-0_trvref-0ef59875-b995-4480-a823-9a3cef0b69f8&sid=d2c7e093f073a6c21723c341995eac82&all_sr_blocks=2549002_295704952_2_0_0&checkin=2021-04-06&checkout=2021-04-08&dest_id=-408804&dest_type=city&group_adults=2&group_children=0&hapos=1&highlighted_blocks=2549002_295704952_2_0_0&hpos=1&lang=fr&no_rooms=1&room1=A%2CA&sb_price_type=total&soz=1&sr_order=popularity&sr_pri_blocks=2549002_295704952_2_0_0__18580&srepoch=1617190186&srpvid=20d850d5219601e8&type=total&ucfs=1&lang_click=other;cdl=de;lang_changed=1',
            linkAirbnb: 'https://www.airbnb.fr/rooms/39353570?check_out=2021-04-08&adults=2&check_in=2021-04-06&federated_search_id=804e33e0-9686-47f8-89fe-f91121fe2031&guests=1&source_impression_id=p3_1617189548_2ptMidTajDJa6Xre&_set_bev_on_new_domain=1610717448_OThlZDNiYjRjNWU2'
          };
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
h4 {
  font-family: 'Satisfy', cursive;
  font-size: 2em;
}
.reservation-reviews {
  margin: 20px 0;
}
img {
  width: 70%;
}

img.booking {
  width: 100%;
}

img.airbnb {
  width: 40%;
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
  font-size: 1.8em;
}
.link-review {
  padding: 10px 20px;
  border-radius: 20px;
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
  .link-eviivo {
    font-size: 1.4em;
  }
  img {
    width: 100%;
  }
  .reservation-reviews {
    margin-top: 15px;
  }
}
</style>
