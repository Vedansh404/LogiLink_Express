const express = require("express");
const Razorpay = require("razorpay");
const { instance } = require("../server");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51P0QjYSBJRzp8MMkdNTv8uxAb3me57TkbRM7R73CUasQr7qJHJA1l20ul09U7a3W1cBcQKkPWEmijm3BKpr3lRem00eEMyfEsX"
);
const Order = require("../models/orderModel");

router.post("/placeorder", async (req, res) => {
  const { token, subTotal, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.paymentIntents.create(
      {
        amount: subTotal * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      const neworder = new Order({
        name: currentUser.name,
        email: currentUser.email,
        userid: currentUser._id,
        orderItems: cartItems,
        orderAmount: subTotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          pincode: token.card.address_zip,
        },
        // transactionId: token.source.id,
      });
      neworder.save();
      res.send("Order Placed Successfully");
    } else {
      res.send("Payment Failed");
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Something Went Wrong " + error });
  }
});

router.post("/getuserorders", async (req, res) => {
  const { userid } = req.body;
  try {
    const orders = await Order.find({ userid: userid });
    res.send(orders);
  } catch (error) {
    return res.status(400).json({ message: "Something Went Wrong " + error });
  }
});
module.exports = router;

// router.post("/placeorder", async (req, res) => {
//   const { subTotal, currentUser, cartItems } = req.body;
//   try {
//     const razorpay = new Razorpay({
//       key_id: "rzp_test_L8EK5bNuRt8aix",
//       key_secret: "d4qr4ctlyX7ygNmpEBejzLku",
//     });

//     // const options = req.body;
//     const order = await razorpay.orders.create(req.body);

//     if (order) {
//       res.json(order);
//       res.send("Payement Done");
//     } else {
//       res.send("Payment Failed");
//     }
//   } catch (error) {
//     // console.log(error);
//     return res.status(400).json({ message: "Something Went Wrong " + error });
//   }
// });
