import {useState} from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import Login from "./Login.jsx";
import LoggedIn from "./LoggedIn.jsx";

function Header({loggedIn,setLoggedIn}) {
  const init = {username: "", password: ""};
    const [loginCredentials, setLoginCredentials] = useState(init);

  return (
    <>
      <nav className="topnav">
        <div className="nav-menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/meal">Meal</NavLink>
          <div className="login-container">
          {!loggedIn ? (<Login setLoggedIn={setLoggedIn} loginCredentials={loginCredentials} setLoginCredentials={setLoginCredentials}  />) :
                (<div>
                    <LoggedIn setLoggedIn={setLoggedIn} loginCredentials={loginCredentials} />
                </div>)}
          </div>

        </div>
      </nav>
    </>
  );
}
export default Header;