import { setMemes, setVotedMemes, voteMeme } from "./actions";

const initialState = {
  memes: [],
  votedMemes: {},
};

const memeReducer = (state = initialState, action) => {
  switch (action.type) {
    case setMemes:
      return { ...state, memes: action.payload };
    case setVotedMemes:
      return { ...state, votedMemes: action.payload };
    case voteMeme:
      const { index, voteType } = action.payload;
      const newMemes = [...state.memes];
      const newVotedMemes = { ...state.votedMemes };

      if (newVotedMemes[index] === voteType) {
        newVotedMemes[index] = null;
        if (voteType === "upvote") {
          newMemes[index].upvotes -= 1;
        } else {
          newMemes[index].downvotes -= 1;
        }
      } else {
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

      return { ...state, memes: newMemes, votedMemes: newVotedMemes };
    default:
      return state;
  }
};

export default memeReducer;
