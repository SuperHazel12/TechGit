import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Login from "./components/login";
import Latest from "./components/latest";
import Browse from "./components/browse";
import Contact from "./components/contact";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Latest} />
        <Route path="/browse" component={Browse} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
