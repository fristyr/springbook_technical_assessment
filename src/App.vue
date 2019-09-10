<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
body {
  margin: 0;
  background-image: url(./assets/palo_alto.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed ;
  color: #fff;
  font-family: "Roboto", sans-serif;
}
</style>
