angular.module('app').controller('PriceCalculatorCtrl',['$scope', '$rootScope', function($scope, $rootScope){

    $rootScope.$on('cart-modified',function(event,data){
        updatePrice();
    });

    var updatePrice =  function(){
        $scope.totalPrice = _.reduce($scope.cart, function(total,item){
            return total + item.price;
        },0);
    };

}]);