(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunch = "";
  $scope.message = "";
  $scope.color = "";

  $scope.checkIfTooMuch = function() {

    if($scope.lunch.length == 0) {
      $scope.message = "Please enter data first";
      $scope.color = "red";
    }
    else {
      var itemsCount = calculateLunchItemsFromString($scope.lunch);

      console.log("Lunch items in total: " + itemsCount); // for checking the count of lunch items

      if(itemsCount > 3){
        $scope.message = "Too much!";
        $scope.color = "green";
      }
      else if(itemsCount > 0){
        $scope.message = "Enjoy!";
        $scope.color = "green";
      }
      else {  // this means that the string wasn't empty but there were only commas
        $scope.message = "Please enter data first; empty item \', ,\' doesn't count";
        $scope.color = "red";
      }
    }
  };
}

// calculates item count
function calculateLunchItemsFromString(string) {
  var items = string.split(',');
  var count = items.length;

  for(var i = 0; i < items.length; i++){
    if(checkIfItemIsEmpty(items[i])){
      count--;
    }
  }

  return count;
}

// checks if item is empty
function checkIfItemIsEmpty(item) {
  if(item.trim().length == 0){
    return true;
  }
  else {
    return false;
  }
}

})();
