import React from "react";
import "./post.css";
import HeaderImg from "../../asset/images/HederImg.jpg";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1682687219356-e820ca126c92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
        alt="img not found"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        ladanum possimus delectus, dicta aspernatur recusandae sed qui.
        Nobis, dicta asperiores. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga eveniet sed consequuntur possimus error nostrum
        culpa porro, temporibus quisquam ab.
      </p>
    </div>
  );
}
