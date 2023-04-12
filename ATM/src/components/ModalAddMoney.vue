<template>

    <div >
        <n-loading-bar-provider>
        <n-message-provider>
            <n-notification-provider>
            <n-dialog-provider>
                <n-space class="mt-3">
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
                <n-modal v-model:show="showModal" class="mx-3" >
                   
                    <n-card
                    class="color-text"
                    closable @close="handleClose"
                    style="width:auto;height: 350px;"
                    title="VivaBanco"
                    :bordered="false"
                    size="huge"
                    role="dialog"
                    aria-modal="true"
                    >
                 
                    <form class="d-flex mb-5">
                        <div class="w-100 px-3 border-container bg-box me-3">
                            <div class="mb-3">
                                <label for="diez" class="form-label fw-bold ">Billetes de $100.000</label>
                                <input type="number" class="form-control " id="diez" placeholder="Cantidad de billetes">
                            </div>
                            <button type="submit" class="btn btn-pink w-100 fs-5">Agregar</button>
                        </div>
                        <div class="w-100 px-3 border-container me-3 bg-box">
                            <div class="mb-3">
                                <label for="diez" class="form-label fw-bold">Billetes de $50.000</label>
                                <input type="number" class="form-control " id="diez" placeholder="Cantidad de billetes">
                            </div>
                            <button type="submit" class="btn btn-pink w-100 fs-5">Agregar</button>
                        </div>
                        <div class="w-100 px-3 border-container me-3 bg-box">
                            <div class="mb-3">
                                <label for="diez" class="form-label fw-bold">Billetes de $20.000</label>
                                <input type="number" class="form-control " id="diez" placeholder="Cantidad de billetes">
                            </div>
                            <button type="submit" class="btn btn-pink w-100 fs-5">Agregar</button>
                        </div>
                        <div class="w-100 px-3 border-container me-3 bg-box">
                            <div class="mb-3">
                                <label for="diez" class="form-label fw-bold">Billetes de $10.000</label>
                                <input type="number" class="form-control " id="diez" placeholder="Cantidad de billetes">
                            </div>
                            <button type="submit" class="btn btn-pink w-100 fs-5">Agregar</button>
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

  <style scoped >
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
  
  .n-modal{
    background-color: #131240;
    border-radius: 20px;
  }
 
  .bg-box{
    background-color: #f2f2f2;
    font-size: 20px;
  }
  input{
    background-color: #f2f2f2;
  }
  .btn-pink{
    background-color: #f23078;
    color:#f2f2f2;
    border: 2px solid #f23078;
    border-radius: 10px;
    
  }
  .btn-pink:hover {
  background-color: transparent;
  color: #f23078;
  font-weight:500;
}
  .color-text{
    color:rgb(33,0,73);
  }
  
  .border-container{
    border:3px solid #78778c;
    border-radius: 20px;
    padding:15px 20px;
  }
  h5{
    color:#f2f2f2;
    text-align: center;
    margin-bottom: 40px;
    font-weight: 400;
  }
  </style>