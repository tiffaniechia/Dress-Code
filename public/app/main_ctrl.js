angular.module('app').controller('MainCtrl', ['$scope','$rootScope', function ($scope, $rootScope) {
   $rootScope.cart = $rootScope.cart? $rootScope.cart : [];
   $scope.page = 'shopping cart';
   $scope.switchPage = function(){
      $scope.page = ( $scope.page == 'shopping cart')? 'products' : 'shopping cart';
   }

}]);
