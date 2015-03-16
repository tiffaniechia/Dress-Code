angular.module('app').factory('ProductService', ['$resource', function ($resource) {
    return $resource('/api/products');
}]);