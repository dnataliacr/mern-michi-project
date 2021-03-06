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
  footer: {
    marginTop: "50px",
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    color: "#000",
  },
  anchor: {
    color: "#000",
    textDecoration: "none",
    animation: "beat 2s infinite",
  },
  icon: {
    animation: `$beat 3s infinite`,
  },
  '@keyframes beat': {
    "0%": {
      tranform: "scale(1)"
    },
    "50%": {
      transform: "scale(0.6)"
    }
  },
  image: {
    marginLeft: "15px",
  },

  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
      alignItems: "center"
    },
  },
}));
