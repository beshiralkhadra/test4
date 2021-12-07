import React, { useState } from "react";
import "./comment.css";
//cannot call conditionaly
function Comment(props) {
  //   const [commentValue, setCommentValue] = useState("");
  //   const [comment, setComment] = useState([""]);
  //   const addingComment = (e) => {
  //     setComment([...comment, commentValue]);
  //   };
  //   const handlingComment = (e) => {
  //     setCommentValue(e.target.value);
  //     // setComment([...comment, commentValue]);
  //   };
  //   console.log(comment);
  //   console.log(commentValue);

  return (
    <div className="comment">
      <div className="comment-container">
        <input
          type="text"
          onChange={props.willhandleComment}
          placeholder="Write a comment"
          className="comment-input"
        />
      </div>
      <div className="comment-btns">
        <button onClick={props.willOnSubmit}>add comment</button>
        <button>Cancel</button>
      </div>
    </div>
  );
}

export default Comment;
