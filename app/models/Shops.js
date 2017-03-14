const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShopsSchema = new Schema({
     status: String,
     data: {
        shop: {
            verified: Boolean,
            id: String,
            name: String,
            descriptoin: String
         },
         location: {
             type: { type: String },
             coordinates: { type: [Number], index: '2dsphere' },
             lat: Number,
             long: Number
         },
         address: {
             name: String,
             number: String,
             moo: String,
             road: String,
             soi: String,
             tambon: String,
             province: String,
             district: String,
             postcode: Number
         },
         picture: {
             picurl1: String,
             picurl2: String,
             picurl3: String
         },
         service: [{
             id: Number,
             type: String,
             name: String,
             price: Number
   }],
         timeoff: {
             openday: String,
             closeday: String,
             opentime: String,
             closetime: String
        },
         promo: String,
         opennow: Boolean,
         jobnow: Boolean,
         relationships: {
                owner: {
                id: String,
                name: String
            }
        }
    }
});

const Shops = mongoose.model('Shops', ShopsSchema);
module.exports = Shops
