import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SingleBlogPage.css';

const AuthorBlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs/author')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the blogs:', error);
      });
  }, []);

  return (
    <div className='custom-bg-color'>
    <div className="blogs-container  ">
      {blogs.map(blog => (
        <div key={blog._id} className="blog">
          <h1>{blog.title}</h1>
          <br></br>
          <br></br>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          <br></br>
          <br></br>
          <br></br>
        </div>
        
      ))}
    </div>
    </div>
  );
}

export default AuthorBlogsPage;