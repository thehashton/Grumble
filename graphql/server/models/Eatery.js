const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const EaterySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  foodType: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Eatery", EaterySchema);
