const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//JSON WEB TOKEN MODULE
const jwt = require("jsonwebtoken");

//DB DOCUMENTS SCHEMA
const UserSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  gender: { type: String },
  email: { type: String, required: true, lowercase: true },
  phone: { type: Number, required: true },
  age: { type: Number, required: true },
  role: { type: String },img:{type: String, required: true},
  password: { type: String, required: true },
  cpassword: { type: String, required: true },
  apoinment:[{
    patients_name:{type:String,required:true},
    patients_age:{type:Number,required:true},
    visting_reason:{type:String},
  }],
  img: { type: String, },
  date: { type: Date, default: Date.now },
  tokens: [{ token: { type: String, required: true } }],
});

//HASHING PASSWORD USING MIDDLEWARE

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    this.cpassword = await bcrypt.hash(this.cpassword, 10);
  }
  next();
});

//GENERATING AUTH TOKEN
UserSchema.methods.generateAuthToken = async function () {
  try {
    // console.log("jwt code");
    const token = jwt.sign(
      {
        _id: this._id,
      },
      process.env.AUTH_KEY
    );

    //SAVING TOKEN IN DOCUMENT FIELD
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    // console.log(token);
    return token;
  } catch (error) {
    console.log(error);
  }
};

//INITIALIZATION DB MODAL
const Doctor = mongoose.model("Doctors", UserSchema);
module.exports = Doctor;
