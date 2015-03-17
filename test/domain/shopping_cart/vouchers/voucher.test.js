describe("Voucher", function () {
    var Voucher;

    beforeEach(function () {
        module('app');

        inject(function (_Voucher_) {
            Voucher = _Voucher_;
        });
    });

    it("Should create voucher with right fields", function () {
        var voucher = new Voucher(12, 34, ['category requirement 1'], 'description');

        expect(voucher.discount).toEqual(12);
        expect(voucher.spendingRequirements).toEqual(34);
        expect(voucher.categoryRequirements).toEqual(['category requirement 1']);
        expect(voucher.description).toEqual('description');
    });
});