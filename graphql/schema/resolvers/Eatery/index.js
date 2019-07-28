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
  },
  Mutation: {
    addEatery: (root, { name, address, foodType }) => {
      const newEatery = new Eatery({ name, address, foodType });

      return new Promise((resolve, reject) => {
        newEatery.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editEatery: (root, { id, name, address, foodType }) => {
      return new Promise((resolve, reject) => {
        Eatery.findOneAndUpdate(
          { id },
          { $set: { name, address, foodType } }
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
  }
};
