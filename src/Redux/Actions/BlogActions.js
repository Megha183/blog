import { useSelector } from "react-redux";
import { ADD_BLOG_POST } from "../ActionTypes/BlogTypes";
import axios from 'axios';



export const addBlogPost = (newBlogPost) => {
    return {
      type: ADD_BLOG_POST,
      payload: newBlogPost,
    };
  };
  
  export const addBlogPostAsync = (newBlogPost, userId) => {
    return (dispatch) => {
      axios
        .post(`http://localhost:3001/users/${userId}/blogs`, newBlogPost) // Adjust the API endpoint accordingly
        .then((response) => {
          dispatch(addBlogPost(response.data)); // Dispatch an action to update the state with the newly added blog post
        })
        .catch((error) => {
          console.error('Error adding blog post:', error);
        });
    };
  };