// The Eatery schema.
import Eatery from "../../../server/models/Eatery";

export default {
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
    }
  },
  Mutation: {
    addEatery: (root, { id, name, address, foodType, email, telephone }) => {
      const newEatery = new Eatery({ id, name, address, foodType, email, telephone });

      return new Promise((resolve, reject) => {
        newEatery.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editEatery: (root, { id, name, address, foodType, email, telephone }) => {
      return new Promise((resolve, reject) => {
        Eatery.findOneAndUpdate({ id }, { $set: { name, address, foodType, email, telephone } }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteEatery: (root, args) => {
      return new Promise((resolve, reject) => {
        Eatery.findOneAndRemove(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};