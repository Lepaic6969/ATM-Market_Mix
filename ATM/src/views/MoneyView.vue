<template>
  <div class="w-100 bg-total d-flex flex-column justify-content-center ">
    <div class=" mx-auto  bg-content p-5 " style="width: 95%;">
        <ProgressBar class="h-progress-bar mx-auto"/>
        <Legend/>
        <n-loading-bar-provider >
        <n-message-provider>
        <n-notification-provider>
          <n-dialog-provider>
            <ModalAddMoney />
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
import Legend from '../components/Legend.vue';

</script>

<style scoped>
.bg-content{
  background-color: #f2f2f2;
  border-radius: 20px;
  width: 90%;
  border:2px solid #f23078;
  

}

 .bg-total{
  background-color: #131240;
  height: 100vh;
 }
 .h-progress-bar{
  height: 200px;
 }
</style>