const app = Vue.createApp({
  data() {
    return {
      sum: 0,
    };
  },
  watch: {
    result() {
      const that = this;
      setTimeout(function () {
        that.sum = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.sum < 37) {
        return "Not there yet";
      } else if (this.sum === 37) {
        return this.sum;
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    add(num) {
    //   this.sum = this.sum + num;
    this.sum += num;
    },
  },
}); // Create a new Vue app

app.mount("#assignment");
