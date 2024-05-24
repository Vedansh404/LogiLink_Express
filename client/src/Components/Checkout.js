import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderActions";
import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import Loading from "../Components/Loading";
import Success from "../Components/Success";
import Error from "../Components/Error";

// import StripeCheckout from "react-stripe-checkout";
// export default function Checkout({ subTotal }) {
//   const dispatch = useDispatch();
//   function tokenHander(token) {
//     console.log(token);
//     dispatch(placeOrder(token, subTotal));
//   }

//   return <div>

//   </div>;
// }

// export default Checkout;

// export default function Checkout({ subTotal }) {
//   const dispatch = useDispatch();
//   const [Razorpay] = useRazorpay();

//   const handlePayment = async (subTotal) => {
//     // const orders = await placeOrder({ subTotal }); //  Create order on your backend
//     // dispatch(order);
//     // const amount = 500;
//     // const currency = "INR";
//     // const receiptId = "asds";
//     // const response = await fetch(
//     //   "http://localhost:5000/api/orders/placeorder",
//     //   {
//     //     method: "POST",
//     //     body: JSON.stringify({
//     //       amount,
//     //       currency,
//     //       receipt: receiptId,
//     //     }),
//     //     headers: {
//     //       "Content-Type": "aaplication/json",
//     //     },
//     //   }
//     // );
//     // const order = await response.json();
//     const {
//       data: { order },
//     } = await axios.post("http://localhost:5000/api/orders/placeorder");
//     console.log(order);

//     const options = {
//       key: "rzp_test_L8EK5bNuRt8aix", // Enter the Key ID generated from the Dashboard
//       amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//       currency: order.currency,
//       name: "LogiLink Express",
//       description: "Test Transaction",
//       image: "https://example.com/your_logo",
//       order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
//       handler: function (response) {
//         alert(response.razorpay_payment_id);
//         alert(response.razorpay_order_id);
//         alert(response.razorpay_signature);
//       },
//       prefill: {
//         name: "Vedansh Rashinkar",
//         email: "youremail@example.com",
//         contact: "7694088687",
//       },
//       notes: {
//         address: "Razorpay Corporate Office",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     const rzp1 = new window.Razorpay(options);

//     rzp1.on("payment.failed", function (response) {
//       alert(response.error.code);
//       alert(response.error.description);
//       alert(response.error.source);
//       alert(response.error.step);
//       alert(response.error.reason);
//       alert(response.error.metadata.order_id);
//       alert(response.error.metadata.payment_id);
//     });

//     rzp1.open();
//   };
//   return (
//     <div className="btn mt-1 rounded-pill">
//       <button onClick={() => handlePayment(subTotal)}>Pay Now</button>
//     </div>
//   );
// }

export default function Checkout({ subTotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;

  const dispatch = useDispatch();
  function tokenHander(token) {
    console.log(token);
    dispatch(placeOrder(token, subTotal));
  }

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something Went Wrong" />}
      {success && <Success success="Your Ordered Placed Successfully" />}
      <StripeCheckout
        amount={Math.floor(subTotal * 100)}
        shippingAddress
        token={tokenHander}
        stripeKey="pk_test_51P0QjYSBJRzp8MMkj2nGO9jtXETqnW0aCGE7aeB7RbZrUkFLh4Pirh2oP7dbQFjxrNwpGJaIsv93gXdcKvQT9S1S00jtuZ2LQt"
        currency="INR"
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </div>
  );
}
