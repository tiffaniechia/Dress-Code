describe("ProductCtrl", function () {
    var ProductCtrl, scope, mockProductService, responseData, mockDeferredProducts, $q, $rootScope;

    beforeEach(function () {
        module('app');

        inject(function ($controller, _$q_, _$rootScope_) {

            $rootScope = _$rootScope_;

            $q = _$q_;
            scope = $rootScope.$new();

            mockProductService = {
                getProducts: function () {
                    mockDeferredProducts = $q.defer();
                    return {$promise: mockDeferredProducts.promise};
                }
            };

            spyOn(mockProductService, 'getProducts').and.callThrough();

            $controller('ProductCtrl', {$scope: scope, ProductService: mockProductService});
        });


        responseData = [
            {id: '1', name: 'product a', category: 'a', price: 12, quantity: 34},
            {id: '2', name: 'product b', category: 'b', price: 56, quantity: 78},
            {id: '3', name: 'product c', category: 'c', price: 910, quantity: 1112},
            {id: '4', name: 'product d', category: 'c', price: 1314, quantity: 1516}
        ];
    });

    describe("#init", function () {
        beforeEach(function () {
            scope.init();
            mockDeferredProducts.resolve(responseData);

            $rootScope.$apply();
        });

        it("should load product list", function () {
            expect(scope.products).toEqual(responseData);
        });

        it("should load product categories without duplicates", function () {
            expect(scope.productCategories).toEqual(['a', 'b', 'c']);
        });
    });


});