import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Loading from "../Components/Loading";
import Success from "../Components/Success";
import Error from "../Components/Error";
import { getAllUsers } from "../actions/userActions";
function UsersList() {
  const dispatch = useDispatch();
  const usersstate = useSelector((state) => state.getAllUsersReducers);
  const { error, loading, users } = usersstate;
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something Went Wrong" />}
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default UsersList;
