<template>
  <div>
    <v-container fluid grid-list-xs v-show="!isOpened">
      <v-container class="grey mb-2 lighten-5">
        <v-row>
          <v-col cols="4">
            <v-card>
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
      <v-data-table :headers="headers" :items="items" class="elevation-1">
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
      items: [],
      totalExpense: null,
      totalIncome: null,
      isOpened: false,
      expenses: [],
      incomes: [],
      dbRef: db.collection("dummy")
    };
  },
  methods: {
    getIncomes() {
      this.dbRef
        .where("isIncome", "==", true)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.incomes.push(doc.data());
          });
        });
    },
    totalExpenses() {
      let total = this.items.reduce((currentTotal, item) => {
        return item.cost + currentTotal;
      }, 0);
      this.totalExpense = total;
    },
    totalIncomes() {
      let total = this.incomes.reduce((currentTotal, item) => {
        return item.cost + currentTotal;
      }, 0);
      this.totalIncome = total;
    }
  },
  beforeMount() {
    this.dbRef.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.items.push(doc.data());
      });
    });
  },
  updated() {
    this.totalExpenses();
    this.totalIncomes();
  },
  created() {
    this.getIncomes();
  },
  computed: {
    balance() {
      return this.totalExpense - this.totalIncome;
    }
  }
};
</script>

<style scoped>
</style>