describe("ShoppingCartCtrl", function () {
    var ShoppingCartCtrl, scope, $rootScope, products;

    beforeEach(function () {
        module('app');

        inject(function ($controller, _$rootScope_) {
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();

            $controller('ShoppingCartCtrl', {$scope: scope});

            $rootScope.cart = [];
        });
        spyOn($rootScope, '$broadcast');
        spyOn($rootScope, '$on').and.returnValue('cart-modified');

        products = [{id: '1', name: 'product a', category: 'a', price: 12, quantity: 34},
            {id: '2', name: 'product b', category: 'b', price: 56, quantity: 78},
            {id: '3', name: 'product c', category: 'c', price: 910, quantity: 1112},
            {id: '4', name: 'product d', category: 'c', price: 1314, quantity: 1516}];

    });

    describe("#addItem", function () {
        beforeEach(function () {
            scope.addItem({quantity: 4});
        });

        it("should load product list", function () {
            expect($rootScope.cart.length).toEqual(1);
        });

        it("should broadcast the event with the message that cart has been modified", function () {
            expect($rootScope.$broadcast).toHaveBeenCalledWith('cart-modified');
        });

        it("should reduce given quantity by 1", function () {
            var product = {quantity: 5};
            scope.addItem(product);
            expect(product.quantity).toEqual(4);
        });
    });

    describe("#removeItem", function () {
        beforeEach(function () {

            $rootScope.cart = products;

            scope.removeItem({id: '1', name: 'product a', category: 'a', price: 12, quantity: 34});
        });

        it("should remove item from list", function () {
            expect($rootScope.cart.length).toEqual(3);
        });

        it("should broad cart change event with message", function () {
            expect($rootScope.$broadcast).toHaveBeenCalledWith('cart-modified');
        });

        it("should replace quantity", function(){
            var product = {quantity: 5};
            scope.removeItem(product);

            expect(product.quantity).toEqual(6);
        });
    });

    describe("#isInCart", function(){
        it("should return false if not in cart", function(){
            $rootScope.cart = ['a','b'];
            var result = scope.isInCart('c');

            expect(result).toBeFalsy();
        });

        it("should return true if  in cart", function(){
            $rootScope.cart = ['a','b'];
            var result = scope.isInCart('b');

            expect(result).toBeTruthy();
        });
    });

});