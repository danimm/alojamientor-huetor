<template lang="pug">
  b-container
    b-navbar(toggleable="md",type="light")
      b-navbar-toggle(target="nav_collapse")
      b-navbar-brand(href="#")
        img(:src="Logo", alt="Alojamientos Huetor")
      b-collapse#nav_collapse(is-nav)
        b-navbar-nav(class="ml-auto")
          router-link.nav-link(to="/") Inicio
          //- router-link.nav-link(to="about") Acerca de
          router-link.nav-link(to="pricing") Reservas
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
    max-width: 150px;
  }
</style>