<template lang="pug">
  .container
    .row
      .col-sm-12.text-center.col-md-6
        h3 Isabel Hijano Pérez
        h4 Alojamientos Huetor
        p {{ $t('contact.text1') }}
        img(:src="img.src")
      .col-sm-12.col-md-6
        h2 {{ $t('contact.text2') }}
        form(
          method="POST"
          action="https://formspree.io/huetor@gmail.com"
          )
          .form-group
            label(for="nombre") {{ $t('contact.form.name') }}
            input.form-control#nombre(
              :placeholder="$t('contact.form.namePH')"
              name="nombre",
              type="text",
              required
              )
          .form-group
            label(for="email") {{ $t('contact.form.email') }}
            input.form-control#email(
              :placeholder="$t('contact.form.emailPH')"
              name="email",
              type="email",
              required
              )
          .form-group
            label(for="mensaje") {{ $t('contact.form.message') }}
            textarea.form-control#mensaje(
              :placeholder="$t('contact.form.messagePH')"
              name="mensaje",
              rows="5",
              required
              )
          p {{ $t('contact.privacity') }}
            a(@click="goPrivacity") {{ $t('contact.link') }}

          button.btn.btn-primary(type='submit') {{ $t('contact.button') }}
          //- b-button(type='reset', variant='danger') Reiniciar

</template>

<script>
export default {
  data() {
    return {
      img: {
        src:
          'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/profile%2F3_profile.jpg?alt=media&token=20ffce68-639e-469d-a63b-ba291aeabfa3'
      }
    };
  },
  methods: {
    goPrivacity() {
      window.scrollTo(0, 0);
      this.$router.push('privacity');
    }
  },
  computed: {
    locale() {
      if (this.$i18n.locale == 'es') {
        return true;
      }
    }
  }
};
</script>

<style scoped>
h2 {
  font-family: 'Satisfy', cursive;
}
a {
  cursor: pointer;
  display: inline-block;
  padding: 0;
  color: blue !important;
  text-decoration: underline !important;
}
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
  width: 50%;
  object-fit: cover;

  border: 5px solid #2d3338ed;
  border-radius: 20px;
}

@media screen and (max-width: 767px) {
  .col-sm-12 {
    margin-bottom: 40px;
  }
  img {
    max-width: 50%;
  }
}
</style>
