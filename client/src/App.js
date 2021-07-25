import React, { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import useStyles from "./styles";

import { useSelector } from "react-redux";
const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  const posts = useSelector((state) => state.posts);
  return (
    <>
      <AppBar className={classes.appBar} position="static" color="transparent">
        <Typography
          className={classes.heading}
          variant="h2"
          align="center"
          color="black"
        >
          michipost
        </Typography>
      </AppBar>
      <Container maxWidth="lg">
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-around"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={9}>
            <Posts setCurrentId={setCurrentId} /> 
              </Grid>
              <Grid item xs={12} sm={3}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
};

export default App;
