// tagActions.js
export const ADD_TAG = 'ADD_TAG';

export const addTag = (postId, tag) => {
  return {
    type: ADD_TAG,
    payload: {
      postId,
      tag,
    },
  };
};

