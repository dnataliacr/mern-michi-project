import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    margin: "0 0 100px 0",

    padding: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
    alignItems: "right",
    backgroundColor: "#000",
    color: "#fff",
  },
  heading: {
    color: "#fff",
  },
  image: {
    marginLeft: "15px",
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
