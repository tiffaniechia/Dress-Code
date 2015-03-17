var mongoose = require('mongoose');

var voucherSchema = mongoose.Schema({
    discount: Number,
    spendingRequirements: Number,
    categoryRequirements: [String],
    description: String
});

var Voucher = mongoose.model('Voucher', voucherSchema);

function createDefaultProducts(env) {
        Voucher.find({}).exec(function (err, collection) {
            if (collection.length === 0) {
                Voucher.create({
                    discount: 5,
                    spendingRequirements: 0,
                    categoryRequirements: [],
                    description: "£5.00 off your order"
                });
                Voucher.create({
                    discount: 10,
                    spendingRequirements: 50,
                    categoryRequirements: [],
                    description: "£10.00 off when you spend over £50.00"
                });
                Voucher.create({
                    discount: 15,
                    spendingRequirements: 75,
                    categoryRequirements: ['Footwear'],
                    description: "£15.00 off when you have bought at least one footwear item and spent over £75.00"
                });
            }
        })
}

exports.createDefaultProducts = createDefaultProducts;