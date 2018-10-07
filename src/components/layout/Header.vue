<template>
  <b-container>
    <b-navbar toggleable="md" type="light">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">
        <img src="@/assets/Logo-Dark.svg" alt="Alojamientos Huetor">
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
          <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Inicio</b-nav-item>
          <b-nav-item href="#">Galería</b-nav-item>
          <b-nav-item href="#">Precio</b-nav-item>
          <b-nav-item href="#">Contacto</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  export default {
    
  }
</script>

<style scoped>
  img {
    max-width: 150px;
  }
</style>