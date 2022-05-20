import { defineStore } from 'pinia';
import { BASE_URL, PRODUCT } from '../util/api/index';
import axios from 'axios';

export const useProductStore = defineStore({
  id: 'products',
  state: () => ({}),
  getters: {},
  actions: {
    async getAllProduct() {
      return await axios
        .get(
          `${BASE_URL}${PRODUCT}`
        )
        .then((res) => {
          let { data } = res.data
          if (res.data.status === 200) {
            return data;
          } else {
            throw res.data;
          }
        })
        .catch((err) => {
          return err;
        });
    },
    async updateProduct(id, quantity) {
      return await axios
        .put(
          `${BASE_URL}${PRODUCT}/${id}` ,
          {
            quantity,
            type: 'deduct',
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
