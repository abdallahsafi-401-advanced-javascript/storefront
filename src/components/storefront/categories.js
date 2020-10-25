import React from "react";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { changeActive } from "../../store/categories";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  title: {
    color: "#333",
  },
  buttons: {
    color: "#0083B0",
  },
}));

const Categories = (props) => {
  const classes = useStyles();

  return (
    <Container>
      <h2 className={classes.title}>Browse our Categories</h2>
      <div className={classes.root}>
        <ButtonGroup variant="text">
          {props.categories.map((e) => {
            return (
              <Button
                className={classes.buttons}
                key={e.name}
                onClick={() => props.changeActive(e.name)}
              >
                {e.name}
              </Button>
            );
          })}
        </ButtonGroup>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  active: state.categories.active,
});

const mapDispatchToProps = { changeActive };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
