angular.module('app').controller('MainCtrl', ['$scope','$rootScope', function ($scope, $rootScope) {
   $rootScope.cart = $rootScope.cart? $rootScope.cart : [];

}]);
