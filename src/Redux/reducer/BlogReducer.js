import { ADD_BLOG_POST } from '../ActionTypes/BlogTypes';

const initialState = {
  blogPosts: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG_POST:
      return {
        ...state,
        blogPosts: [...state.blogPosts, action.payload],
      };
    default:
      return state;
  }
};

export default blogReducer;
