import { useEffect, useState } from "react";
import axios from "axios";
import { Card, ListGroup } from "react-bootstrap";
import "./User.css";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const [usersData, setUsersData] = useState([]);

  const getUsersData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsersData(res?.data);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const handleClick = (id, name) => {
    navigate(`/userDetail/${id}/${name}`);
  };
  return (
    <div className="users-page">
      <div className="container">
        <h1>Users</h1>
        <Card style={{ width: "100%" }}>
          <ListGroup variant="flush">
            {usersData?.map((el, i) => (
              <ListGroup.Item
                onClick={() => handleClick(el?.id, el?.name)}
                key={i}
              >
                {el?.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};
export default Users;
