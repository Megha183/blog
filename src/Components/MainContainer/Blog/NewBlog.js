import React,{useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import './NewBlog.css'
import { useDispatch } from 'react-redux';

import { addBlogPostAsync } from '../../../Redux/Actions/BlogActions';
import { useSelector } from 'react-redux';
function NewBlog() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        content: '',
        tags: '',
      });
      const userId=useSelector(state=>state.auth.user.userId)

      console.log(userId,"..............haha");
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
        const dispatch = useDispatch();

        const handleSubmit = (e) => {
          e.preventDefault();
      
          const newBlogPost = {
            title: formData.title,
            description: formData.description,
            content: formData.content,
            tags: formData.tags.split(','),
            userId: userId// Get the user's ID from your Redux state after login.
          };
      
          dispatch(addBlogPostAsync(newBlogPost,userId)); // Dispatch the asynchronous action to add the blog post
        };
      
        console.log('Form data submitted:', formData);
  return (
    <div className="blog-form-container">
    <h2>Add a Blog</h2>
    <Form onSubmit={handleSubmit} className="blog-form">
      <Form.Group controlId="title">
        <Form.Label>Article Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>What is this article about?</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="content">
        <Form.Label>Write your article</Form.Label>
        <Form.Control
          as="textarea"
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="tags">
        <Form.Label>Enter Tags</Form.Label>
        <Form.Control
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button variant="success" type="submit">
        Publish Article
      </Button>
    </Form>
  </div>
  )
}

export default NewBlog

