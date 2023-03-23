import React from "react";
import {
  Box,
  Link,
  ListItemIcon,
  MenuItem,
  MenuList,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import {
  AccessTime,
  AutoAwesomeMotion,
  HistoryToggleOffOutlined,
  Notifications,
  Payment,
  Settings,
  Widgets,
} from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "white",
    display: "flex",
    color: "#918e8d",
    "& a": {
      color: "#918e8d",
    },
    "& p": {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    "& ul li, p": {
      fontSize: "12px",
    },
    "& #header": {
      [theme.breakpoints.down("md")]: {
        padding: "10px",
      },
      display: "flex",
      justifyContent: "start",
      alignSelf: "center",
      alignItems: "center",
      padding: "1rem",

      "& #logo": {
        marginRight: "5px",
        color: "#F0A04B",
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      },
      "& h6": {
        [theme.breakpoints.down("md")]: {
          fontSize: "10px",
        },
        fontFamily: "'Roboto Mono', monospace",
        fontStyle: "italic",
        fontWeight: "bold",
        color: "#F0A04B",
      },
    },

    "& #settings": {
      [theme.breakpoints.up("md")]: {
        position: "absolute",
        bottom: "5%",
        width: "13%",
      },
    },
  },
}));
function Sidebar(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Stack direction="column" id="sidebar" sx={{ width: "100%" }}>
        <Box>
          <Stack direction="row" id="header">
            <HistoryToggleOffOutlined id="logo" />
            <Typography variant="h6" component="h6">
              T'IMES
            </Typography>
          </Stack>
        </Box>
        <Box>
          <MenuList>
            <Link href="/dashboard" sx={{ textDecoration: "none" }}>
              <MenuItem>
                <ListItemIcon>
                  <Widgets fontSize="small" />
                </ListItemIcon>
                <Typography variant="p" component="p">
                  Overview
                </Typography>
              </MenuItem>
            </Link>
            <MenuItem>
              <ListItemIcon>
                <Notifications fontSize="small" />
              </ListItemIcon>
              <Typography variant="p" component="p">
                Notifications
              </Typography>
            </MenuItem>
            <br />

            <br />
            <Typography variant="p" component="p" sx={{ paddingLeft: "16px" }}>
              TRACK
            </Typography>
            <Link href="/project-manager" sx={{ textDecoration: "none" }}>
              <MenuItem>
                <ListItemIcon>
                  <AutoAwesomeMotion fontSize="small" />
                </ListItemIcon>
                <Typography variant="p" component="p">
                  Project Management
                </Typography>
              </MenuItem>
            </Link>
            <Link href="/habit-tracker" sx={{ textDecoration: "none" }}>
              <MenuItem>
                <ListItemIcon>
                  <AccessTime fontSize="small" />
                </ListItemIcon>
                <Typography variant="p" component="p">
                  Habit Tracker
                </Typography>
              </MenuItem>
            </Link>
            <Link href="/money-manager" sx={{ textDecoration: "none" }}>
              <MenuItem>
                <ListItemIcon>
                  <Payment fontSize="small" />
                </ListItemIcon>
                <Typography variant="p" component="p">
                  Money Manager
                </Typography>
              </MenuItem>
            </Link>
          </MenuList>
        </Box>
        <Box id="settings">
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            <Typography variant="p" component="p">
              Settings
            </Typography>
          </MenuItem>
        </Box>
      </Stack>
    </Box>
  );
}

export default Sidebar;
