import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Login from "./components/login";
import Contact from "./components/contact";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Login />
      <Footer />
    </React.Fragment>
  );
}

export default App;
