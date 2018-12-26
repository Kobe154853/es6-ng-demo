import { log, Ramda } from "../common/util";
import template from './user-page.html';
// import $http from 'angular';


const name = 'userPage'; //<login-page></login-page>
const bindings = {};

const controller = function (userService,filterFilter) {
  'ngInject'
  this.userTitle = 'I am user.......';
  this.users = [];
  this.allUsers = [];
  this.nameFilter = 'admin';
  userService.fetch().then(resp => {
    // log(resp);
    var flagvar = false;
    var id = location.search.substr(4,1);
    log(id);
    var roleid = location.search.substr(11, 1);
    log(roleid);
    this.users = resp.data;
    this.allUsers = resp.data;
    log(this.users[id-1].username);
    this.newname = this.users[id - 1].username;
    log(flagvar);
    if (roleid == 1) {
      flagvar = true;
    }
    this.flagvar = flagvar;
    this.roleid = roleid;
  })
  this.filterUserNameByRamda = function () {
    this.users = Ramda.filter(user => {
      return Ramda.contains(this.nameFilter, user.name);
    }, this.allUsers);
  };
  this.filterUserName = function () {
    this.users = filterFilter(this.allUsers, this.nameFilter);
  };
  

  
};

// const controller = ['$http', function ($http) {
//   this.loginTitle = 'I am login';
//   this.$http = $http;
//   this.loginnew = function () {
//     $http({

//       method: 'post',

//       url: 'http://localhost:8081/api/login',

//       data: {
//         username: "张三",
//         password: "123456"
//       }

//     })
//     // $http.post("http://localhost:8081/api/login","{'username':'张三','password':'123456'}")
//     // // .success(function(data){ 
//     // // var a = new console();
//     // // a.log(data);
//     // // });
//   }
// }];

export default {
  name,
  template,
  bindings,
  controller,
}