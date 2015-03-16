describe("Product", function(){
    var Product;

    beforeEach(function(){
        module('app');

        inject(function(_Product_){
            Product = _Product_;
        });
    });

    it("Should create product item", function(){
        var product = new Product('1234','product name', 'product category', 123, 456);

        expect(product.id).toEqual('1234');
        expect(product.name).toEqual('product name');
        expect(product.category).toEqual('product category');
        expect(product.price).toEqual(123);
        expect(product.quantity).toEqual(456);
    });
});