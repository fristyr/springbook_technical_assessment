<template>
  <div class="wrapper">
    <div class="main">
      <nav class="header">
        <a href="#" class="header__logo"></a>
        <div class="header__links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
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
        <form method="post" class="contact-form">
          <input
            type="text"
            v-bind:placeholder="placeholders.name"
            v-model="name"
            class="contact-form__input"
            v-bind:class="{ error: wrongInput }"
          />
          <input
            type="email"
            v-bind:placeholder="placeholders.email"
            v-model.trim="email"
            class="contact-form__input"
            v-bind:class="{ error: wrongInput }"
          />
          <input
            type="text"
            v-bind:placeholder="placeholders.company"
            v-model="company"
            class="contact-form__input"
            v-bind:class="{ error: wrongInput }"
          />
          <textarea
            v-bind:placeholder="placeholders.message"
            cols="30"
            rows="8"
            v-model="message"
            class="contact-form__input"
            v-bind:class="{ error: wrongInput }"
          ></textarea>
          <button type="submit" @click="onSubmit">Submit</button>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      company: "",
      message: "",
      placeholders: {
        name: "Your Name",
        email: "Your Email",
        company: "Your Company",
        message: "Your Message"
      },
      wrongInput: false
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      if (this.name.length < 3) {
        this.wrongInput = true;
        this.placeholders.name = "Hmm.. seems this name is not valid ";
      } else {
        this.wrongInput = false;
        this.placeholders.name;
      }

      if (!this.email.includes("@") || this.email.length < 8) {
        this.wrongInput = true;
        this.placeholders.email = "Wrong email... Try again";
      } else {
        this.wrongInput = false;
        this.placeholders.email;
      }

      if (this.company.length < 5) {
        this.wrongInput = true;
        this.placeholders.company = "Hmm.. seems is invalid company name";
      } else {
        this.wrongInput = false;
        this.placeholders.company;
      }

      if (this.message.length < 10) {
        this.wrongInput = true;
        this.placeholders.message = "Please write something about yourself";
      } else {
        this.wrongInput = false;
        this.placeholders.message;
      }
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
  padding-top: 3em;
  padding-left: 5em;
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
  margin-bottom: 2em;
}

.error {
  box-shadow: 0px 0px 5px 0px rgba(234, 61, 61, 0.6);
  border-radius: 5px;
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
</style>