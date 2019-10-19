<template>
  <div>
    <v-container grid-list-xs>
      <v-data-table :headers="headers" :items="items" class="elevation-1">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.key }}</td>
          <td class="text-xs-right">{{ props.item.key }}</td>
          <td class="text-xs-right">{{ props.item.key }}</td>
          <td class="text-xs-right">{{ props.item.key }}</td>
          <td class="text-xs-right">{{ props.item.key }}</td>
        </template>
      </v-data-table>
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
          this.items.push(doc.data());
        });
      });
  }
};
</script>

<style scoped>
</style>