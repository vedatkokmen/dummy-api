<template>
  <div>
    <v-container grid-list-xs v-show="!isOpened">
      <h6>{{date}}</h6>
      <h1>Bakiye: {{bakiye}}</h1>
      <v-data-table :headers="headers" :items="items" class="elevation-1">
        <template slot="items" slot-scope="props">
          <td class="text-xs-right">{{ props.item.key }}</td>
        </template>
      </v-data-table>
      <v-btn @click="getBalance" class="mt-4" color="success">Get Balance</v-btn>
    </v-container>
  </div>
</template>

<script>
import db from "../../firebase";
export default {
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Cost", value: "cost" },
        { text: "Category", value: "category" },
        { text: "Description", value: "desc" }
      ],
      items: [],
      bakiye: null,
      isOpened: false,
      date: new Date().toLocaleTimeString()
    };
  },
  beforeMount() {
    db.collection("dummy")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.items.push(doc.data());
        });
      });
  },
  methods: {
    getSum(total, num) {
      return total + Math.round(num);
    },
    getBalance() {
      this.items.forEach(item => {
        let total = [];
        total.push(item.cost);
        console.log(total);
      });
    }
  }
};
</script>

<style scoped>
</style>