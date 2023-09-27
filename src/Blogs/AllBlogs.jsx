import React, { useState } from "react";
import blogimage from "../Assets/blog.jpg";
import { Link } from "react-router-dom";

const blogsData = [
  {
    id: 1,
    title: "Blog 1",
    image: blogimage,
    description: "Description for Blog 1...",
  },
  {
    id: 2,
    title: "Blog 2",
    image: blogimage,
    description: "Description for Blog 2...",
  },
  {
    id: 3,
    title: "Blog 3",
    image: blogimage,
    description: "Description for Blog 1...",
  },
  {
    id: 4,
    title: "Blog 4",
    image: blogimage,
    description: "Description for Blog 2...",
  },
  {
    id: 5,
    title: "Blog 5",
    image: blogimage,
    description: "Description for Blog 1...",
  },
  {
    id: 6,
    title: "Blog 6",
    image: blogimage,
    description: "Description for Blog 2...",
  },
  {
    id: 7,
    title: "Blog 7",
    image: blogimage,
    description: "Description for Blog 1...",
  },
  {
    id: 8,
    title: "Blog 8",
    image: blogimage,
    description: "Description for Blog 2...",
  },
  {
    id: 9,
    title: "Blog 9",
    image: blogimage,
    description: "Description for Blog 1...",
  },
  {
    id: 10,
    title: "Blog 10",
    image: blogimage,
    description: "Description for Blog 2...",
  },
  {
    id: 11,
    title: "Blog 11",
    image: blogimage,
    description: "Description for Blog 1...",
  },
  {
    id: 12,
    title: "Blog 12",
    image: blogimage,
    description: "Description for Blog 2...",
  },
  {
    id: 13,
    title: "Blog 13",
    image: blogimage,
    description: "Description for Blog 1...",
  },
  {
    id: 14,
    title: "Blog 14",
    image: blogimage,
    description: "Description for Blog 2...",
  },
  {
    id: 15,
    title: "Blog 15",
    image: blogimage,
    description: "Description for Blog 1...",
  },
  {
    id: 16,
    title: "Blog 16",
    image: blogimage,
    description: "Description for Blog 2...",
  },
  {
    id: 17,
    title: "Blog 15",
    image: blogimage,
    description: "Description for Blog 1...",
  },
  {
    id: 18,
    title: "Blog 16",
    image: blogimage,
    description: "Description for Blog 2...",
  },
  {
    id: 19,
    title: "Blog 15",
    image: blogimage,
    description: "Description for Blog 1...",
  },
  {
    id: 20,
    title: "Blog 16",
    image: blogimage,
    description: "Description for Blog 2...",
  },
];

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
                  //   target="_blank"
                  //   rel="noopener noreferrer"
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
