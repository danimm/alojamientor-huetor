<template>
  <div id="carousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="@/assets/images/image1.jpg" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="@/assets/images/image2.jpg" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="@/assets/images/image3.jpg" alt="Third slide">
      </div>
      <div class="overlay">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 offset-md-6 text-center text-md-right">
              <h1 class="display-3">Alojamientos Huetor</h1>
              <p class="d-none d-md-block h4">Ven a vivir una experiencia única en las mejores casas rurales de la provincia de Málaga.</p>
              <a href="#" class="btn btn-outline-light">Conócenos</a>
              <button class="btn btn-warning" data-toggle="modal" data-target="#ReservaModal">Reservar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
</div>

</template>

<script>
export default {}
</script>

<style scoped>
  #carousel {
    position: relative;
  }
  #carousel .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    color: #F1F1F1;
  }
  #carousel .overlay .container,
  #carousel .overlay .row {
    height: 100%;
  }

  .carousel-inner img {
    /* filter: grayscale(20%) */
    max-height: 80vh;
    object-fit: cover;
  }

  .carousel-item:nth-of-type(1) img {
    object-position: 50% 37%;
  }
  .carousel-item:nth-of-type(2) img {
    object-position: 0 70%;
  }
  .carousel-item:nth-of-type(3) img {
    object-position: 50% bottom;
  }

</style>