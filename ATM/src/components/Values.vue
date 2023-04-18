<template>
  <div class="row d-flex justify-content-center align items-center">
    <h2 class="fw-light pb-3 text-center">Selecciona el valor a retirar</h2>
    <ButtonOut
      @setValue="$emit('setValue', value)"
      v-for="value in values"
      :key="value"
      :value="value"
      class="col-5"
    />
    <ButtonOut @showOtherValue="$emit('showOtherValue', true)" class="col-5" />
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
      values: [10000, 20000, 50000, 100000, 200000, 300000, 400000, 500000, 600000],
    };
  },

  methods: {},
};
</script>

<style></style>
