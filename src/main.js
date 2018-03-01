// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import jQuery from 'jquery';
import './firebase';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueFire from 'vuefire';
import App from './App';
import { routes } from './routes';

global.jQuery = jQuery;
require('bootstrap');

Vue.use(VueRouter);
Vue.use(VueFire);

const router = new VueRouter({
  routes,
  mode: 'history',
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
