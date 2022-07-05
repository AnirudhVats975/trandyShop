const { model } = require("mongoose");

const mongoose = require(mongoose);

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    desc: {
      type: String,
      required: true,
  
    },

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

module.exports = mongoose.model(Product, ProductSchema);
