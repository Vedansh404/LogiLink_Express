import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Cartscreen from "./screens/Cartscreen";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import Ordersscreen from "./screens/Ordersscreen";
import Adminscreen from "./screens/Adminscreen";
import UsersList from "./screens/UsersList";
import OrdersList from "./screens/OrdersList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          {/* <Switch> */}
          <Route path="/" exact Component={HomeScreen} />

          <Route path="/cart" exact Component={Cartscreen} />
          <Route path="/register" exact Component={Registerscreen} />
          <Route path="/login" exact Component={Loginscreen} />
          <Route path="/orders" exact Component={Ordersscreen} />
          <Route path="/admin" Component={Adminscreen} />

          <Route path="/admin/userslist" Component={UsersList} exact />
          <Route path="/admin/orderslist" Component={OrdersList} exact />
          {/* </Switch> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
/*
style={{
  height: "1000px",
  width: "100%",
  backgroundImage:
    'url("https://wallpapers.com/downloads/high/aesthetic-landscape-mountain-and-trees-art-pqu31w1jykp650an.webp")',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}}
*/
