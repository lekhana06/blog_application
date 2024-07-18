import { useEffect, useState } from "react";
import axios from "axios";
import "./Blogs.css";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [userdata, setUserData] = useState([]);

  const getBlogsData = async () => {
    const res1 = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const res2 = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res1?.data);
    setBlogsData(res1?.data);
    setUserData(res2?.data);
  };

  useEffect(() => {
    getBlogsData();
  }, []);
  return (
    <div className="container">
      <div className="d-flex justify-content-between mb-3">
        <h2 className="header">List of Blogs</h2>
      </div>
      <div class="list-group">
        {blogsData?.map((el, i) => (
          <div class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{el?.title}</h5>
              <small>
                <Link to={`/blogsDetails/${el.id}`} className="" key={el.id}>
                  View
                </Link>
              </small>
            </div>
            <p class="mb-1">{el?.body}</p>
            <div class="d-flex justify-content-end">
              {userdata?.map(
                (item, i) =>
                  item.id === el.userId && (
                    <Link
                      to={`/userDetail/${el.userId}/${item.name}`}
                      class="text-body-secondary"
                    >
                      By: {item.name}
                    </Link>
                  )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blogs;
