angular.module('app').controller('MainCtrl', ['$scope','$rootScope', function ($scope, $rootScope) {

   $rootScope.cart = $rootScope.cart ? $rootScope.cart : [];

   $scope.page = 'Shopping Cart';

   $scope.switchPage = function(){
      $scope.page = ( $scope.page == 'Shopping Cart') ? 'Product List' : 'Shopping Cart';
   }

}]);
