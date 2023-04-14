<template>
  <div class="main">
    <div class="container text-center mx-auto">
      <h1 class="fw-bold py-3 text-start">VivaBanco</h1>
    </div>
    <div class="row d-flex justify-content-center align items-center" v-if="!isShow">
      <h2 class="fw-light pb-3 text-center">Selecciona el valor a retirar</h2>
      <ButtonOut
        @setValue="cashOut"
        v-for="value in values"
        :key="value"
        :value="value"
        class="col-5"
      />
      <ButtonOut @showOtherValue="otherValue" class="col-5" />
    </div>

    <!-- Other Component  Other Value-->
    <OtherValueOut v-else @showOtherValue="otherValue" />

    <!-- audio -->
    <audio ref="audioPlayer">
      <source src="../assets/audio/sound-keys.mp3" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    ButtonOut: defineAsyncComponent(() => import("@/components/ButtonOut.vue")),
    OtherValueOut: defineAsyncComponent(() => import("@/components/OtherValueOut.vue")),
  },

  data() {
    return {
      values: [10000, 20000, 50000, 100000, 200000, 300000, 400000, 500000, 600000],
      isShow: false,
    };
  },

  methods: {
    soundKeys() {
      setTimeout(() => {
        this.$refs.audioPlayer.play();
      }, 320);
    },

    otherValue() {
      this.soundKeys();
      this.isShow = true;
    },

    cashOut() {
      this.soundKeys();
      console.log("esperando backend");
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
  max-width: 1024px;
  max-height: 768px;
  color: #f2f2f2;
  background-color: #131240;
  overflow: hidden;
  font-family: "Poppins", sans-serif !important;
  font-weight: 400;
}
</style>
