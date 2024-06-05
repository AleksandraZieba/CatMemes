import React from "react";
import mem1 from "./art/mem1.jpg";
import mem2 from "./art/mem2.jpg";
import mem3 from "./art/mem3.jpg";

const memesData = [
  { name: "Funny Cat", imagePath: mem1 },
  { name: "Grumpy Cat", imagePath: mem2 },
  { name: "Success Kid", imagePath: mem3 },
];

const MemesData = () => {
  return (
    <div className="memesGallery">
      {memesData.map((meme, index) => (
        <div key={index} className="meme">
          <h3>{meme.name}</h3>
          <img src={meme.imagePath} alt={meme.name} className="memeImage" />
        </div>
      ))}
    </div>
  );
};

export default MemesData;
