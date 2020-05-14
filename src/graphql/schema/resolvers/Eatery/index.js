// The Eatery schema
const Eatery = require("../../../server/models/Eatery");

module.exports = {
  Query: {
    eatery: (root, args) => {
      return new Promise((resolve, reject) => {
        Eatery.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    eateries: () => {
      return new Promise((resolve, reject) => {
        Eatery.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    },
    getFoodType: (_, args) => {
      const { foodType } = args
      return new Promise((resolve, reject) => {
        return Eatery.find({ foodType })
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res)
          })
      })
    },
  },
  Mutation: {
    addEatery: (root, { name, description, address, city, postCode, phoneNumber, businessHours, foodType, veganFriendly, vegetarianFriendly, halal, kosher, dogFriendly, childFriendly, ethical, alcohol, price, website }) => {
      const newEatery = new Eatery({ name, description, address, city, postCode, phoneNumber, businessHours, foodType, veganFriendly, vegetarianFriendly, halal, kosher, dogFriendly, childFriendly, ethical, alcohol, price, website });

      return new Promise((resolve, reject) => {
        newEatery.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editEatery: (root, { id, name, description, address, city, postCode, phoneNumber, businessHours, foodType, veganFriendly, vegetarianFriendly, halal, kosher, dogFriendly, childFriendly, ethical, alcohol, price, website }) => {
      return new Promise((resolve, reject) => {
        Eatery.findOneAndUpdate(
          { id },
          { $set: { name, description, address, city, postCode, phoneNumber, businessHours, foodType, veganFriendly, vegetarianFriendly, halal, kosher, dogFriendly, childFriendly, ethical, alcohol, price, website } }
        ).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    deleteEatery: (root, args) => {
      return new Promise((resolve, reject) => {
        Eatery.findOneAndRemove(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
  }
};
