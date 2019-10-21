<template>
  <div>
    <v-container grid-list-xs>
      <v-btn @click="isOpened =! isOpened" class="mb-4" color="success">New</v-btn>
      <v-form v-show="isOpened">
        <v-card>
          <v-card-title primary-title>New Item</v-card-title>
          <v-text-field class="pa-6" v-model="newItem.name" name="name" label="Name"></v-text-field>
          <v-text-field class="pa-6" v-model.number="newItem.cost" name="cost" label="Cost"></v-text-field>
          <v-text-field class="pa-6" v-model="newItem.category" name="category" label="Category"></v-text-field>
          <v-text-field class="pa-6" v-model="newItem.desc" name="desc" label="Description"></v-text-field>
          <v-card-actions>
            <v-checkbox label="Income" v-model="newItem.isIncome"></v-checkbox>
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
      random: Math.floor(Math.random() * 10000000),
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
    }
  }
};
</script>

<style scoped>
</style>