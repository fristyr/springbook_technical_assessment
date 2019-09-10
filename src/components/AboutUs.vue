<template>
  <div class="wrapper">
    <div class="main">
      <nav class="header">
        <a href="#" class="header__logo"></a>
        <div class="header__links">
          <router-link to="/">Home</router-link>
          <router-link to="/get_in_touch">Get in Touch</router-link>
        </div>
      </nav>
      <section class="about">
        <article class="description">
          <h1 class="description__title">
            About
            <b>Us</b>
          </h1>
          <p
            class="description__text"
          >A full-service team of award-winning copywriters, producers and graphic designers delivers solutions that harness the power of our digital properties. We work with you from conception through activation to develop on-strategy, breakthrough creative that generates attention and response.</p>
        </article>
        <article class="features">
          <div class="features__block feature">
            <h2 class="feature__title graphic">Graphic Design</h2>
            <p
              class="feature__description"
            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          <div class="features__block feature">
            <h2 class="feature__title print">Print Design</h2>
            <p
              class="feature__description"
            >When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
          </div>
          <div class="features__block feature">
            <h2 class="feature__title video">Motion Design</h2>
            <p
              class="feature__description"
            >and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is is not simply a random text.</p>
          </div>
          <div class="features__block feature">
            <h2 class="feature__title strategy">Strategy & Media</h2>
            <p
              class="feature__description"
            >and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is is not simply a random text.</p>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<style  scoped>
.wrapper {
  background: linear-gradient(
    90deg,
    rgba(53, 55, 58, 0.9) 50%,
    rgba(234, 61, 61, 0.9) 50%
  );
  min-height: 100vh;
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
  background-size: contain;
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
.about {
  display: flex;
  justify-content: space-between;
}
.description {
  max-width: 300px;
  width: 100%;
}
.description__title {
  position: relative;
  font-size: 2.5em;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 0;
}
.description__title::before {
  position: absolute;
  content: "";
  width: 70px;
  height: 2px;
  background-color: #fff;
  bottom: -0.5em;
}
.description__text {
  font-size: 1em;
  text-align: left;
}
.features {
  display: flex;
  flex-wrap: wrap;
  max-width: 700px;
  width: 100%;
  background-color: #fff;
  padding-left: 4em;
  padding-top: 2em;
  padding-bottom: 1em;
  box-shadow: 0px 0px 40px 0px rgba(1, 1, 1, 0.2);
}
.feature {
  max-width: 350px;
  width: 100%;
}
.feature__title {
  position: relative;
  color: #e83d3d;
  margin-top: 0;
  padding-top: 3em;
}

.feature__title::before,
.feature__title::after {
  content: "";
  position: absolute;
  left: 0;
}

.feature__title::after {
  bottom: -0.5em;
  width: 70px;
  height: 2px;
  background-color: #e83d3d;
}
.feature__title::before {
  top: -0.9em;
  width: 60px;
  height: 60px;
}

.graphic {
  background: url(../assets/graphic.png) no-repeat;
}
.print {
  background: url(../assets/print.png) no-repeat;
}
.video {
  background: url(../assets/video.png) no-repeat;
}
.strategy {
  background: url(../assets/strategy.png) no-repeat;
}

.feature__description {
  color: #35373a;
  text-align: left;
  max-width: 280px;
}
@media screen and (max-width: 1280px) {
  .wrapper {
    padding-left: 1.5em;
    padding-right: 1.5em;
  }
  .header__links a:not(:last-child) {
    margin-right: 2em;
  }
  .content__sqr_title {
    font-size: 2em;
  }
  .header__logo {
    width: 60px;
    height: 55px;
  }
  .about {
    flex-direction: column;
    align-items: center;
  }
  .description {
    max-width: 750px;
  }
  .description__text,
  .description {
    text-align: center;
  }
  .description__title::before {
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
@media screen and (max-width: 850px) {
  .feature__title::before,
  .graphic,
  .print,
  .strategy,
  .video {
    background: none;
  }
  .features {
    padding-left: 0;
  }
  .feature__title {
    padding-top: 1em;
  }
  .feature__description {
    max-width: 210px;
  }
  .description__text {
    max-width: 460px;
    margin: 0 auto;
    margin-bottom: 1.5em;
  }
  .feature {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 0px;
  }
}
</style>