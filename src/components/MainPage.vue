<template>
  <div class="wrapper">
    <div class="main">
      <nav class="header">
        <a href="#" class="header__logo"></a>
        <div class="header__links">
          <router-link to="/about_us">About Us</router-link>
          <router-link to="/get_in_touch">Get in Touch</router-link>
        </div>
      </nav>
      <main class="content">
        <div class="content__sqr">
          <p class="content__sqr_title">
            WE ARE
            <b>SQUARE</b>
            <br />AND WE ARE
            <b>COMING SOON</b>
          </p>
        </div>
        <div class="content__time timeline">
          <div class="timeline__block value">
            <span class="value_first">120</span>
            <span class="value_second">Days</span>
          </div>
          <div class="timeline__block">
            <span class="value_first">21</span>
            <span class="value_second">Hour</span>
          </div>
          <div class="timeline__block">
            <span class="value_first">17</span>
            <span class="value_second">Minutes</span>
          </div>
          <div class="timeline__block">
            <span class="value_first">25</span>
            <span class="value_second">Second</span>
          </div>
        </div>
        <form action class="mainForm" @submit.prevent="onSubmit">
          <input
            type="email"
            class="mainForm__input"
            v-bind:class="{ mainForm__input_error: $v.email.$error }"
            v-model.trim="email"
            placeholder="Get notified by email..."
            @input="$v.email.$touch()"
          />
          
          <button type="submit" class="mainForm__send" :disabled="$v.$invalid"></button>
          <span v-if="$v.email.$error" class="mainForm__helper">Wrong email... Try again</span>
        </form>
      </main>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: ""
    };
  },
  validations: {
    email: {
      required,
      email
    }
  },
  methods: {
    onSubmit() {}
  }
};
</script>

<style scoped>
.wrapper {
  background-color: rgba(237, 62, 62, 0.9);
  height: 100vh;
}
.main {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding-top: 2em;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 9em;
}
.header__logo {
  background: url(../assets/logo.png) no-repeat center center;
  width: 115px;
  height: 90px;
}
.header__links a {
  color: #fff;
  font-size: 1em;
  text-decoration: none;
}
.header__links a:not(:last-child) {
  margin-right: 7em;
}
.content__sqr {
  margin-bottom: 10em;
}
.content__sqr_title {
  position: relative;
  font-size: 3em;
  text-align: center;
  color: #fff;
}
.content__sqr_title::before {
  content: "";
  position: absolute;
  right: 4em;
  top: -2.5em;
  background: url(../assets/ss.png) no-repeat;
  width: 370px;
  height: 370px;
}
.timeline {
  display: flex;
  justify-content: space-between;
  max-width: 550px;
  margin: 0 auto;
  margin-bottom: 2em;
}
.timeline__block {
  display: flex;
  flex-direction: column;
  text-align: center;
  text-align: center;
}
.value_first {
  font-weight: 200;
  font-size: 2em;
  color: #fff;
  text-transform: uppercase;
}
.value_second {
  font-weight: 500;
  font-size: 1em;
  color: #fff;
  text-transform: uppercase;
}
.mainForm {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 562px;
  width: 100%;
  margin: 0 auto;
}
.mainForm__input {
  max-width: 470px;
  height: 25px;
  width: 100%;
  border: 3px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.2);
  margin-right: 1em;
  outline: none;
  padding-left: 1em;
  font-size: 1em;
  color: #fff;
}
::-webkit-input-placeholder {
  color: #fff;
}
::-moz-placeholder {
  color: #fff;
}
:-moz-placeholder {
  color: #fff;
}
:-ms-input-placeholder {
  color: #fff;
}

.mainForm__input_error {
  border: 3px solid rgb(246, 250, 4);
}
.mainForm__send {
  position: relative;
  border: none;
  background: none;
  width: 53px;
  height: 53px;
  padding: 0;
  cursor: pointer;
  background: url(../assets/mail.png) no-repeat center;
  background-size: contain;
}
.mainForm__helper {
  font-size: 0.75em;
  font-weight: 600;
}
</style>