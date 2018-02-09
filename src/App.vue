<template>
  <div id="app">
    <div class="container">
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
  </div>
</template>

<script>

import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default {

  name: 'App',
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>

@import 'bootstrap';

</style>
