angular.module('app').controller('ProductCtrl', ['$scope', 'ProductService', '$rootScope', function ($scope, ProductService, $rootScope) {

    $scope.products = [];
    $scope.productCategories = [];

    $scope.init = function () {
        getProductInformation();
    };

    $scope.addItem = function(product){
        $rootScope.cart.push(product);
        product.quantity = product.quantity - 1;
    };

    $scope.isInCart = function(product){
        return $rootScope.cart.indexOf(product) > -1;
    };

    $scope.removeItem = function(product){

    };

    var getProductInformation = function () {
        ProductService.getProducts().$promise.then(function (successData) {
            $scope.products = successData;
            $scope.productCategories = _.reduce(successData, function (result, product) {
                if (result.indexOf(product.category) == -1) {
                    result.push(product.category)
                }
                return result;
            }, []);
        });
    }

}]);