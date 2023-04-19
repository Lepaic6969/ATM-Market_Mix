<template>
  <div v-if="!cash" class="d-flex flex-column justify-content-center align-items-center my-5">
    <h1 class="text-center my-5">Espere por favor....</h1>
  </div>
  <div class="container" v-else>
    <div class="container text-center my-3">
      <h2>Fue un placer servirte</h2>
      <h1>Por favor retira tu dinero</h1>
    </div>

    <!-- dispense cash -->
    <div class="container box d-flex justify-content-center align-items-center my-5">
      <div class="dispenser"></div>
    </div>
    <div class="cash text-center">
      <div
        class="container m-0 p-0"
        v-for="{ value } in valuesCash.slice().reverse()"
        :key="value"
        :class="'box-' + value"
      >
        <img class="img-fluid" :src="srcCash(value)" :alt="value" />
      </div>
    </div>

    <!-- button show details -->
    <div class="container d-flex justify-content-center align-items-center mb-3">
      <Button other="Imprimir el recibo" class="col-5" @showOtherValue="changeModal" />
    </div>

    <!-- modal -->
    <n-modal v-model:show="showModal" class="text-center">
      <n-card
        style="width: 500px"
        title="REGISTRO DE OPERACION"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
        <div class="container text-start">
          <p class="fw-bold">CAJERO AUTOMATICO</p>
          <p class="fw-bold">Fecha : {{ day }}</p>
        </div>

        <n-table :single-line="false" class="text-center">
          <thead>
            <tr>
              <th>Denominación</th>
              <th>Cantidad</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="{ value, count } in valuesCash" :key="value">
              <td>{{ newValueFormat(value) }}</td>
              <td>{{ count }}</td>
              <td>{{ newValueFormat(value * count) }}</td>
            </tr>
            <tr>
              <td>TOTAL</td>
              <td>{{ total.count }}</td>
              <td>{{ newValueFormat(total.cash) }}</td>
            </tr>
          </tbody>
        </n-table>

        <div class="container text-start">
          <ul class="my-3">
            <li>
              <i class="fa-solid fa-money-bill"></i> Disponible : {{ newValueFormat(balance) }}
            </li>
            <li><i class="fa-solid fa-wallet"></i> No. Cuenta : {{ NoAccount }}</li>
          </ul>
        </div>

        <div class="container text-center my-3">
          <h2>VivaBanco</h2>
          <span>Toda transaccion esta sujeta <br />a verificacion y aprobacion.</span>
        </div>
      </n-card>
    </n-modal>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Button: defineAsyncComponent(() => import("@/components/ButtonOut.vue")),
  },

  props: {
    cash: {
      type: Array,
      required: true,
    },

    rest: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      srcImg: "",
      valueClass: "",
      showModal: false,
      total: {
        cash: 0,
        count: 0,
      },
      day: new Date(Date.now()).toLocaleString(),
      balance: null,
      NoAccount: null,
    };
  },

  computed: {
    valuesCash() {
      const existCash = this.cash.filter((money) => money.count >= 1);
      this.total.cash = existCash.reduce((acc, money) => acc + money.count * money.value, 0);
      this.total.count = existCash.reduce((acc, money) => acc + money.count, 0);
      this.balance = this.rest.balance - this.total.cash;
      this.NoAccount = `**********${this.rest.accountNumber.toString().slice(-4)}`;

      return existCash;
    },
  },

  methods: {
    srcCash(value) {
      if (value === 10000) {
        // return (this.srcImg = `https://raw.githubusercontent.com/Lepaic6969/ATM-Market_Mix/main/ATM/src/assets/img/${value}.png`);
        return (this.srcImg = `/img/${value}.png`);
      }
      if (value === 20000) {
        return (this.srcImg = `/img/${value}.png`);
      }
      if (value === 50000) {
        return (this.srcImg = `/img/${value}.png`);
      }
      if (value === 100000) {
        return (this.srcImg = `/img/${value}.png`);
      }
    },

    changeModal() {
      // console.log("Impriemiendo");
      this.showModal = true;
    },

    newValueFormat(value) {
      const formatter = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
      });

      return formatter.format(value);
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 62px;
  font-weight: 700 !important;
}
h2 {
  font-size: 54px;
  font-weight: 300 !important;
}
.box {
  overflow: hidden;
  position: relative;
  width: 600px;
  height: 50px;
  padding: 2px;
  background-color: #000;
  border: 10px ridge #fff;
  z-index: 20 !important;
}
.dispenser {
  width: 100%;
  height: 100%;
  z-index: 10 !important;
  background-color: #f2f2f2;
  border: 1px solid #000;
  transition: 0.3s linear;
  animation: dispenserTransform 2.5s linear 1;
}

@keyframes cashTransform {
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-90px);
  }
  50% {
    opacity: 0;
    visibility: visible;
    transform: translateY(-45px);
  }
  100% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

@keyframes dispenserTransform {
  0% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  50% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-40px);
  }
  100% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

.cash {
  position: relative;
  margin: 0 auto;
  top: -50px;
  width: 500px;
  height: 250px;
  transform: perspective(250px) rotateX(10deg);
  transition: 0.3s linear;
}

.box-10000 {
  position: absolute;
  animation: cashTransform 0.5s ease-in-out 1;
  box-shadow: 0 2px 4px #000;
}
.box-20000 {
  position: absolute;
  animation: cashTransform 1s ease-in-out 1;
  box-shadow: 0 2px 4px #000;
}
.box-50000 {
  position: absolute;
  animation: cashTransform 1.5s ease-in-out 1;
  box-shadow: 0 2px 4px #000;
}
.box-100000 {
  position: absolute;
  animation: cashTransform 2s ease-in-out 1;
  box-shadow: 0 2px 4px #000;
}

.n-modal {
  color: #f2f2f2;
  background-color: #131240;
}

.n-table {
  border-radius: 10px;
}
</style>
