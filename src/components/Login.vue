<template>
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle"><i class="fa fa-lock" aria-hidden="true"></i>&nbsp;&nbsp;Login</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text"><i class="fa fa-user" aria-hidden="true"></i></div>
           </div>
           <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username" autofocus>
        </div><br  />
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text"><i class="fa fa-eye" aria-hidden="true"></i></div>
           </div>
           <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Password">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" @click="loggedIn" id="loginBtn" class="btn btn-warning btn-lg btn-block"
        data-dismiss="modal" style="color: black;"><i class="fa fa-sign-in" aria-hidden="true"></i>&nbsp;&nbsp;Login</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import jQuery from 'jquery';

export default {

  mounted() {
    jQuery('#exampleModalCenter').modal('show');
  },
};
</script>

<style scoped>
@import 'font-awesome';

  .modal-header {
    background-image: url('/static/color.JPG');
  }
  .modal-title { color: #fff;}
  #loginBtn { background-image: url('/static/loginBg.JPG')}
</style>
