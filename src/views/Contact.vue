<template lang="pug">
  .container
    .row
      .col-sm-12.col-md-6
        h2 Envíanos tus dudas
        b-form(@submit='onSubmit', @reset='onReset', v-if='show')
          b-form-group#InputGroup1(
            label='Nombre:',
            label-for='exampleInput2'
            )
            b-form-input#InputText(
              type='text',
              v-model='form.name',
              required='',
              placeholder='Introduce tu nombre'
              )
          b-form-group#InputGroup2(
            label='Email:',
            label-for='InputEmail',
            description="No te enviaremos ningún tipo de correo no deseable a esta dirección."
            )
            b-form-input#InputEmail(
              type='email',
              v-model='form.email',
              required='',
              placeholder='Introduce tu email'
              )
          b-form-group
            b-form-textarea#TextArea(
              v-model="text",
              placeholder="Escribe lo que quieras",
              :rows="3",
              :max-rows="6"
              )
          b-button(type='submit', variant='primary') Enviar
          b-button(type='reset', variant='danger') Reiniciar
      .col-sm-12.text-center.col-md-6
        h2 Isabel Hijano Pérez
        h4 CEO Alojamientos Huetor
        p Hola! Soy Isa escríbeme cualquier duda que tengas y te intentaré responder en menos de 24 horas.
        img(:src="img.src")

</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
      },
      img: {
        src: 'https://a0.muscache.com/im/pictures/b387ac49-5c3d-4c0c-8762-76583de4cf78.jpg?aki_policy=profile_x_medium'
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<style scoped>
  .container {
    margin-top: 60px;
    margin-bottom: 60px;
  }
  .btn {
    margin-right: 20px;
  }
  h4 {
    margin-bottom: 20px;
  }
  img {
    width: 70%;
    border: 10px solid #2d3338ed;
    border-radius: 50%;
  }

  @media screen and (max-width: 567px){
    .col-sm-12 {
      margin-bottom: 40px;
    }
    img {
      max-width: 50%;
    } 
  }

</style>