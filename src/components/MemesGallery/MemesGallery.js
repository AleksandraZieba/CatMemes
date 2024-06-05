import React from "react";
import memesData from "../../memesData";

const MemesGallery = () => {
  return (
    <div className="MemesGallery">
      {memesData.map((meme, index) => (
        <div key={index} className="meme">
          <h3>{meme.name}</h3>
          <img src={meme.imagePath} alt={meme.name} className="memeImage" />
        </div>
      ))}
    </div>
  );
};

export default MemesGallery;
