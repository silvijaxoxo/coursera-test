(function () {
  'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;

  list.logMenuItems = function (searchTerm) {
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

    promise.then(function (result){
       list.found = result;
       console.log(list.found);
    });
  }

  list.removeItem = function (itemIndex) {
    // console.log(list.found[itemIndex]);
    list.found.splice(itemIndex, 1);
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {

    return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
        var menuItems = result.data.menu_items;

        var foundItems = [];

        for (var i = 0; i < menuItems.length; i++) {
          var name = menuItems[i].name;
          if (name.toLowerCase().indexOf(searchTerm) !== -1) {
            foundItems.push(menuItems[i]);
          }
        }
        return foundItems;
    });
  }
}

})();
