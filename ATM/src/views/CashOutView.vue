<template>
  <div class="main">
    <div class="container text-center mx-auto">
      <h1 class="fw-bold py-3 text-start">VivaBanco</h1>
    </div>
    <!-- Values -->
    <Values
      v-if="!isShow && !withdrawal"
      @showOtherValue="showOtherValue"
      @setValue="cashOut"
      v-show="withdrawal"
    />

    <!-- Other Component  Other Value-->
    <OtherValueOut v-if="isShow && !withdrawal" @showOtherValue="cashOut" />

    <!-- Cash -->
    <Cash v-if="withdrawal" :cash="cash" :rest="restOptions" />

    <!-- audio -->
    <audio ref="audioPlayer">
      <source src="../assets/audio/sound-keys.mp3" type="audio/mpeg" />
    </audio>
    <!-- audio cashOut -->
    <audio ref="cashOutAudio">
      <source src="../assets/audio/sound-cashout.mp3" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import fetchData from "../helpers/fetchData";
import Swal from "sweetalert2";

export default {
  components: {
    OtherValueOut: defineAsyncComponent(() => import("@/components/OtherValueOut.vue")),
    Values: defineAsyncComponent(() => import("@/components/Values.vue")),
    Cash: defineAsyncComponent(() => import("@/components/Cash.vue")),
  },

  data() {
    return {
      // values: [10000, 20000, 50000, 100000, 200000, 300000, 400000, 500000, 600000],
      isShow: false,
      inactiveTime: 0,
      interval: null,
      user: {},
      withdrawal: false,
      cash: null,
      restOptions: null,
    };
  },

  methods: {
    soundKeys() {
      setTimeout(() => {
        this.$refs.audioPlayer.play();
      }, 320);
    },

    playSoundWithdrawal() {
      this.$refs.cashOutAudio.play();
    },

    showOtherValue(value) {
      this.soundKeys();
      this.isShow = value;
    },

    // withdrawal
    async cashOut(amount) {
      this.soundKeys();

      if (amount % 10000 !== 0) {
        Swal.fire("Error", `la cantidad ${amount} deben ser múltiplos de $10.000 `, "error");
        return false;
      }

      if (amount === 0) {
        amount = 10000;
      }

      const { id: accountId, ...rest } = { ...this.user.account };
      this.restOptions = rest;

      const dataToSave = {
        transactionType: "withdrawal",
        hundred: 0,
        fifty: 0,
        twenty: 0,
        ten: 0,
        amount,
        atmId: 7,
        accountId,
      };

      // console.log(dataToSave);

      const { data } = await fetchData("/transactions", "post", dataToSave);

      this.playSoundWithdrawal();
      this.withdrawal = true;

      setTimeout(() => {
        this.cash = data;
      }, 2800);

      localStorage.removeItem("user");
      localStorage.removeItem("token");

      this.interval = setInterval(() => {
        this.detecInactive();
      }, 1000);
    },
    // end withdrawal

    rebootTime() {
      this.inactiveTime = 0;
    },

    outRoute() {
      clearInterval(this.interval);
      this.$router.push({ name: "welcome" });
    },

    detecInactive() {
      this.inactiveTime++;
      // console.log(this.inactiveTime);
      if (this.inactiveTime > 20) {
        this.outRoute();
      }
    },
  },

  created() {
    const user = localStorage.getItem("user");
    if (user) {
      this.user = { ...JSON.parse(user) };
    } else {
      this.$router.push({ name: "welcome" });
    }
  },

  mounted() {
    document.title = "Retiros";
    window.addEventListener("mousemove", this.rebootTime);
    window.addEventListener("touchmove", this.rebootTime);
    window.addEventListener("keydown", this.rebootTime);

    if (this.$route.fullPath === "/cashout") {
      this.interval = setInterval(() => {
        this.detecInactive();
      }, 1000);
    }
  },

  beforeMount() {
    window.removeEventListener("mous", this.rebootTime);
    window.removeEventListener("keydown", this.rebootTime);
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
