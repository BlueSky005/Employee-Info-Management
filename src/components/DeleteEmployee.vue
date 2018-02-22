<template>
  <div class="modal fade" id="deleteEmployee" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle"><i class="fa fa-tags fa-lg"></i>&nbsp;&nbsp;EIS - Delete Employee</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-horizontal offset-md-2 offset-sm-1">

<form class="col-lg-11 col-md-8">
<br />
  <span style="color: red;">Proceed to delete the document ?</span><br /><br />
  <div class="form-group row">
 <label for="inputEmail2" class="col-sm-3 col-form-label">Name</label>
 <div class="col-sm-9 col-lg-8 col-md-9">
   <input type="email" ref="updateName" class="form-control" id="inputEmail2" placeholder="Name">
 </div>
</div>
<div class="form-group row">
<label for="inputEmail3" class="col-sm-3 col-form-label">Email</label>
<div class="col-sm-9 col-lg-8">
 <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
</div>
</div>
<div class="form-group row">
<label for="inputEmail3" class="col-sm-3 col-form-label">Phone</label>
<div class="col-sm-9 col-lg-8">
 <input type="text" class="form-control" id="inputEmail3" placeholder="Phone">
</div>
</div>
<div class="form-group row">
<label for="inputEmail3" class="col-sm-3 col-form-label">Age</label>
<div class="col-sm-9 col-lg-8">
 <select class="form-control" id="exampleFormControlSelect1">
   <option>1</option>
   <option>2</option>
   <option>3</option>
   <option>4</option>
   <option>5</option>
 </select>
</div>
</div>
<div class="form-group row">
<label for="inputEmail3" class="col-sm-3 col-form-label">Profession</label>
<div class="col-sm-9 col-lg-8">
 <select class="form-control" id="exampleFormControlSelect1">
   <option>1</option>
   <option>2</option>
   <option>3</option>
   <option>4</option>
   <option>5</option>
 </select>
</div>
</div>

<div class="form-group row">
<label for="inputEmail3" class="col-sm-3 col-form-label">Address</label>
<div class="col-sm-9 col-lg-8">
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
</div>
</form>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp;&nbsp;Delete</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="deleteClickedNow()">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import jQuery from 'jquery';

export default {
  props: {
    deleteClickedNow: {
      type: Function,
    },
    deleteStatus: {
      type: Boolean,
    },
  },
  mounted() {
    jQuery('#deleteEmployee').modal('show');
    this.$refs.updateName.focus();
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
