import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#edeceb",
    padding: "1rem",
  },
}));
function HabitTracker(props) {
  const classes = useStyles();
  return (
    <Stack direction="row">
      <Sidebar />
      <Box className={classes.root}>Habit Tracker</Box>
    </Stack>
  );
}

export default HabitTracker;
