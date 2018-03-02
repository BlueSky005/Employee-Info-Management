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

<form class="col-lg-12 col-md-12">
<br />
<div class="form-group row offset-lg-1" v-if="deleteConfirmMsg">
<div class="alert alert-dismissible alert-danger">
 <button type="button" class="close" data-dismiss="alert">&times;</button>
 <i class="fa fa-info-circle"></i>&nbsp;&nbsp;<strong>Deleted successfully !</strong>
</div>
</div>
<div class="form-group row" v-if="proceedDeleteMsgFlag">
  <span style="color: red; font-weight: bold;">Proceed to delete the document ?</span><br /><br />
</div>
  <div class="form-group row">
 <label for="inputEmail2" class="col-sm-3 col-md-3 col-lg-3 col-form-label">Name</label>
 <div class="col-sm-9 col-md-9 col-lg-9">
   <label class="col-form-label deleteValues">{{ deletingEmployeeDetails[0].emp_name }}</label>
 </div>
</div>
<div class="form-group row">
<label for="inputEmail3" class="col-sm-3 col-md-3 col-lg-3 col-form-label">Email</label>
<div class="col-sm-9 col-md-9 col-lg-9">
  <label class="col-form-label deleteValues">{{ deletingEmployeeDetails[0].email }}</label>
</div>
</div>
<div class="form-group row">
<label for="inputEmail3" class="col-sm-3 col-md-3 col-lg-3 col-form-label">Phone</label>
<div class="col-sm-9 col-md-9 col-lg-9">
  <label class="col-form-label deleteValues">{{ deletingEmployeeDetails[0].phone }}</label>
</div>
</div>
<div class="form-group row">
<label for="inputEmail3" class="col-sm-3 col-md-3 col-lg-3 col-form-label">Age</label>
<div class="col-sm-9 col-md-9 col-lg-9">
  <label class="col-form-label deleteValues">{{ deletingEmployeeDetails[0].age }}</label>
</div>
</div>
<div class="form-group row">
<label for="inputEmail3" class="col-sm-3 col-md-3 col-lg-3 col-form-label">Profession</label>
<div class="col-sm-9 col-md-9 col-lg-9">
  <label class="col-form-label deleteValues">{{ deletingEmployeeDetails[0].profession }}</label>
</div>
</div>

<div class="form-group row">
<label for="inputEmail3" class="col-sm-3 col-md-3 col-lg-3 col-form-label">Address</label>
<div class="col-sm-9 col-md-9 col-lg-9">
   <label class="col-form-label deleteValues">{{ deletingEmployeeDetails[0].address }}</label>
</div>
</div>
</form>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" @click="deleteEmployee()"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp;&nbsp;Delete</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="deleteClickedNow()">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import jQuery from 'jquery';
import { employee } from '../firebase';

export default {
  props: {
    deleteClickedNow: {
      type: Function,
    },
    deleteStatus: {
      type: Boolean,
    },
    toDeleteKey: {
      type: String,
    },
  },
  data() {
    return {
      deletingEmployeeDetails: [],
      deleteConfirmMsg: false,
      proceedDeleteMsgFlag: true,
    };
  },
  methods: {
    deleteEmployee() {
      // TODO : Add your delete code here ...
      employee.child(this.toDeleteKey).remove();
      this.deleteConfirmMsg = true;
      this.proceedDeleteMsgFlag = false;
      setTimeout(() => {
        this.deleteConfirmMsg = false;
        this.proceedDeleteMsgFlag = true;
        jQuery('#deleteEmployee').modal('hide');
      }, 2000);
    },
  },
  mounted() {
    jQuery('#deleteEmployee').modal('show');
  },
  created() {
    const filteredData = [];
    employee.orderByChild('_id').equalTo(this.toDeleteKey).on('child_added', (snapshot) => {
      filteredData.push(snapshot.val());
    });
    this.deletingEmployeeDetails = filteredData;
  },
};
</script>

<style scoped>
@import 'font-awesome';

  .modal-header {
    background-image: url('/static/color.JPG');
  }
  .modal-title { color: #fff;}
  .deleteValues { color: green; font-weight: bold; }
  #loginBtn { background-image: url('/static/loginBg.JPG')}
</style>
