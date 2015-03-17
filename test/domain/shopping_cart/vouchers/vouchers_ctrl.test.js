describe("VouchersCtrl", function () {
    var VouchersCtrl, scope, mockVouchersService, responseData, mockDeferredVouchers, $q, $rootScope;

    beforeEach(function () {
        module('app');

        inject(function ($controller, _$q_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $q = _$q_;
            scope = $rootScope.$new();
            mockVouchersService = {
                getVouchers: function () {
                    mockDeferredVouchers = $q.defer();
                    return {$promise: mockDeferredVouchers.promise};
                }
            };

            spyOn(mockVouchersService, 'getVouchers').and.callThrough();
            $controller('VouchersCtrl', {$scope: scope, VouchersService: mockVouchersService});
        });

        responseData = [{
            "_id": "55078329394c127f68b5dcff",
            "discount": 15,
            "spendingRequirements": 75,
            "__v": 0,
            "categoryRequirements": ["Footwear"]
        }, {
            "_id": "55078329394c127f68b5dcfe",
            "discount": 10,
            "spendingRequirements": 50,
            "__v": 0,
            "categoryRequirements": []
        }, {
            "_id": "55078329394c127f68b5dcfd",
            "discount": 5,
            "spendingRequirements": 0,
            "__v": 0,
            "categoryRequirements": []
        }]
    });

    describe("#init", function () {
        beforeEach(function () {
            scope.init();
            mockDeferredVouchers.resolve(responseData);
            $rootScope.$apply();
        });

        it("should return list of available vouchers", function () {
            expect(scope.vouchersAvailable).toEqual(responseData);
        });
    });

    describe("#isVoucherApplied", function () {
        beforeEach(function () {
            scope.vouchersApplied = ['voucher1', 'voucher2'];
        });

        it("should return false if voucher has not been applied", function () {
            var result = scope.isVoucherApplied('voucher3');
            expect(result).toBeFalsy();
        });

        it("should return true if voucher has been applied", function () {
            var result = scope.isVoucherApplied('voucher2');
            expect(result).toBeTruthy();
        });
    });

    describe("#applyVoucher", function () {
        beforeEach(function () {
            scope.vouchersApplied = [];
        });

        it("should add voucher to list of vouchers applied", function () {
            scope.applyVoucher('voucher1');
            expect(scope.vouchersApplied.length).toEqual(1);
        });

        it("should apply discount changes to prices", function () {
            scope.newPrice = 10;
            scope.applyVoucher({discount: 2});
            expect(scope.newPrice).toEqual(8);
        });
    });

    describe("#getEligibleVouchers", function () {
        beforeEach(function () {
            $rootScope.cart = [
                {category: "Women's Footwear"},
                {category: "Women's Footwear"},
                {category: "Women's Casualwear"}];

        });

        it("should filter eligibility of available vouchers according total spending requirements of current cart", function () {
            scope.totalPrice = 2;

            scope.vouchersAvailable = [
                {spendingRequirements: 1, categoryRequirements: [""]},
                {spendingRequirements: 100, categoryRequirements: [""]},
                {spendingRequirements: 1000, categoryRequirements: [""]}
            ];

            scope.getEligibleVouchers();

            expect(scope.eligibleVouchers.length).toEqual(1);
        });

        it("should filter according to category requirements of current cart", function () {
            scope.totalPrice = 100;

            scope.vouchersAvailable = [
                {spendingRequirements: 1, categoryRequirements: ["Others"]},
                {spendingRequirements: 1, categoryRequirements: ["Others"]},
                {spendingRequirements: 1, categoryRequirements: ["Footwear"]}
            ];

            scope.getEligibleVouchers();

            expect(scope.eligibleVouchers.length).toEqual(1);
        });
    });

});