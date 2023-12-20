const jwt = require("jsonwebtoken");
const keysecret = "hgvbgfhjkmnjuiojhgfdsertcvfgsazxdkj";


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
                                        console.log(verifyToken);
                              }
                    }
          } catch (error) {
                    res.status(500).json({
                              msg: "authentication Failed"
                    })
          }
}


module.exports = authentication;