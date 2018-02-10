<template>
    <nav class="navbar navbar-expand-lg navbar-expand-md navbar-dark bg-dark col-lg-12">
      <h3><i class="fa fa-arrows fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;EIS</h3>
      <button class="navbar-toggler" type="button"
      data-toggle="collapse" data-target="#navbarColor01"
      aria-controls="navbarColor01" aria-expanded="false"
      aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link to='/inventory'><h4 class="nav-link">Inventory <span class="sr-only">(current)</span></h4></router-link>
          </li>
          <li class="nav-item">
            <router-link to='/search'><h4 class="nav-link">Search</h4></router-link>
          </li>

          <li class="nav-item">
            <router-link to='/about'><h4 class="nav-link">About</h4></router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
};
</script>

<style>
@import 'font-awesome';
  a:hover { text-decoration: none;}
</style>
