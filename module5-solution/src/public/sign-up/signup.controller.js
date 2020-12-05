(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
  var $ctrl = this;

  $ctrl.menuError = false;

  $ctrl.submit = function () {
    var promise = SignUpService.checkMenuItem($ctrl.menuitem);

    promise.then(function(response){
      var menuItem = response;
      console.log(menuItem);
      $ctrl.menuError = false;

      SignUpService.saveInfo($ctrl.firstname, $ctrl.lastname, $ctrl.email, $ctrl.phone, menuItem);
      $ctrl.completed = true;
    })
    .catch(function(){
      $ctrl.menuError = true;
      $ctrl.completed = false;
    });

    // if(!$ctrl.menuError){
    //   $ctrl.completed = true;
    // } else {
    //   $ctrl.completed = false;
    // }

  };
}

})();
