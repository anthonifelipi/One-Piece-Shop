import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
