const { Schema, model } = require("mongoose");
const crypto = require("crypto");

const UserSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    note: {
      type: String,
      trim: true,
      required: true
     
    },
   
    
  },
  { timestamps: true }
);


module.exports = model("User", UserSchema);
