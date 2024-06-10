import { SET_MEMES, SET_VOTED_MEMES, VOTE_MEME } from "./actions";

const initialState = {
  memes: [],
  votedMemes: {},
};

const memeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MEMES:
      return { ...state, memes: action.payload };
    case SET_VOTED_MEMES:
      return { ...state, votedMemes: action.payload };
    case VOTE_MEME:
      const { id, voteType } = action.payload;
      const newMemes = state.memes.map((meme) => {
        if (meme.id === id) {
          return {
            ...meme,
            upvotes: voteType === "upvote" ? meme.upvotes + 1 : meme.upvotes,
            downvotes:
              voteType === "downvote" ? meme.downvotes + 1 : meme.downvotes,
          };
        }
        return meme;
      });
      return {
        ...state,
        memes: newMemes,
        votedMemes: { ...state.votedMemes, [id]: voteType },
      };
    default:
      return state;
  }
};

export default memeReducer;
