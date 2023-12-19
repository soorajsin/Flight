const express = require("express");
const app = express();
require("./DB/Connection");
const port = 4000 || process.env.PORT;



app.get("/", (req, res) => {
          res.send("Server Started....");
})



app.listen(port, () => {
          console.log(`Server Started port no ${port}`);
})