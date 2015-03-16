describe("ProductService", function () {
    var ProductService, mockhttpBackend;

    beforeEach(function () {
        module('app');

        inject(function (_$httpBackend_, _ProductService_) {
            ProductService = _ProductService_;
            mockhttpBackend = _$httpBackend_;
        });
    });

    it("Should get product list from the database", function () {

        var successResponse = [
            {
                "_id": "5505c18dd93a34f85cd34776",
                "name": "Almond Toe Court Shoes, Patent Black",
                "category": "Women’s Footwear",
                "price": 99,
                "quantity": 5,
                "__v": 0
            },
            {
                "_id": "5505c18dd93a34f85cd34777",
                "name": "Suede Shoes, Blue",
                "category": "Women’s Footwear",
                "price": 42,
                "quantity": 4,
                "__v": 0
            },
            {
                "_id": "5505c18dd93a34f85cd34778",
                "name": "Leather Driver Saddle Loafers, Tan",
                "category": "Men’s Footwear",
                "price": 34,
                "quantity": 12,
                "__v": 0
            }
        ];

        mockhttpBackend.whenGET('/api/products').respond(successResponse);

        var result = ProductService.query();

        mockhttpBackend.flush();

        expect(JSON.stringify(result)).toEqual(JSON.stringify(successResponse));

    });
});