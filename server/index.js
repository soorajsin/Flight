const express = require("express");
const app = express();
require("./DB/Connection");
const cors = require("cors");
const router = require("./Router/Route");
const port = 4000 || process.env.PORT;



app.get("/", (req, res) => {
          res.send("Server Started....");
})



app.use(express.json());
app.use(cors());
app.use(router);



app.listen(port, () => {
          console.log(`Server Started port no ${port}`);
})