import axios from "axios";
import "./Blogs.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogsDetails = () => {
  const { id } = useParams();
  const [postsData, setPostsData] = useState({});
  const [commentdata, setCommentData] = useState([]);

  const getBlogData = async () => {
    const response1 = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    setPostsData(response1?.data);
    const response2 = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    setCommentData(response2?.data);
  };

  useEffect(() => {
    getBlogData();
  }, []);

  const filteredComments = commentdata.filter(
    (comment) => comment.postId === parseInt(id, 10)
  );

  return (
    <div class="container">
      <h1 className="header">{postsData?.title}</h1>
      <div class="d-flex mt-5">
        <div className="post-body">{postsData?.body}</div>
        <div class="ms-2">
          <h6 className="comment-header">comments</h6>
          <div class="list-group">
            {commentdata?.map((el, i) => (
              <div class="list-group-item d-flex flex-column">
                <p className="comment-body">{el.body}</p>
                <div class="d-flex justify-content-end">
                  <small>
                    <em>by {el.email}</em>
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsDetails;
