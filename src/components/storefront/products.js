import React from "react";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";

const Products = (props) => {
  return (
    <>
      <h2>Products</h2>
      <ul>
        {props.products.map(
          (product) =>
          props.active === product.category && (
              <li key={product.name}>{product.name}</li>
            )
        )}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
  active: state.categories.active,

});

export default connect(mapStateToProps)(Products);
