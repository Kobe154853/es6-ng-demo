import {
  log
} from "../common/util";
import template from './login-page.html';

// import $http from 'angular';


const name = 'loginPage'; //<login-page></login-page>
const bindings = {};


const controller = function (userService) {
  'ngInject'
  this.loginTitle = 'I am login';
  // this.$http = $http;
  this.logins = [];
  userService.fetch().then(resp => {
    // log(resp);
    //log(this);
    this.logins = resp.data;
    log(this.logins);
  })
  this.loginnew = function () {
    // let username = this.username;
    // alert(username);
    // let password = this.password;
    // alert(password);
    var flag = false;
    this.logins.forEach(loginUser => {
      if (loginUser.username == this.username && loginUser.password == this.password) {
        //alert("login successfully");
        //alert(loginUser.role);
        location.href = '/pages/user/index.html?id=' + loginUser.id + "&role=" + loginUser.role;

        log(loginUser.role == 1 ? "login successfully,you are admin" : "login successfully,you are common user");
        flag = true;
      }
    });
    if (!flag) {
      alert("wrong username or password ");
      log("wrong username or password");
    }
    //   $http({

    //     method: 'post',
    //     headers: {
    //       "Content-Type": "application/json;charset = utf-8",
    //     },
    //     url: 'http://localhost:8081/api/login',

    //     data: JSON.stringify({
    //       username: "张三",
    //       password: "123456"
    //     })

    //   })

    //   // $http.post("http://localhost:8081/api/login","{'username':'张三','password':'123456'}")
    //   // .success(function(data){ 
    //   // var a = new console();
    //   // a.log(data);
    //   //});
  }

};

export default {
  name,
  template,
  bindings,
  controller,
}
