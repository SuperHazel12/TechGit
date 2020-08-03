import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "../components/browse.css";
import DP from "../assets/DP.png";
import { useFormik } from "formik";
import { PostList } from "./PostList";
import { Divider } from "semantic-ui-react";

Modal.setAppElement("#root");

const initialValues = {
    title: "",
    link: "",
    body: "",
}

const onSubmit = values => {
  console.log('Form data', values)
}

const validate = values => {
  let errors = {}

  if(!values.title) {
    errors.title = 'Required'
  }

  if(!values.body) {
    errors.body = 'Required'
  }

  return errors
}
function Browse() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts').then(response => 
      response.json().then(data => {
      setPosts(data.posts);
      })
    );
  }, []);

  console.log(posts);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate 
  });

  //console.log('Form values', formik.values)
  const [CreatePost, setCreatePost] = useState(false);
  return (
    <div>
      <div className="browse">
      <h1 className="latest">Latest</h1>
        <div class="ui hidden divider">
        <PostList posts={posts} />
        </div>
      </div>
    <div className="post">
      <div className="row">
        <img src={DP} className="DP" />
        <h4 className="name">Toma Read</h4>
        <h6 className="followers">2k Followers</h6>
        <h6 className="following">2k Following</h6>
      </div>
      <div>
        <button onClick={() => setCreatePost(true)} className="button">
          Create a Post
        </button>
        <div>
          <Modal
            isOpen={CreatePost}
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => setCreatePost(false)}
            style={{
              overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "gray",
                opacity: 0.8,
              },
              content: {
                position: "absolute",
                border: "1px solid #ccc",
                background: "#fff",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "4px",
                outline: "none",
                padding: "20px",
              },
            }}
            className="Modal"
          >
            <div className="modalheader">
              <p className="header">Create a Post</p>
            </div>

            <div>
              <form onSubmit={formik.handleSubmit}>
                <label htmlFor= "title" className="label">Title</label>
                <input
                  type="text"
                  id="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                  className="input"
                />

                <label htmlFor= "link" className="label">Link</label>
                <input
                  type="text"
                  id="link"
                  onChange={formik.handleChange}
                  value={formik.values.link}
                  className="input"
                />

                <label htmlFor= "body" className="label">Body</label>
                <textarea
                  type="text"
                  id="body"
                  onChange={formik.handleChange}
                  value={formik.values.body}
                  className="inputbody"
                />
              </form>
            </div>
            <div className="button-container">
            <button type="Submit" className='publish'>Publish</button>
            <button onClick={() => setCreatePost(false)} className='buttonclose'>Close</button>
            </div>
          </Modal>
        </div>
      </div>
      <div>
        <button className="profilebutton">View Profile</button>
      </div>
    </div>
    </div>
  );
}

export default Browse;
