<template>
  <div class="container-fluid">
    <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Open Modal</b-button>
    <b-modal ref="modal" id="bv-modal-example" hide-footer scrollable hide-header-close no-close-on-esc no-close-on-backdrop>
      <template #modal-title>
        Política de cookies
      </template>
      <template v-if="!showCookieText">
        <div class="d-block text-left">
          <p>
            CONSTRUCCIONES HUETOR 2001, S.L. utiliza cookies propias y de terceros para posibilitar y mejorar tu experiencia de
            navegación, mostrarte publicidad personalizada así como para realizar análisis estadísticos.
          </p>
          <p>Obtendrás más información en
            nuestra <b>Política de cookies.</b> pulsando <b style="cursor: pointer;" @click="showCookieText =true">aquí</b>
          </p>
          <p>Para administrar o deshabilitar estas cookies haz click en Configuración de Cookies.</p>
        </div>
        <b-button class="mt-3" block @click="hideModal()">Configuración de Cookies</b-button>
        <b-button class="mt-3" block @click="hideModal()">Aceptar</b-button>
      </template>
      <cookie-text v-if="showCookieText" @back="closeCookieText" />
      <!--      <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>-->
    </b-modal>
  </div>
</template>

<script>
import cookieText from "@/components/cookieText";
export default {
  name: 'DataProtection',
  components: { cookieText },
  data() {
    return {
      showConfig: false,
      showCookieText: false,
    }
  },
  methods: {
    hideModal() {
      this.$refs['modal'].hide()
    },
    closeCookieText() {
      this.showCookieText = false
    }
  }
}
</script>

<style scoped>
  .card {
    position: fixed;
    top: 80vh;
  }
</style>
