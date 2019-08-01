import React from "react";

export default function PictureList({ imgUrl }) {
    
    return (
      <div >
        <img className="picture" src={imgUrl} alt=""/>
      </div>
    );
  };