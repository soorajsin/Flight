const mongoose = require("mongoose");


const mongoURL = "mongodb+srv://soorajsingh7505:sooraj231@crud-app.4oebebt.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(mongoURL).then(() => {
          console.log("Database Connected ....");
}).catch((error) => {
          console.log(error + "Database not connected ....");
})