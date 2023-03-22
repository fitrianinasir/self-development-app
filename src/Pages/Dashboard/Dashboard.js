import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import clock from "../../asset/clock.png";
import profile from "../../asset/profile.jpg";
import { Search } from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
    },
    width: "100vh",
    backgroundColor: "red",
    "& #logoSection": {
      display: "flex",
      justifyContent: "start",
      alignSelf: "center",
      paddingLeft:'0px',
      "& img": {
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      },
    },
    "& h6": {
      [theme.breakpoints.down("md")]: {
        fontSize: "10px",
      },
      fontFamily: "'Roboto Mono', monospace",
      fontStyle: "italic",
      fontWeight: "bold",
      color: "#011b47",
    },
    "& #profileSection": {
      
      display: "flex",
      justifyContent: "end",
      "& .MuiAvatar-circular":{
        width:40,
        height:40,
        [theme.breakpoints.down("md")]: {
          width:30,
          height:30
        }
        
      }
    },
    "& #optionSection": {
      display: "flex",
      justifyContent: "space-evenly",
      "& p": {
        fontFamily: "'Roboto Mono', monospace",
        fontWeight: "bold",
        color: "#011b47",
      },
    },
  },
  customToolbar: {
    height: "1rem",
    backgroundColor: "#A8D1DA",
  },
}));

const SearchField = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

function Dashboard(props) {
  const classes = useStyles();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (e) => setAnchorElUser(e.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar position="static" className={classes.root}>
      <Container maxWidth="xl" sx={{ backgroundColor: "#A8D1DA" }}>
        <Toolbar className={classes.customToolbar}>
          <Grid container spacing={2}>
            <Grid item xs={2} id="logoSection">
              <Stack direction="row">
                <img src={clock} width={40} alt="clock" id="logo" />
                <Typography variant="h6" component="h6">
                  T'IMES
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} sx={{ alignSelf: "center" }}>
              <Stack direction="row" id="optionSection">
                <Typography variant="p" component="p">
                  Your Work
                </Typography>
                <Typography variant="p" component="p">
                  Templates
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={4} id="profileSection">
              <Box>
                <Stack direction="row" spacing={3}>
                  <SearchField>
                    <SearchIconWrapper>
                      <Search />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </SearchField>
                  <Tooltip title="Open Settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar src={profile} alt="Audiandra" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="profile-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem>
                      <Typography variant="span" component="span">
                        Settings
                      </Typography>
                    </MenuItem>
                    <MenuItem>
                      <Typography variant="span" component="span">
                        Switch light/night mode
                      </Typography>
                    </MenuItem>
                  </Menu>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Dashboard;
