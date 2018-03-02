<template>
  <div class="modal fade" id="editEmployee" role="dialog"
  aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">
          <i class="fa fa-tags fa-lg"></i>&nbsp;&nbsp;EIS - Edit Employee</h5>
        <button type="button" class="close" data-dismiss="modal"
         aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-horizontal offset-md-1 offset-sm-1">

<form class="col-lg-12 col-md-12">
<br /> <!--<br />
<div class="form-group row col-md-10">
 <h5 style="color: gray;"><i class="fa fa-tags fa-lg"></i>&nbsp;&nbsp;EIS - Add Employee</h5>
</div><hr /><br /> -->
<div class="form-group row">
 <label for="inputEmail2" class="col-sm-3 col-md-3 col-lg-3 col-form-label">Name</label>
 <div class="col-sm-8 col-md-8 col-lg-8">
   <input type="email" ref="updateName" class="form-control" id="inputEmail2" v-model="editingEmployeeDetails[0].emp_name"
   placeholder="Name">
 </div>
</div>
<div class="form-group row">
<label for="inputEmail3" class="col-sm-3 col-md-3 col-lg-3 col-form-label">Email</label>
<div class="col-sm-8 col-md-8 col-lg-8">
 <input type="email" class="form-control" id="inputEmail3" placeholder="Email" v-model="editingEmployeeDetails[0].email">
</div>
</div>
<div class="form-group row">
<label for="inputEmail3" class="col-sm-3 col-md-3 col-lg-3 col-form-label">Phone</label>
<div class="col-sm-8 col-md-8 col-lg-8">
 <input type="text" class="form-control" id="inputEmail3" placeholder="Phone" v-model="editingEmployeeDetails[0].phone">
</div>
</div>
<div class="form-group row">
<label for="inputEmail3" class="col-sm-3 col-md-3 col-lg-3 col-form-label">Age</label>
<div class="col-sm-8 col-md-8 col-lg-8">
 <input type="text" class="form-control" placeholder="Age" v-model="editingEmployeeDetails[0].age">
</div>
</div>
<div class="form-group row">
<label for="inputEmail3" class="col-sm-3 col-md-3 col-lg-3 col-form-label">Profession</label>
<div class="col-sm-8 col-md-8 col-lg-8">
 <select class="form-control" id="exampleFormControlSelect1">
   <option v-for="professionOption in editingProfessionOptions" :selected="professionOption == editingEmployeeDetails[0].profession">{{ professionOption }}</option>
 </select>
</div>
</div>

<div class="form-group row">
<label for="inputEmail3" class="col-sm-3 col-md-3 col-lg-3 col-form-label">Address</label>
<div class="col-sm-8 col-md-8 col-lg-8">
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="editingEmployeeDetails[0].address">
  </textarea>
</div>
</div>
</form>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary"><i class="fa fa-pencil-square-o"
        aria-hidden="true"></i>&nbsp;&nbsp;Update</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal"
        @click="editClickedNow()">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import jQuery from 'jquery';
import { employee, profession } from '../firebase';

export default {
  props: {
    editClickedNow: {
      type: Function,
    },
    editStatus: {
      type: Boolean,
    },
    toEditKey: {
      type: String,
    },
  },

  data() {
    return {
      editingEmployeeDetails: [],
      editingProfessionOptions: [],
    };
  },
  mounted() {
    jQuery('#editEmployee').modal('show');
    this.$refs.updateName.focus();
    profession.on('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        this.editingProfessionOptions.push(childData.name);
      });
    });
  },
  created() {
    const filteredData = [];
    employee.orderByChild('_id').equalTo(this.toEditKey).on('child_added', (snapshot) => {
      filteredData.push(snapshot.val());
    });
    this.editingEmployeeDetails = filteredData;
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
