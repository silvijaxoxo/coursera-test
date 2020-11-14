(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var list1 = this;

  list1.items = ShoppingListCheckOffService.getToBuyItems();

  list1.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeToBuyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var list2 = this;

  list2.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService(){
  var service = this;

  var toBuyItems = [
    { name: "Cucumbers", quantity: 3 },
    { name: "Feta Cheese", quantity: 1 },
    { name: "Greek Yogurt", quantity: 1 },
    { name: "Ice Berg Lettuce", quantity: 1 },
    { name: "Red Peppers", quantity: 2 },
    { name: "Tomatoes", quantity: 5 }
  ];
  var boughtItems = [];

  service.removeToBuyItem = function(itemIndex){
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
  }

  service.getToBuyItems = function(){
    return toBuyItems;
  }

  service.getBoughtItems = function(){
    return boughtItems;
  }
}

})();
