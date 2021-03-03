import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

const TextSubmission = (props) => {
  const classes = useStyles();
  // const { toPost } = props;
  const { toTransfer } = props;
  const [post, setPost] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // toPost(post);
    axios.post("/post", { post });
    setPost([]);
    handleTransfer();
  };

  const handleTransfer = () => {
    axios.get("/entirelist").then((response) => {
      console.log(response.data);
      toTransfer(response.data);
    });
  };

  return (
    <Grid item xs={12}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-full-width"
          label="Add to To-Do List"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={post}
          onChange={(e) => {
            setPost(e.target.value);
          }}
        />
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Post
        </Button>
      </form>
    </Grid>
  );
};

export default TextSubmission;
