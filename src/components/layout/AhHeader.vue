<template lang="pug">
  b-container
    b-navbar(toggleable="lg",type="light")
      b-navbar-toggle(target="nav_collapse")
      b-navbar-brand(to="/")
        img(:src="Logo", alt="Alojamientos Huetor",class="d-inline-block align-top")
      b-collapse#nav_collapse(is-nav)
        b-navbar-nav(class="ml-auto")
          router-link.nav-link(to="/") {{ $t('header.home') }}
          a.nav-link.btn.btn-warning(:href="link" target="_blank") {{ $t('header.reservations') }}
          router-link.nav-link(to="reviews") {{ $t('header.reviews') }}
          router-link.nav-link(to="gallery") {{ $t('header.gallery') }}
          router-link.nav-link(to="contact") {{ $t('header.contact') }}
          router-link.nav-link(to="activities") {{ $t('header.activities') }}
          b-nav-item-dropdown(:text="$t('header.languages.lang')" right)
            b-dropdown-item(@click="selectLang('es')") {{ $t('header.languages.es') }}
              img.icon(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fespana%20(1).svg?alt=media&token=6fe8b235-f4d4-4c48-971b-3125842c0acb")
            b-dropdown-item(@click="selectLang('en')") {{ $t('header.languages.en') }}
              img.icon(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Freino-unido%20(1).svg?alt=media&token=b44d7fa5-07a9-42f8-9fc2-3a9bdd7bbd8b")
            b-dropdown-item(@click="selectLang('de')") {{ $t('header.languages.de') }}
              img.icon(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Falemania.svg?alt=media&token=05e06cb4-9b48-4a39-9471-8762b0e8e610")
            b-dropdown-item(@click="selectLang('fr')") {{ $t('header.languages.fr') }}
              img.icon(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Ffrancia.svg?alt=media&token=924ce700-e45a-47ba-b232-b5062cb3e701")
</template>

<script>
export default {
  props: {
    Logo: { type: String }
  },
  computed: {
    link() {
      switch (this.$i18n.locale) {
        case 'es':
          return 'https://via.eviivo.com/es-ES/alojamientoshuetor';
          break;
        case 'en':
          return 'https://via.eviivo.com/en-GB/alojamientoshuetor';
          break;
        case 'de':
          return 'https://via.eviivo.com/de-DE/alojamientoshuetor';
          break;
        case 'fr':
          return 'https://via.eviivo.com/fr-FR/alojamientoshuetor';
          break;

        default:
          return 'https://via.eviivo.com/AlojamientosHuetor';
          break;
      }
    }
  },
  methods: {
    selectLang(lang) {
      this.$i18n.locale = lang;
    }
  },
  beforeRouteLeave() {
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped>
.nav-link {
  text-align: center;
}
img {
  max-width: 180px;
}
.icon {
  width: 30%;
  /* margin-left: 10px; */
}
.dropdown-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
}
.icon {
  width: 35px;
}
@media screen and (max-width: 992px) {
  /* .container {
      height: 50px;
    }
    .navbar {
      position: fixed;
      z-index: 10;
      background-color: white;
      width: 95vw;
    } */
}
@media screen and (max-width: 576px) {
  img {
    max-width: 140px;
    object-fit: contain;
    /* height: ; */
  }
  .navbar-brand {
    margin-right: 0;
  }
  .navbar-light {
    padding: 0;
    padding-right: 0.5em;
  }
}
</style>
