// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import jQuery from 'jquery';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import { routes } from './routes';

global.jQuery = jQuery;
require('bootstrap');

Vue.use(VueRouter);

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
