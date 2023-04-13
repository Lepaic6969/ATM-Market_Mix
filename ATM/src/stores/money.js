import { defineStore } from 'pinia';

export const useMoneyStore = defineStore('money', {
    state: () => ({ 
        //Variables para los porcentajes
        percentage100:70,
        percentage50:50,
        percentage20:20,
        percentage10:10.5,
        //Variable para habilitar o desabilitar el modal
        showModal :false,
        //Este es el arreglo que habilita los contenedores para ingresar el dinero.
        container:[true,true,true,true],

    }),
    
    actions: {
        //Para inicializar los porcentajes con los valores que traiga el Backend.
        async setPercentages(){
            try{
            //1. Debo establecer la capacidad de los contenedores de billetes.
            //2. Debo establecer la cantidad de billetes que hay actualmente en cada contenedor.
            //3. Debo hacer una regla de 3 para saber que porcentaje es el que está lleno en cada contenedor.
            //4. Debo setear mi state con esos porcentajes.

            }catch(err){
                console.log(err);
            }

        },
        //Acciones para la carga de billetes.
        async increment100(value,amountOfBills){
            try{
                //TODO: Aquí debe ir la validación para que no se desborde mi contenedor.
                this.percentage100+=value;
            }catch(err){
                console.log(err)
            }
            
        },
        async increment50(value,amountOfBills){
            try{
                //TODO: Aquí debe ir la validación para que no se desborde mi contenedor.
                this.percentage50+=value;
            }catch(err){
                console.log(err)
            }
           
        },
        async increment20(value,amountOfBills){
            try{
                //TODO: Aquí debe ir la validación para que no se desborde mi contenedor.
                this.percentage20+=value;
            }catch(err){
                console.log(err);
            }
          
        },
        async increment10(value,amountOfBills){
            try{
                //TODO: Aquí debe ir la validación para que no se desborde mi contenedor.
                this.percentage10+=value;
            }catch(err){
                console.log(err);
            }
           
        },

        //Acciones para el retiro de Efectivo.
        // async decrement100(value){
        //     try{
        //         this.percentage100-=value;
        //     }catch(err){
        //         console.log(err);
        //     }
            
        // },
        // async decrement50(value){
        //     try{
        //         this.percentage50-=value;
        //     }catch(err){
        //         console.log(err);
        //     }
           
        // },
        // async decrement20(value){
        //     try{
        //         this.percentage20-=value;
        //     }catch(err){
        //         console.log(err);
        //     }
           
        // },
        // async decrement10(value){
        //     try{
        //         this.percentage10-=value;
        //     }catch(err){
        //         console.log(err);
        //     }
            
        // },
        //Acciones para habilitar y desabilitar el modal
        
        handleClose() {
            this.showModal= false;
        },
        //Cuando quieren abrir todos los cajones de dinero...
        handleOpen(){
            this.container=[true,true,true,true];
            this.showModal=true;
        },
        //Cuando sólo quieren abrir un cajón en específico...
        handleOpenCustom(index){
            this.container=[false,false,false,false];
            this.container[index]=true;
            this.showModal=true;
        }
      
    },
    getters: {
        // doubleCount: (state) => state.count * 2,
      }
})