import React, { useState } from "react";
import blogsdata from "../../../Blogs/Blogs.json";
import DashNavbar from "../../compo/Navbar/DashNavbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Addblog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleAddBlog = () => {
    if (image === "" || title === "" || content === "") {
      toast.warn("Image, title, and description are required");
      return;
    }

    const newBlog = {
      id: blogsdata.length > 0 ? blogsdata[blogsdata.length - 1].id + 1 : 1,
      image: image,
      title: title,
      description: content,
    };
    const existingBlogs = blogsdata;
    existingBlogs.push(newBlog);
    setTitle("");
    setContent("");
    setImage("");
    navigate("/dashboard-home");
  };

  return (
    <>
      {localStorage.getItem("username") === "Bishal77730" ? (
        <>
          <DashNavbar />
          <div className="container">
            <h1 style={{ marginTop: "50px" }}>Add a New Blog</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Image Link
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="content" className="form-label">
                  Content
                </label>
                <textarea
                  className="form-control"
                  id="content"
                  rows="5"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddBlog}
              >
                Add Blog
              </button>
            </form>
          </div>
        </>
      ) : (
        navigate("/dashboard-login")
      )}
    </>
  );
};

export default Addblog;
