angular.module('app').factory('VouchersService', ['$resource', function ($resource) {

    var getVouchers = function () {
        return $resource('/api/vouchers').query();
    };

    return {
        getVouchers: getVouchers
    };

}]);