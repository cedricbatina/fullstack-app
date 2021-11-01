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
    </div>
    <div class="field">
      <label for="label"> Product Price </label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Price"
          v-model="productPrice"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="saveProduct">SAVE</button>
    </div>
  </div>
</template>

<script>
import http from "../http-common";
export default {
  name: "AddProduct",
  data() {
    return {
      productName: "",
      productPrice: "",
    };
  },
  methods: {
    // create a new product
    async saveProduct() {
      try {
        await http.post("/products", {
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