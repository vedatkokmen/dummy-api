<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-bold">MY</span>
        <span class="font-weight-light">WALLET</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <v-container grid-list-xs>
        <DataTable :items="items" :loading="loading" v-model="toggle" />
      </v-container>
      <v-container grid-list-xs>
        <NewItem v-model="newOpen" @add="add" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import db from "../firebase";
import DataTable from "./components/DataTable";
import NewItem from "./components/NewItem";
export default {
  name: "App",
  components: { DataTable, NewItem },
  beforeMount() {
    this.loading = true;

    this.dbRef.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.items.push(doc.data());
      });

      this.loading = false;
    });
  },
  data: () => ({
    newOpen: false,
    toggle: true,
    loading: false,
    items: [],
    dbRef: db.collection("dummy")
  }),
  methods: {
    add(newItem) {
      this.items.push(newItem);
    }
  }
};
</script>
