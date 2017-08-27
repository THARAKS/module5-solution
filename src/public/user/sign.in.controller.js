(function () {
"use strict";

angular.module('public')
.controller('SignInController', SignInController);

SignInController.$inject=['UserDetailsService']
function SignInController(UserDetailsService) {
  var signInCtrl = this;
  signInCtrl.showForm=true;
  signInCtrl.isDisabled=true;
  //  var hideForm=false;
console.log("signInCtrl", this)
signInCtrl.checkForItems= function(itemName)
{

var promise=UserDetailsService.getFavouriteItems(itemName);
promise.then(function (response) {
  var result=response;
  UserDetailsService.saveUserInfo(result)
    console.log(response);
    signInCtrl.isDisabled=false;
    signInCtrl.error=false;
  })
  .catch(function (error) {
    signInCtrl.isDisabled = true;
    signInCtrl.error=true;
  })




}
signInCtrl.submit = function (user) {
  signInCtrl.completed = true;
  console.log("form sign is completed");
  var saved=UserDetailsService.saveUserDetails(user);
  if(saved)
  {
    signInCtrl.showForm=false;
  signInCtrl.hideForm=true;
  }

};

}


})();
