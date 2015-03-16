angular.module('app').controller('ProductCtrl', ['$scope', 'ProductService', '$rootScope', function ($scope, ProductService, $rootScope) {

    $scope.init = function () {

        $scope.products = [];
        $scope.productCategories = [];

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

    };
}]);