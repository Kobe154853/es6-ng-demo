import template from './login-page.html';
// import $http from 'angular';


const name = 'loginPage'; //<login-page></login-page>
const bindings = {};


const controller = ['$http', function ($http) {
  this.loginTitle = 'I am login';
  this.$http = $http;
  this.loginnew = function () {
    // $http({

    //   method: 'post',

    //   url: 'http://localhost:8081/api/login',

    //   data: {
    //     "username": "张三",
    //     "password": "123456"
    //   }

    // })
    $http.post("http://localhost:8081/api/login",{'username':'张三','password':'123456'}).success(function(data){ 
    var a = new console();
    a.log(data);
    });
  }
}];

export default {
  name,
  template,
  bindings,
  controller,
}