const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create the User Schema.
const EaterySchema = new Schema({
  id: {
    type: String,
    required: false,
    unique: true
  },
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
  website: {
    type: String,
    required: false
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Eatery = mongoose.model("Eatery", EaterySchema);

export default Eatery;
