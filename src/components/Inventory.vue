<template>
 <div class="container">
   <div class="row justify-content-center">
     <form class="col-lg-5">
       <br /><br />
       <h5>EIS&nbsp;&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;&nbsp;<span style="color: gray;">Add Employee</span></h5>
       <hr /><br />
       <div class="form-group row">
         <label for="inputName" class="col-sm-3 col-form-label">Name</label>
         <div class="col-sm-9">
           <input type="text" class="form-control" id="inputName" placeholder="Name" ref="name">
         </div>
       </div>
     <div class="form-group row">
       <label for="inputEmail3" class="col-sm-3 col-form-label">Email</label>
       <div class="col-sm-9">
         <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
       </div>
     </div>
     <div class="form-group row">
       <label for="inputEmail3" class="col-sm-3 col-form-label">Phone</label>
       <div class="col-sm-9">
         <input type="text" class="form-control" id="inputEmail3" placeholder="Phone">
       </div>
     </div>
     <div class="form-group row">
       <label for="inputEmail3" class="col-sm-3 col-form-label">Age</label>
       <div class="col-sm-9">
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
       <div class="col-sm-9">
         <select class="form-control" id="exampleFormControlSelect1">
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
           <option>5</option>
         </select>
       </div>
     </div>
     <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Gender</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
          <label class="form-check-label" for="gridRadios1">
            Male
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="form-check-label" for="gridRadios2">
            Female
          </label>
        </div>
      </div>
    </div>
  </fieldset>
     <div class="form-group row">
       <label for="inputEmail3" class="col-sm-3 col-form-label">Address</label>
       <div class="col-sm-9">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
       </div>
     </div>
     &nbsp;&nbsp;&nbsp;<button type="submit" class="btn btn-primary offset-lg-3">
    <i class="fa fa-address-book" aria-hidden="true"></i>&nbsp;&nbsp;Add Employee</button>
   </form>
    </div><br /><br />
 </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.name.focus();
  },
};
</script>

<style>
@import 'font-awesome';

</style>
