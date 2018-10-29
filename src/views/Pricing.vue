<template lang="pug">
  .container
    h2 Elige la mejor opción para tus próximas vacaciones
    .grid-container
      b-card.mb-2(
        tag='article',
        style='max-width: 20rem;'
        v-for="c in cards",
        :key="c.id"
        )
        h2 {{ c.title }}
        h3 {{ c.price }}
        ul
          li(
            v-for="item in c.list"
            :key="item.id"
            ) {{ item }}
        b-button(href='#', variant='primary') Elegir
    p * La estancia mínima para temporada alta (Julio - Agosto) es de una semana.
    p * No se admiten mascotas

</template>

<script>
  export default {
    data() {
      return {
        cards: [
          {
            title: 'Básico',
            price: '29',
            list: [
              '2 personas',
              '10,000 followers',
              'Analutycis reports',
              '3 reports per month'
            ]
          },
          {
            title: 'Avanzado',
            price: '59',
            list: [
              '5 account',
              '50,000 followers',
              'Analutycis reports',
              '10 reports per month'
            ]
          },
          {
            title: 'Profesional',
            price: '99',
            list: [
              '10 account',
              '90,000 followers',
              'Analytics reports',
              '40 reports per month'
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .container {
    padding-top: 50px;
  }
  .grid-container {
    margin: 50px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .btn {
    display: block;
    border-radius: 20px;
    margin-top: 40px;
  }
  .card {
    padding: 50px;
    border-radius: 10px;
    background-color: #F8F8DD;
  }
  .card-body h4, h3,h2 {
    text-align: center;
  }
  h3 {
    font-size: 50px;
  }
  h3::after {
    content: "/ Dia";
    font-size: 1rem;
  }
</style>