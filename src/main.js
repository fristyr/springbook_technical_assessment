import Vue from 'vue'
import Vuelidate from "vuelidate";
import VueRouter from "vue-router"
import App from './App.vue'
import AboutUs from "./components/AboutUs.vue"
import GetInTouch from "./components/GetInTouch.vue"
import MainPage from "./components/MainPage.vue"

Vue.use(VueRouter);
Vue.use(Vuelidate);

const routes = [
  { path:'/', component: MainPage },
  { path:'/about_us', component: AboutUs },
  { path:'/get_in_touch', component: GetInTouch },
]

const router = new VueRouter({
  routes,
  mode: "history"
})

Vue.config.productionTip = false

new Vue({
  router,

  render: h => h(App),
}).$mount('#app')
