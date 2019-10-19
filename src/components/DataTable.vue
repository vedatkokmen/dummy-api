<template>
  <div>
    <v-container grid-list-xs>
      <ul>
        <li v-for="(item, index) in items" :key="index">{{item.name}}</li>
      </ul>
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
      items: []
    };
  },
  beforeMount() {
    db.collection("dummy")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.data());
        });
      });
  }
};
</script>

<style scoped>
</style>