import React from "react";
import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg"
          src="https://images.unsplash.com/photo-1682687982502-1529b3b33f85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
          alt="not found"
        />
        <h1 className="singlePostTitle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          recusandae.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDecs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          nesciunt repellat neque consequuntur nisi. Enim facilis ut eligendi,
          repellat placeat modi voluptatum, atque deleniti adipisci, nisi
          inventore rerum ipsum tenetur! Expedita aut incidunt architecto et
          ullam, temporibus vero. Veniam aspernatur recusandae porro suscipit
          autem sunt repellendus omnis voluptatibus hic architecto error quod
          quia, neque natus veritatis eos voluptatum deleniti sit quas animi
          repellat adipisci, fugit, ipsa impedit? Hic itaque omnis natus vero
          odit excepturi reprehenderit obcaecati ad aut nesciunt quia ea
          placeat, architecto quae doloremque tenetur magni facilis. Asperiores
          aspernatur fuga dicta sint vel amet repudiandae porro deserunt quas
          repellat.
        </p>
      </div>
    </div>
  );
}
