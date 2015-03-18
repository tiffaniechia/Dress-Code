angular.module('app').factory('VouchersService', ['$resource', function ($resource) {
    var vouchers;

    var getVouchers = function () {
        if(vouchers) {
            return vouchers;
        } else {
            vouchers = $resource('/api/vouchers').query();
            return vouchers
        }
    };

    return {
        getVouchers: getVouchers
    };

}]);