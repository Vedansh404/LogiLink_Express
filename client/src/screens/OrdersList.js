import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Loading from "../Components/Loading";
import Success from "../Components/Success";
import Error from "../Components/Error";

function OrdersList() {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getUserOrdersReducers);
  const { orders, error, loading } = orderstate;
  useEffect(() => {
    dispatch(getUserOrders());
  }, []);
  return (
    <div>
      <h1 style={{ fontSize: "35px" }}>Admin Panel</h1>
      <h2>Orders List</h2>
      {loading && <Loading />}
      {error && <Error error="Something Went Wrong" />}
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>User Id</th>
            <th>Amount </th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => {
              return (
                <tr>
                  <td>{order._id}</td>
                  <td>{order.email}</td>
                  <td>{order.userid}</td>
                  <td>{order.orderAmount}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>
                    {order.isDelivered ? (
                      <h1 style={{ fontSize: "20px", color: "green" }}>
                        Delivered
                      </h1>
                    ) : (
                      <button className="btn">Deliver</button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersList;
