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
        setPercentages(){

        },
        //Acciones para la carga de billetes.
        increment100(value){
            //TODO: Aquí debe ir la validación para que no se desborde mi contenedor.
            this.percentage100+=value;
        },
        increment50(value){
            //TODO: Aquí debe ir la validación para que no se desborde mi contenedor.
            this.percentage50+=value;
        },
        increment20(value){
            //TODO: Aquí debe ir la validación para que no se desborde mi contenedor.
            this.percentage20+=value;
        },
        increment10(value){
            //TODO: Aquí debe ir la validación para que no se desborde mi contenedor.
            this.percentage10+=value;
        },

        //Acciones para el retiro de Efectivo.
        decrement100(value){
            //TODO: Aquí debe ir la validación para que mi contenedor no tenga valores negativos de billetes.
            this.percentage100-=value;
        },
        decrement50(value){
            //TODO: Aquí debe ir la validación para que mi contenedor no tenga valores negativos de billetes.
            this.percentage50-=value;
        },
        decrement20(value){
           //TODO: Aquí debe ir la validación para que mi contenedor no tenga valores negativos de billetes.
            this.percentage20-=value;
        },
        decrement10(value){
            //TODO: Aquí debe ir la validación para que mi contenedor no tenga valores negativos de billetes.
            this.percentage10-=value;
        },
      
    },
    getters: {
        // doubleCount: (state) => state.count * 2,
      }
})