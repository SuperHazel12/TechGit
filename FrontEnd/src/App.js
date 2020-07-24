import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Login from "./components/login";
import Latest from "./components/latest";
import Browse from "./components/browse";
import Contact from "./components/contact";
import ViewProfile from "./components/viewprofile";
import EditProfile from "./components/editprofile";
import Logout from "./components/login";
import { Switch, Route } from "react-router-dom"; //to be able to switch to different pages

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/latest" component={Latest} />
        <Route path="/browse" component={Browse} />
        <Route path="/contact" component={Contact} />
        <Route path="/viewprofile" component={ViewProfile} />
        <Route path="/editprofile" component={EditProfile} />
        <Route path="/logout" component={Logout} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
