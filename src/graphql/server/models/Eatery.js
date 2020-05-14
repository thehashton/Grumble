const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString;
};

const EaterySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  postCode: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: false
  },
  businessHours: {
    type: String,
    required: false
  },
  foodType: {
    type: String,
    required: true
  },
  veganFriendly: {
    type: Boolean,
    required: false
  },
  vegetarianFriendly: {
    type: Boolean,
    required: false
  },
  halal: {
    type: Boolean,
    required: false
  },
  kosher: {
    type: Boolean,
    required: false
  },
  dogFriendly: {
    type: Boolean,
    required: false
  },
  childFriendly: {
    type: Boolean,
    required: false
  },
  ethical: {
    type: Boolean,
    required: false
  },
  alcohol: {
    type:Boolean,
    required: false
  },
  price: {
    type: String,
    required: false
  },
  seatingSpace: {
    type: String,
    required: false
  },
  cashOnly: {
    type: Boolean,
    required: false
  },
  toiletCleanliness: {
    type: Boolean,
    required: false
  },
  website: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("Eatery", EaterySchema);
