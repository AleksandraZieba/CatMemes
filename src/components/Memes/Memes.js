import React, { useState, useEffect } from "react";
import memesData from "../../memesData";
import "./Memes.css";

const Memes = () => {
  const [memes, setMemes] = useState([]);
  const [votedMemes, setVotedMemes] = useState({}); // Track user votes

  useEffect(() => {
    const storedMemes = localStorage.getItem("memes");
    if (storedMemes) {
      setMemes(JSON.parse(storedMemes));
    } else {
      setMemes(memesData);
    }

    const storedVotes = localStorage.getItem("votedMemes");
    if (storedVotes) {
      setVotedMemes(JSON.parse(storedVotes));
    }
  }, []);

  const handleVote = (index, voteType) => {
    const newMemes = [...memes];
    const newVotedMemes = { ...votedMemes };

    if (newVotedMemes[index] === voteType) {
      // If user clicks the same vote, undo the vote
      newVotedMemes[index] = null;
      if (voteType === "upvote") {
        newMemes[index].upvotes -= 1;
      } else {
        newMemes[index].downvotes -= 1;
      }
    } else {
      // If user clicks a different vote or no vote, apply the vote
      if (newVotedMemes[index] === "upvote") {
        newMemes[index].upvotes -= 1;
      } else if (newVotedMemes[index] === "downvote") {
        newMemes[index].downvotes -= 1;
      }
      newVotedMemes[index] = voteType;
      if (voteType === "upvote") {
        newMemes[index].upvotes += 1;
      } else {
        newMemes[index].downvotes += 1;
      }
    }

    setMemes(newMemes);
    setVotedMemes(newVotedMemes);

    // Update both memes and votedMemes in localStorage
    localStorage.setItem("memes", JSON.stringify(newMemes));
    localStorage.setItem("votedMemes", JSON.stringify(newVotedMemes));
  };

  return (
    <div className="memes">
      {memes.map((meme, index) => (
        <div key={index} className="meme">
          <h3>{meme.title}</h3>
          <img src={meme.imagePath} alt={meme.title} className="memeImage" />
          <div className="memeButtons">
            <button
              onClick={() => handleVote(index, "upvote")}
              className={votedMemes[index] === "upvote" ? "voted" : ""}
            >
              Lubię to
            </button>
            <span>{meme.upvotes}</span>
            <button
              onClick={() => handleVote(index, "downvote")}
              className={votedMemes[index] === "downvote" ? "voted" : ""}
            >
              Nie lubię tego
            </button>
            <span>{meme.downvotes}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Memes;
