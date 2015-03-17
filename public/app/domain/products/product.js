angular.module('app').factory('Product',[function(){

    function Product(id, name, category, price, quantity){
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
    }

    return Product;

}]);