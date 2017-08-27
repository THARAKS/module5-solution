(function () {
'use strict';

angular.module('public')
.component('itemList', {
  templateUrl: 'src/public/user-info/user-details.html',
  bindings: {
    userItem: '<'
  },
  controller: ItemController
  
});

ItemController.$inject = ['ApiPath'];
function ItemController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  console.log("path",  $ctrl.basePath )
}



})();
