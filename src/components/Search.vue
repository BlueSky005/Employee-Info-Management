<template>
 <div class="container">
<br />
<div class="col-lg-12">
  <div class="row justify-content-center">
    <div class="card text-left card-block border-primary animated fadeIn" style="width: 50rem;">
    <div class="card-header" style="background-image:url('static/color.JPG'); color: #fff;">
      <i class="fa fa-tags fa-lg"></i>&nbsp;&nbsp;EIS - Search
    </div>
    <div class="card-block"><br />
      <div class="form-group row offset-lg-2 offset-sm-1">
        <label for="inputEmail3" class="col-lg-2 col-md-2 col-form-label"><i class="fa fa-search" aria-hidden="true"></i>&nbsp; By</label>
        <div class="col-sm-10 col-md-8 col-lg-6">
          <select class="form-control" id="exampleFormControlSelect1" v-model="selectedOption">
            <option v-for="SearchOption in SearchOptions" :selected="SearchOption == 'Select an option ...'">{{ SearchOption }}</option>
          </select>
        </div>
      </div>

      <div class="form-group row offset-lg-2 offset-sm-1" v-if="selectedOption == 'Profession'">
        <label for="inputEmail3" class="col-lg-2 col-md-2 col-form-label">Profession</label>
        <div class="col-sm-10 col-md-8 col-lg-6">
          <select class="form-control" id="exampleFormControlSelect1" v-model="selectedProfession">
            <option v-for="professionOption in professionOptions">{{ professionOption }}</option>
          </select>
        </div>
      </div>
      <div class="form-group row offset-lg-2 offset-sm-1" v-if="selectedOption == 'Name'">
        <label for="inputEmail3" class="col-lg-2 col-md-2 col-form-label">Name</label>
        <div class="col-sm-10 col-md-8 col-lg-6">
          <input type="text" v-model="searchName" class="form-control" id="inputEmail3" placeholder="What's the name to search ?">
        </div>
      </div>

      <div class="form-group row c0l-sm-12" v-if="selectedOption == 'Name' || selectedOption == 'Profession'">
        <button class="btn btn-primary offset-md-3 offset-sm-2 offset-lg-4" @click="searchClicked()"><i class="fa fa-search" aria-hidden="true"></i>&nbsp;Search</button>
      </div><br />

      <div class="row col-lg-12 offset-lg-1" v-if="selectedOption == 'Select an option ...'">
        <img src="/static/search9.jpg" class="img-fluid img-thumbnail" />
      </div>

    </div>
    <!--<div class="card-footer text-muted">
      2 days ago
    </div> -->
  </div>
  </div>
</div>

<br />
                  <div class="col-lg-12" v-if="searchClickedStatus == true">
                    <div class="row justify-content-center">
                      <div class="card text-left card-block border-primary animated fadeIn" style="width: 100rem;">
                      <div class="card-header" style="background-image:url('static/color.JPG'); color: #fff;">
                        <i class="fa fa-tags fa-lg"></i>&nbsp;&nbsp;EIS - Search Results
                      </div>
                      <div class="card-block"><br />

                        <table class="table table-hover">
<thead>
  <tr>
    <th scope="col">Name</th>
    <th scope="col">Gender</th>
    <th scope="col">Profession</th>
    <th scope="col">Edit</th>
    <th scope="col">Remove</th>
  </tr>
</thead>
<tbody>
  <tr class="table-primary" v-for="filteredEmp of filteredEmployees" v-bind:key="filteredEmp['_id']">
    <td>{{ filteredEmp.emp_name }}</td>
    <td>{{ filteredEmp.gender }}</td>
    <td>{{ filteredEmp.profession }}</td>
    <td><i class="fa fa-pencil" aria-hidden="true" style="color: green;" @click="editClicked(filteredEmp['_id'])"></i></td>
    <td><i class="fa fa-times" aria-hidden="true" style="color: red;" @click="deleteClicked(filteredEmp['_id'])"></i></td>
  </tr>
</tbody>
</table>
                      </div>
                      <div class="card-footer text-muted">
                        2 days ago
                      </div>
                    </div>
                    </div>
                  </div>
                   <br /><br />

                  <div class="row" v-if="editClickedStatus == true">
                     <EditEmployee :editClickedNow="editClicked" :updateClicked="updateEmployee" :toEditKey="selectedKey" :editStatus="editClickedStatus"></EditEmployee>
                  </div>

                  <div class="row" v-if="deleteClickedStatus == true">
                    <DeleteEmployee :deleteClickedNow="deleteClicked"
                    :deleteClicked="deleteEmployee" :toDeleteKey="selectedKey" :deleteStatus="deleteClickedStatus"></DeleteEmployee>
                  </div>

 </div>
</template>

<script>

import _ from 'lodash';
import EditEmployee from './EditEmployee';
import DeleteEmployee from './DeleteEmployee';
import { profession, employee } from '../firebase';

export default {
  data() {
    return {
      SearchOptions: ['Select an option ...', 'Name', 'Profession'],
      selectedOption: 'Select an option ...',
      selectedProfession: 'Select a profession ...',
      searchClickedStatus: false,
      editClickedStatus: false,
      deleteClickedStatus: false,
      professionOptions: [],
      searchName: '',
      testing: '',
      selectedKey: '',
    };
  },
  firebase: {
    filteredEmployees: employee,
  },

  methods: {
    searchClicked() {
      this.searchClickedStatus = true;
      if (this.selectedOption === 'Profession') {
        const filteredData = [];
        employee.orderByChild('profession').equalTo(this.selectedProfession).on('child_added', (snapshot) => {
          filteredData.push(snapshot.val());
        });
        this.filteredEmployees = filteredData;
      }
      else if (this.selectedOption === 'Name') {
        const filteredData = [];
        employee.orderByChild('emp_name').equalTo(this.searchName).on('child_added', (snapshot) => {
          filteredData.push(snapshot.val());
        });

        this.filteredEmployees = filteredData;
        // console.log(this.selectedProfession);
      }
    },
    editClicked(key) {
      this.editClickedStatus = !this.editClickedStatus;
      // this.testing = key;
      this.selectedKey = key;
    },
    updateEmployee() {
      // TODO : Add your update code here ...
    },
    deleteEmployee() {
      // TODO : Add your delete code here ...
    },
    deleteClicked(key) {
      this.deleteClickedStatus = !this.deleteClickedStatus;
      this.selectedKey = key;
    },
  },
  components: {
    EditEmployee,
    DeleteEmployee,
  },
  mounted() {
    profession.on('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        this.professionOptions.push(childData.name);
      });
    });
  },
};
</script>

<style>
@import 'font-awesome';

</style>
