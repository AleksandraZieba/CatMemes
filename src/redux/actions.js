export const SET_MEMES = "SET_MEMES";
export const SET_VOTED_MEMES = "SET_VOTED_MEMES";
export const VOTE_MEME = "VOTE_MEME";

export const setMemes = (memes) => ({
  type: SET_MEMES,
  payload: memes,
});

export const setVotedMemes = (votedMemes) => ({
  type: SET_VOTED_MEMES,
  payload: votedMemes,
});

export const voteMeme = (id, voteType) => ({
  type: VOTE_MEME,
  payload: { id, voteType },
});
