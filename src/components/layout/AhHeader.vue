<template lang="pug">
  b-container
    b-navbar(toggleable="lg",type="light")
      b-navbar-toggle(target="nav_collapse")
      b-navbar-brand(to="/")
        img(:src="Logo", alt="Alojamientos Huetor",class="d-inline-block align-top")
      b-collapse#nav_collapse(is-nav)
        b-navbar-nav(class="ml-auto")
          router-link.nav-link(to="/") {{ $t('header.home') }}
          router-link.nav-link(to="reservations") {{ $t('header.reservations') }}
          router-link.nav-link(to="gallery") {{ $t('header.gallery') }}
          router-link.nav-link(to="contact") {{ $t('header.contact') }}
          b-nav-item-dropdown(:text="$t('header.languages.lang')" right)
            b-dropdown-item(@click="selectLang('es')") {{ $t('header.languages.es') }}
              img.icon(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fespana.svg?alt=media&token=cbdf0a1e-215c-43e6-ac76-28e0f47c90b2")
            b-dropdown-item(@click="selectLang('en')") {{ $t('header.languages.en') }}
              img.icon(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Freino-unido.svg?alt=media&token=ca4d1110-2f93-4759-8a32-a572e7138cd4")
            b-dropdown-item(href="#") {{ $t('header.languages.de') }}
            b-dropdown-item(href="#") {{ $t('header.languages.fr') }}
</template>

<script>
  export default {
    props: { 
      Logo: { type: String }
    },
    methods: {
    selectLang (lang) {
        this.$i18n.locale = lang
      }
    }
  }
</script>

<style scoped>
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
    align-items: center
  }
  @media screen and (max-width: 992px){
    .icon {
      width: 50px;
      /* margin-left: 10px; */
    }
  }
  @media screen and (max-width: 576px){
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