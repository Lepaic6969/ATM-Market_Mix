<template>
  <div class="w-100 bg-total py-5">
    <div class="w-75 mx-auto  bg-content p-3">
        <ProgressBar class="h-progress-bar"/>
        <!-- Botón para agregar Efectivo -->
        <!-- <n-space class="mt-5">
          <n-button icon-placement="left" >
            <template #icon>
              <n-icon>
                <MdCash/>
              </n-icon>
            </template>
            Agregar Efectivo
          </n-button>
        </n-space> -->
        <!--Modal para agregar dinero -->
        <n-loading-bar-provider>
        <n-message-provider>
        <n-notification-provider>
          <n-dialog-provider>
            <ModalAddMoney/>
          </n-dialog-provider>
        </n-notification-provider>
      </n-message-provider>
      </n-loading-bar-provider>
        
    </div>
  </div>
</template>

<script setup>
import ProgressBar from '../components/ProgressBar.vue';
import {MdCash} from '@vicons/ionicons4';
import ModalAddMoney from '../components/ModalAddMoney.vue';

</script>

<style scoped>
.bg-content{
  background-color: #f2f2f2;
  border-radius: 20px;
  width: 90%;
}
 .bg-total{
  background-color: #131240;
  height: 100vh;
 }
 .h-progress-bar{
  height: 200px;
 }
</style>