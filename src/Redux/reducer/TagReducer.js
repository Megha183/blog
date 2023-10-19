// tagReducer.js
import { ADD_TAG } from '../Actions/TagActions';

const initialState = {
  tags: {},
};

const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TAG:
      const { postId, tag } = action.payload;
      const postTags = state.tags[postId] || [];
      return {
        ...state,
        tags: {
          ...state.tags,
          [postId]: [...postTags, tag],
        },
      };
    default:
      return state;
  }
};

export default tagReducer;
