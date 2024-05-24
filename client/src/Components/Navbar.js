import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, loginUser } from "../actions/userActions";

function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  console.log(userstate);

  const dispatch = useDispatch();

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/">
          LogiLink Express
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" collapse navbar-collapse" id="navbarNav">
          <ul className="me-2 navbar-nav m-auto ">
            {currentUser?.email !== undefined ? (
              <>
                <div className="dropdown">
                  <a
                    href="#s"
                    style={{ color: "black" }}
                    className=" dropdown-toggle nav-link"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    // aria-expanded="false"
                  >
                    {currentUser.name}
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="/orders">
                      Orders
                    </a>

                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      <li>Logout</li>
                    </a>
                  </div>
                </div>
                <li className="nav-item">
                  <a className="nav-link" href="/cart">
                    Cart {cartstate.cartItems.length}
                  </a>
                </li>
              </>
            ) : (
              <div>
                <li className="nav-item ">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
