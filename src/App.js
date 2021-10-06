import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Winner from "./hook/Winner";
import FetchUsers from "./hook/FetchUsers";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import Count from "./hook/Count";
import CheckBox from "./hook/CheckBox";
import Home from "./Home";
import Bark from "./hook/Bark";
import InputStyle from "./hook/InputStyle";
import UseState from "./hook/UseState";
import Rating from "./hook/Rating";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/winner" component={Winner} />
        <Route path="/fetch-users" component={FetchUsers} />
        <Route path="/count" component={Count} />
        <Route path="/check-box" component={CheckBox} />
        <Route path="/bark" component={Bark} />
        <Route path="/input-style" component={InputStyle} />
        <Route path="/use-state" component={UseState} />
        <Route path="/rating" component={Rating} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
