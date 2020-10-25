import "./App.css";
import Header from "./components/header/header";
import Categoties from './components/storefront/categories'; 
import Products from './components/storefront/products'; 
import Footer from "./components/footer/footer";
import { Provider } from "react-redux";
import store from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <Header></Header>
        <Categoties></Categoties>
        <Products></Products>
        <Footer></Footer>
      </Provider>
    </>
  );
}

export default App;
