angular.module('app').factory('Voucher',[function(){

    function Voucher(discount, spendingRequirements , categoryRequirements, description){
        this.discount = discount;
        this.spendingRequirements = spendingRequirements;
        this.categoryRequirements = categoryRequirements;
        this.description = description;
    }

    return Voucher;

}]);