angular.module('app').controller('ProductCtrl', ['$scope', 'ProductService', function ($scope, ProductService) {

    $scope.products = [];
    $scope.productCategories = [];

    $scope.init = function () {
        getProductInformation();
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