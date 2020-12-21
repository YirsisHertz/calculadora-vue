const app = Vue.createApp({
  data() {
    return {
      title: "Calculadora Dinamica",
      number1: "",
      number2: "",
      type: "success",
    };
  },
  computed: {
    suma() {
      return this.number1 + this.number2;
    },
    resta() {
      return this.number1 - this.number2;
    },
    multiplicacion() {
      return this.number1 * this.number2;
    },
    division() {
      if (this.number1 / this.number2 != Infinity) {
        this.type = "success";
        return this.number1 / this.number2;
      } else {
        this.type = "error";
        return "No calculable";
      }
    },
  },
});
