<template>
  <div>
    <button class="button btn-success mt-5" @click="goToCreatePage">
      Add New
    </button>
    <table class="mt-2">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in items"
          :key="(item.Product_id, index)"
          :class="{ active: index == currentIndex }"
        >
          <td>{{ item.product_name }}</td>
          <td>{{ item.product_price }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { id: item.product_id } }"
              class="button btn-info"
            >
              Edit
            </router-link>
            <button
              class="button btn-danger"
              @click="deleteProduct(item.product_id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import http from "../http-common";
export default {
  name: "ProductList",
  data() {
    return {
      items: [],
      currentItem: null,
      currentIndex: -1,
      productName: "",
      productPrice: "",
      productId: "",
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    // get all products
    async getProducts() {
      try {
        const response = await http.get("/products");
        this.items = response.data;
        (this.currentItem = null), (this.currentIndex = -1);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    },
    goToCreatePage() {
      this.$router.push("/create");
    },

    async getProductById(id, index) {
      try {
        const response = await http.get(`/products/${this.route.params.id}`);
        (this.productName = response.data.product_name)(
          (this.productPrice = response.data.product_price)
        );
        this.currentItem = id;
        this.currentIndex = index;
        this.router.push(`/edit/${this.currentItem}`);
      } catch (err) {
        console.log(err);
      }
    },

    // delete product
    async deleteProduct(id) {
      try {
        await http.delete(`/products/${id}`);
        this.getProducts();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
</style>