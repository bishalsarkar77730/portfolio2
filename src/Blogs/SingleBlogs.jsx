import React from "react";
import { useParams } from "react-router-dom";
import "./SingleBlog.css";
import blogsData from "./Blogs.json";

const SingleBlogs = () => {
  const { id } = useParams();
  const blog = blogsData.find((blog) => blog?.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div class="container mt-4">
      <div class="card">
        <div class="row">
          <div class="col-md-6">
            <div class="card-body">
              <h1 class="card-title">{blog?.title}</h1>
              <p class="card-text">{blog?.description}</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="image-container">
              <img src={blog?.image} class="card-img" alt={blog?.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogs;
