import { defineStore } from "pinia";
import Swal from "sweetalert2";
import fetchData from "../helpers/fetchData.js";

export const useMoneyStore = defineStore("money", {
  state: () => ({
    //Variables para los porcentajes
    percentage100: 50,
    percentage50: 50,
    percentage20: 50,
    percentage10: 50,
    //Variable para habilitar o desabilitar el modal
    showModal: false,
    //Este es el arreglo que habilita los contenedores para ingresar el dinero.
    container: [true, true, true, true],
  }),

  actions: {
    //Para inicializar los porcentajes con los valores que traiga el Backend.
    async setPercentages() {
      try {
        const { hundred, fifty, twenty, ten } = await fetchData("/atmdetails/7");
        // console.log(hundred,fifty,twenty,ten);
        this.percentage100 = (hundred * 100) / 1000;
        this.percentage50 = (fifty * 100) / 1000;
        this.percentage20 = (twenty * 100) / 1000;
        this.percentage10 = (ten * 100) / 1000;
      } catch (err) {
        // console.log(err);
      }
    },
    //Acción para calcular los billetes que se pueden agregar a los gabinetes.
    billsThatFit(percentage) {
      const amount = (1 - percentage / 100) * 1000;
      return Math.trunc(amount);
    },
    //Acciones para la carga de billetes.
    async increment100(value, amountOfBills) {
      try {
        if (this.percentage100 + value > 100) {
          const text =
            this.billsThatFit(this.percentage100) > 0
              ? `No hay espacio para agragar ${amountOfBills}
                     billetes de $100.000, sólo cabrían ${this.billsThatFit(this.percentage100)}
                     billetes más en el gabinete.`
              : "El gabinete para los billetes de $100.000 está completamente lleno.";
          this.showModal = false;
          return Swal.fire({
            icon: "error",
            title: "Oops...",
            text,
          });
        } else {
          //Aquí iría la petición HTTP.
          const data = {
            transactionType: "deposit",
            hundred: amountOfBills,
            fifty: 0,
            twenty: 0,
            ten: 0,
            atmId: 7,
            accountId: 1,
          };
          await fetchData("/transactions", "post", data);
          this.percentage100 += value;
        }
      } catch (err) {
        // console.log(err)
      }
    },
    async increment50(value, amountOfBills) {
      try {
        if (this.percentage50 + value > 100) {
          const text =
            this.billsThatFit(this.percentage50) > 0
              ? `No hay espacio para agragar ${amountOfBills}
                     billetes de $50.000, sólo cabrían ${this.billsThatFit(this.percentage50)}
                     billetes más en el gabinete.`
              : "El gabinete para los billetes de $50.000 está completamente lleno.";
          this.showModal = false;
          return Swal.fire({
            icon: "error",
            title: "Oops...",
            text,
          });
        } else {
          //Petición HTTP...
          const data = {
            transactionType: "deposit",
            hundred: 0,
            fifty: amountOfBills,
            twenty: 0,
            ten: 0,
            atmId: 7,
            accountId: 1,
          };
          await fetchData("/transactions", "post", data);
          this.percentage50 += value;
        }
      } catch (err) {
        // console.log(err)
      }
    },
    async increment20(value, amountOfBills) {
      try {
        if (this.percentage20 + value > 100) {
          const text =
            this.billsThatFit(this.percentage20) > 0
              ? `No hay espacio para agragar ${amountOfBills}
                     billetes de $20.000, sólo cabrían ${this.billsThatFit(this.percentage20)}
                     billetes más en el gabinete.`
              : "El gabinete para los billetes de $20.000 está completamente lleno.";
          this.showModal = false;
          return Swal.fire({
            icon: "error",
            title: "Oops...",
            text,
          });
        } else {
          //Petición HTTP.
          const data = {
            transactionType: "deposit",
            hundred: 0,
            fifty: 0,
            twenty: amountOfBills,
            ten: 0,
            atmId: 7,
            accountId: 1,
          };
          await fetchData("/transactions", "post", data);
          this.percentage20 += value;
        }
      } catch (err) {
        // console.log(err);
      }
    },
    async increment10(value, amountOfBills) {
      try {
        if (this.percentage10 + value > 100) {
          const text =
            this.billsThatFit(this.percentage10) > 0
              ? `No hay espacio para agragar ${amountOfBills}
                     billetes de $10.000, sólo cabrían ${this.billsThatFit(this.percentage10)}
                     billetes más en el gabinete.`
              : "El gabinete para los billetes de $10.000 está completamente lleno.";
          this.showModal = false;
          return Swal.fire({
            icon: "error",
            title: "Oops...",
            text,
          });
        } else {
          //Petición HTTP.
          const data = {
            transactionType: "deposit",
            hundred: 0,
            fifty: 0,
            twenty: 0,
            ten: amountOfBills,
            atmId: 7,
            accountId: 1,
          };
          await fetchData("/transactions", "post", data);
          this.percentage10 += value;
        }
      } catch (err) {
        // console.log(err);
      }
    },

    //Acciones para habilitar y desabilitar el modal

    handleClose() {
      this.showModal = false;
    },
    //Cuando quieren abrir todos los cajones de dinero...
    handleOpen() {
      this.container = [true, true, true, true];
      this.showModal = true;
    },
    //Cuando sólo quieren abrir un cajón en específico...
    handleOpenCustom(index) {
      this.container = [false, false, false, false];
      this.container[index] = true;
      this.showModal = true;
    },
  },
});
