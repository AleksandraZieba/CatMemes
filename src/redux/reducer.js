// reducers.js
const initialState = {
  memes: [],
  votedMemes: {},
};

const memesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MEMES":
      return {
        ...state,
        memes: action.payload,
      };
    case "SET_VOTED_MEMES":
      return {
        ...state,
        votedMemes: action.payload,
      };
    case "VOTE_MEME":
      const { id, voteType } = action.payload;
      const memeToUpdateIndex = state.memes.findIndex((meme) => meme.id === id);
      if (memeToUpdateIndex === -1) return state;

      const updatedMemes = [...state.memes];
      const updatedMeme = { ...updatedMemes[memeToUpdateIndex] };

      // Remove previous vote
      if (state.votedMemes[id]) {
        if (state.votedMemes[id] === "upvote") {
          updatedMeme.upvotes -= 1;
        } else if (state.votedMemes[id] === "downvote") {
          updatedMeme.downvotes -= 1;
        }
      }

      if (state.votedMemes[id] !== voteType) {
        if (voteType === "upvote") {
          updatedMeme.upvotes += 1;
        } else if (voteType === "downvote") {
          updatedMeme.downvotes += 1;
        }
      }

      updatedMemes[memeToUpdateIndex] = updatedMeme;

      const newVotedMemes = { ...state.votedMemes, [id]: voteType };
      localStorage.setItem("votedMemes", JSON.stringify(newVotedMemes));
      localStorage.setItem("memes", JSON.stringify(updatedMemes));

      return {
        ...state,
        memes: updatedMemes,
        votedMemes: newVotedMemes,
      };
    default:
      return state;
  }
};

export default memesReducer;
