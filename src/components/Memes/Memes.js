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
    // Zmiana argumentu z index na id
    dispatch(voteMeme(id, voteType)); // Użycie id zamiast indexu
    const newVotedMemes = { ...votedMemes, [id]: voteType }; // Zaktualizowanie głosu dla mema o podanym id

    // Update localStorage
    localStorage.setItem("votedMemes", JSON.stringify(newVotedMemes));
  };

  return (
    <div className="memes">
      {memes.map(
        (
          meme // Iterowanie przez memy bez używania indexu
        ) => (
          <div key={meme.id} className="meme">
            {" "}
            {/* Używanie id jako klucza */}
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
        )
      )}
    </div>
  );
};

export default Memes;
