var mongoose = require('mongoose');

var voucherSchema = mongoose.Schema({
    discount: Number,
    spendingRequirements: Number,
    categoryRequirements: [String]
});

var Voucher = mongoose.model('Voucher', voucherSchema);

function createDefaultProducts(env) {
    if (env == 'development') {
        Voucher.find({}).exec(function (err, collection) {
            if (collection.length === 0) {
                Voucher.create({
                    discount: 5,
                    spendingRequirements: 0,
                    categoryRequirements: []
                });
                Voucher.create({
                    discount: 10,
                    spendingRequirements: 50,
                    categoryRequirements: []
                });
                Voucher.create({
                    discount: 15,
                    spendingRequirements: 75,
                    categoryRequirements: ['Footwear']
                });
            }
        })
    }
}

exports.createDefaultProducts = createDefaultProducts;