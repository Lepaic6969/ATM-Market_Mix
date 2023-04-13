<template>
  <div class="container">
    <h2 class="text-center mb-3">
      Digita el monto a retirar <br />
      en múltiplos de $10.000
    </h2>
    <h3 class="text-center fw-light">(Mín. $10.000, Máx. $720.000)</h3>
    <div class="container mx-auto d-flex justify-content-center align-items-center">
      <span class="sign">$</span>
      <input
        type="number"
        class="form-control custom-input-number my-5"
        v-model.number="newValue"
        @keydown="preventMinusSign"
        autofocus
        placeholder="0"
      />
    </div>
    <!-- text-info -->
    <div class="text-info my-5">
      <h3 class="text-center">Si es correcto pulsa <b>Enter</b> o <b>Continuar</b></h3>
      <h3 class="text-center">Si no es correcto pulsa <b>Retroceso</b> o <b>Borrar</b></h3>
    </div>
    <!-- buttons -->
    <div class="row d-flex justify-content-center align items-center">
      <ButtonOut
        @showOtherValue="$emit('showOtherValue')"
        class="col-5"
        other="Borrar"
        classFaStart="fa-solid fa-delete-left"
      />
      <ButtonOut
        @showOtherValue="$emit('showOtherValue')"
        class="col-5"
        other="Continuar"
        classFaEnd="fa fa-solid fa-chevron-right"
      />
    </div>

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
  },

  data() {
    return {
      newValue: null,
    };
  },

  methods: {
    preventMinusSign(e) {
      const formatNumber = Number(e.key);

      if (formatNumber || e.key === "0" || e.key === "Backspace") {
        setTimeout(() => {
          this.$refs.audioPlayer.play();
        }, 320);
      }

      if (e.key !== "0" && !Number(formatNumber) && e.key !== "Backspace") {
        e.preventDefault();
      }
    },
  },

  watch: {
    newValue(value, oldValue) {
      if (value < 0) {
        return (this.newValue = 0);
      }
      if (value > 720000) {
        return (this.newValue = 720000);
      }
    },
  },
};
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.sign,
.custom-input-number {
  background-color: #f2f2f2;
  color: #131240;
  border: none;
  font-size: 42px;
  text-align: center;
  font-weight: 700;
  caret-color: transparent;
  transition: ease-in-out;
}

.custom-input-number::placeholder {
  color: #131240;
}

.custom-input-number:focus {
  outline: solid #78778c;
  border: none;
}

.sign {
  position: relative;
  left: 100px;
}

.text-info {
  color: #32d9d9 !important;
}
</style>
