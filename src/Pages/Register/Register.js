import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import google from "../../asset/google.png";
import facebook from "../../asset/facebook.png";
import image from "../../asset/time.png";

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
    "& span": {
      fontSize: "10px",
      color: "black",
    },
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
      textAlign:"center",
      fontFamily: "Merriweather Sans, sans-serif",
    },
    "& p": {
      color: "black",
      alignItems: "center",
    },
    "& #submitBtn, & #submitBtn:hover": {
      backgroundColor: "#00337C",
    },
    "& a": {
      textDecoration: "none",
    },
    "& #customStack": {
      width: "100%",
      justifyContent: "space-between !important",
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
    height: "90%",
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
    height: "90%",
    border: "2px solid white",
    borderRadius: "0 1rem 1rem 0",
    background: "white",
    padding: "2rem",
  },

  customTextField: {
    [theme.breakpoints.down("md")]: {
      "& label":{
        fontSize:'12px'
      }
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
    "& span": {
      color: "black",
      fontSize: "10px",
      textAlign: "right",
    },
    "& svg": {
      width: "16px",
      height: "16px",
    },
  },
  smallText: {
    "& span": {
      fontSize: "10px",
    },
  },
}));

function Register(props) {
  const classes = useStyles();
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
            CREATE AN ACCOUNT
          </Typography>
          <Stack direction="row" space={3} id="customStack">
            <FormControl
              fullWidth
              variant="outlined"
              className={classes.customTextField}
              sx={{ marginRight: "1rem" }}
            >
              <InputLabel htmlFor="outlined-adornment-first-name">
                First Name
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-first-name"
                label="First Name"
              />
            </FormControl>
            <FormControl
              fullWidth
              variant="outlined"
              className={classes.customTextField}
            >
              <InputLabel htmlFor="outlined-adornment-last-name">
                Last Name
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-last-name"
                label="Last Name"
              />
            </FormControl>
          </Stack>
          <FormControl
            fullWidth
            variant="outlined"
            className={classes.customTextField}
          >
            <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
            <OutlinedInput id="outlined-adornment-email" label="Email" />
          </FormControl>
          <Stack direction="row" space={3} id="customStack">
            <FormControl
              fullWidth
              variant="outlined"
              className={classes.customTextField}
              sx={{ marginRight: "1rem" }}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                type="password"
                id="outlined-adornment-password"
                label="Password"
              />
            </FormControl>
            <FormControl
              fullWidth
              variant="outlined"
              className={classes.customTextField}
            >
              <InputLabel htmlFor="outlined-adornment-confirm-password">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                type="password"
                id="outlined-adornment-confirm-password"
                label="Confirm Password"
              />
            </FormControl>
          </Stack>

          <FormControlLabel
            className={classes.customCheckbox}
            control={<Checkbox />}
            label="Remember Me"
          />
          <Button fullWidth variant="contained" id="submitBtn">
            submit
          </Button>
          <Typography variant="p" component="p">
            or sign up with:
          </Typography>
          <Stack direction="row" spacing={2}>
            <img src={google} width={25} alt="google" />
            <img src={facebook} width={25} alt="facebook" />
          </Stack>
          <Link href="/login">
            <Typography variant="span" component="span">
              Already have an account? Log in
            </Typography>
          </Link>
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
            Make your days better and simple. Join with Us!
          </Typography>
          <img src={image} width={300} alt="time-management" />
        </Stack>
      </Box>
    </Box>
  );
}

export default Register;
