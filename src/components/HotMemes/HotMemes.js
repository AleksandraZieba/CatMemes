import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVotedMemes, voteMeme } from "../../redux/actions";
import { getMemes, getVotedMemes } from "../../redux/selectors";

const HotMemes = () => {
  const dispatch = useDispatch();
  const memes = useSelector(getMemes);
  const votedMemes = useSelector(getVotedMemes);
  const hotMemes = memes.filter((meme) => meme.upvotes - meme.downvotes > 5);

  useEffect(() => {
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
      {hotMemes.map((meme) => (
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

export default HotMemes;
