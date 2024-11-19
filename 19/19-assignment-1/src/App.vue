<template>
  <div>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="isVisible">{{ goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</div>
</template>

<script>
// import {  reactive } from 'vue'; // ref,

export default {

  // setup() {

  //   // const courseGoal = "Finish the course and learn Vue!";
  //   // const goalIsVisible = ref(false);
    
  //   // const courseData = ref({
  //   //   goal: "Finish the course and learn Vue!",
  //   //   isVisible: false,
  //   // });

  //   // function toggleGoal() {
  //   //   // goalIsVisible.value = !goalIsVisible.value;
  //   //   courseData.value.isVisible = !courseData.value.isVisible;
  //   // }

  //   // return {
  //   //   goal: courseData.value.goal,
  //   //   courseData,
  //   //   toggleGoal,
  //   // };

  //   const courseData = reactive({
  //     goal: "Finish the course and learn Vue!",
  //     isVisible: false,
  //   });

  //   function toggleGoal() {
  //     courseData.isVisible = !courseData.isVisible;
  //   }

  //   return {
  //     goal: courseData.goal,
  //     courseData,
  //     toggleGoal,
  //   };


  // }

  data() {
    return {
      goal: "Finish the course and learn Vue!",
      isVisible: false,
    };
  },
  methods: {
    toggleGoal() {
      this.isVisible = !this.isVisible;
    },
  },
  

  
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>