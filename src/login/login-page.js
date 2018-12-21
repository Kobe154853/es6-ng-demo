import {  log  } from "../common/util";
import template from './login-page.html';
// import $http from 'angular';


const name = 'loginPage'; //<login-page></login-page>
const bindings = {};


const controller = function (loginService, $http) {
  'ngInject'
  this.loginTitle = 'I am login';
  this.$http = $http;
  this.logins = [];
  loginService.fetch().then(resp => {
    // log(resp);
    log(this);
    this.logins = resp.data;
    log(this.logins);
  })
  this.loginnew = function ($http) {
    $http({

      method: 'post',
      headers: {
        "Content-Type": "application/json;charset = utf-8",
      },
      url: 'http://localhost:8081/api/login',

      data: JSON.stringify({
        username: "张三",
        password: "123456"
      })

    })

    // $http.post("http://localhost:8081/api/login","{'username':'张三','password':'123456'}")
    // .success(function(data){ 
    // var a = new console();
    // a.log(data);
    //});
  }

};

export default {
  name,
  template,
  bindings,
  controller,
}
