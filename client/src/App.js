import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider, Toolbar } from "@material-ui/core";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import { useDispatch } from "react-redux";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import useStyles from "./styles";

const theme = createTheme({
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightBold: 800,
  },
});

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
 <>
    
    <AppBar position="static" className={classes.appBar}>
  <Toolbar variant="dense">



    <Typography variant="h3" color="inherit" component="div">
      michisite
    </Typography>
  </Toolbar>
</AppBar>
    <Container maxWidth="lg">
  
      <Grow in>
     
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
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
