import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getProduct } from "../../store-rtk/products";
import { makeStyles } from "@material-ui/core/styles";
import Simplecart from "../cart/simplecart";


import {
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: 100,
    marginBottom: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
  },
  card: {
    marginTop: 50,
    width: 600,
    padding: 20,
  },
  media: {
    height: 450,
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
  },
  buttonStyle: {
    marginTop: 20,
    width: 600,
    backgroundColor: "#BB4430",
    "&:hover": {
      background: "#c25744",
    },
    color: "#fff",
  },
});
const Details = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { id } = props.match.params;

  useEffect(() => {
    console.log("iam loading", id);
    const load = async () => {
      // setIsLoading(true);
      await dispatch(getProduct(id));
      // setIsLoading(false);
    };
    load();
  }, [dispatch]);

  return (
    <>
     <Simplecart />
      <Container className={classes.root}>
        <Typography variant="h4" component="h2" className={classes.title}>
          {props.product.name}
        </Typography>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="https://picsum.photos/seed/picsum/200/300"
            title="Contemplative Reptile"
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h4">
              inStock: {props.product.inStock}
            </Typography>
            <Typography gutterBottom variant="h5" component="h4">
              Price: ${props.product.price}
            </Typography>
          </CardContent>
        </Card>
        <Button
          variant="contained"
          color="primary"
          className={classes.buttonStyle}
        >
          Buy
        </Button>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  product: state.products.productDetails,
});

export default connect(mapStateToProps)(Details);
