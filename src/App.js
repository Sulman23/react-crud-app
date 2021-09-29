import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import All from "./components/All";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Footer from "./components/Footer";
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/all" component={All} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/edit/:id" component={Edit} />
        <Route component={NotFound} />
        {/* <Redirect to="/" /> */}
      </Switch>
      <Footer />
    </>
  );
}

export default App;
