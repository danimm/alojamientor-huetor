<template lang="pug">
  b-container
    b-navbar(toggleable="md",type="light")
      b-navbar-toggle(target="nav_collapse")
      b-navbar-brand(href="#")
        img(:src="Logo", alt="Alojamientos Huetor")
      b-collapse#nav_collapse(is-nav)
        b-navbar-nav(class="ml-auto")
          b-nav-item(href="#") Inicio
          b-nav-item(href="#") Galería
          b-nav-item(href="#") Precio
          b-nav-item(href="#") Contacto
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