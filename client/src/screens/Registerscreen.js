import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
// import { registerUserReducer } from "../reducer/userReducer";
import Loading from "../Components/Loading";
import Success from "../Components/Success";
import Error from "../Components/Error";

function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const registerstate = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerstate;
  const dispatch = useDispatch();

  function register() {
    if (password !== cpassword) {
      alert("INCORRECT PASSWORD MATCH!!");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="shadow p-3 mb-5 bg-white rounded col-md-5 mt-5 text-start">
          {loading && <Loading />}
          {success && <Success success="User Registered Successfully" />}
          {error && <Error error="Email already Registered" />}

          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Register
          </h2>
          <div>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              required
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="E-mail"
              className="form-control"
              required
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              required
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="form-control"
              required
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />
            <button onClick={register} className="btn mt-3 mb-3 ">
              REGISTER
            </button>
            <br />
            <a
              style={{ color: "black", textAlign: "right" }}
              href="/login"
              className=" mx-auto"
            >
              Already have an Account !
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerscreen;
