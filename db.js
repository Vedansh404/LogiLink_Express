const mongoose = require("mongoose");
// var mongoURL =
//   "mongodb+srv://vedansh:vedansh$123%5B%5D@cluster0.2tbljdf.mongodb.net/Logistics-Services";
var mongoURL = "mongodb://0.0.0.0/Logistics-Services";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });
// mongoose.connect(mongoURL);

var db = mongoose.connection;
db.on("connected", () => {
  console.log("MongoDB Connection Successfull");
});
db.on("error", () => {
  console.log("MongoDB Connection Failed");
});

module.exports = mongoose;
