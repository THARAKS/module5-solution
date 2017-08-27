(function () {
"use strict";

angular.module('common')
.service('UserDetailsService', UserDetailsService);

UserDetailsService.$inject = ['$http', 'ApiPath'];
function UserDetailsService($http,ApiPath) {
  var service = this;
  var users =[];
  var userInFo=[];
  service.saveUserInfo = function (user) {
    users.push(user);
    console.log("saved user ",user)
    return true;
  };
  service.saveUserDetails = function (user) {
    userInFo.push(user);
    console.log("saved user ",userInFo)
    return true;
  };

  service.getItemInfo = function () {
return users;
  };
  service.getUserInfo = function () {
return userInFo;
  };
  service.getFavouriteItems = function (category) {
    var config = category + '.json'
    return $http.get(ApiPath + '/menu_items/'+config ).then(function (response) {
            return response.data;
    });
  };


}



})();
