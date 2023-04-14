<template>
  <div class="container">
    <n-row>
      <!-- <n-row> -->
      <n-col :span="12">
        <div class="light-green">
          <div class="input-container">
            <n-space vertical>
              <h2>
                Bienvenido a VivaBanco
                <p class="text-center">Número {{ Número }}</p>
              </h2>

              <div class="imgs1">
                <img
                  v-if="!contrasena && showImage"
                  src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/null/external-keyboard-digital-marketing-xnimrodx-lineal-color-xnimrodx.png"
                />
                <img
                  class="imgs2"
                  v-if="contrasena && showImages"
                  src="https://img.icons8.com/cute-clipart/64/null/lock.png"
                />
              </div>
              <input
                type="number"
                placeholder="Documento"
                :maxlength="10"
                :minlength="6"
                v-model="documento"
                readonly
              />
              <input
                placeholder="Contraseña"
                type="password"
                :maxlength="4"
                v-model="contrasena"
                readonly
              />
            </n-space>
          </div>
        </div>
      </n-col>
      <n-col :span="12">
        <div class="green">
          <div class="botones-container">
            <button
              v-for="numero in numeros"
              :key="numero"
              @click="addDigit(numero)"
            >
              {{ numero }}
            </button>
            <button class="delet" @click="deleteDigit()">
              Corregir
              <n-icon>
                <CloseCircle />
              </n-icon>
            </button>
             <button
              :key="numero"
              @click="addDigit(0)"
            >
              0
            </button>
            <button class="go" @click="go()">
              Continuar
              <n-icon>
                <ChevronForwardCircle />
              </n-icon>
            </button>
          </div>
        </div>
      </n-col>
    </n-row>
    <div>
      <audio ref="audioPlayer">
        <source src="../assets/audio/sound-keys.mp3" type="audio/mpeg" />
      </audio>
    </div>
  </div>
</template>

<script>
import { NIcon } from "naive-ui";
import { ChevronForwardCircle, CloseCircle } from "@vicons/ionicons5";
export default {
  components: {
    NIcon,
    ChevronForwardCircle,
    CloseCircle,
  },
  data() {
    return {
      documento: "",
      contrasena: "",
      numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      showImage: false,
      showImages: false,
    };
  },
  methods: {
    addDigit(numero) {
      if (this.documento.length < 10) {
        this.$refs.audioPlayer.play();
        this.documento += numero.toString();
        if (this.documento.length === 1) {
          this.showImage = true;
        }
      } else if (this.contrasena.length < 4) {
        this.$refs.audioPlayer.play();
        this.contrasena += numero.toString();
        if (this.contrasena.length === 1) {
          this.showImages = true;
        }
      }
    },
    deleteDigit() {
      if (this.contrasena.length > 0) {
        this.$refs.audioPlayer.play();
        this.contrasena = this.contrasena.slice(0, -1);
      } else {
        this.$refs.audioPlayer.play();
        this.documento = this.documento.slice(0, -1);
      }
    },
    go() {
      if (this.contrasena.length < 4 || this.documento.length < 10) {
        alert(
          "La contraseña debe tener al menos 4 caracteres y el número debe tener al menos 10 dígitos"
        );
      } else {
        // Continúa con la lógica normal
        this.documento =""
        this.contrasena = ""
        console.log("Continuar");
      }
    },
  },
};
</script>

<style>
* {
  font-family: "Poppins", sans-serif !important;
  font-weight: 400;
}

.input-container {
  margin-bottom: 20px;
}

.botones-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1%;
  justify-items: center;
  align-items: center;
}

button {
  font-size: 20px;
  border-radius: 100px;
  background-color: #f23078;
  cursor: pointer;
  width: 94%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: auto;
  color: #f2f2f2;
  margin-top: 10px;
  border: transparent;
  font-weight: 700;
}

button:hover {
  background-color: transparent;
  border: 1px solid #f23078;
}

.delet {
  background-color: #78778c;
  border: transparent;
}

.go {
  background-color: #78778c;
  border: transparent;
}

body {
  background-color: rgb(19, 18, 64);
}

.light-green {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: rgb(19, 18, 64, 0.9);
  border: 1px solid rgb(19, 18, 64, 0.9);
  border-bottom-color: #32d9d9;
  border-left-color: #32d9d9;
  border-bottom-left-radius: 18px ;
  padding: 5px;
}

.green {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: rgb(19, 18, 64, 0.9);
  border: 1px solid rgb(19, 18, 64, 0.9);
  border-top-color: #32d9d9;
  border-right-color: #32d9d9;
  border-top-right-radius: 18px ;
  padding: 5px;
}

h2 {
  color: #f2f2f2;
  margin-bottom: -4%;
  font-weight: 700;
}
p {
  font-weight: 70;
}
input {
  width: 100%;
  color: #32d9d9;
  border-radius: 4px;
  font-weight: 700;
  font-size: 80px;
  background-color: rgba(41, 39, 142, 0.8);
  margin-top: 15px;
  margin-bottom: 2px;
}

::placeholder {
  color: #f23078;
}

.container {
  margin: 25% auto;
  width: 100%;
  height: 100vh;
  max-width: 1024px;
  max-height: 768px;
  color: #f2f2f2;
  background-color: #131240;
  overflow: hidden;
}
.imgs1 {
  margin-left: 76%;
  position: absolute;
  top: 1.2%;
  margin-top: 14%;
  z-index: 1;
}
.imgs2 {
  margin-left: -100%;
  position: absolute;
  top: 1.2%;
  margin-top: 16%;
  z-index: 1;
}

img {
  width: 100px;
}

.imgs1 img,
.imgs2 img {
  animation: moveUpDown 3s infinite;
}

@keyframes moveUpDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
