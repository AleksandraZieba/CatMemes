export const setMemes = (memes) => ({
  type: "SET_MEMES",
  payload: memes,
});

export const setVotedMemes = (votedMemes) => ({
  type: "SET_VOTED_MEMES",
  payload: votedMemes,
});

export const voteMeme = (index, voteType) => ({
  type: "VOTE_MEME",
  payload: { index, voteType },
});

export const updateVotedMemesInLocalStorage = (votedMemes) => ({
  type: "UPDATE_VOTED_MEMES_IN_LOCAL_STORAGE",
  payload: votedMemes,
});
