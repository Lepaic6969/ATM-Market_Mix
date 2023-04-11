<template>
    <div>
        <!-- Diagramas Circulares -->
        <n-progress
        style="margin: 0 8px 12px 0"
        type="circle"
        :percentage="percentage100"
        color="rgb(78,146,137)"
        rail-color="changeColor(rgb(78,146,137), { alpha: 0.2 })"
        indicator-text-color="rgb(78,146,137)"
        />
        <n-progress
        style="margin: 0 8px 12px 0"
        type="circle"
        :percentage="percentage50"
        color="rgb(167,130,179)"
        rail-color="changeColor(rgb(167,130,179), { alpha: 0.2 })"
        indicator-text-color="rgb(167,130,179)"
        />
        <n-progress
        style="margin: 0 8px 12px 0"
        type="circle"
        :percentage="percentage20"
        color="rgb(251,130,72)"
        rail-color="changeColor(rgb(251,130,72), { alpha: 0.2 })"
        indicator-text-color="rgb(251,130,72)"
        />
        <n-progress
        style="margin: 0 8px 12px 0"
        type="circle"
        :percentage="percentage10"
        color="rgb(210,42,35)"
        rail-color="changeColor(rgb(210,42,35), { alpha: 0.2 })"
        indicator-text-color="rgb(210,42,35)"
        />

        <!-- Barras de progreso -->
        <n-progress
        type="line"
        indicator-placement="inside"
        color="rgb(78,146,137)"
        rail-color="changeColor(rgb(78,146,137), { alpha: 0.2 })"
        :percentage="percentage100"
        class="mb-2"
        />
        <n-progress
        type="line"
        indicator-placement="inside"
        color="rgb(167,130,179)"
        rail-color="changeColor(rgb(167,130,179), { alpha: 0.2 })"
        :percentage="percentage50"
        class="mb-2"
        />
      
        <n-progress
        type="line"
        indicator-placement="inside"
        color="rgb(251,130,72)"
        rail-color="changeColor(rgb(251,130,72), { alpha: 0.2 })"
        :percentage="percentage20"
        class="mb-2"
        />
        <n-progress
        type="line"
        indicator-placement="inside"
        color="rgb(210,42,35)"
        rail-color="changeColor(rgb(210,42,35), { alpha: 0.2 })"
        :percentage="percentage10"
        class="mb-2"
        />
    </div>
</template>
  
  <script setup>
  import { changeColor } from "seemly";
  import {storeToRefs} from 'pinia';
  import {useMoneyStore} from '../stores/money.js';

  const moneyStore=useMoneyStore();
  const {percentage10,percentage20,percentage50,percentage100} =storeToRefs(moneyStore);

  </script>
 