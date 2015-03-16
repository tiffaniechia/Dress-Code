var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    quantity: Number
});

var Product = mongoose.model('Product', productSchema);

function createDefaultProducts(env) {
    if (env == 'development') {
        Product.find({}).exec(function (err, collection) {
            if (collection.length === 0) {
                Product.create({
                    name: 'Almond Toe Court Shoes, Patent Black',
                    category: 'Women’s Footwear',
                    price: 99.00,
                    quantity: 5
                });
                Product.create({
                    name: 'Suede Shoes, Blue',
                    category: 'Women’s Footwear',
                    price: 42.00,
                    quantity: 4});
                Product.create({
                    name: 'Leather Driver Saddle Loafers, Tan',
                    category: 'Men’s Footwear',
                    price: 34.00,
                    quantity: 12
                });
                Product.create({
                    name: 'Flip Flops, Red',
                    category: 'Men’s Footwear',
                    price: 19.00,
                    quantity: 6});
                Product.create({
                    name: 'Flip Flops, Blue',
                    category: 'Men’s Footwear',
                    price: 19.00,
                    quantity: 0});
                Product.create({
                    name: 'Gold Button Cardigan, Black',
                    category: 'Women’s Casualwear',
                    price: 167.00,
                    quantity: 6
                });
                Product.create({
                    name: 'Cotton Shorts, Medium Red',
                    category: 'Women’s Casualwear',
                    price: 30.00,
                    quantity: 5
                });
                Product.create({
                    name: 'Fine Stripe Short Sleeve Shirt, Grey',
                    category: 'Men’s Casualwear',
                    price: 49.00,
                    quantity: 9
                });
                Product.create({
                    name: 'Fine Stripe Short Sleeve Shirt, Green',
                    category: 'Men’s Casualwear',
                    price: 39.00,
                    quantity: 3
                });
                Product.create({
                    name: 'Sharkskin Waistcoat, Charcoal',
                    category: 'Men’s Formalwear',
                    price: 75.00,
                    quantity: 2
                });
                Product.create({
                    name: 'Lightweight Patch Pocket Blazer, Deer',
                    category: 'Men’s Formalwear',
                    price: 175.00,
                    quantity: 1
                });
                Product.create({
                    name: 'Bird Print Dress, Black',
                    category: 'Women’s Formalwear',
                    price: 270.00,
                    quantity: 10
                });
                Product.create({
                    name: 'Mid Twist Cut-Out Dress, Pink',
                    category: 'Women’s Formalwear',
                    price: 540.00,
                    quantity: 5
                });
            }
        })
    }
}

exports.createDefaultProducts = createDefaultProducts;