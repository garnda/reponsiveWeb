import { defineStore } from 'pinia';
import { BASE_URL, MONEY } from '../util/api/index';
import axios from 'axios';

export const useMoneyStore = defineStore({
  id: 'money',
  state: () => ({}),
  getters: {},
  actions: {
    async getMoney() {
      return await axios
        .get(
          `${BASE_URL}${MONEY}`
        )
        .then((res) => {
          let { data } = res.data
          if (res.status === 200) {
            return data[0];
          } else {
            throw res.data;
          }
        })
        .catch((err) => {
          return err;
        });
    },
    async updateMoney(money) {
      return await axios
        .put(
          `${BASE_URL}${MONEY}/update` ,
          {
           money: money
          },
        )
        .then((res) => {
          console.log('>>>>', res);
          let {data ,message} = res.data
          if (res.status === 200) {
            return data;
          } else {
            console.log('e;>>>>', data);
            throw res.data;
          }
        })
        .catch((err) => {
          return err;
        });
    },
  },
});
