(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);

SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService($http, ApiPath) {
  var service = this;

  var signedUp = false;

  service.checkMenuItem = function(item) {
    return $http.get(ApiPath + '/menu_items/' + item +'.json')
    .then(function (response) {
      return response.data;
    });
  }

  service.saveInfo = function(firstname, lastname, email, phone, menuItem) {
    service.firstname = firstname;
    service.lastname = lastname;
    service.email = email;
    service.phone = phone;
    service.menuItem = menuItem;
    service.imageUrl = ApiPath + '/images/' + menuItem.short_name;
    console.log(menuItem.short_name);
    signedUp = true;
  }

  service.signedUp = function() {
    return signedUp;
  }
}

})();
