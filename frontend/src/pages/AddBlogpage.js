import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleContentChange = (value) => {
    setContent(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      title,
      content
    };

    axios.post('http://localhost:5000/api/blogs', newBlog)
      .then(response => {
        console.log(response.data);
        alert("Blog post added successfully!");
        setTitle("");
        setContent("");
      })
      .catch(error => {
        console.error("There was an error creating the blog post:", error);
        alert("There was an error while adding the blog post. Please try again later.");
      });
  }

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#88c2df',
    margin: '0',
    height: '100vh',
  };

  return (
    <div style={containerStyle}>
      <br /><br /><br /><br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            className="form-control"
            id="content"
            rows="5"
            value={content}
            onChange={e => handleContentChange(e.target.value)}
            placeholder="Enter the content of your blog post"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Add Blog</button>
      </form>
    </div>
  );
}

export default AddBlog;
