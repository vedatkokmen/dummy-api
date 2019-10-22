<template>
  <div>
    <v-container grid-list-xs>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">New Item</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">New Item</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field v-model="newItem.name" label="Name" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model.number="newItem.cost" label="Cost" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      v-model="newItem.category"
                      :items="['Ev', 'İş', 'Kişisel', 'Abonelik', 'Diğer']"
                      label="Category"
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="newItem.desc" label="Description" required></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-3" text @click="sendData">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
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
      },
      dialog: false
    };
  },
  methods: {
    sendData() {
      db.collection("dummy").add(this.newItem);
      alert("Added!");
      this.isOpened = false;
      this.$emit("add", this.newItem);
      this.dialog = false;
      this.newItem = {
        name: "",
        cost: null,
        category: "",
        desc: "",
        isIncome: false
      };
    }
  }
};
</script>

<style scoped>
</style>