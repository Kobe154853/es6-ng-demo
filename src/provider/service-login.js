export default {
  name: 'loginService',
  fn: function ($http) {
    'ngInject'
    this.fetch = () => $http.get('/someapi/logins');
    //this.fetch = () => $http.post('http://localhost:8081/api/login');
  },
  mockFn:  function ($http) {
    'ngInject'
    this.fetch = () => $http.get('/stub/logins.json');
    //this.fetch = () => $http.post('http://localhost:8081/api/login');
  }
}