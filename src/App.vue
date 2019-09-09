<template>
  <div id="app" class="app">
    <GetInTouch />

  </div>
</template>

<script>
// eslint-disable-next-line
import MainPage from "./components/MainPage.vue";
// eslint-disable-next-line
import AboutUs from "./components/AboutUs.vue";
// eslint-disable-next-line
import GetInTouch from "./components/GetInTouch";

export default {
  name: "app",
  components: {
    GetInTouch
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
