<template>
  <div>
    <div class="field">
      <label for="label">Product Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Product Name"
          v-model="productName"
        />
      </div>
      <div class="field">
        <label for="label">Product Price</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Product Price"
            v-model="productPrice"
          />
        </div>
      </div>
      <div class="control">
        <button class="button is-success" @click="updateProduct">UPDATE</button>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../http-common";
export default {
  name: "EditProduct",
  data() {
    return {
      productName: "",
      productPrice: "",
    };
  },
  created: function () {
    this.getProductById();
  },
  methods: {
    // get a single product by id
    async getProductById() {
      try {
        const response = await http.get(`/products/${this.$route.params.id}`);
        this.productName = response.data.product_name;
        this.productPrice = response.data.product_price;
      } catch (err) {
        console.log(err);
      }
    },
    // update product
    async updateProduct() {
      try {
        await http.put(`/products/${this.$route.params.id}`, {
          product_name: this.productName,
          product_price: this.productPrice,
        });
        this.productName = "";
        this.productPrice = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
</style>