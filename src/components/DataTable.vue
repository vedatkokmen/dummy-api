<template>
  <div>
    <v-container fluid grid-list-xs v-show="!isOpened">
      <v-container class="grey mb-2 lighten-5">
        <v-row no-gutters>
          <v-col cols="6">
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Total Income</h3>
                  <div class="display-1">{{totalIncome}}</div>
                </div>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Total Expense</h3>
                  <div class="display-1">{{totalExpense}}</div>
                </div>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-data-table :headers="headers" :items="items" class="elevation-1">
        <template slot="items" slot-scope="props">
          <td class="text-xs-right">
            <div class="text-center">
              <v-badge>
                <template v-slot:badge>0</template>
              </v-badge>
            </div>
            {{ props.item.key }}
          </td>
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
      totalExpense: null,
      totalIncome: null,
      isOpened: false,
      totalIncome: null,
      expenses: [],
      incomes: []
    };
  },
  methods: {
    getSum(total, num) {
      return total + Math.round(num);
    },
    getBalance() {
      let total = this.items.reduce((currentTotal, item) => {
        return item.cost + currentTotal;
      }, 0);
      this.totalExpense = total;
    },
    expenseList() {
      let expenses = this.items.map(item => {
        return item.isIncome === false;
        this.expenses = expenses;
        console.log(expenses);
      });
    },
    incomeList() {
      let incomes = this.items.map(item => {
        return item.isIncome === true;
        this.incomes = incomes;
        console.log(incomes);
      });
    }
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
  updated() {
    this.getBalance();
    this.expenseList();
  }
};
</script>

<style scoped>
</style>