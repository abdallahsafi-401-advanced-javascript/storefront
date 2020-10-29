import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import {
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
  Button,
  TextField,
  List,
  ListItem,
} from "@material-ui/core";
import products from "../storefront/products";

const useStyles = makeStyles({
  root: {
    marginTop: 50,
    marginBottom: 50,
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

const Checkout = (props) => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography gutterBottom variant="h6" component="h6">
                  Order summary
                </Typography>
              </Grid>
              {props.cart.map((product) => {
                return (
                  <>
                    <Grid item xs={6}>
                      <Typography gutterBottom variant="p">
                        {product.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography gutterBottom variant="p">
                        $ {product.price}
                      </Typography>
                    </Grid>
                  </>
                );
              })}
              <Grid item xs={6}>
                <Typography gutterBottom variant="p">
                  Total
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom variant="p">
                  $
                  {props.cart.reduce(function (a, b) {
                    return a + b.price;
                  }, 0)}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom variant="p">
                  Billing Address
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom variant="p">
                  Payment details
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <TextField id="full-name" label="Full Name" />
              </Grid>
              <Grid item xs={6}>
                <TextField id="credit-card" label="Credit Card #" />
              </Grid>

              <Grid item xs={6}>
                <TextField id="address" label="Address" />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type="date"
                  id="expiration"
                  label="Expiration"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField id="city" label="City" />
              </Grid>
              <Grid item xs={6}>
                <TextField id="cvv" label="CVV" />
              </Grid>

              <Grid item xs={12}>
                <TextField id="state" label="State" />
              </Grid>
              <Grid item xs={12}>
                <TextField id="zip" label="Zip" />
              </Grid>
            </Grid>
          </CardContent>
          <Button
            variant="contained"
            color="primary"
            className={classes.buttonStyle}
          >
            Place Your Order
          </Button>
        </Card>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(Checkout);
