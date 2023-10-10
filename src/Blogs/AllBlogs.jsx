import React, { useState } from "react";
import { Link } from "react-router-dom";
import blogsData from "./Blogs.json";

const PAGE_SIZE = 9;

const AllBlogs = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentBlogs = blogsData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(blogsData.length / PAGE_SIZE);

  const shouldDisplayPagination = totalPages > 1;

  return (
    <div className="container mt-4">
      <h1 className="text-center">Blogs Which Teach Us Alot</h1>
      <div className="row">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img src={blog.image} className="card-img-top" alt={blog.title} />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
                <Link
                  to="/one-blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {shouldDisplayPagination && (
        <div className="d-flex justify-content-center mt-4 mb-5">
          {currentPage > 1 && (
            <button
              className="btn btn-sm btn-primary mx-2"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          )}
          {Array.from({ length: totalPages }, (_, i) => {
            if (
              i === 0 ||
              i === currentPage - 1 ||
              i === currentPage - 2 ||
              i === currentPage ||
              i === currentPage + 1 ||
              i === totalPages - 1
            ) {
              return (
                <button
                  key={i}
                  className={`btn btn-sm btn-${
                    currentPage === i + 1 ? "primary" : "light"
                  } mx-2`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              );
            } else if (
              (i === currentPage - 3 && currentPage > 3) ||
              (i === currentPage + 2 && currentPage < totalPages - 2)
            ) {
              return <span key={i}>...</span>;
            }
            return null;
          })}
          {currentPage < totalPages && (
            <button
              className="btn btn-sm btn-primary mx-2"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AllBlogs;
