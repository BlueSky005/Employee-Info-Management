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
          <input type="text" class="form-control" id="inputEmail3" placeholder="Name">
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
    <th scope="col">Profession</th>
    <th scope="col">Email</th>
    <th scope="col">Address</th>
    <th scope="col">Edit</th>
    <th scope="col">Remove</th>
  </tr>
</thead>
<tbody>
  <tr class="table-active">
    <th scope="row">Active</th>
    <td>Column content</td>
    <td>Column content</td>
    <td>Column content</td>
    <td><i class="fa fa-pencil" aria-hidden="true" style="color: green;" @click="editClicked()"></i></td>
    <td><i class="fa fa-times" aria-hidden="true" style="color: red;" @click="deleteClicked()"></i></td>
  </tr>
  <tr>
    <th scope="row">Default</th>
    <td>Column content</td>
    <td>Column content</td>
    <td>Column content</td>
    <td><i class="fa fa-pencil" aria-hidden="true" style="color: green;"></i></td>
    <td><i class="fa fa-times" aria-hidden="true" style="color: red;"></i></td>
  </tr>
  <tr class="table-primary">
    <th scope="row">Primary</th>
    <td>Column content</td>
    <td>Column content</td>
    <td>Column content</td>
  <td><i class="fa fa-pencil" aria-hidden="true" style="color: green;"></i></td>
    <td><i class="fa fa-times" aria-hidden="true" style="color: red;"></i></td>
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
                     <EditEmployee :editClickedNow="editClicked" :editStatus="editClickedStatus"></EditEmployee>
                  </div>

                  <div class="row" v-if="deleteClickedStatus == true">
                    <DeleteEmployee :deleteClickedNow="deleteClicked" :deleteStatus="deleteClickedStatus"></DeleteEmployee>
                  </div>

 </div>
</template>

<script>

import EditEmployee from './EditEmployee';
import DeleteEmployee from './DeleteEmployee';
import { profession } from '../firebase';

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
    };
  },
  methods: {
    searchClicked() {
      this.searchClickedStatus = !this.searchClickedStatus;
      profession.on('value', (snapshot) => {
        snapshot.forEach((childsnapShot) => {
          console.log(childsnapShot.val());
        });
      });
      console.log(this.selectedProfession);
    },
    editClicked() {
      this.editClickedStatus = !this.editClickedStatus;
    },
    deleteClicked() {
      this.deleteClickedStatus = !this.deleteClickedStatus;
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
