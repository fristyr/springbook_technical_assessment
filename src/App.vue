<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    
  }
};
</script>

<style>
body {
  margin: 0;
  /*box-shadow: inset 0 0 0 1000px rgba(234, 61, 61, 0.9);*/
  /*background: url(./assets/palo_alto.jpg) no-repeat center center;*/
  /*background-size: cover;*/
  background-image: url(./assets/palo_alto.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed ;
  color: #fff;
  font-family: "Roboto", sans-serif;
}
</style>
