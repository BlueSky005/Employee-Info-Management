<template>
  <div class="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle"><i class="fa fa-lock" aria-hidden="true"></i>&nbsp;&nbsp;Login</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <div class="input-group" v-if="isLoginInValid.invalidLogin">
          <div class="alert alert-dismissible alert-danger offset-lg-2 offset-md-2 offset-sm-2">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Invalid User !</strong> Please try again.
          </div>
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text"><i class="fa fa-user" aria-hidden="true"></i></div>
           </div>
           <input type="text" class="form-control" ref="loginUserId" id="inlineFormInputGroupUsername" placeholder="Username" :class=" { 'is-invalid': isLoginInValid.loginUserInvalid }" autofocus>
           <div class="invalid-feedback animated flipInX">Please enter the User Id.</div>
        </div><br  />
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text"><i class="fa fa-eye" aria-hidden="true"></i></div>
           </div>
           <input type="password" class="form-control" ref="loginUserPassword" id="inlineFormInputGroupUsername" placeholder="Password" :class=" { 'is-invalid': isLoginInValid.loginPasswordInvalid }">
           <div class="invalid-feedback animated flipInX">Please enter the password.</div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" id="loginBtn" class="btn btn-warning btn-lg btn-block" style="color: black;" @click="changeLoginStatus()"><i class="fa fa-sign-in" aria-hidden="true"></i>&nbsp;&nbsp;Login</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import firebase from 'firebase';
import jQuery from 'jquery';
import _ from 'lodash';
import { user } from '../firebase';

export default {

  props: {
    loginCurrentStatus: {
      type: Boolean,
    },
  },

  data() {
    return {
      isLoginInValid: {
        loginUserInvalid: false,
        loginPasswordInvalid: false,
        invalidLogin: false,
      },
    };
  },
  methods: {
    changeLoginStatus() {
      const userId = this.$refs.loginUserId.value;
      const userPassword = this.$refs.loginUserPassword.value;
      this.loginStatus = !this.loginStatus;
      if ((userId === '') && (userPassword === '')) {
        this.isLoginInValid.loginUserInvalid = true;
        this.isLoginInValid.loginPasswordInvalid = true;
        this.$refs.loginUserId.focus();
      } else if ((userId === '') && (userPassword !== '')) {
        this.isLoginInValid.loginUserInvalid = true;
        this.isLoginInValid.loginPasswordInvalid = false;
        this.$refs.loginUserId.focus();
      } else if ((userId !== '') && (userPassword === '')) {
        this.isLoginInValid.loginUserInvalid = false;
        this.isLoginInValid.loginPasswordInvalid = true;
        this.$refs.loginUserPassword.focus();
      } else if ((userId !== '') && (userPassword !== '')) {
        this.isLoginInValid.loginUserInvalid = false;
        this.isLoginInValid.loginPasswordInvalid = false;
        const allUsers = [];
        user.orderByValue().on('child_added', (snapshot) => {
          allUsers.push({ user_id: snapshot.val().user_id,
            password: snapshot.val().password });
        });
        const enteredId = this.$refs.loginUserId.value;
        const enteredPwd = parseInt(this.$refs.loginUserPassword.value, 10);
        const loginStateIndex = _.findIndex(allUsers, { user_id: enteredId, password: enteredPwd });
        if (loginStateIndex !== -1) {
          this.loginCurrentStatus = true;
        } else {
          this.isLoginInValid.invalidLogin = true;
          this.$refs.loginUserId.focus();
        }
      }
    },
  },
  mounted() {
    // this.$refs.userName.focus();
    jQuery('#exampleModalCenter').modal('show');
    this.$refs.loginUserId.focus();
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
