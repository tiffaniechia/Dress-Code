angular.module('app').controller('VouchersCtrl', ['$scope', '$rootScope', 'VouchersService', function ($scope, $rootScope, VouchersService) {

    $scope.vouchersAvailable = [];
    $scope.vouchersApplied = [];
    $scope.newPrice = 0;

    $scope.init = function () {
        getAvailableVouchers();
    };

    $rootScope.$on('cart-modified', function(){
        $scope.newPrice = $scope.totalPrice;
        $scope.vouchersApplied = [];
        $scope.eligibleVouchers = [];
        getEligibleVouchers();
    });

    $scope.isVoucherApplied = function(voucher){
        return $scope.vouchersApplied.indexOf(voucher) > -1;
    };

    $scope.applyVoucher = function(voucher){
        $scope.vouchersApplied.push(voucher);
        updatePrice(voucher);
    };

    var updatePrice = function(voucher){
        $scope.newPrice = $scope.newPrice - voucher.discount;
    };

    var metSpendingRequirements = function (voucher) {
        return $scope.totalPrice > voucher.spendingRequirements;
    };

    var metCategoryRequirements = function (voucher) {
        return _.find($rootScope.cart, function (item) {
            return item.category.indexOf(voucher.categoryRequirements) > -1;
        });
    };

    var getEligibleVouchers = function () {
        $scope.eligibleVouchers = _.reduce($scope.vouchersAvailable, function (result, voucher) {
            if (metSpendingRequirements(voucher)) {
                if (voucher.categoryRequirements.length > 0) {
                    if (metCategoryRequirements(voucher)) {
                        result.push(voucher);
                        return result;
                    }
                    return result;
                }
                result.push(voucher);
                console.log($rootScope.cart);
                console.log();
                return result;
            }
            return result;
        }, []);
    };

    var getAvailableVouchers = function () {
        VouchersService.getVouchers().$promise.then(function (successData) {
            $scope.vouchersAvailable = successData;
        });
    };

}]);