import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  '@keyframes swing': {
    '0%': {
      transform: 'translateX(0px)'
    },
    '25%': {
      transform: 'translateX(5px)'
    },
    '50%': {
      transform: 'translateX(0px)'
    },
    '75%': {
      transform: 'translateX(5px)'
    },
    '100%': {
      transform: 'translateX(0px)'
    },
  },
  error: {
    color: '#ff0033',
    fontFamily: 'Sans-Serif',
    fontSize: '.8em',
    paddingBottom: '0.5rem',
    animation: `$swing 1s ease`,
  },

  hidden: {
    visibility: 'hidden'
  },

}));
