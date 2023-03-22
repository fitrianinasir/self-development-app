import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import google from "../../asset/google.png";
import facebook from "../../asset/facebook.png";
import image from "../../asset/time-management.png";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #EEE9DA 30%, #BDCDD6 90%)",
    maxWidth: false,
    border: 0,
    color: "white",
    height: "100vh",
    padding: "0 30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& h4": {
      color: "black",
      alignItems: "center",
      marginBottom: "2rem",
      fontFamily: "Lexend, sans-serif"
    },
    "& #headerText": {
      color: "black",
      fontSize: "1.5rem",
      alignItems: "center",
      fontFamily: "Merriweather Sans, sans-serif"
    },
    "& p": {
      color: "black",
      alignItems: "center",
    },
    "& span": {
      color: "black",
      fontSize: "10px",
    },
    "& #submitBtn, & #submitBtn:hover": {
      backgroundColor: "#00337C",
    },
    "& a": {
      textDecoration: "none",
    },
  },

  box1: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
      borderRadius: "1rem",
      height: "70%",
      marginTop: "-50%",
    },
    width: "40%",
    height: "80%",
    border: "2px solid white",
    background: "white",
    borderRadius: "1rem 0 0 1rem",
    padding: "2rem",
    margin: "0.5rem",
  },
  box2: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    width: "25%",
    height: "80%",
    border: "2px solid white",
    borderRadius: "0 1rem 1rem 0",
    background: "white",
    padding: "2rem",
  },

  customTextField: {
    [theme.breakpoints.down("md")]: {
      "& label": {
        fontSize: "12px",
      },
    },
    "& fieldset": {
      borderColor: "#567189",
      color: "#567189",
    },
    "& label.Mui-focused": {
      color: "#567189",
      borderColor: "red",
    },
    "& .Mui-focused": {
      color: "#567189",
      borderColor: "red",
    },
  },

  customCheckbox: {
    alignSelf: "self-end",
    "& svg": {
      width: "16px",
      height: "16px",
    },
  },
}));
function Login(props) {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box className={classes.root}>
      <Box className={classes.box1}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="h4" component="h4">
            WELCOME BACK
          </Typography>
          <FormControl
            fullWidth
            variant="outlined"
            className={classes.customTextField}
          >
            <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
            <OutlinedInput id="outlined-adornment-email" label="Email" />
          </FormControl>
          <FormControl
            fullWidth
            variant="outlined"
            className={classes.customTextField}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControlLabel
            className={classes.customCheckbox}
            control={<Checkbox />}
            label="Remember Me"
          />
          <Button fullWidth variant="contained" id="submitBtn" href="/dashboard">
            submit
          </Button>
          <Typography variant="p" component="p">
            or continue with:
          </Typography>
          <Stack direction="row" spacing={2}>
            <img src={google} width={25} alt="google" />
            <img src={facebook} width={25} alt="facebook" />
          </Stack>
          <Stack direction="row" spacing={1}>
            <Link href="/register">
              <Typography variant="span" component="span">
                Forget Password
              </Typography>
            </Link>
            <Link href="/register">
              <Typography variant="span" component="span">
                |
              </Typography>
            </Link>
            <Link href="/register">
              <Typography variant="span" component="span">
                Create an Account
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Box>
      <Box className={classes.box2}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ height:'100%' }}
          spacing={2}
        >
          <Typography variant="h3" component="h3" id="headerText">
            Glad to see you again!
          </Typography>
          <img src={image} width={300} alt="time-management" />
        </Stack>
      </Box>
    </Box>
  );
}

export default Login;
