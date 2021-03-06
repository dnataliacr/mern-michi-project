import React, { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  createTheme,
  ThemeProvider,
  BottomNavigation,
} from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch } from "react-redux";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import useStyles from "./styles";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const theme = createTheme({
    typography: {
      fontFamily: "Abril Fatface",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        className={classes.appBar}
        position="static"
        justifyContent="left"
      >
        <Typography className={classes.heading} variant="h2" align="center">
          michisite
        </Typography>
      </AppBar>
      <Container maxWidth="lg">
        <Grow in>
          <Container>
            <Grid
              className={classes.mainContainer}
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={9}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={9} md={3}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
      <BottomNavigation position="static" className={classes.footer}>
        <Typography>
          {" "}
          made with <FavoriteIcon
            className={classes.icon}
            fontSize="small"
          />{" "}
          by{" "}
          <a href="https://nataliacabral.netlify.app/" rel="noreferrer" className={classes.anchor}>
            nataliacabral.com
          </a>
        </Typography>
      </BottomNavigation>
    </ThemeProvider>
  );
};

export default App;
