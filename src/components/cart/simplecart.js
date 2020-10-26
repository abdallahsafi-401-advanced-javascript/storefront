import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import { connect } from "react-redux";

import { deleteProduct } from "../../store/cart";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 200,
    backgroundColor: "#eee",
    zIndex: 1000,
    margin: theme.spacing(1),
    position: "fixed",
    top: theme.spacing(9),
    right: theme.spacing(6),
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const Simplecart = (props) => {
  const classes = useStyles();

  return (
    <>
      {props.cart.length !== 0 && (
        <div className={classes.root}>
          <List component="nav" aria-label="secondary mailbox folders">
            {props.cart.map((item) => (
              <ListItemLink href="#simple-list">
                <ListItemText primary={item.name} />
                <ListItemSecondaryAction>
                    <IconButton 
                    edge="end" 
                    aria-label="delete" 
                    onClick={() => props.deleteProduct(item)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
              </ListItemLink>
            ))}
          </List>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});
const mapDispatchToProps = { deleteProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Simplecart);


