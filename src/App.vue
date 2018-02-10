<template>
  <div id="app">
    <div class="container" v-if="loginStatus">
        <div class="row">
          <NavBar></NavBar>
        </div>
        <div class="row" style="background-color: #ffff;">
          <router-view></router-view>
        </div><!-- end of content row -->
        <div class="row">
          <Footer></Footer>
        </div>
    </div>
    <div class="container" v-else>
      <div class="row">
        <Login :changeLoginStatus="changeLoginStatus" :loginCurrentStatus="loginStatus"></Login>
      </div>
    </div>
  </div>
</template>

<script>

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login';

export default {

  data() {
    return {
      name: 'App',
      loginStatus: false,
    };
  },
  methods: {
    changeLoginStatus() {
      this.loginStatus = !this.loginStatus;
    },
  },
  components: {
    NavBar,
    Footer,
    Login,
  },
};
</script>

<style>

@import 'bootstrap';

</style>
