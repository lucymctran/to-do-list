import React, { useState, useEffect } from "react";
import axios from "axios";

const ToDoList = (props) => {
  const { list, toTransfer } = props;

  const handleDelete = (event) => {
    event.preventDefault();
    const postID = event.target.value;
    toTransfer(postID);
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
            <div className="ui middle aligned divided list" key={list._id}>
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
