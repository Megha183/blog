import React,{useState} from 'react';
import Blog from './Blog';
import TagBox from '../Tag/TagBox'; // Import the TagBox component

function Blogs() {
    const [blogs, setBlogs] = useState([
        {
          id: 1,
          author: 'John Doe',
          date: 'October 15, 2023',
          title: 'Lorem Ipsum Blog',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          tags: ['Technology', 'Programming', 'Web Development'],
          likes: 0, // Initialize likes for each blog
        },
        {
          id: 2,
          author: 'Jane Smith',
          date: 'October 12, 2023',
          title: 'Another Blog Post',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          tags: ['Travel', 'Food', 'Adventure'],
          likes: 0, // Initialize likes for each blog
        },
        // Add more blog entries as needed
      ]);
    
  const tags = [...new Set(blogs.flatMap(blog => blog.tags))]; // Extract unique tags

  return (
    <div className="container">
    <div className="row">
      <div className="col-md-8">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            author={blog.author}
            date={blog.date}
            title={blog.title}
            content={blog.content}
            id={blog.id}
          />
        ))}
      </div>

      {/* Right Side: Tag Box */}
      <div className="col-md-4">
        <TagBox tags={tags} />
      </div>
    </div>
  </div>
  );
}

export default Blogs;
