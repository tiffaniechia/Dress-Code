describe("VouchersService", function () {
    var VouchersService, mockhttpBackend, successResponse;

    beforeEach(function () {
        module('app');

        inject(function (_$httpBackend_, _VouchersService_ ) {
            VouchersService = _VouchersService_;
            mockhttpBackend = _$httpBackend_;
        });
        successResponse = [{
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

    it("Should get vouchers list from the database", function () {
        mockhttpBackend.whenGET('/api/vouchers').respond(successResponse);
        var result = VouchersService.getVouchers();
        mockhttpBackend.flush();

        expect(JSON.stringify(result)).toEqual(JSON.stringify(successResponse));
    });
});