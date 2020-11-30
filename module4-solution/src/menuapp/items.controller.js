(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['title','items']
function ItemsController(title, items) {
  var itemsList = this;
  itemsList.title = title;
  itemsList.items = items;
}

})();
