(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignUpService'];
function MyInfoController(SignUpService) {
  var $ctrl = this;

  $ctrl.signedUp = SignUpService.signedUp();

  $ctrl.firstname = SignUpService.firstname;
  $ctrl.lastname = SignUpService.lastname;
  $ctrl.email = SignUpService.email;
  $ctrl.phone = SignUpService.phone;
  $ctrl.menuItem = SignUpService.menuItem;
  $ctrl.imageUrl = SignUpService.imageUrl;
}

})();
