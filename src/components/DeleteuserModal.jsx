import React, { useState } from "react";
import UserCard from "./UserCard";
import { Row, Col } from "antd";

const initialUsers = [
  {
    id: 1,
    username: "johndoe",
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
    website: "johndoe.com",
  },
];

export default function UserList() {
  const [users, setUsers] = useState(initialUsers);
  const [likedUsers, setLikedUsers] = useState([]);

  const handleDelete = (userToDelete) => {
    setUsers(users.filter((user) => user.id !== userToDelete.id));
  };

  const handleLike = (userToLike) => {
    if (likedUsers.includes(userToLike.id)) {
      setLikedUsers(likedUsers.filter((id) => id !== userToLike.id));
    } else {
      setLikedUsers([...likedUsers, userToLike.id]);
    }
  };

  const handleEdit = (user) => {
    alert(`Editing user: ${user.name}`);
  };

  return (
    <Row gutter={[16, 16]}>
      {users.map((user) => (
        <Col key={user.id}>
          <UserCard
            user={user}
            onDelete={handleDelete}
            onLike={handleLike}
            onEdit={handleEdit}
            isLiked={likedUsers.includes(user.id)}
          />
        </Col>
      ))}
    </Row>
  );
}
