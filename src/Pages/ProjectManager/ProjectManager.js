import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Card, makeStyles } from "@material-ui/core";
import { Box, CardContent, Grid, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Delete, DeleteOutline, Star, StarBorder } from "@mui/icons-material";
const dummy = require("./dummy.json");

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#edeceb",
    padding: "2rem",
    "& h5": {
      textAlign: "center",
    },
    "& #projectSection": {
      padding: "2rem",
    },
    "& p": {
      textTransform: "uppercase",
      fontSize: "12px",
      fontWeight: 500,
    },
    "& .MuiCardContent-root": {
      position: "relative",
    },
    "& #starContainer": {
      position: "absolute",
      bottom: 0,
      right: 0,
      "& svg": {
        fontSize: "16px",
        color: "#dbba16",
      },
    },
    "& #deleteContainer": {
      position: "absolute",
      top: 8,
      right: 0,
      "& svg": {
        fontSize: "16px",
      },
    },
  },
}));

function ProjectManager(props) {
  const classes = useStyles();
  const [data, setData] = useState(dummy.data);
  useEffect(() => {}, [data]);

  const updateStar = (id) => {
    setData(data.map((i) => (i.id === id ? { ...i, starred: !i.starred } : i)));
  };

  const deleteBoard = (idx) => {
    let removed = data
    removed.splice(idx, 1);
    console.log(removed)
    setData([...removed])
  };
  return (
    <Stack direction="row">
      <Sidebar />
      <Box className={classes.root}>
        <Typography variant="h5" component="h5">
          WORKSPACE
        </Typography>
        <Box id="projectSection">
          <Typography variant="h6" component="h6">
            Starred Board
          </Typography>
          <Grid container spacing={2}>
            {data.map((el, index) => {
              if (el.starred) {
                return (
                  <Grid item xs={3} key={el.id}>
                    <Card sx={{ minWidth: 275, minHeight: 500 }}>
                      <CardContent>
                        <Typography variant="p" component="p">
                          {el.title}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          {el.status}
                        </Typography>
                        <Box
                          id="starContainer"
                          onClick={() => updateStar(el.id, index)}
                        >
                          {el.starred ? (
                            <IconButton aria-label="starred">
                              <Star id="starred" />
                            </IconButton>
                          ) : (
                            <IconButton>
                              <StarBorder id="star" aria-label="unstarred" />
                            </IconButton>
                          )}
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              } else {
                return "";
              }
            })}
          </Grid>
          <br />
          <Typography variant="h6" component="h6">
            Boards
          </Typography>
          <Grid container spacing={2}>
            {data.map((el, index) => (
              <Grid item xs={3} key={el.id}>
                <Card sx={{ minWidth: 275, minHeight: 500 }}>
                  <CardContent>
                    <Typography variant="p" component="p">
                      {el.title}
                    </Typography>
                    <Box
                      id="deleteContainer"
                      onClick={() => deleteBoard(index)}
                    >
                      <IconButton aria-label="delete">
                        <DeleteOutline />
                      </IconButton>
                    </Box>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {el.status}
                    </Typography>
                    <Box id="starContainer" onClick={() => updateStar(el.id)}>
                      {el.starred ? (
                        <IconButton aria-label="starred">
                          <Star id="starred" />
                        </IconButton>
                      ) : (
                        <IconButton>
                          <StarBorder id="star" aria-label="unstarred" />
                        </IconButton>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Stack>
  );
}

export default ProjectManager;
