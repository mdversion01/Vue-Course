<template>
  <form @submit.prevent="submitData">
    <div><label for="name">Name</label>
    <input type="text" id="name" v-model="enteredName"/></div>
    
    <div><label for="phone">Phone</label>
    <input type="text" id="phone" v-model="enteredPhone"/></div>

    <div><label for="email">Email</label>
    <input type="text" id="email" v-model="enteredEmail"/></div>

    <div><button>Add Friend</button></div>
  </form>
</template>

<script>
export default {
    emits: ['add-contact'],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
    methods: {
        submitData() {
        const contactData = {
            name: this.enteredName,
            phone: this.enteredPhone,
            email: this.enteredEmail,
        };
        this.$emit('add-contact', contactData);
        this.enteredName = '';
        this.enteredPhone = '';
        this.enteredEmail = '';
        },
    },
};
</script>
