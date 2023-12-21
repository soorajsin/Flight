const express = require("express");
const router = new express.Router();
const bcrypt = require("bcryptjs");
const userdb = require("../Schema/Struchure");
const authentication = require("../Middleware/Authentication");



router.post("/register", async (req, res) => {
          // console.log(req.body);

          try {
                    const {
                              name,
                              email,
                              password,
                              cpassword
                    } = req.body;

                    if (!name || !email || !password || !cpassword) {
                              return res.status(400).json({
                                        msg: "Please enter all fields"
                              });
                    } else {
                              const checkUser = await userdb.findOne({
                                        email
                              });


                              if (checkUser) {
                                        return res.status(400).json({
                                                  status: 202,
                                                  msg: "Email is already registered!"
                                        })
                              } else {
                                        const newForm = new userdb({
                                                  name,
                                                  email,
                                                  password,
                                                  cpassword
                                        });

                                        const saveData = await newForm.save();
                                        // console.log(saveData);

                                        res.status(201).json({
                                                  message: "User Successfully registered ... ",
                                                  status: 201,
                                                  data: saveData
                                        })
                              }
                    }
          } catch (error) {
                    res.status(501).json({
                              message: "Internal Server Error"
                    })
          }
});


router.post("/login", async (req, res) => {
          // console.log(req.body);

          const {
                    email,
                    password
          } = req.body;

          if (!email || !password) {
                    res.status(400).json({
                              msg: "PLease Enter your fields ..."
                    })
          } else {
                    const checkUser = await userdb.findOne({
                              email
                    });

                    if (!checkUser) {
                              return res.status(400).json({
                                        msg: "User not found",
                                        status: 202
                              })
                    } else {
                              // console.log("done");
                              const isMatch = await bcrypt.compare(password, checkUser.password);

                              if (!isMatch) {
                                        return res.status(400).json({
                                                  msg: "Password Not Matched",
                                                  status: 203
                                        })
                              } else {
                                        // console.log("done");

                                        //generate token
                                        const token = await checkUser.generateToken();
                                        // console.log(token);

                                        //generate cookie
                                        res.cookie("auth_token", token, {
                                                  httpOnly: true, // Ensures the cookie is only accessible on the server
                                                  secure: true, // Ensures the cookie is only sent over HTTPS (in a production environment)
                                                  maxAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds (adjust as needed)
                                        });


                                        const result = {
                                                  checkUser,
                                                  token
                                        };



                                        res.status(201).json({
                                                  msg: "login successfully done ...",
                                                  status: 201,
                                                  data: result
                                        })
                              }
                    }
          }
})



//validator || authentication
router.get("/validator", authentication, async (req, res) => {
          // console.log("done");

          if (req.getData) {
                    res.status(201).json({
                              msg: "User found",
                              status: 210,
                              getData: req.getData
                    })
          }
})


router.post("/signOut", authentication, async (req, res) => {
          // console.log(req.body);

          const user = req.getData;

          if (!user) {
                    res.status(400).json({
                              msg: "You are not login yet"
                    })
          } else {
                    // console.log(user);

                    const tokenToRemove = user.tokens.map((token) => token._id);

                    user.tokens = [];

                    const updatedUser = await user.save();

                    res.status(201).json({
                              msg: "Logout Successfully Done",
                              status: 201,
                              updatedUser
                    })
          }
});



router.post("/booking", authentication, async (req, res) => {
          // console.log(req.body);

          const {
                    sendData
          } = req.body;

          if (!sendData) {
                    res.status(400).json({
                              msg: "Please provide all the fields"
                    })
          } else {
                    const user = req.getData;

                    // console.log(user);
                    if (!user) {
                              res.status(400).json({
                                        msg: "User not found"
                              })
                    } else {
                              user.bookingTicket.push(sendData);

                              const saveData = await user.save();
                              // console.log(saveData);

                              res.status(201).json({
                                        msg: "Added data successfully done",
                                        status: 201,
                                        updatedUser: saveData
                              })
                    }
          }
});



router.delete("/deletebooking", authentication, async (req, res) => {
          // console.log(req.body);

          const {
                    bookingTicket
          } = req.body;

          if (!bookingTicket) {
                    res.status(400).json({
                              msg: "Booking ticket not found"
                    })
          } else {
                    const user = req.getData;

                    if (!user) {
                              res.status(400).json({
                                        msg: "User not found"
                              })
                    } else {
                              // console.log(user);

                              const entryField = user.bookingTicket.find((ticket) => ticket._id.toString() === bookingTicket);
                              // console.log(entryField);

                              if (!entryField) {
                                        res.status(400).json({
                                                  msg: "Entry field not found"
                                        })
                              } else {
                                        // console.log(entryField);

                                        user.bookingTicket = user.bookingTicket.filter((ticket) => ticket._id.toString() !== bookingTicket);
                                        // console.log(user);

                                        const updatedUser = await user.save();

                                        res.status(201).json({
                                                  msg: "Data Delete successfully done",
                                                  status: 210,
                                                  updatedUser
                                        })
                              }
                    }
          }
})


module.exports = router;