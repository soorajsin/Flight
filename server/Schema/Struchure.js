const mongoose = require("mongoose");
const validator = require("validatorjs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keysecret = "hgvbgfhjkmnjuiojhgfdsertcvfgsazxdkj";


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
          }],
          bookingTicket: [{
                    from: {
                              type: String
                    },
                    to: {
                              type: String
                    },
                    date: {
                              type: String
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


userSchema.methods.generateToken = async function () {
          try {
                    const token = jwt.sign({
                              _id: this._id
                    }, keysecret);
                    this.tokens = this.tokens.concat({
                              token
                    })

                    await this.save();
                    return token;
          } catch (error) {
                    throw new Error("Failed to generate token");
          }
}


const userdb = mongoose.model("users", userSchema);
module.exports = userdb;