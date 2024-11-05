<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">
      {{ isFavorite === "1" ? "Remove from Favorites" : "Add to Favorites" }}
    </button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false
      // validator: function (value) {
      //   return value === "0" || value === "1";
      // },
    },
    // phoneNumber: String,
    // emailAddress: String,
    // isFavorite: String,
  },
  emits: ["toggle-favorite", "delete-friend"],
  // emits: {
  //   "toggle-favorite": function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      detailsAreVisible: false,
      // friend: {
      //   id: "manuel",
      //   name: "Manuel Lorenz",
      //   phone: "01234 5678 991",
      //   email: 'email: "manuel@localhost.com"',
      // },
      // friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // if (this.friendIsFavorite === '1') {
      //   this.friendIsFavorite = '0';
      // } else {
      //  this.friendIsFavorite = '1';
      // }
      // this.friendIsFavorite = !this.friendIsFavorite;
      this.$emit("toggle-favorite", this.id);
      
    },
    deleteFriend() {
      this.$emit("delete-friend", this.id);
    },
  },
};
</script>
