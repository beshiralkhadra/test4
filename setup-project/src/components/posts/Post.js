import "./post.css";
import Comment from "../comments/Comment";
// import Displaycomment from "../comments/Displaycomment";

function Post(props) {
  return (
    <div className="postWrapper">
      <div className="post">
        <div className="postTop">
          <div className="postTopLeft">
            <span className="username-name">username-name</span>
            <span className="postDate">5 mins ago</span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{props.post}</span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <button className="like-btn" onClick={props.willhandleLikeBtn}>
              Like {props.counterLikes}
            </button>
          </div>
          <div className="postBottomRight">
            <Comment
              willOnSubmit={props.willOnSubmit}
              willhandleComment={props.willhandleComment}
            />

            <span>{props.comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
