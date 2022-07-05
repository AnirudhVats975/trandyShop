const { model } = require("mongoose");

const mongoose = require(mongoose);

const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    Products: [
      {
        productId: {
          type: String,
        },

        quantity: {
            type: Number,
            default : 1
        },
      },
    ],

    img: {
      type: String,
      required: true,
    },

    categories: {
      type: Array,
      default: false,
    },

    size: {
      type: Boolean,
    },

    color: {
      type: Boolean,
    },

    price: {
      type: Number,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(Cart, CartSchemas);
