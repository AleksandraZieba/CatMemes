import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setVotedMemes,
  voteMeme,
  updateVotedMemesInLocalStorage,
} from "../../redux/actions";
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

  const handleVote = (index, voteType) => {
    dispatch(voteMeme(index, voteType));
    dispatch(
      updateVotedMemesInLocalStorage({ ...votedMemes, [index]: voteType })
    );
  };

  return (
    <div className="memes">
      {hotMemes.map((meme, index) => (
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
            <span>{meme.upvotes}</span>
            <button
              onClick={() => handleVote(meme.id, "downvote")}
              className={votedMemes[meme.id] === "downvote" ? "voted" : ""}
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

export default HotMemes;