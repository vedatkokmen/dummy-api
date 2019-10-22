<template>
  <div>
    <v-container fluid grid-list-xs v-show="!isOpened">
      <v-container class="grey mb-2 lighten-5">
        <v-row>
          <v-col cols="4">
            <v-card class="mx-auto">
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Total Income</h3>
                  <v-progress-circular
                    rotate="180"
                    size="100"
                    width="15"
                    :value="totalIncome / 1000"
                    color="amber"
                  >{{ 1000 }}</v-progress-circular>
                  <div class="display-2">{{totalIncome}} TL</div>
                </div>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="4" justify-center align-center>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Total Expense</h3>
                  <v-progress-circular
                    rotate="180"
                    size="100"
                    width="15"
                    :value="totalExpense / 1000"
                    color="pink"
                  >{{ 1000 }}</v-progress-circular>
                  <div class="display-2">{{totalExpense}} TL</div>
                </div>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Balance</h3>
                  <v-progress-circular
                    rotate="180"
                    size="100"
                    width="15"
                    :value="balance / 1000"
                    color="blue"
                  >{{ 1000 }}</v-progress-circular>
                  <div class="display-2">{{balance}} TL</div>
                </div>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-data-table
        item-key="item.name"
        class="elevation-1"
        :loading="loading"
        loading-text="Loading... Please wait"
        :headers="headers"
        :items="items"
        @click:row="onClickItem"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-right">{{ props.item.key }}</td>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import db from "../../firebase";

export default {
  props: ["items", "loading"],
  components: {},
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Cost (TL)", value: "cost" },
        { text: "Category", value: "category" },
        { text: "Description", value: "desc" }
      ],
      isOpened: false,
      expenses: [],
      dbRef: db.collection("dummy")
    };
  },

  computed: {
    balance() {
      return this.totalIncome - this.totalExpense;
    },
    incomes() {
      return this.items.filter(i => i.isIncome);
    },
    totalExpense() {
      return this.items.reduce((currentTotal, item) => {
        return item.cost + currentTotal;
      }, 0);
    },
    totalIncome() {
      return this.incomes.reduce((currentTotal, item) => {
        return item.cost + currentTotal;
      }, 0);
    }
  },
  methods: {
    onClickItem(item) {
      console.log(item);
    }
  }
};
</script>

<style scoped>
</style>