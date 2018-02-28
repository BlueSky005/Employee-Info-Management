<template>
  <div class="container">
<br />
    <div class="col-lg-12">
      <div class="row justify-content-center">
        <div class="card text-left card-block border-primary animated fadeIn" style="width: 50rem;">
        <div class="card-header" style="background-image:url('static/color.JPG'); color: #fff;">
          <i class="fa fa-tags fa-lg"></i>&nbsp;&nbsp;EIS - Add Employee
        </div>
        <div class="card-block"><br />

          <div class="form-horizontal offset-md-2 offset-sm-1">

<form class="col-lg-11 col-md-8">
 <br />

 <div class="form-group row offset-lg-1" v-if="confirmMsgFlag">
 <div class="alert alert-dismissible alert-success">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <i class="fa fa-info-circle"></i>&nbsp;&nbsp;You just added an employee <strong>successfully !</strong></a>.
</div>
</div>
 <div class="form-group row">
   <label for="inputEmail2" class="col-sm-3 col-form-label">Name</label>
   <div class="col-sm-9 col-lg-8 col-md-9">
     <input type="email" ref="name" class="form-control" :class=" { 'is-invalid': isInvalid.nameInvalid }" id="inputEmail2" placeholder="What's the name ?">
     <div class="invalid-feedback animated flipInX">Please enter the user name.</div>
   </div>
 </div>
<div class="form-group row">
 <label for="inputEmail3" class="col-sm-3 col-form-label">Email</label>
 <div class="col-sm-9 col-lg-8">
   <input type="email" ref="email" class="form-control" :class=" { 'is-invalid': isInvalid.emailInvalid }" id="inputEmail3" placeholder="Enter the Email Id ...">
   <div class="invalid-feedback animated flipInX">Please enter a valid email address.</div>
 </div>
</div>
<div class="form-group row">
 <label for="inputEmail3" class="col-sm-3 col-form-label">Phone</label>
 <div class="col-sm-9 col-lg-8">
   <input type="text" ref="phone" class="form-control" :class=" { 'is-invalid': isInvalid.phoneNoInvalid }" id="inputEmail3" placeholder="Enter the contact number ...">
   <div class="invalid-feedback animated flipInX">Please enter the contact number.</div>
 </div>
</div>
<div class="form-group row">
 <label for="inputEmail3" class="col-sm-3 col-form-label">Age</label>
 <div class="col-sm-9 col-lg-8">
   <select class="form-control" id="exampleFormControlSelect1" v-model="selectedAge">
     <option v-for="ageOption in ageOptions">{{ ageOption }}</option>
   </select>
 </div>
</div>
<div class="form-group row">
 <label for="inputEmail3" class="col-sm-3 col-form-label">Profession</label>
 <div class="col-sm-9 col-lg-8">
   <select class="form-control" id="exampleFormControlSelect1" v-model="selectedInventoryProfession">
     <option v-for="professionOption in professionOptions">{{ professionOption }}</option>
   </select>
 </div>
</div>
<fieldset class="form-group">
<div class="row">
<legend class="col-form-label col-sm-3 pt-0">Gender</legend>
<div class="col-sm-9 col-lg-8">
  <div class="form-check form-check-inline" v-for="genderOption in genderOptions">
    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1"
     :value="genderOption" v-model="gender">
    <label class="form-check-label" for="gridRadios1">
    {{ genderOption }}
    </label>
  </div>
</div>
</div>
</fieldset>
<div class="form-group row">
 <label for="inputEmail3" class="col-sm-3 col-form-label">Address</label>
 <div class="col-sm-9 col-lg-8">
    <textarea placeholder="Enter the address ..." ref="address" class="form-control" :class=" { 'is-invalid': isInvalid.addressInvalid }" id="exampleFormControlTextarea1" rows="3"></textarea>
    <div class="invalid-feedback animated flipInX">Please enter your address.</div>
 </div>
</div>
&nbsp;&nbsp;&nbsp;<button type="submit" @click.prevent="addEmployee()"
class="btn btn-primary offset-lg-3 offset-md-3 offset-sm-3 offset-xsm-1">
<i class="fa fa-pencil" aria-hidden="true"></i>&nbsp;&nbsp;Add Employee</button>
<br /><br />
</form>
</div>
        </div>
      <!--  <div class="card-footer text-muted">
          2 days ago
        </div> -->
      </div>
      </div>
    </div>

<br /><br />
 </div>
</template>

<script>

import _ from 'lodash';
import { gender, profession, employee } from '../firebase';

export default {

  data() {
    return {
      gender: 'Male',
      genderOptions: [],
      professionOptions: [],
      selectedInventoryProfession: 'Full Stack Developer',
      ageOptions: _.range(20, 61),
      selectedAge: 20,
      confirmMsgFlag: false,
      isInvalid: {
        nameInvalid: false,
        emailInvalid: false,
        phoneNoInvalid: false,
        addressInvalid: false,
      },
    };
  },

  mounted() {
    this.$refs.name.focus();
    gender.on('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        this.genderOptions.push(childData.name);
      });
    });

    profession.on('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        this.professionOptions.push(childData.name);
      });
    });
  },

  methods: {
    addEmployee() {
      if (this.$refs.name.value !== '') {
        this.isInvalid.nameInvalid = false;
      }
      if (this.$refs.email.value !== '') {
        this.isInvalid.emailInvalid = false;
      }
      if (this.$refs.phone.value !== '') {
        this.isInvalid.phoneNoInvalid = false;
      }
      if (this.$refs.address.value !== '') {
        this.isInvalid.addressInvalid = false;
      }
      if (this.$refs.name.value === '') {
        this.isInvalid.nameInvalid = true;
      }
      else if (this.$refs.email.value === '') {
        this.isInvalid.emailInvalid = true;
      }
      else if (this.$refs.phone.value === '') {
        this.isInvalid.phoneNoInvalid = true;
      }
      else if (this.$refs.address.value === '') {
        this.isInvalid.addressInvalid = true;
      }
      else {
        employee.push({
          emp_name: this.$refs.name.value,
          email: this.$refs.email.value,
          phone: this.$refs.phone.value,
          age: this.selectedAge,
          profession: this.selectedInventoryProfession,
          gender: this.gender,
          address: this.$refs.address.value,
        });
        this.$refs.name.value = '';
        this.$refs.email.value = '';
        this.$refs.phone.value = '';
        this.$refs.address.value = '';
        this.confirmMsgFlag = true;
        setTimeout(() => {
          this.confirmMsgFlag = false;
          this.$refs.name.focus();
        }, 3000);
      } // end of else part
    },
  },
};
</script>

<style>
@import 'font-awesome';
</style>
