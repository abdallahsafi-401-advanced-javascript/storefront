import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import { connect, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { updateActive, loadCategories } from "../../store-rtk/categories";


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
  const dispatch = useDispatch();

  useEffect(() => {
    const load = async () => {
      // setIsLoading(true);
      await dispatch(loadCategories());
      // setIsLoading(false);
    };
    load();
  }, [dispatch]);

 

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
                onClick={() => props.updateActive(e.name)}
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

const mapDispatchToProps = { updateActive };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
