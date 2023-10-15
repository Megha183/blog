import React, { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

function Blog({ author, date, title, content, id }) {
  const [likes, setLikes] = useState(0);
  

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <Card className="blog-card">
      <Card.Body>
        <Card.Title className="blog-title text-left">{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted text-left">By {author} | {date}</Card.Subtitle>
        <Card.Text className="blog-content text-left">{content}</Card.Text>
        <Button variant="primary" href={`/blog/${id}`}>Read More</Button>

        {/* Likes Section */}
        
        <div className="likes-section mt-3">
          <Button variant="outline-secondary" onClick={handleLike}>Like</Button>
          <Badge variant="secondary" className="ml-2">{likes} Likes</Badge>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Blog;
