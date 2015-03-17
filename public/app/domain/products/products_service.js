angular.module('app').factory('ProductsService', ['$resource', function ($resource) {

    var getProducts = function(){
        return $resource('/api/products').query();
    };

    return {
        getProducts: getProducts
    };

}]);