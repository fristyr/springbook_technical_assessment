<template>
  <div class="wrapper">
    <div class="main">
      <nav class="header">
        <a href="#" class="header__logo"></a>
        <div class="header__links">
          <router-link to="/">Home</router-link>
          <router-link to="/about_us">About Us</router-link>
        </div>
      </nav>
      <section class="contact">
        <article class="contact-info">
          <h2 class="contact-info__title">
            Contact
            <b>Us</b>
          </h2>
          <p class="contact-info__description">
            We are here to help you and find answers to your questions on our Support section.
            If you can’t find the answer to your question or have any feedback, reach out to us by completing the form.
            All fields are mandatory unless otherwise stated.
          </p>
          <a href="#" class="contact-info__link">
            <b>Adress:</b> 123 Palo Alto, Palo Alto, CA 94300
          </a>
          <a href="#" class="contact-info__link">
            <b>Phone:</b> +1 234-567-8910
          </a>
          <a href="#" class="contact-info__link">
            <b>Email:</b> contact@yourdomain.net
          </a>
          <div class="contact-info__socails">
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </div>
        </article>
        <form method="post" class="contact-form" @submit.prevent="onSubmit">
          <div class="contact-form__group">
            <input
              type="text"
              placeholder="Your name"
              v-model="name"
              class="contact-form__input"
              v-bind:class="{ error: $v.name.$error }"
              @input="$v.name.$touch()"
            />
            <span
              v-if="$v.name.$error"
              class="contact-form__helper"
            >Should be not less than 4 letters</span>
          </div>
          <div class="contact-form__group">
            <input
              type="email"
              placeholder="Your email"
              v-model.trim="email"
              class="contact-form__input"
              v-bind:class="{ error: $v.email.$error }"
              @input="$v.email.$touch()"
            />
            <span
              v-if="$v.email.$error"
              class="contact-form__helper"
            >Should be not less than 4 letters</span>
          </div>
          <div class="contact-form__group">
            <input
              type="text"
              placeholder="Your company"
              v-model="company"
              class="contact-form__input"
              v-bind:class="{ error: $v.company.$error }"
              @input="$v.company.$touch()"
            />
            <span
              v-if="$v.company.$error"
              class="contact-form__helper"
            >Should be not less than 4 letters</span>
          </div>
          <div class="contact-form__group">
            <textarea
              placeholder="Your message"
              cols="30"
              rows="8"
              v-model="message"
              class="contact-form__input"
              v-bind:class="{ error: $v.message.$error }"
              @input="$v.message.$touch()"
            ></textarea>
            <span
              v-if="$v.message.$error"
              class="contact-form__helper"
            >Should be not less than 4 letters</span>
          </div>
          <button type="submit" :disabled="$v.$invalid" >Submit</button>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      name: "",
      email: "",
      company: "",
      message: ""
    };
  },
  methods: {
    onSubmit() {}
  },
  validations: {
    email: {
      required,
      email
    },
    name: {
      required,
      minLength: minLength(4)
    },
    company: {
      required,
      minLength: minLength(4)
    },
    message: {
      required,
      minLength: minLength(4)
    }
  }
};
</script>

<style  scoped>
.wrapper {
  background: linear-gradient(
    90deg,
    rgba(234, 61, 61, 0.9) 50%,
    rgba(53, 55, 58, 0.9) 50%
  );
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
  margin-bottom: 2.5em;
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
.contact {
  display: flex;
  justify-content: space-between;
}
.contact-info {
  max-width: 310px;
  width: 100%;
}
.contact-info__title {
  font-size: 3em;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 2em;
}
.contact-info__description {
  position: relative;
  max-width: 300px;
  text-align: left;
  font-size: 1em;
  margin-top: 0;
  margin-bottom: 4em;
}
.contact-info__description::before,
.contact-info__description::after {
  position: absolute;
  content: "";
  width: 70px;
  height: 2px;
  background-color: #fff;
  left: 0;
}
.contact-info__description::before {
  top: -1em;
}
.contact-info__description::after {
  bottom: -1em;
}
.contact-info__link {
  display: block;
  text-decoration: none;
  color: #ffffff;
  margin-bottom: 1.5em;
}

.contact-info__socails {
  display: flex;
}
.contact-info__socails a {
  display: block;
  width: 32px;
  height: 32px;
}
.contact-info__socails a:nth-child(1) {
  background: url(../assets/fb.png) no-repeat center;
}
.contact-info__socails a:nth-child(2) {
  background: url(../assets/g+.png) no-repeat center;
}
.contact-info__socails a:nth-child(3) {
  background: url(../assets/in.png) no-repeat center;
}
.contact-info__socails a:nth-child(4) {
  background: url(../assets/tw.png) no-repeat center;
}
.contact-info__socails a:not(:last-child) {
  margin-right: 0.5em;
}
.contact-form {
  display: flex;
  flex-direction: column;
  max-width: 750px;
  width: 100%;
  background-color: #fff;
  padding-top: 2em;
  padding-left: 4em;
}
.contact-form__group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
}
.contact-form__input {
  max-width: 650px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #e73d3d;
  color: #35373a;
  font-weight: 600;
  padding: 1em 0 1em 0.3em;
  outline: none;
  font-family: "Roboto" sans-serif;
  margin-bottom: 0.3em;
}

.error {
  border-bottom: 2px solid yellow;
}

button[type="submit"] {
  border: none;
  border: 2px solid #e73d3d;
  color: #e73d3d;
  background: none;
  max-width: 145px;
  width: 100%;
  padding: 0.8em 1.5em 0.8em 1.5em;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 4em;
  cursor: pointer;
}
button[type="submit"]:disabled {
  background-color: #ccc;
  border: 3px solid rgb(141, 138, 138);
  color: #35373a;
}
.form__label {
  color: black;
}
.contact-form__helper {
  color: #e73d3d;
  font-size: 0.65em;
  font-weight: 600;
}

</style>