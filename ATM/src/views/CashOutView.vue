<template>
  <div class="main">
    <div class="container text-center mx-auto">
      <h1 class="fw-bold py-3 text-start">VivaBanco</h1>
    </div>
    <!-- Values -->
    <Values v-if="!isShow" @showOtherValue="showOtherValue" @setValue="cashOut" />

    <!-- Other Component  Other Value-->
    <OtherValueOut v-else @showOtherValue="otherValue" />

    <!-- Cash -->
    <!-- <Cash /> -->

    <!-- audio -->
    <audio ref="audioPlayer">
      <source src="../assets/audio/sound-keys.mp3" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
import OtherValueOut from "@/components/OtherValueOut.vue";
import Values from "@/components/Values.vue";
import Cash from "@/components/Cash.vue";

export default {
  components: {
    OtherValueOut,
    Values,
    Cash,
  },

  data() {
    return {
      // values: [10000, 20000, 50000, 100000, 200000, 300000, 400000, 500000, 600000],
      isShow: false,
      inactiveTime: 0,
      interval: null,
    };
  },

  methods: {
    soundKeys() {
      setTimeout(() => {
        this.$refs.audioPlayer.play();
      }, 320);
    },

    showOtherValue(value) {
      this.soundKeys();
      this.isShow = value;
    },

    cashOut() {
      this.soundKeys();
      console.log("esperando backend");
    },

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
      if (this.inactiveTime > 15) {
        this.outRoute();
      }
    },
  },

  mounted() {
    window.addEventListener("mousemove", this.rebootTime);
    window.addEventListener("touchmove", this.rebootTime);
    window.addEventListener("keydown", this.rebootTime);

    // if (this.$route.fullPath === "/cashout") {
    //   this.interval = setInterval(() => {
    //     this.detecInactive();
    //   }, 1000);
    // }
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
