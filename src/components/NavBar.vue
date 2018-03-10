<template>
    <nav style="background-image: url(/static/bg2.JPG);" class="navbar navbar-expand-lg navbar-expand-md navbar-dark bg-primary col-lg-12">
      <h3 style="color: #fff;">&nbsp;&nbsp;EIS</h3>
      <button class="navbar-toggler" type="button"
      data-toggle="collapse" data-target="#navbarColor01"
      aria-controls="navbarColor01" aria-expanded="false"
      aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item router-link-exact-active">
            <router-link to='/inventory'><h4 class="nav-link">Inventory <span class="sr-only">(current)</span></h4></router-link>
          </li>
          <li class="nav-item">
            <router-link to='/search'><h4 class="nav-link">Search</h4></router-link>
          </li>

          <li class="nav-item">
            <router-link to='/about'><h4 class="nav-link">About</h4></router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
											<!-- <li class="nav active"><a href="index.html">Home</a></li>
											<li class="nav"><a href="#">About Us</a></li> -->

                      <div class="btn-group" role="group">
    <button style="background-image: url(/static/bg2.JPG);" id="btnGroupDrop1" type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Welcome Guest
    </button>
    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1" style="text-align: center;">
      <a class="dropdown-item" href="#"><img src="/static/user.png" /></a>
      <a class="dropdown-item" href="http://localhost:8080/inventory">Log Out</a>
    </div>
  </div>
										</ul>
      </div>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      navInventoryClickStatus: 'true',
      navSearchClickStatus: 'false',
      navAboutClickStatus: 'false',
    };
  }
};
</script>

<style>
@import 'font-awesome';
  a:hover { text-decoration: none;}
  .activeIndicator { color: #fff; }

  nav li:hover {
   background-color: #575c7a;
   cursor: pointer;
 }
/*.router-link-active {
  background-color: #575c7a;
  cursor: pointer;
}
.router-link-exact-active {
  background-color: #575c7a;
  cursor: pointer;
}*/
</style>
