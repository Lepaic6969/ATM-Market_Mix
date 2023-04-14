<template>

    <div >
        <n-loading-bar-provider>
        <n-message-provider>
            <n-notification-provider>
            <n-dialog-provider>
                <n-space class="mt-3">
                <n-button icon-placement="left" @click="handleOpen">
                    <template #icon>
                    <n-icon>
                        <MdCash/>
                    </n-icon>
                    </template>
                    Agregar Efectivo
                </n-button>
                </n-space>
          
                <n-modal v-model:show="showModal" class="mx-auto" >
                   
                    <n-card
                    class="color-text"
                    closable @close="handleClose"
                    style="width:auto; max-width:95%;min-height: 350px; height: auto;"
                    title="VivaBanco"
                    :bordered="false"
                    size="huge"
                    role="dialog"
                    aria-modal="true"
                    >

                  <div class="d-flex">
                    <form class="mb-5 me-3" v-if="container[0]" @submit.prevent="handleForm100">
                          <div class="w-100 px-3 border-container bg-box " >
                            <div class="mb-3">
                                <label for="diez" class="form-label fw-bold ">Billetes de $100.000</label>
                                <input type="number" class="form-control " id="diez" placeholder="Número de billetes" v-model="oneHundred">
                                <div class="form-text" style="color:#f23078;font-size: 16px;" v-if="!oneHundredOk">Dato Incorrecto.</div>
                            </div>
                            <button type="submit" class="btn btn-pink w-100 fs-5">Agregar</button>
                        </div>
                    </form>
                     <form class="mb-5 me-3" v-if="container[1]" @submit.prevent="handleForm50">
                         <div class="w-100 px-3 border-container  bg-box" >
                            <div class="mb-3">
                                <label for="diez" class="form-label fw-bold">Billetes de $50.000</label>
                                <input type="number" class="form-control " id="diez" placeholder="Número de billetes" v-model="fifty" >
                                <div class="form-text" style="color:#f23078;font-size: 16px;" v-if="!fiftyOk">Dato Incorrecto.</div>
                            </div>
                            <button type="submit" class="btn btn-pink w-100 fs-5">Agregar</button>
                        </div>
                     </form>
                      <form class="mb-5 me-3"  v-if="container[2]" @submit.prevent="handleForm20">
                        <div class="w-100 px-3 border-container  bg-box" >
                            <div class="mb-3">
                                <label for="diez" class="form-label fw-bold">Billetes de $20.000</label>
                                <input type="number" class="form-control " id="diez" placeholder="Número de billetes" v-model="twenty">
                                <div class="form-text" style="color:#f23078;font-size: 16px;" v-if="!twentyOk">Dato Incorrecto.</div>
                            </div>
                            <button type="submit" class="btn btn-pink w-100 fs-5">Agregar</button>
                        </div>
                      </form>
                      <form class="mb-5 me-3" v-if="container[3]" @submit.prevent="handleForm10">
                           <div class="w-100 px-3 border-container  bg-box" >
                            <div class="mb-3">
                                <label for="diez" class="form-label fw-bold">Billetes de $10.000</label>
                                <input type="number" class="form-control " id="diez" placeholder="Número de billetes" v-model="ten">
                                <div class="form-text" style="color:#f23078;font-size: 16px;" v-if="!tenOk">Dato Incorrecto.</div>
                            </div>
                            <button type="submit" class="btn btn-pink w-100 fs-5">Agregar</button>
                        </div>
                      </form>
                     </div>
                    </n-card>
                </n-modal>
            </n-dialog-provider>
            </n-notification-provider>
        </n-message-provider>
        </n-loading-bar-provider>
        
    </div>
    
  </template>
  

  <script setup>
  import {MdCash,MdClose} from '@vicons/ionicons4';
  import {useMoneyStore} from '../stores/money.js';
  import { storeToRefs } from "pinia";
  import {ref} from 'vue';

  const moneyStore=useMoneyStore();
  const {showModal,container}=storeToRefs(moneyStore);
  const {handleClose,handleOpen,increment100,increment50,increment20,increment10}=moneyStore;
  
  //**********Programación para procesar los formularios******************

  //Variables reactivas de los formularios.
  const oneHundred=ref('');
  const fifty=ref('');
  const twenty=ref('');
  const ten=ref('');
  //Variables reactivas para los mensajes de error.
  const oneHundredOk=ref(true);
  const fiftyOk=ref(true);
  const twentyOk=ref(true);
  const tenOk=ref(true);

  const validateData=()=>{
    //Aquí van a ir todas las validaciones.
    //1.Que el dato ingresado sea numérico.
    //2.Que el dato ingresado sea mayor que 0.
  }
  const handleForm100=()=>{
    const porcentage=oneHundred.value*100/1000;
    increment100(porcentage,oneHundred.value);
    oneHundred.value="";
    if(!container.value[1]){
      handleClose();
    }
   
    
  }
  const handleForm50=()=>{
    const porcentage=fifty.value*100/1000;
    increment50(porcentage,fifty.value);
    fifty.value="";
    if(!container.value[0]){
      handleClose();
    }
  }
  const handleForm20=()=>{
    const porcentage=twenty.value*100/1000;
    increment20(porcentage,twenty.value);
    twenty.value="";
    if(!container.value[0]){
      handleClose();
    }
  }
   const handleForm10=()=>{
    const porcentage=ten.value*100/1000;
    increment10(porcentage,ten.value);
    ten.value="";
    if(!container.value[1]){
      handleClose();
    }
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