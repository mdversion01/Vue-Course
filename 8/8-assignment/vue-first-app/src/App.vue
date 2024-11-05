<template>
  <div>
    <active-user :username="user.name" :userage="user.age"></active-user>
    <user-data @set-data="setUserData"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Max",
        age: 30,
      },
    };
  },
  methods: {
    setUserData(name, age) {
      this.user = {
        name: name,
        age: +age // convert to number
      };
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

section {
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  width: 90%;
  max-width: 40rem;
  background-color: #f4f4f4;
  text-align: center;
}
</style>
