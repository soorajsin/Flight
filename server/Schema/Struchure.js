import mongoose from "mongoose";
import validator from "validatorjs";


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
})