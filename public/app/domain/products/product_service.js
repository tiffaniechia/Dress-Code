angular.module('app').factory('ProductService', ['$resource', function ($resource) {

    var getProducts = function(){
        return $resource('/api/products').query();
    };

    return {
        getProducts: getProducts
    }
}]);