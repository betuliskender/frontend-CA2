import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import SignUp from "./components/SignUp.jsx";
import Meals from "./components/Meals.jsx";
import Food from "./components/Food.jsx";
import Drink from "./components/Drink.jsx";
import User from "./components/User.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <BrowserRouter basename="frontend-CA2">
        <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal" element={<Meals />} />
          <Route path="/food" element={<Food />}/>
          <Route path="/drink" element={<Drink />}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<User />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
