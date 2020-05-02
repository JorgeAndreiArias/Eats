import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import routes from './router'

import store from './store'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css'

import * as firebase from "firebase";
import firebaseConfig from './services/firebaseConfig'

Vue.use(VueRouter)

const router = new VueRouter({ routes, mode: 'history' })

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
