import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Router, Routes, Link } from "react-router-dom";
// import { Switch } from "react-router-dom";

import OrdersList from "./OrdersList";
import UsersList from "./UsersList";

export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>
          <ul className="adminfunctions">
            <li>
              {/* <a href="/admin/userslist">User List</a> */}
              {/* <Link
                to={"/admin/userslist"}
                style={{ color: "white", padding: "20px" }}
              >
                Users List
              </Link> */}
            </li>
            <li>
              {/* <a href="/admin/orderslist">Orders List</a> */}
              <Link
                to={"/admin/orderslist"}
                style={{ color: "white", padding: "20px" }}
              >
                Orders List
              </Link>
            </li>
          </ul>

          {/* <Routes>
          </Routes> */}
          {/* <Switch>
            <Route path="/admin/userslist" Component={UsersList} />
            <Route path="/admin/orderslist" Component={OrdersList} />
          </Switch> */}
        </div>
      </div>
    </div>
  );
}

// ********************

// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { Routes, Route, Link, useNavigate } from "react-router-dom";

// import OrdersList from "./OrdersList";
// import UsersList from "./UsersList";

// export default function Adminscreen() {
//   const userstate = useSelector((state) => state.loginUserReducer);
//   const { currentUser } = userstate;
//   const navigate = useNavigate();

//   return (
//     <div>
//       <div className="row justify-content-center">
//         <div className="col-md-10">
//           <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>
//           <ul className="adminfunctions">
//             <li>
//               <Link
//                 to={"/admin/userslist"}
//                 style={{ color: "white", padding: "20px" }}
//               >
//                 Users List
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to={"/admin/orderslist"}
//                 style={{ color: "white", padding: "20px" }}
//               >
//                 Orders List
//               </Link>
//             </li>
//           </ul>

//           <Routes>
//             <Route path="/admin/userslist" element={<UsersList />} />
//             <Route path="/admin/orderslist" element={<OrdersList />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }
