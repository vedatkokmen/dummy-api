<template>
  <div>
    <v-btn @click="isOpened =! isOpened" color="success">New</v-btn>
    <v-form v-show="isOpened">
      <v-text-field name="name" label="Name"></v-text-field>
      <v-text-field name="cost" label="Cost"></v-text-field>
      <v-text-field name="category" label="Category"></v-text-field>
      <v-text-field name="desc" label="Description"></v-text-field>
      <v-btn @submit="sendData()" type="submit" color="success">Save</v-btn>
    </v-form>
  </div>
</template>

<script>
import db from "../../firebase";
export default {
  data() {
    return {
      isOpened: false,
      random: Math.floor(Math.random() * 10000000),
      newItem: {
        name: "",
        cost: "",
        category: "",
        desc: ""
      }
    };
  },
  methods: {
    sendData() {
      db.collection("dummy")
        .add({
          name: e.name.val(),
          cost: e.cost.val(),
          category: e.category.val(),
          desc: e.desc.val()
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    }
  }
};
</script>

<style scoped>
</style>