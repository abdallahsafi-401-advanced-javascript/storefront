import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//Material ui
//Grid
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { spacing } from "@material-ui/system";

// For card
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//action
import { addProduct } from "../../store-rtk/cart";
import { loadProducts } from "../../store-rtk/products";
import { updateStock } from "../../store-rtk/products";

const useStyles = makeStyles({
  media: {
    height: 200,
  },
  addCart: {
    color: "#BB4430",
  },
  viewDetails: {
    color: "#333",
    textDecoration: 'none'
  },
});

const Products = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const load = async () => {
      // setIsLoading(true);
      await dispatch(loadProducts());
      // setIsLoading(false);
    };
    load();
  }, [dispatch]);

  const add = async (product) => {
    props.addProduct(product);
    // await dispatch(updateStock(product, 0));
  };

  return (
    <Container>
      <h2 align="center">{props.active}</h2>
      <p align="center">description</p>
      <div style={{ padding: 30 }}>
        <Grid container spacing={5} justify="center">
          {props.products.map(
            (product) =>
              props.active === product.category && (
                <Grid item lg={4}>
                  <Card className={classes.root} key={product.name}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image="https://picsum.photos/seed/picsum/200/300"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {product.name} ({product.inStock})
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Lizards are a widespread group of squamate reptiles,
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        size="small"
                        className={classes.addCart}
                        onClick={() => add(product)}
                      >
                        ADD TO CART
                      </Button>
                      <Link to={`/details/${product._id}`} className={classes.viewDetails}>
                        <Button size="small" >
                          VIEW DETAILS
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              )
          )}
        </Grid>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
  active: state.categories.active,
});

const mapDispatchToProps = { addProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
