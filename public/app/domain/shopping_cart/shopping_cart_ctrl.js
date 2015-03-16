angular.module('app').controller('ShoppingCartCtrl',['$scope', '$rootScope', function($scope, $rootScope){

    $scope.totalPrice = 0;

    $scope.addItem = function(product){
        $rootScope.cart.push(product);
        product.quantity = product.quantity - 1;
        updateTotalPrice();
    };

    $scope.isInCart = function(product){
        return $rootScope.cart.indexOf(product) > -1;
    };

    $scope.removeItem = function(product){
        var index =  $rootScope.cart.indexOf(product);
        $rootScope.cart.splice(index,1);
        product.quantity = product.quantity + 1;

        updateTotalPrice();
    };

    var updateTotalPrice = function(){
        $scope.totalPrice = _.reduce($scope.cart, function(total,item){
            return total + item.price;

        },0);
    };

}]);