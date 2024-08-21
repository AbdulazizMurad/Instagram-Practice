import React from "react";
import "../component/post.css";

const PostCard = ({ postImage, postTitle, postDescription, postLikes }) => {
  return (
    <div className="postCard">
      <img src={postImage} alt="personal post" className="postImage" />

      <div className="postText">
        <h3>{postTitle}</h3>
        <p>{postDescription}</p>
        <div className="likesNum-button">
          <h6>{postLikes}</h6>
          <button className="likeButton">Like</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
// {postImage, postTitle, postDescription, postLikes, postLikeButton}
