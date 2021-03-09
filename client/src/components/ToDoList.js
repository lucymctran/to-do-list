import React, { useState, useEffect } from "react";
import axios from "axios";

const ToDoList = (props) => {
  const { list } = props;
  console.log(list);
  const handleDelete = (event) => {
    console.log(event.target.value);
    const postID = event.target.value;
    axios.post("/delete", { postID });
  };

  return (
    <div className="ui left aligned container">
      <div className="row"></div>
      <form>
        {!list.length ? (
          <div className="row">
            <h2>Welcome to the To-do List!</h2>
            <h3>You can start adding things you need to do. Type away!</h3>
          </div>
        ) : (
          list.map((list) => (
            <div className="ui middle aligned divided list">
              <div className="item">
                <div className="right floated content">
                  <button
                    className="ui pink basic button"
                    value={list._id}
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
                <div className="content">
                  <h3>{list.name}</h3>
                </div>
              </div>
            </div>
          ))
        )}
      </form>
    </div>
  );
};

export default ToDoList;

{
  /* <input type="checkbox" value={list._id} onClick={handleDelete} /> */
}
