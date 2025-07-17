import { useEffect, useState } from "react";
import { Row, Col } from "antd";
import UserCard from "./components/UserCard";
import EditUserModal from "./components/EditUserModal";

export default function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [likedUsers, setLikedUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSave = (updatedUser) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
    );
    setEditingUser(null);
  };

  const handleLike = (user) => {
    setLikedUsers((prev) =>
      prev.includes(user.id)
        ? prev.filter((id) => id !== user.id)
        : [...prev, user.id]
    );
  };
  const handleDelete = (userToDelete) => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== userToDelete.id)
    );
  };

  return (
    <>
      <Row gutter={[36, 36]} style={{ padding: "1rem", justify: "center" }}>
        {users.map((user) => (
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={6}
            key={user.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <UserCard
              user={user}
              onEdit={() => setEditingUser(user)}
              isLiked={likedUsers.includes(user.id)}
              onDelete={handleDelete}
              onLike={handleLike}
            />
          </Col>
        ))}
      </Row>

      {editingUser && (
        <EditUserModal
          user={editingUser}
          onCancel={() => setEditingUser(null)}
          onSave={handleSave}
        />
      )}
    </>
  );
}
