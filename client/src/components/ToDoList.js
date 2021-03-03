import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

const ToDoList = (props) => {
  const { list } = props;
  const handleDelete = (event) => {
    console.log(event.target.value);
    const postID = event.target.value;
    axios.post("/delete", { postID });
  };

  return (
    <Grid item sx={12}>
      <form>
        {!list ? (
          <div>
            <p>List goes here</p>
          </div>
        ) : (
          list.map((list) => (
            <div>
              <input type="checkbox" value={list._id} onClick={handleDelete} />
              <p>{list.name}</p>
            </div>
          ))
        )}
      </form>
    </Grid>
  );
};

export default ToDoList;
