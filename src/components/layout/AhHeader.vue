<template lang="pug">
  b-container
    b-navbar(toggleable="lg",type="light")
      b-navbar-toggle(target="nav_collapse")
      b-navbar-brand(to="/")
        img(:src="Logo", alt="Alojamientos Huetor",class="d-inline-block align-top")
      b-collapse#nav_collapse(is-nav)
        b-navbar-nav(class="ml-auto")
          router-link.nav-link(to="/") Inicio
          router-link.nav-link(to="reservations") Reservas
          router-link.nav-link(to="gallery") Galería
          router-link.nav-link(to="contact") Contacto
          b-nav-item-dropdown(text="Idiomas" right)
            b-dropdown-item(href="#") Español
            b-dropdown-item(href="#") Inglés
            b-dropdown-item(href="#") Alemán
            b-dropdown-item(href="#") Francés
</template>

<script>
  export default {
    props: { Logo: { type: String }}
  }
</script>

<style scoped>
  img {
    max-width: 180px;
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