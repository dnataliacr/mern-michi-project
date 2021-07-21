import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";

import makeStyles from "./styles.js";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          michis michis
        </Typography>
        <img
          src={
            {
              /** */
            }
          }
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
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
