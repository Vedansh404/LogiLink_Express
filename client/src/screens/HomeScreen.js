import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import services from "../servicedata";
import Methods from "../Components/Methods";
import { getAllItems } from "../actions/itemActions";
import Loading from "../Components/Loading";
import Error from "../Components/Error";

export default function HomeScreen() {
  const dispatch = useDispatch();

  const itemstate = useSelector((state) => state.getAllItemsReducers);

  const { items, error, loading } = itemstate;

  useEffect(() => {
    dispatch(getAllItems());
  }, []);

  return (
    <div>
      <div className="row">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something Went Wrong !!" />
        ) : (
          items.map((service) => {
            return (
              <div className="col-md-4" key={service._id}>
                <div>
                  <Methods service={service} />
                  {/* {service.name} */}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
