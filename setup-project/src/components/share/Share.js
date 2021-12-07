import React from "react";
import "./share.css";
import Post from "../posts/Post";

function Share({
  willOnChange,
  willOnSubmit,
  post,
  willhandleLikeBtn,
  counterLikes,
  willhandleComment,
  comment,
}) {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <input
            placeholder="what's on your mind"
            className="shareInput"
            onChange={willOnChange}
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <button onClick={willOnSubmit} className="share-btn">
              share
            </button>
          </div>
        </div>
      </div>
      {post.map((post) => (
        <Post
          post={post}
          willhandleLikeBtn={willhandleLikeBtn}
          counterLikes={counterLikes}
          willhandleComment={willhandleComment}
          willOnSubmit={willOnSubmit}
          comment={comment}
        />
      ))}
    </div>
  );
}

export default Share;
