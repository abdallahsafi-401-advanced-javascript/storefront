import "./App.css";
import Header from "./components/header/header";
import Categoties from "./components/storefront/categories";
import Products from "./components/storefront/products";
import Simplecart from "./components/cart/simplecart";
import Checkout from "./components/cart/checkout";
import Footer from "./components/footer/footer";
import ProductDetails from "./components/products/details";
import { Provider } from "react-redux";
import store from "./store-rtk";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <>
                  <Categoties />
                  <Simplecart />
                  <Products />
                  <Footer />
                </>
              )}
            />
            <Route path="/details/:id" component={ProductDetails} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
