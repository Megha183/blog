import React from 'react';
import { Card } from 'react-bootstrap';

function TagBox({ tags }) {
  return (
    <Card className="tags-box">
      <Card.Body>
        <h5>Tags</h5>
        <ul className="list-unstyled">
          {tags.map((tag, index) => (
            <li key={index}><a href="#">{tag}</a></li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default TagBox;
