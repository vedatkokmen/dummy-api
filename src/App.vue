<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container grid-list-xs>
        <DataTable />
        <NewItem v-model="newOpen" />
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
  data: () => ({
    newOpen: false
  })
};
</script>
