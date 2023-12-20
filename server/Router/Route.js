const express = require("express");
const router = new express.Router();
const userdb = require("../Schema/Struchure");



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


module.exports = router;