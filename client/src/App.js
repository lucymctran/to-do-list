import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "./components/ToDoList.js";
import TextSubmission from "./components/TextSubmission.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  const classes = useStyles();

  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("/entirelist").then((response) => {
      console.log(response.data);
      setList(response.data);
    });
  }, []);

  // const toDoList = ["What do I need to do today?"];

  // const handlePost = (post) => {
  //   setList(list.concat(post));
  // };

  const handlePost = (post) => {
    setList(post);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography
          component="div"
          style={{ backgroundColor: "#fbf8e0", height: "100vh" }}
        >
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>To-Do List</Paper>
              </Grid>
              <Router>
                <Switch>
                  <Route path="/:customListName" />
                </Switch>
              </Router>
              <TextSubmission toTransfer={handlePost} />
              <List list={list} />
            </Grid>
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default App;
