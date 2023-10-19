import React, { useState } from 'react';
import { Card, Button, Badge,Row,Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


function Blog({ author, date, title, content, id }) {
  const [likes, setLikes] = useState(0);
  

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <Row className="my-5">
    <Col md={8} className="mx-auto">
      <Card className="blog-card shadow">
        <Card.Body>
          <Card.Title className="blog-title">{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {date} by {author}
          </Card.Subtitle>
          <Card.Text className="blog-content">{content}</Card.Text>
          <Link to="/viewBlog">
            <Button variant="primary">Read More</Button>
          </Link>
          <div className="likes-section mt-3">
            <Button variant="danger" onClick={handleLike}>
              <i className="bi bi-heart-fill"></i>
            </Button>
            <span className="likes-count">{likes} Likes</span>
          </div>
          <div className="tags-section mt-3">
            <Badge variant="info" className="tag-badge">
               abcd
            </Badge>
            <Badge variant="info" className="tag-badge">
              Tag: efgh
            </Badge>
          </div>
        </Card.Body>
      </Card>
    </Col>
  </Row>
  );
}

export default Blog;

