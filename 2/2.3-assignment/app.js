const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      userInput: "",
      confirmedInput: "",
    };
  },
  methods: {
    showAlert(event) {
      event.preventDefault();
      alert("This Works!");
    },
    saveInput(event) {
      this.userInput = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.userInput;
    },
    
  },
});

app.mount("#assignment");
