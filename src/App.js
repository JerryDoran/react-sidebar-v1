import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles.css";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/reports" component={Reports} />
          <Route path="/products" component={Products} />
        </Switch>
      </Router>
    </>
  );
}
