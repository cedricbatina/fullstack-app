import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    {
      name: "Create",
      path: "/create",
      component: () => import("./components/AddProduct.vue"),
    },
    {
      name: "Edit",
      path: "/edit/:id",
      component: () => import("./components/EditProduct.vue"),
    },
    {
      name: "Index",
      path: "/",
      component: () => import("./components/ProductList.vue"),
    },
  ],
});
