angular.module('app').factory('ProductsService', ['$resource', function ($resource) {
    var products;

    var getProducts = function(){
        if(products){
            return products;
        } else {
            products = $resource('/api/products').query();
            return products;
        }
    };

    return {
        getProducts: getProducts
    };

}]);