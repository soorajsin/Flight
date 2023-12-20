const jwt = require("jsonwebtoken");
const keysecret = "hgvbgfhjkmnjuiojhgfdsertcvfgsazxdkj";
const userdb = require("../Schema/Struchure");


const authentication = async (req, res, next) => {
          try {
                    const token = await req.headers.authorization;
                    // console.log(token);

                    if (!token) {
                              res.status(400).json({
                                        msg: "token not found"
                              })
                    } else {
                              const verifyToken = await jwt.verify(token, keysecret);
                              // console.log(verifyToken);

                              if (!verifyToken) {
                                        res.status(400).json({
                                                  msg: "Not Verified Token"
                                        })
                              } else {
                                        // console.log(verifyToken);

                                        const getData = await userdb.findOne({
                                                  _id: verifyToken._id
                                        });


                                        if (!getData) {
                                                  res.status(400).json({
                                                            msg: "User Not Found!"
                                                  })
                                        } else {
                                                  // console.log(getData);

                                                  req.getData = getData;

                                                  next();
                                        }
                              }
                    }
          } catch (error) {
                    console.error(error);
                    res.status(500).json({
                              msg: "authentication Failed",
                              error: error.message
                    })
          }
}


module.exports = authentication;