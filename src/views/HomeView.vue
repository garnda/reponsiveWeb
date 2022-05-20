<script setup>
import { reactive, onMounted, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useProductStore } from "../stores/product";
import { useMoneyStore } from "../stores/money.js";

const productStore = useProductStore();
const moneyStore = useMoneyStore();
const router = useRouter();
const product = reactive({
  allData: [],
  allInput: [],
  totalInput: 0.0,
  totalPrice: 0.0,
  inputOne: 0,
  inputFive: 0,
  inputTen: 0,
  inputTwenty: 0,
  inputFifty: 0,
  inputHundred: 0,
  inputFiveHundred: 0,
  inputThousand: 0,
  OrderList: [],
  returnMoney: 0,
  alert: false,
  bankNote: {},
  Note: [],
});
onMounted(() => {
  getProduct();
  getMoney();
});
watchEffect(async () => {
  product.bankNote
});
const getProduct = async () => {
  let { data } = await productStore.getAllProduct();
  product.allData = data;
};
const getMoney = async () => {
  let data = await moneyStore.getMoney();
  product.inputOne = data.money.one;
  product.inputFive = data.money.five;
  product.inputTen = data.money.ten;
  product.inputTwenty = data.money.twenty;
  product.inputFifty = data.money.fifty;
  product.inputHundred = data.money.hundred;
  product.inputFiveHundred = data.money.fivehundred;
  product.inputThousand = data.money.thousand;
};

const getInput = (data) => {
  if(product.OrderList.length == 0){
  product.allInput.push(data);
  console.log("product.allInput", product.allInput);
  product.totalInput = product.allInput.reduce(
    (sum, current) => sum + current,
    0
  );
  }

  // product.inputOne += product.allInput.filter((item) => item === 1).length;
  // product.inputFive += product.allInput.filter((item) => item === 5).length;
  // product.inputTen += product.allInput.filter((item) => item === 10).length;
  // product.inputTwenty += product.allInput.filter((item) => item === 20).length;
  // product.inputFifty += product.allInput.filter((item) => item === 50).length;
  // product.inputHundred += product.allInput.filter((item) => item === 100).length;
  // product.inputFiveHundred += product.allInput.filter((item) => item === 500).length;
  // product.inputThousand = product.inputThousand + product.allInput.filter((item) => item === 1000).length;
  // console.log('>>', product.inputThousand);
};

const getOrder = async(data) => {
  if (product.OrderList.length === 0) {
    product.OrderList.push(data);
    product.totalPrice = product.OrderList.map((item) => item.price).reduce(
      (prev, curr) => prev + curr,
      0
    );
    const check = product.totalInput - product.totalPrice;
    console.log(">>>before0");
    if (check > 0) {
      await moneyTurn(check);
    }
    if (check < 0) {
      product.OrderList = [];
    }
  }
};

async function moneyTurn(total) {
  let allTotal = total;
  let numpay = [
    {name: "thousand", value: 1000},
    {name: "fivehundred", value: 500},
   {name:"hundred",value: 100},
    {name:"fifty",value: 50},
    {name: "twenty",value:20},
    {name: "ten",value: 10},
    {name: "five",value: 5},
   { name:"one",value: 1},
  ];
  var bankNote = [];
  let bank = allTotal % 1000;
  numpay.forEach((element) => {
    bankNote[element.name] = Math.floor(allTotal / element.value)
    allTotal = allTotal % element.value
  });
  console.log('bankNote',bankNote);
  console.log('bankNote',bank);
  product.returnMoney = bank;
  product.bankNote = bankNote;
  product.Note = bankNote;

  console.log('product.bankNote>>',product.bankNote);
  let inputOne = bankNote.one - product.inputOne;
  let inputFive = bankNote.five - product.inputFive ;
  let inputTen = bankNote.ten - product.inputTen;
  let inputTwenty = bankNote.twenty - product.inputTwenty;
  let inputFifty = bankNote.fifty - product.inputFifty ;
  let inputHundred = bankNote.hundred - product.inputHundred;
  let inputFiveHundred = bankNote.fivehundred - product.inputFiveHundred ;
  let inputThousand = bankNote.thousand - product.inputThousand;
  product.inputOne = inputOne
}

const orderProduct = () => {
 location.reload();
};
</script>

<template>
  <div class="content pb-5">
    <div class="main">
      <div class="container cal">
        <div class="row text-center">
          <h5>Pleases select Input money first</h5>
        </div>
        <div class="row justify-content-center">
          <div class="btn-money col-2" @click="getInput(1)">1</div>
          <div class="btn-money col-2" @click="getInput(5)">5</div>
          <div class="btn-money col-2" @click="getInput(10)">10</div>
        </div>
        <div class="row justify-content-center">
          <div class="col-2 btn-money" @click="getInput(20)">20</div>
          <div class="col-2 btn-money" @click="getInput(50)">50</div>
          <div class="col-2 btn-money" @click="getInput(100)">100</div>
        </div>
        <div class="row justify-content-center">
          <div class="col-3 btn-money" @click="getInput(500)">500</div>
          <div class="col-3 btn-money" @click="getInput(1000)">1000</div>
        </div>
      </div>
      <div class="mt-4 mb-3">
        <div v-if="product.allData">
          <div class="row justify-content-center">
            <div
              class="col-3"
              v-for="(item, index) in product.allData"
              :key="index"
            >
              <img
                class="product-img"
                :src="`data:image/png;base64,${item.image}`"
              />
              <div>{{ item.name }}</div>
              <div>{{ item.price }}</div>
              <div>{{ item.description }}</div>
              <div>{{ item.quantity }}</div>
              <div
                class="btn-select"
                :disabled="item.quantity === 0"
                @click="getOrder(item)"
                >Select it!</div>
            </div>
          </div>
        </div>
        <!-- <div class="btn mt-2 mb-2">ORDER</div> -->
      </div>
      <div class="row mb-3">
        <div class="col-6">
          <h5>total Money Input</h5>
          <span>{{ product.totalInput.toFixed(2) }}</span>
        </div>
        <div class="col-6">
          <h5>Return Money</h5>
          <span>{{ product.returnMoney.toFixed(2) }}</span>
        </div>
      </div>
      <div class="row text-center">
        <div class="" @click="orderProduct()">
          pls click here get money back ... {{ product.returnMoney.toFixed(2) }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.main {
  margin-top: 22%;
}
.product-img {
  width: 100px;
}

.btn-money {
  background-color: #7fffd4;
  padding: 5px 5px;
  margin: 5px;
  border-radius: 9px;
  cursor: pointer;
}
.cal {
  border-radius: 9px;
  background-color: #a0b4ad;
}
.bg-gray {
  background-color: #a0b4ad;
}

.btn-select {
  cursor: pointer;
  font-size: 18px;
  width: 100px;
  background: rgb(155, 75, 75);
  padding: 5px;
  display: block;
  border-radius: 9px;
}
</style>
