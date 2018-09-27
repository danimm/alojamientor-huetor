<template lang="pug">
  header.sticky-top
    nav#navbar.navbar.navbar-expand-lg.navbar-dark
      .container
        a.navbar-brand(href='#')
          img(src='@/assets/Logo-Dark.svg', alt='')
        button.navbar-toggler.light(type='button', data-toggle='collapse', data-target='#navbarContent', aria-controls='navbarSupportedContent', aria-expanded='false', aria-label='Toggle navigation')
          span.navbar-toggler-icon
        #navbarContent.collapse.navbar-collapse
          ul.navbar-nav.ml-auto
            li.nav-item
              a.nav-link(href='#main')
                | Inicio 
                span.sr-only (current)
            li.nav-item
              a.nav-link(href='#') Galería
            li.nav-item
              a.nav-link(href='#speakers') Precio
            li.nav-item
              a.nav-link(href='#place-time') Contacto
            li.nav-item
              button.nav-link.btn.btn-outline-warning(data-target='#ReservaModal', data-toggle='modal') Reservar

</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  header {
    background: linear-gradient(to right, #D0E3CC -5%, #ACBD86 20%, #28544B 95%)
  }
  img {
    width: 140px;
  }
  nav {
    background-color: inherit;
  }
  // .nav-item .nav-link {
  //   color: rgba(255, 255, 255, 0.7);
  // }
</style>