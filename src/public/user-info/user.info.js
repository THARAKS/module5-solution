(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController)

UserInfoController.$inject=['UserDetailsService','userInfo','ApiPath']
function UserInfoController(UserDetailsService,userInfo,ApiPath) {
  var userCtrl = this;
var itemInfo =UserDetailsService.getItemInfo();
 userCtrl.basePath=ApiPath;
userCtrl.userInfo=userInfo;

  if(itemInfo.length!=0 && userInfo.length!=0 )
  {
// show the user details
     userCtrl.itemInfo=itemInfo;
     userCtrl.userInfo=userInfo;

     console.log("user details", userCtrl.userInfo)
     console.log("item details", userCtrl.itemInfo)

  }
  else{
    userCtrl.itemInfo=itemInfo;
    userCtrl.userInfo=userInfo;
    userCtrl.hideDetails=true;

    console.log("user details", userCtrl.userInfo)
  }

}


})();
