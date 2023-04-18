import { defineStore } from 'pinia';
import Swal from 'sweetalert2';

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
        //Acción para calcular los billetes que se pueden agregar a los gabinetes.
        billsThatFit(percentage){
         const amount =(1-(percentage/100))*1000;
         return Math.trunc(amount);
        },
        //Acciones para la carga de billetes.
        async increment100(value,amountOfBills){
            try{
                if(this.percentage100+value>100){
                    const text=(this.billsThatFit(this.percentage100)>0)?
                    `No hay espacio para agragar ${amountOfBills}
                     billetes de $100.000, sólo cabrían ${this.billsThatFit(this.percentage100)}
                     billetes más en el gabinete.`
                     :'El gabinete para los billetes de $100.000 está completamente lleno.';
                    return Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text,
                    });
                    
                }else{
                    //Aquí iría la petición HTTP.
                    console.log(amountOfBills);
                    this.percentage100+=value;
                }
              
            }catch(err){
                console.log(err)
            }
            
        },
        async increment50(value,amountOfBills){
            try{
                if(this.percentage50+value>100){
                    const text=(this.billsThatFit(this.percentage50)>0)?
                    `No hay espacio para agragar ${amountOfBills}
                     billetes de $50.000, sólo cabrían ${this.billsThatFit(this.percentage50)}
                     billetes más en el gabinete.`
                     :'El gabinete para los billetes de $50.000 está completamente lleno.';
                    return Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text,
                    });
                }else{
                    //Petición HTTP...
                    console.log(amountOfBills);
                    this.percentage50+=value;
                }
              
            }catch(err){
                console.log(err)
            }
           
        },
        async increment20(value,amountOfBills){
            try{
                if(this.percentage20+value>100){
                    const text=(this.billsThatFit(this.percentage20)>0)?
                    `No hay espacio para agragar ${amountOfBills}
                     billetes de $20.000, sólo cabrían ${this.billsThatFit(this.percentage20)}
                     billetes más en el gabinete.`
                     :'El gabinete para los billetes de $20.000 está completamente lleno.';
                    return Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text,
                    });
                }else{
                    //Petición HTTP.
                    console.log(amountOfBills);
                    this.percentage20+=value;
                }
                
            }catch(err){
                console.log(err);
            }
          
        },
        async increment10(value,amountOfBills){
            try{
                if(this.percentage10+value>100){
                    const text=(this.billsThatFit(this.percentage10)>0)?
                    `No hay espacio para agragar ${amountOfBills}
                     billetes de $10.000, sólo cabrían ${this.billsThatFit(this.percentage10)}
                     billetes más en el gabinete.`
                     :'El gabinete para los billetes de $10.000 está completamente lleno.';
                    return Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text,
                    });
                }else{
                    console.log(amountOfBills);
                    this.percentage10+=value;
                }
                
            }catch(err){
                console.log(err);
            }
           
        },


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