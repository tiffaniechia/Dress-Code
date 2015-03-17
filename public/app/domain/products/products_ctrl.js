angular.module('app').controller('ProductsCtrl', ['$scope', 'ProductsService', function ($scope, ProductsService) {

    $scope.init = function () {
        $scope.products = [];
        $scope.productCategories = [];
        getProductInformation();
    };

    var getProductInformation = function () {
        ProductsService.getProducts().$promise.then(function (successData) {
            $scope.products = successData;
        });
    };

}]);