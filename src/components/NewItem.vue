<template>
  <div>
    <v-container grid-list-xs>
      <v-btn @click="createItem" class="mb-4" block color="success">New</v-btn>
      <v-form v-show="isOpened">
        <v-card>
          <v-card-title class="display-2">New Item</v-card-title>
          <v-text-field class="pa-6" v-model="newItem.name" name="name" label="Name"></v-text-field>
          <v-text-field class="pa-6" v-model.number="newItem.cost" name="cost" label="Cost"></v-text-field>
          <v-text-field class="pa-6" v-model="newItem.category" name="category" label="Category"></v-text-field>
          <v-text-field class="pa-6" v-model="newItem.desc" name="desc" label="Description"></v-text-field>
          <v-card-actions>
            <v-switch v-model="newItem.isIncome" label="Income"></v-switch>
            <v-spacer></v-spacer>
            <v-btn @click.stop="sendData" color="primary">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import db from "../../firebase";
export default {
  data() {
    return {
      isOpened: false,
      newItem: {
        name: "",
        cost: null,
        category: "",
        desc: "",
        isIncome: false
      }
    };
  },
  methods: {
    sendData() {
      db.collection("dummy").add(this.newItem);
      alert("Added!");
      this.isOpened = false;
      this.$router.go(0);
    },
    createItem() {
      this.isOpened = !this.isOpened;
    }
  }
};
</script>

<style scoped>
</style>