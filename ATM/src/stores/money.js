import { defineStore } from 'pinia';

export const useMoneyStore = defineStore('money', {
    state: () => ({ 
        percentage100:100,
        percentage50:50,
        percentage20:20,
        percentage10:10

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
        async increment100(value){
            try{
                //TODO: Aquí debe ir la validación para que no se desborde mi contenedor.
                this.percentage100+=value;
            }catch(err){
                console.log(err)
            }
            
        },
        async increment50(value){
            try{
                //TODO: Aquí debe ir la validación para que no se desborde mi contenedor.
                this.percentage50+=value;
            }catch(err){
                console.log(err)
            }
           
        },
        async increment20(value){
            try{
                //TODO: Aquí debe ir la validación para que no se desborde mi contenedor.
                this.percentage20+=value;
            }catch(err){
                console.log(err);
            }
          
        },
        async increment10(value){
            try{
                //TODO: Aquí debe ir la validación para que no se desborde mi contenedor.
                this.percentage10+=value;
            }catch(err){
                console.log(err);
            }
           
        },

        //Acciones para el retiro de Efectivo.
        async decrement100(value){
            try{
                //TODO: Aquí debe ir la validación para que mi contenedor no tenga valores negativos de billetes.
                this.percentage100-=value;
            }catch(err){
                console.log(err);
            }
            
        },
        async decrement50(value){
            try{
                //TODO: Aquí debe ir la validación para que mi contenedor no tenga valores negativos de billetes.
                this.percentage50-=value;
            }catch(err){
                console.log(err);
            }
           
        },
        async decrement20(value){
            try{
                //TODO: Aquí debe ir la validación para que mi contenedor no tenga valores negativos de billetes.
                this.percentage20-=value;
            }catch(err){
                console.log(err);
            }
           
        },
        async decrement10(value){
            try{
                //TODO: Aquí debe ir la validación para que mi contenedor no tenga valores negativos de billetes.
                this.percentage10-=value;
            }catch(err){
                console.log(err);
            }
            
        },
      
    },
    getters: {
        // doubleCount: (state) => state.count * 2,
      }
})