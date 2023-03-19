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
  Link
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import google from "../../asset/google.png";
import facebook from "../../asset/facebook.png";

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
    },
  },

  box1: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
      borderRadius: "1rem",
      height: "70%",
      marginTop:'-50%'
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
          <Typography
            variant="h4"
            component="h4"
            sx={{ color: "black", alignItems: "center", marginBottom: "2rem" }}
          >
            CREATE AN ACCOUNT
          </Typography>
          <Stack
            direction="row"
            space={3}
            sx={{ width: "100%", justifyContent: "space-between !important" }}
          >
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
          <Stack
            direction="row"
            space={3}
            sx={{ width: "100%", justifyContent: "space-between !important" }}
          >
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
          <Button fullWidth variant="contained">
            submit
          </Button>
          <Typography
            variant="p"
            component="p"
            sx={{ color: "black", alignItems: "center" }}
          >
            or sign up with:
          </Typography>
          <Stack direction="row" spacing={2}>
            <img src={google} width={25} alt="google" />
            <img src={facebook} width={25} alt="facebook" />
          </Stack>
          <Link href="/login" sx={{ textDecoration: 'none' }}>
            <Typography
              variant="span"
              component="span"
              sx={{ color: "black", alignItems: "center" }}
              className={classes.smallText}
            >
              Already have an account? Log in
            </Typography>
          </Link>
        </Stack>
      </Box>
      <Box className={classes.box2}>BOX2</Box>
    </Box>
  );
}

export default Register;
