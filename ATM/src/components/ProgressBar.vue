<template>
    
    <div>
      <!-- Este es para habilitar los diferentes diagramas -->
      <div class="mb-4">
        <n-space>
          <n-button icon-placement="left" @click="setDiagramType('circle')" >
            <template #icon>
              <n-icon>
                <MdPie />
              </n-icon>
            </template>
            Diagrama Circular
          </n-button>
          
          <n-button icon-placement="left" @click="setDiagramType('bars')">
            <template #icon>
              <n-icon>
                <MdStats/>
              </n-icon>
            </template>
            Diagrama de Barras
          </n-button>
        </n-space>
      </div>
      <!-- Diagramas Circulares -->
      <div v-if="diagramType==='circle'" class="mt-5">
        <n-progress
        style="margin: 0 60px 12px 0"
        type="circle"
        :percentage="percentage100"
        color="rgb(78,146,137)"
        rail-color="changeColor(rgb(78,146,137), { alpha: 0.2 })"
        indicator-text-color="rgb(78,146,137)"
        @click="handleOpenCustom(0)"
        />
        <n-progress
        style="margin: 0 60px 12px 0"
        type="circle"
        :percentage="percentage50"
        color="rgba(106, 13, 173,0.9)"
        rail-color="changeColor(rgba(106, 13, 173,0.9)), { alpha: 0.2 })"
        indicator-text-color="rgba(106, 13, 173,0.9)"
        @click="handleOpenCustom(1)"
        />
        <n-progress
        style="margin: 0 60px 12px 0"
        type="circle"
        :percentage="percentage20"
        color="rgb(251,130,72)"
        rail-color="changeColor(rgb(251,130,72), { alpha: 0.2 })"
        indicator-text-color="rgb(251,130,72)"
        @click="handleOpenCustom(2)"
        />
        <n-progress
        style="margin: 0 60px 12px 0"
        type="circle"
        :percentage="percentage10"
        color="rgb(210,42,35)"
        rail-color="changeColor(rgb(210,42,35), { alpha: 0.2 })"
        indicator-text-color="rgb(210,42,35)"
        @click="handleOpenCustom(3)"
        />

      </div>
      <!-- Barras de progreso -->
      <div v-if="diagramType==='bars'" class="mt-5">
        <n-progress
        type="line"
        indicator-placement="inside"
        color="rgb(78,146,137)"
        rail-color="changeColor(rgb(78,146,137), { alpha: 0.2 })"
        :percentage="percentage100"
        class="mb-3"
        @click="handleOpenCustom(0)"
        />
        <n-progress
        type="line"
        indicator-placement="inside"
        color="rgba(106, 13, 173,0.9)"
        rail-color="changeColor(rgba(106, 13, 173,0.9), { alpha: 0.2 })"
        :percentage="percentage50"
        class="mb-3"
        @click="handleOpenCustom(1)"
        />
      
        <n-progress
        type="line"
        indicator-placement="inside"
        color="rgb(251,130,72)"
        rail-color="changeColor(rgb(251,130,72), { alpha: 0.2 })"
        :percentage="percentage20"
        class="mb-3"
        @click="handleOpenCustom(2)"
        />
        <n-progress
        type="line"
        indicator-placement="inside"
        color="rgb(210,42,35)"
        rail-color="changeColor(rgb(210,42,35), { alpha: 0.2 })"
        :percentage="percentage10"
        class="mb-3"
        @click="handleOpenCustom(3)"
        />
      </div>
    </div>
</template>
  
  <script setup>
  import {storeToRefs} from 'pinia';
  import {useMoneyStore} from '../stores/money.js';
  import {ref} from 'vue';
  import { MdStats,MdPie } from "@vicons/ionicons4";

  const moneyStore=useMoneyStore();
  const {percentage10,percentage20,percentage50,percentage100} =storeToRefs(moneyStore);
  const {handleOpenCustom}=moneyStore;

  //Variable que se encarga de habilitar las barras o los diagramas circulares.
  const diagramType=ref("bars");
  //Función para habilitar el tipo de diagramas
  const setDiagramType=(type)=>{
    diagramType.value=type;
  }

  </script>

<style scoped>
.n-button{
  font-size: 20px;
}
.n-button:active,
.n-button:focus,
.n-button:hover {
  border-color: #131240 !important;
  box-shadow: 0 0 3px 1px #131240 !important;
  color: #131240;
}

</style>
 