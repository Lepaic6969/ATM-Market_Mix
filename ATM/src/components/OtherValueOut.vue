<template>
  <div class="container">
    <h2 class="text-center mb-3">
      Digita el monto a retirar <br />
      en múltiplos de $10.000
    </h2>
    <h3 class="text-center fw-light">(Mín. $10.000, Máx. $720.000)</h3>
    <div class="container mx-auto d-flex justify-content-center align-items-center">
      <input
        ref="input"
        id="value"
        type="number"
        class="form-control custom-input-number my-5"
        v-model.number="newValue"
        @keydown="preventMinusSign"
        autofocus
        placeholder="0"
      />
      <label for="value" class="value-format">{{ newValueFormat }}</label>
    </div>
    <!-- text-info -->
    <div class="text-info my-5">
      <h3 class="text-center my-3">Si es correcto pulsa <b>Continuar</b></h3>
      <h3 class="text-center my-3">Si no es correcto pulsa <b>Retroceso</b> o <b>Borrar</b></h3>
      <h6 class="text-center my-3 text-info-light">
        <b>Retroceso</b> Elimina el ultimo digito / <b>Borrar</b> Limpia todo el valor
      </h6>
    </div>
    <!-- buttons -->
    <div class="row d-flex justify-content-center align items-center">
      <ButtonOut
        @click="deleteString"
        class="col-5"
        other="Borrar"
        classFaStart="fa-solid fa-delete-left"
      />
      <ButtonOut
        @showOtherValue="$emit('showOtherValue', newValue)"
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

  mounted() {
    window.addEventListener("keydown", this.handleKeyDown);
  },

  methods: {
    preventMinusSign(e) {
      this.handleKeyDown(e);
    },

    deleteString() {
      if (this.newValue) {
        this.$refs.audioPlayer.play();
        setTimeout(() => {
          this.newValue = null;
        }, 0);
      }
    },

    handleKeyDown(e) {
      const pressedKey = e.key;
      if (/^\d$/.test(pressedKey) || pressedKey === "Backspace") {
        this.$refs.input.focus();
        setTimeout(() => {
          this.$refs.audioPlayer.play();
        }, 320);
      } else {
        e.preventDefault();
      }
    },
  },

  computed: {
    newValueFormat() {
      const formatter = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
      });

      return formatter.format(this.newValue);
    },

    // newValueReturn() {
    //   if (this.newValue % 10000 !== 0 || this.newValue === 0 || !this.newValue) {
    //     Swal.fire("Error", `la cantidad ${this.newValue} deben ser múltiplos de $10.000 `, "error");
    //     this.deleteString();
    //     return false;
    //   } else {
    //     return this.newValue;
    //   }
    // },
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

.custom-input-number {
  background-color: #f2f2f2;
  color: #131240;
  border: none;
  border-radius: 20px;
  font-size: 42px;
  text-align: center;
  font-weight: 700;
  caret-color: transparent;
  width: 840px;
  height: 75px;
  opacity: 0;
  transition: ease-in-out;
}

.value-format {
  position: absolute;
  z-index: 100;
  /* background-color: #f2f2f2; */
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 72px;
  text-align: center;
  width: 840px;
  height: 75px;
  font-weight: 700;
  margin: 0 auto;
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
.text-info-light {
  color: #78778c !important;
}
</style>
