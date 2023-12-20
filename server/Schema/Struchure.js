const mongoose = require("mongoose");
const validator = require("validatorjs");
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
          name: {
                    type: String,
                    required: true,
          },
          email: {
                    type: String,
                    required: true,
                    unique: true,
                    validator(value) {
                              if (!validator.isEmail(value)) {
                                        throw new Error("Invalid Email");
                              }
                    }
          },
          password: {
                    type: String,
                    required: true,
                    minlength: 6,
          },
          cpassword: {
                    type: String,
                    required: true,
                    minlength: 6,
          },
          tokens: [{
                    token: {
                              type: String,
                              required: true
                    }
          }]
});


userSchema.pre('save', async function (next) {
          if (this.isModified("password")) {
                    this.password = await bcrypt.hash(this.password, 10);
                    this.cpassword = await bcrypt.hash(this.cpassword, 10);
          }
          next();
})


const userdb = mongoose.model("users", userSchema);
module.exports = userdb;