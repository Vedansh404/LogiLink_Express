const express = require("express");
const db = require("./db");
const Item = require("./models/itemModel");
const { Model } = require("mongoose");
// const cors = require("cors");
const razorpay = require("razorpay");
const instance = new razorpay({
  key_id: "rzp_test_L8EK5bNuRt8aix",
  key_secret: "d4qr4ctlyX7ygNmpEBejzLku",
});
const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cors());
const itemsRoute = require("./routes/itemsRoute");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");

app.use("/api/items/", itemsRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", ordersRoute);
app.get("/", (req, res) => {
  res.send("Server Working 🔥" + port);
});

const port = process.env.PORT || 5000;

app.listen(port, () => "Server running on port 🔥");

// app.get("/getAllItems", async (req, res) => {
// Item.find()
//   .then((docs) => {
//     // Process retrieved documents here
//     res.send(docs);
//   })
//   .catch((err) => {
//     // Handle error here
//     console.log(err);
//   });
// });
