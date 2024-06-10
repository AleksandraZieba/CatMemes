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
      if (memeToUpdateIndex === -1) return state; // Meme not found, return current state
      const updatedMemes = [...state.memes];
      const updatedMeme = { ...updatedMemes[memeToUpdateIndex] };
      if (state.votedMemes[id] === voteType) {
        updatedMeme[voteType === "upvote" ? "upvotes" : "downvotes"] -= 1;
        state.votedMemes[id] = null;
      } else {
        if (state.votedMemes[id] === "upvote") {
          updatedMeme.upvotes -= 1;
        } else if (state.votedMemes[id] === "downvote") {
          updatedMeme.downvotes -= 1;
        }
        state.votedMemes[id] = voteType;
        updatedMeme[voteType === "upvote" ? "upvotes" : "downvotes"] += 1;
      }
      updatedMemes[memeToUpdateIndex] = updatedMeme;

      return {
        ...state,
        memes: updatedMemes,
      };
    case "UPDATE_VOTED_MEMES_IN_LOCAL_STORAGE":
      localStorage.setItem("votedMemes", JSON.stringify(action.payload));
      return {
        ...state,
        votedMemes: action.payload,
      };
    default:
      return state;
  }
};

export default memesReducer;
