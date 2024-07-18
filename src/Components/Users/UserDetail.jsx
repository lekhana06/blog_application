import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const { name } = useParams();
  const [postsData, setPostsData] = useState([]);
  const [commentdata, setCommentData] = useState([]);

  const getData = async () => {
    const response1 = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}/posts`
    );
    setPostsData(response1?.data);
    const response2 = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}/comments`
    );
    setCommentData(response2?.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h1 className="header">{name}</h1>
      <div class="d-flex mt-5">
        <div>
          <h5 className="post-header">posts</h5>
          <div class="list-group">
            {postsData?.map((el, i) => (
              <Link
                to={`/blogsDetails/${el.id}`}
                className="list-group-item"
                key={el.id}
              >
                {el.title}
              </Link>
            ))}
          </div>
        </div>
        <div class="ms-2">
          <h6 className="comment-header">comments</h6>
          <div class="list-group">
            {commentdata?.map((el, i) => (
              <a class="list-group-item">{el.body}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserDetail;
