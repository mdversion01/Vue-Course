const app = Vue.createApp({
  data() {
    return {
      enteredTaskValue: "",
      tasks: [],
      taskListIsVisible: true,
    };
  },
  //   computed: {
  //     assignClasses() {
  //         return {
  //             visible: this.taskListIsVisible,
  //             hidden: !this.taskListIsVisible,
  //         };
  //     },
  // },
  computed: {
    buttonCaption() {
      return this.taskListIsVisible ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleTaskList() {
      this.taskListIsVisible = !this.taskListIsVisible;
    },
  },
});

app.mount("#assignment");
