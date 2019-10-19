<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">FINANCE APP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <v-container grid-list-xs>
        <DataTable v-show="newOpen = true" />
      </v-container>
      <v-container grid-list-xs>
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
