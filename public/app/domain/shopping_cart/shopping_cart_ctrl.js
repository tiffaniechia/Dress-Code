angular.module('app').controller('ShoppingCartCtrl',['$scope', '$rootScope', function($scope, $rootScope){

    $scope.addItem = function(product){
        $rootScope.cart.push(product);
        product.quantity = product.quantity - 1;
        $rootScope.$broadcast('cart-modified');
    };

    $scope.isInCart = function(product){
        return $rootScope.cart.indexOf(product) > -1;
    };

    $scope.removeItem = function(product){
        var index =  $rootScope.cart.indexOf(product);
        $rootScope.cart.splice(index,1);
        product.quantity = product.quantity + 1;
        $rootScope.$broadcast('cart-modified');
    };

    $rootScope.$on('cart-modified',function(){
        updatePrice();
    });

    var updatePrice =  function(){
        $scope.totalPrice = _.reduce($rootScope.cart, function(total,item){
            return total + item.price;
        },0);
    };

}]);