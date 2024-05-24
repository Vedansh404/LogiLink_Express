import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Loading from "../Components/Loading";
import Success from "../Components/Success";
import Error from "../Components/Error";

function Ordersscreen() {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getUserOrdersReducers);
  const { orders, error, loading } = orderstate;

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);
  return (
    <div>
      <h1 style={{ fontStyle: "italic" }}>My Orders</h1>
      <div className="row">
        {loading && <Loading />}
        {error && <Error error="Something Went Wrong" />}
        {orders &&
          orders.map((order) => {
            return (
              <div className="p-3 md-8" key={order._id}>
                <div
                  className=" flex-container"
                  style={{ justifyContent: "space-around" }}
                >
                  <div>
                    {order.orderItems.map((item, index) => {
                      return (
                        <div key={index}>
                          <h1>Items</h1>
                          <div className="p-3">
                            <h2 style={{ fontSize: "20px" }}>
                              {item.name} {item.varient}* {item.quantity}=
                              {item.price}
                            </h2>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <h1>Address</h1>
                    <div className="p-3">
                      <h2 style={{ fontSize: "20px" }}>
                        Street: {order.shippingAddress.street}
                      </h2>
                      <h2 style={{ fontSize: "20px" }}>
                        City: {order.shippingAddress.city}
                      </h2>
                      <h2 style={{ fontSize: "20px" }}>
                        Country: {order.shippingAddress.country}
                      </h2>
                      <h2 style={{ fontSize: "20px" }}>
                        Pin: {order.shippingAddress.pincode}
                      </h2>
                    </div>
                  </div>
                  <div>
                    <h1>Order Info</h1>
                    <div className="p-3">
                      <h2 style={{ fontSize: "20px" }}>
                        Order Amount: {order.orderAmount}
                      </h2>
                      <h2 style={{ fontSize: "20px" }}>
                        Date: {order.createdAt.substring(0, 10)}
                      </h2>
                      {/* <h2 style={{ fontSize: "20px" }}>
                        Transaction Id: {order.transactionId}
                      </h2> */}
                      <h2 style={{ fontSize: "20px" }}>
                        Order Id: {order._id}
                      </h2>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Ordersscreen;
