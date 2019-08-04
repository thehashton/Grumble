import mongoose from "mongoose";

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
  address: {
    type: String,
    required: true
  },
  foodType: {
    type: String,
    required: true
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Eatery = mongoose.model("Eatery", EaterySchema);

export default Eatery;
