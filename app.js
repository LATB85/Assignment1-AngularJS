(function(){
'use strict'

angular.module ('LunchCheck', [])
  .controller ('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController($scope, $filter) {
  $scope.messageText = "";

  $scope.checkItems = function () {
    var inputStr = $scope.inputVal;
      console.log($scope.inputVal);
    if (inputStr === '' || inputStr == null) {
      $scope.messageText = "Please enter one or more menu items";
      }
    else {
      var inputArr = inputStr.split(',');
      var count = 0;
      for (var i = 0; i < inputArr.length; i++){
        if ( inputArr[i].trim() != ''){
          console.log('input is :' + inputArr[i]);
          count  += 1;
        }
      }
      if (count == 0){
        $scope.messageText = "Please enter one or more menu items";
      } else if (count <= 3) {
        $scope.messageText = "thanks!! and enjoy your lunch!";
      } else {
        $scope.messageText = "Too many items!!, please enter a maximum of 3!!!";
      }

      console.log(inputArr.length);
    }

  };
}
})();
