// import React from 'react'
// import "./post.css"
// import posts from "./posts"
// const PostList = () => {
//     const postDisplay = posts()=>{

//     }
//   return (
//     <div>PostList</div>
//   )
// }

// export default PostList

import React from "react";
import posts from "../posts.js";
import "../component/post.css";
import PostCard from "./PostCard.js";

const PostList = () => {
  const postDisplay = posts.map((post) => {
    return (
      <PostCard
        postImage={post.image}
        postTitle={post.title}
        postDescription={post.description}
        postLikes={post.likes}
      />
    );
  });
  return <div className="postContainer"> {postDisplay}</div>;
};

export default PostList;
