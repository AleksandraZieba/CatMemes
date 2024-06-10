import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMemes, setVotedMemes, voteMeme } from "../../redux/actions";
import { getMemes, getVotedMemes } from "../../redux/selectors";
import memesData from "../../memesData";
import "./Memes.css";

const Memes = () => {
  const dispatch = useDispatch();
  const memes = useSelector(getMemes);
  const votedMemes = useSelector(getVotedMemes);

  useEffect(() => {
    const storedMemes = localStorage.getItem("memes");
    if (storedMemes) {
      dispatch(setMemes(JSON.parse(storedMemes)));
    } else {
      dispatch(setMemes(memesData));
    }

    const storedVotes = localStorage.getItem("votedMemes");
    if (storedVotes) {
      dispatch(setVotedMemes(JSON.parse(storedVotes)));
    }
  }, [dispatch]);

  const handleVote = (id, voteType) => {
    const currentVote = votedMemes[id];

    if (currentVote === voteType) {
      dispatch(voteMeme(id, null));
    } else {
      dispatch(voteMeme(id, voteType));
    }
  };

  return (
    <div className="memes">
      {memes.map((meme) => (
        <div key={meme.id} className="meme">
          <h3>{meme.title}</h3>
          <img src={meme.imagePath} alt={meme.title} className="memeImage" />
          <div className="memeButtons">
            <button
              onClick={() => handleVote(meme.id, "upvote")}
              className={votedMemes[meme.id] === "upvote" ? "voted" : ""}
            >
              Lubię to
            </button>
            <span className="voteNumber">{meme.upvotes}</span>
            <button
              onClick={() => handleVote(meme.id, "downvote")}
              className={votedMemes[meme.id] === "downvote" ? "voted" : ""}
            >
              Nie lubię tego
            </button>
            <span className="voteNumber">{meme.downvotes}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Memes;
