import React from 'react';
import { Link } from 'react-router-dom';
import './View.css';

function View() {
  return (
    <div className="blog-view-container">
      <h1 className="blog-post-title">Title of the Blog Post</h1>
      <p className="blog-post-meta">Posted on 11-02-2222 by Megha</p>
      <p className="blog-post-content">
        In this code, blogPosts is an array of sample blog post objects. The View component uses the useParams hook from React Router to get the id parameter from the URL. It then finds the corresponding blog post by matching the id with the posts' IDs.

        Make sure you have React Router set up to handle the routing and parameter passing to this component. You can customize the blog post data and rendering as needed for your specific use case.
      </p>
      <div className="like-and-back">
        <div className="like-button">
        <button type="button" class="btn btn-success">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
</svg>
        Button
      </button>
        </div>
        <Link to="/" className="back-to-blog-link">
          Back to Blog
        </Link>
      </div>
      <div className="comment-section">
        <h2 className="comment-title">Comments</h2>
        <div className="comments">
          <div className="comment">
            <div className="comment-author">John Doe</div>
            <div className="comment-content">
              This is a great blog post! Thanks for sharing.
            </div>
          </div>
          <div className="comment">
            <div className="comment-author">Jane Smith</div>
            <div className="comment-content">
              I found the information here very useful.
            </div>
          </div>
          {/* Add more comments as needed */}
        </div>
        <div className="comment-form">
          <h3 className="comment-form-title">Add a Comment</h3>
          <form>
            <input type="text" placeholder="Your Name" className="comment-input" />
            <textarea placeholder="Your Comment" className="comment-textarea"></textarea>
            <button className="comment-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default View;
