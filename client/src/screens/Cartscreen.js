import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartActions";
import Checkout from "../Components/Checkout";

// import { loadStripe } from "@stripe/stripe-js";

function Cartscreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  const dispatch = useDispatch();
  var subTotal = cartItems.reduce((x, item) => x + item.price, 0);
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ fontSize: "40px" }}>My Cart</h2>
          {cartItems.map((item, index) => {
            return (
              <div key={index} className="flex-container">
                <div className="text-start m-1 w-100">
                  <h1 style={{ fontSize: "30px" }}>{item.name}</h1>
                  <h1 style={{ fontSize: "20px" }}>
                    Amount: {Math.ceil(item.price)}
                  </h1>
                  <h1 style={{ fontSize: "20px" }}>
                    Weight: {item.weight} Gms
                  </h1>
                  <h1 style={{ display: "inline  ", fontSize: "20px" }}>
                    Quantity:{" "}
                  </h1>
                  {/* <i
                    className="fa-solid fa-plus p-1"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(addToCart(item, item.quantity + 1, item.weight));
                    }}
                  ></i> */}
                  <b>{item.quantity}</b>

                  <hr />
                </div>

                {/* <div></div>image k liye */}

                <div className="m-1 w-100 mt-5">
                  <i
                    className="fa-solid fa-trash p-1"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-4 text-end">
          <h2 style={{ fontSize: "45px" }}>
            {" "}
            SubTotal: {Math.round(subTotal)}₹
          </h2>
          {/* <button className="btn">CHECKOUT</button> */}
          <Checkout subTotal={subTotal} />
        </div>
      </div>
    </div>
  );
}

export default Cartscreen;
