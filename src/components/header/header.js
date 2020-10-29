import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { shadows } from "@material-ui/system";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "#fff",
    background: "linear-gradient(45deg, #00B4DB, #0083B0)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  titleLink: {
    flexGrow: 1,
    textDecoration: "none",
  },
  title: {
    color: "#fff",
  },
  cartLink:{
    textDecoration: "none",

  },
  cart: {
    backgroundColor: "#BB4430",
    "&:hover": {
      background: "#c25744",
    },
    color: "#fff",
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Link to="/" className={classes.titleLink}>
            <Typography variant="h6" className={classes.title}>Store</Typography>
          </Link>

          <Link to="/checkout" className={classes.cartLink} >
          <Button className={classes.cart} variant="contained">
            Cart ({props.cart.length})
          </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(Header);
