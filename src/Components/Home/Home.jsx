import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        <h1>Welcome to Blogs Application</h1>
        <ul>
          <li>
            <Link to={"/blogs"}>View List of Blogs</Link>
          </li>
          <li>
            <Link to={"/users"}>View List of Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Home;
