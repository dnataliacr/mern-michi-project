import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";

import useStyles from "./styles.js";

const App = () => {
  const [currentId, setCurrentId] = useState(null);

  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          michis michis
        </Typography>
        <img
          src={
            {
              /** */
            }
          }
          className={classes.image}
          alt="michilogo"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
