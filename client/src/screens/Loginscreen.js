import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Loading from "../Components/Loading";
import Error from "../Components/Error";

function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function login() {
    const user = { email, password };
    dispatch(loginUser(user));
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="shadow p-3 mb-5 bg-white rounded col-md-5 mt-5 text-start">
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Login
          </h2>

          {loading && <Loading />}
          {error && <Error error="Invalid Credentials" />}

          <div>
            <input
              type="text"
              placeholder="E-Mail"
              className="form-control"
              required
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              required
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <button onClick={login} className="btn mt-3 mb-3">
              LOGIN
            </button>
            <br />
            <a style={{ color: "black" }} href="/register" className="mt-2">
              Click here to Register !
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
