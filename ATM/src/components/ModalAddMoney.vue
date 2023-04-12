<template>

    <div>
        <n-loading-bar-provider>
        <n-message-provider>
            <n-notification-provider>
            <n-dialog-provider>
                <n-space class="mt-5">
                <n-button icon-placement="left" @click="showModal = true">
                    <template #icon>
                    <n-icon>
                        <MdCash/>
                    </n-icon>
                    </template>
                    Agregar Efectivo
                </n-button>
                </n-space>
                <!-- <n-button @click="showModal = true">
                    Start Me up
                </n-button> -->
                <!-- <n-modal
                v-model:show="showModal"
                :mask-closable="false"
                preset="dialog"
                title="Agregando Dinero"
                content="<form><input type='text'></form>"
                positive-text="Confirm"
                negative-text="Cancel"
                
                /> -->
                <n-modal v-model:show="showModal"  >
                   
                    <n-card
                    class="color-text"
                    closable @close="handleClose"
                    style="width: 80%"
                    title=""
                    :bordered="false"
                    size="huge"
                    role="dialog"
                    aria-modal="true"
                    >
                    <form class="d-flex">
                        <div class="w-100 px-3 border-container me-2">
                            <div class="mb-3">
                                <label for="diez" class="form-label fw-bold">Billetes de $10.000</label>
                                <input type="number" class="form-control " id="diez" placeholder="Cantidad">
                            </div>
                            <button type="submit" class="btn btn-pink w-100">Agregar</button>
                        </div>
                        <div class="w-100 px-3 border-container me-2">
                            <div class="mb-3">
                                <label for="diez" class="form-label fw-bold">Billetes de $20.000</label>
                                <input type="number" class="form-control " id="diez" placeholder="Cantidad">
                            </div>
                            <button type="submit" class="btn btn-pink w-100">Agregar</button>
                        </div>
                        <div class="w-100 px-3 border-container me-2">
                            <div class="mb-3">
                                <label for="diez" class="form-label fw-bold">Billetes de $50.000</label>
                                <input type="number" class="form-control " id="diez" placeholder="Cantidad">
                            </div>
                            <button type="submit" class="btn btn-pink w-100">Agregar</button>
                        </div>
                        <div class="w-100 px-3 border-container">
                            <div class="mb-3">
                                <label for="diez" class="form-label fw-bold">Billetes de $100.000</label>
                                <input type="number" class="form-control " id="diez" placeholder="Cantidad">
                            </div>
                            <button type="submit" class="btn btn-pink w-100">Agregar</button>
                        </div>

                       
                    </form>
                    <!-- <template #footer>
                        Footer
                    </template> -->
                    </n-card>
                </n-modal>
            </n-dialog-provider>
            </n-notification-provider>
        </n-message-provider>
        </n-loading-bar-provider>
        
    </div>
    
  </template>
  
  <!-- <script>
  import { defineComponent, ref } from "vue";
  import { useMessage } from "naive-ui";
  import {MdCash} from '@vicons/ionicons4';
  
  export default defineComponent({
    setup() {
    
      const message = useMessage();
      const showModalRef = ref(false);
      
      return {
        showModal: showModalRef,
        onPositiveClick() {
          message.success("Submit");
          showModalRef.value = false;
        },
        onNegativeClick() {
          message.success("Cancel");
          showModalRef.value = false;
        }
      };
    }
  });
  </script> -->
  <script setup>
  import { ref } from "vue";
  import {MdCash,MdClose} from '@vicons/ionicons4';

    
      
    const showModal = ref(false);

    const handleClose=() =>{
        showModal.value = false;
    }
    
    
    
 
  </script>

  <style scoped>
  .n-button:active,
  .n-button:focus,
  .n-button:hover {
  border-color: #131240 !important;
  box-shadow: 0 0 3px 1px #131240 !important;
  color: #131240;
  }
  
  .n-modal{
    background-color: #f2f2f2;
    border-radius: 20px;
  }
  input{
    background-color: #f2f2f2;
  }
  .btn-pink{
    background-color: #f23078;
    color:white;
    border-radius: 20px;
    
  }
  .color-text{
    color:rgb(33,0,73);
  }
  .border-container{
    border:3px solid #78778c;
    border-radius: 20px;
    padding:15px 20px;
  }
  </style>