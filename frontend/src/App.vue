<template>
  <div id="app" class="container is-max-desktop">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  /* import style bulma*/
  @import "~bulma/css/bulma.css";
}
</style>
